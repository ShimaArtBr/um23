// engine.js — Calculos numerologicos puros
// Dependencias: i18n.pt.js (labels de ciclos, pináculos e desafios)

import { t } from './data/i18n.pt.js';

/* ════════════════════════════════════════════════
   NUMEROLOGY ENGINE
════════════════════════════════════════════════ */
var PYT = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
           J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
           S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
var VOWELS = {A:1,E:1,I:1,O:1,U:1};
var MASTERS = {11:1,22:1,33:1};
var KARMIC  = {13:1,14:1,16:1,19:1};

function normalize(s){
  return s.toUpperCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^A-Z]/g,'');
}

function reduceNum(n){
  var pre = n;
  while(n > 9 && !MASTERS[n]){
    var s = 0;
    var str = String(n);
    for(var i=0;i<str.length;i++) s += parseInt(str[i]);
    pre = n;
    n = s;
  }
  return {final: n, pre: pre};
}

function sumLetters(letters){
  var s = 0;
  for(var i=0;i<letters.length;i++) s += (PYT[letters[i]]||0);
  return s;
}

function calcName(fullName){
  var norm = normalize(fullName);
  var vowels = [], consonants = [], all = [];
  for(var i=0;i<norm.length;i++){
    var c = norm[i];
    if(PYT[c]){
      all.push(c);
      if(VOWELS[c]) vowels.push(c); else consonants.push(c);
    }
  }
  var motRaw  = sumLetters(vowels);
  var impRaw  = sumLetters(consonants);
  var exprRaw = sumLetters(all);
  var motR  = reduceNum(motRaw);
  var impR  = reduceNum(impRaw);
  var exprR = reduceNum(exprRaw);
  return {
    motivation: motR, impression: impR, expression: exprR
  };
}

function calcDate(dob){
  var parts = dob.split('-');
  var y = parseInt(parts[0]), m = parseInt(parts[1]), d = parseInt(parts[2]);

  var allDigits = String(y)+String(m)+String(d);
  var lpRaw = 0;
  for(var i=0;i<allDigits.length;i++) lpRaw += parseInt(allDigits[i]);
  var lpR = reduceNum(lpRaw);

  var dayR = reduceNum(d);
  var attRaw = d + m;
  var attR = reduceNum(attRaw);

  return { lifepath: lpR, day: dayR, attitude: attR, rawD: d, rawM: m };
}

function calcPower(expr, lp){
  var raw = expr + lp;
  return reduceNum(raw);
}

function getInitials(name){
  var parts = name.trim().split(/\s+/);
  if(parts.length >= 2) return (parts[0][0]+(parts[parts.length-1][0])).toUpperCase();
  return name.substring(0,2).toUpperCase();
}

function formatDob(dob){
  var parts = dob.split('-');
  return parts[2]+'/'+parts[1]+'/'+parts[0];
}

/* ── Parse user-entered date (DD/MM/AAAA) to YYYY-MM-DD ── */

/* ════════════════════════════════════════════════
   EXTENDED NUMEROLOGY ENGINE
════════════════════════════════════════════════ */
var EL_MAP = {1:'fogo',2:'agua',3:'fogo',4:'terra',5:'ar',6:'agua',7:'ar',8:'terra',9:'fogo'};
var PLANE_MAP = {1:'mental',2:'emocional',3:'emocional',4:'fisico',5:'fisico',6:'emocional',7:'intuitivo',8:'mental',9:'intuitivo'};

