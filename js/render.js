// render.js — Renderizacao HTML e logica de UI
// Depende de: engine.js, i18n.pt.js, texts.pt.js

import {
  PYT, VOWELS, MASTERS, KARMIC,
  normalize, reduceNum, getInitials, formatDob
} from './engine.js';
import { TEXTS } from './data/texts.pt.js';
import { t } from './data/i18n.pt.js';

// ── patch: render_patch (keystones) ──
import { CORNERSTONE_TEXTS, CAPSTONE_TEXTS, FIRST_VOWEL_TEXTS } from './data/keystones.js';

// ── patch: complementar_patch ──
import {
  BALANCE_TEXTS, RATIONAL_TEXTS, SUBCONSCIOUS_TEXTS,
  BALANCE_CONTEXT, RATIONAL_CONTEXT, SUBCONSCIOUS_CONTEXT
} from './data/complementar.js';

// ── patch: bridges_patch ──
import { BRIDGE_SCALE, BRIDGE_CONTEXT } from './data/bridges.pt.js';

// ── patch: planes_patch (C5) ──
import { PLANE_DOMINANT, PLANE_LOW, PLANE_SPECIAL } from './data/planes.pt.js';

// ── patch: cycles_patch (C6) ──
import { CYCLE_TEXTS, CYCLE_TRANSITION } from './data/cycles.pt.js';

// ── patch: pinnacles_patch (C7) ──
import { PINNACLE_TEXTS, CHALLENGE_TEXTS } from './data/pinnacles_pt.js';

// ── patch: karmicLessons_patch (C8) ──
import { KARMIC_LESSON_TEXTS, KARMIC_MULTIPLE_NOTE } from './data/karmicLessons_pt.js';

// ── patch: personalForecast_patch (C9) ──
import { PERSONAL_YEAR_TEXTS, PERSONAL_MONTH_TEXTS, PERSONAL_DAY_NOTE } from './data/personalForecast_pt.js';

/* ════════════════════════════════════════════════
   RENDER ENGINE
════════════════════════════════════════════════ */

function getKarmicKey(pre){ return 'k'+pre; }

var _activeTab = 'identidade';
var _globalEventsInit = false; // guard against listener leak on repeated calculate()

function renderResults(data){
  var emptyState = document.getElementById('emptyState');
  if(emptyState) emptyState.style.display='none';
  var sobrePanel = document.getElementById('sobrePanel');
  if(sobrePanel) sobrePanel.style.display='none';
  var resultsEl = document.getElementById('results');
  if(resultsEl) resultsEl.style.display='block';
  var page = document.querySelector('.page');
  if(page) page.classList.remove('sobre-active');
  _cardCounter = 0;

  var html = '';

  var allNums = [
    data.nameCalc.motivation, data.nameCalc.impression, data.nameCalc.expression,
    data.dateCalc.lifepath, data.dateCalc.day, data.dateCalc.attitude, data.powerR
  ];
  var hasMaster = allNums.some(function(n){ return MASTERS[n.final]; });
  var hasKarmic = allNums.some(function(n){ return KARMIC[n.pre]; });
  var tags = '';
  if(hasMaster) tags += '<span class="name-tag tag-master">'+t('masterBadge')+'</span>';
  if(hasKarmic) tags += '<span class="name-tag tag-karmic">'+t('karmicBadge')+'</span>';

  html += '<div class="name-profile">';
  html += '<div class="name-initials">'+escH(getInitials(data.name))+'</div>';
  html += '<div class="name-info">';
  html += '<div class="name-display">'+escH(data.name)+'</div>';
  html += '<div class="name-dob">'+t('dobLabel')+' '+escH(formatDob(data.dob))+'</div>';
  if(tags) html += '<div class="name-tags">'+tags+'</div>';
  html += '</div></div>';
  html += renderNumStrip(data);

  var tabs = ['identidade','jornada','presente','padroes','complementar','previsoes'];
  var tabLabels = [t('tabIdentidade'),t('tabJornada'),t('tabPresente'),t('tabPadroes'),t('secComplementar'),t('secPrevisoes')];
  var tabIcons = ['◈','◎','◉','◇','▫','◷'];
  html += '<div class="map-tabs" id="mapTabs">';
  tabs.forEach(function(tab,i){
    var act = tab===_activeTab ? ' active' : '';
    html += '<button class="map-tab'+act+'" data-tab="'+tab+'"><span class="map-tab-icon">'+tabIcons[i]+'</span><span>'+escH(tabLabels[i])+'</span></button>';
  });
  html += '</div>';
  html += '<div class="tab-nav-hint">← → para navegar entre abas</div>';

  html += '<div class="map-panel'+(_activeTab==='identidade'?' active':'')+'" id="panel-identidade">';
  html += renderIdentidade(data);
  html += '</div>';

  html += '<div class="map-panel'+(_activeTab==='jornada'?' active':'')+'" id="panel-jornada">';
  html += renderJornada(data);
  html += '</div>';

  html += '<div class="map-panel'+(_activeTab==='presente'?' active':'')+'" id="panel-presente">';
  html += renderPresente(data);
  html += '</div>';

  html += '<div class="map-panel'+(_activeTab==='padroes'?' active':'')+'" id="panel-padroes">';
  html += renderPadroes(data);
  html += '</div>';

  html += '<div class="map-panel'+(_activeTab==='complementar'?' active':'')+'" id="panel-complementar">';
  html += renderComplementar(data);
  html += '</div>';

  html += '<div class="map-panel'+(_activeTab==='previsoes'?' active':'')+'" id="panel-previsoes">';
  html += renderPrevisoes(data);
  html += '</div>';

  document.getElementById('results').innerHTML = html;
  attachCardEvents();
  attachTabEvents();
  if(window.innerWidth<820){
    var rp=document.getElementById('resultsPanel');
    if(rp) setTimeout(function(){rp.scrollIntoView({behavior:'smooth',block:'start'});},80);
  }
}

function attachTabEvents(){
  var TABS_ORDER=['identidade','jornada','presente','padroes','complementar','previsoes'];
  function switchTab(tab){
    _activeTab=tab;
    document.querySelectorAll('.map-tab').forEach(function(b){b.classList.remove('active');});
    document.querySelectorAll('.map-panel').forEach(function(p){p.classList.remove('active');p.style.display='none';});
    var btn=document.querySelector('.map-tab[data-tab="'+tab+'"]');
    if(btn){btn.classList.add('active');if(window.innerWidth<820)btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});}
    var panel=document.getElementById('panel-'+tab);
    if(panel){panel.style.display='block';panel.classList.add('active');}
  }
  document.querySelectorAll('.map-tab').forEach(function(btn){
    btn.addEventListener('click',function(){switchTab(this.getAttribute('data-tab'));});
  });
  if(!_globalEventsInit){
    _globalEventsInit = true;
    document.addEventListener('keydown',function(e){
      var res=document.getElementById('results');
      if(!res||res.style.display==='none') return;
      if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight') return;
      var focused=document.activeElement;
      if(focused&&(focused.tagName==='INPUT'||focused.tagName==='TEXTAREA')) return;
      var idx=TABS_ORDER.indexOf(_activeTab);
      if(e.key==='ArrowLeft'&&idx>0) switchTab(TABS_ORDER[idx-1]);
      if(e.key==='ArrowRight'&&idx<TABS_ORDER.length-1) switchTab(TABS_ORDER[idx+1]);
    });
    var resultsEl=document.getElementById('results');
    if(resultsEl){
      var touchStartX=0,touchStartY=0;
      resultsEl.addEventListener('touchstart',function(e){touchStartX=e.touches[0].clientX;touchStartY=e.touches[0].clientY;},{passive:true});
      resultsEl.addEventListener('touchend',function(e){
        var dx=e.changedTouches[0].clientX-touchStartX;
        var dy=e.changedTouches[0].clientY-touchStartY;
        if(Math.abs(dx)<60||Math.abs(dy)>Math.abs(dx)*0.8) return;
        var idx2=TABS_ORDER.indexOf(_activeTab);
        if(dx<0&&idx2<TABS_ORDER.length-1) switchTab(TABS_ORDER[idx2+1]);
        if(dx>0&&idx2>0) switchTab(TABS_ORDER[idx2-1]);
      },{passive:true});
    }
  }
  document.querySelectorAll('.num-card').forEach(function(card){
    var tabs=card.querySelectorAll('.section-tab');
    var panes=card.querySelectorAll('.section-content');
    tabs.forEach(function(tab,idx){
      tab.addEventListener('click', function(){
        tabs.forEach(function(t){t.classList.remove('active');});
        panes.forEach(function(p){p.style.display='none';});
        this.classList.add('active');
        if(panes[idx]) panes[idx].style.display='block';
      });
    });
  });
}

