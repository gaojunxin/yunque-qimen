(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function iu(i,e){const t=new Set(i.split(","));return e?n=>t.has(n.toLowerCase()):n=>t.has(n)}const ot={},ss=[],Tn=()=>{},$_=()=>!1,Ba=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),ru=i=>i.startsWith("onUpdate:"),Pt=Object.assign,su=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Z_=Object.prototype.hasOwnProperty,Ke=(i,e)=>Z_.call(i,e),He=Array.isArray,ks=i=>Ha(i)==="[object Map]",J_=i=>Ha(i)==="[object Set]",We=i=>typeof i=="function",Lt=i=>typeof i=="string",za=i=>typeof i=="symbol",_t=i=>i!==null&&typeof i=="object",Kd=i=>(_t(i)||We(i))&&We(i.then)&&We(i.catch),Q_=Object.prototype.toString,Ha=i=>Q_.call(i),eg=i=>Ha(i).slice(8,-1),tg=i=>Ha(i)==="[object Object]",ou=i=>Lt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,aa=iu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},ng=/-(\w)/g,ps=ka(i=>i.replace(ng,(e,t)=>t?t.toUpperCase():"")),ig=/\B([A-Z])/g,Rs=ka(i=>i.replace(ig,"-$1").toLowerCase()),$d=ka(i=>i.charAt(0).toUpperCase()+i.slice(1)),cl=ka(i=>i?`on${$d(i)}`:""),Gi=(i,e)=>!Object.is(i,e),ul=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ga=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},rg=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let uf;const Zd=()=>uf||(uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(i){if(He(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Lt(n)?lg(n):au(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(Lt(i)||_t(i))return i}const sg=/;(?![^(]*\))/g,og=/:([^]+)/,ag=/\/\*[^]*?\*\//g;function lg(i){const e={};return i.replace(ag,"").split(sg).forEach(t=>{if(t){const n=t.split(og);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function lu(i){let e="";if(Lt(i))e=i;else if(He(i))for(let t=0;t<i.length;t++){const n=lu(i[t]);n&&(e+=n+" ")}else if(_t(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ug=iu(cg);function Jd(i){return!!i||i===""}/**
* @vue/reactivity v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ln;class Qd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ln,!e&&Ln&&(this.index=(Ln.scopes||(Ln.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Ln;try{return Ln=this,e()}finally{Ln=t}}}on(){Ln=this}off(){Ln=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function fg(i){return new Qd(i)}function hg(i,e=Ln){e&&e.active&&e.effects.push(i)}function dg(){return Ln}let fr;class cu{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,hg(this,r)}get dirty(){if(this._dirtyLevel===1){Ar();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(pg(t.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),wr()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ni,t=fr;try{return Ni=!0,fr=this,this._runnings++,ff(this),this.fn()}finally{hf(this),this._runnings--,fr=t,Ni=e}}stop(){var e;this.active&&(ff(this),hf(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function pg(i){return i.value}function ff(i){i._trackId++,i._depsLength=0}function hf(i){if(i.deps&&i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)ep(i.deps[e],i);i.deps.length=i._depsLength}}function ep(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let Ni=!0,cc=0;const tp=[];function Ar(){tp.push(Ni),Ni=!1}function wr(){const i=tp.pop();Ni=i===void 0?!0:i}function uu(){cc++}function fu(){for(cc--;!cc&&uc.length;)uc.shift()()}function np(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&ep(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const uc=[];function ip(i,e,t){uu();for(const n of i.keys())if(i.get(n)===n._trackId){if(n._dirtyLevel<e&&!(n._runnings&&!n.allowRecurse)){const r=n._dirtyLevel;n._dirtyLevel=e,r===0&&(n._shouldSchedule=!0,n.trigger())}n.scheduler&&n._shouldSchedule&&(!n._runnings||n.allowRecurse)&&(n._shouldSchedule=!1,uc.push(n.scheduler))}fu()}const rp=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},fc=new WeakMap,hr=Symbol(""),hc=Symbol("");function rn(i,e,t){if(Ni&&fr){let n=fc.get(i);n||fc.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=rp(()=>n.delete(t))),np(fr,r)}}function fi(i,e,t,n,r,s){const o=fc.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&He(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!za(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":He(i)?ou(t)&&a.push(o.get("length")):(a.push(o.get(hr)),ks(i)&&a.push(o.get(hc)));break;case"delete":He(i)||(a.push(o.get(hr)),ks(i)&&a.push(o.get(hc)));break;case"set":ks(i)&&a.push(o.get(hr));break}uu();for(const l of a)l&&ip(l,2);fu()}const mg=iu("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(za)),df=_g();function _g(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Qe(this);for(let s=0,o=this.length;s<o;s++)rn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ar(),uu();const n=Qe(this)[e].apply(this,t);return fu(),wr(),n}}),i}function gg(i){const e=Qe(this);return rn(e,"has",i),e.hasOwnProperty(i)}class op{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?Pg:up:s?cp:lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=He(e);if(!r){if(o&&Ke(df,t))return Reflect.get(df,t,n);if(t==="hasOwnProperty")return gg}const a=Reflect.get(e,t,n);return(za(t)?sp.has(t):mg(t))||(r||rn(e,"get",t),s)?a:sn(a)?o&&ou(t)?a:a.value:_t(a)?r?hp(a):Va(a):a}}class ap extends op{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._shallow){const l=ms(s);if(!va(n)&&!ms(n)&&(s=Qe(s),n=Qe(n)),!He(e)&&sn(s)&&!sn(n))return l?!1:(s.value=n,!0)}const o=He(e)&&ou(t)?Number(t)<e.length:Ke(e,t),a=Reflect.set(e,t,n,r);return e===Qe(r)&&(o?Gi(n,s)&&fi(e,"set",t,n):fi(e,"add",t,n)),a}deleteProperty(e,t){const n=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&fi(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!za(t)||!sp.has(t))&&rn(e,"has",t),n}ownKeys(e){return rn(e,"iterate",He(e)?"length":hr),Reflect.ownKeys(e)}}class vg extends op{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xg=new ap,yg=new vg,Sg=new ap(!0),hu=i=>i,Ga=i=>Reflect.getPrototypeOf(i);function Ro(i,e,t=!1,n=!1){i=i.__v_raw;const r=Qe(i),s=Qe(e);t||(Gi(e,s)&&rn(r,"get",e),rn(r,"get",s));const{has:o}=Ga(r),a=n?hu:t?_u:to;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Co(i,e=!1){const t=this.__v_raw,n=Qe(t),r=Qe(i);return e||(Gi(i,r)&&rn(n,"has",i),rn(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Po(i,e=!1){return i=i.__v_raw,!e&&rn(Qe(i),"iterate",hr),Reflect.get(i,"size",i)}function pf(i){i=Qe(i);const e=Qe(this);return Ga(e).has.call(e,i)||(e.add(i),fi(e,"add",i,i)),this}function mf(i,e){e=Qe(e);const t=Qe(this),{has:n,get:r}=Ga(t);let s=n.call(t,i);s||(i=Qe(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Gi(e,o)&&fi(t,"set",i,e):fi(t,"add",i,e),this}function _f(i){const e=Qe(this),{has:t,get:n}=Ga(e);let r=t.call(e,i);r||(i=Qe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&fi(e,"delete",i,void 0),s}function gf(){const i=Qe(this),e=i.size!==0,t=i.clear();return e&&fi(i,"clear",void 0,void 0),t}function Lo(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Qe(o),l=e?hu:i?_u:to;return!i&&rn(a,"iterate",hr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Do(i,e,t){return function(...n){const r=this.__v_raw,s=Qe(r),o=ks(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?hu:e?_u:to;return!e&&rn(s,"iterate",l?hc:hr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function vi(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Mg(){const i={get(s){return Ro(this,s)},get size(){return Po(this)},has:Co,add:pf,set:mf,delete:_f,clear:gf,forEach:Lo(!1,!1)},e={get(s){return Ro(this,s,!1,!0)},get size(){return Po(this)},has:Co,add:pf,set:mf,delete:_f,clear:gf,forEach:Lo(!1,!0)},t={get(s){return Ro(this,s,!0)},get size(){return Po(this,!0)},has(s){return Co.call(this,s,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:Lo(!0,!1)},n={get(s){return Ro(this,s,!0,!0)},get size(){return Po(this,!0)},has(s){return Co.call(this,s,!0)},add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear"),forEach:Lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Do(s,!1,!1),t[s]=Do(s,!0,!1),e[s]=Do(s,!1,!0),n[s]=Do(s,!0,!0)}),[i,t,e,n]}const[Eg,Tg,bg,Ag]=Mg();function du(i,e){const t=e?i?Ag:bg:i?Tg:Eg;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ke(t,r)&&r in n?t:n,r,s)}const wg={get:du(!1,!1)},Rg={get:du(!1,!0)},Cg={get:du(!0,!1)},lp=new WeakMap,cp=new WeakMap,up=new WeakMap,Pg=new WeakMap;function Lg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dg(i){return i.__v_skip||!Object.isExtensible(i)?0:Lg(eg(i))}function Va(i){return ms(i)?i:pu(i,!1,xg,wg,lp)}function fp(i){return pu(i,!1,Sg,Rg,cp)}function hp(i){return pu(i,!0,yg,Cg,up)}function pu(i,e,t,n,r){if(!_t(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Dg(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function os(i){return ms(i)?os(i.__v_raw):!!(i&&i.__v_isReactive)}function ms(i){return!!(i&&i.__v_isReadonly)}function va(i){return!!(i&&i.__v_isShallow)}function dp(i){return os(i)||ms(i)}function Qe(i){const e=i&&i.__v_raw;return e?Qe(e):i}function mu(i){return ga(i,"__v_skip",!0),i}const to=i=>_t(i)?Va(i):i,_u=i=>_t(i)?hp(i):i;class pp{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new cu(()=>e(this._value),()=>dc(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Qe(this);return(!e._cacheable||e.effect.dirty)&&Gi(e._value,e._value=e.effect.run())&&dc(e,2),mp(e),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ig(i,e,t=!1){let n,r;const s=We(i);return s?(n=i,r=Tn):(n=i.get,r=i.set),new pp(n,r,s||!r,t)}function mp(i){Ni&&fr&&(i=Qe(i),np(fr,i.dep||(i.dep=rp(()=>i.dep=void 0,i instanceof pp?i:void 0))))}function dc(i,e=2,t){i=Qe(i);const n=i.dep;n&&ip(n,e)}function sn(i){return!!(i&&i.__v_isRef===!0)}function gu(i){return _p(i,!1)}function Ug(i){return _p(i,!0)}function _p(i,e){return sn(i)?i:new Ng(i,e)}class Ng{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Qe(e),this._value=t?e:to(e)}get value(){return mp(this),this._value}set value(e){const t=this.__v_isShallow||va(e)||ms(e);e=t?e:Qe(e),Gi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:to(e),dc(this,2))}}function hi(i){return sn(i)?i.value:i}const Og={get:(i,e,t)=>hi(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return sn(r)&&!sn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function gp(i){return os(i)?i:new Proxy(i,Og)}/**
* @vue/runtime-core v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Wa(s,e,t)}return r}function Fn(i,e,t,n){if(We(i)){const s=Oi(i,e,t,n);return s&&Kd(s)&&s.catch(o=>{Wa(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Fn(i[s],e,t,n));return r}function Wa(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Oi(l,null,10,[i,o,a]);return}}Fg(i,t,r,n)}function Fg(i,e,t,n=!0){console.error(i)}let no=!1,pc=!1;const Nt=[];let Wn=0;const as=[];let bi=null,sr=0;const vp=Promise.resolve();let vu=null;function xp(i){const e=vu||vp;return i?e.then(this?i.bind(this):i):e}function Bg(i){let e=Wn+1,t=Nt.length;for(;e<t;){const n=e+t>>>1,r=Nt[n],s=io(r);s<i||s===i&&r.pre?e=n+1:t=n}return e}function xu(i){(!Nt.length||!Nt.includes(i,no&&i.allowRecurse?Wn+1:Wn))&&(i.id==null?Nt.push(i):Nt.splice(Bg(i.id),0,i),yp())}function yp(){!no&&!pc&&(pc=!0,vu=vp.then(Mp))}function zg(i){const e=Nt.indexOf(i);e>Wn&&Nt.splice(e,1)}function Hg(i){He(i)?as.push(...i):(!bi||!bi.includes(i,i.allowRecurse?sr+1:sr))&&as.push(i),yp()}function vf(i,e,t=no?Wn+1:0){for(;t<Nt.length;t++){const n=Nt[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;Nt.splice(t,1),t--,n()}}}function Sp(i){if(as.length){const e=[...new Set(as)].sort((t,n)=>io(t)-io(n));if(as.length=0,bi){bi.push(...e);return}for(bi=e,sr=0;sr<bi.length;sr++)bi[sr]();bi=null,sr=0}}const io=i=>i.id==null?1/0:i.id,kg=(i,e)=>{const t=io(i)-io(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Mp(i){pc=!1,no=!0,Nt.sort(kg);try{for(Wn=0;Wn<Nt.length;Wn++){const e=Nt[Wn];e&&e.active!==!1&&Oi(e,null,14)}}finally{Wn=0,Nt.length=0,Sp(),no=!1,vu=null,(Nt.length||as.length)&&Mp()}}function Gg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ot;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||ot;h&&(r=t.map(d=>Lt(d)?d.trim():d)),f&&(r=t.map(rg))}let a,l=n[a=cl(e)]||n[a=cl(ps(e))];!l&&s&&(l=n[a=cl(Rs(e))]),l&&Fn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Fn(c,i,6,r)}}function Ep(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!We(i)){const l=c=>{const u=Ep(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(_t(i)&&n.set(i,null),null):(He(s)?s.forEach(l=>o[l]=null):Pt(o,s),_t(i)&&n.set(i,o),o)}function Xa(i,e){return!i||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(i,e[0].toLowerCase()+e.slice(1))||Ke(i,Rs(e))||Ke(i,e))}let qn=null,Tp=null;function xa(i){const e=qn;return qn=i,Tp=i&&i.type.__scopeId||null,e}function mc(i,e=qn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Rf(-1);const s=xa(e);let o;try{o=i(...r)}finally{xa(s),n._d&&Rf(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function fl(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i;let m,p;const y=xa(i);try{if(t.shapeFlag&4){const E=r||n,C=E;m=Gn(u.call(C,E,f,s,d,h,g)),p=l}else{const E=e;m=Gn(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),p=e.props?l:Vg(l)}}catch(E){Vs.length=0,Wa(E,i,1),m=$t(ro)}let v=m;if(p&&_!==!1){const E=Object.keys(p),{shapeFlag:C}=v;E.length&&C&7&&(o&&E.some(ru)&&(p=Wg(p,o)),v=_s(v,p))}return t.dirs&&(v=_s(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,xa(y),m}const Vg=i=>{let e;for(const t in i)(t==="class"||t==="style"||Ba(t))&&((e||(e={}))[t]=i[t]);return e},Wg=(i,e)=>{const t={};for(const n in i)(!ru(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Xg(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?xf(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Xa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?xf(n,o,c):!0:!!o;return!1}function xf(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Xa(t,s))return!0}return!1}function qg({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Yg=Symbol.for("v-ndc"),jg=i=>i.__isSuspense;function Kg(i,e){e&&e.pendingBranch?He(i)?e.effects.push(...i):e.effects.push(i):Hg(i)}const $g=Symbol.for("v-scx"),Zg=()=>di($g),Io={};function la(i,e,t){return bp(i,e,t)}function bp(i,e,{immediate:t,deep:n,flush:r,once:s,onTrack:o,onTrigger:a}=ot){if(e&&s){const w=e;e=(...b)=>{w(...b),C()}}const l=qt,c=w=>n===!0?w:Qr(w,n===!1?1:void 0);let u,f=!1,h=!1;if(sn(i)?(u=()=>i.value,f=va(i)):os(i)?(u=()=>c(i),f=!0):He(i)?(h=!0,f=i.some(w=>os(w)||va(w)),u=()=>i.map(w=>{if(sn(w))return w.value;if(os(w))return c(w);if(We(w))return Oi(w,l,2)})):We(i)?e?u=()=>Oi(i,l,2):u=()=>(d&&d(),Fn(i,l,3,[g])):u=Tn,e&&n){const w=u;u=()=>Qr(w())}let d,g=w=>{d=v.onStop=()=>{Oi(w,l,4),d=v.onStop=void 0}},_;if(Ka)if(g=Tn,e?t&&Fn(e,l,3,[u(),h?[]:void 0,g]):u(),r==="sync"){const w=Zg();_=w.__watcherHandles||(w.__watcherHandles=[])}else return Tn;let m=h?new Array(i.length).fill(Io):Io;const p=()=>{if(!(!v.active||!v.dirty))if(e){const w=v.run();(n||f||(h?w.some((b,O)=>Gi(b,m[O])):Gi(w,m)))&&(d&&d(),Fn(e,l,3,[w,m===Io?void 0:h&&m[0]===Io?[]:m,g]),m=w)}else v.run()};p.allowRecurse=!!e;let y;r==="sync"?y=p:r==="post"?y=()=>Kt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),y=()=>xu(p));const v=new cu(u,Tn,y),E=dg(),C=()=>{v.stop(),E&&su(E.effects,v)};return e?t?p():m=v.run():r==="post"?Kt(v.run.bind(v),l&&l.suspense):v.run(),_&&_.push(C),C}function Jg(i,e,t){const n=this.proxy,r=Lt(i)?i.includes(".")?Ap(n,i):()=>n[i]:i.bind(n,n);let s;We(e)?s=e:(s=e.handler,t=e);const o=So(this),a=bp(r,s.bind(n),t);return o(),a}function Ap(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Qr(i,e,t=0,n){if(!_t(i)||i.__v_skip)return i;if(e&&e>0){if(t>=e)return i;t++}if(n=n||new Set,n.has(i))return i;if(n.add(i),sn(i))Qr(i.value,e,t,n);else if(He(i))for(let r=0;r<i.length;r++)Qr(i[r],e,t,n);else if(J_(i)||ks(i))i.forEach(r=>{Qr(r,e,t,n)});else if(tg(i))for(const r in i)Qr(i[r],e,t,n);return i}function Ki(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ar(),Fn(l,t,8,[i.el,a,i,e]),wr())}}/*! #__NO_SIDE_EFFECTS__ */function wp(i,e){return We(i)?Pt({name:i.name},e,{setup:i}):i}const ca=i=>!!i.type.__asyncLoader,Rp=i=>i.type.__isKeepAlive;function Qg(i,e){Cp(i,"a",e)}function e0(i,e){Cp(i,"da",e)}function Cp(i,e,t=qt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(qa(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Rp(r.parent.vnode)&&t0(n,e,t,r),r=r.parent}}function t0(i,e,t,n){const r=qa(e,i,n,!0);Lp(()=>{su(n[e],r)},t)}function qa(i,e,t=qt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ar();const a=So(t),l=Fn(e,t,i,o);return a(),wr(),l});return n?r.unshift(s):r.push(s),s}}const gi=i=>(e,t=qt)=>(!Ka||i==="sp")&&qa(i,(...n)=>e(...n),t),n0=gi("bm"),Pp=gi("m"),i0=gi("bu"),r0=gi("u"),s0=gi("bum"),Lp=gi("um"),o0=gi("sp"),a0=gi("rtg"),l0=gi("rtc");function c0(i,e=qt){qa("ec",i,e)}const _c=i=>i?Wp(i)?Eu(i)||i.proxy:_c(i.parent):null,Gs=Pt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>_c(i.parent),$root:i=>_c(i.root),$emit:i=>i.emit,$options:i=>yu(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,xu(i.update)}),$nextTick:i=>i.n||(i.n=xp.bind(i.proxy)),$watch:i=>Jg.bind(i)}),hl=(i,e)=>i!==ot&&!i.__isScriptSetup&&Ke(i,e),u0={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(hl(n,e))return o[e]=1,n[e];if(r!==ot&&Ke(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==ot&&Ke(t,e))return o[e]=4,t[e];gc&&(o[e]=0)}}const u=Gs[e];let f,h;if(u)return e==="$attrs"&&rn(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ot&&Ke(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ke(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return hl(r,e)?(r[e]=t,!0):n!==ot&&Ke(n,e)?(n[e]=t,!0):Ke(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==ot&&Ke(i,o)||hl(e,o)||(a=s[0])&&Ke(a,o)||Ke(n,o)||Ke(Gs,o)||Ke(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ke(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function yf(i){return He(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let gc=!0;function f0(i){const e=yu(i),t=i.proxy,n=i.ctx;gc=!1,e.beforeCreate&&Sf(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:v,unmounted:E,render:C,renderTracked:w,renderTriggered:b,errorCaptured:O,serverPrefetch:S,expose:R,inheritAttrs:H,components:Q,directives:se,filters:F}=e;if(c&&h0(c,n,null),o)for(const Y in o){const j=o[Y];We(j)&&(n[Y]=j.bind(t))}if(r){const Y=r.call(t,t);_t(Y)&&(i.data=Va(Y))}if(gc=!0,s)for(const Y in s){const j=s[Y],te=We(j)?j.bind(t,t):We(j.get)?j.get.bind(t,t):Tn,fe=!We(j)&&We(j.set)?j.set.bind(t):Tn,ae=In({get:te,set:fe});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>ae.value,set:oe=>ae.value=oe})}if(a)for(const Y in a)Dp(a[Y],n,t,Y);if(l){const Y=We(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(j=>{ua(j,Y[j])})}u&&Sf(u,i,"c");function k(Y,j){He(j)?j.forEach(te=>Y(te.bind(t))):j&&Y(j.bind(t))}if(k(n0,f),k(Pp,h),k(i0,d),k(r0,g),k(Qg,_),k(e0,m),k(c0,O),k(l0,w),k(a0,b),k(s0,y),k(Lp,E),k(o0,S),He(R))if(R.length){const Y=i.exposed||(i.exposed={});R.forEach(j=>{Object.defineProperty(Y,j,{get:()=>t[j],set:te=>t[j]=te})})}else i.exposed||(i.exposed={});C&&i.render===Tn&&(i.render=C),H!=null&&(i.inheritAttrs=H),Q&&(i.components=Q),se&&(i.directives=se)}function h0(i,e,t=Tn){He(i)&&(i=vc(i));for(const n in i){const r=i[n];let s;_t(r)?"default"in r?s=di(r.from||n,r.default,!0):s=di(r.from||n):s=di(r),sn(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function Sf(i,e,t){Fn(He(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Dp(i,e,t,n){const r=n.includes(".")?Ap(t,n):()=>t[n];if(Lt(i)){const s=e[i];We(s)&&la(r,s)}else if(We(i))la(r,i.bind(t));else if(_t(i))if(He(i))i.forEach(s=>Dp(s,e,t,n));else{const s=We(i.handler)?i.handler.bind(t):e[i.handler];We(s)&&la(r,s,i)}}function yu(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ya(l,c,o,!0)),ya(l,e,o)),_t(e)&&s.set(e,l),l}function ya(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ya(i,s,t,!0),r&&r.forEach(o=>ya(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=d0[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const d0={data:Mf,props:Ef,emits:Ef,methods:Bs,computed:Bs,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Bs,directives:Bs,watch:m0,provide:Mf,inject:p0};function Mf(i,e){return e?i?function(){return Pt(We(i)?i.call(this,this):i,We(e)?e.call(this,this):e)}:e:i}function p0(i,e){return Bs(vc(i),vc(e))}function vc(i){if(He(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function kt(i,e){return i?[...new Set([].concat(i,e))]:e}function Bs(i,e){return i?Pt(Object.create(null),i,e):e}function Ef(i,e){return i?He(i)&&He(e)?[...new Set([...i,...e])]:Pt(Object.create(null),yf(i),yf(e??{})):e}function m0(i,e){if(!i)return e;if(!e)return i;const t=Pt(Object.create(null),i);for(const n in e)t[n]=kt(i[n],e[n]);return t}function Ip(){return{app:null,config:{isNativeTag:$_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _0=0;function g0(i,e){return function(n,r=null){We(n)||(n=Pt({},n)),r!=null&&!_t(r)&&(r=null);const s=Ip(),o=new WeakSet;let a=!1;const l=s.app={_uid:_0++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:k0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&We(c.install)?(o.add(c),c.install(l,...u)):We(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=$t(n,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Eu(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Sa=l;try{return c()}finally{Sa=null}}};return l}}let Sa=null;function ua(i,e){if(qt){let t=qt.provides;const n=qt.parent&&qt.parent.provides;n===t&&(t=qt.provides=Object.create(n)),t[i]=e}}function di(i,e,t=!1){const n=qt||qn;if(n||Sa){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Sa._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&We(e)?e.call(n&&n.proxy):e}}function v0(i,e,t,n=!1){const r={},s={};ga(s,ja,1),i.propsDefaults=Object.create(null),Up(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:fp(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function x0(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Qe(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Xa(i.emitsOptions,h))continue;const d=e[h];if(l)if(Ke(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=ps(h);r[g]=xc(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Up(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=Rs(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=xc(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&fi(i,"set","$attrs")}function Up(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(aa(l))continue;const c=e[l];let u;r&&Ke(r,u=ps(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Xa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Qe(t),c=a||ot;for(let u=0;u<s.length;u++){const f=s[u];t[f]=xc(r,l,f,c[f],i,!Ke(c,f))}}return o}function xc(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ke(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&We(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=So(r);n=c[t]=l.call(null,e),u()}}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Rs(t))&&(n=!0))}return n}function Np(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!We(i)){const u=f=>{l=!0;const[h,d]=Np(f,e,!0);Pt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return _t(i)&&n.set(i,ss),ss;if(He(s))for(let u=0;u<s.length;u++){const f=ps(s[u]);Tf(f)&&(o[f]=ot)}else if(s)for(const u in s){const f=ps(u);if(Tf(f)){const h=s[u],d=o[f]=He(h)||We(h)?{type:h}:Pt({},h);if(d){const g=wf(Boolean,d.type),_=wf(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||Ke(d,"default"))&&a.push(f)}}}const c=[o,a];return _t(i)&&n.set(i,c),c}function Tf(i){return i[0]!=="$"}function bf(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function Af(i,e){return bf(i)===bf(e)}function wf(i,e){return He(e)?e.findIndex(t=>Af(t,i)):We(e)&&Af(e,i)?0:-1}const Op=i=>i[0]==="_"||i==="$stable",Su=i=>He(i)?i.map(Gn):[Gn(i)],y0=(i,e,t)=>{if(e._n)return e;const n=mc((...r)=>Su(e(...r)),t);return n._c=!1,n},Fp=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Op(r))continue;const s=i[r];if(We(s))e[r]=y0(r,s,n);else if(s!=null){const o=Su(s);e[r]=()=>o}}},Bp=(i,e)=>{const t=Su(e);i.slots.default=()=>t},S0=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Qe(e),ga(e,"_",t)):Fp(e,i.slots={})}else i.slots={},e&&Bp(i,e);ga(i.slots,ja,1)},M0=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=ot;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Fp(e,r)),o=e}else e&&(Bp(i,e),o={default:1});if(s)for(const a in r)!Op(a)&&o[a]==null&&delete r[a]};function yc(i,e,t,n,r=!1){if(He(i)){i.forEach((h,d)=>yc(h,e&&(He(e)?e[d]:e),t,n,r));return}if(ca(n)&&!r)return;const s=n.shapeFlag&4?Eu(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ot?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Lt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):sn(c)&&(c.value=null)),We(l))Oi(l,a,12,[o,u]);else{const h=Lt(l),d=sn(l);if(h||d){const g=()=>{if(i.f){const _=h?Ke(f,l)?f[l]:u[l]:l.value;r?He(_)&&su(_,s):He(_)?_.includes(s)||_.push(s):h?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,Ke(f,l)&&(f[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Kt(g,t)):g()}}}const Kt=Kg;function E0(i){return T0(i)}function T0(i,e){const t=Zd();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Tn,insertStaticContent:g}=i,_=(T,A,U,N=null,X=null,$=null,M=void 0,x=null,D=!!A.dynamicChildren)=>{if(T===A)return;T&&!Ls(T,A)&&(N=V(T),oe(T,X,$,!0),T=null),A.patchFlag===-2&&(D=!1,A.dynamicChildren=null);const{type:z,ref:q,shapeFlag:J}=A;switch(z){case Ya:m(T,A,U,N);break;case ro:p(T,A,U,N);break;case pl:T==null&&y(A,U,N,M);break;case kn:Q(T,A,U,N,X,$,M,x,D);break;default:J&1?C(T,A,U,N,X,$,M,x,D):J&6?se(T,A,U,N,X,$,M,x,D):(J&64||J&128)&&z.process(T,A,U,N,X,$,M,x,D,de)}q!=null&&X&&yc(q,T&&T.ref,$,A||T,!A)},m=(T,A,U,N)=>{if(T==null)n(A.el=a(A.children),U,N);else{const X=A.el=T.el;A.children!==T.children&&c(X,A.children)}},p=(T,A,U,N)=>{T==null?n(A.el=l(A.children||""),U,N):A.el=T.el},y=(T,A,U,N)=>{[T.el,T.anchor]=g(T.children,A,U,N,T.el,T.anchor)},v=({el:T,anchor:A},U,N)=>{let X;for(;T&&T!==A;)X=h(T),n(T,U,N),T=X;n(A,U,N)},E=({el:T,anchor:A})=>{let U;for(;T&&T!==A;)U=h(T),r(T),T=U;r(A)},C=(T,A,U,N,X,$,M,x,D)=>{A.type==="svg"?M="svg":A.type==="math"&&(M="mathml"),T==null?w(A,U,N,X,$,M,x,D):S(T,A,X,$,M,x,D)},w=(T,A,U,N,X,$,M,x)=>{let D,z;const{props:q,shapeFlag:J,transition:pe,dirs:le}=T;if(D=T.el=o(T.type,$,q&&q.is,q),J&8?u(D,T.children):J&16&&O(T.children,D,null,N,X,dl(T,$),M,x),le&&Ki(T,null,N,"created"),b(D,T,T.scopeId,M,N),q){for(const be in q)be!=="value"&&!aa(be)&&s(D,be,null,q[be],$,T.children,N,X,Ee);"value"in q&&s(D,"value",null,q.value,$),(z=q.onVnodeBeforeMount)&&Hn(z,N,T)}le&&Ki(T,null,N,"beforeMount");const me=b0(X,pe);me&&pe.beforeEnter(D),n(D,A,U),((z=q&&q.onVnodeMounted)||me||le)&&Kt(()=>{z&&Hn(z,N,T),me&&pe.enter(D),le&&Ki(T,null,N,"mounted")},X)},b=(T,A,U,N,X)=>{if(U&&d(T,U),N)for(let $=0;$<N.length;$++)d(T,N[$]);if(X){let $=X.subTree;if(A===$){const M=X.vnode;b(T,M,M.scopeId,M.slotScopeIds,X.parent)}}},O=(T,A,U,N,X,$,M,x,D=0)=>{for(let z=D;z<T.length;z++){const q=T[z]=x?Ai(T[z]):Gn(T[z]);_(null,q,A,U,N,X,$,M,x)}},S=(T,A,U,N,X,$,M)=>{const x=A.el=T.el;let{patchFlag:D,dynamicChildren:z,dirs:q}=A;D|=T.patchFlag&16;const J=T.props||ot,pe=A.props||ot;let le;if(U&&$i(U,!1),(le=pe.onVnodeBeforeUpdate)&&Hn(le,U,A,T),q&&Ki(A,T,U,"beforeUpdate"),U&&$i(U,!0),z?R(T.dynamicChildren,z,x,U,N,dl(A,X),$):M||j(T,A,x,null,U,N,dl(A,X),$,!1),D>0){if(D&16)H(x,A,J,pe,U,N,X);else if(D&2&&J.class!==pe.class&&s(x,"class",null,pe.class,X),D&4&&s(x,"style",J.style,pe.style,X),D&8){const me=A.dynamicProps;for(let be=0;be<me.length;be++){const Ce=me[be],ue=J[Ce],Ie=pe[Ce];(Ie!==ue||Ce==="value")&&s(x,Ce,ue,Ie,X,T.children,U,N,Ee)}}D&1&&T.children!==A.children&&u(x,A.children)}else!M&&z==null&&H(x,A,J,pe,U,N,X);((le=pe.onVnodeUpdated)||q)&&Kt(()=>{le&&Hn(le,U,A,T),q&&Ki(A,T,U,"updated")},N)},R=(T,A,U,N,X,$,M)=>{for(let x=0;x<A.length;x++){const D=T[x],z=A[x],q=D.el&&(D.type===kn||!Ls(D,z)||D.shapeFlag&70)?f(D.el):U;_(D,z,q,null,N,X,$,M,!0)}},H=(T,A,U,N,X,$,M)=>{if(U!==N){if(U!==ot)for(const x in U)!aa(x)&&!(x in N)&&s(T,x,U[x],null,M,A.children,X,$,Ee);for(const x in N){if(aa(x))continue;const D=N[x],z=U[x];D!==z&&x!=="value"&&s(T,x,z,D,M,A.children,X,$,Ee)}"value"in N&&s(T,"value",U.value,N.value,M)}},Q=(T,A,U,N,X,$,M,x,D)=>{const z=A.el=T?T.el:a(""),q=A.anchor=T?T.anchor:a("");let{patchFlag:J,dynamicChildren:pe,slotScopeIds:le}=A;le&&(x=x?x.concat(le):le),T==null?(n(z,U,N),n(q,U,N),O(A.children||[],U,q,X,$,M,x,D)):J>0&&J&64&&pe&&T.dynamicChildren?(R(T.dynamicChildren,pe,U,X,$,M,x),(A.key!=null||X&&A===X.subTree)&&zp(T,A,!0)):j(T,A,U,q,X,$,M,x,D)},se=(T,A,U,N,X,$,M,x,D)=>{A.slotScopeIds=x,T==null?A.shapeFlag&512?X.ctx.activate(A,U,N,M,D):F(A,U,N,X,$,M,D):G(T,A,D)},F=(T,A,U,N,X,$,M)=>{const x=T.component=N0(T,N,X);if(Rp(T)&&(x.ctx.renderer=de),O0(x),x.asyncDep){if(X&&X.registerDep(x,k),!T.el){const D=x.subTree=$t(ro);p(null,D,A,U)}}else k(x,T,A,U,X,$,M)},G=(T,A,U)=>{const N=A.component=T.component;if(Xg(T,A,U))if(N.asyncDep&&!N.asyncResolved){Y(N,A,U);return}else N.next=A,zg(N.update),N.effect.dirty=!0,N.update();else A.el=T.el,N.vnode=A},k=(T,A,U,N,X,$,M)=>{const x=()=>{if(T.isMounted){let{next:q,bu:J,u:pe,parent:le,vnode:me}=T;{const I=Hp(T);if(I){q&&(q.el=me.el,Y(T,q,M)),I.asyncDep.then(()=>{T.isUnmounted||x()});return}}let be=q,Ce;$i(T,!1),q?(q.el=me.el,Y(T,q,M)):q=me,J&&ul(J),(Ce=q.props&&q.props.onVnodeBeforeUpdate)&&Hn(Ce,le,q,me),$i(T,!0);const ue=fl(T),Ie=T.subTree;T.subTree=ue,_(Ie,ue,f(Ie.el),V(Ie),T,X,$),q.el=ue.el,be===null&&qg(T,ue.el),pe&&Kt(pe,X),(Ce=q.props&&q.props.onVnodeUpdated)&&Kt(()=>Hn(Ce,le,q,me),X)}else{let q;const{el:J,props:pe}=A,{bm:le,m:me,parent:be}=T,Ce=ca(A);if($i(T,!1),le&&ul(le),!Ce&&(q=pe&&pe.onVnodeBeforeMount)&&Hn(q,be,A),$i(T,!0),J&&L){const ue=()=>{T.subTree=fl(T),L(J,T.subTree,T,X,null)};Ce?A.type.__asyncLoader().then(()=>!T.isUnmounted&&ue()):ue()}else{const ue=T.subTree=fl(T);_(null,ue,U,N,T,X,$),A.el=ue.el}if(me&&Kt(me,X),!Ce&&(q=pe&&pe.onVnodeMounted)){const ue=A;Kt(()=>Hn(q,be,ue),X)}(A.shapeFlag&256||be&&ca(be.vnode)&&be.vnode.shapeFlag&256)&&T.a&&Kt(T.a,X),T.isMounted=!0,A=U=N=null}},D=T.effect=new cu(x,Tn,()=>xu(z),T.scope),z=T.update=()=>{D.dirty&&D.run()};z.id=T.uid,$i(T,!0),z()},Y=(T,A,U)=>{A.component=T;const N=T.vnode.props;T.vnode=A,T.next=null,x0(T,A.props,N,U),M0(T,A.children,U),Ar(),vf(T),wr()},j=(T,A,U,N,X,$,M,x,D=!1)=>{const z=T&&T.children,q=T?T.shapeFlag:0,J=A.children,{patchFlag:pe,shapeFlag:le}=A;if(pe>0){if(pe&128){fe(z,J,U,N,X,$,M,x,D);return}else if(pe&256){te(z,J,U,N,X,$,M,x,D);return}}le&8?(q&16&&Ee(z,X,$),J!==z&&u(U,J)):q&16?le&16?fe(z,J,U,N,X,$,M,x,D):Ee(z,X,$,!0):(q&8&&u(U,""),le&16&&O(J,U,N,X,$,M,x,D))},te=(T,A,U,N,X,$,M,x,D)=>{T=T||ss,A=A||ss;const z=T.length,q=A.length,J=Math.min(z,q);let pe;for(pe=0;pe<J;pe++){const le=A[pe]=D?Ai(A[pe]):Gn(A[pe]);_(T[pe],le,U,null,X,$,M,x,D)}z>q?Ee(T,X,$,!0,!1,J):O(A,U,N,X,$,M,x,D,J)},fe=(T,A,U,N,X,$,M,x,D)=>{let z=0;const q=A.length;let J=T.length-1,pe=q-1;for(;z<=J&&z<=pe;){const le=T[z],me=A[z]=D?Ai(A[z]):Gn(A[z]);if(Ls(le,me))_(le,me,U,null,X,$,M,x,D);else break;z++}for(;z<=J&&z<=pe;){const le=T[J],me=A[pe]=D?Ai(A[pe]):Gn(A[pe]);if(Ls(le,me))_(le,me,U,null,X,$,M,x,D);else break;J--,pe--}if(z>J){if(z<=pe){const le=pe+1,me=le<q?A[le].el:N;for(;z<=pe;)_(null,A[z]=D?Ai(A[z]):Gn(A[z]),U,me,X,$,M,x,D),z++}}else if(z>pe)for(;z<=J;)oe(T[z],X,$,!0),z++;else{const le=z,me=z,be=new Map;for(z=me;z<=pe;z++){const Re=A[z]=D?Ai(A[z]):Gn(A[z]);Re.key!=null&&be.set(Re.key,z)}let Ce,ue=0;const Ie=pe-me+1;let I=!1,_e=0;const xe=new Array(Ie);for(z=0;z<Ie;z++)xe[z]=0;for(z=le;z<=J;z++){const Re=T[z];if(ue>=Ie){oe(Re,X,$,!0);continue}let Ne;if(Re.key!=null)Ne=be.get(Re.key);else for(Ce=me;Ce<=pe;Ce++)if(xe[Ce-me]===0&&Ls(Re,A[Ce])){Ne=Ce;break}Ne===void 0?oe(Re,X,$,!0):(xe[Ne-me]=z+1,Ne>=_e?_e=Ne:I=!0,_(Re,A[Ne],U,null,X,$,M,x,D),ue++)}const ve=I?A0(xe):ss;for(Ce=ve.length-1,z=Ie-1;z>=0;z--){const Re=me+z,Ne=A[Re],Xe=Re+1<q?A[Re+1].el:N;xe[z]===0?_(null,Ne,U,Xe,X,$,M,x,D):I&&(Ce<0||z!==ve[Ce]?ae(Ne,U,Xe,2):Ce--)}}},ae=(T,A,U,N,X=null)=>{const{el:$,type:M,transition:x,children:D,shapeFlag:z}=T;if(z&6){ae(T.component.subTree,A,U,N);return}if(z&128){T.suspense.move(A,U,N);return}if(z&64){M.move(T,A,U,de);return}if(M===kn){n($,A,U);for(let J=0;J<D.length;J++)ae(D[J],A,U,N);n(T.anchor,A,U);return}if(M===pl){v(T,A,U);return}if(N!==2&&z&1&&x)if(N===0)x.beforeEnter($),n($,A,U),Kt(()=>x.enter($),X);else{const{leave:J,delayLeave:pe,afterLeave:le}=x,me=()=>n($,A,U),be=()=>{J($,()=>{me(),le&&le()})};pe?pe($,me,be):be()}else n($,A,U)},oe=(T,A,U,N=!1,X=!1)=>{const{type:$,props:M,ref:x,children:D,dynamicChildren:z,shapeFlag:q,patchFlag:J,dirs:pe}=T;if(x!=null&&yc(x,null,U,T,!0),q&256){A.ctx.deactivate(T);return}const le=q&1&&pe,me=!ca(T);let be;if(me&&(be=M&&M.onVnodeBeforeUnmount)&&Hn(be,A,T),q&6)ge(T.component,U,N);else{if(q&128){T.suspense.unmount(U,N);return}le&&Ki(T,null,A,"beforeUnmount"),q&64?T.type.remove(T,A,U,X,de,N):z&&($!==kn||J>0&&J&64)?Ee(z,A,U,!1,!0):($===kn&&J&384||!X&&q&16)&&Ee(D,A,U),N&&Z(T)}(me&&(be=M&&M.onVnodeUnmounted)||le)&&Kt(()=>{be&&Hn(be,A,T),le&&Ki(T,null,A,"unmounted")},U)},Z=T=>{const{type:A,el:U,anchor:N,transition:X}=T;if(A===kn){re(U,N);return}if(A===pl){E(T);return}const $=()=>{r(U),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(T.shapeFlag&1&&X&&!X.persisted){const{leave:M,delayLeave:x}=X,D=()=>M(U,$);x?x(T.el,$,D):D()}else $()},re=(T,A)=>{let U;for(;T!==A;)U=h(T),r(T),T=U;r(A)},ge=(T,A,U)=>{const{bum:N,scope:X,update:$,subTree:M,um:x}=T;N&&ul(N),X.stop(),$&&($.active=!1,oe(M,T,A,U)),x&&Kt(x,A),Kt(()=>{T.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},Ee=(T,A,U,N=!1,X=!1,$=0)=>{for(let M=$;M<T.length;M++)oe(T[M],A,U,N,X)},V=T=>T.shapeFlag&6?V(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let ce=!1;const he=(T,A,U)=>{T==null?A._vnode&&oe(A._vnode,null,null,!0):_(A._vnode||null,T,A,null,null,null,U),ce||(ce=!0,vf(),Sp(),ce=!1),A._vnode=T},de={p:_,um:oe,m:ae,r:Z,mt:F,mc:O,pc:j,pbc:R,n:V,o:i};let we,L;return e&&([we,L]=e(de)),{render:he,hydrate:we,createApp:g0(he,we)}}function dl({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $i({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function b0(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function zp(i,e,t=!1){const n=i.children,r=e.children;if(He(n)&&He(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ai(r[s]),a.el=o.el),t||zp(o,a)),a.type===Ya&&(a.el=o.el)}}function A0(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Hp(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hp(e)}const w0=i=>i.__isTeleport,kn=Symbol.for("v-fgt"),Ya=Symbol.for("v-txt"),ro=Symbol.for("v-cmt"),pl=Symbol.for("v-stc"),Vs=[];let On=null;function kp(i=!1){Vs.push(On=i?null:[])}function R0(){Vs.pop(),On=Vs[Vs.length-1]||null}let so=1;function Rf(i){so+=i}function C0(i){return i.dynamicChildren=so>0?On||ss:null,R0(),so>0&&On&&On.push(i),i}function Gp(i,e,t,n,r,s){return C0(Ws(i,e,t,n,r,s,!0))}function Sc(i){return i?i.__v_isVNode===!0:!1}function Ls(i,e){return i.type===e.type&&i.key===e.key}const ja="__vInternal",Vp=({key:i})=>i??null,fa=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Lt(i)||sn(i)||We(i)?{i:qn,r:i,k:e,f:!!t}:i:null);function Ws(i,e=null,t=null,n=0,r=null,s=i===kn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Vp(e),ref:e&&fa(e),scopeId:Tp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qn};return a?(Mu(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),so>0&&!o&&On&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&On.push(l),l}const $t=P0;function P0(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Yg)&&(i=ro),Sc(i)){const a=_s(i,e,!0);return t&&Mu(a,t),so>0&&!s&&On&&(a.shapeFlag&6?On[On.indexOf(i)]=a:On.push(a)),a.patchFlag|=-2,a}if(H0(i)&&(i=i.__vccOpts),e){e=L0(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=lu(a)),_t(l)&&(dp(l)&&!He(l)&&(l=Pt({},l)),e.style=au(l))}const o=Lt(i)?1:jg(i)?128:w0(i)?64:_t(i)?4:We(i)?2:0;return Ws(i,e,t,n,r,o,s,!0)}function L0(i){return i?dp(i)||ja in i?Pt({},i):i:null}function _s(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?D0(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Vp(a),ref:e&&e.ref?t&&r?He(r)?r.concat(fa(e)):[r,fa(e)]:fa(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==kn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&_s(i.ssContent),ssFallback:i.ssFallback&&_s(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Mc(i=" ",e=0){return $t(Ya,null,i,e)}function Gn(i){return i==null||typeof i=="boolean"?$t(ro):He(i)?$t(kn,null,i.slice()):typeof i=="object"?Ai(i):$t(Ya,null,String(i))}function Ai(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:_s(i)}function Mu(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Mu(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ja in e)?e._ctx=qn:r===3&&qn&&(qn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:qn},t=32):(e=String(e),n&64?(t=16,e=[Mc(e)]):t=8);i.children=e,i.shapeFlag|=t}function D0(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=lu([e.class,n.class]));else if(r==="style")e.style=au([e.style,n.style]);else if(Ba(r)){const s=e[r],o=n[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Hn(i,e,t,n=null){Fn(i,e,7,[t,n])}const I0=Ip();let U0=0;function N0(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||I0,s={uid:U0++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(n,r),emitsOptions:Ep(n,r),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:n.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gg.bind(null,s),i.ce&&i.ce(s),s}let qt=null,Ma,Ec;{const i=Zd(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ma=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),Ec=e("__VUE_SSR_SETTERS__",t=>Ka=t)}const So=i=>{const e=qt;return Ma(i),i.scope.on(),()=>{i.scope.off(),Ma(e)}},Cf=()=>{qt&&qt.scope.off(),Ma(null)};function Wp(i){return i.vnode.shapeFlag&4}let Ka=!1;function O0(i,e=!1){e&&Ec(e);const{props:t,children:n}=i.vnode,r=Wp(i);v0(i,t,r,e),S0(i,n);const s=r?F0(i,e):void 0;return e&&Ec(!1),s}function F0(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=mu(new Proxy(i.ctx,u0));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?z0(i):null,s=So(i);Ar();const o=Oi(n,i,0,[i.props,r]);if(wr(),s(),Kd(o)){if(o.then(Cf,Cf),e)return o.then(a=>{Pf(i,a,e)}).catch(a=>{Wa(a,i,0)});i.asyncDep=o}else Pf(i,o,e)}else Xp(i,e)}function Pf(i,e,t){We(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:_t(e)&&(i.setupState=gp(e)),Xp(i,t)}let Lf;function Xp(i,e,t){const n=i.type;if(!i.render){if(!e&&Lf&&!n.render){const r=n.template||yu(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Pt(Pt({isCustomElement:s,delimiters:a},o),l);n.render=Lf(r,c)}}i.render=n.render||Tn}{const r=So(i);Ar();try{f0(i)}finally{wr(),r()}}}function B0(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(e,t){return rn(i,"get","$attrs"),e[t]}}))}function z0(i){const e=t=>{i.exposed=t||{}};return{get attrs(){return B0(i)},slots:i.slots,emit:i.emit,expose:e}}function Eu(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(gp(mu(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gs)return Gs[t](i)},has(e,t){return t in e||t in Gs}}))}function H0(i){return We(i)&&"__vccOpts"in i}const In=(i,e)=>Ig(i,e,Ka);function qp(i,e,t){const n=arguments.length;return n===2?_t(e)&&!He(e)?Sc(e)?$t(i,null,[e]):$t(i,e):$t(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Sc(t)&&(t=[t]),$t(i,e,t))}const k0="3.4.14";/**
* @vue/runtime-dom v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const G0="http://www.w3.org/2000/svg",V0="http://www.w3.org/1998/Math/MathML",wi=typeof document<"u"?document:null,Df=wi&&wi.createElement("template"),W0={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?wi.createElementNS(G0,i):e==="mathml"?wi.createElementNS(V0,i):wi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>wi.createTextNode(i),createComment:i=>wi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>wi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Df.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=Df.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},X0=Symbol("_vtc");function q0(i,e,t){const n=i[X0];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Y0=Symbol("_vod"),j0=Symbol("");function K0(i,e,t){const n=i.style,r=n.display,s=Lt(t);if(t&&!s){if(e&&!Lt(e))for(const o in e)t[o]==null&&Tc(n,o,"");for(const o in t)Tc(n,o,t[o])}else if(s){if(e!==t){const o=n[j0];o&&(t+=";"+o),n.cssText=t}}else e&&i.removeAttribute("style");Y0 in i&&(n.display=r)}const If=/\s*!important$/;function Tc(i,e,t){if(He(t))t.forEach(n=>Tc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=$0(i,e);If.test(t)?i.setProperty(Rs(n),t.replace(If,""),"important"):i[n]=t}}const Uf=["Webkit","Moz","ms"],ml={};function $0(i,e){const t=ml[e];if(t)return t;let n=ps(e);if(n!=="filter"&&n in i)return ml[e]=n;n=$d(n);for(let r=0;r<Uf.length;r++){const s=Uf[r]+n;if(s in i)return ml[e]=s}return e}const Nf="http://www.w3.org/1999/xlink";function Z0(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Nf,e.slice(6,e.length)):i.setAttributeNS(Nf,e,t);else{const s=ug(e);t==null||s&&!Jd(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function J0(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=t;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=t??"";c!==u&&(i.value=u),t==null&&i.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=Jd(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function Q0(i,e,t,n){i.addEventListener(e,t,n)}function ev(i,e,t,n){i.removeEventListener(e,t,n)}const Of=Symbol("_vei");function tv(i,e,t,n,r=null){const s=i[Of]||(i[Of]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=nv(e);if(n){const c=s[e]=sv(n,r);Q0(i,a,c,l)}else o&&(ev(i,a,o,l),s[e]=void 0)}}const Ff=/(?:Once|Passive|Capture)$/;function nv(i){let e;if(Ff.test(i)){e={};let n;for(;n=i.match(Ff);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Rs(i.slice(2)),e]}let _l=0;const iv=Promise.resolve(),rv=()=>_l||(iv.then(()=>_l=0),_l=Date.now());function sv(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Fn(ov(n,t.value),e,5,[n])};return t.value=i,t.attached=rv(),t}function ov(i,e){if(He(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Bf=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,av=(i,e,t,n,r,s,o,a,l)=>{const c=r==="svg";e==="class"?q0(i,n,c):e==="style"?K0(i,t,n):Ba(e)?ru(e)||tv(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lv(i,e,n,c))?J0(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Z0(i,e,n,c))};function lv(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Bf(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bf(e)&&Lt(t)?!1:e in i}const cv=Pt({patchProp:av},W0);let zf;function uv(){return zf||(zf=E0(cv))}const fv=(...i)=>{const e=uv().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=dv(n);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,hv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hv(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function dv(i){return Lt(i)?document.querySelector(i):i}var pv=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const mv=Symbol();var Hf;(function(i){i.direct="direct",i.patchObject="patch object",i.patchFunction="patch function"})(Hf||(Hf={}));function _v(){const i=fg(!0),e=i.run(()=>gu({}));let t=[],n=[];const r=mu({install(s){r._a=s,s.provide(mv,r),s.config.globalProperties.$pinia=r,n.forEach(o=>t.push(o)),n=[]},use(s){return!this._a&&!pv?n.push(s):t.push(s),this},_p:t,_a:null,_e:i,_s:new Map,state:e});return r}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $r=typeof window<"u";function gv(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const et=Object.assign;function gl(i,e){const t={};for(const n in e){const r=e[n];t[n]=Bn(r)?r.map(i):i(r)}return t}const Xs=()=>{},Bn=Array.isArray,vv=/\/$/,xv=i=>i.replace(vv,"");function vl(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=Ev(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function yv(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function kf(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Sv(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&gs(e.matched[n],t.matched[r])&&Yp(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function gs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Yp(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Mv(i[t],e[t]))return!1;return!0}function Mv(i,e){return Bn(i)?Gf(i,e):Bn(e)?Gf(e,i):i===e}function Gf(i,e){return Bn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Ev(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/"),r=n[n.length-1];(r===".."||r===".")&&n.push("");let s=t.length-1,o,a;for(o=0;o<n.length;o++)if(a=n[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(o-(o===n.length?1:0)).join("/")}var oo;(function(i){i.pop="pop",i.push="push"})(oo||(oo={}));var qs;(function(i){i.back="back",i.forward="forward",i.unknown=""})(qs||(qs={}));function Tv(i){if(!i)if($r){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),xv(i)}const bv=/^[^#]+#/;function Av(i,e){return i.replace(bv,"#")+e}function wv(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const $a=()=>({left:window.pageXOffset,top:window.pageYOffset});function Rv(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=wv(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vf(i,e){return(history.state?history.state.position-e:-1)+i}const bc=new Map;function Cv(i,e){bc.set(i,e)}function Pv(i){const e=bc.get(i);return bc.delete(i),e}let Lv=()=>location.protocol+"//"+location.host;function jp(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),kf(l,"")}return kf(t,i)+n+r}function Dv(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const d=jp(i,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else n(d);r.forEach(p=>{p(t.value,g,{delta:m,type:oo.pop,direction:m?m>0?qs.forward:qs.back:qs.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(et({},h.state,{scroll:$a()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Wf(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?$a():null}}function Iv(i){const{history:e,location:t}=window,n={value:jp(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:Lv()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,Wf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=et({},r.value,e.state,{forward:l,scroll:$a()});s(u.current,u,!0);const f=et({},Wf(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function Uv(i){i=Tv(i);const e=Iv(i),t=Dv(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=et({location:"",base:i,go:n,createHref:Av.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Nv(i){return typeof i=="string"||i&&typeof i=="object"}function Kp(i){return typeof i=="string"||typeof i=="symbol"}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$p=Symbol("");var Xf;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Xf||(Xf={}));function vs(i,e){return et(new Error,{type:i,[$p]:!0},e)}function ei(i,e){return i instanceof Error&&$p in i&&(e==null||!!(i.type&e))}const qf="[^/]+?",Ov={sensitive:!1,strict:!1,start:!0,end:!0},Fv=/[.+*?^${}()[\]/\\]/g;function Bv(i,e){const t=et({},Ov,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Fv,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const y=p||qf;if(y!==qf){d+=10;try{new RegExp(`(${y})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+E.message)}}let v=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),_&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(Bn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=Bn(p)?p.join("/"):p;if(!y)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function zv(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Hv(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=zv(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Yf(n))return 1;if(Yf(r))return-1}return r.length-n.length}function Yf(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const kv={type:0,value:""},Gv=/[a-zA-Z0-9_]/;function Vv(i){if(!i)return[[]];if(i==="/")return[[kv]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:Gv.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Wv(i,e,t){const n=Bv(Vv(i.path),t),r=et(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Xv(i,e){const t=[],n=new Map;e=$f({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,f,h){const d=!h,g=qv(u);g.aliasOf=h&&h.record;const _=$f(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of v)m.push(et({},g,{components:h?h.record.components:g.components,path:E,aliasOf:h?h.record:g}))}let p,y;for(const v of m){const{path:E}=v;if(f&&E[0]!=="/"){const C=f.record.path,w=C[C.length-1]==="/"?"":"/";v.path=f.record.path+(E&&w+E)}if(p=Wv(v,f,_),h?h.alias.push(p):(y=y||p,y!==p&&y.alias.push(p),d&&u.name&&!Kf(p)&&o(u.name)),g.children){const C=g.children;for(let w=0;w<C.length;w++)s(C[w],p,h&&h.children[w])}h=h||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return y?()=>{o(y)}:Xs}function o(u){if(Kp(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&Hv(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Zp(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Kf(u)&&n.set(u.record.name,u)}function c(u,f){let h,d={},g,_;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw vs(1,{location:u});_=h.record.name,d=et(jf(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&jf(u.params,h.keys.map(y=>y.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(y=>y.re.test(g)),h&&(d=h.parse(g),_=h.record.name);else{if(h=f.name?n.get(f.name):t.find(y=>y.re.test(f.path)),!h)throw vs(1,{location:u,currentLocation:f});_=h.record.name,d=et({},f.params,u.params),g=h.stringify(d)}const m=[];let p=h;for(;p;)m.unshift(p.record),p=p.parent;return{name:_,path:g,params:d,matched:m,meta:jv(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function jf(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function qv(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:Yv(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function Yv(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="object"?t[n]:t;return e}function Kf(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function jv(i){return i.reduce((e,t)=>et(e,t.meta),{})}function $f(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Zp(i,e){return e.children.some(t=>t===i||Zp(i,t))}const Jp=/#/g,Kv=/&/g,$v=/\//g,Zv=/=/g,Jv=/\?/g,Qp=/\+/g,Qv=/%5B/g,ex=/%5D/g,em=/%5E/g,tx=/%60/g,tm=/%7B/g,nx=/%7C/g,nm=/%7D/g,ix=/%20/g;function Tu(i){return encodeURI(""+i).replace(nx,"|").replace(Qv,"[").replace(ex,"]")}function rx(i){return Tu(i).replace(tm,"{").replace(nm,"}").replace(em,"^")}function Ac(i){return Tu(i).replace(Qp,"%2B").replace(ix,"+").replace(Jp,"%23").replace(Kv,"%26").replace(tx,"`").replace(tm,"{").replace(nm,"}").replace(em,"^")}function sx(i){return Ac(i).replace(Zv,"%3D")}function ox(i){return Tu(i).replace(Jp,"%23").replace(Jv,"%3F")}function ax(i){return i==null?"":ox(i).replace($v,"%2F")}function Ea(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function lx(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Qp," "),o=s.indexOf("="),a=Ea(o<0?s:s.slice(0,o)),l=o<0?null:Ea(s.slice(o+1));if(a in e){let c=e[a];Bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zf(i){let e="";for(let t in i){const n=i[t];if(t=sx(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Bn(n)?n.map(s=>s&&Ac(s)):[n&&Ac(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function cx(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Bn(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const ux=Symbol(""),Jf=Symbol(""),bu=Symbol(""),im=Symbol(""),wc=Symbol("");function Ds(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i.slice(),reset:t}}function Ri(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(vs(4,{from:t,to:e})):f instanceof Error?a(f):Nv(f)?a(vs(2,{from:e,to:f})):(s&&n.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function xl(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(fx(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Ri(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=gv(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ri(h,t,n,s,o)()}))}}return r}function fx(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Qf(i){const e=di(bu),t=di(im),n=In(()=>e.resolve(hi(i.to))),r=In(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(gs.bind(null,u));if(h>-1)return h;const d=eh(l[c-2]);return c>1&&eh(u)===d&&f[f.length-1].path!==d?f.findIndex(gs.bind(null,l[c-2])):h}),s=In(()=>r.value>-1&&px(t.params,n.value.params)),o=In(()=>r.value>-1&&r.value===t.matched.length-1&&Yp(t.params,n.value.params));function a(l={}){return dx(l)?e[hi(i.replace)?"replace":"push"](hi(i.to)).catch(Xs):Promise.resolve()}return{route:n,href:In(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const hx=wp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qf,setup(i,{slots:e}){const t=Va(Qf(i)),{options:n}=di(bu),r=In(()=>({[th(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[th(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:qp("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Rc=hx;function dx(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function px(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Bn(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function eh(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const th=(i,e,t)=>i??e??t,mx=wp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=di(wc),r=In(()=>i.route||n.value),s=di(Jf,0),o=In(()=>{let c=hi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=In(()=>r.value.matched[o.value]);ua(Jf,In(()=>o.value+1)),ua(ux,a),ua(wc,r);const l=gu();return la(()=>[l.value,a.value,i.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!gs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,f=a.value,h=f&&f.components[u];if(!h)return nh(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=qp(h,et({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return nh(t.default,{Component:m,route:c})||m}}});function nh(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const rm=mx;function _x(i){const e=Xv(i.routes,i),t=i.parseQuery||lx,n=i.stringifyQuery||Zf,r=i.history,s=Ds(),o=Ds(),a=Ds(),l=Ug(xi);let c=xi;$r&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gl.bind(null,V=>""+V),f=gl.bind(null,ax),h=gl.bind(null,Ea);function d(V,ce){let he,de;return Kp(V)?(he=e.getRecordMatcher(V),de=ce):de=V,e.addRoute(de,he)}function g(V){const ce=e.getRecordMatcher(V);ce&&e.removeRoute(ce)}function _(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function p(V,ce){if(ce=et({},ce||l.value),typeof V=="string"){const A=vl(t,V,ce.path),U=e.resolve({path:A.path},ce),N=r.createHref(A.fullPath);return et(A,U,{params:h(U.params),hash:Ea(A.hash),redirectedFrom:void 0,href:N})}let he;if("path"in V)he=et({},V,{path:vl(t,V.path,ce.path).path});else{const A=et({},V.params);for(const U in A)A[U]==null&&delete A[U];he=et({},V,{params:f(A)}),ce.params=f(ce.params)}const de=e.resolve(he,ce),we=V.hash||"";de.params=u(h(de.params));const L=yv(n,et({},V,{hash:rx(we),path:de.path})),T=r.createHref(L);return et({fullPath:L,hash:we,query:n===Zf?cx(V.query):V.query||{}},de,{redirectedFrom:void 0,href:T})}function y(V){return typeof V=="string"?vl(t,V,l.value.path):et({},V)}function v(V,ce){if(c!==V)return vs(8,{from:ce,to:V})}function E(V){return b(V)}function C(V){return E(et(y(V),{replace:!0}))}function w(V){const ce=V.matched[V.matched.length-1];if(ce&&ce.redirect){const{redirect:he}=ce;let de=typeof he=="function"?he(V):he;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=y(de):{path:de},de.params={}),et({query:V.query,hash:V.hash,params:"path"in de?{}:V.params},de)}}function b(V,ce){const he=c=p(V),de=l.value,we=V.state,L=V.force,T=V.replace===!0,A=w(he);if(A)return b(et(y(A),{state:typeof A=="object"?et({},we,A.state):we,force:L,replace:T}),ce||he);const U=he;U.redirectedFrom=ce;let N;return!L&&Sv(n,de,he)&&(N=vs(16,{to:U,from:de}),ae(de,de,!0,!1)),(N?Promise.resolve(N):R(U,de)).catch(X=>ei(X)?ei(X,2)?X:fe(X):j(X,U,de)).then(X=>{if(X){if(ei(X,2))return b(et({replace:T},y(X.to),{state:typeof X.to=="object"?et({},we,X.to.state):we,force:L}),ce||U)}else X=Q(U,de,!0,T,we);return H(U,de,X),X})}function O(V,ce){const he=v(V,ce);return he?Promise.reject(he):Promise.resolve()}function S(V){const ce=re.values().next().value;return ce&&typeof ce.runWithContext=="function"?ce.runWithContext(V):V()}function R(V,ce){let he;const[de,we,L]=gx(V,ce);he=xl(de.reverse(),"beforeRouteLeave",V,ce);for(const A of de)A.leaveGuards.forEach(U=>{he.push(Ri(U,V,ce))});const T=O.bind(null,V,ce);return he.push(T),Ee(he).then(()=>{he=[];for(const A of s.list())he.push(Ri(A,V,ce));return he.push(T),Ee(he)}).then(()=>{he=xl(we,"beforeRouteUpdate",V,ce);for(const A of we)A.updateGuards.forEach(U=>{he.push(Ri(U,V,ce))});return he.push(T),Ee(he)}).then(()=>{he=[];for(const A of L)if(A.beforeEnter)if(Bn(A.beforeEnter))for(const U of A.beforeEnter)he.push(Ri(U,V,ce));else he.push(Ri(A.beforeEnter,V,ce));return he.push(T),Ee(he)}).then(()=>(V.matched.forEach(A=>A.enterCallbacks={}),he=xl(L,"beforeRouteEnter",V,ce),he.push(T),Ee(he))).then(()=>{he=[];for(const A of o.list())he.push(Ri(A,V,ce));return he.push(T),Ee(he)}).catch(A=>ei(A,8)?A:Promise.reject(A))}function H(V,ce,he){a.list().forEach(de=>S(()=>de(V,ce,he)))}function Q(V,ce,he,de,we){const L=v(V,ce);if(L)return L;const T=ce===xi,A=$r?history.state:{};he&&(de||T?r.replace(V.fullPath,et({scroll:T&&A&&A.scroll},we)):r.push(V.fullPath,we)),l.value=V,ae(V,ce,he,T),fe()}let se;function F(){se||(se=r.listen((V,ce,he)=>{if(!ge.listening)return;const de=p(V),we=w(de);if(we){b(et(we,{replace:!0}),de).catch(Xs);return}c=de;const L=l.value;$r&&Cv(Vf(L.fullPath,he.delta),$a()),R(de,L).catch(T=>ei(T,12)?T:ei(T,2)?(b(T.to,de).then(A=>{ei(A,20)&&!he.delta&&he.type===oo.pop&&r.go(-1,!1)}).catch(Xs),Promise.reject()):(he.delta&&r.go(-he.delta,!1),j(T,de,L))).then(T=>{T=T||Q(de,L,!1),T&&(he.delta&&!ei(T,8)?r.go(-he.delta,!1):he.type===oo.pop&&ei(T,20)&&r.go(-1,!1)),H(de,L,T)}).catch(Xs)}))}let G=Ds(),k=Ds(),Y;function j(V,ce,he){fe(V);const de=k.list();return de.length?de.forEach(we=>we(V,ce,he)):console.error(V),Promise.reject(V)}function te(){return Y&&l.value!==xi?Promise.resolve():new Promise((V,ce)=>{G.add([V,ce])})}function fe(V){return Y||(Y=!V,F(),G.list().forEach(([ce,he])=>V?he(V):ce()),G.reset()),V}function ae(V,ce,he,de){const{scrollBehavior:we}=i;if(!$r||!we)return Promise.resolve();const L=!he&&Pv(Vf(V.fullPath,0))||(de||!he)&&history.state&&history.state.scroll||null;return xp().then(()=>we(V,ce,L)).then(T=>T&&Rv(T)).catch(T=>j(T,V,ce))}const oe=V=>r.go(V);let Z;const re=new Set,ge={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:m,getRoutes:_,resolve:p,options:i,push:E,replace:C,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:k.add,isReady:te,install(V){const ce=this;V.component("RouterLink",Rc),V.component("RouterView",rm),V.config.globalProperties.$router=ce,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>hi(l)}),$r&&!Z&&l.value===xi&&(Z=!0,E(r.location).catch(we=>{}));const he={};for(const we in xi)Object.defineProperty(he,we,{get:()=>l.value[we],enumerable:!0});V.provide(bu,ce),V.provide(im,fp(he)),V.provide(wc,l);const de=V.unmount;re.add(V),V.unmount=function(){re.delete(V),re.size<1&&(c=xi,se&&se(),se=null,l.value=xi,Z=!1,Y=!1),de()}}};function Ee(V){return V.reduce((ce,he)=>ce.then(()=>S(he)),Promise.resolve())}return ge}function gx(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>gs(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>gs(c,l))||r.push(l))}return[t,n,r]}const vx=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},xx={class:"wrapper"},yx={__name:"App",setup(i){return(e,t)=>(kp(),Gp(kn,null,[Ws("header",null,[Ws("div",xx,[Ws("nav",null,[$t(hi(Rc),{to:"/"},{default:mc(()=>[Mc("Home")]),_:1}),$t(hi(Rc),{to:"/about"},{default:mc(()=>[Mc("About")]),_:1})])])]),$t(hi(rm))],64))}},Sx=vx(yx,[["__scopeId","data-v-e99c0f15"]]),Mx="modulepreload",Ex=function(i,e){return new URL(i,e).href},ih={},Tx=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const s=document.getElementsByTagName("link");r=Promise.all(t.map(o=>{if(o=Ex(o,n),o in ih)return;ih[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!n)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===o&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Mx,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Au="160",Lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bx=0,rh=1,Ax=2,sm=1,wx=2,ai=3,Vi=0,Zt=1,Mn=2,Fi=0,ls=1,sh=2,oh=3,ah=4,Rx=5,or=100,Cx=101,Px=102,lh=103,ch=104,Lx=200,Dx=201,Ix=202,Ux=203,Cc=204,Pc=205,Nx=206,Ox=207,Fx=208,Bx=209,zx=210,Hx=211,kx=212,Gx=213,Vx=214,Wx=0,Xx=1,qx=2,Ta=3,Yx=4,jx=5,Kx=6,$x=7,om=0,Zx=1,Jx=2,Bi=0,Qx=1,ey=2,ty=3,ny=4,iy=5,ry=6,am=300,xs=301,ys=302,Lc=303,Dc=304,Za=306,Ic=1e3,Un=1001,Uc=1002,Wt=1003,uh=1004,yl=1005,yn=1006,sy=1007,ao=1008,zi=1009,oy=1010,ay=1011,wu=1012,lm=1013,Pi=1014,Li=1015,lo=1016,cm=1017,um=1018,dr=1020,ly=1021,Nn=1023,cy=1024,uy=1025,pr=1026,Ss=1027,fy=1028,fm=1029,hy=1030,hm=1031,dm=1033,Sl=33776,Ml=33777,El=33778,Tl=33779,fh=35840,hh=35841,dh=35842,ph=35843,pm=36196,mh=37492,_h=37496,gh=37808,vh=37809,xh=37810,yh=37811,Sh=37812,Mh=37813,Eh=37814,Th=37815,bh=37816,Ah=37817,wh=37818,Rh=37819,Ch=37820,Ph=37821,bl=36492,Lh=36494,Dh=36495,dy=36283,Ih=36284,Uh=36285,Nh=36286,mm=3e3,mr=3001,py=3200,my=3201,_m=0,_y=1,En="",Rt="srgb",pi="srgb-linear",Ru="display-p3",Ja="display-p3-linear",ba="linear",st="srgb",Aa="rec709",wa="p3",Ir=7680,Oh=519,gy=512,vy=513,xy=514,gm=515,yy=516,Sy=517,My=518,Ey=519,Fh=35044,Bh="300 es",Nc=1035,ui=2e3,Ra=2001;class Rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zh=1234567;const Ys=Math.PI/180,co=180/Math.PI;function Cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Cu(i,e){return(i%e+e)%e}function Ty(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function by(i,e,t){return i!==e?(t-i)/(e-i):0}function js(i,e,t){return(1-t)*i+t*e}function Ay(i,e,t,n){return js(i,e,1-Math.exp(-t*n))}function wy(i,e=1){return e-Math.abs(Cu(i,e*2)-e)}function Ry(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Py(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ly(i,e){return i+Math.random()*(e-i)}function Dy(i){return i*(.5-Math.random())}function Iy(i){i!==void 0&&(zh=i);let e=zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uy(i){return i*Ys}function Ny(i){return i*co}function Oc(i){return(i&i-1)===0&&i!==0}function Oy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ca(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fy(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const By={DEG2RAD:Ys,RAD2DEG:co,generateUUID:Cr,clamp:Tt,euclideanModulo:Cu,mapLinear:Ty,inverseLerp:by,lerp:js,damp:Ay,pingpong:wy,smoothstep:Ry,smootherstep:Cy,randInt:Py,randFloat:Ly,randFloatSpread:Dy,seededRandom:Iy,degToRad:Uy,radToDeg:Ny,isPowerOfTwo:Oc,ceilPowerOfTwo:Oy,floorPowerOfTwo:Ca,setQuaternionFromProperEuler:Fy,normalize:Gt,denormalize:Zr};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],E=r[7],C=r[2],w=r[5],b=r[8];return s[0]=o*_+a*y+l*C,s[3]=o*m+a*v+l*w,s[6]=o*p+a*E+l*b,s[1]=c*_+u*y+f*C,s[4]=c*m+u*v+f*w,s[7]=c*p+u*E+f*b,s[2]=h*_+d*y+g*C,s[5]=h*m+d*v+g*w,s[8]=h*p+d*E+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new Ye;function vm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zy(){const i=Pa("canvas");return i.style.display="block",i}const Hh={};function Ks(i){i in Hh||(Hh[i]=!0,console.warn(i))}const kh=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[pi]:{transfer:ba,primaries:Aa,toReference:i=>i,fromReference:i=>i},[Rt]:{transfer:st,primaries:Aa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ja]:{transfer:ba,primaries:wa,toReference:i=>i.applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(kh)},[Ru]:{transfer:st,primaries:wa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(kh).convertLinearToSRGB()}},Hy=new Set([pi,Ja]),tt={enabled:!0,_workingColorSpace:pi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Hy.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Uo[e].toReference,r=Uo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Uo[i].primaries},getTransfer:function(i){return i===En?ba:Uo[i].transfer}};function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ur;class xm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=Pa("canvas")),Ur.width=e.width,Ur.height=e.height;const n=Ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ky=0;class ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rl(r[o].image)):s.push(Rl(r[o]))}else s=Rl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gy=0;class dn extends Rr{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Un,r=Un,s=yn,o=ao,a=Nn,l=zi,c=dn.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Cr(),this.name="",this.source=new ym(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===mr?Rt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==am)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ic:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ic:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?mr:mm}set encoding(e){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?Rt:En}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=am;dn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(d+1)/2,C=(p+1)/2,w=(u+h)/4,b=(f+_)/4,O=(g+m)/4;return v>E&&v>C?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=b/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=O/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=b/s,r=O/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vy extends Rr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===mr?Rt:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ym(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends Vy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sm extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wy extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),w=Math.atan2(C,p*y);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const E=a*y;if(l=l*m+h*E,c=c*m+d*E,u=u*m+g*E,f=f*m+_*E,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cl=new W,Vh=new Sr;class Mo{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Oo.subVectors(this.max,Is),Nr.subVectors(e.a,Is),Or.subVectors(e.b,Is),Fr.subVectors(e.c,Is),yi.subVectors(Or,Nr),Si.subVectors(Fr,Or),Zi.subVectors(Nr,Fr);let t=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Zi.z,Zi.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Zi.z,0,-Zi.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Zi.y,Zi.x,0];return!Pl(t,Nr,Or,Fr,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,Nr,Or,Fr,Oo))?!1:(Fo.crossVectors(yi,Si),t=[Fo.x,Fo.y,Fo.z],Pl(t,Nr,Or,Fr,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new W,new W,new W,new W,new W,new W,new W,new W],Rn=new W,No=new Mo,Nr=new W,Or=new W,Fr=new W,yi=new W,Si=new W,Zi=new W,Is=new W,Oo=new W,Fo=new W,Ji=new W;function Pl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ji.fromArray(i,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xy=new Mo,Us=new W,Ll=new W;class Pu{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xy.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Us,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Ll)),this.expandByPoint(Us.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new W,Dl=new W,Bo=new W,Mi=new W,Il=new W,zo=new W,Ul=new W;class Mm{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Dl.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Dl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bo),a=Mi.dot(this.direction),l=-Mi.dot(Bo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dl).addScaledVector(Bo,h),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),r=ni.dot(ni)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,r,s){Il.subVectors(t,e),zo.subVectors(n,e),Ul.crossVectors(Il,zo);let o=this.direction.dot(Ul),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(zo.crossVectors(Mi,zo));if(l<0)return null;const c=a*this.direction.dot(Il.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Ul);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qy,e,Yy)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ei.crossVectors(n,ln),Ei.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ei.crossVectors(n,ln)),Ei.normalize(),Ho.crossVectors(ln,Ei),r[0]=Ei.x,r[4]=Ho.x,r[8]=ln.x,r[1]=Ei.y,r[5]=Ho.y,r[9]=ln.y,r[2]=Ei.z,r[6]=Ho.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],E=n[11],C=n[15],w=r[0],b=r[4],O=r[8],S=r[12],R=r[1],H=r[5],Q=r[9],se=r[13],F=r[2],G=r[6],k=r[10],Y=r[14],j=r[3],te=r[7],fe=r[11],ae=r[15];return s[0]=o*w+a*R+l*F+c*j,s[4]=o*b+a*H+l*G+c*te,s[8]=o*O+a*Q+l*k+c*fe,s[12]=o*S+a*se+l*Y+c*ae,s[1]=u*w+f*R+h*F+d*j,s[5]=u*b+f*H+h*G+d*te,s[9]=u*O+f*Q+h*k+d*fe,s[13]=u*S+f*se+h*Y+d*ae,s[2]=g*w+_*R+m*F+p*j,s[6]=g*b+_*H+m*G+p*te,s[10]=g*O+_*Q+m*k+p*fe,s[14]=g*S+_*se+m*Y+p*ae,s[3]=y*w+v*R+E*F+C*j,s[7]=y*b+v*H+E*G+C*te,s[11]=y*O+v*Q+E*k+C*fe,s[15]=y*S+v*se+E*Y+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,E=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,w=t*y+n*v+r*E+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=y*b,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*b,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*b,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*b,e[4]=v*b,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*b,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*b,e[8]=E*b,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*b,e[12]=C*b,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*b,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,v=l*u,E=l*f,C=n.x,w=n.y,b=n.z;return r[0]=(1-(_+p))*C,r[1]=(d+E)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(d-E)*w,r[5]=(1-(h+p))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(g+v)*b,r[9]=(m-y)*b,r[10]=(1-(h+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const o=Br.set(r[4],r[5],r[6]).length(),a=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,u=1/o,f=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=ui){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,g;if(a===ui)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ra)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=ui){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let g,_;if(a===ui)g=(o+s)*f,_=-2*f;else if(a===Ra)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Br=new W,Cn=new At,qy=new W(0,0,0),Yy=new W(1,1,1),Ei=new W,Ho=new W,ln=new W,Wh=new At,Xh=new Sr;class Qa{constructor(e=0,t=0,n=0,r=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class Em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jy=0;const qh=new W,zr=new Sr,ii=new At,ko=new W,Ns=new W,Ky=new W,$y=new Sr,Yh=new W(1,0,0),jh=new W(0,1,0),Kh=new W(0,0,1),Zy={type:"added"},Jy={type:"removed"};class Jt extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new W,t=new Qa,n=new Sr,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ye}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ko.copy(e):ko.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ns,ko,this.up):ii.lookAt(ko,Ns,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ii),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,$y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new W(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new W,ri=new W,Nl=new W,si=new W,Hr=new W,kr=new W,$h=new W,Ol=new W,Fl=new W,Bl=new W;let Go=!1;class Dn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),ri.subVectors(n,t),Nl.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ri),l=Pn.dot(Nl),c=ri.dot(ri),u=ri.dot(Nl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,t,n,r,s,o,a,l){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),ri.subVectors(e,t),Pn.cross(ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Pn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Go===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Go=!0),Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Hr.subVectors(r,n),kr.subVectors(s,n),Ol.subVectors(e,n);const l=Hr.dot(Ol),c=kr.dot(Ol);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,r);const u=Hr.dot(Fl),f=kr.dot(Fl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Hr,o);Bl.subVectors(e,s);const d=Hr.dot(Bl),g=kr.dot(Bl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(kr,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return $h.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector($h,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Hr,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Cu(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zl(o,s,e+1/3),this.g=zl(o,s,e),this.b=zl(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return tt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Tt(Ut.r*255,0,255))*65536+Math.round(Tt(Ut.g*255,0,255))*256+Math.round(Tt(Ut.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Rt){tt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Vo);const n=js(Ti.h,Vo.h,t),r=js(Ti.s,Vo.s,t),s=js(Ti.l,Vo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ze;Ze.NAMES=Tm;let Qy=0;class Eo extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=ls,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Pc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lu extends Eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new W,Wo=new Me;class jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fh&&(e.usage=this.usage),e}}class bm extends jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Am extends jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let eS=0;const gn=new At,Hl=new Jt,Gr=new W,cn=new Mo,Os=new Mo,Et=new W;class Zn extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?Am:bm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(cn.min,Os.min),cn.expandByPoint(Et),Et.addVectors(cn.max,Os.max),cn.expandByPoint(Et)):(cn.expandByPoint(Os.min),cn.expandByPoint(Os.max))}cn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Et.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),Et.add(Gr)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new W,u[R]=new W;const f=new W,h=new W,d=new W,g=new Me,_=new Me,m=new Me,p=new W,y=new W;function v(R,H,Q){f.fromArray(r,R*3),h.fromArray(r,H*3),d.fromArray(r,Q*3),g.fromArray(o,R*2),_.fromArray(o,H*2),m.fromArray(o,Q*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const se=1/(_.x*m.y-m.x*_.y);isFinite(se)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(se),y.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(se),c[R].add(p),c[H].add(p),c[Q].add(p),u[R].add(y),u[H].add(y),u[Q].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let R=0,H=E.length;R<H;++R){const Q=E[R],se=Q.start,F=Q.count;for(let G=se,k=se+F;G<k;G+=3)v(n[G+0],n[G+1],n[G+2])}const C=new W,w=new W,b=new W,O=new W;function S(R){b.fromArray(s,R*3),O.copy(b);const H=c[R];C.copy(H),C.sub(b.multiplyScalar(b.dot(H))).normalize(),w.crossVectors(O,H);const se=w.dot(u[R])<0?-1:1;l[R*4]=C.x,l[R*4+1]=C.y,l[R*4+2]=C.z,l[R*4+3]=se}for(let R=0,H=E.length;R<H;++R){const Q=E[R],se=Q.start,F=Q.count;for(let G=se,k=se+F;G<k;G+=3)S(n[G+0]),S(n[G+1]),S(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new At,Qi=new Mm,Xo=new Pu,Jh=new W,Vr=new W,Wr=new W,Xr=new W,kl=new W,qo=new W,Yo=new Me,jo=new Me,Ko=new Me,Qh=new W,ed=new W,td=new W,$o=new W,Zo=new W;class Xt extends Jt{constructor(e=new Zn,t=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(kl.fromBufferAttribute(f,e),o?qo.addScaledVector(kl,u):qo.addScaledVector(kl.sub(t),u))}t.add(qo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(Xo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Xo,Jh)===null||Qi.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Zh.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,C=v;E<C;E+=3){const w=a.getX(E),b=a.getX(E+1),O=a.getX(E+2);r=Jo(this,p,e,n,c,u,f,w,b,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);r=Jo(this,o,e,n,c,u,f,y,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,C=v;E<C;E+=3){const w=E,b=E+1,O=E+2;r=Jo(this,p,e,n,c,u,f,w,b,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,E=m+2;r=Jo(this,o,e,n,c,u,f,y,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function tS(i,e,t,n,r,s,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;Zo.copy(a),Zo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:i}}function Jo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Vr),i.getVertexPosition(l,Wr),i.getVertexPosition(c,Xr);const u=tS(i,e,t,n,Vr,Wr,Xr,$o);if(u){r&&(Yo.fromBufferAttribute(r,a),jo.fromBufferAttribute(r,l),Ko.fromBufferAttribute(r,c),u.uv=Dn.getInterpolation($o,Vr,Wr,Xr,Yo,jo,Ko,new Me)),s&&(Yo.fromBufferAttribute(s,a),jo.fromBufferAttribute(s,l),Ko.fromBufferAttribute(s,c),u.uv1=Dn.getInterpolation($o,Vr,Wr,Xr,Yo,jo,Ko,new Me),u.uv2=u.uv1),o&&(Qh.fromBufferAttribute(o,a),ed.fromBufferAttribute(o,l),td.fromBufferAttribute(o,c),u.normal=Dn.getInterpolation($o,Vr,Wr,Xr,Qh,ed,td,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};Dn.getNormal(Vr,Wr,Xr,f.normal),u.face=f}return u}class To extends Zn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function g(_,m,p,y,v,E,C,w,b,O,S){const R=E/b,H=C/O,Q=E/2,se=C/2,F=w/2,G=b+1,k=O+1;let Y=0,j=0;const te=new W;for(let fe=0;fe<k;fe++){const ae=fe*H-se;for(let oe=0;oe<G;oe++){const Z=oe*R-Q;te[_]=Z*y,te[m]=ae*v,te[p]=F,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=w>0?1:-1,u.push(te.x,te.y,te.z),f.push(oe/b),f.push(1-fe/O),Y+=1}}for(let fe=0;fe<O;fe++)for(let ae=0;ae<b;ae++){const oe=h+ae+G*fe,Z=h+ae+G*(fe+1),re=h+(ae+1)+G*(fe+1),ge=h+(ae+1)+G*fe;l.push(oe,Z,ge),l.push(Z,re,ge),j+=6}a.addGroup(d,j,S),d+=j,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Ms(i[t]);for(const r in n)e[r]=n[r]}return e}function nS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wm(i){return i.getRenderTarget()===null?i.outputColorSpace:tt.workingColorSpace}const iS={clone:Ms,merge:Vt};var rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=nS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rm extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends Rm{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Yr=1;class oS extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(qr,Yr,e,t);r.layers=this.layers,this.add(r);const s=new Sn(qr,Yr,e,t);s.layers=this.layers,this.add(s);const o=new Sn(qr,Yr,e,t);o.layers=this.layers,this.add(o);const a=new Sn(qr,Yr,e,t);a.layers=this.layers,this.add(a);const l=new Sn(qr,Yr,e,t);l.layers=this.layers,this.add(l);const c=new Sn(qr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cm extends dn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aS extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mr?Rt:En),this.texture=new Cm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new To(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Fi});s.uniforms.tEquirect.value=t;const o=new Xt(r,s),a=t.minFilter;return t.minFilter===ao&&(t.minFilter=yn),new oS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Gl=new W,lS=new W,cS=new Ye;class Ci{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Gl.subVectors(n,t).cross(lS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cS.getNormalMatrix(e),r=this.coplanarPoint(Gl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Pu,Qo=new W;class Pm{constructor(e=new Ci,t=new Ci,n=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],E=r[15];if(n[0].setComponents(l-s,h-c,m-d,E-p).normalize(),n[1].setComponents(l+s,h+c,m+d,E+p).normalize(),n[2].setComponents(l+o,h+u,m+g,E+y).normalize(),n[3].setComponents(l-o,h-u,m-g,E-y).normalize(),n[4].setComponents(l-a,h-f,m-_,E-v).normalize(),t===ui)n[5].setComponents(l+a,h+f,m+_,E+v).normalize();else if(t===Ra)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qo.x=r.normal.x>0?e.max.x:e.min.x,Qo.y=r.normal.y>0?e.max.y:e.min.y,Qo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lm(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function uS(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class lr extends Zn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let v=0;v<c;v++){const E=v*f-s;g.push(E,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,E=y+c*(p+1),C=y+1+c*(p+1),w=y+1+c*p;d.push(v,E,w),d.push(E,C,w)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,US=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,VS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,AM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:fS,alphahash_pars_fragment:hS,alphamap_fragment:dS,alphamap_pars_fragment:pS,alphatest_fragment:mS,alphatest_pars_fragment:_S,aomap_fragment:gS,aomap_pars_fragment:vS,batching_pars_vertex:xS,batching_vertex:yS,begin_vertex:SS,beginnormal_vertex:MS,bsdfs:ES,iridescence_fragment:TS,bumpmap_pars_fragment:bS,clipping_planes_fragment:AS,clipping_planes_pars_fragment:wS,clipping_planes_pars_vertex:RS,clipping_planes_vertex:CS,color_fragment:PS,color_pars_fragment:LS,color_pars_vertex:DS,color_vertex:IS,common:US,cube_uv_reflection_fragment:NS,defaultnormal_vertex:OS,displacementmap_pars_vertex:FS,displacementmap_vertex:BS,emissivemap_fragment:zS,emissivemap_pars_fragment:HS,colorspace_fragment:kS,colorspace_pars_fragment:GS,envmap_fragment:VS,envmap_common_pars_fragment:WS,envmap_pars_fragment:XS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:rM,envmap_vertex:YS,fog_vertex:jS,fog_pars_vertex:KS,fog_fragment:$S,fog_pars_fragment:ZS,gradientmap_pars_fragment:JS,lightmap_fragment:QS,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:sM,lights_toon_pars_fragment:oM,lights_phong_fragment:aM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:hM,lights_fragment_end:dM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:gM,map_fragment:vM,map_pars_fragment:xM,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphcolor_vertex:TM,morphnormal_vertex:bM,morphtarget_pars_vertex:AM,morphtarget_vertex:wM,normal_fragment_begin:RM,normal_fragment_maps:CM,normal_pars_fragment:PM,normal_pars_vertex:LM,normal_vertex:DM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:OM,iridescence_pars_fragment:FM,opaque_fragment:BM,packing:zM,premultiplied_alpha_fragment:HM,project_vertex:kM,dithering_fragment:GM,dithering_pars_fragment:VM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:XM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:YM,shadowmap_vertex:jM,shadowmask_pars_fragment:KM,skinbase_vertex:$M,skinning_pars_vertex:ZM,skinning_vertex:JM,skinnormal_vertex:QM,specularmap_fragment:eE,specularmap_pars_fragment:tE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:rE,transmission_pars_fragment:sE,uv_pars_fragment:oE,uv_pars_vertex:aE,uv_vertex:lE,worldpos_vertex:cE,background_vert:uE,background_frag:fE,backgroundCube_vert:hE,backgroundCube_frag:dE,cube_vert:pE,cube_frag:mE,depth_vert:_E,depth_frag:gE,distanceRGBA_vert:vE,distanceRGBA_frag:xE,equirect_vert:yE,equirect_frag:SE,linedashed_vert:ME,linedashed_frag:EE,meshbasic_vert:TE,meshbasic_frag:bE,meshlambert_vert:AE,meshlambert_frag:wE,meshmatcap_vert:RE,meshmatcap_frag:CE,meshnormal_vert:PE,meshnormal_frag:LE,meshphong_vert:DE,meshphong_frag:IE,meshphysical_vert:UE,meshphysical_frag:NE,meshtoon_vert:OE,meshtoon_frag:FE,points_vert:BE,points_frag:zE,shadow_vert:HE,shadow_frag:kE,sprite_vert:GE,sprite_frag:VE},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Vn={basic:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Vt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Vt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Vt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Vt([Ae.points,Ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Vt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Vt([Ae.common,Ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Vt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Vt([Ae.sprite,Ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Vt([Ae.common,Ae.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Vt([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Vn.physical={uniforms:Vt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ea={r:0,b:0,g:0};function WE(i,e,t,n,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Za)?(u===void 0&&(u=new Xt(new To(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ms(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,(f!==v||h!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new lr(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ms(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(ea,wm(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function XE(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(F,G,k,Y,j){let te=!1;if(o){const fe=_(Y,k,G);c!==fe&&(c=fe,d(c.object)),te=p(F,Y,k,j),te&&y(F,Y,k,j)}else{const fe=G.wireframe===!0;(c.geometry!==Y.id||c.program!==k.id||c.wireframe!==fe)&&(c.geometry=Y.id,c.program=k.id,c.wireframe=fe,te=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,O(F,G,k,Y),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,G,k){const Y=k.wireframe===!0;let j=a[F.id];j===void 0&&(j={},a[F.id]=j);let te=j[G.id];te===void 0&&(te={},j[G.id]=te);let fe=te[Y];return fe===void 0&&(fe=m(h()),te[Y]=fe),fe}function m(F){const G=[],k=[],Y=[];for(let j=0;j<r;j++)G[j]=0,k[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:k,attributeDivisors:Y,object:F,attributes:{},index:null}}function p(F,G,k,Y){const j=c.attributes,te=G.attributes;let fe=0;const ae=k.getAttributes();for(const oe in ae)if(ae[oe].location>=0){const re=j[oe];let ge=te[oe];if(ge===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(ge=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(ge=F.instanceColor)),re===void 0||re.attribute!==ge||ge&&re.data!==ge.data)return!0;fe++}return c.attributesNum!==fe||c.index!==Y}function y(F,G,k,Y){const j={},te=G.attributes;let fe=0;const ae=k.getAttributes();for(const oe in ae)if(ae[oe].location>=0){let re=te[oe];re===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));const ge={};ge.attribute=re,re&&re.data&&(ge.data=re.data),j[oe]=ge,fe++}c.attributes=j,c.attributesNum=fe,c.index=Y}function v(){const F=c.newAttributes;for(let G=0,k=F.length;G<k;G++)F[G]=0}function E(F){C(F,0)}function C(F,G){const k=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;k[F]=1,Y[F]===0&&(i.enableVertexAttribArray(F),Y[F]=1),j[F]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),j[F]=G)}function w(){const F=c.newAttributes,G=c.enabledAttributes;for(let k=0,Y=G.length;k<Y;k++)G[k]!==F[k]&&(i.disableVertexAttribArray(k),G[k]=0)}function b(F,G,k,Y,j,te,fe){fe===!0?i.vertexAttribIPointer(F,G,k,j,te):i.vertexAttribPointer(F,G,k,Y,j,te)}function O(F,G,k,Y){if(n.isWebGL2===!1&&(F.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=Y.attributes,te=k.getAttributes(),fe=G.defaultAttributeValues;for(const ae in te){const oe=te[ae];if(oe.location>=0){let Z=j[ae];if(Z===void 0&&(ae==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),ae==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){const re=Z.normalized,ge=Z.itemSize,Ee=t.get(Z);if(Ee===void 0)continue;const V=Ee.buffer,ce=Ee.type,he=Ee.bytesPerElement,de=n.isWebGL2===!0&&(ce===i.INT||ce===i.UNSIGNED_INT||Z.gpuType===lm);if(Z.isInterleavedBufferAttribute){const we=Z.data,L=we.stride,T=Z.offset;if(we.isInstancedInterleavedBuffer){for(let A=0;A<oe.locationSize;A++)C(oe.location+A,we.meshPerAttribute);F.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let A=0;A<oe.locationSize;A++)E(oe.location+A);i.bindBuffer(i.ARRAY_BUFFER,V);for(let A=0;A<oe.locationSize;A++)b(oe.location+A,ge/oe.locationSize,ce,re,L*he,(T+ge/oe.locationSize*A)*he,de)}else{if(Z.isInstancedBufferAttribute){for(let we=0;we<oe.locationSize;we++)C(oe.location+we,Z.meshPerAttribute);F.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let we=0;we<oe.locationSize;we++)E(oe.location+we);i.bindBuffer(i.ARRAY_BUFFER,V);for(let we=0;we<oe.locationSize;we++)b(oe.location+we,ge/oe.locationSize,ce,re,ge*he,ge/oe.locationSize*we*he,de)}}else if(fe!==void 0){const re=fe[ae];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(oe.location,re);break;case 3:i.vertexAttrib3fv(oe.location,re);break;case 4:i.vertexAttrib4fv(oe.location,re);break;default:i.vertexAttrib1fv(oe.location,re)}}}}w()}function S(){Q();for(const F in a){const G=a[F];for(const k in G){const Y=G[k];for(const j in Y)g(Y[j].object),delete Y[j];delete G[k]}delete a[F]}}function R(F){if(a[F.id]===void 0)return;const G=a[F.id];for(const k in G){const Y=G[k];for(const j in Y)g(Y[j].object),delete Y[j];delete G[k]}delete a[F.id]}function H(F){for(const G in a){const k=a[G];if(k[F.id]===void 0)continue;const Y=k[F.id];for(const j in Y)g(Y[j].object),delete Y[j];delete k[F.id]}}function Q(){se(),u=!0,c!==l&&(c=l,d(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:se,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:E,disableUnusedAttributes:w}}function qE(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(r)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function YE(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=o||e.has("OES_texture_float"),C=v&&E,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:w}}function jE(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ci,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,v=y*4;let E=p.clippingState||null;l.value=E,E=u(g,h,v,d);for(let C=0;C!==v;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,E=d;v!==_;++v,E+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function KE(i){let e=new WeakMap;function t(o,a){return a===Lc?o.mapping=xs:a===Dc&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Dc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new aS(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $E extends Rm{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,nd=[.125,.215,.35,.446,.526,.582],ar=20,Vl=new $E,id=new Ze;let Wl=null,Xl=0,ql=0;const ir=(1+Math.sqrt(5))/2,jr=1/ir,rd=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,ir,jr),new W(0,ir,-jr),new W(jr,0,ir),new W(-jr,0,ir),new W(ir,jr,0),new W(-ir,jr,0)];class sd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,ql),e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:lo,format:Nn,colorSpace:pi,depthBuffer:!1},r=od(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=od(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZE(s)),this._blurMaterial=JE(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,r){const a=new Sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(id),u.toneMapping=Bi,u.autoClear=!1;const d=new Lu({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Xt(new To,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(id),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;ta(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===xs||e.mapping===ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ad());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rd[(r-1)%rd.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Xt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ar-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ar;m>ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ar}`);const p=[];let y=0;for(let b=0;b<ar;++b){const O=b/_,S=Math.exp(-O*O/2);p.push(S),b===0?y+=S:b<m&&(y+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const E=this._sizeLods[r],C=3*E*(r>v-es?r-v+es:0),w=4*(this._cubeSize-E);ta(t,C,w,3*E,2*E),l.setRenderTarget(t),l.render(f,Vl)}}function ZE(i){const e=[],t=[],n=[];let r=i;const s=i-es+1+nd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-es?l=nd[o-i+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,O=w>2?0:-1,S=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];y.set(S,_*g*w),v.set(h,m*g*w);const R=[w,w,w,w,w,w];E.set(R,p*g*w)}const C=new Zn;C.setAttribute("position",new jn(y,_)),C.setAttribute("uv",new jn(v,m)),C.setAttribute("faceIndex",new jn(E,p)),e.push(C),r>es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function od(i,e,t){const n=new yr(i,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function JE(i,e,t){const n=new Float32Array(ar),r=new W(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ad(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ld(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QE(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lc||l===Dc,u=l===xs||l===ys;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new sd(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new sd(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function eT(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function tT(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,E=y.length;v<E;v+=3){const C=y[v+0],w=y[v+1],b=y[v+2];h.push(C,w,w,b,b,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const C=v+0,w=v+1,b=v+2;h.push(C,w,w,b,b,C)}}else return;const m=new(vm(h)?Am:bm)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function nT(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){i.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,d*l,_),t.update(g,s,_)}function h(d,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function iT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function rT(i,e){return i[0]-e[0]}function sT(i,e){return Math.abs(e[1])-Math.abs(i[1])}function oT(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let F=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let O=0;y===!0&&(O=1),v===!0&&(O=2),E===!0&&(O=3);let S=u.attributes.position.count*O,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const H=new Float32Array(S*R*4*g),Q=new Sm(H,S,R,g);Q.type=Li,Q.needsUpdate=!0;const se=O*4;for(let G=0;G<g;G++){const k=C[G],Y=w[G],j=b[G],te=S*R*4*G;for(let fe=0;fe<k.count;fe++){const ae=fe*se;y===!0&&(o.fromBufferAttribute(k,fe),H[te+ae+0]=o.x,H[te+ae+1]=o.y,H[te+ae+2]=o.z,H[te+ae+3]=0),v===!0&&(o.fromBufferAttribute(Y,fe),H[te+ae+4]=o.x,H[te+ae+5]=o.y,H[te+ae+6]=o.z,H[te+ae+7]=0),E===!0&&(o.fromBufferAttribute(j,fe),H[te+ae+8]=o.x,H[te+ae+9]=o.y,H[te+ae+10]=o.z,H[te+ae+11]=j.itemSize===4?o.w:1)}}_={count:g,texture:Q,size:new Me(S,R)},s.set(u,_),u.addEventListener("dispose",F)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<d;v++){const E=g[v];E[0]=v,E[1]=h[v]}g.sort(sT);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(rT);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const E=a[v],C=E[0],w=E[1];C!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),m&&u.getAttribute("morphNormal"+v)!==m[C]&&u.setAttribute("morphNormal"+v,m[C]),r[v]=w,p+=w):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function aT(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Dm extends dn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:pr,u!==pr&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pr&&(n=Pi),n===void 0&&u===Ss&&(n=dr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Im=new dn,Um=new Dm(1,1);Um.compareFunction=gm;const Nm=new Sm,Om=new Wy,Fm=new Cm,cd=[],ud=[],fd=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=cd[r];if(s===void 0&&(s=new Float32Array(r),cd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function el(i,e){let t=ud[e];t===void 0&&(t=new Int32Array(e),ud[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function uT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function fT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function hT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),yt(t,n)}}function dT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),yt(t,n)}}function pT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;fd.set(n),i.uniformMatrix4fv(this.addr,!1,fd),yt(t,n)}}function mT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _T(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function gT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function vT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function xT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function ST(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function MT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function ET(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Um:Im;t.setTexture2D(e||s,r)}function TT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Om,r)}function bT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fm,r)}function AT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nm,r)}function wT(i){switch(i){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return hT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return _T;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return yT;case 36295:return ST;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return TT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return AT}}function RT(i,e){i.uniform1fv(this.addr,e)}function CT(i,e){const t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function PT(i,e){const t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function LT(i,e){const t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function DT(i,e){const t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function IT(i,e){const t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function UT(i,e){const t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function NT(i,e){i.uniform1iv(this.addr,e)}function OT(i,e){i.uniform2iv(this.addr,e)}function FT(i,e){i.uniform3iv(this.addr,e)}function BT(i,e){i.uniform4iv(this.addr,e)}function zT(i,e){i.uniform1uiv(this.addr,e)}function HT(i,e){i.uniform2uiv(this.addr,e)}function kT(i,e){i.uniform3uiv(this.addr,e)}function GT(i,e){i.uniform4uiv(this.addr,e)}function VT(i,e,t){const n=this.cache,r=e.length,s=el(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Im,s[o])}function WT(i,e,t){const n=this.cache,r=e.length,s=el(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Om,s[o])}function XT(i,e,t){const n=this.cache,r=e.length,s=el(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fm,s[o])}function qT(i,e,t){const n=this.cache,r=e.length,s=el(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nm,s[o])}function YT(i){switch(i){case 5126:return RT;case 35664:return CT;case 35665:return PT;case 35666:return LT;case 35674:return DT;case 35675:return IT;case 35676:return UT;case 5124:case 35670:return NT;case 35667:case 35671:return OT;case 35668:case 35672:return FT;case 35669:case 35673:return BT;case 5125:return zT;case 36294:return HT;case 36295:return kT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return qT}}class jT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wT(t.type)}}class KT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YT(t.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Yl=/(\w+)(\])?(\[|\.)?/g;function pd(i,e){i.seq.push(e),i.map[e.id]=e}function ZT(i,e,t){const n=i.name,r=n.length;for(Yl.lastIndex=0;;){const s=Yl.exec(n),o=Yl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pd(t,c===void 0?new jT(a,i,e):new KT(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new $T(a),pd(t,f)),t=f}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ZT(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function md(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const JT=37297;let QT=0;function eb(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function tb(i){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(i);let n;switch(e===t?n="":e===wa&&t===Aa?n="LinearDisplayP3ToLinearSRGB":e===Aa&&t===wa&&(n="LinearSRGBToLinearDisplayP3"),i){case pi:case Ja:return[n,"LinearTransferOETF"];case Rt:case Ru:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _d(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+eb(i.getShaderSource(e),o)}else return r}function nb(i,e){const t=tb(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ib(i,e){let t;switch(e){case Qx:t="Linear";break;case ey:t="Reinhard";break;case ty:t="OptimizedCineon";break;case ny:t="ACESFilmic";break;case ry:t="AgX";break;case iy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rb(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function sb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ts).join(`
`)}function ob(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ab(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ts(i){return i!==""}function gd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(i){return i.replace(lb,ub)}const cb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ub(i,e){let t=ke[e];if(t===void 0){const n=cb.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fc(t)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(fb,hb)}function hb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function db(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function pb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case ys:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function _b(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case om:e="ENVMAP_BLENDING_MULTIPLY";break;case Zx:e="ENVMAP_BLENDING_MIX";break;case Jx:e="ENVMAP_BLENDING_ADD";break}return e}function gb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vb(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=db(t),c=pb(t),u=mb(t),f=_b(t),h=gb(t),d=t.isWebGL2?"":rb(t),g=sb(t),_=ob(s),m=r.createProgram();let p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ts).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ts).join(`
`),y.length>0&&(y+=`
`)):(p=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),y=[d,yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?ke.tonemapping_pars_fragment:"",t.toneMapping!==Bi?ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,nb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),o=Fc(o),o=gd(o,t),o=vd(o,t),a=Fc(a),a=gd(a,t),a=vd(a,t),o=xd(o),a=xd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=v+p+o,C=v+y+a,w=md(r,r.VERTEX_SHADER,E),b=md(r,r.FRAGMENT_SHADER,C);r.attachShader(m,w),r.attachShader(m,b),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function O(Q){if(i.debug.checkShaderErrors){const se=r.getProgramInfoLog(m).trim(),F=r.getShaderInfoLog(w).trim(),G=r.getShaderInfoLog(b).trim();let k=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,w,b);else{const j=_d(r,w,"vertex"),te=_d(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+j+`
`+te)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(F===""||G==="")&&(Y=!1);Y&&(Q.diagnostics={runnable:k,programLog:se,vertexShader:{log:F,prefix:p},fragmentShader:{log:G,prefix:y}})}r.deleteShader(w),r.deleteShader(b),S=new ha(r,m),R=ab(r,m)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(m,JT)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}let xb=0;class yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sb(e),t.set(e,n)),n}}class Sb{constructor(e){this.id=xb++,this.code=e,this.usedTimes=0}}function Mb(i,e,t,n,r,s,o){const a=new Em,l=new yb,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,R,H,Q,se){const F=Q.fog,G=se.geometry,k=S.isMeshStandardMaterial?Q.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),j=Y&&Y.mapping===Za?Y.image.height:null,te=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=fe!==void 0?fe.length:0;let oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let Z,re,ge,Ee;if(te){const zt=Vn[te];Z=zt.vertexShader,re=zt.fragmentShader}else Z=S.vertexShader,re=S.fragmentShader,l.update(S),ge=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const V=i.getRenderTarget(),ce=se.isInstancedMesh===!0,he=se.isBatchedMesh===!0,de=!!S.map,we=!!S.matcap,L=!!Y,T=!!S.aoMap,A=!!S.lightMap,U=!!S.bumpMap,N=!!S.normalMap,X=!!S.displacementMap,$=!!S.emissiveMap,M=!!S.metalnessMap,x=!!S.roughnessMap,D=S.anisotropy>0,z=S.clearcoat>0,q=S.iridescence>0,J=S.sheen>0,pe=S.transmission>0,le=D&&!!S.anisotropyMap,me=z&&!!S.clearcoatMap,be=z&&!!S.clearcoatNormalMap,Ce=z&&!!S.clearcoatRoughnessMap,ue=q&&!!S.iridescenceMap,Ie=q&&!!S.iridescenceThicknessMap,I=J&&!!S.sheenColorMap,_e=J&&!!S.sheenRoughnessMap,xe=!!S.specularMap,ve=!!S.specularColorMap,Re=!!S.specularIntensityMap,Ne=pe&&!!S.transmissionMap,Xe=pe&&!!S.thicknessMap,Ge=!!S.gradientMap,Te=!!S.alphaMap,B=S.alphaTest>0,ye=!!S.alphaHash,Se=!!S.extensions,Ue=!!G.attributes.uv1,Le=!!G.attributes.uv2,$e=!!G.attributes.uv3;let Je=Bi;return S.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:u,shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:re,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:he,instancing:ce,instancingColor:ce&&se.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:pi,map:de,matcap:we,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:j,aoMap:T,lightMap:A,bumpMap:U,normalMap:N,displacementMap:h&&X,emissiveMap:$,normalMapObjectSpace:N&&S.normalMapType===_y,normalMapTangentSpace:N&&S.normalMapType===_m,metalnessMap:M,roughnessMap:x,anisotropy:D,anisotropyMap:le,clearcoat:z,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:Ce,iridescence:q,iridescenceMap:ue,iridescenceThicknessMap:Ie,sheen:J,sheenColorMap:I,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:ve,specularIntensityMap:Re,transmission:pe,transmissionMap:Ne,thicknessMap:Xe,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===ls,alphaMap:Te,alphaTest:B,alphaHash:ye,combine:S.combine,mapUv:de&&_(S.map.channel),aoMapUv:T&&_(S.aoMap.channel),lightMapUv:A&&_(S.lightMap.channel),bumpMapUv:U&&_(S.bumpMap.channel),normalMapUv:N&&_(S.normalMap.channel),displacementMapUv:X&&_(S.displacementMap.channel),emissiveMapUv:$&&_(S.emissiveMap.channel),metalnessMapUv:M&&_(S.metalnessMap.channel),roughnessMapUv:x&&_(S.roughnessMap.channel),anisotropyMapUv:le&&_(S.anisotropyMap.channel),clearcoatMapUv:me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:I&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(S.sheenRoughnessMap.channel),specularMapUv:xe&&_(S.specularMap.channel),specularColorMapUv:ve&&_(S.specularColorMap.channel),specularIntensityMapUv:Re&&_(S.specularIntensityMap.channel),transmissionMapUv:Ne&&_(S.transmissionMap.channel),thicknessMapUv:Xe&&_(S.thicknessMap.channel),alphaMapUv:Te&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(N||D),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Le,vertexUv3s:$e,pointsUvs:se.isPoints===!0&&!!G.attributes.uv&&(de||Te),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:se.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:de&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Se&&S.extensions.derivatives===!0,extensionFragDepth:Se&&S.extensions.fragDepth===!0,extensionDrawBuffers:Se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)R.push(H),R.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(y(R,S),v(R,S),R.push(i.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function y(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function v(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function E(S){const R=g[S.type];let H;if(R){const Q=Vn[R];H=iS.clone(Q.uniforms)}else H=S.uniforms;return H}function C(S,R){let H;for(let Q=0,se=c.length;Q<se;Q++){const F=c[Q];if(F.cacheKey===R){H=F,++H.usedTimes;break}}return H===void 0&&(H=new vb(i,R,S,s),c.push(H)),H}function w(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:C,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:O}}function Eb(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Tb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Md(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Tb),n.length>1&&n.sort(h||Sd),r.length>1&&r.sort(h||Sd)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bb(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Md,i.set(n,[o])):r>=s.length?(o=new Md,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ab(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ze};break;case"SpotLight":t={position:new W,direction:new W,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function wb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Rb=0;function Cb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Pb(i,e){const t=new Ab,n=wb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,o=new At,a=new At;function l(u,f){let h=0,d=0,g=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let _=0,m=0,p=0,y=0,v=0,E=0,C=0,w=0,b=0,O=0,S=0;u.sort(Cb);const R=f===!0?Math.PI:1;for(let Q=0,se=u.length;Q<se;Q++){const F=u[Q],G=F.color,k=F.intensity,Y=F.distance,j=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=G.r*k*R,d+=G.g*k*R,g+=G.b*k*R;else if(F.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(F.sh.coefficients[te],k);S++}else if(F.isDirectionalLight){const te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){const fe=F.shadow,ae=n.get(F);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,r.directionalShadow[_]=ae,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=F.shadow.matrix,E++}r.directional[_]=te,_++}else if(F.isSpotLight){const te=t.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(G).multiplyScalar(k*R),te.distance=Y,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,r.spot[p]=te;const fe=F.shadow;if(F.map&&(r.spotLightMap[b]=F.map,b++,fe.updateMatrices(F),F.castShadow&&O++),r.spotLightMatrix[p]=fe.matrix,F.castShadow){const ae=n.get(F);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,r.spotShadow[p]=ae,r.spotShadowMap[p]=j,w++}p++}else if(F.isRectAreaLight){const te=t.get(F);te.color.copy(G).multiplyScalar(k),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=te,y++}else if(F.isPointLight){const te=t.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity*R),te.distance=F.distance,te.decay=F.decay,F.castShadow){const fe=F.shadow,ae=n.get(F);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,ae.shadowCameraNear=fe.camera.near,ae.shadowCameraFar=fe.camera.far,r.pointShadow[m]=ae,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=F.shadow.matrix,C++}r.point[m]=te,m++}else if(F.isHemisphereLight){const te=t.get(F);te.skyColor.copy(F.color).multiplyScalar(k*R),te.groundColor.copy(F.groundColor).multiplyScalar(k*R),r.hemi[v]=te,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==_||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==y||H.hemiLength!==v||H.numDirectionalShadows!==E||H.numPointShadows!==C||H.numSpotShadows!==w||H.numSpotMaps!==b||H.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=w+b-O,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=S,H.directionalLength=_,H.pointLength=m,H.spotLength=p,H.rectAreaLength=y,H.hemiLength=v,H.numDirectionalShadows=E,H.numPointShadows=C,H.numSpotShadows=w,H.numSpotMaps=b,H.numLightProbes=S,r.version=Rb++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),h++}else if(E.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(E.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(E.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const C=r.point[d];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Ed(i,e){const t=new Pb(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lb(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ed(i,e),t.set(s,[l])):o>=a.length?(l=new Ed(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Db extends Eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ib extends Eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ob(i,e,t){let n=new Pm;const r=new Me,s=new Me,o=new Ct,a=new Db({depthPacking:my}),l=new Ib,c={},u=t.maxTextureSize,f={[Vi]:Zt,[Zt]:Vi,[Mn]:Mn},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Ub,fragmentShader:Nb}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sm;let p=this.type;this.render=function(w,b,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),R=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Fi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const se=p!==ai&&this.type===ai,F=p===ai&&this.type!==ai;for(let G=0,k=w.length;G<k;G++){const Y=w[G],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const te=j.getFrameExtents();if(r.multiply(te),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,j.mapSize.y=s.y)),j.map===null||se===!0||F===!0){const ae=this.type!==ai?{minFilter:Wt,magFilter:Wt}:{};j.map!==null&&j.map.dispose(),j.map=new yr(r.x,r.y,ae),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const fe=j.getViewportCount();for(let ae=0;ae<fe;ae++){const oe=j.getViewport(ae);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),Q.viewport(o),j.updateMatrices(Y,ae),n=j.getFrustum(),E(b,O,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===ai&&y(j,O),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,R,H)};function y(w,b){const O=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,O,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,O,d,_,null)}function v(w,b,O,S){let R=null;const H=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)R=H;else if(R=O.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Q=R.uuid,se=b.uuid;let F=c[Q];F===void 0&&(F={},c[Q]=F);let G=F[se];G===void 0&&(G=R.clone(),F[se]=G,b.addEventListener("dispose",C)),R=G}if(R.visible=b.visible,R.wireframe=b.wireframe,S===ai?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:f[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=i.properties.get(R);Q.light=O}return R}function E(w,b,O,S,R){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===ai)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);const se=e.update(w),F=w.material;if(Array.isArray(F)){const G=se.groups;for(let k=0,Y=G.length;k<Y;k++){const j=G[k],te=F[j.materialIndex];if(te&&te.visible){const fe=v(w,te,S,R);w.onBeforeShadow(i,w,b,O,se,fe,j),i.renderBufferDirect(O,null,se,fe,w,j),w.onAfterShadow(i,w,b,O,se,fe,j)}}}else if(F.visible){const G=v(w,F,S,R);w.onBeforeShadow(i,w,b,O,se,G,null),i.renderBufferDirect(O,null,se,G,w,null),w.onAfterShadow(i,w,b,O,se,G,null)}}const Q=w.children;for(let se=0,F=Q.length;se<F;se++)E(Q[se],b,O,S,R)}function C(w){w.target.removeEventListener("dispose",C);for(const O in c){const S=c[O],R=w.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function Fb(i,e,t){const n=t.isWebGL2;function r(){let B=!1;const ye=new Ct;let Se=null;const Ue=new Ct(0,0,0,0);return{setMask:function(Le){Se!==Le&&!B&&(i.colorMask(Le,Le,Le,Le),Se=Le)},setLocked:function(Le){B=Le},setClear:function(Le,$e,Je,St,zt){zt===!0&&(Le*=St,$e*=St,Je*=St),ye.set(Le,$e,Je,St),Ue.equals(ye)===!1&&(i.clearColor(Le,$e,Je,St),Ue.copy(ye))},reset:function(){B=!1,Se=null,Ue.set(-1,0,0,0)}}}function s(){let B=!1,ye=null,Se=null,Ue=null;return{setTest:function(Le){Le?he(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(Le){ye!==Le&&!B&&(i.depthMask(Le),ye=Le)},setFunc:function(Le){if(Se!==Le){switch(Le){case Wx:i.depthFunc(i.NEVER);break;case Xx:i.depthFunc(i.ALWAYS);break;case qx:i.depthFunc(i.LESS);break;case Ta:i.depthFunc(i.LEQUAL);break;case Yx:i.depthFunc(i.EQUAL);break;case jx:i.depthFunc(i.GEQUAL);break;case Kx:i.depthFunc(i.GREATER);break;case $x:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Le}},setLocked:function(Le){B=Le},setClear:function(Le){Ue!==Le&&(i.clearDepth(Le),Ue=Le)},reset:function(){B=!1,ye=null,Se=null,Ue=null}}}function o(){let B=!1,ye=null,Se=null,Ue=null,Le=null,$e=null,Je=null,St=null,zt=null;return{setTest:function(rt){B||(rt?he(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(rt){ye!==rt&&!B&&(i.stencilMask(rt),ye=rt)},setFunc:function(rt,Ht,zn){(Se!==rt||Ue!==Ht||Le!==zn)&&(i.stencilFunc(rt,Ht,zn),Se=rt,Ue=Ht,Le=zn)},setOp:function(rt,Ht,zn){($e!==rt||Je!==Ht||St!==zn)&&(i.stencilOp(rt,Ht,zn),$e=rt,Je=Ht,St=zn)},setLocked:function(rt){B=rt},setClear:function(rt){zt!==rt&&(i.clearStencil(rt),zt=rt)},reset:function(){B=!1,ye=null,Se=null,Ue=null,Le=null,$e=null,Je=null,St=null,zt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,E=null,C=null,w=null,b=null,O=null,S=new Ze(0,0,0),R=0,H=!1,Q=null,se=null,F=null,G=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,te=0;const fe=i.getParameter(i.VERSION);fe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(fe)[1]),j=te>=1):fe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),j=te>=2);let ae=null,oe={};const Z=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ge=new Ct().fromArray(Z),Ee=new Ct().fromArray(re);function V(B,ye,Se,Ue){const Le=new Uint8Array(4),$e=i.createTexture();i.bindTexture(B,$e),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<Se;Je++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(ye+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return $e}const ce={};ce[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(i.DEPTH_TEST),l.setFunc(Ta),$(!1),M(rh),he(i.CULL_FACE),N(Fi);function he(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function de(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function we(B,ye){return d[B]!==ye?(i.bindFramebuffer(B,ye),d[B]=ye,n&&(B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function L(B,ye){let Se=_,Ue=!1;if(B)if(Se=g.get(ye),Se===void 0&&(Se=[],g.set(ye,Se)),B.isWebGLMultipleRenderTargets){const Le=B.texture;if(Se.length!==Le.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Je=Le.length;$e<Je;$e++)Se[$e]=i.COLOR_ATTACHMENT0+$e;Se.length=Le.length,Ue=!0}}else Se[0]!==i.COLOR_ATTACHMENT0&&(Se[0]=i.COLOR_ATTACHMENT0,Ue=!0);else Se[0]!==i.BACK&&(Se[0]=i.BACK,Ue=!0);Ue&&(t.isWebGL2?i.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function T(B){return m!==B?(i.useProgram(B),m=B,!0):!1}const A={[or]:i.FUNC_ADD,[Cx]:i.FUNC_SUBTRACT,[Px]:i.FUNC_REVERSE_SUBTRACT};if(n)A[lh]=i.MIN,A[ch]=i.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(A[lh]=B.MIN_EXT,A[ch]=B.MAX_EXT)}const U={[Lx]:i.ZERO,[Dx]:i.ONE,[Ix]:i.SRC_COLOR,[Cc]:i.SRC_ALPHA,[zx]:i.SRC_ALPHA_SATURATE,[Fx]:i.DST_COLOR,[Nx]:i.DST_ALPHA,[Ux]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[Bx]:i.ONE_MINUS_DST_COLOR,[Ox]:i.ONE_MINUS_DST_ALPHA,[Hx]:i.CONSTANT_COLOR,[kx]:i.ONE_MINUS_CONSTANT_COLOR,[Gx]:i.CONSTANT_ALPHA,[Vx]:i.ONE_MINUS_CONSTANT_ALPHA};function N(B,ye,Se,Ue,Le,$e,Je,St,zt,rt){if(B===Fi){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(he(i.BLEND),p=!0),B!==Rx){if(B!==y||rt!==H){if((v!==or||w!==or)&&(i.blendEquation(i.FUNC_ADD),v=or,w=or),rt)switch(B){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,C=null,b=null,O=null,S.set(0,0,0),R=0,y=B,H=rt}return}Le=Le||ye,$e=$e||Se,Je=Je||Ue,(ye!==v||Le!==w)&&(i.blendEquationSeparate(A[ye],A[Le]),v=ye,w=Le),(Se!==E||Ue!==C||$e!==b||Je!==O)&&(i.blendFuncSeparate(U[Se],U[Ue],U[$e],U[Je]),E=Se,C=Ue,b=$e,O=Je),(St.equals(S)===!1||zt!==R)&&(i.blendColor(St.r,St.g,St.b,zt),S.copy(St),R=zt),y=B,H=!1}function X(B,ye){B.side===Mn?de(i.CULL_FACE):he(i.CULL_FACE);let Se=B.side===Zt;ye&&(Se=!Se),$(Se),B.blending===ls&&B.transparent===!1?N(Fi):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const Ue=B.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),D(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(B){Q!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),Q=B)}function M(B){B!==bx?(he(i.CULL_FACE),B!==se&&(B===rh?i.cullFace(i.BACK):B===Ax?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),se=B}function x(B){B!==F&&(j&&i.lineWidth(B),F=B)}function D(B,ye,Se){B?(he(i.POLYGON_OFFSET_FILL),(G!==ye||k!==Se)&&(i.polygonOffset(ye,Se),G=ye,k=Se)):de(i.POLYGON_OFFSET_FILL)}function z(B){B?he(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function q(B){B===void 0&&(B=i.TEXTURE0+Y-1),ae!==B&&(i.activeTexture(B),ae=B)}function J(B,ye,Se){Se===void 0&&(ae===null?Se=i.TEXTURE0+Y-1:Se=ae);let Ue=oe[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},oe[Se]=Ue),(Ue.type!==B||Ue.texture!==ye)&&(ae!==Se&&(i.activeTexture(Se),ae=Se),i.bindTexture(B,ye||ce[B]),Ue.type=B,Ue.texture=ye)}function pe(){const B=oe[ae];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(B){ge.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ge.copy(B))}function Ne(B){Ee.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ee.copy(B))}function Xe(B,ye){let Se=f.get(ye);Se===void 0&&(Se=new WeakMap,f.set(ye,Se));let Ue=Se.get(B);Ue===void 0&&(Ue=i.getUniformBlockIndex(ye,B.name),Se.set(B,Ue))}function Ge(B,ye){const Ue=f.get(ye).get(B);u.get(ye)!==Ue&&(i.uniformBlockBinding(ye,Ue,B.__bindingPointIndex),u.set(ye,Ue))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,oe={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,E=null,C=null,w=null,b=null,O=null,S=new Ze(0,0,0),R=0,H=!1,Q=null,se=null,F=null,G=null,k=null,ge.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:he,disable:de,bindFramebuffer:we,drawBuffers:L,useProgram:T,setBlending:N,setMaterial:X,setFlipSided:$,setCullFace:M,setLineWidth:x,setPolygonOffset:D,setScissorTest:z,activeTexture:q,bindTexture:J,unbindTexture:pe,compressedTexImage2D:le,compressedTexImage3D:me,texImage2D:xe,texImage3D:ve,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:I,texStorage3D:_e,texSubImage2D:be,texSubImage3D:Ce,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ie,scissor:Re,viewport:Ne,reset:Te}}function Bb(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return d?new OffscreenCanvas(M,x):Pa("canvas")}function _(M,x,D,z){let q=1;if((M.width>z||M.height>z)&&(q=z/Math.max(M.width,M.height)),q<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const J=x?Ca:Math.floor,pe=J(q*M.width),le=J(q*M.height);f===void 0&&(f=g(pe,le));const me=D?g(pe,le):f;return me.width=pe,me.height=le,me.getContext("2d").drawImage(M,0,0,pe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+pe+"x"+le+")."),me}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Oc(M.width)&&Oc(M.height)}function p(M){return a?!1:M.wrapS!==Un||M.wrapT!==Un||M.minFilter!==Wt&&M.minFilter!==yn}function y(M,x){return M.generateMipmaps&&x&&M.minFilter!==Wt&&M.minFilter!==yn}function v(M){i.generateMipmap(M)}function E(M,x,D,z,q=!1){if(a===!1)return x;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=x;if(x===i.RED&&(D===i.FLOAT&&(J=i.R32F),D===i.HALF_FLOAT&&(J=i.R16F),D===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(J=i.R8UI),D===i.UNSIGNED_SHORT&&(J=i.R16UI),D===i.UNSIGNED_INT&&(J=i.R32UI),D===i.BYTE&&(J=i.R8I),D===i.SHORT&&(J=i.R16I),D===i.INT&&(J=i.R32I)),x===i.RG&&(D===i.FLOAT&&(J=i.RG32F),D===i.HALF_FLOAT&&(J=i.RG16F),D===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RGBA){const pe=q?ba:tt.getTransfer(z);D===i.FLOAT&&(J=i.RGBA32F),D===i.HALF_FLOAT&&(J=i.RGBA16F),D===i.UNSIGNED_BYTE&&(J=pe===st?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(M,x,D){return y(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Wt&&M.minFilter!==yn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function w(M){return M===Wt||M===uh||M===yl?i.NEAREST:i.LINEAR}function b(M){const x=M.target;x.removeEventListener("dispose",b),S(x),x.isVideoTexture&&u.delete(x)}function O(M){const x=M.target;x.removeEventListener("dispose",O),H(x)}function S(M){const x=n.get(M);if(x.__webglInit===void 0)return;const D=M.source,z=h.get(D);if(z){const q=z[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(M),Object.keys(z).length===0&&h.delete(D)}n.remove(M)}function R(M){const x=n.get(M);i.deleteTexture(x.__webglTexture);const D=M.source,z=h.get(D);delete z[x.__cacheKey],o.memory.textures--}function H(M){const x=M.texture,D=n.get(M),z=n.get(x);if(z.__webglTexture!==void 0&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(D.__webglFramebuffer[q]))for(let J=0;J<D.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(D.__webglFramebuffer[q][J]);else i.deleteFramebuffer(D.__webglFramebuffer[q]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[q])}else{if(Array.isArray(D.__webglFramebuffer))for(let q=0;q<D.__webglFramebuffer.length;q++)i.deleteFramebuffer(D.__webglFramebuffer[q]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let q=0;q<D.__webglColorRenderbuffer.length;q++)D.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[q]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let q=0,J=x.length;q<J;q++){const pe=n.get(x[q]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(x[q])}n.remove(x),n.remove(M)}let Q=0;function se(){Q=0}function F(){const M=Q;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),Q+=1,M}function G(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function k(M,x){const D=n.get(M);if(M.isVideoTexture&&X(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(D,M,x);return}}t.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function Y(M,x){const D=n.get(M);if(M.version>0&&D.__version!==M.version){ge(D,M,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function j(M,x){const D=n.get(M);if(M.version>0&&D.__version!==M.version){ge(D,M,x);return}t.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function te(M,x){const D=n.get(M);if(M.version>0&&D.__version!==M.version){Ee(D,M,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}const fe={[Ic]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},ae={[Wt]:i.NEAREST,[uh]:i.NEAREST_MIPMAP_NEAREST,[yl]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[sy]:i.LINEAR_MIPMAP_NEAREST,[ao]:i.LINEAR_MIPMAP_LINEAR},oe={[gy]:i.NEVER,[Ey]:i.ALWAYS,[vy]:i.LESS,[gm]:i.LEQUAL,[xy]:i.EQUAL,[My]:i.GEQUAL,[yy]:i.GREATER,[Sy]:i.NOTEQUAL};function Z(M,x,D){if(D?(i.texParameteri(M,i.TEXTURE_WRAP_S,fe[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,fe[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,fe[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ae[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ae[x.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Un||x.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,w(x.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Wt&&x.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Wt||x.minFilter!==yl&&x.minFilter!==ao||x.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(M,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function re(M,x){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",b));const z=x.source;let q=h.get(z);q===void 0&&(q={},h.set(z,q));const J=G(x);if(J!==M.__cacheKey){q[J]===void 0&&(q[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),q[J].usedTimes++;const pe=q[M.__cacheKey];pe!==void 0&&(q[M.__cacheKey].usedTimes--,pe.usedTimes===0&&R(x)),M.__cacheKey=J,M.__webglTexture=q[J].texture}return D}function ge(M,x,D){let z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=i.TEXTURE_3D);const q=re(M,x),J=x.source;t.bindTexture(z,M.__webglTexture,i.TEXTURE0+D);const pe=n.get(J);if(J.version!==pe.__version||q===!0){t.activeTexture(i.TEXTURE0+D);const le=tt.getPrimaries(tt.workingColorSpace),me=x.colorSpace===En?null:tt.getPrimaries(x.colorSpace),be=x.colorSpace===En||le===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ce=p(x)&&m(x.image)===!1;let ue=_(x.image,Ce,!1,r.maxTextureSize);ue=$(x,ue);const Ie=m(ue)||a,I=s.convert(x.format,x.colorSpace);let _e=s.convert(x.type),xe=E(x.internalFormat,I,_e,x.colorSpace,x.isVideoTexture);Z(z,x,Ie);let ve;const Re=x.mipmaps,Ne=a&&x.isVideoTexture!==!0&&xe!==pm,Xe=pe.__version===void 0||q===!0,Ge=C(x,ue,Ie);if(x.isDepthTexture)xe=i.DEPTH_COMPONENT,a?x.type===Li?xe=i.DEPTH_COMPONENT32F:x.type===Pi?xe=i.DEPTH_COMPONENT24:x.type===dr?xe=i.DEPTH24_STENCIL8:xe=i.DEPTH_COMPONENT16:x.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===pr&&xe===i.DEPTH_COMPONENT&&x.type!==wu&&x.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Pi,_e=s.convert(x.type)),x.format===Ss&&xe===i.DEPTH_COMPONENT&&(xe=i.DEPTH_STENCIL,x.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=dr,_e=s.convert(x.type))),Xe&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,xe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,xe,ue.width,ue.height,0,I,_e,null));else if(x.isDataTexture)if(Re.length>0&&Ie){Ne&&Xe&&t.texStorage2D(i.TEXTURE_2D,Ge,xe,Re[0].width,Re[0].height);for(let Te=0,B=Re.length;Te<B;Te++)ve=Re[Te],Ne?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,ve.width,ve.height,I,_e,ve.data):t.texImage2D(i.TEXTURE_2D,Te,xe,ve.width,ve.height,0,I,_e,ve.data);x.generateMipmaps=!1}else Ne?(Xe&&t.texStorage2D(i.TEXTURE_2D,Ge,xe,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,I,_e,ue.data)):t.texImage2D(i.TEXTURE_2D,0,xe,ue.width,ue.height,0,I,_e,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,xe,Re[0].width,Re[0].height,ue.depth);for(let Te=0,B=Re.length;Te<B;Te++)ve=Re[Te],x.format!==Nn?I!==null?Ne?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,ve.width,ve.height,ue.depth,I,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,xe,ve.width,ve.height,ue.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,ve.width,ve.height,ue.depth,I,_e,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,xe,ve.width,ve.height,ue.depth,0,I,_e,ve.data)}else{Ne&&Xe&&t.texStorage2D(i.TEXTURE_2D,Ge,xe,Re[0].width,Re[0].height);for(let Te=0,B=Re.length;Te<B;Te++)ve=Re[Te],x.format!==Nn?I!==null?Ne?t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,ve.width,ve.height,I,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,ve.width,ve.height,I,_e,ve.data):t.texImage2D(i.TEXTURE_2D,Te,xe,ve.width,ve.height,0,I,_e,ve.data)}else if(x.isDataArrayTexture)Ne?(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,xe,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,I,_e,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,ue.width,ue.height,ue.depth,0,I,_e,ue.data);else if(x.isData3DTexture)Ne?(Xe&&t.texStorage3D(i.TEXTURE_3D,Ge,xe,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,I,_e,ue.data)):t.texImage3D(i.TEXTURE_3D,0,xe,ue.width,ue.height,ue.depth,0,I,_e,ue.data);else if(x.isFramebufferTexture){if(Xe)if(Ne)t.texStorage2D(i.TEXTURE_2D,Ge,xe,ue.width,ue.height);else{let Te=ue.width,B=ue.height;for(let ye=0;ye<Ge;ye++)t.texImage2D(i.TEXTURE_2D,ye,xe,Te,B,0,I,_e,null),Te>>=1,B>>=1}}else if(Re.length>0&&Ie){Ne&&Xe&&t.texStorage2D(i.TEXTURE_2D,Ge,xe,Re[0].width,Re[0].height);for(let Te=0,B=Re.length;Te<B;Te++)ve=Re[Te],Ne?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,I,_e,ve):t.texImage2D(i.TEXTURE_2D,Te,xe,I,_e,ve);x.generateMipmaps=!1}else Ne?(Xe&&t.texStorage2D(i.TEXTURE_2D,Ge,xe,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,I,_e,ue)):t.texImage2D(i.TEXTURE_2D,0,xe,I,_e,ue);y(x,Ie)&&v(z),pe.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Ee(M,x,D){if(x.image.length!==6)return;const z=re(M,x),q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+D);const J=n.get(q);if(q.version!==J.__version||z===!0){t.activeTexture(i.TEXTURE0+D);const pe=tt.getPrimaries(tt.workingColorSpace),le=x.colorSpace===En?null:tt.getPrimaries(x.colorSpace),me=x.colorSpace===En||pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,Ce=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let Te=0;Te<6;Te++)!be&&!Ce?ue[Te]=_(x.image[Te],!1,!0,r.maxCubemapSize):ue[Te]=Ce?x.image[Te].image:x.image[Te],ue[Te]=$(x,ue[Te]);const Ie=ue[0],I=m(Ie)||a,_e=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),ve=E(x.internalFormat,_e,xe,x.colorSpace),Re=a&&x.isVideoTexture!==!0,Ne=J.__version===void 0||z===!0;let Xe=C(x,Ie,I);Z(i.TEXTURE_CUBE_MAP,x,I);let Ge;if(be){Re&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ve,Ie.width,Ie.height);for(let Te=0;Te<6;Te++){Ge=ue[Te].mipmaps;for(let B=0;B<Ge.length;B++){const ye=Ge[B];x.format!==Nn?_e!==null?Re?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B,ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B,0,0,ye.width,ye.height,_e,xe,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B,ve,ye.width,ye.height,0,_e,xe,ye.data)}}}else{Ge=x.mipmaps,Re&&Ne&&(Ge.length>0&&Xe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ve,ue[0].width,ue[0].height));for(let Te=0;Te<6;Te++)if(Ce){Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ue[Te].width,ue[Te].height,_e,xe,ue[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,ue[Te].width,ue[Te].height,0,_e,xe,ue[Te].data);for(let B=0;B<Ge.length;B++){const Se=Ge[B].image[Te].image;Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B+1,0,0,Se.width,Se.height,_e,xe,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B+1,ve,Se.width,Se.height,0,_e,xe,Se.data)}}else{Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,_e,xe,ue[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ve,_e,xe,ue[Te]);for(let B=0;B<Ge.length;B++){const ye=Ge[B];Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B+1,0,0,_e,xe,ye.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,B+1,ve,_e,xe,ye.image[Te])}}}y(x,I)&&v(i.TEXTURE_CUBE_MAP),J.__version=q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function V(M,x,D,z,q,J){const pe=s.convert(D.format,D.colorSpace),le=s.convert(D.type),me=E(D.internalFormat,pe,le,D.colorSpace);if(!n.get(x).__hasExternalTextures){const Ce=Math.max(1,x.width>>J),ue=Math.max(1,x.height>>J);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,J,me,Ce,ue,x.depth,0,pe,le,null):t.texImage2D(q,J,me,Ce,ue,0,pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),N(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,q,n.get(D).__webglTexture,0,U(x)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,q,n.get(D).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(M,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let z=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(D||N(x)){const q=x.depthTexture;q&&q.isDepthTexture&&(q.type===Li?z=i.DEPTH_COMPONENT32F:q.type===Pi&&(z=i.DEPTH_COMPONENT24));const J=U(x);N(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,z,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,z,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,z,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const z=U(x);D&&N(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,x.width,x.height):N(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let q=0;q<z.length;q++){const J=z[q],pe=s.convert(J.format,J.colorSpace),le=s.convert(J.type),me=E(J.internalFormat,pe,le,J.colorSpace),be=U(x);D&&N(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,me,x.width,x.height):N(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const z=n.get(x.depthTexture).__webglTexture,q=U(x);if(x.depthTexture.format===pr)N(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(x.depthTexture.format===Ss)N(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function de(M){const x=n.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");he(x.__webglFramebuffer,M)}else if(D){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]=i.createRenderbuffer(),ce(x.__webglDepthbuffer[z],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ce(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(M,x,D){const z=n.get(M);x!==void 0&&V(z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&de(M)}function L(M){const x=M.texture,D=n.get(M),z=n.get(x);M.addEventListener("dispose",O),M.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=x.version,o.memory.textures++);const q=M.isWebGLCubeRenderTarget===!0,J=M.isWebGLMultipleRenderTargets===!0,pe=m(M)||a;if(q){D.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[le]=[];for(let me=0;me<x.mipmaps.length;me++)D.__webglFramebuffer[le][me]=i.createFramebuffer()}else D.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)D.__webglFramebuffer[le]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(J)if(r.drawBuffers){const le=M.texture;for(let me=0,be=le.length;me<be;me++){const Ce=n.get(le[me]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&N(M)===!1){const le=J?x:[x];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let me=0;me<le.length;me++){const be=le[me];D.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[me]);const Ce=s.convert(be.format,be.colorSpace),ue=s.convert(be.type),Ie=E(be.internalFormat,Ce,ue,be.colorSpace,M.isXRRenderTarget===!0),I=U(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,I,Ie,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,D.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Z(i.TEXTURE_CUBE_MAP,x,pe);for(let le=0;le<6;le++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)V(D.__webglFramebuffer[le][me],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else V(D.__webglFramebuffer[le],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);y(x,pe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const le=M.texture;for(let me=0,be=le.length;me<be;me++){const Ce=le[me],ue=n.get(Ce);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Z(i.TEXTURE_2D,Ce,pe),V(D.__webglFramebuffer,M,Ce,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),y(Ce,pe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?le=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,z.__webglTexture),Z(le,x,pe),a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)V(D.__webglFramebuffer[me],M,x,i.COLOR_ATTACHMENT0,le,me);else V(D.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,le,0);y(x,pe)&&v(le),t.unbindTexture()}M.depthBuffer&&de(M)}function T(M){const x=m(M)||a,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let z=0,q=D.length;z<q;z++){const J=D[z];if(y(J,x)){const pe=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(J).__webglTexture;t.bindTexture(pe,le),v(pe),t.unbindTexture()}}}function A(M){if(a&&M.samples>0&&N(M)===!1){const x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,z=M.height;let q=i.COLOR_BUFFER_BIT;const J=[],pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(M),me=M.isWebGLMultipleRenderTargets===!0;if(me)for(let be=0;be<x.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let be=0;be<x.length;be++){J.push(i.COLOR_ATTACHMENT0+be),M.depthBuffer&&J.push(pe);const Ce=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Ce===!1&&(M.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[be]),Ce===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),me){const ue=n.get(x[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,D,z,0,0,D,z,q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let be=0;be<x.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,le.__webglColorRenderbuffer[be]);const Ce=n.get(x[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function U(M){return Math.min(r.maxSamples,M.samples)}function N(M){const x=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function X(M){const x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function $(M,x){const D=M.colorSpace,z=M.format,q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Nc||D!==pi&&D!==En&&(tt.getTransfer(D)===st?a===!1?e.has("EXT_sRGB")===!0&&z===Nn?(M.format=Nc,M.minFilter=yn,M.generateMipmaps=!1):x=xm.sRGBToLinear(x):(z!==Nn||q!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}this.allocateTextureUnit=F,this.resetTextureUnits=se,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=we,this.setupRenderTarget=L,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=V,this.useMultisampledRTT=N}function zb(i,e,t){const n=t.isWebGL2;function r(s,o=En){let a;const l=tt.getTransfer(o);if(s===zi)return i.UNSIGNED_BYTE;if(s===cm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===um)return i.UNSIGNED_SHORT_5_5_5_1;if(s===oy)return i.BYTE;if(s===ay)return i.SHORT;if(s===wu)return i.UNSIGNED_SHORT;if(s===lm)return i.INT;if(s===Pi)return i.UNSIGNED_INT;if(s===Li)return i.FLOAT;if(s===lo)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ly)return i.ALPHA;if(s===Nn)return i.RGBA;if(s===cy)return i.LUMINANCE;if(s===uy)return i.LUMINANCE_ALPHA;if(s===pr)return i.DEPTH_COMPONENT;if(s===Ss)return i.DEPTH_STENCIL;if(s===Nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===fy)return i.RED;if(s===fm)return i.RED_INTEGER;if(s===hy)return i.RG;if(s===hm)return i.RG_INTEGER;if(s===dm)return i.RGBA_INTEGER;if(s===Sl||s===Ml||s===El||s===Tl)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===El)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ml)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===El)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fh||s===hh||s===dh||s===ph)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===fh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ph)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===mh||s===_h)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===mh)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===_h)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gh||s===vh||s===xh||s===yh||s===Sh||s===Mh||s===Eh||s===Th||s===bh||s===Ah||s===wh||s===Rh||s===Ch||s===Ph)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===gh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Th)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ah)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rh)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ch)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ph)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bl||s===Lh||s===Dh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===bl)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dy||s===Ih||s===Uh||s===Nh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===bl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===dr?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Hb extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cr extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kb={type:"move"};class jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gb extends Rr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],v=[],E=new Me;let C=null;const w=new Sn;w.layers.enable(1),w.viewport=new Ct;const b=new Sn;b.layers.enable(2),b.viewport=new Ct;const O=[w,b],S=new Hb;S.layers.enable(1),S.layers.enable(2);let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=y[Z];return re===void 0&&(re=new jl,y[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=y[Z];return re===void 0&&(re=new jl,y[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=y[Z];return re===void 0&&(re=new jl,y[Z]=re),re.getHandSpace()};function Q(Z){const re=v.indexOf(Z.inputSource);if(re===-1)return;const ge=y[re];ge!==void 0&&(ge.update(Z.inputSource,Z.frame,c||o),ge.dispatchEvent({type:Z.type,data:Z.inputSource}))}function se(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",F);for(let Z=0;Z<y.length;Z++){const re=v[Z];re!==null&&(v[Z]=null,y[Z].disconnect(re))}R=null,H=null,e.setRenderTarget(m),d=null,h=null,f=null,r=null,p=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",se),r.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new yr(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,ge=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?Ss:pr,ge=_.stencil?dr:Pi);const V={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(V),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new yr(h.textureWidth,h.textureHeight,{format:Nn,type:zi,depthTexture:new Dm(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ce=e.properties.get(p);ce.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(Z){for(let re=0;re<Z.removed.length;re++){const ge=Z.removed[re],Ee=v.indexOf(ge);Ee>=0&&(v[Ee]=null,y[Ee].disconnect(ge))}for(let re=0;re<Z.added.length;re++){const ge=Z.added[re];let Ee=v.indexOf(ge);if(Ee===-1){for(let ce=0;ce<y.length;ce++)if(ce>=v.length){v.push(ge),Ee=ce;break}else if(v[ce]===null){v[ce]=ge,Ee=ce;break}if(Ee===-1)break}const V=y[Ee];V&&V.connect(ge)}}const G=new W,k=new W;function Y(Z,re,ge){G.setFromMatrixPosition(re.matrixWorld),k.setFromMatrixPosition(ge.matrixWorld);const Ee=G.distanceTo(k),V=re.projectionMatrix.elements,ce=ge.projectionMatrix.elements,he=V[14]/(V[10]-1),de=V[14]/(V[10]+1),we=(V[9]+1)/V[5],L=(V[9]-1)/V[5],T=(V[8]-1)/V[0],A=(ce[8]+1)/ce[0],U=he*T,N=he*A,X=Ee/(-T+A),$=X*-T;re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX($),Z.translateZ(X),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const M=he+X,x=de+X,D=U-$,z=N+(Ee-$),q=we*de/x*M,J=L*de/x*M;Z.projectionMatrix.makePerspective(D,z,q,J,M,x),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function j(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;S.near=b.near=w.near=Z.near,S.far=b.far=w.far=Z.far,(R!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,H=S.far);const re=Z.parent,ge=S.cameras;j(S,re);for(let Ee=0;Ee<ge.length;Ee++)j(ge[Ee],re);ge.length===2?Y(S,w,b):S.projectionMatrix.copy(w.projectionMatrix),te(Z,S,re)};function te(Z,re,ge){ge===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ge.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=co*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let fe=null;function ae(Z,re){if(u=re.getViewerPose(c||o),g=re,u!==null){const ge=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Ee=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let V=0;V<ge.length;V++){const ce=ge[V];let he=null;if(d!==null)he=d.getViewport(ce);else{const we=f.getViewSubImage(h,ce);he=we.viewport,V===0&&(e.setRenderTargetTextures(p,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(p))}let de=O[V];de===void 0&&(de=new Sn,de.layers.enable(V),de.viewport=new Ct,O[V]=de),de.matrix.fromArray(ce.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ce.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(he.x,he.y,he.width,he.height),V===0&&(S.matrix.copy(de.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(de)}}for(let ge=0;ge<y.length;ge++){const Ee=v[ge],V=y[ge];Ee!==null&&V!==void 0&&V.update(Ee,re,c||o)}fe&&fe(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const oe=new Lm;oe.setAnimationLoop(ae),this.setAnimationLoop=function(Z){fe=Z},this.dispose=function(){}}}function Vb(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wb(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const C=v.program;n.updateUBOMapping(y,C);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const v=f();y.__bindingPointIndex=v;const E=i.createBuffer(),C=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=E.length;w<b;w++){const O=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,R=O.length;S<R;S++){const H=O[S];if(d(H,w,S,C)===!0){const Q=H.__offset,se=Array.isArray(H.value)?H.value:[H.value];let F=0;for(let G=0;G<se.length;G++){const k=se[G],Y=_(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,Q+F,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,E,C){const w=y.value,b=v+"_"+E;if(C[b]===void 0)return typeof w=="number"||typeof w=="boolean"?C[b]=w:C[b]=w.clone(),!0;{const O=C[b];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return C[b]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(y){const v=y.uniforms;let E=0;const C=16;for(let b=0,O=v.length;b<O;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let R=0,H=S.length;R<H;R++){const Q=S[R],se=Array.isArray(Q.value)?Q.value:[Q.value];for(let F=0,G=se.length;F<G;F++){const k=se[F],Y=_(k),j=E%C;j!==0&&C-j<Y.boundary&&(E+=C-j),Q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=Y.storage}}}const w=E%C;return w>0&&(E+=C-w),y.__size=E,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Bm{constructor(e={}){const{canvas:t=zy(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;const v=this;let E=!1,C=0,w=0,b=null,O=-1,S=null;const R=new Ct,H=new Ct;let Q=null;const se=new Ze(0);let F=0,G=t.width,k=t.height,Y=1,j=null,te=null;const fe=new Ct(0,0,G,k),ae=new Ct(0,0,G,k);let oe=!1;const Z=new Pm;let re=!1,ge=!1,Ee=null;const V=new At,ce=new Me,he=new W,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return b===null?Y:1}let L=n;function T(P,K){for(let ne=0;ne<P.length;ne++){const ie=P[ne],ee=t.getContext(ie,K);if(ee!==null)return ee}return null}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Au}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",ye,!1),L===null){const K=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&K.shift(),L=T(K,P),L===null)throw T(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let A,U,N,X,$,M,x,D,z,q,J,pe,le,me,be,Ce,ue,Ie,I,_e,xe,ve,Re,Ne;function Xe(){A=new eT(L),U=new YE(L,A,e),A.init(U),ve=new zb(L,A,U),N=new Fb(L,A,U),X=new iT(L),$=new Eb,M=new Bb(L,A,N,$,U,ve,X),x=new KE(v),D=new QE(v),z=new uS(L,U),Re=new XE(L,A,z,U),q=new tT(L,z,X,Re),J=new aT(L,q,z,X),I=new oT(L,U,M),Ce=new jE($),pe=new Mb(v,x,D,A,U,Re,Ce),le=new Vb(v,$),me=new bb,be=new Lb(A,U),Ie=new WE(v,x,D,N,J,h,l),ue=new Ob(v,J,U),Ne=new Wb(L,X,U,N),_e=new qE(L,A,X,U),xe=new nT(L,A,X,U),X.programs=pe.programs,v.capabilities=U,v.extensions=A,v.properties=$,v.renderLists=me,v.shadowMap=ue,v.state=N,v.info=X}Xe();const Ge=new Gb(v,L);this.xr=Ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=A.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=A.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(G,k,!1))},this.getSize=function(P){return P.set(G,k)},this.setSize=function(P,K,ne=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,k=K,t.width=Math.floor(P*Y),t.height=Math.floor(K*Y),ne===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(G*Y,k*Y).floor()},this.setDrawingBufferSize=function(P,K,ne){G=P,k=K,Y=ne,t.width=Math.floor(P*ne),t.height=Math.floor(K*ne),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,K,ne,ie){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,K,ne,ie),N.viewport(R.copy(fe).multiplyScalar(Y).floor())},this.getScissor=function(P){return P.copy(ae)},this.setScissor=function(P,K,ne,ie){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,K,ne,ie),N.scissor(H.copy(ae).multiplyScalar(Y).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(P){N.setScissorTest(oe=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){te=P},this.getClearColor=function(P){return P.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(P=!0,K=!0,ne=!0){let ie=0;if(P){let ee=!1;if(b!==null){const Pe=b.texture.format;ee=Pe===dm||Pe===hm||Pe===fm}if(ee){const Pe=b.texture.type,De=Pe===zi||Pe===Pi||Pe===wu||Pe===dr||Pe===cm||Pe===um,Oe=Ie.getClearColor(),Fe=Ie.getClearAlpha(),Ve=Oe.r,Be=Oe.g,ze=Oe.b;De?(d[0]=Ve,d[1]=Be,d[2]=ze,d[3]=Fe,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Ve,g[1]=Be,g[2]=ze,g[3]=Fe,L.clearBufferiv(L.COLOR,0,g))}else ie|=L.COLOR_BUFFER_BIT}K&&(ie|=L.DEPTH_BUFFER_BIT),ne&&(ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),me.dispose(),be.dispose(),$.dispose(),x.dispose(),D.dispose(),J.dispose(),Re.dispose(),Ne.dispose(),pe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",zt),Ge.removeEventListener("sessionend",rt),Ee&&(Ee.dispose(),Ee=null),Ht.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=X.autoReset,K=ue.enabled,ne=ue.autoUpdate,ie=ue.needsUpdate,ee=ue.type;Xe(),X.autoReset=P,ue.enabled=K,ue.autoUpdate=ne,ue.needsUpdate=ie,ue.type=ee}function ye(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Se(P){const K=P.target;K.removeEventListener("dispose",Se),Ue(K)}function Ue(P){Le(P),$.remove(P)}function Le(P){const K=$.get(P).programs;K!==void 0&&(K.forEach(function(ne){pe.releaseProgram(ne)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ne,ie,ee,Pe){K===null&&(K=de);const De=ee.isMesh&&ee.matrixWorld.determinant()<0,Oe=q_(P,K,ne,ie,ee);N.setMaterial(ie,De);let Fe=ne.index,Ve=1;if(ie.wireframe===!0){if(Fe=q.getWireframeAttribute(ne),Fe===void 0)return;Ve=2}const Be=ne.drawRange,ze=ne.attributes.position;let pt=Be.start*Ve,an=(Be.start+Be.count)*Ve;Pe!==null&&(pt=Math.max(pt,Pe.start*Ve),an=Math.min(an,(Pe.start+Pe.count)*Ve)),Fe!==null?(pt=Math.max(pt,0),an=Math.min(an,Fe.count)):ze!=null&&(pt=Math.max(pt,0),an=Math.min(an,ze.count));const Mt=an-pt;if(Mt<0||Mt===1/0)return;Re.setup(ee,ie,Oe,ne,Fe);let Qn,at=_e;if(Fe!==null&&(Qn=z.get(Fe),at=xe,at.setIndex(Qn)),ee.isMesh)ie.wireframe===!0?(N.setLineWidth(ie.wireframeLinewidth*we()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(ee.isLine){let qe=ie.linewidth;qe===void 0&&(qe=1),N.setLineWidth(qe*we()),ee.isLineSegments?at.setMode(L.LINES):ee.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else ee.isPoints?at.setMode(L.POINTS):ee.isSprite&&at.setMode(L.TRIANGLES);if(ee.isBatchedMesh)at.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)at.renderInstances(pt,Mt,ee.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,sl=Math.min(ne.instanceCount,qe);at.renderInstances(pt,Mt,sl)}else at.render(pt,Mt)};function $e(P,K,ne){P.transparent===!0&&P.side===Mn&&P.forceSinglePass===!1?(P.side=Zt,P.needsUpdate=!0,wo(P,K,ne),P.side=Vi,P.needsUpdate=!0,wo(P,K,ne),P.side=Mn):wo(P,K,ne)}this.compile=function(P,K,ne=null){ne===null&&(ne=P),m=be.get(ne),m.init(),y.push(m),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),P!==ne&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights(v._useLegacyLights);const ie=new Set;return P.traverse(function(ee){const Pe=ee.material;if(Pe)if(Array.isArray(Pe))for(let De=0;De<Pe.length;De++){const Oe=Pe[De];$e(Oe,ne,ee),ie.add(Oe)}else $e(Pe,ne,ee),ie.add(Pe)}),y.pop(),m=null,ie},this.compileAsync=function(P,K,ne=null){const ie=this.compile(P,K,ne);return new Promise(ee=>{function Pe(){if(ie.forEach(function(De){$.get(De).currentProgram.isReady()&&ie.delete(De)}),ie.size===0){ee(P);return}setTimeout(Pe,10)}A.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Je=null;function St(P){Je&&Je(P)}function zt(){Ht.stop()}function rt(){Ht.start()}const Ht=new Lm;Ht.setAnimationLoop(St),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(P){Je=P,Ge.setAnimationLoop(P),P===null?Ht.stop():Ht.start()},Ge.addEventListener("sessionstart",zt),Ge.addEventListener("sessionend",rt),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(K),K=Ge.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,K,b),m=be.get(P,y.length),m.init(),y.push(m),V.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Z.setFromProjectionMatrix(V),ge=this.localClippingEnabled,re=Ce.init(this.clippingPlanes,ge),_=me.get(P,p.length),_.init(),p.push(_),zn(P,K,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(j,te),this.info.render.frame++,re===!0&&Ce.beginShadows();const ne=m.state.shadowsArray;if(ue.render(ne,P,K),re===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ie.render(_,P),m.setupLights(v._useLegacyLights),K.isArrayCamera){const ie=K.cameras;for(let ee=0,Pe=ie.length;ee<Pe;ee++){const De=ie[ee];rf(_,P,De,De.viewport)}}else rf(_,P,K);b!==null&&(M.updateMultisampleRenderTarget(b),M.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(v,P,K),Re.resetDefaultState(),O=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function zn(P,K,ne,ie){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){ie&&he.setFromMatrixPosition(P.matrixWorld).applyMatrix4(V);const De=J.update(P),Oe=P.material;Oe.visible&&_.push(P,De,Oe,ne,he.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){const De=J.update(P),Oe=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),he.copy(P.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),he.copy(De.boundingSphere.center)),he.applyMatrix4(P.matrixWorld).applyMatrix4(V)),Array.isArray(Oe)){const Fe=De.groups;for(let Ve=0,Be=Fe.length;Ve<Be;Ve++){const ze=Fe[Ve],pt=Oe[ze.materialIndex];pt&&pt.visible&&_.push(P,De,pt,ne,he.z,ze)}}else Oe.visible&&_.push(P,De,Oe,ne,he.z,null)}}const Pe=P.children;for(let De=0,Oe=Pe.length;De<Oe;De++)zn(Pe[De],K,ne,ie)}function rf(P,K,ne,ie){const ee=P.opaque,Pe=P.transmissive,De=P.transparent;m.setupLightsView(ne),re===!0&&Ce.setGlobalState(v.clippingPlanes,ne),Pe.length>0&&X_(ee,Pe,K,ne),ie&&N.viewport(R.copy(ie)),ee.length>0&&Ao(ee,K,ne),Pe.length>0&&Ao(Pe,K,ne),De.length>0&&Ao(De,K,ne),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function X_(P,K,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Pe=U.isWebGL2;Ee===null&&(Ee=new yr(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")?lo:zi,minFilter:ao,samples:Pe?4:0})),v.getDrawingBufferSize(ce),Pe?Ee.setSize(ce.x,ce.y):Ee.setSize(Ca(ce.x),Ca(ce.y));const De=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(se),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=Bi,Ao(P,ne,ie),M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee);let Fe=!1;for(let Ve=0,Be=K.length;Ve<Be;Ve++){const ze=K[Ve],pt=ze.object,an=ze.geometry,Mt=ze.material,Qn=ze.group;if(Mt.side===Mn&&pt.layers.test(ie.layers)){const at=Mt.side;Mt.side=Zt,Mt.needsUpdate=!0,sf(pt,ne,ie,an,Mt,Qn),Mt.side=at,Mt.needsUpdate=!0,Fe=!0}}Fe===!0&&(M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee)),v.setRenderTarget(De),v.setClearColor(se,F),v.toneMapping=Oe}function Ao(P,K,ne){const ie=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,Pe=P.length;ee<Pe;ee++){const De=P[ee],Oe=De.object,Fe=De.geometry,Ve=ie===null?De.material:ie,Be=De.group;Oe.layers.test(ne.layers)&&sf(Oe,K,ne,Fe,Ve,Be)}}function sf(P,K,ne,ie,ee,Pe){P.onBeforeRender(v,K,ne,ie,ee,Pe),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(v,K,ne,ie,P,Pe),ee.transparent===!0&&ee.side===Mn&&ee.forceSinglePass===!1?(ee.side=Zt,ee.needsUpdate=!0,v.renderBufferDirect(ne,K,ie,ee,P,Pe),ee.side=Vi,ee.needsUpdate=!0,v.renderBufferDirect(ne,K,ie,ee,P,Pe),ee.side=Mn):v.renderBufferDirect(ne,K,ie,ee,P,Pe),P.onAfterRender(v,K,ne,ie,ee,Pe)}function wo(P,K,ne){K.isScene!==!0&&(K=de);const ie=$.get(P),ee=m.state.lights,Pe=m.state.shadowsArray,De=ee.state.version,Oe=pe.getParameters(P,ee.state,Pe,K,ne),Fe=pe.getProgramCacheKey(Oe);let Ve=ie.programs;ie.environment=P.isMeshStandardMaterial?K.environment:null,ie.fog=K.fog,ie.envMap=(P.isMeshStandardMaterial?D:x).get(P.envMap||ie.environment),Ve===void 0&&(P.addEventListener("dispose",Se),Ve=new Map,ie.programs=Ve);let Be=Ve.get(Fe);if(Be!==void 0){if(ie.currentProgram===Be&&ie.lightsStateVersion===De)return af(P,Oe),Be}else Oe.uniforms=pe.getUniforms(P),P.onBuild(ne,Oe,v),P.onBeforeCompile(Oe,v),Be=pe.acquireProgram(Oe,Fe),Ve.set(Fe,Be),ie.uniforms=Oe.uniforms;const ze=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ze.clippingPlanes=Ce.uniform),af(P,Oe),ie.needsLights=j_(P),ie.lightsStateVersion=De,ie.needsLights&&(ze.ambientLightColor.value=ee.state.ambient,ze.lightProbe.value=ee.state.probe,ze.directionalLights.value=ee.state.directional,ze.directionalLightShadows.value=ee.state.directionalShadow,ze.spotLights.value=ee.state.spot,ze.spotLightShadows.value=ee.state.spotShadow,ze.rectAreaLights.value=ee.state.rectArea,ze.ltc_1.value=ee.state.rectAreaLTC1,ze.ltc_2.value=ee.state.rectAreaLTC2,ze.pointLights.value=ee.state.point,ze.pointLightShadows.value=ee.state.pointShadow,ze.hemisphereLights.value=ee.state.hemi,ze.directionalShadowMap.value=ee.state.directionalShadowMap,ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ze.spotShadowMap.value=ee.state.spotShadowMap,ze.spotLightMatrix.value=ee.state.spotLightMatrix,ze.spotLightMap.value=ee.state.spotLightMap,ze.pointShadowMap.value=ee.state.pointShadowMap,ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=Be,ie.uniformsList=null,Be}function of(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=ha.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function af(P,K){const ne=$.get(P);ne.outputColorSpace=K.outputColorSpace,ne.batching=K.batching,ne.instancing=K.instancing,ne.instancingColor=K.instancingColor,ne.skinning=K.skinning,ne.morphTargets=K.morphTargets,ne.morphNormals=K.morphNormals,ne.morphColors=K.morphColors,ne.morphTargetsCount=K.morphTargetsCount,ne.numClippingPlanes=K.numClippingPlanes,ne.numIntersection=K.numClipIntersection,ne.vertexAlphas=K.vertexAlphas,ne.vertexTangents=K.vertexTangents,ne.toneMapping=K.toneMapping}function q_(P,K,ne,ie,ee){K.isScene!==!0&&(K=de),M.resetTextureUnits();const Pe=K.fog,De=ie.isMeshStandardMaterial?K.environment:null,Oe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pi,Fe=(ie.isMeshStandardMaterial?D:x).get(ie.envMap||De),Ve=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Be=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ze=!!ne.morphAttributes.position,pt=!!ne.morphAttributes.normal,an=!!ne.morphAttributes.color;let Mt=Bi;ie.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const Qn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,at=Qn!==void 0?Qn.length:0,qe=$.get(ie),sl=m.state.lights;if(re===!0&&(ge===!0||P!==S)){const _n=P===S&&ie.id===O;Ce.setState(ie,P,_n)}let ft=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==sl.state.version||qe.outputColorSpace!==Oe||ee.isBatchedMesh&&qe.batching===!1||!ee.isBatchedMesh&&qe.batching===!0||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||ee.isInstancedMesh&&qe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&qe.instancingColor===!1&&ee.instanceColor!==null||qe.envMap!==Fe||ie.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ce.numPlanes||qe.numIntersection!==Ce.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Be||qe.morphTargets!==ze||qe.morphNormals!==pt||qe.morphColors!==an||qe.toneMapping!==Mt||U.isWebGL2===!0&&qe.morphTargetsCount!==at)&&(ft=!0):(ft=!0,qe.__version=ie.version);let Yi=qe.currentProgram;ft===!0&&(Yi=wo(ie,K,ee));let lf=!1,Ps=!1,ol=!1;const Dt=Yi.getUniforms(),ji=qe.uniforms;if(N.useProgram(Yi.program)&&(lf=!0,Ps=!0,ol=!0),ie.id!==O&&(O=ie.id,Ps=!0),lf||S!==P){Dt.setValue(L,"projectionMatrix",P.projectionMatrix),Dt.setValue(L,"viewMatrix",P.matrixWorldInverse);const _n=Dt.map.cameraPosition;_n!==void 0&&_n.setValue(L,he.setFromMatrixPosition(P.matrixWorld)),U.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Ps=!0,ol=!0)}if(ee.isSkinnedMesh){Dt.setOptional(L,ee,"bindMatrix"),Dt.setOptional(L,ee,"bindMatrixInverse");const _n=ee.skeleton;_n&&(U.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Dt.setValue(L,"boneTexture",_n.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(Dt.setOptional(L,ee,"batchingTexture"),Dt.setValue(L,"batchingTexture",ee._matricesTexture,M));const al=ne.morphAttributes;if((al.position!==void 0||al.normal!==void 0||al.color!==void 0&&U.isWebGL2===!0)&&I.update(ee,ne,Yi),(Ps||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,Dt.setValue(L,"receiveShadow",ee.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(ji.envMap.value=Fe,ji.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Ps&&(Dt.setValue(L,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&Y_(ji,ol),Pe&&ie.fog===!0&&le.refreshFogUniforms(ji,Pe),le.refreshMaterialUniforms(ji,ie,Y,k,Ee),ha.upload(L,of(qe),ji,M)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ha.upload(L,of(qe),ji,M),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Dt.setValue(L,"center",ee.center),Dt.setValue(L,"modelViewMatrix",ee.modelViewMatrix),Dt.setValue(L,"normalMatrix",ee.normalMatrix),Dt.setValue(L,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const _n=ie.uniformsGroups;for(let ll=0,K_=_n.length;ll<K_;ll++)if(U.isWebGL2){const cf=_n[ll];Ne.update(cf,Yi),Ne.bind(cf,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function Y_(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function j_(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,K,ne){$.get(P.texture).__webglTexture=K,$.get(P.depthTexture).__webglTexture=ne;const ie=$.get(P);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,K){const ne=$.get(P);ne.__webglFramebuffer=K,ne.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,ne=0){b=P,C=K,w=ne;let ie=!0,ee=null,Pe=!1,De=!1;if(P){const Fe=$.get(P);Fe.__useDefaultFramebuffer!==void 0?(N.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1):Fe.__webglFramebuffer===void 0?M.setupRenderTarget(P):Fe.__hasExternalTextures&&M.rebindTextures(P,$.get(P.texture).__webglTexture,$.get(P.depthTexture).__webglTexture);const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);const Be=$.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Be[K])?ee=Be[K][ne]:ee=Be[K],Pe=!0):U.isWebGL2&&P.samples>0&&M.useMultisampledRTT(P)===!1?ee=$.get(P).__webglMultisampledFramebuffer:Array.isArray(Be)?ee=Be[ne]:ee=Be,R.copy(P.viewport),H.copy(P.scissor),Q=P.scissorTest}else R.copy(fe).multiplyScalar(Y).floor(),H.copy(ae).multiplyScalar(Y).floor(),Q=oe;if(N.bindFramebuffer(L.FRAMEBUFFER,ee)&&U.drawBuffers&&ie&&N.drawBuffers(P,ee),N.viewport(R),N.scissor(H),N.setScissorTest(Q),Pe){const Fe=$.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,ne)}else if(De){const Fe=$.get(P.texture),Ve=K||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,ne||0,Ve)}O=-1},this.readRenderTargetPixels=function(P,K,ne,ie,ee,Pe,De){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=$.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){N.bindFramebuffer(L.FRAMEBUFFER,Oe);try{const Fe=P.texture,Ve=Fe.format,Be=Fe.type;if(Ve!==Nn&&ve.convert(Ve)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===lo&&(A.has("EXT_color_buffer_half_float")||U.isWebGL2&&A.has("EXT_color_buffer_float"));if(Be!==zi&&ve.convert(Be)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Li&&(U.isWebGL2||A.has("OES_texture_float")||A.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ie&&ne>=0&&ne<=P.height-ee&&L.readPixels(K,ne,ie,ee,ve.convert(Ve),ve.convert(Be),Pe)}finally{const Fe=b!==null?$.get(b).__webglFramebuffer:null;N.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(P,K,ne=0){const ie=Math.pow(2,-ne),ee=Math.floor(K.image.width*ie),Pe=Math.floor(K.image.height*ie);M.setTexture2D(K,0),L.copyTexSubImage2D(L.TEXTURE_2D,ne,0,0,P.x,P.y,ee,Pe),N.unbindTexture()},this.copyTextureToTexture=function(P,K,ne,ie=0){const ee=K.image.width,Pe=K.image.height,De=ve.convert(ne.format),Oe=ve.convert(ne.type);M.setTexture2D(ne,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ne.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ne.unpackAlignment),K.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,P.x,P.y,ee,Pe,De,Oe,K.image.data):K.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,P.x,P.y,K.mipmaps[0].width,K.mipmaps[0].height,De,K.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,ie,P.x,P.y,De,Oe,K.image),ie===0&&ne.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(P,K,ne,ie,ee=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=P.max.x-P.min.x+1,De=P.max.y-P.min.y+1,Oe=P.max.z-P.min.z+1,Fe=ve.convert(ie.format),Ve=ve.convert(ie.type);let Be;if(ie.isData3DTexture)M.setTexture3D(ie,0),Be=L.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)M.setTexture2DArray(ie,0),Be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ie.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ie.unpackAlignment);const ze=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Mt=L.getParameter(L.UNPACK_SKIP_ROWS),Qn=L.getParameter(L.UNPACK_SKIP_IMAGES),at=ne.isCompressedTexture?ne.mipmaps[ee]:ne.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,P.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,P.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,P.min.z),ne.isDataTexture||ne.isData3DTexture?L.texSubImage3D(Be,ee,K.x,K.y,K.z,Pe,De,Oe,Fe,Ve,at.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Be,ee,K.x,K.y,K.z,Pe,De,Oe,Fe,at.data)):L.texSubImage3D(Be,ee,K.x,K.y,K.z,Pe,De,Oe,Fe,Ve,at),L.pixelStorei(L.UNPACK_ROW_LENGTH,ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qn),ee===0&&ie.generateMipmaps&&L.generateMipmap(Be),N.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?M.setTextureCube(P,0):P.isData3DTexture?M.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?M.setTexture2DArray(P,0):M.setTexture2D(P,0),N.unbindTexture()},this.resetState=function(){C=0,w=0,b=null,N.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ru?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ja?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?mr:mm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?Rt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xb extends Bm{}Xb.prototype.isWebGL1Renderer=!0;class qb extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Me:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new W,r=[],s=[],o=[],a=new W,l=new At;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new W)}s[0]=new W,o[0]=new W;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Tt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Tt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Iu extends Jn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new Me,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yb extends Iu{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uu(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const na=new W,Kl=new Uu,$l=new Uu,Zl=new Uu;class jb extends Jn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(na.subVectors(r[0],r[1]).add(r[0]),c=na);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(na.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=na),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Kl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),$l.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),Zl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),$l.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Zl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Kl.calc(l),$l.calc(l),Zl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Td(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Kb(i,e){const t=1-i;return t*t*e}function $b(i,e){return 2*(1-i)*i*e}function Zb(i,e){return i*i*e}function $s(i,e,t,n){return Kb(i,e)+$b(i,t)+Zb(i,n)}function Jb(i,e){const t=1-i;return t*t*t*e}function Qb(i,e){const t=1-i;return 3*t*t*i*e}function eA(i,e){return 3*(1-i)*i*i*e}function tA(i,e){return i*i*i*e}function Zs(i,e,t,n,r){return Jb(i,e)+Qb(i,t)+eA(i,n)+tA(i,r)}class zm extends Jn{constructor(e=new Me,t=new Me,n=new Me,r=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,r.x,s.x,o.x,a.x),Zs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nA extends Jn{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,r.x,s.x,o.x,a.x),Zs(e,r.y,s.y,o.y,a.y),Zs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hm extends Jn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iA extends Jn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class km extends Jn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rA extends Jn{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y),$s(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gm extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Td(a,l.x,c.x,u.x,f.x),Td(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Me().fromArray(r))}return this}}var Bc=Object.freeze({__proto__:null,ArcCurve:Yb,CatmullRomCurve3:jb,CubicBezierCurve:zm,CubicBezierCurve3:nA,EllipseCurve:Iu,LineCurve:Hm,LineCurve3:iA,QuadraticBezierCurve:km,QuadraticBezierCurve3:rA,SplineCurve:Gm});class sA extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Bc[r.type]().fromJSON(r))}return this}}class zc extends sA{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Hm(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new km(this.currentPoint.clone(),new Me(e,t),new Me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new zm(this.currentPoint.clone(),new Me(e,t),new Me(n,r),new Me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Iu(e,t,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nu extends Zn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new W,u=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class da extends zc{constructor(e){super(e),this.uuid=Cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new zc().fromJSON(r))}return this}}const oA={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Vm(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,d;if(n&&(s=fA(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)f=i[g],h=i[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return uo(s,o,t,a,l,d,0),o}};function Vm(i,e,t,n,r){let s,o;if(r===MA(i,e,t,n)>0)for(s=e;s<t;s+=n)o=bd(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=bd(s,i[s],i[s+1],o);return o&&tl(o,o.next)&&(ho(o),o=o.next),o}function Er(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tl(t,t.next)||ct(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function uo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&_A(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?lA(i,n,r,s):aA(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ho(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=cA(Er(i),e,t),uo(i,e,t,n,r,s,2)):o===2&&uA(i,e,t,n,r,s):uo(Er(i),e,t,n,r,s,1);break}}}function aA(i){const e=i.prev,t=i,n=i.next;if(ct(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&ns(r,a,s,l,o,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lA(i,e,t,n){const r=i.prev,s=i,o=i.next;if(ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,_=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,p=Hc(d,g,e,t,n),y=Hc(_,m,e,t,n);let v=i.prevZ,E=i.nextZ;for(;v&&v.z>=p&&E&&E.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ns(a,u,l,f,c,h,v.x,v.y)&&ct(v.prev,v,v.next)>=0||(v=v.prevZ,E.x>=d&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&ns(a,u,l,f,c,h,E.x,E.y)&&ct(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ns(a,u,l,f,c,h,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;E&&E.z<=y;){if(E.x>=d&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&ns(a,u,l,f,c,h,E.x,E.y)&&ct(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function cA(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!tl(r,s)&&Wm(r,n,n.next,s)&&fo(r,s)&&fo(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ho(n),ho(n.next),n=i=s),n=n.next}while(n!==i);return Er(n)}function uA(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xA(o,a)){let l=Xm(o,a);o=Er(o,o.next),l=Er(l,l.next),uo(o,e,t,n,r,s,0),uo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function fA(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Vm(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(vA(c));for(r.sort(hA),s=0;s<r.length;s++)t=dA(r[s],t);return t}function hA(i,e){return i.x-e.x}function dA(i,e){const t=pA(i,e);if(!t)return e;const n=Xm(t,i);return Er(n,n.next),Er(t,t.next)}function pA(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&ns(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),fo(t,i)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&mA(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function mA(i,e){return ct(i.prev,i,e.prev)<0&&ct(e.next,i,i.next)<0}function _A(i,e,t,n){let r=i;do r.z===0&&(r.z=Hc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,gA(r)}function gA(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Hc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vA(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ns(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function xA(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yA(i,e)&&(fo(i,e)&&fo(e,i)&&SA(i,e)&&(ct(i.prev,i,e.prev)||ct(i,e.prev,e))||tl(i,e)&&ct(i.prev,i,i.next)>0&&ct(e.prev,e,e.next)>0)}function ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tl(i,e){return i.x===e.x&&i.y===e.y}function Wm(i,e,t,n){const r=ra(ct(i,e,t)),s=ra(ct(i,e,n)),o=ra(ct(t,n,i)),a=ra(ct(t,n,e));return!!(r!==s&&o!==a||r===0&&ia(i,t,e)||s===0&&ia(i,n,e)||o===0&&ia(t,i,n)||a===0&&ia(t,e,n))}function ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ra(i){return i>0?1:i<0?-1:0}function yA(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fo(i,e){return ct(i.prev,i,i.next)<0?ct(i,e,i.next)>=0&&ct(i,i.prev,e)>=0:ct(i,e,i.prev)<0||ct(i,i.next,e)<0}function SA(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xm(i,e){const t=new kc(i.i,i.x,i.y),n=new kc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bd(i,e,t,n){const r=new kc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function MA(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class us{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return us.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Ad(e),wd(n,e);let o=e.length;t.forEach(Ad);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,wd(n,t[l]);const a=oA.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ad(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ou extends Zn{constructor(e=new da([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new jt(r,3)),this.setAttribute("uv",new jt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:EA;let v,E=!1,C,w,b,O;p&&(v=p.getSpacedPoints(u),E=!0,h=!1,C=p.computeFrenetFrames(u,!1),w=new W,b=new W,O=new W),h||(m=0,d=0,g=0,_=0);const S=a.extractPoints(c);let R=S.shape;const H=S.holes;if(!us.isClockWise(R)){R=R.reverse();for(let L=0,T=H.length;L<T;L++){const A=H[L];us.isClockWise(A)&&(H[L]=A.reverse())}}const se=us.triangulateShape(R,H),F=R;for(let L=0,T=H.length;L<T;L++){const A=H[L];R=R.concat(A)}function G(L,T,A){return T||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(T,A)}const k=R.length,Y=se.length;function j(L,T,A){let U,N,X;const $=L.x-T.x,M=L.y-T.y,x=A.x-L.x,D=A.y-L.y,z=$*$+M*M,q=$*D-M*x;if(Math.abs(q)>Number.EPSILON){const J=Math.sqrt(z),pe=Math.sqrt(x*x+D*D),le=T.x-M/J,me=T.y+$/J,be=A.x-D/pe,Ce=A.y+x/pe,ue=((be-le)*D-(Ce-me)*x)/($*D-M*x);U=le+$*ue-L.x,N=me+M*ue-L.y;const Ie=U*U+N*N;if(Ie<=2)return new Me(U,N);X=Math.sqrt(Ie/2)}else{let J=!1;$>Number.EPSILON?x>Number.EPSILON&&(J=!0):$<-Number.EPSILON?x<-Number.EPSILON&&(J=!0):Math.sign(M)===Math.sign(D)&&(J=!0),J?(U=-M,N=$,X=Math.sqrt(z)):(U=$,N=M,X=Math.sqrt(z/2))}return new Me(U/X,N/X)}const te=[];for(let L=0,T=F.length,A=T-1,U=L+1;L<T;L++,A++,U++)A===T&&(A=0),U===T&&(U=0),te[L]=j(F[L],F[A],F[U]);const fe=[];let ae,oe=te.concat();for(let L=0,T=H.length;L<T;L++){const A=H[L];ae=[];for(let U=0,N=A.length,X=N-1,$=U+1;U<N;U++,X++,$++)X===N&&(X=0),$===N&&($=0),ae[U]=j(A[U],A[X],A[$]);fe.push(ae),oe=oe.concat(ae)}for(let L=0;L<m;L++){const T=L/m,A=d*Math.cos(T*Math.PI/2),U=g*Math.sin(T*Math.PI/2)+_;for(let N=0,X=F.length;N<X;N++){const $=G(F[N],te[N],U);V($.x,$.y,-A)}for(let N=0,X=H.length;N<X;N++){const $=H[N];ae=fe[N];for(let M=0,x=$.length;M<x;M++){const D=G($[M],ae[M],U);V(D.x,D.y,-A)}}}const Z=g+_;for(let L=0;L<k;L++){const T=h?G(R[L],oe[L],Z):R[L];E?(b.copy(C.normals[0]).multiplyScalar(T.x),w.copy(C.binormals[0]).multiplyScalar(T.y),O.copy(v[0]).add(b).add(w),V(O.x,O.y,O.z)):V(T.x,T.y,0)}for(let L=1;L<=u;L++)for(let T=0;T<k;T++){const A=h?G(R[T],oe[T],Z):R[T];E?(b.copy(C.normals[L]).multiplyScalar(A.x),w.copy(C.binormals[L]).multiplyScalar(A.y),O.copy(v[L]).add(b).add(w),V(O.x,O.y,O.z)):V(A.x,A.y,f/u*L)}for(let L=m-1;L>=0;L--){const T=L/m,A=d*Math.cos(T*Math.PI/2),U=g*Math.sin(T*Math.PI/2)+_;for(let N=0,X=F.length;N<X;N++){const $=G(F[N],te[N],U);V($.x,$.y,f+A)}for(let N=0,X=H.length;N<X;N++){const $=H[N];ae=fe[N];for(let M=0,x=$.length;M<x;M++){const D=G($[M],ae[M],U);E?V(D.x,D.y+v[u-1].y,v[u-1].x+A):V(D.x,D.y,f+A)}}}re(),ge();function re(){const L=r.length/3;if(h){let T=0,A=k*T;for(let U=0;U<Y;U++){const N=se[U];ce(N[2]+A,N[1]+A,N[0]+A)}T=u+m*2,A=k*T;for(let U=0;U<Y;U++){const N=se[U];ce(N[0]+A,N[1]+A,N[2]+A)}}else{for(let T=0;T<Y;T++){const A=se[T];ce(A[2],A[1],A[0])}for(let T=0;T<Y;T++){const A=se[T];ce(A[0]+k*u,A[1]+k*u,A[2]+k*u)}}n.addGroup(L,r.length/3-L,0)}function ge(){const L=r.length/3;let T=0;Ee(F,T),T+=F.length;for(let A=0,U=H.length;A<U;A++){const N=H[A];Ee(N,T),T+=N.length}n.addGroup(L,r.length/3-L,1)}function Ee(L,T){let A=L.length;for(;--A>=0;){const U=A;let N=A-1;N<0&&(N=L.length-1);for(let X=0,$=u+m*2;X<$;X++){const M=k*X,x=k*(X+1),D=T+U+M,z=T+N+M,q=T+N+x,J=T+U+x;he(D,z,q,J)}}}function V(L,T,A){l.push(L),l.push(T),l.push(A)}function ce(L,T,A){de(L),de(T),de(A);const U=r.length/3,N=y.generateTopUV(n,r,U-3,U-2,U-1);we(N[0]),we(N[1]),we(N[2])}function he(L,T,A,U){de(L),de(T),de(U),de(T),de(A),de(U);const N=r.length/3,X=y.generateSideWallUV(n,r,N-6,N-3,N-2,N-1);we(X[0]),we(X[1]),we(X[3]),we(X[1]),we(X[2]),we(X[3])}function de(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function we(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return TA(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Bc[r.type]().fromJSON(r)),new Ou(n,e.options)}}const EA={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new Me(s,o),new Me(a,l),new Me(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Me(o,1-l),new Me(c,1-f),new Me(h,1-g),new Me(_,1-p)]:[new Me(a,1-l),new Me(u,1-f),new Me(d,1-g),new Me(m,1-p)]}};function TA(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fu extends Zn{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,d=new W,g=new Me;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,v=y,E=y+n+1,C=y+n+2,w=y+1;a.push(v,E,w),a.push(E,C,w)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jl extends Eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_m,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Rd={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bA{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const AA=new bA;class Bu{constructor(e){this.manager=e!==void 0?e:AA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bu.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class wA extends Error{constructor(e,t){super(e),this.response=t}}class RA extends Bu{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rd.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:r});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=oi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){f.read().then(({done:v,value:E})=>{if(v)p.close();else{_+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,b=u.length;w<b;w++){const O=u[w];O.onProgress&&O.onProgress(C)}p.enqueue(E),y()}})}}});return new Response(m)}else throw new wA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Rd.add(e,c);const u=oi[e];delete oi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CA extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class PA extends CA{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class LA{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new zc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let v=0,E=p.length;v<E;v++){const C=p[v],w=new da;w.curves=C.curves,y.push(w)}return y}function n(p,y){const v=y.length;let E=!1;for(let C=v-1,w=0;w<v;C=w++){let b=y[C],O=y[w],S=O.x-b.x,R=O.y-b.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(b=y[w],S=-S,O=y[C],R=-R),p.y<b.y||p.y>O.y)continue;if(p.y===b.y){if(p.x===b.x)return!0}else{const H=R*(p.x-b.x)-S*(p.y-b.y);if(H===0)return!0;if(H<0)continue;E=!E}}else{if(p.y!==b.y)continue;if(O.x<=p.x&&p.x<=b.x||b.x<=p.x&&p.x<=O.x)return!0}}return E}const r=us.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new da,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],g=0,_;h[g]=void 0,d[g]=[];for(let p=0,y=s.length;p<y;p++)a=s[p],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new da,p:_},h[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!h[0])return t(s);if(h.length>1){let p=!1,y=0;for(let v=0,E=h.length;v<E;v++)f[v]=[];for(let v=0,E=h.length;v<E;v++){const C=d[v];for(let w=0;w<C.length;w++){const b=C[w];let O=!0;for(let S=0;S<h.length;S++)n(b.p,h[S].p)&&(v!==S&&y++,O?(O=!1,f[S].push(b)):p=!0);O&&f[v].push(b)}}y>0&&p===!1&&(d=f)}let m;for(let p=0,y=h.length;p<y;p++){l=h[p].s,c.push(l),m=d[p];for(let v=0,E=m.length;v<E;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);const Pd={type:"change"},Ql={type:"start"},Ld={type:"end"},sa=new Mm,Dd=new Ci,DA=Math.cos(70*By.DEG2RAD);class IA extends Rr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Lr.ROTATE,MIDDLE:Lr.DOLLY,RIGHT:Lr.PAN},this.touches={ONE:Dr.ROTATE,TWO:Dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",J),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",J),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pd),n.update(),s=r.NONE},this.update=function(){const I=new W,_e=new Sr().setFromUnitVectors(e.up,new W(0,1,0)),xe=_e.clone().invert(),ve=new W,Re=new Sr,Ne=new W,Xe=2*Math.PI;return function(Te=null){const B=n.object.position;I.copy(B).sub(n.target),I.applyQuaternion(_e),a.setFromVector3(I),n.autoRotate&&s===r.NONE&&H(S(Te)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ye=n.minAzimuthAngle,Se=n.maxAzimuthAngle;isFinite(ye)&&isFinite(Se)&&(ye<-Math.PI?ye+=Xe:ye>Math.PI&&(ye-=Xe),Se<-Math.PI?Se+=Xe:Se>Math.PI&&(Se-=Xe),ye<=Se?a.theta=Math.max(ye,Math.min(Se,a.theta)):a.theta=a.theta>(ye+Se)/2?Math.max(ye,a.theta):Math.min(Se,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=te(a.radius):a.radius=te(a.radius*c),I.setFromSpherical(a),I.applyQuaternion(xe),B.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ue=!1;if(n.zoomToCursor&&w){let Le=null;if(n.object.isPerspectiveCamera){const $e=I.length();Le=te($e*c);const Je=$e-Le;n.object.position.addScaledVector(E,Je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $e=new W(C.x,C.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ue=!0;const Je=new W(C.x,C.y,0);Je.unproject(n.object),n.object.position.sub(Je).add($e),n.object.updateMatrixWorld(),Le=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Le!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Le).add(n.object.position):(sa.origin.copy(n.object.position),sa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(sa.direction))<DA?e.lookAt(n.target):(Dd.setFromNormalAndCoplanarPoint(n.object.up,n.target),sa.intersectPlane(Dd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ue=!0);return c=1,w=!1,Ue||ve.distanceToSquared(n.object.position)>o||8*(1-Re.dot(n.object.quaternion))>o||Ne.distanceToSquared(n.target)>0?(n.dispatchEvent(Pd),ve.copy(n.object.position),Re.copy(n.object.quaternion),Ne.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",me),n.domElement.removeEventListener("pointerdown",$),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",q),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",x),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",J),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Cd,l=new Cd;let c=1;const u=new W,f=new Me,h=new Me,d=new Me,g=new Me,_=new Me,m=new Me,p=new Me,y=new Me,v=new Me,E=new W,C=new Me;let w=!1;const b=[],O={};function S(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function R(I){const _e=Math.abs(I)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*_e)}function H(I){l.theta-=I}function Q(I){l.phi-=I}const se=function(){const I=new W;return function(xe,ve){I.setFromMatrixColumn(ve,0),I.multiplyScalar(-xe),u.add(I)}}(),F=function(){const I=new W;return function(xe,ve){n.screenSpacePanning===!0?I.setFromMatrixColumn(ve,1):(I.setFromMatrixColumn(ve,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(xe),u.add(I)}}(),G=function(){const I=new W;return function(xe,ve){const Re=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;I.copy(Ne).sub(n.target);let Xe=I.length();Xe*=Math.tan(n.object.fov/2*Math.PI/180),se(2*xe*Xe/Re.clientHeight,n.object.matrix),F(2*ve*Xe/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(se(xe*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),F(ve*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(I,_e){if(!n.zoomToCursor)return;w=!0;const xe=n.domElement.getBoundingClientRect(),ve=I-xe.left,Re=_e-xe.top,Ne=xe.width,Xe=xe.height;C.x=ve/Ne*2-1,C.y=-(Re/Xe)*2+1,E.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function te(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function fe(I){f.set(I.clientX,I.clientY)}function ae(I){j(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function oe(I){g.set(I.clientX,I.clientY)}function Z(I){h.set(I.clientX,I.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const _e=n.domElement;H(2*Math.PI*d.x/_e.clientHeight),Q(2*Math.PI*d.y/_e.clientHeight),f.copy(h),n.update()}function re(I){y.set(I.clientX,I.clientY),v.subVectors(y,p),v.y>0?k(R(v.y)):v.y<0&&Y(R(v.y)),p.copy(y),n.update()}function ge(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(_),n.update()}function Ee(I){j(I.clientX,I.clientY),I.deltaY<0?Y(R(I.deltaY)):I.deltaY>0&&k(R(I.deltaY)),n.update()}function V(I){let _e=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),_e=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),_e=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),_e=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),_e=!0;break}_e&&(I.preventDefault(),n.update())}function ce(I){if(b.length===1)f.set(I.pageX,I.pageY);else{const _e=Ie(I),xe=.5*(I.pageX+_e.x),ve=.5*(I.pageY+_e.y);f.set(xe,ve)}}function he(I){if(b.length===1)g.set(I.pageX,I.pageY);else{const _e=Ie(I),xe=.5*(I.pageX+_e.x),ve=.5*(I.pageY+_e.y);g.set(xe,ve)}}function de(I){const _e=Ie(I),xe=I.pageX-_e.x,ve=I.pageY-_e.y,Re=Math.sqrt(xe*xe+ve*ve);p.set(0,Re)}function we(I){n.enableZoom&&de(I),n.enablePan&&he(I)}function L(I){n.enableZoom&&de(I),n.enableRotate&&ce(I)}function T(I){if(b.length==1)h.set(I.pageX,I.pageY);else{const xe=Ie(I),ve=.5*(I.pageX+xe.x),Re=.5*(I.pageY+xe.y);h.set(ve,Re)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const _e=n.domElement;H(2*Math.PI*d.x/_e.clientHeight),Q(2*Math.PI*d.y/_e.clientHeight),f.copy(h)}function A(I){if(b.length===1)_.set(I.pageX,I.pageY);else{const _e=Ie(I),xe=.5*(I.pageX+_e.x),ve=.5*(I.pageY+_e.y);_.set(xe,ve)}m.subVectors(_,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(_)}function U(I){const _e=Ie(I),xe=I.pageX-_e.x,ve=I.pageY-_e.y,Re=Math.sqrt(xe*xe+ve*ve);y.set(0,Re),v.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),k(v.y),p.copy(y);const Ne=(I.pageX+_e.x)*.5,Xe=(I.pageY+_e.y)*.5;j(Ne,Xe)}function N(I){n.enableZoom&&U(I),n.enablePan&&A(I)}function X(I){n.enableZoom&&U(I),n.enableRotate&&T(I)}function $(I){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",x)),be(I),I.pointerType==="touch"?pe(I):D(I))}function M(I){n.enabled!==!1&&(I.pointerType==="touch"?le(I):z(I))}function x(I){Ce(I),b.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",x)),n.dispatchEvent(Ld),s=r.NONE}function D(I){let _e;switch(I.button){case 0:_e=n.mouseButtons.LEFT;break;case 1:_e=n.mouseButtons.MIDDLE;break;case 2:_e=n.mouseButtons.RIGHT;break;default:_e=-1}switch(_e){case Lr.DOLLY:if(n.enableZoom===!1)return;ae(I),s=r.DOLLY;break;case Lr.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;oe(I),s=r.PAN}else{if(n.enableRotate===!1)return;fe(I),s=r.ROTATE}break;case Lr.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;fe(I),s=r.ROTATE}else{if(n.enablePan===!1)return;oe(I),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ql)}function z(I){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Z(I);break;case r.DOLLY:if(n.enableZoom===!1)return;re(I);break;case r.PAN:if(n.enablePan===!1)return;ge(I);break}}function q(I){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(I.preventDefault(),n.dispatchEvent(Ql),Ee(I),n.dispatchEvent(Ld))}function J(I){n.enabled===!1||n.enablePan===!1||V(I)}function pe(I){switch(ue(I),b.length){case 1:switch(n.touches.ONE){case Dr.ROTATE:if(n.enableRotate===!1)return;ce(I),s=r.TOUCH_ROTATE;break;case Dr.PAN:if(n.enablePan===!1)return;he(I),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Dr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(I),s=r.TOUCH_DOLLY_PAN;break;case Dr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(I),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ql)}function le(I){switch(ue(I),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;T(I),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;A(I),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(I),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;X(I),n.update();break;default:s=r.NONE}}function me(I){n.enabled!==!1&&I.preventDefault()}function be(I){b.push(I.pointerId)}function Ce(I){delete O[I.pointerId];for(let _e=0;_e<b.length;_e++)if(b[_e]==I.pointerId){b.splice(_e,1);return}}function ue(I){let _e=O[I.pointerId];_e===void 0&&(_e=new Me,O[I.pointerId]=_e),_e.set(I.pageX,I.pageY)}function Ie(I){const _e=I.pointerId===b[0]?b[1]:b[0];return O[_e]}n.domElement.addEventListener("contextmenu",me),n.domElement.addEventListener("pointerdown",$),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",q,{passive:!1}),this.update()}}class UA extends Bu{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new RA(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new NA(e)}}class NA{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=OA(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function OA(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const f=FA(u,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function FA(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new LA;let a,l,c,u,f,h,d,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":a=_[m++]*e+t,l=_[m++]*e+n,o.moveTo(a,l);break;case"l":a=_[m++]*e+t,l=_[m++]*e+n,o.lineTo(a,l);break;case"q":c=_[m++]*e+t,u=_[m++]*e+n,f=_[m++]*e+t,h=_[m++]*e+n,o.quadraticCurveTo(f,h,c,u);break;case"b":c=_[m++]*e+t,u=_[m++]*e+n,f=_[m++]*e+t,h=_[m++]*e+n,d=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:s.ha*e,path:o}}class BA extends Ou{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}function li(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function qm(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},zu,Ft,ht,bn=1e8,it=1/bn,Gc=Math.PI*2,zA=Gc/4,HA=0,Ym=Math.sqrt,kA=Math.cos,GA=Math.sin,wt=function(e){return typeof e=="string"},dt=function(e){return typeof e=="function"},mi=function(e){return typeof e=="number"},Hu=function(e){return typeof e>"u"},$n=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},ku=function(){return typeof window<"u"},oa=function(e){return dt(e)||wt(e)},jm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bt=Array.isArray,Vc=/(?:-?\.?\d|\.)+/gi,Km=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$m=/[+-]=-?[.\d]+/,Zm=/[^,'"\[\]\s]+/gi,VA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,xn,Wc,Gu,mn={},La={},Jm,Qm=function(e){return(La=Tr(e,mn))&&on},Vu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},po=function(e,t){return!t&&console.warn(e)},e_=function(e,t){return e&&(mn[e]=t)&&La&&(La[e]=t)||mn},mo=function(){return 0},WA={suppressEvents:!0,isStart:!0,kill:!1},pa={suppressEvents:!0,kill:!1},XA={suppressEvents:!0},Wu={},Hi=[],Xc={},t_,un={},tc={},Id=30,ma=[],Xu="",qu=function(e){var t=e[0],n,r;if($n(t)||dt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ma.length;r--&&!ma[r].targetTest(t););n=ma[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new b_(e[r],n)))||e.splice(r,1);return e},_r=function(e){return e._gsap||qu(An(e))[0]._gsap},n_=function(e,t,n){return(n=e[t])&&dt(n)?e[t]():Hu(n)&&e.getAttribute&&e.getAttribute(t)||n},en=function(e,t){return(e=e.split(",")).forEach(t)||e},mt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},qA=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Da=function(){var e=Hi.length,t=Hi.slice(0),n,r;for(Xc={},Hi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},i_=function(e,t,n,r){Hi.length&&!Ft&&Da(),e.render(t,n,r||Ft&&t<0&&(e._initted||e._startAt)),Hi.length&&!Ft&&Da()},r_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zm).length<2?t:wt(e)?e.trim():e},s_=function(e){return e},wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},YA=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Tr=function(e,t){for(var n in t)e[n]=t[n];return e},Ud=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$n(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Ia=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Js=function(e){var t=e.parent||lt,n=e.keyframes?YA(Bt(e.keyframes)):wn;if(Qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},jA=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},o_=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},nl=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},gr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},KA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qc=function(e,t,n,r){return e._startAt&&(Ft?e._startAt.revert(pa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},$A=function i(e){return!e||e._ts&&i(e.parent)},Nd=function(e){return e._repeat?Ts(e._tTime,e=e.duration()+e._rDelay)*e:0},Ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ua=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},il=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},rl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),il(e),n._dirty||gr(n,e)),e},a_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ua(e.rawTime(),t),(!t._dur||bo(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),gr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},Xn=function(e,t,n,r){return t.parent&&Wi(t),t._start=bt((mi(n)?n:n||e!==lt?vn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),o_(e,t,"_first","_last",e._sort?"_start":0),Yc(t)||(e._recent=t),r||a_(e,t),e._ts<0&&rl(e,e._tTime),e},l_=function(e,t){return(mn.ScrollTrigger||Vu("scrollTrigger",t))&&mn.ScrollTrigger.create(t,e)},c_=function(e,t,n,r,s){if(ju(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&t_!==fn.frame)return Hi.push(e),e._lazy=[s,r],1},ZA=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Yc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},JA=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&ZA(e)&&!(!e._initted&&Yc(e))||(e._ts<0||e._dp._ts<0)&&!Yc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=bo(0,e._tDur,t),u=Ts(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ts(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ft||r||e._zTime===it||!t&&e._zTime){if(!e._initted&&c_(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&qc(e,t,n,!0),e._onUpdate&&!n&&hn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Wi(e,1),!n&&!Ft&&(hn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},QA=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},bs=function(e,t,n,r){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&rl(e,e._tTime=e._tDur*a),e.parent&&il(e),n||gr(e.parent,e),e},Od=function(e){return e instanceof Yt?gr(e):bs(e,e._dur)},ew={_start:0,endTime:mo,totalDuration:mo},vn=function i(e,t,n){var r=e.labels,s=e._recent||ew,o=e.duration()>=bn?s.endTime(!1):e._dur,a,l,c;return wt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Bt(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Qs=function(e,t,n){var r=mi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;o.immediateRender=Qt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new vt(t[0],o,t[s+1])},qi=function(e,t){return e||e===0?t(e):t},bo=function(e,t,n){return n<e?e:n>t?t:n},Ot=function(e,t){return!wt(e)||!(t=VA.exec(e))?"":t[1]},tw=function(e,t,n){return qi(n,function(r){return bo(e,t,r)})},jc=[].slice,u_=function(e,t){return e&&$n(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$n(e[0]))&&!e.nodeType&&e!==xn},nw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return wt(r)&&!t||u_(r,1)?(s=n).push.apply(s,An(r)):n.push(r)})||n},An=function(e,t,n){return ht&&!t&&ht.selector?ht.selector(e):wt(e)&&!n&&(Wc||!As())?jc.call((t||Gu).querySelectorAll(e),0):Bt(e)?nw(e,n):u_(e)?jc.call(e,0):e?[e]:[]},Kc=function(e){return e=An(e)[0]||po("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return An(t,n.querySelectorAll?n:n===e?po("Invalid scope")||Gu.createElement("div"):e)}},f_=function(e){return e.sort(function(){return .5-Math.random()})},h_=function(e){if(dt(e))return e;var t=$n(e)?e:{each:e},n=vr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return wt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,y,v,E,C,w,b,O,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,bn])[1],!S){for(b=-bn;b<(b=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,y=S===bn?0:l?_*f/S-.5:r/S|0,b=0,O=bn,w=0;w<_;w++)v=w%S-p,E=y-(w/S|0),m[w]=C=c?Math.abs(c==="y"?E:v):Ym(v*v+E*E),C>b&&(b=C),C<O&&(O=C);r==="random"&&f_(m),m.max=b-O,m.min=O,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ot(t.amount||t.each)||0,n=n&&_<0?M_(n):n}return _=(m[h]-m.min)/m.max||0,bt(m.b+(n?n(_):_)*m.v)+m.u}},$c=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(mi(n)?0:Ot(n))}},d_=function(e,t){var n=Bt(e),r,s;return!n&&$n(e)&&(r=n=e.radius||bn,e.values?(e=An(e.values),(s=!mi(e[0]))&&(r*=r)):e=$c(e.increment)),qi(t,n?dt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=bn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||mi(o)?u:u+Ot(o)}:$c(e))},p_=function(e,t,n,r){return qi(Bt(e)?!t:n===!0?!!(n=0):!r,function(){return Bt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},iw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},rw=function(e,t){return function(n){return e(parseFloat(n))+(t||Ot(n))}},sw=function(e,t,n){return __(e,t,0,1,n)},m_=function(e,t,n){return qi(n,function(r){return e[~~t(r)]})},ow=function i(e,t,n){var r=t-e;return Bt(e)?m_(e,i(0,e.length),t):qi(n,function(s){return(r+(s-e)%r)%r+e})},aw=function i(e,t,n){var r=t-e,s=r*2;return Bt(e)?m_(e,i(0,e.length-1),t):qi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},_o=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Zm:Vc),n+=e.substr(t,r-t)+p_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},__=function(e,t,n,r,s){var o=t-e,a=r-n;return qi(s,function(l){return n+((l-e)/o*a||0)})},lw=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=wt(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Bt(e)&&!Bt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=Tr(Bt(e)?[]:{},e));if(!u){for(l in t)Yu.call(a,e,l,"get",t[l]);s=function(g){return Zu(g,a)||(o?e.p:e)}}}return qi(n,s)},Fd=function(e,t,n){var r=e.labels,s=bn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hn=function(e,t,n){var r=e.vars,s=r[t],o=ht,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Hi.length&&Da(),a&&(ht=a),u=l?s.apply(c,l):s.call(c),ht=o,u},zs=function(e){return Wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&hn(e,"onInterrupt"),e},rs,g_=[],v_=function(e){if(ku()&&e){e=!e.name&&e.default||e;var t=e.name,n=dt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:mo,render:Zu,add:Yu,kill:Tw,modifier:Ew,rawVars:0},o={targetTest:0,get:0,getSetter:$u,aliases:{},register:0};if(As(),e!==r){if(un[t])return;wn(r,wn(Ia(e,s),o)),Tr(r.prototype,Tr(s,Ia(e,o))),un[r.prop=t]=r,e.targetTest&&(ma.push(r),Wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}e_(t,r),e.register&&e.register(on,r,tn)}else e&&g_.push(e)},nt=255,Hs={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},nc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nt+.5|0},x_=function(e,t,n){var r=e?mi(e)?[e>>16,e>>8&nt,e&nt]:0:Hs.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])r=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&nt,r&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Vc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=nc(l+1/3,s,o),r[1]=nc(l,s,o),r[2]=nc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Km),n&&r.length<4&&(r[3]=1),r}else r=e.match(Vc)||Hs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/nt,o=r[1]/nt,a=r[2]/nt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},y_=function(e){var t=[],n=[],r=-1;return e.split(ki).forEach(function(s){var o=s.match(is)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Bd=function(e,t,n){var r="",s=(e+r).match(ki),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=x_(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=y_(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ki,"1").split(is),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ki),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ki=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),cw=/hsl[a]?\(/,S_=function(e){var t=e.join(" "),n;if(ki.lastIndex=0,ki.test(t))return n=cw.test(t),e[1]=Bd(e[1],n),e[0]=Bd(e[0],n,y_(e[1])),!0},go,fn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,y=m===!0,v,E,C,w;if(p>e&&(n+=p-t),r+=p,C=r-n,v=C-o,(v>0||y)&&(w=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=v+(v>=s?4:s-v),E=1),y||(l=c(_)),E)for(d=0;d<a.length;d++)a[d](C,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Jm&&(!Wc&&ku()&&(xn=Wc=window,Gu=xn.document||{},mn.gsap=on,(xn.gsapVersions||(xn.gsapVersions=[])).push(on.version),Qm(La||xn.GreenSockGlobals||!xn.gsap&&xn||{}),u=xn.requestAnimationFrame,g_.forEach(v_)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},go=1,g(2))},sleep:function(){(u?xn.cancelAnimationFrame:clearTimeout)(l),go=0,c=mo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var v=p?function(E,C,w,b){m(E,C,w,b),f.remove(v)}:m;return f.remove(m),a[y?"unshift":"push"](v),As(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),As=function(){return!go&&fn.wake()},je={},uw=/^[\d.\-M][\d.\-,\s]/,fw=/["']/g,hw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(fw,"").trim():+c,r=l.substr(a+1).trim();return t},dw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},pw=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hw(t[1])]:dw(e).split(",").map(r_)):je._CE&&uw.test(e)?je._CE("",e):n},M_=function(e){return function(t){return 1-e(1-t)}},E_=function i(e,t){for(var n=e._first,r;n;)n instanceof Yt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},vr=function(e,t){return e&&(dt(e)?e:je[e]||pw(e))||t},Pr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return en(e,function(a){je[a]=mn[a]=s,je[o=a.toLowerCase()]=n;for(var l in s)je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[a+"."+l]=s[l]}),s},T_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ic=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*GA((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:T_(a);return s=Gc/s,l.config=function(c,u){return i(e,c,u)},l},rc=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:T_(n);return r.config=function(s){return i(e,s)},r};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Pr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Pr("Elastic",ic("in"),ic("out"),ic());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Pr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Pr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Pr("Circ",function(i){return-(Ym(1-i*i)-1)});Pr("Sine",function(i){return i===1?1:-kA(i*zA)+1});Pr("Back",rc("in"),rc("out"),rc());je.SteppedEase=je.steps=mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-it;return function(a){return((r*bo(0,o,a)|0)+s)*n}}};Es.ease=je["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Xu+=i+","+i+"Params,"});var b_=function(e,t){this.id=HA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:n_,this.set=t?t.getSetter:$u},vo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),go||fn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(As(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(rl(this,n),!s._dp||s.parent||a_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===it||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),i_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ts(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ua(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this._tDur,s),r!==!1),il(this),KA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(As(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Xn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ua(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=XA);var r=Ft;return Ft=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Od(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Od(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(vn(this,n),Qt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Qt(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-it)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=dt(n)?n:s_,a=function(){var c=r.then;r.then=null,dt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){zs(this)},i}();wn(vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Yt=function(i){qm(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qt(n.sortChildren),lt&&Xn(n.parent||lt,li(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&l_(li(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Qs(0,arguments,this),this},t.from=function(r,s,o){return Qs(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Qs(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Js(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(r,s,vn(this,o),1),this},t.call=function(r,s,o){return Xn(this,vt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new vt(r,o,vn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Js(o).immediateRender=Qt(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Js(a).immediateRender=Qt(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:bt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,y,v,E,C,w,b;if(this!==lt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,E=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=bt(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),C=Ts(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(h=c-h,b=1),_!==C&&!this._lock){var O=w&&C&1,S=O===(w&&_&1);if(_<C&&(O=!O),a=O?0:u%c?c:u,this._lock=1,this.render(a||(b?0:bt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;E_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=QA(this,bt(a),bt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(hn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-it);break}}d=g}else{d=this._last;for(var R=r<0?r:h;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,o||Ft&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=R?-it:it);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-it)._zTime=h>=a?1:-1,this._ts))return this._start=E,il(this),this.render(r,s,o);this._onUpdate&&!s&&hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Wi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(hn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(mi(s)||(s=vn(this,s,r)),!(r instanceof vo)){if(Bt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(wt(r))return this.addLabel(r,s);if(dt(r))r=vt.delayedCall(0,r);else return this}return this!==r?Xn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-bn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof vt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return wt(r)?this.removeLabel(r):dt(r)?this.killTweensOf(r):(nl(this,r),r===this._recent&&(this._recent=this._last),gr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=vn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=vt.delayedCall(0,s||mo,o);return a.data="isPause",this._hasPause=1,Xn(this,a,vn(this,r))},t.removePause=function(r){var s=this._first;for(r=vn(this,r);s;)s._start===r&&s.data==="isPause"&&Wi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Di!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=An(r),l=this._first,c=mi(s),u;l;)l instanceof vt?qA(l._targets,a)&&(c?(!Di||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=vn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=vt.to(o,wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||it,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&bs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,wn({startAt:{time:vn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Fd(this,vn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Fd(this,vn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return gr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),gr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=bn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;bs(o,o===lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(lt._ts&&(i_(lt,Ua(r,lt)),t_=fn.frame),fn.frame>=Id){Id+=pn.autoSleep||120;var s=lt._first;if((!s||!s._ts)&&pn.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e}(vo);wn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var mw=function(e,t,n,r,s,o,a){var l=new tn(this._pt,e,t,0,1,L_,null,s),c=0,u=0,f,h,d,g,_,m,p,y;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=_o(r)),o&&(y=[n,r],o(y,e,t),n=y[0],r=y[1]),h=n.match(ec)||[];f=ec.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?fs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=ec.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,($m.test(r)||p)&&(l.e=0),this._pt=l,l},Yu=function(e,t,n,r,s,o,a,l,c,u){dt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:dt(f)?c?e[t.indexOf("set")||!dt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=dt(f)?c?yw:C_:Ku,g;if(wt(r)&&(~r.indexOf("random(")&&(r=_o(r)),r.charAt(1)==="="&&(g=fs(h,r)+(Ot(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Zc)return!isNaN(h*r)&&r!==""?(g=new tn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Mw:P_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Vu(t,r),mw.call(this,e,t,h,r,d,l||pn.stringFilter,c))},_w=function(e,t,n,r,s){if(dt(e)&&(e=eo(e,s,t,n,r)),!$n(e)||e.style&&e.nodeType||Bt(e)||jm(e))return wt(e)?eo(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=eo(e[a],s,t,n,r);return o},A_=function(e,t,n,r,s,o){var a,l,c,u;if(un[e]&&(a=new un[e]).init(s,a.rawVars?t[e]:_w(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new tn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==rs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Di,Zc,ju=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!zu,E=e.timeline,C,w,b,O,S,R,H,Q,se,F,G,k,Y;if(E&&(!h||!s)&&(s="none"),e._ease=vr(s,Es.ease),e._yEase=f?M_(vr(f===!0?s:f,Es.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!E&&!!r.runBackwards,!E||h&&!r.stagger){if(Q=m[0]?_r(m[0]).harness:0,k=Q&&r[Q.prop],C=Ia(r,Wu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?pa:WA),_._lazy=0),o){if(Wi(e._startAt=vt.set(m,wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return hn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!a&&!d)&&e._startAt.revert(pa),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=wn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Qt(l),immediateRender:a,stagger:0,parent:p},C),k&&(b[Q.prop]=k),Wi(e._startAt=vt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(pa):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Qt(l)||l&&!g,w=0;w<m.length;w++){if(S=m[w],H=S._gsap||qu(m)[w]._gsap,e._ptLookup[w]=F={},Xc[H.id]&&Hi.length&&Da(),G=y===m?w:y.indexOf(S),Q&&(se=new Q).init(S,k||C,e,G,y)!==!1&&(e._pt=O=new tn(e._pt,S,se.name,0,1,se.render,se,0,se.priority),se._props.forEach(function(j){F[j]=O}),se.priority&&(R=1)),!Q||k)for(b in C)un[b]&&(se=A_(b,C,e,G,S,y))?se.priority&&(R=1):F[b]=O=Yu.call(e,S,b,"get",C[b],G,y,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),v&&e._pt&&(Di=e,lt.killTweensOf(S,F,e.globalTime(t)),Y=!e.parent,Di=0),e._pt&&l&&(Xc[H.id]=1)}R&&D_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&E.render(bn,!0,!0)},gw=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Zc=1,e.vars[t]="+=0",ju(e,a),Zc=0,l?po(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=mt(n)+Ot(f.e)),f.b&&(f.b=u.s+Ot(f.b))},vw=function(e,t){var n=e[0]?_r(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Tr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xw=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Bt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},eo=function(e,t,n,r,s){return dt(e)?e.call(t,n,r,s):wt(e)&&~e.indexOf("random(")?_o(e):e},w_=Xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",R_={};en(w_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return R_[i]=1});var vt=function(i){qm(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Js(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||lt,v=(Bt(n)||jm(n)?mi(n[0]):"length"in r)?[n]:An(n),E,C,w,b,O,S,R,H;if(a._targets=v.length?qu(v):po("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||oa(c)||oa(u)){if(r=a.vars,E=a.timeline=new Yt({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),E.kill(),E.parent=E._dp=li(a),E._start=0,h||oa(c)||oa(u)){if(b=v.length,R=h&&h_(h),$n(h))for(O in h)~w_.indexOf(O)&&(H||(H={}),H[O]=h[O]);for(C=0;C<b;C++)w=Ia(r,R_),w.stagger=0,p&&(w.yoyoEase=p),H&&Tr(w,H),S=v[C],w.duration=+eo(c,li(a),C,S,v),w.delay=(+eo(u,li(a),C,S,v)||0)-a._delay,!h&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),E.to(S,w,R?R(C,S,v):0),E._ease=je.none;E.duration()?c=u=0:a.timeline=0}else if(g){Js(wn(E.vars.defaults,{ease:"none"})),E._ease=vr(g.ease||r.ease||"none");var Q=0,se,F,G;if(Bt(g))g.forEach(function(k){return E.to(v,k,">")}),E.duration();else{w={};for(O in g)O==="ease"||O==="easeEach"||xw(O,g[O],w,g.easeEach);for(O in w)for(se=w[O].sort(function(k,Y){return k.t-Y.t}),Q=0,C=0;C<se.length;C++)F=se[C],G={ease:F.e,duration:(F.t-(C?se[C-1].t:0))/100*c},G[O]=F.v,E.to(v,G,Q),Q+=G.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!zu&&(Di=li(a),lt.killTweensOf(v),Di=0),Xn(y,li(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===bt(y._time)&&Qt(f)&&$A(li(a))&&y.data!=="nested")&&(a._tTime=-it,a.render(Math.max(0,-u)||0)),m&&l_(li(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-it&&!u?l:r<it?0:r,h,d,g,_,m,p,y,v,E;if(!c)JA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=bt(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===bt(f/_)&&(h=c,g--),h>c&&(h=c)),p=this._yoyo&&g&1,p&&(E=this._yEase,h=c-h),m=Ts(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&E_(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==c&&this._initted&&(this._lock=o=1,this.render(bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(c_(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!g&&(hn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(r<0?r:!h&&p?-it:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&qc(this,r,s,o),hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&hn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&qc(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Wi(this,1),!s&&!(u&&!a)&&(f||a||p)&&(hn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){go||fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ju(this,c),u=this._ease(c/this._dur),gw(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(rl(this,0),this.parent||o_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zs(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Di&&Di.vars.overwrite!==!0)._first||zs(this),this.parent&&o!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?An(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&jA(a,l))return s==="all"&&(this._pt=0),zs(this);for(f=this._op=this._op||[],s!=="all"&&(wt(s)&&(_={},en(s,function(y){return _[y]=1}),s=_),s=vw(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&nl(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&zs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Qs(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Qs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return lt.killTweensOf(r,s,o)},e}(vo);wn(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(i){vt[i]=function(){var e=new Yt,t=jc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Ku=function(e,t,n){return e[t]=n},C_=function(e,t,n){return e[t](n)},yw=function(e,t,n,r){return e[t](r.fp,n)},Sw=function(e,t,n){return e.setAttribute(t,n)},$u=function(e,t){return dt(e[t])?C_:Hu(e[t])&&e.setAttribute?Sw:Ku},P_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},L_=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Zu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ew=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Tw=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?nl(this,t,"_pt"):t.dep||(n=1),t=r;return!n},bw=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},D_=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},tn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||P_,this.d=l||this,this.set=c||Ku,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=bw,this.m=n,this.mt=s,this.tween=r},i}();en(Xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Wu[i]=1});mn.TweenMax=mn.TweenLite=vt;mn.TimelineLite=mn.TimelineMax=Yt;lt=new Yt({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=S_;var xr=[],_a={},Aw=[],zd=0,ww=0,sc=function(e){return(_a[e]||Aw).map(function(t){return t()})},Jc=function(){var e=Date.now(),t=[];e-zd>2&&(sc("matchMediaInit"),xr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=xn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),sc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),zd=e,sc("matchMedia"))},I_=function(){function i(t,n){this.selector=n&&Kc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ww++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){dt(n)&&(s=r,r=n,n=dt);var o=this,a=function(){var c=ht,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Kc(s)),ht=o,f=r.apply(o,arguments),dt(f)&&o._r.push(f),ht=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===dt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=ht;ht=null,n(this),ht=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof vt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof vt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=xr.length;o--;)xr[o].id===this.id&&xr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),Rw=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){$n(n)||(n={matches:n});var o=new I_(0,s||this.scope),a=o.conditions={},l,c,u;ht&&!o.selector&&(o.selector=ht.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=xn.matchMedia(n[c]),l&&(xr.indexOf(o)<0&&xr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Jc):l.addEventListener("change",Jc)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Na={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return v_(r)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,n,r){wt(e)&&(e=An(e)[0]);var s=_r(e||{}).get,o=n?s_:r_;return n==="native"&&(n=""),e&&(t?o((un[t]&&un[t].get||s)(e,t,n,r)):function(a,l,c){return o((un[a]&&un[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=An(e),e.length>1){var r=e.map(function(u){return on.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=un[t],a=_r(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;rs._pt=0,f.init(e,n?u+n:u,rs,0,[e]),f.render(1,f),rs._pt&&Zu(1,rs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=on.to(e,Tr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vr(e.ease,Es.ease)),Ud(Es,e||{})},config:function(e){return Ud(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!un[a]&&!mn[a]&&po(t+" effect requires "+a+" plugin.")}),tc[t]=function(a,l,c){return n(An(a),wn(l||{},s),c)},o&&(Yt.prototype[t]=function(a,l,c){return this.add(tc[t](a,$n(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=vr(t)},parseEase:function(e,t){return arguments.length?vr(e,t):je},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),r,s;for(n.smoothChildTiming=Qt(e.smoothChildTiming),lt.remove(n),n._dp=0,n._time=n._tTime=lt._time,r=lt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof vt&&r.vars.onComplete===r._targets[0]))&&Xn(n,r,r._start-r._delay),r=s;return Xn(lt,n,0),n},context:function(e,t){return e?new I_(e,t):ht},matchMedia:function(e){return new Rw(e)},matchMediaRefresh:function(){return xr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Jc()},addEventListener:function(e,t){var n=_a[e]||(_a[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_a[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:ow,wrapYoyo:aw,distribute:h_,random:p_,snap:d_,normalize:sw,getUnit:Ot,clamp:tw,splitColor:x_,toArray:An,selector:Kc,mapRange:__,pipe:iw,unitize:rw,interpolate:lw,shuffle:f_},install:Qm,effects:tc,ticker:fn,updateRoot:Yt.updateRoot,plugins:un,globalTimeline:lt,core:{PropTween:tn,globals:e_,Tween:vt,Timeline:Yt,Animation:vo,getCache:_r,_removeLinkedListItem:nl,reverting:function(){return Ft},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return zu=e}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Na[i]=vt[i]});fn.add(Yt.updateRoot);rs=Na.to({},{duration:0});var Cw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Pw=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Cw(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},oc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(wt(s)&&(l={},en(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Pw(a,s)}}}},on=Na.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oc("roundProps",$c),oc("modifiers"),oc("snap",d_))||Na;vt.version=Yt.version=on.version="3.12.4";Jm=1;ku()&&As();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hd,Ii,hs,Ju,ur,kd,Qu,Lw=function(){return typeof window<"u"},_i={},rr=180/Math.PI,ds=Math.PI/180,Kr=Math.atan2,Gd=1e8,ef=/([A-Z])/g,Dw=/(left|right|width|margin|padding|x)/i,Iw=/[\s,\(]\S/,Yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ow=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},U_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},N_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Fw=function(e,t,n){return e.style[t]=n},Bw=function(e,t,n){return e.style.setProperty(t,n)},zw=function(e,t,n){return e._gsap[t]=n},Hw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kw=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Gw=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ut="transform",nn=ut+"Origin",Vw=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in _i&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Yn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ci(r,a)}):this.tfm[e]=o.x?o[e]:ci(r,e),e===nn&&(this.tfm.zOrigin=o.zOrigin);else return Yn.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(ut)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(nn,t,"")),e=ut}(s||t)&&this.props.push(e,t,s[e])},O_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ww=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ef,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Qu(),(!s||!s.isStart)&&!n[ut]&&(O_(n),r.zOrigin&&n[nn]&&(n[nn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},F_=function(e,t){var n={target:e,props:[],revert:Ww,save:Vw};return e._gsap||on.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},B_,eu=function(e,t){var n=Ii.createElementNS?Ii.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ii.createElement(e);return n&&n.style?n:Ii.createElement(e)},Kn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(ef,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ws(t)||t,1)||""},Vd="O,Moz,ms,Ms,Webkit".split(","),ws=function(e,t,n){var r=t||ur,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Vd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Vd[o]:"")+e},tu=function(){Lw()&&window.document&&(Hd=window,Ii=Hd.document,hs=Ii.documentElement,ur=eu("div")||{style:{}},eu("div"),ut=ws(ut),nn=ut+"Origin",ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",B_=!!ws("perspective"),Qu=on.core.reverting,Ju=1)},ac=function i(e){var t=eu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(hs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),hs.removeChild(t),this.style.cssText=s,o},Wd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},z_=function(e){var t;try{t=e.getBBox()}catch{t=ac.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ac||(t=ac.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Wd(e,["x","cx","x1"])||0,y:+Wd(e,["y","cy","y1"])||0,width:0,height:0}:t},H_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&z_(e))},br=function(e,t){if(t){var n=e.style,r;t in _i&&t!==nn&&(t=ut),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(ef,"-$1").toLowerCase())):n.removeAttribute(t)}},Ui=function(e,t,n,r,s,o){var a=new tn(e._pt,t,n,0,1,o?N_:U_);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Xd={deg:1,rad:1,turn:1},Xw={grid:1,flex:1},Xi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ur.style,l=Dw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Xd[r]||Xd[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&H_(e),(d||o==="%")&&(_i[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],mt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ii||!_.appendChild)&&(_=Ii.body),m=_._gsap,m&&d&&m.width&&l&&m.time===fn.time&&!m.uncache)return mt(s/m.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,g=e[u],y?e.style[t]=y:br(e,t)}else(d||o==="%")&&!Xw[Kn(_,"display")]&&(a.position=Kn(e,"position")),_===e&&(a.position="static"),_.appendChild(ur),g=ur[u],_.removeChild(ur),a.position="absolute";return l&&d&&(m=_r(_),m.time=fn.time,m.width=_[u]),mt(h?g*s/f:g&&s?f/g*s:0)},ci=function(e,t,n,r){var s;return Ju||tu(),t in Yn&&t!=="transform"&&(t=Yn[t],~t.indexOf(",")&&(t=t.split(",")[0])),_i[t]&&t!=="transform"?(s=yo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Fa(Kn(e,nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Oa[t]&&Oa[t](e,t,n)||Kn(e,t)||n_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Xi(e,t,s,n)+n:s},qw=function(e,t,n,r){if(!n||n==="none"){var s=ws(t,e,1),o=s&&Kn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Kn(e,"borderTopColor"))}var a=new tn(this._pt,e.style,t,0,1,L_),l=0,c=0,u,f,h,d,g,_,m,p,y,v,E,C;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Kn(e,t)||r,_?e.style[t]=_:br(e,t)),u=[n,r],S_(u),n=u[0],r=u[1],h=n.match(is)||[],C=r.match(is)||[],C.length){for(;f=is.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,E=_.substr((d+"").length),m.charAt(1)==="="&&(m=fs(d,m)+E),p=parseFloat(m),v=m.substr((p+"").length),l=is.lastIndex-v.length,v||(v=v||pn.units[t]||E,l===r.length&&(r+=v,a.e+=v)),E!==v&&(d=Xi(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?N_:U_;return $m.test(r)&&(a.e=0),this._pt=a,a},qd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=qd[n]||n,t[1]=qd[r]||r,t.join(" ")},jw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],_i[a]&&(l=1,a=a==="transformOrigin"?nn:ut),br(n,a);l&&(br(n,ut),o&&(o.svg&&n.removeAttribute("transform"),yo(n,1),o.uncache=1,O_(r)))}},Oa={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new tn(e._pt,t,n,0,0,jw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},xo=[1,0,0,1,0,0],k_={},G_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Yd=function(e){var t=Kn(e,ut);return G_(t)?xo:t.substr(7).match(Km).map(mt)},tf=function(e,t){var n=e._gsap||_r(e),r=e.style,s=Yd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?xo:s):(s===xo&&!e.offsetParent&&e!==hs&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,hs.appendChild(e)),s=Yd(e),l?r.display=l:br(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nu=function(e,t,n,r,s,o){var a=e._gsap,l=s||tf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],v=t.split(" "),E=parseFloat(v[0])||0,C=parseFloat(v[1])||0,w,b,O,S;n?l!==xo&&(b=d*m-g*_)&&(O=E*(m/b)+C*(-_/b)+(_*y-m*p)/b,S=E*(-g/b)+C*(d/b)-(d*y-g*p)/b,E=O,C=S):(w=z_(e),E=w.x+(~v[0].indexOf("%")?E/100*w.width:E),C=w.y+(~(v[1]||v[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(p=E-c,y=C-u,a.xOffset=f+(p*d+y*_)-p,a.yOffset=h+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[nn]="0px 0px",o&&(Ui(o,a,"xOrigin",c,E),Ui(o,a,"yOrigin",u,C),Ui(o,a,"xOffset",f,a.xOffset),Ui(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},yo=function(e,t){var n=e._gsap||new b_(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Kn(e,nn)||"0",u,f,h,d,g,_,m,p,y,v,E,C,w,b,O,S,R,H,Q,se,F,G,k,Y,j,te,fe,ae,oe,Z,re,ge;return u=f=h=_=m=p=y=v=E=0,d=g=1,n.svg=!!(e.getCTM&&H_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),r.scale=r.rotate=r.translate="none"),b=tf(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),nu(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,w=n.yOrigin||0,b!==xo&&(H=b[0],Q=b[1],se=b[2],F=b[3],u=G=b[4],f=k=b[5],b.length===6?(d=Math.sqrt(H*H+Q*Q),g=Math.sqrt(F*F+se*se),_=H||Q?Kr(Q,H)*rr:0,y=se||F?Kr(se,F)*rr+_:0,y&&(g*=Math.abs(Math.cos(y*ds))),n.svg&&(u-=C-(C*H+w*se),f-=w-(C*Q+w*F))):(ge=b[6],Z=b[7],fe=b[8],ae=b[9],oe=b[10],re=b[11],u=b[12],f=b[13],h=b[14],O=Kr(ge,oe),m=O*rr,O&&(S=Math.cos(-O),R=Math.sin(-O),Y=G*S+fe*R,j=k*S+ae*R,te=ge*S+oe*R,fe=G*-R+fe*S,ae=k*-R+ae*S,oe=ge*-R+oe*S,re=Z*-R+re*S,G=Y,k=j,ge=te),O=Kr(-se,oe),p=O*rr,O&&(S=Math.cos(-O),R=Math.sin(-O),Y=H*S-fe*R,j=Q*S-ae*R,te=se*S-oe*R,re=F*R+re*S,H=Y,Q=j,se=te),O=Kr(Q,H),_=O*rr,O&&(S=Math.cos(O),R=Math.sin(O),Y=H*S+Q*R,j=G*S+k*R,Q=Q*S-H*R,k=k*S-G*R,H=Y,G=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=mt(Math.sqrt(H*H+Q*Q+se*se)),g=mt(Math.sqrt(k*k+ge*ge)),O=Kr(G,k),y=Math.abs(O)>2e-4?O*rr:0,E=re?1/(re<0?-re:re):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!G_(Kn(e,ut)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=mt(d),n.scaleY=mt(g),n.rotation=mt(_)+a,n.rotationX=mt(m)+a,n.rotationY=mt(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[nn]=Fa(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?$w:B_?V_:Kw,n.uncache=0,n},Fa=function(e){return(e=e.split(" "))[0]+" "+e[1]},lc=function(e,t,n){var r=Ot(t);return mt(parseFloat(t)+parseFloat(Xi(e,"x",n+"px",r)))+r},Kw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,V_(e,t)},tr="0deg",Fs="0px",nr=") ",V_=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,E="",C=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==tr||u!==tr)){var w=parseFloat(u)*ds,b=Math.sin(w),O=Math.cos(w),S;w=parseFloat(f)*ds,S=Math.cos(w),o=lc(y,o,b*S*-v),a=lc(y,a,-Math.sin(w)*-v),l=lc(y,l,O*S*-v+v)}m!==Fs&&(E+="perspective("+m+nr),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(C||o!==Fs||a!==Fs||l!==Fs)&&(E+=l!==Fs||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+nr),c!==tr&&(E+="rotate("+c+nr),u!==tr&&(E+="rotateY("+u+nr),f!==tr&&(E+="rotateX("+f+nr),(h!==tr||d!==tr)&&(E+="skew("+h+", "+d+nr),(g!==1||_!==1)&&(E+="scale("+g+", "+_+nr),y.style[ut]=E||"translate(0, 0)"},$w=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),E=parseFloat(a),C,w,b,O,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ds,c*=ds,C=Math.cos(l)*f,w=Math.sin(l)*f,b=Math.sin(l-c)*-h,O=Math.cos(l-c)*h,c&&(u*=ds,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,O*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),C*=S,w*=S)),C=mt(C),w=mt(w),b=mt(b),O=mt(O)):(C=f,O=h,w=b=0),(v&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(v=Xi(d,"x",o,"px"),E=Xi(d,"y",a,"px")),(g||_||m||p)&&(v=mt(v+g-(g*C+_*b)+m),E=mt(E+_-(g*w+_*O)+p)),(r||s)&&(S=d.getBBox(),v=mt(v+r/100*S.width),E=mt(E+s/100*S.height)),S="matrix("+C+","+w+","+b+","+O+","+v+","+E+")",d.setAttribute("transform",S),y&&(d.style[ut]=S)},Zw=function(e,t,n,r,s){var o=360,a=wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?rr:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Gd)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Gd)%o-~~(c/o)*o)),e._pt=h=new tn(e._pt,t,n,r,c,Uw),h.e=u,h.u="deg",e._props.push(n),h},jd=function(e,t){for(var n in t)e[n]=t[n];return e},Jw=function(e,t,n){var r=jd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ut]=t,a=yo(n,1),br(n,ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ut],o[ut]=t,a=yo(n,1),o[ut]=c);for(l in _i)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ot(c),g=Ot(u),f=d!==g?Xi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new tn(e._pt,a,l,f,h-f,Qc),e._pt.u=g||0,e._props.push(l));jd(a,r)};en("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Oa[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return ci(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var W_={name:"css",register:tu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,y,v,E,C,w,b,O;Ju||tu(),this.styles=this.styles||F_(e),O=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(un[_]&&A_(_,t,n,r,e,s)))){if(d=typeof u,g=Oa[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=_o(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ki.lastIndex=0,ki.test(c)||(m=Ot(c),p=Ot(u)),p?m!==p&&(c=Xi(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),O.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],wt(c)&&~c.indexOf("random(")&&(c=_o(c)),Ot(c+"")||c==="auto"||(c+=pn.units[_]||Ot(ci(e,_))||""),(c+"").charAt(1)==="="&&(c=ci(e,_))):c=ci(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Yn&&(_==="autoAlpha"&&(h===1&&ci(e,"visibility")==="hidden"&&f&&(h=0),O.push("visibility",0,a.visibility),Ui(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Yn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in _i,v){if(this.styles.save(_),E||(C=e._gsap,C.renderTransform&&!t.parseTransform||yo(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new tn(this._pt,a,ut,0,1,C.renderTransform,C,0,-1),E.dep=1),_==="scale")this._pt=new tn(this._pt,C,"scaleY",C.scaleY,(y?fs(C.scaleY,y+f):f)-C.scaleY||0,Qc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){O.push(nn,0,a[nn]),u=Yw(u),C.svg?nu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Ui(this,C,"zOrigin",C.zOrigin,p),Ui(this,a,_,Fa(c),Fa(u)));continue}else if(_==="svgOrigin"){nu(e,u,1,w,0,this);continue}else if(_ in k_){Zw(this,C,_,h,y?fs(h,y+u):u);continue}else if(_==="smoothOrigin"){Ui(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){Jw(this,u,e);continue}}else _ in a||(_=ws(_)||_);if(v||(f||f===0)&&(h||h===0)&&!Iw.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Ot(u)||(_ in pn.units?pn.units[_]:m),m!==p&&(h=Xi(e,_,c,p)),this._pt=new tn(this._pt,v?C:a,_,h,(y?fs(h,y+f):f)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Ow:Qc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Nw);else if(_ in a)qw.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){Vu(_,u);continue}v||(_ in a?O.push(_,0,a[_]):O.push(_,1,c||e[_])),o.push(_)}}b&&D_(this)},render:function(e,t){if(t.tween._time||!Qu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ci,aliases:Yn,getSetter:function(e,t,n){var r=Yn[t];return r&&r.indexOf(",")<0&&(t=r),t in _i&&t!==nn&&(e._gsap.x||ci(e,"x"))?n&&kd===n?t==="scale"?Hw:zw:(kd=n||{})&&(t==="scale"?kw:Gw):e.style&&!Hu(e.style[t])?Fw:~t.indexOf("-")?Bw:$u(e,t)},core:{_removeProperty:br,_getMatrix:tf}};on.utils.checkPrefix=ws;on.core.getStyleSaver=F_;(function(i,e,t,n){var r=en(i+","+e+","+t,function(s){_i[s]=1});en(e,function(s){pn.units[s]="deg",k_[s]=1}),Yn[r[13]]=i+","+e,en(n,function(s){var o=s.split(":");Yn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){pn.units[i]="px"});on.registerPlugin(W_);var Jr=on.registerPlugin(W_)||on;Jr.core.Tween;const Qw={__name:"HomeView",setup(i){const e=gu();return Pp(()=>{const t=new qb,n=new UA,r="fonts.json";let s;const o=new Promise((C,w)=>{n.load(r,function(b){s=b,C()},void 0,function(b){w(b)})}),a={五行:["金","木","水","火","土"],八卦:["乾","坤","震","巽","坎","艮","离","兑"],八门:["休","生","伤","杜","景","死","惊","开"],八神:["值符","螣蛇","太阴","六合","白虎","玄武","九地","九天"],九星:["天蓬","天任","天冲","天辅","天英","天芮","天柱","天心"],数字:["壹","贰","叁","肆","伍","陆","柒","捌","玖","拾"],天干:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],地支:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],节气:["立  春","雨  水","惊  蛰","春  分","清  明","谷  雨","立  夏","小  满","芒  种","夏  至","小  暑","大  暑","立  秋","处  暑","白  露","秋  分","寒  露","霜  降","立  冬","小  雪","大  雪","冬  至","小  寒","大  寒"]},l=[{innerRing:2,outerRing:1.5,lineWidth:.1,circleWidth:[.1,.1],lineNum:8,text:[16777215],offsetX:0,offsetY:0,size:.3,direction:-1,duration:40},{innerRing:3.5,outerRing:.7,lineWidth:.15,circleWidth:[.1,.1],lineNum:8,text:a.八神,offsetX:-.2,offsetY:-.08,size:.3,direction:1,duration:10},{innerRing:4.2,outerRing:.7,lineWidth:.15,circleWidth:[.1,.1],lineNum:8,text:a.九星,offsetX:-.2,offsetY:-.08,size:.3,direction:-1,duration:20},{innerRing:4.9,outerRing:.7,lineWidth:.15,circleWidth:[.1,.1],lineNum:8,text:a.八门,offsetX:-.4,offsetY:-.2,size:.3,direction:1,duration:30},{innerRing:5.6,outerRing:.7,lineWidth:.15,circleWidth:[.1,.1],lineNum:8,text:a.天干,offsetX:-.4,offsetY:-.2,size:.3,direction:1,duration:30},{innerRing:6.3,outerRing:.4,lineWidth:.15,circleWidth:[0,0],lineNum:60,text:a.天干,offsetX:-.13,offsetY:.01,size:.2,direction:1,duration:25},{innerRing:6.7,outerRing:.4,lineWidth:.15,circleWidth:[0,0],lineNum:60,text:a.地支,offsetX:-.13,offsetY:-.07,size:.2,direction:1,duration:25},{innerRing:7.1,outerRing:.5,lineWidth:.15,circleWidth:[.1,.1],lineNum:24,text:a.节气,offsetX:-.36,offsetY:-.03,size:.2,direction:1,duration:30},{innerRing:7.6,outerRing:.8,lineWidth:.15,circleWidth:[.1,.1],lineNum:32,text:a.八卦,offsetX:-.3,offsetY:-.1,size:.4,direction:-1,duration:60},{innerRing:8.4,outerRing:.5,lineWidth:.15,circleWidth:[.1,.1],lineNum:50,text:a.五行,offsetX:-.13,offsetY:-.02,size:.2,direction:1,duration:35},{innerRing:8.9,outerRing:1,lineWidth:.1,circleWidth:[1,0],lineNum:64,text:[0],offsetX:0,offsetY:0,size:.3,direction:1,duration:30}],c=[],u=[0,.7,.7,.7,.7,0,.7,.7,.7,.7,.7,0,.7,.7,.7],f=({innerRing:C,outerRing:w,lineWidth:b,circleWidth:O,lineNum:S,offsetX:R,offsetY:H,text:Q,size:se,direction:F,duration:G})=>{const k=new cr,Y=[0,w],j=new Jl({color:16777215,side:Mn});Y.forEach((oe,Z)=>{const re=new Fu(C+oe,C+O[Z]+oe,64,1),ge=new Xt(re,j);k.add(ge)});for(let oe=0;oe<S;oe++){const Z=C+Y[1]/2,re=2*Math.PI/S*oe,ge=Math.cos(re)*Z,Ee=Math.sin(re)*Z,V=new lr(b,Y[1]),ce=new Xt(V,j);ce.position.set(ge,Ee,0),ce.rotation.set(0,0,re+Math.PI/2),k.add(ce)}if(Q.length>1)for(let oe=0;oe<S;oe++){const Z=C+Y[1]/2,re=2*Math.PI/S*oe+Math.PI/S,ge=Math.cos(re)*Z,Ee=Math.sin(re)*Z;var te=new BA(Q[oe%Q.length],{font:s,size:se,height:.001,curveSegments:12});te.translate(R,H,0);var fe=new Jl({color:16777215}),ae=new Xt(te,fe);ae.position.set(ge,Ee,0),ae.rotation.set(0,0,re+-Math.PI/2),k.add(ae)}if(Q.length==1){const oe=[[1,1,1],[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0]];for(let Z=0;Z<S;Z++){const re=C+Y[1]/2,ge=2*Math.PI/S*Z+Math.PI/S,Ee=Math.cos(ge)*re,V=Math.sin(ge)*re;k.add(d(oe[Z%8],Ee,V,1e-4,ge+Math.PI/2,Q[0]),d(oe[Z%8],Ee,V,-1e-4,ge+Math.PI/2,Q[0]))}}{Jr.to(k.rotation,{duration:G,z:Math.PI*2*F,repeat:-1,ease:"none"});const oe={r:1,g:1,b:1};Jr.timeline({repeat:-1,delay:5}).to(k.position,{duration:1,ease:"ease.inOut",y:Math.random()*10-5,delay:5}).to(oe,{r:133/255,g:193/255,b:255/255,duration:2,onUpdate:()=>_.color.setRGB(oe.r,oe.g,oe.b)}).to(k.position,{duration:1,ease:"ease.inOut",delay:5,y:0}).to(oe,{r:1,g:1,b:1,duration:3,onUpdate:()=>_.color.setRGB(oe.r,oe.g,oe.b)})}return k.rotateX(-Math.PI/2),k},h=(C,w)=>{const b=new cr,O=(te,fe,ae,oe)=>{const Z=new Lu({color:fe,side:Mn}),re=new Nu(te,64,ae,oe);return new Xt(re,Z)},S=O(1.8,0,0,Math.PI),R=O(1.8,16777215,Math.PI,Math.PI),H=O(.9,0,0,Math.PI*2),Q=O(.9,16777215,0,Math.PI*2),se=O(.25,0,0,Math.PI*2),F=O(.25,16777215,0,Math.PI*2),G=O(.9,0,0,Math.PI*2),k=O(.9,16777215,0,Math.PI*2),Y=O(.25,0,0,Math.PI*2),j=O(.25,16777215,0,Math.PI*2);return H.position.set(-.9,0,.001),Q.position.set(.9,0,.001),F.position.set(-.9,0,.002),se.position.set(.9,0,.002),G.position.set(-.9,0,-.001),k.position.set(.9,0,-.001),j.position.set(-.9,0,-.002),Y.position.set(.9,0,-.002),b.add(S,R,H,Q,F,se,G,k,j,Y),Jr.to(b.rotation,{duration:30,z:Math.PI*2,repeat:-1,ease:"none"}),b.rotateX(-Math.PI/2),b.position.set(...C),b.scale.set(...w),b};t.add(h([0,0,0],[1,1,1]));const d=(C,w,b,O,S,R)=>{const H=[-.32,0,.32],Q=new cr,se=new Jl({color:R,side:Mn});return C.forEach((F,G)=>{if(F==1){const k=new Xt(new lr(1,.2),se);k.position.set(0,H[G],0),Q.add(k)}if(F==0){const k=new Xt(new lr(.45,.2),se),Y=new Xt(new lr(.45,.2),se);k.position.set(-.275,H[G],0),Y.position.set(.275,H[G],0),Q.add(k,Y)}}),Q.position.set(w,b,O),Q.rotation.set(0,0,S),Q};o.then(()=>{l.forEach(C=>{c.push(f(C))}),g()});const g=function(){const C=b=>{t.add(b),b.scale.set(1.2,1.2,1.2),Jr.to(b.scale,{duration:.8,x:1,y:1,repeat:0,ease:"easeInOut"})},w=Jr.timeline();c.forEach((b,O)=>{w.to(".webgl",{duration:u[O]}).call(()=>{C(b)})})},_=new PA(16777215,1);t.add(_);const m={width:window.innerWidth-180,height:window.innerHeight},p=new Sn(75,m.width/m.height,1,1e3);p.position.y=10,p.position.x=10,p.position.z=10,p.lookAt(t.position),t.add(p);const y=new Bm({canvas:e.value,antialias:!0,alpha:!0});y.setSize(m.width,m.height),window.addEventListener("resize",()=>{m.height=window.innerHeight,m.width=window.innerWidth,p.aspect=m.width/m.height,p.updateProjectionMatrix(),y.setSize(m.width,m.height),y.setPixelRatio(window.devicePixelRatio)});const v=new IA(p,e.value);v.enableDamping=!0,v.maxDistance=50,v.enablePan=!1;const E=()=>{y.render(t,p),v.update(),window.requestAnimationFrame(E)};E()}),(t,n)=>(kp(),Gp("canvas",{ref_key:"canvas",ref:e},null,512))}},e1=_x({history:Uv("./"),routes:[{path:"/",name:"home",component:Qw},{path:"/about",name:"about",component:()=>Tx(()=>import("./AboutView--uAKzMUg.js"),__vite__mapDeps([0,1]),import.meta.url)}]}),nf=fv(Sx);nf.use(_v());nf.use(e1);nf.mount("#app");export{vx as _,Ws as a,Gp as c,kp as o};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AboutView--uAKzMUg.js","./AboutView-ug8e6cRs.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
