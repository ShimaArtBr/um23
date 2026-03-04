// app.js — Entry point. Orquestra todos os modulos.
// Dependencias: engine.js, render.js, data/i18n.pt.js, data/texts.pt.js

import {
  PYT, VOWELS, MASTERS, KARMIC,
  calcName, calcDate, calcPower, calcPythTable,
  calcCycles, calcPinnacles, calcChallenges,
  calcProjection, calcTrimestres, calcAge,
  calcElements, calcPriority, calcKarmicLessons,
  calcCornerstone, calcCapstone, calcFirstVowel,
  calcBalance, calcRational, calcSubconscious,
  calcHiddenPassion, calcBridges, calcPlanes, calcPersonalDay, formatDob, getInitials, normalize, reduceNum
} from './engine.js';

import {
  renderResults,
  renderNumStrip, renderMandala,
  renderIdentidade, renderJornada, renderPresente,
  renderRadar, renderPadroes, renderComplementar, renderPrevisoes,
  buildBlock, buildCard, buildSectionHead, buildSimpleTile,
  buildLetterTile, buildBridgeRow,
  attachTabEvents, attachCardEvents,
  escH, renderNameBreakdown,
  showSobre, hideSobre, renderSobre
} from './render.js';

import { t } from './data/i18n.pt.js';
import { TEXTS } from './data/texts.pt.js';

// Expose to inline HTML onclick handlers (necessario para onclick= no HTML)
window.calculate  = calculate;
window.showSobre  = showSobre;
window.hideSobre  = hideSobre;
window.toggleTheme = toggleTheme;

/* ════════════════════════════════════════════════
   THEME
════════════════════════════════════════════════ */
function applyTheme(th){
  document.documentElement.setAttribute('data-theme', th);
  document.getElementById('themeBtn').textContent = th==='dark' ? '☀️' : '🌙';
  document.getElementById('metaTheme').content = th==='dark' ? '#0b0a0a' : '#f5f2ea';
}
function toggleTheme(){
  var cur = document.documentElement.getAttribute('data-theme');
  var next = cur==='dark' ? 'light' : 'dark';
  applyTheme(next);
  try{ localStorage.setItem('um23-theme', next); }catch(e){}
}

/* ════════════════════════════════════════════════
   DATE FIELD HELPERS (já incluídos)
════════════════════════════════════════════════ */
function daysInMonth(m, y){
  if(m===2){
    var leap = (y%4===0 && (y%100!==0 || y%400===0));
    return leap ? 29 : 28;
  }
  return [31,28,31,30,31,30,31,31,30,31,30,31][m-1];
}

function setDateError(msg){
  var el = document.getElementById('dateError');
  if(el) el.textContent = msg || '';
}

function clearDateErrors(){
  setDateError('');
  ['inputDay','inputMonth','inputYear'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.classList.remove('input-error');
  });
}

function setupDateListeners(){
  ['inputDay','inputMonth','inputYear'].forEach(function(id){
    var el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('input', function(){
      var v = parseInt(this.value, 10);
      if(id === 'inputMonth' && !isNaN(v)){
        if(v > 12) this.value = 12;
        if(v < 0)  this.value = '';
      }
      if(id === 'inputDay' && !isNaN(v)){
        var m = parseInt(document.getElementById('inputMonth').value, 10);
        var y = parseInt(document.getElementById('inputYear').value, 10);
        var max = (m>=1 && m<=12 && y>=1900) ? daysInMonth(m,y) : 31;
        if(v > max) this.value = max;
        if(v < 0)   this.value = '';
      }
      if(id === 'inputYear' && !isNaN(v)){
        if(v > 2100) this.value = 2100;
      }
      if(id === 'inputMonth' || id === 'inputYear'){
        var dEl = document.getElementById('inputDay');
        var d = parseInt(dEl.value, 10);
        var m2 = parseInt(document.getElementById('inputMonth').value, 10);
        var y2 = parseInt(document.getElementById('inputYear').value, 10);
        if(!isNaN(d) && d > 0 && m2>=1 && m2<=12 && y2>=1900){
          var maxD = daysInMonth(m2, y2);
          if(d > maxD){ dEl.value = maxD; }
        }
      }
      clearDateErrors();
    });
    el.addEventListener('keyup', function(){
      var v = this.value;
      if(id === 'inputDay'   && v.length === 2) document.getElementById('inputMonth').focus();
      if(id === 'inputMonth' && v.length === 2) document.getElementById('inputYear').focus();
    });
  });
}