function renderNumStrip(data){
  var nums=[
    {n:data.dateCalc.lifepath.final,pre:data.dateCalc.lifepath.pre,lbl:'Caminho'},
    {n:data.nameCalc.expression.final,pre:data.nameCalc.expression.pre,lbl:'Expressão'},
    {n:data.nameCalc.motivation.final,pre:data.nameCalc.motivation.pre,lbl:'Motivação'},
    {n:data.nameCalc.impression.final,pre:data.nameCalc.impression.pre,lbl:'Impressão'},
    {n:data.dateCalc.attitude.final,pre:data.dateCalc.attitude.pre,lbl:'Atitude'},
    {n:data.powerR.final,pre:data.powerR.pre,lbl:'Poder'},
    {n:data.dateCalc.day.final,pre:data.dateCalc.day.pre,lbl:'Dia'}
  ];
  var html='<div class="num-strip">';
  nums.forEach(function(nd){
    var isMaster=!!MASTERS[nd.n],isKarmic=!!KARMIC[nd.pre];
    var cls='num-strip-item'+(isMaster?' is-master':isKarmic?' is-karmic':'');
    html+='<div class="'+cls+'"><div class="num-strip-n">'+nd.n+'</div><div class="num-strip-lbl">'+nd.lbl+'</div></div>';
  });
  return html+'</div>';
}

function renderMandala(data){
  var cx=110,cy=110,R=80,r=22,cr=32;
  var nodes=[
    {n:data.nameCalc.motivation.final,pre:data.nameCalc.motivation.pre,lbl:'MOT'},
    {n:data.nameCalc.impression.final,pre:data.nameCalc.impression.pre,lbl:'IMP'},
    {n:data.nameCalc.expression.final,pre:data.nameCalc.expression.pre,lbl:'EXP'},
    {n:data.dateCalc.day.final,pre:data.dateCalc.day.pre,lbl:'DIA'},
    {n:data.dateCalc.attitude.final,pre:data.dateCalc.attitude.pre,lbl:'ATI'},
    {n:data.powerR.final,pre:data.powerR.pre,lbl:'POD'},
    {n:data.dateCalc.lifepath.final,pre:data.dateCalc.lifepath.pre,lbl:'CAM'}
  ];
  var lp=data.dateCalc.lifepath.final,lpPre=data.dateCalc.lifepath.pre;
  var html='<div class="mandala-wrap"><svg class="mandala-svg" viewBox="0 0 220 220">';
  html+='<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="none" stroke="rgba(201,168,76,.10)" stroke-width="1"/>';
  html+='<circle cx="'+cx+'" cy="'+cy+'" r="'+(R*0.55)+'" fill="none" stroke="rgba(201,168,76,.06)" stroke-width="1"/>';
  nodes.forEach(function(_,i){
    var a=(i/nodes.length)*Math.PI*2-Math.PI/2;
    html+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+R*Math.cos(a)).toFixed(1)+'" y2="'+(cy+R*Math.sin(a)).toFixed(1)+'" stroke="rgba(201,168,76,.06)" stroke-width="1"/>';
  });
  nodes.forEach(function(nd,i){
    var a=(i/nodes.length)*Math.PI*2-Math.PI/2;
    var nx=(cx+R*Math.cos(a)).toFixed(1),ny=(cy+R*Math.sin(a)).toFixed(1);
    var isMaster=!!MASTERS[nd.n],isKarmic=!!KARMIC[nd.pre];
    var cFill=isKarmic?'rgba(181,43,10,.15)':isMaster?'rgba(201,168,76,.2)':'rgba(201,168,76,.08)';
    var cStroke=isKarmic?'rgba(181,43,10,.5)':isMaster?'rgba(201,168,76,.6)':'rgba(201,168,76,.2)';
    var numFill=isKarmic?'#b52b0a':isMaster?'#e8c97a':'#a08830';
    html+='<circle cx="'+nx+'" cy="'+ny+'" r="'+r+'" fill="'+cFill+'" stroke="'+cStroke+'" stroke-width="1"/>';
    html+='<text x="'+nx+'" y="'+(parseFloat(ny)-4)+'" font-size="13" fill="'+numFill+'" text-anchor="middle" dominant-baseline="central">'+nd.n+'</text>';
    html+='<text x="'+nx+'" y="'+(parseFloat(ny)+11)+'" font-size="5.5" fill="#6d6862" text-anchor="middle" dominant-baseline="central">'+nd.lbl+'</text>';
  });
  var lpKarmic=!!KARMIC[lpPre];
  var cStroke2=lpKarmic?'rgba(181,43,10,.6)':'rgba(201,168,76,.5)';
  var cFill2=lpKarmic?'#b52b0a':'#c9a84c';
  html+='<circle cx="'+cx+'" cy="'+cy+'" r="'+cr+'" fill="rgba(201,168,76,.12)" stroke="'+cStroke2+'" stroke-width="1.5"/>';
  html+='<text x="'+cx+'" y="'+(cy-5)+'" font-size="22" fill="'+cFill2+'" text-anchor="middle" dominant-baseline="central">'+lp+'</text>';
  html+='<text x="'+cx+'" y="'+(cy+14)+'" font-size="6" fill="#918c86" text-anchor="middle" dominant-baseline="central">VIDA</text>';
  html+='</svg>';
  html+='<div class="mandala-legend">';
  html+='<span class="mandala-legend-item"><span class="mandala-legend-dot" style="background:#a08830"></span>regular</span>';
  html+='<span class="mandala-legend-item"><span class="mandala-legend-dot" style="background:#c9a84c"></span>mestre</span>';
  html+='<span class="mandala-legend-item"><span class="mandala-legend-dot" style="background:#b52b0a"></span>kármico</span>';
  html+='</div></div>';
  return html;
}