function lpForDuration(n){
  if(n===11) return 2; if(n===22) return 4; if(n===33) return 6; return n;
}
function calcCycles(dob, lp){
  var pts=dob.split('-'), y=+pts[0], m=+pts[1], d=+pts[2];
  var yS=0; String(y).split('').forEach(function(c){yS+=+c;});
  var c1=reduceNum(m).final, c2=reduceNum(d).final, c3=reduceNum(yS).final;
  var base=lpForDuration(lp), end1=36-base, end2=end1+27;
  return [
    {num:c1, label:t('labelC1'), start:0,    end:end1},
    {num:c2, label:t('labelC2'), start:end1,  end:end2},
    {num:c3, label:t('labelC3'), start:end2,  end:null}
  ];
}
function calcPinnacles(dob, lp){
  var pts=dob.split('-'), y=+pts[0], m=+pts[1], d=+pts[2];
  var yS=0; String(y).split('').forEach(function(c){yS+=+c;});
  var yR=reduceNum(yS).final;
  var p1=reduceNum(m+d).final, p2=reduceNum(d+yR).final, p3=reduceNum(p1+p2).final, p4=reduceNum(m+yR).final;
  var base=lpForDuration(lp), e1=36-base;
  return [
    {num:p1, label:t('labelP1'), start:0,     end:e1},
    {num:p2, label:t('labelP2'), start:e1,    end:e1+9},
    {num:p3, label:t('labelP3'), start:e1+9,  end:e1+18},
    {num:p4, label:t('labelP4'), start:e1+18, end:null}
  ];
}
function calcChallenges(dob){
  var pts=dob.split('-'), y=+pts[0], m=+pts[1], d=+pts[2];
  var yS=0; String(y).split('').forEach(function(c){yS+=+c;});
  var yR=reduceNum(yS).final, mR=reduceNum(m).final, dR=reduceNum(d).final;
  var d1=Math.abs(mR-dR), d2=Math.abs(dR-yR), d3=Math.abs(d1-d2), d4=Math.abs(mR-yR);
  return [{num:d1,label:t('labelD1')},{num:d2,label:t('labelD2')},{num:d3,label:t('labelD3')},{num:d4,label:t('labelD4')}];
}
function calcPersonalYear(dob, year){
  var pts=dob.split('-'), d=+pts[2], m=+pts[1];
  var yS=0; String(year).split('').forEach(function(c){yS+=+c;});
  return reduceNum(d+m+yS);
}
function calcProjection(dob){
  var yr=new Date().getFullYear(), proj=[];
  for(var i=0;i<9;i++){
    var y=yr+i, py=calcPersonalYear(dob,y);
    proj.push({year:y, num:py.final, isMaster:!!MASTERS[py.final]});
  }
  return proj;
}
function calcTrimestres(dob){
  var today=new Date(), yr=today.getFullYear();
  var py=calcPersonalYear(dob,yr).final, months=[];
  for(var i=1;i<=12;i++){
    var pm=reduceNum(py+i).final;
    months.push({month:i, num:pm, isMaster:!!MASTERS[pm]});
  }
  return months;
}
function calcAge(dob){
  var today=new Date(), pts=dob.split('-');
  var y=+pts[0], m=+pts[1], d=+pts[2];
  var age=today.getFullYear()-y;
  if(new Date(today.getFullYear(),m-1,d)>today) age--;
  return age;
}
function calcElements(name){
  var norm=normalize(name), counts={fogo:0,terra:0,ar:0,agua:0};
  for(var i=0;i<norm.length;i++){ var v=PYT[norm[i]]; if(v&&EL_MAP[v]) counts[EL_MAP[v]]++; }
  var total=norm.length||1;
  return {
    fogo:{count:counts.fogo,pct:Math.round(counts.fogo/total*100)},
    terra:{count:counts.terra,pct:Math.round(counts.terra/total*100)},
    ar:{count:counts.ar,pct:Math.round(counts.ar/total*100)},
    agua:{count:counts.agua,pct:Math.round(counts.agua/total*100)}
  };
}
function calcPythTable(name){
  var norm=normalize(name), table={1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
  for(var i=0;i<norm.length;i++){ var v=PYT[norm[i]]; if(v) table[v]++; }
  return table;
}
function calcPriority(table){
  var arr=[];
  for(var n=1;n<=9;n++) if(table[n]>0) arr.push({num:n,count:table[n]});
  return arr.sort(function(a,b){return b.count-a.count;});
}
function calcKarmicLessons(table){
  var missing=[];
  for(var n=1;n<=9;n++) if(!table[n]) missing.push(n);
  return missing;
}
function calcCornerstone(fullName){
  var first=fullName.trim().split(/\s+/)[0], norm=normalize(first);
  var letter=norm[0]||'', value=letter?reduceNum(PYT[letter]||0):{final:0,pre:0};
  return {letter:letter, value:value};
}
function calcCapstone(fullName){
  var first=fullName.trim().split(/\s+/)[0], norm=normalize(first);
  var letter=norm[norm.length-1]||'', value=letter?reduceNum(PYT[letter]||0):{final:0,pre:0};
  return {letter:letter, value:value};
}
function calcFirstVowel(fullName){
  var first=fullName.trim().split(/\s+/)[0], norm=normalize(first), letter='';
  for(var i=0;i<norm.length;i++){ if(VOWELS[norm[i]]){letter=norm[i];break;} }
  var value=letter?reduceNum(PYT[letter]||0):{final:0,pre:0};
  return {letter:letter, value:value};
}
function calcBalance(fullName){
  var parts=fullName.trim().split(/\s+/), sum=0;
  parts.forEach(function(p){ var n=normalize(p); if(n[0]&&PYT[n[0]]) sum+=PYT[n[0]]; });
  return reduceNum(sum);
}
function calcRational(fullName, dob){
  var norm=normalize(fullName.trim().split(/\s+/)[0]);
  var fv=(norm[0]&&PYT[norm[0]])?PYT[norm[0]]:0;
  var d=+dob.split('-')[2];
  return reduceNum(fv+d);
}
function calcSubconscious(karmicLessons){
  var n=Math.max(1,9-karmicLessons.length);
  return {final:n, pre:n};
}
function calcHiddenPassion(pythTable){
  var maxC=0;
  for(var n=1;n<=9;n++) if(pythTable[n]>maxC) maxC=pythTable[n];
  var nums=[];
  if(maxC>1) for(var n=1;n<=9;n++) if(pythTable[n]===maxC) nums.push(n);
  return {nums:nums, count:maxC};
}
function calcBridges(mot, expr, lp, imp){
  function b(a,bb){ var v=Math.abs(a-bb); return {final:v,pre:v}; }
  return {motExpr:b(mot,expr), motLP:b(mot,lp), exprLP:b(expr,lp), impExpr:b(imp,expr)};
}
function calcPlanes(fullName){
  var norm=normalize(fullName), counts={mental:0,emocional:0,fisico:0,intuitivo:0};
  for(var i=0;i<norm.length;i++){ var v=PYT[norm[i]]; if(v&&PLANE_MAP[v]) counts[PLANE_MAP[v]]++; }
  return counts;
}
function calcPersonalMonth(dob, year, month){
  return reduceNum(calcPersonalYear(dob,year).final+month);
}
function calcPersonalDay(dob){
  var today=new Date(), yr=today.getFullYear(), mo=today.getMonth()+1, dy=today.getDate();
  var py=calcPersonalYear(dob,yr), pm=calcPersonalMonth(dob,yr,mo), pd=reduceNum(pm.final+dy);
  return {year:py, month:pm, day:pd, todayDate:dy, todayMonth:mo, todayYear:yr};
}

export {
  PYT, VOWELS, MASTERS, KARMIC,
  normalize, reduceNum, sumLetters,
  calcName, calcDate, calcPower,
  getInitials, formatDob,
  calcCycles, calcPinnacles, calcChallenges,
  calcPersonalYear, calcProjection, calcTrimestres,
  calcAge, calcElements, calcPythTable, calcPriority,
  calcKarmicLessons, calcCornerstone, calcCapstone,
  calcFirstVowel, calcBalance, calcRational,
  calcSubconscious, calcHiddenPassion, calcBridges,
  calcPlanes, calcPersonalMonth, calcPersonalDay
};