function setupDateAutoAdvance() {
  var dayInput = document.getElementById('inputDay');
  var monthInput = document.getElementById('inputMonth');
  var yearInput = document.getElementById('inputYear');
  var calcBtn = document.getElementById('calcBtn');
  
  if(dayInput) {
    dayInput.addEventListener('input', function(e) {
      if(this.value.length === 2 && monthInput) monthInput.focus();
    });
  }
  if(monthInput) {
    monthInput.addEventListener('input', function(e) {
      if(this.value.length === 2 && yearInput) yearInput.focus();
    });
  }
  if(yearInput) {
    yearInput.addEventListener('input', function(e) {
      if(this.value.length === 4 && calcBtn) calcBtn.focus();
    });
  }
}

function validate(){ return,(); }

function calculate(){
  var name = document.getElementById('inputName').value.trim();
  if(!name){ alert(t('errName')); return; }
  var dob =,();
  if(!dob) return;
  var nameCalc = calcName(name);
  var dateCalc = calcDate(dob);
  var powerR   = calcPower(nameCalc.expression.final, dateCalc.lifepath.final);
  var lp = dateCalc.lifepath.final;
  var pythTable = calcPythTable(name);
  var data = {
    name: name, dob: dob, nameCalc: nameCalc, dateCalc: dateCalc, powerR: powerR,
    cycles:     calcCycles(dob, lp),
    pinnacles:  calcPinnacles(dob, lp),
    challenges: calcChallenges(dob),
    projection: calcProjection(dob),
    trimestres: calcTrimestres(dob),
    age:        calcAge(dob),
    elements:   calcElements(name),
    pythTable:  pythTable,
    priority:   calcPriority(pythTable),
    karmicLessons: calcKarmicLessons(pythTable),
    cornerstone:   calcCornerstone(name),
    capstone:      calcCapstone(name),
    firstVowel:    calcFirstVowel(name),
    balance:       calcBalance(name),
    rational:      calcRational(name, dob),
    subconscious:  calcSubconscious(calcKarmicLessons(pythTable)),
    hiddenPassion: calcHiddenPassion(pythTable),
    bridges:       calcBridges(nameCalc.motivation.final, nameCalc.expression.final, dateCalc.lifepath.final, nameCalc.impression.final),
    planes:        calcPlanes(name),
    personalDay:   calcPersonalDay(dob)
  };
  window._lastCalc = data;
  renderResults(data);
}

















/* ════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════ */

function parseDateFields(){
  var dayEl   = document.getElementById('inputDay');
  var monEl   = document.getElementById('inputMonth');
  var yrEl    = document.getElementById('inputYear');
  var d = parseInt(dayEl.value, 10);
  var m = parseInt(monEl.value, 10);
  var y = parseInt(yrEl.value,  10);
  clearDateErrors();
  var valid = true;

  if(isNaN(m) || m < 1 || m > 12){
    monEl.classList.add('input-error');
    setDateError(t('errMonth'));
    valid = false;
  }
  if(isNaN(y) || y < 1900 || y > 2100){
    yrEl.classList.add('input-error');
    if(valid) setDateError(t('errYear'));
    valid = false;
  }
  if(!isNaN(m) && m >= 1 && m <= 12 && !isNaN(y) && y >= 1900){
    var maxD = daysInMonth(m, y);
    if(isNaN(d) || d < 1 || d > maxD){
      dayEl.classList.add('input-error');
      if(valid) setDateError(d > maxD ? t('errDayMax') : t('errDay'));
      valid = false;
    }
  } else if(isNaN(d) || d < 1 || d > 31){
    dayEl.classList.add('input-error');
    if(valid) setDateError(t('errDay'));
    valid = false;
  }
  if(!valid) return null;
  var mm = m < 10 ? '0'+m : String(m);
  var dd = d < 10 ? '0'+d : String(d);
  return y+'-'+mm+'-'+dd;
}

(function(){
  var savedTheme = null;
  try{ savedTheme = localStorage.getItem('um23-theme'); }catch(e){}
  applyTheme(savedTheme || 'dark');

  setupDateListeners();
  setupDateAutoAdvance();
  document.addEventListener('keydown',function(e){
    if(e.key==='Enter'){
      var active=document.activeElement;
      if(active&&(active.id==='inputName'||active.id==='inputDay'||active.id==='inputMonth'||active.id==='inputYear')) calculate();
    }
  });
  var nameInput=document.getElementById('inputName');
  if(nameInput) setTimeout(function(){nameInput.focus();},100);
})();