function renderIdentidade(data){
  var html='';
  html+=renderMandala(data);
  html+=buildBlock(t('blockName'),'dot-name',[
    buildCard(data.nameCalc.motivation,t('roleMotivation'),'badge-name','motivation'),
    buildCard(data.nameCalc.impression,t('roleImpression'),'badge-name','impression'),
    buildCard(data.nameCalc.expression,t('roleExpression'),'badge-name','expression')
  ],'triple');
  html+=buildBlock(t('blockDate'),'dot-date',[
    buildCard(data.dateCalc.lifepath,t('roleLifepath'),'badge-date','lifepath'),
    buildCard(data.dateCalc.day,t('roleDay'),'badge-date','day'),
    buildCard(data.dateCalc.attitude,t('roleAttitude'),'badge-date','attitude')
  ],'triple');
  html+=buildBlock(t('blockSynth'),'dot-master',[
    buildCard(data.powerR,t('rolePower'),'badge-synth','power')
  ],'single');
  html+=buildSectionHead(t('secPedras'),'dot-name');
  html+='<div class="section-desc">'+escH(t('secPedrasDesc'))+'</div>';
  html+='<div class="tiles-grid mb20">';
  html+=buildLetterTile(
    data.cornerstone.letter,
    data.cornerstone.value.final,
    t('labelCornerstone'),
    t('labelCornerstoneSub'),
    CORNERSTONE_TEXTS[data.cornerstone.letter] || ''
  );
  html+=buildLetterTile(
    data.capstone.letter,
    data.capstone.value.final,
    t('labelCapstone'),
    t('labelCapstoneSub'),
    CAPSTONE_TEXTS[data.capstone.letter] || ''
  );
  html+=buildLetterTile(
    data.firstVowel.letter,
    data.firstVowel.value.final,
    t('labelFirstVowel'),
    t('labelFirstVowelSub'),
    FIRST_VOWEL_TEXTS[data.firstVowel.letter] || ''
  );
  html+='</div>';
  html+=renderNameBreakdown(data);
  return html;
}
function renderJornada(data){
  var html='', age=data.age;
  html+=buildSectionHead(t('secCiclos'),'dot-date');
  html+='<div class="cycles-timeline">';
  data.cycles.forEach(function(cyc,i){
    var span=cyc.end?(cyc.end-cyc.start):(80-cyc.start);
    var barW=Math.round(Math.min(span/36,1)*100);
    var isCurrent=age>=cyc.start&&(cyc.end===null||age<cyc.end);
    var isMaster=!!MASTERS[cyc.num];
    var ageRange=cyc.end?(cyc.start+' \u2013 '+cyc.end+' anos'):(cyc.start+'+ anos');
    html+='<div class="cycle-row'+(isCurrent?' current-cycle':'')+'">';
    html+='<div class="cycle-label">'+escH(cyc.label.replace('Ciclo ','C'))+'</div>';
    html+='<div class="cycle-num'+(isMaster?' is-master':'')+'">'+cyc.num+'</div>';
    html+='<div class="cycle-bar-track"><div class="cycle-bar-fill'+(isCurrent?' current':'')+'" style="width:'+barW+'%"></div></div>';
    html+='<div class="cycle-ages">'+ageRange+'</div>';
    if(isCurrent) html+='<div class="cycle-current-badge">AGORA</div>';
    html+='</div>';
  });
  html+='</div>';

  // ── bloco interpretativo do ciclo ativo — patch C6 ──
  html += buildCycleReading(data.cycles, data.age);

  html+=buildSectionHead(t('secPinnacles'),'dot-date');
  html+='<div class="pinnacles-chart">';
  data.pinnacles.forEach(function(p,i){
    var barH=Math.round((p.num/9)*120);
    var isCurrent=age>=p.start&&(p.end===null||age<p.end);
    var isMaster=!!MASTERS[p.num];
    var cls='pinnacle-bar'+(isCurrent?' current-pin':isMaster?' is-master':'');
    html+='<div class="pinnacle-bar-wrap"><div class="'+cls+'" style="height:'+barH+'px"><div class="pinnacle-bar-num">'+p.num+'</div></div></div>';
  });
  html+='<div class="pinnacle-footer">';
  data.pinnacles.forEach(function(p,i){
    var isCurrent=age>=p.start&&(p.end===null||age<p.end);
    var ages=p.end?(p.start+' \u2013 '+p.end):(p.start+'+');
    html+='<div class="pinnacle-footer-item"><span class="pinnacle-footer-label">P'+(i+1)+'</span><span class="pinnacle-footer-ages">'+ages+'</span>'+(isCurrent?'<span class="pinnacle-current-label">AGORA</span>':'')+'</div>';
  });
  html+='</div></div>';
  // ── patch C7 — leitura interpretativa do Pináculo ativo ──
  html += buildPinnacleReading(data.pinnacles, data.age);
  html+=buildSectionHead(t('secDesafios'),'dot-date');
  html+='<div class="tiles-grid cols4 mb20">';
  data.challenges.forEach(function(ch){ html+=buildSimpleTile({final:ch.num,pre:ch.num},ch.label,''); });
  html+='</div>';
  // ── patch C7 — leitura interpretativa do Desafio ativo ──
  html += buildChallengeReading(data.challenges, data.pinnacles, data.age);
  html+=buildSectionHead(t('secProjection'),'dot-master');
  html+='<div class="projection-wrap mb20"><div class="projection-title">'+t('yearLabel')+' \u00b7 '+t('numberLabel')+'</div>';
  var curYr=new Date().getFullYear();
  data.projection.forEach(function(p){
    var isCur=(p.year===curYr);
    var cls='projection-row'+(p.isMaster?' master':'')+(isCur?' current':'');
    html+='<div class="'+cls+'"><div class="proj-year">'+p.year+'</div><div class="proj-num">'+p.num+'</div><div class="proj-bar-track"><div class="proj-bar-fill" style="width:'+(p.num/9*100)+'%"></div></div>'+(isCur?'<div class="proj-current-tag">'+t('labelCurrentYear')+'</div>':'')+'</div>';
  });
  html+='</div>';
  return html;
}
function buildSectionHead(label, dotClass){
  return '<div class="block-header"><div class="block-dot '+dotClass+'"></div><div class="block-label">'+escH(label)+'</div><div class="block-line"></div></div>';
}
function buildLetterTile(letter, value, label, sub, interp){
  var isMaster = MASTERS[value] ? ' master' : '';
  var interpHtml = interp
    ? '<div class="s-tile-interp">'+escH(interp)+'</div>'
    : '';
  return '<div class="s-tile'+isMaster+' keystone-tile">'
    + '<div class="letter-tile-top">'
    +   '<span class="letter-big">'+escH(letter||'—')+'</span>'
    +   '<span class="letter-arrow">→</span>'
    +   '<span class="s-tile-num" style="font-size:1.4rem">'+value+'</span>'
    + '</div>'
    + '<div class="s-tile-label">'+escH(label)+'</div>'
    + '<div class="s-tile-sub">'+escH(sub)+'</div>'
    + interpHtml
    + '</div>';
}
function buildBridgeRow(label, num, contextKey){
  // Ícone de intensidade proporcional ao delta
  // delta 0   → sem dots (harmonia natural)
  // delta 1–2 → ●      (ajuste leve)
  // delta 3–4 → ●●     (tensão criativa)
  // delta 5+  → ●●●    (polaridade significativa)
  var dots = '';
  if      (num >= 5) dots = '<span class="bridge-dots bridge-dots--high" title="Polaridade significativa">●●●</span>';
  else if (num >= 3) dots = '<span class="bridge-dots bridge-dots--mid"  title="Tensão criativa">●●</span>';
  else if (num >= 1) dots = '<span class="bridge-dots bridge-dots--low"  title="Ajuste leve">●</span>';

  var detailsHtml = '';
  if(contextKey){
    var scaleText   = BRIDGE_SCALE[num]          || '';
    var contextText = BRIDGE_CONTEXT[contextKey] || '';
    if(scaleText || contextText){
      detailsHtml =
          '<details class="bridge-details essence-details">'
        + '<summary class="bridge-summary essence-summary">Interpretar esta ponte</summary>'
        + '<div class="bridge-interp essence-body">'
        +   (contextText ? '<p class="bridge-interp-context">'+escH(contextText)+'</p>' : '')
        +   (scaleText   ? '<p class="bridge-interp-scale">'+escH(scaleText)+'</p>'     : '')
        + '</div>'
        + '</details>';
    }
  }

  return ''
    + '<div class="bridge-row bridge-row--expandable">'
    +   '<div class="bridge-row-main">'
    +     '<div class="bridge-label">'+escH(label)+'</div>'
    +     '<div class="bridge-right">'
    +       dots
    +       '<div class="bridge-num">'+num+'</div>'
    +     '</div>'
    +   '</div>'
    +   detailsHtml
    + '</div>';
}
function buildSimpleTile(numResult, label, sub, extraClass){
  var n=numResult?numResult.final:0;
  var isMaster=MASTERS[n]?' master':'';
  var isKarmic=(numResult&&KARMIC[numResult.pre])?' karmic':'';
  var cls='s-tile'+(extraClass?' '+extraClass:'')+isMaster+isKarmic;
  return '<div class="'+cls+'">'
    +'<div class="s-tile-num">'+n+'</div>'
    +'<div class="s-tile-label">'+escH(label)+'</div>'
    +(sub?'<div class="s-tile-sub">'+escH(sub)+'</div>':'')
    +'</div>';

}

/* ════════════════════════════════════════════════
   HELPERS ADICIONADOS PELOS PATCHES
════════════════════════════════════════════════ */

// patch: complementar_patch — tile largo com texto interpretativo
function buildComplementarTile(numResult, label, sub, interp){
  var n = numResult ? numResult.final : 0;
  var isMaster = MASTERS[n] ? ' master' : '';
  var isKarmic = (numResult && KARMIC[numResult.pre]) ? ' karmic' : '';
  var interpHtml = interp
    ? '<div class="complementar-interp">'+escH(interp)+'</div>'
    : '';
  return '<div class="s-tile complementar-tile'+isMaster+isKarmic+'">'
    + '<div class="s-tile-num">'+n+'</div>'
    + '<div class="s-tile-label">'+escH(label)+'</div>'
    + '<div class="s-tile-sub">'+escH(sub)+'</div>'
    + interpHtml
    + '</div>';
}

