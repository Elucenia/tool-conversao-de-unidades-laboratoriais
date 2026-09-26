/* tool-conversao-de-unidades-laboratoriais · Elucenia · https://github.com/Elucenia/tool-conversao-de-unidades-laboratoriais
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"conversao-de-unidades-laboratoriais","title":"Conversão de unidades laboratoriais","fields":[["an","Exame","sel",{"opts":{"glicose":"Glicose","colesterol":"Colesterol (total, HDL, LDL)","triglicerideos":"Triglicerídeos","creatinina":"Creatinina","ureia":"Ureia","bun":"BUN (nitrogênio ureico)","calcio":"Cálcio total","acido_urico":"Ácido úrico","bilirrubina":"Bilirrubina"}}],["dir","Converter","radio",{"opts":{"si":"De mg/dL para SI","conv":"De SI para mg/dL"}}],["val","Valor","num",{"min":0,"max":100000,"step":0.001,"unit":"","ph":"100"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(e){'use strict';
var a=e.h;
var o=a.br;
var g={glicose:["Glicose",10/180.16,"mmol/L",2,0],colesterol:["Colesterol (total, HDL ou LDL)",10/386.65,"mmol/L",2,0],triglicerideos:["Triglicerídeos",10/885.7,"mmol/L",2,0],creatinina:["Creatinina",1e4/113.12,"µmol/L",0,2],ureia:["Ureia",10/60.06,"mmol/L",2,0],bun:["BUN (nitrogênio ureico)",10/28.014,"mmol/L de ureia",2,0],calcio:["Cálcio total",10/40.08,"mmol/L",2,1],acido_urico:["Ácido úrico",1e4/168.11,"µmol/L",0,1],bilirrubina:["Bilirrubina",1e4/584.66,"µmol/L",0,1]};
var h=28.014/60.06;
e.def("conversao-de-unidades-laboratoriais",function(e){var a=g[e.an];if(!a)return{error:"Escolha o exame."};var i="conv"!==e.dir,r=i?e.val*a[1]:e.val/a[1],n=i?e.val:r,t=[];"ureia"===e.an&&t.push(["BUN equivalente",o(n*h,1)+" mg/dL"]),"bun"===e.an&&t.push(["Ureia equivalente",o(n/h,1)+" mg/dL"]),t.push(["Fator (mg/dL → "+a[2]+")","× "+o(a[1],a[1]>=10?1:4)]);var s={out:r};return"ureia"===e.an&&(s.bun=n*h),"bun"===e.an&&(s.ureia=n/h),{main:[o(r,i?a[3]:a[4]),i?a[2]:"mg/dL"],label:a[0]+(i?" em unidade SI":" em unidade convencional"),level:"info",verdict:o(e.val,i?a[4]:a[3])+" "+(i?"mg/dL":a[2])+" = "+o(r,i?a[3]:a[4])+" "+(i?a[2]:"mg/dL"),rows:t,raw:s}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
