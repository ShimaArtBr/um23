// pdf.js — Geração de PDF via window.print()
// Expande todo o conteúdo, aciona impressão e restaura o estado.

export function gerarPDF() {
  var body = document.body;

  // ── 1. Expand all tab panels ──
  var panels = document.querySelectorAll('.map-panel');
  var prevPanels = [];
  panels.forEach(function (p) {
    prevPanels.push({ display: p.style.display, active: p.classList.contains('active') });
    p.style.display = 'block';
    p.classList.add('active');
  });

  // ── 2. Open all num-cards ──
  var cards = document.querySelectorAll('.num-card');
  var prevCards = [];
  cards.forEach(function (c) {
    prevCards.push(c.classList.contains('open'));
    c.classList.add('open');
  });

  // ── 3. Show all section-content (inner tabs) ──
  var contents = document.querySelectorAll('.section-content');
  var prevContents = [];
  contents.forEach(function (c) {
    prevContents.push(c.style.display);
    c.style.display = 'block';
  });

  // ── 4. Open all <details> ──
  var details = document.querySelectorAll('details');
  var prevDetails = [];
  details.forEach(function (d) {
    prevDetails.push(d.open);
    d.open = true;
  });

  // ── 5. Flag body & fire print ──
  body.classList.add('is-printing');
  window.print();

  // ── 6. Restore everything ──
  body.classList.remove('is-printing');

  panels.forEach(function (p, i) {
    p.style.display = prevPanels[i].display;
    if (!prevPanels[i].active) p.classList.remove('active');
  });

  cards.forEach(function (c, i) {
    if (!prevCards[i]) c.classList.remove('open');
  });

  contents.forEach(function (c, i) {
    c.style.display = prevContents[i];
  });

  details.forEach(function (d, i) {
    d.open = prevDetails[i];
  });
}