// patch: planes_patch C5 — grade dos 4 planos com texto interpretativo
function buildPlanesBlock(planes){
  var pl     = planes;
  var counts = { fisico: pl.fisico||0, emocional: pl.emocional||0, mental: pl.mental||0, intuitivo: pl.intuitivo||0 };
  var keys   = ['fisico','emocional','mental','intuitivo'];

  var maxVal = Math.max(counts.fisico, counts.emocional, counts.mental, counts.intuitivo);
  var minVal = Math.min(counts.fisico, counts.emocional, counts.mental, counts.intuitivo);
  var total  = counts.fisico + counts.emocional + counts.mental + counts.intuitivo;

  var dominantKeys = keys.filter(function(k){ return counts[k] === maxVal; });
  var lowestKeys   = keys.filter(function(k){ return counts[k] === minVal; });

  // Equilíbrio: amplitude (max − min) ≤ 2 e total > 0
  var isBalanced = (maxVal - minVal) <= 2 && total > 0;

  // Plano de atenção: ausente (0) ou diferença ≥ 3 para o dominante
  var attentionKeys = lowestKeys.filter(function(k){
    return counts[k] === 0 || (maxVal - counts[k]) >= 3;
  });

  var plDefs = [
    { key: 'fisico',    icon: '🏔', label: t('planPhysical')  },
    { key: 'emocional', icon: '❤',  label: t('planEmotional') },
    { key: 'mental',    icon: '⚡', label: t('planMental')    },
    { key: 'intuitivo', icon: '✨', label: t('planIntuitive') }
  ];

  var html = '';

  // Grade dos 4 planos
  html += '<div class="elements-wrap mb20">';
  html += '<div class="elements-grid-4">';

  plDefs.forEach(function(p){
    var cnt   = counts[p.key];
    var isDom = !isBalanced && cnt === maxVal && maxVal > 0;
    var isLow = attentionKeys.indexOf(p.key) !== -1;
    var cellCls = 'el-cell'
      + (isDom ? ' dominant'     : '')
      + (isLow ? ' el-attention' : '');

    html += '<div class="'+cellCls+'">';
    html += '<span class="el-icon">'+p.icon+'</span>';
    html += '<div class="el-count">'+cnt+'</div>';
    html += '<div class="el-name">'+escH(p.label)+'</div>';
    if(isLow && !isDom){
      html += '<div class="el-attention-tag">atenção</div>';
    }
    html += '<div class="el-bar-wrap"><div class="el-bar" style="width:'
      + (maxVal ? Math.round(cnt / maxVal * 100) : 0) + '%"></div></div>';
    html += '</div>';
  });

  html += '</div>'; // fecha elements-grid-4

  // Texto expandível: dominante ou equilíbrio
  var interpText = '';
  if(isBalanced){
    interpText = PLANE_SPECIAL.equilibrio || '';
  } else if(dominantKeys.length === 1){
    interpText = PLANE_DOMINANT[dominantKeys[0]] || '';
  } else {
    // Dois planos empatados: usa o primeiro
    interpText = PLANE_DOMINANT[dominantKeys[0]] || '';
  }

  if(interpText){
    html += '<details class="essence-details plane-dominant-details">'
      + '<summary class="essence-summary">Interpretar configuração dos planos</summary>'
      + '<div class="essence-body">'
      + '<p>'+escH(interpText)+'</p>';

    // Notas dos planos de atenção
    attentionKeys.forEach(function(k){
      var lowText  = PLANE_LOW[k] || '';
      var noteText = '';
      if(counts[k] === 0 && k === 'fisico')      noteText = PLANE_SPECIAL.semFisico    || lowText;
      else if(counts[k] === 0 && k === 'intuitivo') noteText = PLANE_SPECIAL.semIntuitivo || lowText;
      else noteText = lowText;

      if(noteText){
        var plDef = plDefs.filter(function(p){ return p.key === k; })[0];
        html += '<div class="plane-low-note">'
          + '<span class="plane-low-label">'+escH(plDef.label)+'</span>'
          + '<p>'+escH(noteText)+'</p>'
          + '</div>';
      }
    });

    html += '</div></details>';
  }

  html += '</div>'; // fecha elements-wrap
  return html;
}
/* ════════════════════════════════════════════════════════
   patch C6 — helper buildCycleReading()
════════════════════════════════════════════════════════ */

function buildCycleReading(cycles, age) {
  // Encontra o ciclo ativo e seu índice de posição (0 = formativo, 1 = consolidação, 2 = conclusão)
  var activeCyc = null;
  var activeIdx = -1;
  cycles.forEach(function(cyc, i) {
    var current = age >= cyc.start && (cyc.end === null || age < cyc.end);
    if (current) { activeCyc = cyc; activeIdx = i; }
  });

  if (!activeCyc || activeIdx === -1) return '';

  var cycleMap  = CYCLE_TEXTS[activeIdx];
  var cycleText = cycleMap ? (cycleMap[activeCyc.num] || '') : '';
  if (!cycleText) return '';

  // Transição iminente: ciclo termina nos próximos 3 anos
  var isNearTransition = activeCyc.end !== null && (activeCyc.end - age) <= 3;

  var posLabel = activeIdx === 0
    ? 'Ciclo Formativo'
    : activeIdx === 1
    ? 'Ciclo de Consolidação'
    : 'Ciclo de Conclusão';

  var html = '';

  html += '<div class="cycle-reading mb20">';

  // Cabeçalho: número + rótulo de posição
  html += '<div class="cycle-reading-header">';
  html += '<span class="cycle-reading-num'+(!!MASTERS[activeCyc.num]?' is-master':'')+'">'
        + activeCyc.num + '</span>';
  html += '<div class="cycle-reading-meta">';
  html += '<span class="cycle-reading-pos">'+escH(posLabel)+'</span>';
  html += '<span class="cycle-reading-label">'+escH(activeCyc.label)+'</span>';
  html += '</div>';
  html += '</div>';

  // Texto interpretativo (expandível, aberto por padrão)
  html += '<details class="essence-details cycle-reading-details" open>';
  html += '<summary class="essence-summary">Ler este ciclo</summary>';
  html += '<div class="essence-body">';
  html += '<p class="cycle-reading-text">'+escH(cycleText)+'</p>';

  // Nota de transição iminente
  if (isNearTransition) {
    html += '<div class="cycle-transition-note">';
    html += '<span class="cycle-transition-label">Transição próxima</span>';
    html += '<p>'+escH(CYCLE_TRANSITION)+'</p>';
    html += '</div>';
  }

  html += '</div></details>';
  html += '</div>';

  return html;
}

/* ════════════════════════════════════════════════════════
   patch C7 — helpers buildPinnacleReading() + buildChallengeReading()
════════════════════════════════════════════════════════ */

function buildPinnacleReading(pinnacles, age) {
  var activeIdx = -1;
  pinnacles.forEach(function(p, i) {
    if (age >= p.start && (p.end === null || age < p.end)) activeIdx = i;
  });
  if (activeIdx === -1) return '';

  var posKeys = ['p1', 'p2', 'p3', 'p4'];
  var posLabels = ['Primeiro Pináculo', 'Segundo Pináculo', 'Terceiro Pináculo', 'Quarto Pináculo'];
  var phaseDesc = [
    'Estabelecimento · Primeiras provas',
    'Consolidação · Aprofundamento',
    'Expressão máxima · Contribuição',
    'Síntese · Legado'
  ];

  var activePinn = pinnacles[activeIdx];
  var posKey = posKeys[activeIdx];
  var textMap = PINNACLE_TEXTS[posKey];
  var activeText = textMap ? (textMap[activePinn.num] || '') : '';
  if (!activeText) return '';

  var html = '';

  // ── Bloco principal: Pináculo ativo ──
  html += '<div class="pinnacle-reading mb20">';
  html += '<div class="pinnacle-reading-header">';
  html += '<span class="pinnacle-reading-num' + (MASTERS[activePinn.num] ? ' is-master' : '') + '">'
        + activePinn.num + '</span>';
  html += '<div class="pinnacle-reading-meta">';
  html += '<span class="pinnacle-reading-pos">' + escH(posLabels[activeIdx]) + '</span>';
  html += '<span class="pinnacle-reading-phase">' + escH(phaseDesc[activeIdx]) + '</span>';
  var ageRange = activePinn.end
    ? activePinn.start + '\u2013' + activePinn.end + ' anos'
    : activePinn.start + '+ anos';
  html += '<span class="pinnacle-reading-ages">' + ageRange + ' <span class="pinnacle-reading-now">AGORA</span></span>';
  html += '</div>';
  html += '</div>';

  html += '<details class="essence-details pinnacle-reading-details" open>';
  html += '<summary class="essence-summary">Ler este pináculo</summary>';
  html += '<div class="essence-body">';
  html += '<p class="pinnacle-reading-text">' + escH(activeText) + '</p>';
  html += '</div></details>';
  html += '</div>';

  // ── Outros pináculos: colapsados ──
  var hasOthers = pinnacles.some(function(p, i) { return i !== activeIdx; });
  if (hasOthers) {
    html += '<details class="essence-details pinnacle-others-details">';
    html += '<summary class="essence-summary">Ver outros pináculos</summary>';
    html += '<div class="essence-body">';
    pinnacles.forEach(function(p, i) {
      if (i === activeIdx) return;
      var pKey = posKeys[i];
      var pText = PINNACLE_TEXTS[pKey] ? (PINNACLE_TEXTS[pKey][p.num] || '') : '';
      if (!pText) return;
      var ages = p.end
        ? p.start + '\u2013' + p.end + ' anos'
        : p.start + '+ anos';
      html += '<div class="pinnacle-other-item">';
      html += '<div class="pinnacle-other-header">';
      html += '<span class="pinnacle-other-num' + (MASTERS[p.num] ? ' is-master' : '') + '">' + p.num + '</span>';
      html += '<span class="pinnacle-other-label">' + escH(posLabels[i]) + '</span>';
      html += '<span class="pinnacle-other-ages">' + escH(ages) + '</span>';
      html += '</div>';
      html += '<p class="pinnacle-other-text">' + escH(pText) + '</p>';
      html += '</div>';
    });
    html += '</div></details>';
  }

  return html;
}

