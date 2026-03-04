/* ═══════════════════════════════════════════════════
   UM23 — Service Worker v2
   Estratégia: cache-first · offline-ready
═══════════════════════════════════════════════════ */
var CACHE = 'um23-v2';
var CORE  = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(CORE).catch(function(err) {
        console.warn('[SW] cache parcial:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k)    { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(function(res) {
          var copy = res.clone();
          caches.open(CACHE).then(function(c) { c.put(e.request, copy); });
          return res;
        })
        .catch(function() { return caches.match('/index.html'); })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(res) {
        if (res && res.status === 200) {
          var url = e.request.url;
          if (url.startsWith(self.location.origin) ||
              url.startsWith('https://fonts.googleapis.com') ||
              url.startsWith('https://fonts.gstatic.com')) {
            var copy = res.clone();
            caches.open(CACHE).then(function(c) { c.put(e.request, copy); });
          }
        }
        return res;
      }).catch(function() {
        var accept = e.request.headers.get('accept') || '';
        if (accept.includes('text/html')) return caches.match('/index.html');
      });
    })
  );
});