function buildChallengeReading(challenges, pinnacles, age) {
  // O Desafio ativo corresponde ao mesmo índice do Pináculo ativo.
  // D4 (índice 3) é o Desafio de Fluxo — ativo depois do P3.
  var activeIdx = -1;
  pinnacles.forEach(function(p, i) {
    if (age >= p.start && (p.end === null || age < p.end)) activeIdx = i;
  });

  // Mapeia: pináculo 0→desafio 0, 1→desafio 1, 2→desafio 2, 3→desafio 3
  var activeCh = challenges[activeIdx] || challenges[0];
  if (!activeCh) return '';

  var activeText = CHALLENGE_TEXTS[activeCh.num];
  if (!activeText) return '';

  var challengeLabels = ['Desafio 1', 'Desafio 2', 'Desafio 3', 'Desafio 4 (Fluxo)'];
  var activeLabel = challengeLabels[activeIdx] || activeCh.label;
  var isZero = (activeCh.num === 0);

  var html = '';

  // ── Bloco principal: Desafio ativo ──
  html += '<div class="challenge-reading mb20">';
  html += '<div class="pinnacle-reading-header' + (isZero ? ' challenge-zero-header' : '') + '">';
  html += '<span class="pinnacle-reading-num' + (isZero ? ' challenge-zero-num' : '') + '">'
        + activeCh.num + '</span>';
  html += '<div class="pinnacle-reading-meta">';
  html += '<span class="pinnacle-reading-pos">' + escH(activeLabel) + '</span>';
  html += '<span class="pinnacle-reading-phase">'
        + (isZero ? 'O desafio da escolha total' : 'Padrão de resistência desta fase')
        + '</span>';
  html += '<span class="pinnacle-reading-ages pinnacle-reading-now">FASE ATUAL</span>';
  html += '</div>';
  html += '</div>';

  html += '<details class="essence-details challenge-reading-details" open>';
  html += '<summary class="essence-summary">' + (isZero ? 'Ler o Desafio Zero' : 'Ler este desafio') + '</summary>';
  html += '<div class="essence-body">';
  html += '<p class="pinnacle-reading-text">' + escH(activeText) + '</p>';
  html += '</div></details>';
  html += '</div>';

  // ── Outros desafios: colapsados ──
  var hasOthers = challenges.some(function(ch, i) { return i !== activeIdx; });
  if (hasOthers) {
    html += '<details class="essence-details challenge-others-details">';
    html += '<summary class="essence-summary">Ver outros desafios</summary>';
    html += '<div class="essence-body">';
    challenges.forEach(function(ch, i) {
      if (i === activeIdx) return;
      var chText = CHALLENGE_TEXTS[ch.num];
      if (!chText) return;
      var lbl = challengeLabels[i] || ch.label;
      html += '<div class="pinnacle-other-item">';
      html += '<div class="pinnacle-other-header">';
      html += '<span class="pinnacle-other-num">' + ch.num + '</span>';
      html += '<span class="pinnacle-other-label">' + escH(lbl) + '</span>';
      html += '</div>';
      html += '<p class="pinnacle-other-text">' + escH(chText) + '</p>';
      html += '</div>';
    });
    html += '</div></details>';
  }

  return html;
}


function renderPresente(data){
  var html='', pd=data.personalDay;

  // ── ANO PESSOAL ──
  html+=buildSectionHead(t('secPersonalYear'),'dot-date');
  html+='<div class="tiles-grid cols2 mb20">';
  html+=buildSimpleTile(pd.year,t('labelPersonalYear'),String(pd.todayYear),'highlight');
  html+=buildSimpleTile(pd.month,'Mês Pessoal','','');
  html+='</div>';
  // patch C9 — leitura do Ano Pessoal
  html += buildPersonalYearReading(pd.year.final);

  // ── MÊS PESSOAL ──
  html+=buildSectionHead(t('secPersonalMonths'),'dot-date');
  var mNames=t('monthNames').split(',');
  html+='<div class="months-grid mb20">';
  data.trimestres.forEach(function(m){
    var isCurrent=(m.month===pd.todayMonth);
    var cls='month-tile'+(m.isMaster?' master':'')+(isCurrent?' current':'');
    html+='<div class="'+cls+'">';
    html+='<div class="month-name">'+escH(mNames[m.month-1]||m.month)+'</div>';
    html+='<div class="month-num">'+m.num+'</div>';
    if(m.isMaster) html+='<div class="month-tag">✦</div>';
    html+='</div>';
  });
  html+='</div>';
  // patch C9 — leitura do Mês Pessoal atual
  html += buildPersonalMonthReading(pd.month.final, pd.todayMonth, mNames);

  // ── DIA PESSOAL ──
  html+=buildSectionHead(t('secPersonalDay'),'dot-date');
  html+='<div class="tiles-grid mb20">';
  html+=buildSimpleTile(pd.day,t('personalDayLabel'),t('personalDayToday'),'highlight');
  html+='</div>';
  // patch C9 — nota contextual do Dia Pessoal
  html += buildPersonalDayNote(pd.day.final);

  return html;
}
function renderRadar(data){
  var els=data.elements;
  var vals=[els.fogo.count,els.ar.count,els.terra.count,els.agua.count];
  var maxV=Math.max.apply(null,vals.concat([1]));
  var cx=80,cy=80,R=55;
  var html='<div class="radar-wrap"><svg width="160" height="160" viewBox="0 0 160 160">';
  [0.33,0.66,1].forEach(function(frac){
    var rr=R*frac,pts=[];
    for(var i=0;i<4;i++){var a=(i/4)*Math.PI*2-Math.PI/2;pts.push((cx+rr*Math.cos(a)).toFixed(1)+','+(cy+rr*Math.sin(a)).toFixed(1));}
    html+='<polygon points="'+pts.join(' ')+'" fill="none" stroke="rgba(201,168,76,.12)" stroke-width="1"/>';
  });
  for(var i=0;i<4;i++){
    var a=(i/4)*Math.PI*2-Math.PI/2;
    html+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+R*Math.cos(a)).toFixed(1)+'" y2="'+(cy+R*Math.sin(a)).toFixed(1)+'" stroke="rgba(201,168,76,.10)" stroke-width="1"/>';
  }
  var datapts=[];
  for(var i=0;i<4;i++){var a=(i/4)*Math.PI*2-Math.PI/2;var fr=vals[i]/maxV;datapts.push((cx+R*fr*Math.cos(a)).toFixed(1)+','+(cy+R*fr*Math.sin(a)).toFixed(1));}
  html+='<polygon points="'+datapts.join(' ')+'" fill="rgba(201,168,76,.15)" stroke="rgba(201,168,76,.5)" stroke-width="1.5"/>';
  for(var i=0;i<4;i++){
    var a=(i/4)*Math.PI*2-Math.PI/2,fr=vals[i]/maxV;
    html+='<circle cx="'+(cx+R*fr*Math.cos(a)).toFixed(1)+'" cy="'+(cy+R*fr*Math.sin(a)).toFixed(1)+'" r="4" fill="#c9a84c" opacity="0.8"/>';
  }
  html+='</svg><div class="radar-legend">';
  var maxC=Math.max.apply(null,vals);
  var elDefs=[{icon:'Fogo',lbl:t('labelFogo')},{icon:'Ar',lbl:t('labelAr')},{icon:'Terra',lbl:t('labelTerra')},{icon:'Água',lbl:t('labelAgua')}];
  elDefs.forEach(function(e,i){
    var cnt=vals[i],isDom=cnt===maxC&&maxC>0;
    html+='<div class="radar-legend-item'+(isDom?' dominant':'')+'"><div class="radar-legend-name">'+escH(e.lbl)+(isDom?' ◆':'')+'</div><div class="radar-legend-count">'+cnt+'</div></div>';
  });
  html+='</div></div>';
  return html;
}

function renderPadroes(data){
  var html='';
  html+=buildSectionHead(t('secElements'),'dot-date');
  html+=renderRadar(data);
  html+=buildSectionHead(t('secTable'),'dot-name');
  var tbl=data.pythTable,maxT=Math.max.apply(null,[1,2,3,4,5,6,7,8,9].map(function(n){return tbl[n];}));
  html+='<div class="pyth-table-wrap mb20"><div class="pyth-table-title">'+t('secTable')+'</div><div class="pyth-table-grid">';
  for(var n=1;n<=9;n++) html+='<div class="pyth-cell'+(tbl[n]===maxT&&maxT>0?' max':'')+(tbl[n]===0?' zero':'')+'"><div class="pyth-n">'+n+'</div><div class="pyth-count">'+tbl[n]+'</div></div>';
  html+='</div><div class="pyth-bar-row">';
  for(var n=1;n<=9;n++){var h=maxT?Math.round(tbl[n]/maxT*20):0;html+='<div class="pyth-bar-cell"><div class="pyth-bar-inner" style="height:'+h+'px"></div></div>';}
  html+='</div></div>';
  html+=buildSectionHead(t('secPriority'),'dot-name');
  html+='<div class="priority-wrap mb20"><div class="priority-title">'+t('secPriority')+'</div>';
  var maxPri=data.priority[0]?data.priority[0].count:1;
  data.priority.forEach(function(p,i){
    html+='<div class="priority-row'+(i===0?' rank1':'')+'"><div class="priority-rank">'+(i+1)+'</div><div class="priority-num">'+p.num+'</div><div class="priority-bar-track"><div class="priority-bar-fill" style="width:'+(p.count/maxPri*100)+'%"></div></div><div class="priority-count">'+p.count+'x</div></div>';
  });
  html+='</div>';
  html+=buildSectionHead(t('secKarmicLessons'),'dot-karmic');
  // ── patch C8 — licoes karmicas expandiveis ──
  html += buildKarmicLessonsBlock(data.karmicLessons);
  return html;
}
/* ════════════════════════════════════════════════════════
   patch C8 — helper buildKarmicLessonsBlock()
════════════════════════════════════════════════════════ */

function buildKarmicLessonsBlock(karmicLessons) {
  var html = '';

  // Nenhuma lição — nome completo
  if (!karmicLessons.length) {
    html += '<div class="karmic-lessons mb20">';
    html += '<div class="karmic-lessons-nums"><span class="kl-none">' + escH('Nenhuma — todas as vibrações estão presentes no nome.') + '</span></div>';
    html += '</div>';
    return html;
  }

  html += '<div class="karmic-lessons-block mb20">';

  // Nota de múltiplas lições (count >= 3)
  if (karmicLessons.length >= 3) {
    html += '<div class="kl-multiple-note">' + escH(KARMIC_MULTIPLE_NOTE) + '</div>';
  }

  // Badges expandíveis
  html += '<div class="kl-list">';
  karmicLessons.forEach(function(n) {
    var text = KARMIC_LESSON_TEXTS[n] || '';
    html += '<details class="kl-item">';
    html += '<summary class="kl-summary">';
    html += '<span class="kl-badge-num">' + n + '</span>';
    html += '<span class="kl-badge-label">Lição Kármica ' + n + '</span>';
    html += '<span class="kl-badge-arrow"></span>';
    html += '</summary>';
    if (text) {
      html += '<div class="kl-body">' + escH(text) + '</div>';
    }
    html += '</details>';
  });
  html += '</div>';

  html += '</div>';
  return html;
}

function renderComplementar(data){
  var html = '';

  // ── 1. SEÇÃO COMPLEMENTAR — Equilíbrio, Pensamento Racional, Subconsciente ──
  // patch: complementar_patch
  html += buildSectionHead(t('secComplementar'), 'dot-name');

  var balanceNum      = data.balance     ? data.balance.final     : 0;
  var rationalNum     = data.rational    ? data.rational.final    : 0;
  var subconsciousNum = data.subconscious? data.subconscious.final: 0;

  html += '<div class="complementar-block mb20">';
  html += '<div class="complementar-context">'+escH(BALANCE_CONTEXT)+'</div>';
  html += '<div class="tiles-grid">';
  html += buildComplementarTile(data.balance,     t('labelBalance'),      t('labelBalanceSub'),      BALANCE_TEXTS[balanceNum]         || '');
  html += '</div></div>';

  html += '<div class="complementar-block mb20">';
  html += '<div class="complementar-context">'+escH(RATIONAL_CONTEXT)+'</div>';
  html += '<div class="tiles-grid">';
  html += buildComplementarTile(data.rational,    t('labelRational'),     t('labelRationalSub'),     RATIONAL_TEXTS[rationalNum]       || '');
  html += '</div></div>';

  html += '<div class="complementar-block mb20">';
  html += '<div class="complementar-context">'+escH(SUBCONSCIOUS_CONTEXT)+'</div>';
  html += '<div class="tiles-grid">';
  html += buildComplementarTile(data.subconscious,t('labelSubconscious'), t('labelSubconsciousSub'), SUBCONSCIOUS_TEXTS[subconsciousNum]|| '');
  html += '</div></div>';

  // ── 2. PAIXÃO OCULTA ──
  html += buildSectionHead(t('secHiddenPassion'), 'dot-name');
  html += '<div class="tiles-grid mb20">';
  if(data.hiddenPassion.nums.length){
    data.hiddenPassion.nums.forEach(function(n){
      html += buildSimpleTile({final:n,pre:n}, t('labelHiddenPassion'), data.hiddenPassion.count+'×');
    });
  } else {
    html += '<div class="s-tile"><div class="s-tile-label">'+escH(t('hiddenPassionNone'))+'</div></div>';
  }
  html += '</div>';

  // ── 3. PONTES — patch: bridges_patch (buildBridgeRow com 3 args) ──
  html += buildSectionHead(t('secBridges'), 'dot-name');
  html += '<div class="section-desc">'+escH(t('bridgesDesc'))+'</div>';
  html += '<div class="bridges-wrap mb20">';
  html += buildBridgeRow(t('bridgeMotExpr'), data.bridges.motExpr.final, 'motExpr');
  html += buildBridgeRow(t('bridgeMotLP'),   data.bridges.motLP.final,   'motLP');
  html += buildBridgeRow(t('bridgeExprLP'),  data.bridges.exprLP.final,  'exprLP');
  html += buildBridgeRow(t('bridgeImpExpr'), data.bridges.impExpr.final, 'impExpr');
  html += '</div>';

  // ── 4. PLANOS DE EXPRESSÃO — patch: planes_patch C5 (buildPlanesBlock) ──
  html += buildSectionHead(t('secPlanes'), 'dot-name');
  html += '<div class="section-desc">'+escH(t('planesDesc'))+'</div>';
  html += buildPlanesBlock(data.planes);

  return html;
}
function renderPrevisoes(data){
  var html = '';
  var pd = data.personalDay;
  var today = new Date();
  var curYr = today.getFullYear();
  var dd = String(today.getDate()).padStart(2,'0');
  var mm = String(today.getMonth()+1).padStart(2,'0');
  var yyyy = String(curYr);
  var todayStr = dd+'/'+mm+'/'+yyyy;

  // ── 1. ANO PESSOAL — leitura do ano corrente ──
  html += buildSectionHead(t('secPersonalYear'),'dot-date');
  html += '<div class="tiles-grid mb20">';
  html += buildSimpleTile(pd.year, t('labelPersonalYear'), String(curYr), 'highlight');
  html += '</div>';
  // patch C9 — leitura do Ano Pessoal (aba Previsões)
  html += buildPersonalYearReading(pd.year.final);

  // ── 2. DIA PESSOAL — âncora do momento presente ──
  html += buildSectionHead(t('secPersonalDay'),'dot-date');
  html += '<div class="tiles-grid mb20">';
  html += buildSimpleTile(pd.day, t('personalDayLabel'), todayStr, 'highlight');
  html += '</div>';
  // patch C9 — nota do Dia Pessoal
  html += buildPersonalDayNote(pd.day.final);

  // ── 3. PROJEÇÃO 9 ANOS ──
  html += buildSectionHead(t('secProjection'),'dot-master');
  html += '<div class="projection-wrap mb20">';
  html += '<div class="projection-title">'+escH(t('yearLabel'))+' \u00b7 '+escH(t('numberLabel'))+'</div>';
  var projection = data.projection || [];
  projection.forEach(function(p){
    var isCur = (p.year === curYr);
    var cls = 'projection-row'+(p.isMaster?' master':'')+(isCur?' current':'');
    var barW = Math.min(Math.round(p.num/9*100), 100);
    html += '<div class="'+cls+'">';
    html += '<div class="proj-year">'+escH(String(p.year))+'</div>';
    html += '<div class="proj-num">'+escH(String(p.num))+'</div>';
    html += '<div class="proj-bar-track"><div class="proj-bar-fill" style="width:'+barW+'%"></div></div>';
    if(isCur){
      html += '<div class="proj-current-tag">'+escH(t('labelCurrentYear'))+'</div>';
    } else if(p.isMaster){
      html += '<div class="proj-current-tag">\u2736</div>';
    }
    html += '</div>';
  });
  html += '</div>';

  // ── 4. MESES DO ANO CORRENTE ──
  html += buildSectionHead(t('secPersonalMonths'),'dot-date');
  var mNames = t('monthNames').split(',');
  html += '<div class="months-grid mb20">';
  var trimestres = data.trimestres || [];
  trimestres.forEach(function(m){
    var isCurrent = (m.month === pd.todayMonth);
    var cls = 'month-tile'+(m.isMaster?' master':'')+(isCurrent?' current':'');
    html += '<div class="'+cls+'">';
    html += '<div class="month-name">'+escH(mNames[m.month-1]||String(m.month))+'</div>';
    html += '<div class="month-num">'+escH(String(m.num))+'</div>';
    if(m.isMaster) html += '<div class="month-tag">\u2736</div>';
    html += '</div>';
  });
  html += '</div>';
  // patch C9 — leitura do Mês Pessoal atual (aba Previsões)
  html += buildPersonalMonthReading(pd.month.final, pd.todayMonth, mNames);

  return html;
}
/* ════════════════════════════════════════════════════════
   patch C9 — helpers de previsão pessoal
   buildPersonalYearReading() · buildPersonalMonthReading() · buildPersonalDayNote()
════════════════════════════════════════════════════════ */

function buildPersonalYearReading(yearNum) {
  var entry = PERSONAL_YEAR_TEXTS[yearNum];
  if (!entry) return '';

  // entry = { theme, areas, guidance }
  var theme    = entry.theme    || '';
  var areas    = entry.areas    || '';
  var guidance = entry.guidance || '';

  var html = '';
  html += '<div class="forecast-reading mb20">';
  html += '<div class="forecast-reading-header">';
  html += '<span class="forecast-reading-num' + (MASTERS[yearNum] ? ' is-master' : '') + '">' + yearNum + '</span>';
  html += '<div class="forecast-reading-meta">';
  html += '<span class="forecast-reading-label">Ano Pessoal ' + yearNum + '</span>';
  html += '<span class="forecast-reading-sub">Tema central deste ciclo de 12 meses</span>';
  html += '</div>';
  html += '</div>';

  html += '<details class="essence-details forecast-details" open>';
  html += '<summary class="essence-summary">Ler este ano</summary>';
  html += '<div class="essence-body forecast-body">';
  if (theme)    html += '<p class="forecast-p forecast-theme">'    + escH(theme)    + '</p>';
  if (areas)    html += '<p class="forecast-p forecast-areas">'    + escH(areas)    + '</p>';
  if (guidance) html += '<p class="forecast-p forecast-guidance">' + escH(guidance) + '</p>';
  html += '</div></details>';
  html += '</div>';

  return html;
}

function buildPersonalMonthReading(monthNum, todayMonthIdx, mNames) {
  var text = PERSONAL_MONTH_TEXTS[monthNum];
  if (!text) return '';
  var mLabel = mNames ? (mNames[todayMonthIdx - 1] || '') : '';

  var html = '';
  html += '<div class="forecast-month-reading mb20">';
  html += '<div class="forecast-month-header">';
  html += '<span class="forecast-month-num' + (MASTERS[monthNum] ? ' is-master' : '') + '">' + monthNum + '</span>';
  html += '<div class="forecast-reading-meta">';
  html += '<span class="forecast-reading-label">Mês Pessoal ' + monthNum + (mLabel ? ' · ' + escH(mLabel) : '') + '</span>';
  html += '<span class="forecast-reading-sub">Orientação para este período</span>';
  html += '</div>';
  html += '</div>';
  html += '<div class="forecast-month-body">' + escH(text) + '</div>';
  html += '</div>';

  return html;
}

function buildPersonalDayNote(dayNum) {
  var html = '';
  html += '<div class="forecast-day-note mb20">';
  html += '<div class="forecast-day-note-num' + (MASTERS[dayNum] ? ' is-master' : '') + '">' + dayNum + '</div>';
  html += '<p class="forecast-day-note-text">' + escH(PERSONAL_DAY_NOTE) + '</p>';
  html += '</div>';
  return html;
}

var _cardCounter = 0;
function buildBlock(label, dotClass, cards, layoutClass){
  return buildSectionHead(label,dotClass)+'<div class="cards-grid '+(layoutClass||'')+'">'+cards.join('')+'</div>';
}
function buildCard(numResult, role, badgeClass, calType){
  var n = numResult.final;
  var pre = numResult.pre;
  var isMaster = !!MASTERS[n];
  var karmicKey = KARMIC[pre] ? getKarmicKey(pre) : null;
  var isKarmic = !!karmicKey;

  var cardClass = 'num-card';
  if(isMaster) cardClass += ' master-card';
  if(isKarmic) cardClass += ' karmic-card';
  if(isMaster) badgeClass = 'badge-master';
  if(isKarmic) badgeClass = 'badge-karmic';

  var id = 'card-' + (++_cardCounter);
  var numDisplay = n;

  var texts = TEXTS[isMaster ? n : n];
  var title2 = texts ? texts.title : String(n);

  var masterStar = isMaster ? '<span class="master-star">✦</span>' : '';
  var karmicBadgeHtml = isKarmic ? '<span class="name-tag tag-karmic" style="font-size:.6rem;padding:1px 6px;">'+t('karmicBadge')+'</span> ' : '';

  var html = '<div class="'+cardClass+'" id="'+id+'">';
  html += '<div class="card-header" data-card="'+id+'">';
  html += '<div class="num-badge '+badgeClass+'">'+numDisplay+'</div>';
  html += '<div class="card-meta">';
  html += '<div class="card-title">'+escH(title2)+masterStar+'</div>';
  html += '<div class="card-role">'+karmicBadgeHtml+escH(role)+'</div>';
  var descKey = 'desc' + calType.charAt(0).toUpperCase() + calType.slice(1);
  var descText = t(descKey);
  if(descText !== descKey) html += '<div class="card-desc">'+escH(descText)+'</div>';
  html += '</div>';
  html += '<div class="card-chevron">▼</div>';
  html += '</div>';

  html += '<div class="card-body">';
  html += buildCardBody(n, pre, isMaster, isKarmic, karmicKey, calType);
  html += '</div></div>';
  return html;
}

function buildCardBody(n, pre, isMaster, isKarmic, karmicKey, calType){
  if(isKarmic && karmicKey){
    return buildKarmicBody(karmicKey);
  }
  if(isMaster){
    return buildMasterBody(n, calType);
  }
  return buildNormalBody(n, calType);
}

function buildNormalBody(n, calType){
  var texts = TEXTS[n];
  if(!texts) return '<div class="section-content"><p>—</p></div>';

  var sections = [];
  if(calType==='motivation') sections.push({key:'motivation', label:t('tabMotivation'), content:texts.motivation});
  if(calType==='impression') sections.push({key:'impression', label:t('tabImpression'), content:texts.impression});
  if(calType==='expression') sections.push({key:'expression', label:t('tabExpression'), content:texts.expression});
  if(calType==='lifepath') sections.push({key:'lifepath', label:t('tabLifepath'), content:texts.lifepath});
  if(calType==='day') sections.push({key:'day', label:t('tabDay'), content:texts.day});
  if(calType==='attitude') sections.push({key:'attitude', label:t('tabAttitude'), content:texts.attitude});
  if(calType==='power') sections.push({key:'power', label:t('tabPower'), content:texts.power});
  sections.push({key:'shadow', label:t('tabShadow'), content:texts.shadow, isShadow:true});

  var formulaKey = 'sobreFormula' + calType.charAt(0).toUpperCase() + calType.slice(1);
  var formulaText = t(formulaKey);
  var formulaHtml = formulaText !== formulaKey ? '<div class="formula-line"><span class="formula-tag">'+t('formulaLabel')+'</span> '+escH(formulaText)+'</div>' : '';

  var essenceHtml = '<details class="essence-details"><summary class="essence-summary">'+t('learnMore')+' — '+escH(texts.title)+'</summary><div class="essence-body"><p>'+escH(texts.essence)+'</p></div></details>';

  return formulaHtml + buildTabsHtml(sections) + essenceHtml;
}

function buildMasterBody(n, calType){
  var texts = TEXTS[n];
  if(!texts) return '';
  var sections = [];
  sections.push({key:'motivation', label:t('tabMotivation'), content:texts.motivation});
  sections.push({key:'expression', label:t('tabExpression'), content:texts.expression});
  sections.push({key:'shadow', label:t('tabShadow'), content:texts.shadow, isShadow:true});
  var noteHtml = '<div class="section-content"><p style="color:var(--gold);font-style:italic;font-size:.82rem;">'+t('masterNote')+'</p></div>';
  var essenceHtml = '<details class="essence-details master-essence"><summary class="essence-summary">'+t('learnMore')+' — '+escH(texts.title)+'</summary><div class="essence-body"><p>'+escH(texts.essence)+'</p></div></details>';
  return noteHtml + buildTabsHtml(sections) + essenceHtml;
}

function buildKarmicBody(karmicKey){
  var texts = TEXTS[karmicKey];
  if(!texts) return '';
  var sections = [];
  sections.push({key:'pattern', label:t('tabPattern'), content:texts.pattern});
  sections.push({key:'manifestation', label:t('tabManifestation'), content:texts.manifestation});
  sections.push({key:'integration', label:t('tabIntegration'), content:texts.integration});
  var noteHtml = '<div class="section-content"><p style="color:#b52b0a;font-style:italic;font-size:.82rem;">'+t('karmicNote')+'</p></div>';
  return noteHtml + buildTabsHtml(sections);
}

function buildTabsHtml(sections){
  if(!sections||!sections.length) return '';
  var html='<div class="section-tabs">';
  sections.forEach(function(s,i){
    html+='<button class="section-tab'+(i===0?' active':'')+'">'+escH(s.label)+'</button>';
  });
  html+='</div>';
  sections.forEach(function(s,i){
    var cls='section-content'+(s.isShadow?' shadow-section':'');
    html+='<div class="'+cls+'"'+(i===0?'':' style="display:none"')+'>';
    if(s.content) html+='<p>'+escH(s.content)+'</p>';
    html+='</div>';
  });
  return html;
}
function attachCardEvents(){
  document.querySelectorAll('.card-header[data-card]').forEach(function(hdr){
    hdr.addEventListener('click', function(){
      var card=document.getElementById(this.getAttribute('data-card'));
      if(card) card.classList.toggle('open');
    });
  });
}
function escH(s){ if(typeof s!=='string') s=String(s||''); return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function renderNameBreakdown(data){
  var html=buildSectionHead(t('nameBreakdownTitle'),'dot-name');
  var parts=data.name.trim().split(/\s+/);
  html+='<div class="breakdown-wrap">';
  parts.forEach(function(word){
    if(!word) return;
    var norm=normalize(word);
    var vSum=0,cSum=0;
    var letters='<div class="breakdown-letters">';
    for(var i=0;i<norm.length;i++){
      var ch=norm[i], val=PYT[ch]||0, isV=!!VOWELS[ch];
      letters+='<div class="bl-cell '+(isV?'bl-vowel':'bl-consonant')+'">'
        +'<div class="bl-letter">'+escH(ch)+'</div>'
        +'<div class="bl-value">'+val+'</div>'
        +'</div>';
      if(isV) vSum+=val; else cSum+=val;
    }
    letters+='</div>';
    var vR=reduceNum(vSum).final, cR=reduceNum(cSum).final, tR=reduceNum(vSum+cSum).final;
    html+='<div class="breakdown-name">'
      +'<div class="breakdown-word">'+escH(word)+'</div>'
      +letters
      +'<div class="breakdown-totals">'
      +'<span class="bt-item bt-vowel">'+t('vowelsLabel')+' '+vR+'</span>'
      +'<span class="bt-item bt-consonant">'+t('consonantsLabel')+' '+cR+'</span>'
      +'<span class="bt-item bt-total">'+t('totalLabel')+' '+tR+'</span>'
      +'</div></div>';
  });
  html+='</div>';
  return html;
}

function showSobre(){
  var results = document.getElementById('results');
  var sobre = document.getElementById('sobrePanel');
  var empty = document.getElementById('emptyState');
  var page = document.querySelector('.page');
  if(results) results.style.display = 'none';
  if(empty) empty.style.display = 'none';
  if(page) page.classList.add('sobre-active');
  if(sobre){
    sobre.style.display = 'block';
    sobre.innerHTML = renderSobre();
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function hideSobre(){
  var results = document.getElementById('results');
  var sobre = document.getElementById('sobrePanel');
  var empty = document.getElementById('emptyState');
  var page = document.querySelector('.page');
  if(sobre) sobre.style.display = 'none';
  if(page) page.classList.remove('sobre-active');
  if(results && results.innerHTML.trim()) results.style.display = 'block';
  else if(empty && window.innerWidth > 820) empty.style.display = 'block';
}

function renderSobre(){
  var html = '';
  html += '<button class="sobre-back" onclick="hideSobre()">← Voltar</button>';
  html += '<div class="sobre-title">'+escH(t('sobreTitle'))+'</div>';
  html += '<div class="pyth-box">';
  html += '<div class="pyth-box-title">Ψ '+escH(t('sobrePythagoras'))+'</div>';
  html += '<div class="pyth-box-text">'+escH(t('sobrePythagorasText'))+'</div>';
  html += '</div>';
  html += buildSectionHead(t('sobreSources'), 'dot-date');
  html += '<div class="sobre-text mb20">'+escH(t('sobreSourcesList'))+'</div>';
  html += buildSectionHead(t('sobreAlphabet'), 'dot-name');
  html += '<div class="alpha-table mb20">';
  html += '<div class="alpha-table-head">';
  for(var n=1;n<=9;n++) html += '<div class="alpha-head-cell">'+n+'</div>';
  html += '</div>';
  var rows = ['ABCDEFGHI','JKLMNOPQR','STUVWXYZ'];
  rows.forEach(function(rowLetters){
    html += '<div class="alpha-table-row">';
    for(var col=0;col<9;col++){
      var letter = rowLetters[col] || '';
      var isV = letter && !!VOWELS[letter];
      var cls = 'alpha-col'+(letter===''?' empty':'')+(isV?' is-vowel':'');
      html += '<div class="'+cls+'">'+letter+'</div>';
    }
    html += '</div>';
  });
  html += '</div>';
  html += '<div class="section-desc">'+escH(t('accentNote'))+'</div>';
  html += buildSectionHead(t('sobreFormulas'), 'dot-master');
  var formKeys = ['Motivation','Impression','Expression','Lifepath','Day','Attitude','Power','Balance','Rational','Subconscious','Cycles','Pinnacles','Challenges','PersonalYear','PersonalMonth','PersonalDay'];
  html += '<div class="formulas-list mb20">';
  formKeys.forEach(function(k){
    var raw = t('sobreFormula'+k);
    var sepIdx = raw.indexOf(' = ');
    var hasSep = sepIdx !== -1;
    if(!hasSep) sepIdx = raw.indexOf(': ');
    var name = hasSep ? raw.substring(0, sepIdx) : raw.substring(0, raw.indexOf(': '));
    var expr = (hasSep ? raw.substring(sepIdx + 3) : raw.substring(raw.indexOf(': ') + 2));
    var exprH = escH(expr)
      .replace(/\b(11|22|33)\b/g, '<span class="formula-master">$1</span>')
      .replace(/\b(13|14|16|19)\b/g, '<span class="formula-karmic">$1</span>');
    html += '<div class="formula-item">';
    html += '<span class="formula-name">'+escH(name)+'</span>';
    html += '<span class="formula-sep">=</span>';
    html += '<span class="formula-expr">'+exprH+'</span>';
    html += '</div>';
  });
  html += '</div>';
  html += '<div class="formulas-list mb20"><div class="formula-note">';
  html += '<span class="formula-note-master">Números Mestres (11, 22, 33) preservados</span>';
  html += '<span class="formula-note-sep"> — </span>';
  html += '<span class="formula-note-karmic">Números Kármicos (13, 14, 16, 19) detectados antes da redução final</span>';
  html += '</div></div>';
  html += '<div class="sobre-credit">UM23 · SOLLUN · feito com tempo</div>';
  return html;
}

export {
  renderResults, renderNumStrip, renderMandala,
  renderIdentidade, renderJornada, renderPresente,
  renderRadar, renderPadroes, renderComplementar, renderPrevisoes,
  buildBlock, buildCard, buildSectionHead, buildSimpleTile,
  buildLetterTile, buildBridgeRow,
  attachTabEvents, attachCardEvents,
  escH, renderNameBreakdown,
  showSobre, hideSobre, renderSobre
};
