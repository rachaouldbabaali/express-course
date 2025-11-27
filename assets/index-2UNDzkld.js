function td(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(n,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ta={exports:{}},Cs={},Ra={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hn=Symbol.for("react.element"),nd=Symbol.for("react.portal"),sd=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),ad=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),di=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=di&&e[di]||e["@@iterator"],typeof e=="function"?e:null)}var _a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ia=Object.assign,La={};function kr(e,t,r){this.props=e,this.context=t,this.refs=La,this.updater=r||_a}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ma(){}Ma.prototype=kr.prototype;function hl(e,t,r){this.props=e,this.context=t,this.refs=La,this.updater=r||_a}var gl=hl.prototype=new Ma;gl.constructor=hl;Ia(gl,kr.prototype);gl.isPureReactComponent=!0;var fi=Array.isArray,Oa=Object.prototype.hasOwnProperty,vl={current:null},za={key:!0,ref:!0,__self:!0,__source:!0};function Da(e,t,r){var n,s={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Oa.call(t,n)&&!za.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(i===1)s.children=r;else if(1<i){for(var a=Array(i),d=0;d<i;d++)a[d]=arguments[d+2];s.children=a}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)s[n]===void 0&&(s[n]=i[n]);return{$$typeof:hn,type:e,key:o,ref:l,props:s,_owner:vl.current}}function md(e,t){return{$$typeof:hn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yl(e){return typeof e=="object"&&e!==null&&e.$$typeof===hn}function hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var pi=/\/+/g;function Hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):t.toString(36)}function Fn(e,t,r,n,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case hn:case nd:l=!0}}if(l)return l=e,s=s(l),e=n===""?"."+Hs(l,0):n,fi(s)?(r="",e!=null&&(r=e.replace(pi,"$&/")+"/"),Fn(s,t,r,"",function(d){return d})):s!=null&&(yl(s)&&(s=md(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(pi,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=n===""?".":n+":",fi(e))for(var i=0;i<e.length;i++){o=e[i];var a=n+Hs(o,i);l+=Fn(o,t,r,a,s)}else if(a=pd(e),typeof a=="function")for(e=a.call(e),i=0;!(o=e.next()).done;)o=o.value,a=n+Hs(o,i++),l+=Fn(o,t,r,a,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jn(e,t,r){if(e==null)return e;var n=[],s=0;return Fn(e,n,"","",function(o){return t.call(r,o,s++)}),n}function gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Bn={transition:null},vd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Bn,ReactCurrentOwner:vl};function qa(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:jn,forEach:function(e,t,r){jn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return jn(e,function(){t++}),t},toArray:function(e){return jn(e,function(t){return t})||[]},only:function(e){if(!yl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=kr;O.Fragment=sd;O.Profiler=ld;O.PureComponent=hl;O.StrictMode=od;O.Suspense=cd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd;O.act=qa;O.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ia({},e.props),s=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=vl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)Oa.call(t,a)&&!za.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&i!==void 0?i[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){i=Array(a);for(var d=0;d<a;d++)i[d]=arguments[d+2];n.children=i}return{$$typeof:hn,type:e.type,key:s,ref:o,props:n,_owner:l}};O.createContext=function(e){return e={$$typeof:ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:id,_context:e},e.Consumer=e};O.createElement=Da;O.createFactory=function(e){var t=Da.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:ud,render:e}};O.isValidElement=yl;O.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:gd}};O.memo=function(e,t){return{$$typeof:dd,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Bn.transition;Bn.transition={};try{e()}finally{Bn.transition=t}};O.unstable_act=qa;O.useCallback=function(e,t){return fe.current.useCallback(e,t)};O.useContext=function(e){return fe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};O.useEffect=function(e,t){return fe.current.useEffect(e,t)};O.useId=function(){return fe.current.useId()};O.useImperativeHandle=function(e,t,r){return fe.current.useImperativeHandle(e,t,r)};O.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return fe.current.useMemo(e,t)};O.useReducer=function(e,t,r){return fe.current.useReducer(e,t,r)};O.useRef=function(e){return fe.current.useRef(e)};O.useState=function(e){return fe.current.useState(e)};O.useSyncExternalStore=function(e,t,r){return fe.current.useSyncExternalStore(e,t,r)};O.useTransition=function(){return fe.current.useTransition()};O.version="18.3.1";Ra.exports=O;var P=Ra.exports;const Ur=rd(P),yd=td({__proto__:null,default:Ur},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=P,wd=Symbol.for("react.element"),kd=Symbol.for("react.fragment"),Sd=Object.prototype.hasOwnProperty,jd=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ed={key:!0,ref:!0,__self:!0,__source:!0};function Ua(e,t,r){var n,s={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Sd.call(t,n)&&!Ed.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:wd,type:e,key:o,ref:l,props:s,_owner:jd.current}}Cs.Fragment=kd;Cs.jsx=Ua;Cs.jsxs=Ua;Ta.exports=Cs;var u=Ta.exports,Aa={exports:{}},je={},Fa={exports:{}},Ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var M=_.length;_.push(L);e:for(;0<M;){var G=M-1>>>1,Z=_[G];if(0<s(Z,L))_[G]=L,_[M]=Z,M=G;else break e}}function r(_){return _.length===0?null:_[0]}function n(_){if(_.length===0)return null;var L=_[0],M=_.pop();if(M!==L){_[0]=M;e:for(var G=0,Z=_.length,kn=Z>>>1;G<kn;){var Rt=2*(G+1)-1,Vs=_[Rt],_t=Rt+1,Sn=_[_t];if(0>s(Vs,M))_t<Z&&0>s(Sn,Vs)?(_[G]=Sn,_[_t]=M,G=_t):(_[G]=Vs,_[Rt]=M,G=Rt);else if(_t<Z&&0>s(Sn,M))_[G]=Sn,_[_t]=M,G=_t;else break e}}return L}function s(_,L){var M=_.sortIndex-L.sortIndex;return M!==0?M:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var a=[],d=[],h=1,m=null,g=3,w=!1,k=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var L=r(d);L!==null;){if(L.callback===null)n(d);else if(L.startTime<=_)n(d),L.sortIndex=L.expirationTime,t(a,L);else break;L=r(d)}}function x(_){if(v=!1,f(_),!k)if(r(a)!==null)k=!0,Fe(y);else{var L=r(d);L!==null&&Tt(x,L.startTime-_)}}function y(_,L){k=!1,v&&(v=!1,p(E),E=-1),w=!0;var M=g;try{for(f(L),m=r(a);m!==null&&(!(m.expirationTime>L)||_&&!z());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var Z=G(m.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===r(a)&&n(a),f(L)}else n(a);m=r(a)}if(m!==null)var kn=!0;else{var Rt=r(d);Rt!==null&&Tt(x,Rt.startTime-L),kn=!1}return kn}finally{m=null,g=M,w=!1}}var S=!1,j=null,E=-1,I=5,T=-1;function z(){return!(e.unstable_now()-T<I)}function X(){if(j!==null){var _=e.unstable_now();T=_;var L=!0;try{L=j(!0,_)}finally{L?oe():(S=!1,j=null)}}else S=!1}var oe;if(typeof c=="function")oe=function(){c(X)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Pt=We.port2;We.port1.onmessage=X,oe=function(){Pt.postMessage(null)}}else oe=function(){C(X,0)};function Fe(_){j=_,S||(S=!0,oe())}function Tt(_,L){E=C(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Fe(y))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var M=g;g=L;try{return _()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var M=g;g=_;try{return L()}finally{g=M}},e.unstable_scheduleCallback=function(_,L,M){var G=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?G+M:G):M=G,_){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,_={id:h++,callback:L,priorityLevel:_,startTime:M,expirationTime:Z,sortIndex:-1},M>G?(_.sortIndex=M,t(d,_),r(a)===null&&_===r(d)&&(v?(p(E),E=-1):v=!0,Tt(x,M-G))):(_.sortIndex=Z,t(a,_),k||w||(k=!0,Fe(y))),_},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(_){var L=g;return function(){var M=g;g=L;try{return _.apply(this,arguments)}finally{g=M}}}})(Ba);Fa.exports=Ba;var Cd=Fa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=P,Se=Cd;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $a=new Set,Jr={};function bt(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)$a.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xo=Object.prototype.hasOwnProperty,Pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mi={},hi={};function Td(e){return xo.call(hi,e)?!0:xo.call(mi,e)?!1:Pd.test(e)?hi[e]=!0:(mi[e]=!0,!1)}function Rd(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _d(e,t,r,n){if(t===null||typeof t>"u"||Rd(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,r,n,s,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xl=/[\-:]([a-z])/g;function wl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xl,wl);se[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xl,wl);se[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xl,wl);se[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function kl(e,t,r,n){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_d(t,r,s,n)&&(r=null),n||s===null?Td(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var rt=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,En=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),Sl=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),ba=Symbol.for("react.provider"),Va=Symbol.for("react.context"),jl=Symbol.for("react.forward_ref"),ko=Symbol.for("react.suspense"),So=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Ha=Symbol.for("react.offscreen"),gi=Symbol.iterator;function Nr(e){return e===null||typeof e!="object"?null:(e=gi&&e[gi]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ws;function Or(e){if(Ws===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ws=t&&t[1]||""}return`
`+Ws+e}var Gs=!1;function Qs(e,t){if(!e||Gs)return"";Gs=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=n.stack.split(`
`),l=s.length-1,i=o.length-1;1<=l&&0<=i&&s[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==o[i]){var a=`
`+s[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=i);break}}}finally{Gs=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Or(e):""}function Id(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function jo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Qt:return"Portal";case wo:return"Profiler";case Sl:return"StrictMode";case ko:return"Suspense";case So:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Va:return(e.displayName||"Context")+".Consumer";case ba:return(e._context.displayName||"Context")+".Provider";case jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case El:return t=e.displayName||null,t!==null?t:jo(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return jo(e(t))}catch{}}return null}function Ld(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jo(t);case 8:return t===Sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Md(e){var t=Wa(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cn(e){e._valueTracker||(e._valueTracker=Md(e))}function Ga(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Wa(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,t){var r=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vi(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=kt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qa(e,t){t=t.checked,t!=null&&kl(e,"checked",t,!1)}function Co(e,t){Qa(e,t);var r=kt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?No(e,t.type,r):t.hasOwnProperty("defaultValue")&&No(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yi(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function No(e,t,r){(t!=="number"||Xn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var zr=Array.isArray;function lr(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+kt(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xi(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(zr(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:kt(r)}}function Ja(e,t){var r=kt(t.value),n=kt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function wi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ka(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function To(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ka(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nn,Ya=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nn=Nn||document.createElement("div"),Nn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Od=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){Od.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Xa(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Za(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=Xa(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var zd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ro(e,t){if(t){if(zd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function _o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Io=null;function Cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lo=null,ir=null,ar=null;function ki(e){if(e=yn(e)){if(typeof Lo!="function")throw Error(N(280));var t=e.stateNode;t&&(t=_s(t),Lo(e.stateNode,e.type,t))}}function eu(e){ir?ar?ar.push(e):ar=[e]:ir=e}function tu(){if(ir){var e=ir,t=ar;if(ar=ir=null,ki(e),t)for(e=0;e<t.length;e++)ki(t[e])}}function ru(e,t){return e(t)}function nu(){}var Js=!1;function su(e,t,r){if(Js)return e(t,r);Js=!0;try{return ru(e,t,r)}finally{Js=!1,(ir!==null||ar!==null)&&(nu(),tu())}}function Yr(e,t){var r=e.stateNode;if(r===null)return null;var n=_s(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Mo=!1;if(Xe)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Mo=!1}function Dd(e,t,r,n,s,o,l,i,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Fr=!1,Zn=null,es=!1,Oo=null,qd={onError:function(e){Fr=!0,Zn=e}};function Ud(e,t,r,n,s,o,l,i,a){Fr=!1,Zn=null,Dd.apply(qd,arguments)}function Ad(e,t,r,n,s,o,l,i,a){if(Ud.apply(this,arguments),Fr){if(Fr){var d=Zn;Fr=!1,Zn=null}else throw Error(N(198));es||(es=!0,Oo=d)}}function Vt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ou(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Si(e){if(Vt(e)!==e)throw Error(N(188))}function Fd(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return Si(s),e;if(o===n)return Si(s),t;o=o.sibling}throw Error(N(188))}if(r.return!==n.return)r=s,n=o;else{for(var l=!1,i=s.child;i;){if(i===r){l=!0,r=s,n=o;break}if(i===n){l=!0,n=s,r=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===r){l=!0,r=o,n=s;break}if(i===n){l=!0,n=o,r=s;break}i=i.sibling}if(!l)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function lu(e){return e=Fd(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var au=Se.unstable_scheduleCallback,ji=Se.unstable_cancelCallback,Bd=Se.unstable_shouldYield,$d=Se.unstable_requestPaint,Q=Se.unstable_now,bd=Se.unstable_getCurrentPriorityLevel,Nl=Se.unstable_ImmediatePriority,uu=Se.unstable_UserBlockingPriority,ts=Se.unstable_NormalPriority,Vd=Se.unstable_LowPriority,cu=Se.unstable_IdlePriority,Ns=null,Ve=null;function Hd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ns,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Qd,Wd=Math.log,Gd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Wd(e)/Gd|0)|0}var Pn=64,Tn=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rs(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var i=l&~s;i!==0?n=Dr(i):(o&=l,o!==0&&(n=Dr(o)))}else l=r&~s,l!==0?n=Dr(l):o!==0&&(n=Dr(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-qe(t),s=1<<r,n|=e[r],t&=~s;return n}function Jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-qe(o),i=1<<l,a=s[l];a===-1?(!(i&r)||i&n)&&(s[l]=Jd(i,t)):a<=t&&(e.expiredLanes|=i),o&=~i}}function zo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function du(){var e=Pn;return Pn<<=1,!(Pn&4194240)&&(Pn=64),e}function Ks(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=r}function Yd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-qe(r),o=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~o}}function Pl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-qe(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var q=0;function fu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pu,Tl,mu,hu,gu,Do=!1,Rn=[],ft=null,pt=null,mt=null,Xr=new Map,Zr=new Map,it=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ei(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Tr(e,t,r,n,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},t!==null&&(t=yn(t),t!==null&&Tl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Zd(e,t,r,n,s){switch(t){case"focusin":return ft=Tr(ft,e,t,r,n,s),!0;case"dragenter":return pt=Tr(pt,e,t,r,n,s),!0;case"mouseover":return mt=Tr(mt,e,t,r,n,s),!0;case"pointerover":var o=s.pointerId;return Xr.set(o,Tr(Xr.get(o)||null,e,t,r,n,s)),!0;case"gotpointercapture":return o=s.pointerId,Zr.set(o,Tr(Zr.get(o)||null,e,t,r,n,s)),!0}return!1}function vu(e){var t=Mt(e.target);if(t!==null){var r=Vt(t);if(r!==null){if(t=r.tag,t===13){if(t=ou(r),t!==null){e.blockedOn=t,gu(e.priority,function(){mu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $n(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Io=n,r.target.dispatchEvent(n),Io=null}else return t=yn(r),t!==null&&Tl(t),e.blockedOn=r,!1;t.shift()}return!0}function Ci(e,t,r){$n(e)&&r.delete(t)}function ef(){Do=!1,ft!==null&&$n(ft)&&(ft=null),pt!==null&&$n(pt)&&(pt=null),mt!==null&&$n(mt)&&(mt=null),Xr.forEach(Ci),Zr.forEach(Ci)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Do||(Do=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,ef)))}function en(e){function t(s){return Rr(s,e)}if(0<Rn.length){Rr(Rn[0],e);for(var r=1;r<Rn.length;r++){var n=Rn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ft!==null&&Rr(ft,e),pt!==null&&Rr(pt,e),mt!==null&&Rr(mt,e),Xr.forEach(t),Zr.forEach(t),r=0;r<it.length;r++)n=it[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<it.length&&(r=it[0],r.blockedOn===null);)vu(r),r.blockedOn===null&&it.shift()}var ur=rt.ReactCurrentBatchConfig,ns=!0;function tf(e,t,r,n){var s=q,o=ur.transition;ur.transition=null;try{q=1,Rl(e,t,r,n)}finally{q=s,ur.transition=o}}function rf(e,t,r,n){var s=q,o=ur.transition;ur.transition=null;try{q=4,Rl(e,t,r,n)}finally{q=s,ur.transition=o}}function Rl(e,t,r,n){if(ns){var s=qo(e,t,r,n);if(s===null)lo(e,t,n,ss,r),Ei(e,n);else if(Zd(s,e,t,r,n))n.stopPropagation();else if(Ei(e,n),t&4&&-1<Xd.indexOf(e)){for(;s!==null;){var o=yn(s);if(o!==null&&pu(o),o=qo(e,t,r,n),o===null&&lo(e,t,n,ss,r),o===s)break;s=o}s!==null&&n.stopPropagation()}else lo(e,t,n,null,r)}}var ss=null;function qo(e,t,r,n){if(ss=null,e=Cl(n),e=Mt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ou(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ss=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bd()){case Nl:return 1;case uu:return 4;case ts:case Vd:return 16;case cu:return 536870912;default:return 16}default:return 16}}var ut=null,_l=null,bn=null;function xu(){if(bn)return bn;var e,t=_l,r=t.length,n,s="value"in ut?ut.value:ut.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===s[o-n];n++);return bn=s.slice(e,1<n?1-n:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function Ni(){return!1}function Ee(e){function t(r,n,s,o,l){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_n:Ni,this.isPropagationStopped=Ni,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Ee(Sr),vn=V({},Sr,{view:0,detail:0}),nf=Ee(vn),Ys,Xs,_r,Ps=V({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(Ys=e.screenX-_r.screenX,Xs=e.screenY-_r.screenY):Xs=Ys=0,_r=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),Pi=Ee(Ps),sf=V({},Ps,{dataTransfer:0}),of=Ee(sf),lf=V({},vn,{relatedTarget:0}),Zs=Ee(lf),af=V({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Ee(af),cf=V({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Ee(cf),ff=V({},Sr,{data:0}),Ti=Ee(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function Ll(){return gf}var vf=V({},vn,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=Ee(vf),xf=V({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ri=Ee(xf),wf=V({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),kf=Ee(wf),Sf=V({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=Ee(Sf),Ef=V({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=Ee(Ef),Nf=[9,13,27,32],Ml=Xe&&"CompositionEvent"in window,Br=null;Xe&&"documentMode"in document&&(Br=document.documentMode);var Pf=Xe&&"TextEvent"in window&&!Br,wu=Xe&&(!Ml||Br&&8<Br&&11>=Br),_i=" ",Ii=!1;function ku(e,t){switch(e){case"keyup":return Nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Tf(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(Ii=!0,_i);case"textInput":return e=t.data,e===_i&&Ii?null:e;default:return null}}function Rf(e,t){if(Kt)return e==="compositionend"||!Ml&&ku(e,t)?(e=xu(),bn=_l=ut=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function ju(e,t,r,n){eu(n),t=os(t,"onChange"),0<t.length&&(r=new Il("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var $r=null,tn=null;function If(e){Ou(e,0)}function Ts(e){var t=Zt(e);if(Ga(t))return e}function Lf(e,t){if(e==="change")return t}var Eu=!1;if(Xe){var eo;if(Xe){var to="oninput"in document;if(!to){var Mi=document.createElement("div");Mi.setAttribute("oninput","return;"),to=typeof Mi.oninput=="function"}eo=to}else eo=!1;Eu=eo&&(!document.documentMode||9<document.documentMode)}function Oi(){$r&&($r.detachEvent("onpropertychange",Cu),tn=$r=null)}function Cu(e){if(e.propertyName==="value"&&Ts(tn)){var t=[];ju(t,tn,e,Cl(e)),su(If,t)}}function Mf(e,t,r){e==="focusin"?(Oi(),$r=t,tn=r,$r.attachEvent("onpropertychange",Cu)):e==="focusout"&&Oi()}function Of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(tn)}function zf(e,t){if(e==="click")return Ts(t)}function Df(e,t){if(e==="input"||e==="change")return Ts(t)}function qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:qf;function rn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!xo.call(t,s)||!Ae(e[s],t[s]))return!1}return!0}function zi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Di(e,t){var r=zi(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zi(r)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pu(){for(var e=window,t=Xn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Xn(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uf(e){var t=Pu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Nu(r.ownerDocument.documentElement,r)){if(n!==null&&Ol(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(n.start,s);n=n.end===void 0?o:Math.min(n.end,s),!e.extend&&o>n&&(s=n,n=o,o=s),s=Di(r,o);var l=Di(r,n);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Af=Xe&&"documentMode"in document&&11>=document.documentMode,Yt=null,Uo=null,br=null,Ao=!1;function qi(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ao||Yt==null||Yt!==Xn(n)||(n=Yt,"selectionStart"in n&&Ol(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),br&&rn(br,n)||(br=n,n=os(Uo,"onSelect"),0<n.length&&(t=new Il("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Yt)))}function In(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Xt={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionend:In("Transition","TransitionEnd")},ro={},Tu={};Xe&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Rs(e){if(ro[e])return ro[e];if(!Xt[e])return e;var t=Xt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Tu)return ro[e]=t[r];return e}var Ru=Rs("animationend"),_u=Rs("animationiteration"),Iu=Rs("animationstart"),Lu=Rs("transitionend"),Mu=new Map,Ui="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Mu.set(e,t),bt(t,[e])}for(var no=0;no<Ui.length;no++){var so=Ui[no],Ff=so.toLowerCase(),Bf=so[0].toUpperCase()+so.slice(1);jt(Ff,"on"+Bf)}jt(Ru,"onAnimationEnd");jt(_u,"onAnimationIteration");jt(Iu,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Lu,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Ai(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ad(n,t,void 0,e),e.currentTarget=null}function Ou(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var i=n[l],a=i.instance,d=i.currentTarget;if(i=i.listener,a!==o&&s.isPropagationStopped())break e;Ai(s,i,d),o=a}else for(l=0;l<n.length;l++){if(i=n[l],a=i.instance,d=i.currentTarget,i=i.listener,a!==o&&s.isPropagationStopped())break e;Ai(s,i,d),o=a}}}if(es)throw e=Oo,es=!1,Oo=null,e}function A(e,t){var r=t[Vo];r===void 0&&(r=t[Vo]=new Set);var n=e+"__bubble";r.has(n)||(zu(t,e,2,!1),r.add(n))}function oo(e,t,r){var n=0;t&&(n|=4),zu(r,e,n,t)}var Ln="_reactListening"+Math.random().toString(36).slice(2);function nn(e){if(!e[Ln]){e[Ln]=!0,$a.forEach(function(r){r!=="selectionchange"&&($f.has(r)||oo(r,!1,e),oo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ln]||(t[Ln]=!0,oo("selectionchange",!1,t))}}function zu(e,t,r,n){switch(yu(t)){case 1:var s=tf;break;case 4:s=rf;break;default:s=Rl}r=s.bind(null,t,r,e),s=void 0,!Mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function lo(e,t,r,n,s){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var i=n.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=n.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;l=l.return}for(;i!==null;){if(l=Mt(i),l===null)return;if(a=l.tag,a===5||a===6){n=o=l;continue e}i=i.parentNode}}n=n.return}su(function(){var d=o,h=Cl(r),m=[];e:{var g=Mu.get(e);if(g!==void 0){var w=Il,k=e;switch(e){case"keypress":if(Vn(r)===0)break e;case"keydown":case"keyup":w=yf;break;case"focusin":k="focus",w=Zs;break;case"focusout":k="blur",w=Zs;break;case"beforeblur":case"afterblur":w=Zs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Pi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=kf;break;case Ru:case _u:case Iu:w=uf;break;case Lu:w=jf;break;case"scroll":w=nf;break;case"wheel":w=Cf;break;case"copy":case"cut":case"paste":w=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ri}var v=(t&4)!==0,C=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var c=d,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Yr(c,p),x!=null&&v.push(sn(c,x,f)))),C)break;c=c.return}0<v.length&&(g=new w(g,k,null,r,h),m.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&r!==Io&&(k=r.relatedTarget||r.fromElement)&&(Mt(k)||k[Ze]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(k=r.relatedTarget||r.toElement,w=d,k=k?Mt(k):null,k!==null&&(C=Vt(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(v=Pi,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ri,x="onPointerLeave",p="onPointerEnter",c="pointer"),C=w==null?g:Zt(w),f=k==null?g:Zt(k),g=new v(x,c+"leave",w,r,h),g.target=C,g.relatedTarget=f,x=null,Mt(h)===d&&(v=new v(p,c+"enter",k,r,h),v.target=f,v.relatedTarget=C,x=v),C=x,w&&k)t:{for(v=w,p=k,c=0,f=v;f;f=Wt(f))c++;for(f=0,x=p;x;x=Wt(x))f++;for(;0<c-f;)v=Wt(v),c--;for(;0<f-c;)p=Wt(p),f--;for(;c--;){if(v===p||p!==null&&v===p.alternate)break t;v=Wt(v),p=Wt(p)}v=null}else v=null;w!==null&&Fi(m,g,w,v,!1),k!==null&&C!==null&&Fi(m,C,k,v,!0)}}e:{if(g=d?Zt(d):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var y=Lf;else if(Li(g))if(Eu)y=Df;else{y=Of;var S=Mf}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(y=zf);if(y&&(y=y(e,d))){ju(m,y,r,h);break e}S&&S(e,g,d),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&No(g,"number",g.value)}switch(S=d?Zt(d):window,e){case"focusin":(Li(S)||S.contentEditable==="true")&&(Yt=S,Uo=d,br=null);break;case"focusout":br=Uo=Yt=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,qi(m,r,h);break;case"selectionchange":if(Af)break;case"keydown":case"keyup":qi(m,r,h)}var j;if(Ml)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Kt?ku(e,r)&&(E="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(wu&&r.locale!=="ko"&&(Kt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Kt&&(j=xu()):(ut=h,_l="value"in ut?ut.value:ut.textContent,Kt=!0)),S=os(d,E),0<S.length&&(E=new Ti(E,e,null,r,h),m.push({event:E,listeners:S}),j?E.data=j:(j=Su(r),j!==null&&(E.data=j)))),(j=Pf?Tf(e,r):Rf(e,r))&&(d=os(d,"onBeforeInput"),0<d.length&&(h=new Ti("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:d}),h.data=j))}Ou(m,t)})}function sn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function os(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Yr(e,r),o!=null&&n.unshift(sn(e,o,s)),o=Yr(e,t),o!=null&&n.push(sn(e,o,s))),e=e.return}return n}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fi(e,t,r,n,s){for(var o=t._reactName,l=[];r!==null&&r!==n;){var i=r,a=i.alternate,d=i.stateNode;if(a!==null&&a===n)break;i.tag===5&&d!==null&&(i=d,s?(a=Yr(r,o),a!=null&&l.unshift(sn(r,a,i))):s||(a=Yr(r,o),a!=null&&l.push(sn(r,a,i)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var bf=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function Bi(e){return(typeof e=="string"?e:""+e).replace(bf,`
`).replace(Vf,"")}function Mn(e,t,r){if(t=Bi(t),Bi(e)!==t&&r)throw Error(N(425))}function ls(){}var Fo=null,Bo=null;function $o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,$i=typeof Promise=="function"?Promise:void 0,Wf=typeof queueMicrotask=="function"?queueMicrotask:typeof $i<"u"?function(e){return $i.resolve(null).then(e).catch(Gf)}:bo;function Gf(e){setTimeout(function(){throw e})}function io(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),en(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);en(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),be="__reactFiber$"+jr,on="__reactProps$"+jr,Ze="__reactContainer$"+jr,Vo="__reactEvents$"+jr,Qf="__reactListeners$"+jr,Jf="__reactHandles$"+jr;function Mt(e){var t=e[be];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ze]||r[be]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=bi(e);e!==null;){if(r=e[be])return r;e=bi(e)}return t}e=r,r=e.parentNode}return null}function yn(e){return e=e[be]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function _s(e){return e[on]||null}var Ho=[],er=-1;function Et(e){return{current:e}}function F(e){0>er||(e.current=Ho[er],Ho[er]=null,er--)}function U(e,t){er++,Ho[er]=e.current,e.current=t}var St={},ue=Et(St),ge=Et(!1),Ut=St;function mr(e,t){var r=e.type.contextTypes;if(!r)return St;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ve(e){return e=e.childContextTypes,e!=null}function is(){F(ge),F(ue)}function Vi(e,t,r){if(ue.current!==St)throw Error(N(168));U(ue,t),U(ge,r)}function Du(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(N(108,Ld(e)||"Unknown",s));return V({},r,n)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Ut=ue.current,U(ue,e),U(ge,ge.current),!0}function Hi(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=Du(e,t,Ut),n.__reactInternalMemoizedMergedChildContext=e,F(ge),F(ue),U(ue,e)):F(ge),U(ge,r)}var Qe=null,Is=!1,ao=!1;function qu(e){Qe===null?Qe=[e]:Qe.push(e)}function Kf(e){Is=!0,qu(e)}function Ct(){if(!ao&&Qe!==null){ao=!0;var e=0,t=q;try{var r=Qe;for(q=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Qe=null,Is=!1}catch(s){throw Qe!==null&&(Qe=Qe.slice(e+1)),au(Nl,Ct),s}finally{q=t,ao=!1}}return null}var tr=[],rr=0,us=null,cs=0,Ce=[],Ne=0,At=null,Je=1,Ke="";function It(e,t){tr[rr++]=cs,tr[rr++]=us,us=e,cs=t}function Uu(e,t,r){Ce[Ne++]=Je,Ce[Ne++]=Ke,Ce[Ne++]=At,At=e;var n=Je;e=Ke;var s=32-qe(n)-1;n&=~(1<<s),r+=1;var o=32-qe(t)+s;if(30<o){var l=s-s%5;o=(n&(1<<l)-1).toString(32),n>>=l,s-=l,Je=1<<32-qe(t)+s|r<<s|n,Ke=o+e}else Je=1<<o|r<<s|n,Ke=e}function zl(e){e.return!==null&&(It(e,1),Uu(e,1,0))}function Dl(e){for(;e===us;)us=tr[--rr],tr[rr]=null,cs=tr[--rr],tr[rr]=null;for(;e===At;)At=Ce[--Ne],Ce[Ne]=null,Ke=Ce[--Ne],Ce[Ne]=null,Je=Ce[--Ne],Ce[Ne]=null}var ke=null,we=null,B=!1,Oe=null;function Au(e,t){var r=Pe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Wi(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=At!==null?{id:Je,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Pe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ke=e,we=null,!0):!1;default:return!1}}function Wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Go(e){if(B){var t=we;if(t){var r=t;if(!Wi(e,t)){if(Wo(e))throw Error(N(418));t=ht(r.nextSibling);var n=ke;t&&Wi(e,t)?Au(n,r):(e.flags=e.flags&-4097|2,B=!1,ke=e)}}else{if(Wo(e))throw Error(N(418));e.flags=e.flags&-4097|2,B=!1,ke=e}}}function Gi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function On(e){if(e!==ke)return!1;if(!B)return Gi(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$o(e.type,e.memoizedProps)),t&&(t=we)){if(Wo(e))throw Fu(),Error(N(418));for(;t;)Au(e,t),t=ht(t.nextSibling)}if(Gi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){we=ht(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?ht(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=we;e;)e=ht(e.nextSibling)}function hr(){we=ke=null,B=!1}function ql(e){Oe===null?Oe=[e]:Oe.push(e)}var Yf=rt.ReactCurrentBatchConfig;function Ir(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var s=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var i=s.refs;l===null?delete i[o]:i[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function zn(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qi(e){var t=e._init;return t(e._payload)}function Bu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function r(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function n(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function s(p,c){return p=xt(p,c),p.index=0,p.sibling=null,p}function o(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function i(p,c,f,x){return c===null||c.tag!==6?(c=go(f,p.mode,x),c.return=p,c):(c=s(c,f),c.return=p,c)}function a(p,c,f,x){var y=f.type;return y===Jt?h(p,c,f.props.children,x,f.key):c!==null&&(c.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ot&&Qi(y)===c.type)?(x=s(c,f.props),x.ref=Ir(p,c,f),x.return=p,x):(x=Yn(f.type,f.key,f.props,null,p.mode,x),x.ref=Ir(p,c,f),x.return=p,x)}function d(p,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=vo(f,p.mode,x),c.return=p,c):(c=s(c,f.children||[]),c.return=p,c)}function h(p,c,f,x,y){return c===null||c.tag!==7?(c=qt(f,p.mode,x,y),c.return=p,c):(c=s(c,f),c.return=p,c)}function m(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=go(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case En:return f=Yn(c.type,c.key,c.props,null,p.mode,f),f.ref=Ir(p,null,c),f.return=p,f;case Qt:return c=vo(c,p.mode,f),c.return=p,c;case ot:var x=c._init;return m(p,x(c._payload),f)}if(zr(c)||Nr(c))return c=qt(c,p.mode,f,null),c.return=p,c;zn(p,c)}return null}function g(p,c,f,x){var y=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return y!==null?null:i(p,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case En:return f.key===y?a(p,c,f,x):null;case Qt:return f.key===y?d(p,c,f,x):null;case ot:return y=f._init,g(p,c,y(f._payload),x)}if(zr(f)||Nr(f))return y!==null?null:h(p,c,f,x,null);zn(p,f)}return null}function w(p,c,f,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,i(c,p,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case En:return p=p.get(x.key===null?f:x.key)||null,a(c,p,x,y);case Qt:return p=p.get(x.key===null?f:x.key)||null,d(c,p,x,y);case ot:var S=x._init;return w(p,c,f,S(x._payload),y)}if(zr(x)||Nr(x))return p=p.get(f)||null,h(c,p,x,y,null);zn(c,x)}return null}function k(p,c,f,x){for(var y=null,S=null,j=c,E=c=0,I=null;j!==null&&E<f.length;E++){j.index>E?(I=j,j=null):I=j.sibling;var T=g(p,j,f[E],x);if(T===null){j===null&&(j=I);break}e&&j&&T.alternate===null&&t(p,j),c=o(T,c,E),S===null?y=T:S.sibling=T,S=T,j=I}if(E===f.length)return r(p,j),B&&It(p,E),y;if(j===null){for(;E<f.length;E++)j=m(p,f[E],x),j!==null&&(c=o(j,c,E),S===null?y=j:S.sibling=j,S=j);return B&&It(p,E),y}for(j=n(p,j);E<f.length;E++)I=w(j,p,E,f[E],x),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?E:I.key),c=o(I,c,E),S===null?y=I:S.sibling=I,S=I);return e&&j.forEach(function(z){return t(p,z)}),B&&It(p,E),y}function v(p,c,f,x){var y=Nr(f);if(typeof y!="function")throw Error(N(150));if(f=y.call(f),f==null)throw Error(N(151));for(var S=y=null,j=c,E=c=0,I=null,T=f.next();j!==null&&!T.done;E++,T=f.next()){j.index>E?(I=j,j=null):I=j.sibling;var z=g(p,j,T.value,x);if(z===null){j===null&&(j=I);break}e&&j&&z.alternate===null&&t(p,j),c=o(z,c,E),S===null?y=z:S.sibling=z,S=z,j=I}if(T.done)return r(p,j),B&&It(p,E),y;if(j===null){for(;!T.done;E++,T=f.next())T=m(p,T.value,x),T!==null&&(c=o(T,c,E),S===null?y=T:S.sibling=T,S=T);return B&&It(p,E),y}for(j=n(p,j);!T.done;E++,T=f.next())T=w(j,p,E,T.value,x),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?E:T.key),c=o(T,c,E),S===null?y=T:S.sibling=T,S=T);return e&&j.forEach(function(X){return t(p,X)}),B&&It(p,E),y}function C(p,c,f,x){if(typeof f=="object"&&f!==null&&f.type===Jt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case En:e:{for(var y=f.key,S=c;S!==null;){if(S.key===y){if(y=f.type,y===Jt){if(S.tag===7){r(p,S.sibling),c=s(S,f.props.children),c.return=p,p=c;break e}}else if(S.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ot&&Qi(y)===S.type){r(p,S.sibling),c=s(S,f.props),c.ref=Ir(p,S,f),c.return=p,p=c;break e}r(p,S);break}else t(p,S);S=S.sibling}f.type===Jt?(c=qt(f.props.children,p.mode,x,f.key),c.return=p,p=c):(x=Yn(f.type,f.key,f.props,null,p.mode,x),x.ref=Ir(p,c,f),x.return=p,p=x)}return l(p);case Qt:e:{for(S=f.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){r(p,c.sibling),c=s(c,f.children||[]),c.return=p,p=c;break e}else{r(p,c);break}else t(p,c);c=c.sibling}c=vo(f,p.mode,x),c.return=p,p=c}return l(p);case ot:return S=f._init,C(p,c,S(f._payload),x)}if(zr(f))return k(p,c,f,x);if(Nr(f))return v(p,c,f,x);zn(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(r(p,c.sibling),c=s(c,f),c.return=p,p=c):(r(p,c),c=go(f,p.mode,x),c.return=p,p=c),l(p)):r(p,c)}return C}var gr=Bu(!0),$u=Bu(!1),ds=Et(null),fs=null,nr=null,Ul=null;function Al(){Ul=nr=fs=null}function Fl(e){var t=ds.current;F(ds),e._currentValue=t}function Qo(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function cr(e,t){fs=e,Ul=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(fs===null)throw Error(N(308));nr=e,fs.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Ot=null;function Bl(e){Ot===null?Ot=[e]:Ot.push(e)}function bu(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,Bl(t)):(r.next=s.next,s.next=r),t.interleaved=r,et(e,n)}function et(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var lt=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,D&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,et(e,r)}return s=n.interleaved,s===null?(t.next=t,Bl(n)):(t.next=s.next,s.next=t),n.interleaved=t,et(e,r)}function Hn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pl(e,r)}}function Ji(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ps(e,t,r,n){var s=e.updateQueue;lt=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var a=i,d=a.next;a.next=null,l===null?o=d:l.next=d,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==l&&(i===null?h.firstBaseUpdate=d:i.next=d,h.lastBaseUpdate=a))}if(o!==null){var m=s.baseState;l=0,h=d=a=null,i=o;do{var g=i.lane,w=i.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var k=e,v=i;switch(g=t,w=r,v.tag){case 1:if(k=v.payload,typeof k=="function"){m=k.call(w,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,g=typeof k=="function"?k.call(w,m,g):k,g==null)break e;m=V({},m,g);break e;case 2:lt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[i]:g.push(i))}else w={eventTime:w,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(d=h=w,a=m):h=h.next=w,l|=g;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;g=i,i=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(h===null&&(a=m),s.baseState=a,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Bt|=l,e.lanes=l,e.memoizedState=m}}function Ki(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(N(191,s));s.call(n)}}}var xn={},He=Et(xn),ln=Et(xn),an=Et(xn);function zt(e){if(e===xn)throw Error(N(174));return e}function bl(e,t){switch(U(an,t),U(ln,e),U(He,xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:To(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=To(t,e)}F(He),U(He,t)}function vr(){F(He),F(ln),F(an)}function Hu(e){zt(an.current);var t=zt(He.current),r=To(t,e.type);t!==r&&(U(ln,e),U(He,r))}function Vl(e){ln.current===e&&(F(He),F(ln))}var $=Et(0);function ms(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=[];function Hl(){for(var e=0;e<uo.length;e++)uo[e]._workInProgressVersionPrimary=null;uo.length=0}var Wn=rt.ReactCurrentDispatcher,co=rt.ReactCurrentBatchConfig,Ft=0,b=null,K=null,ee=null,hs=!1,Vr=!1,un=0,Xf=0;function le(){throw Error(N(321))}function Wl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ae(e[r],t[r]))return!1;return!0}function Gl(e,t,r,n,s,o){if(Ft=o,b=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wn.current=e===null||e.memoizedState===null?rp:np,e=r(n,s),Vr){o=0;do{if(Vr=!1,un=0,25<=o)throw Error(N(301));o+=1,ee=K=null,t.updateQueue=null,Wn.current=sp,e=r(n,s)}while(Vr)}if(Wn.current=gs,t=K!==null&&K.next!==null,Ft=0,ee=K=b=null,hs=!1,t)throw Error(N(300));return e}function Ql(){var e=un!==0;return un=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?b.memoizedState=ee=e:ee=ee.next=e,ee}function _e(){if(K===null){var e=b.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?b.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(N(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?b.memoizedState=ee=e:ee=ee.next=e}return ee}function cn(e,t){return typeof t=="function"?t(e):t}function fo(e){var t=_e(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=K,s=n.baseQueue,o=r.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}n.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,n=n.baseState;var i=l=null,a=null,d=o;do{var h=d.lane;if((Ft&h)===h)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(i=a=m,l=n):a=a.next=m,b.lanes|=h,Bt|=h}d=d.next}while(d!==null&&d!==o);a===null?l=n:a.next=i,Ae(n,t.memoizedState)||(he=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=a,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do o=s.lane,b.lanes|=o,Bt|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function po(e){var t=_e(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);Ae(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Wu(){}function Gu(e,t){var r=b,n=_e(),s=t(),o=!Ae(n.memoizedState,s);if(o&&(n.memoizedState=s,he=!0),n=n.queue,Jl(Ku.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(r.flags|=2048,dn(9,Ju.bind(null,r,n,s,t),void 0,null),te===null)throw Error(N(349));Ft&30||Qu(r,t,s)}return s}function Qu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ju(e,t,r,n){t.value=r,t.getSnapshot=n,Yu(t)&&Xu(e)}function Ku(e,t,r){return r(function(){Yu(t)&&Xu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ae(e,r)}catch{return!0}}function Xu(e){var t=et(e,1);t!==null&&Ue(t,e,1,-1)}function Yi(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},t.queue=e,e=e.dispatch=tp.bind(null,b,e),[t.memoizedState,e]}function dn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=b.updateQueue,t===null?(t={lastEffect:null,stores:null},b.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Zu(){return _e().memoizedState}function Gn(e,t,r,n){var s=$e();b.flags|=e,s.memoizedState=dn(1|t,r,void 0,n===void 0?null:n)}function Ls(e,t,r,n){var s=_e();n=n===void 0?null:n;var o=void 0;if(K!==null){var l=K.memoizedState;if(o=l.destroy,n!==null&&Wl(n,l.deps)){s.memoizedState=dn(t,r,o,n);return}}b.flags|=e,s.memoizedState=dn(1|t,r,o,n)}function Xi(e,t){return Gn(8390656,8,e,t)}function Jl(e,t){return Ls(2048,8,e,t)}function ec(e,t){return Ls(4,2,e,t)}function tc(e,t){return Ls(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nc(e,t,r){return r=r!=null?r.concat([e]):null,Ls(4,4,rc.bind(null,t,e),r)}function Kl(){}function sc(e,t){var r=_e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Wl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function oc(e,t){var r=_e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Wl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function lc(e,t,r){return Ft&21?(Ae(r,t)||(r=du(),b.lanes|=r,Bt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=r)}function Zf(e,t){var r=q;q=r!==0&&4>r?r:4,e(!0);var n=co.transition;co.transition={};try{e(!1),t()}finally{q=r,co.transition=n}}function ic(){return _e().memoizedState}function ep(e,t,r){var n=yt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ac(e))uc(t,r);else if(r=bu(e,t,r,n),r!==null){var s=de();Ue(r,e,n,s),cc(r,t,n)}}function tp(e,t,r){var n=yt(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ac(e))uc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,i=o(l,r);if(s.hasEagerState=!0,s.eagerState=i,Ae(i,l)){var a=t.interleaved;a===null?(s.next=s,Bl(t)):(s.next=a.next,a.next=s),t.interleaved=s;return}}catch{}finally{}r=bu(e,t,s,n),r!==null&&(s=de(),Ue(r,e,n,s),cc(r,t,n))}}function ac(e){var t=e.alternate;return e===b||t!==null&&t===b}function uc(e,t){Vr=hs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function cc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pl(e,r)}}var gs={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},rp={readContext:Re,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Xi,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Gn(4194308,4,rc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Gn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gn(4,2,e,t)},useMemo:function(e,t){var r=$e();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=$e();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ep.bind(null,b,e),[n.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:Yi,useDebugValue:Kl,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=Yi(!1),t=e[0];return e=Zf.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=b,s=$e();if(B){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),te===null)throw Error(N(349));Ft&30||Qu(n,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,Xi(Ku.bind(null,n,o,e),[e]),n.flags|=2048,dn(9,Ju.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=$e(),t=te.identifierPrefix;if(B){var r=Ke,n=Je;r=(n&~(1<<32-qe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=un++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Xf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},np={readContext:Re,useCallback:sc,useContext:Re,useEffect:Jl,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:oc,useReducer:fo,useRef:Zu,useState:function(){return fo(cn)},useDebugValue:Kl,useDeferredValue:function(e){var t=_e();return lc(t,K.memoizedState,e)},useTransition:function(){var e=fo(cn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Gu,useId:ic,unstable_isNewReconciler:!1},sp={readContext:Re,useCallback:sc,useContext:Re,useEffect:Jl,useImperativeHandle:nc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:oc,useReducer:po,useRef:Zu,useState:function(){return po(cn)},useDebugValue:Kl,useDeferredValue:function(e){var t=_e();return K===null?t.memoizedState=e:lc(t,K.memoizedState,e)},useTransition:function(){var e=po(cn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Gu,useId:ic,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Jo(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:V({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ms={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=de(),s=yt(e),o=Ye(n,s);o.payload=t,r!=null&&(o.callback=r),t=gt(e,o,s),t!==null&&(Ue(t,e,s,n),Hn(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=de(),s=yt(e),o=Ye(n,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=gt(e,o,s),t!==null&&(Ue(t,e,s,n),Hn(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=de(),n=yt(e),s=Ye(r,n);s.tag=2,t!=null&&(s.callback=t),t=gt(e,s,n),t!==null&&(Ue(t,e,n,r),Hn(t,e,n))}};function Zi(e,t,r,n,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!rn(r,n)||!rn(s,o):!0}function dc(e,t,r){var n=!1,s=St,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(s=ve(t)?Ut:ue.current,n=t.contextTypes,o=(n=n!=null)?mr(e,s):St),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ms,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function ea(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function Ko(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},$l(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Re(o):(o=ve(t)?Ut:ue.current,s.context=mr(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jo(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ms.enqueueReplaceState(s,s.state,null),ps(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t){try{var r="",n=t;do r+=Id(n),n=n.return;while(n);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function mo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Yo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var op=typeof WeakMap=="function"?WeakMap:Map;function fc(e,t,r){r=Ye(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ys||(ys=!0,il=n),Yo(e,t)},r}function pc(e,t,r){r=Ye(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){Yo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Yo(e,t),typeof n!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function ta(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new op;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=xp.bind(null,e,t,r),t.then(e,e))}function ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function na(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ye(-1,1),t.tag=2,gt(r,t,1))),r.lanes|=1),e)}var lp=rt.ReactCurrentOwner,he=!1;function ce(e,t,r,n){t.child=e===null?$u(t,null,r,n):gr(t,e.child,r,n)}function sa(e,t,r,n,s){r=r.render;var o=t.ref;return cr(t,s),n=Gl(e,t,r,n,o,s),r=Ql(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(B&&r&&zl(t),t.flags|=1,ce(e,t,n,s),t.child)}function oa(e,t,r,n,s){if(e===null){var o=r.type;return typeof o=="function"&&!si(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,mc(e,t,o,n,s)):(e=Yn(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:rn,r(l,n)&&e.ref===t.ref)return tt(e,t,s)}return t.flags|=1,e=xt(o,n),e.ref=t.ref,e.return=t,t.child=e}function mc(e,t,r,n,s){if(e!==null){var o=e.memoizedProps;if(rn(o,n)&&e.ref===t.ref)if(he=!1,t.pendingProps=n=o,(e.lanes&s)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,tt(e,t,s)}return Xo(e,t,r,n,s)}function hc(e,t,r){var n=t.pendingProps,s=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(or,xe),xe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(or,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,U(or,xe),xe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,U(or,xe),xe|=n;return ce(e,t,s,r),t.child}function gc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Xo(e,t,r,n,s){var o=ve(r)?Ut:ue.current;return o=mr(t,o),cr(t,s),r=Gl(e,t,r,n,o,s),n=Ql(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(B&&n&&zl(t),t.flags|=1,ce(e,t,r,s),t.child)}function la(e,t,r,n,s){if(ve(r)){var o=!0;as(t)}else o=!1;if(cr(t,s),t.stateNode===null)Qn(e,t),dc(t,r,n),Ko(t,r,n,s),n=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var a=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=ve(r)?Ut:ue.current,d=mr(t,d));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==n||a!==d)&&ea(t,l,n,d),lt=!1;var g=t.memoizedState;l.state=g,ps(t,n,l,s),a=t.memoizedState,i!==n||g!==a||ge.current||lt?(typeof h=="function"&&(Jo(t,r,h,n),a=t.memoizedState),(i=lt||Zi(t,r,i,n,g,a,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=a),l.props=n,l.state=a,l.context=d,n=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Vu(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:Le(t.type,i),l.props=d,m=t.pendingProps,g=l.context,a=r.contextType,typeof a=="object"&&a!==null?a=Re(a):(a=ve(r)?Ut:ue.current,a=mr(t,a));var w=r.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==m||g!==a)&&ea(t,l,n,a),lt=!1,g=t.memoizedState,l.state=g,ps(t,n,l,s);var k=t.memoizedState;i!==m||g!==k||ge.current||lt?(typeof w=="function"&&(Jo(t,r,w,n),k=t.memoizedState),(d=lt||Zi(t,r,d,n,g,k,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,k,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,k,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),l.props=n,l.state=k,l.context=a,n=d):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return Zo(e,t,r,n,o,s)}function Zo(e,t,r,n,s,o){gc(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return s&&Hi(t,r,!1),tt(e,t,o);n=t.stateNode,lp.current=t;var i=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=gr(t,e.child,null,o),t.child=gr(t,null,i,o)):ce(e,t,i,o),t.memoizedState=n.state,s&&Hi(t,r,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?Vi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vi(e,t.context,!1),bl(e,t.containerInfo)}function ia(e,t,r,n,s){return hr(),ql(s),t.flags|=256,ce(e,t,r,n),t.child}var el={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,r){var n=t.pendingProps,s=$.current,o=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),U($,s&1),e===null)return Go(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ds(l,n,0,null),e=qt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=tl(r),t.memoizedState=el,e):Yl(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return ip(e,t,l,n,i,s,r);if(o){o=n.fallback,l=t.mode,s=e.child,i=s.sibling;var a={mode:"hidden",children:n.children};return!(l&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=a,t.deletions=null):(n=xt(s,a),n.subtreeFlags=s.subtreeFlags&14680064),i!==null?o=xt(i,o):(o=qt(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?tl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=el,n}return o=e.child,e=o.sibling,n=xt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Yl(e,t){return t=Ds({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dn(e,t,r,n){return n!==null&&ql(n),gr(t,e.child,null,r),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ip(e,t,r,n,s,o,l){if(r)return t.flags&256?(t.flags&=-257,n=mo(Error(N(422))),Dn(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,s=t.mode,n=Ds({mode:"visible",children:n.children},s,0,null),o=qt(o,s,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&gr(t,e.child,null,l),t.child.memoizedState=tl(l),t.memoizedState=el,o);if(!(t.mode&1))return Dn(e,t,l,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var i=n.dgst;return n=i,o=Error(N(419)),n=mo(o,n,void 0),Dn(e,t,l,n)}if(i=(l&e.childLanes)!==0,he||i){if(n=te,n!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,et(e,s),Ue(n,e,s,-1))}return ni(),n=mo(Error(N(421))),Dn(e,t,l,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=wp.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,we=ht(s.nextSibling),ke=t,B=!0,Oe=null,e!==null&&(Ce[Ne++]=Je,Ce[Ne++]=Ke,Ce[Ne++]=At,Je=e.id,Ke=e.overflow,At=t),t=Yl(t,n.children),t.flags|=4096,t)}function aa(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Qo(e.return,t,r)}function ho(e,t,r,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=s)}function xc(e,t,r){var n=t.pendingProps,s=n.revealOrder,o=n.tail;if(ce(e,t,n.children,r),n=$.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&aa(e,r,t);else if(e.tag===19)aa(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(U($,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&ms(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),ho(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ms(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}ho(t,!0,r,null,o);break;case"together":ho(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=xt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=xt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function ap(e,t,r){switch(t.tag){case 3:vc(t),hr();break;case 5:Hu(t);break;case 1:ve(t.type)&&as(t);break;case 4:bl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;U(ds,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(U($,$.current&1),t.flags|=128,null):r&t.child.childLanes?yc(e,t,r):(U($,$.current&1),e=tt(e,t,r),e!==null?e.sibling:null);U($,$.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return xc(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),U($,$.current),n)break;return null;case 22:case 23:return t.lanes=0,hc(e,t,r)}return tt(e,t,r)}var wc,rl,kc,Sc;wc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};rl=function(){};kc=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,zt(He.current);var o=null;switch(r){case"input":s=Eo(e,s),n=Eo(e,n),o=[];break;case"select":s=V({},s,{value:void 0}),n=V({},n,{value:void 0}),o=[];break;case"textarea":s=Po(e,s),n=Po(e,n),o=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ls)}Ro(r,n);var l;r=null;for(d in s)if(!n.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var i=s[d];for(l in i)i.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var a=n[d];if(i=s!=null?s[d]:void 0,n.hasOwnProperty(d)&&a!==i&&(a!=null||i!=null))if(d==="style")if(i){for(l in i)!i.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in a)a.hasOwnProperty(l)&&i[l]!==a[l]&&(r||(r={}),r[l]=a[l])}else r||(o||(o=[]),o.push(d,r)),r=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,i=i?i.__html:void 0,a!=null&&i!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&A("scroll",e),o||i===a||(o=[])):(o=o||[]).push(d,a))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Sc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Lr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function up(e,t,r){var n=t.pendingProps;switch(Dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ve(t.type)&&is(),ie(t),null;case 3:return n=t.stateNode,vr(),F(ge),F(ue),Hl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(On(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(cl(Oe),Oe=null))),rl(e,t),ie(t),null;case 5:Vl(t);var s=zt(an.current);if(r=t.type,e!==null&&t.stateNode!=null)kc(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return ie(t),null}if(e=zt(He.current),On(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[be]=t,n[on]=o,e=(t.mode&1)!==0,r){case"dialog":A("cancel",n),A("close",n);break;case"iframe":case"object":case"embed":A("load",n);break;case"video":case"audio":for(s=0;s<qr.length;s++)A(qr[s],n);break;case"source":A("error",n);break;case"img":case"image":case"link":A("error",n),A("load",n);break;case"details":A("toggle",n);break;case"input":vi(n,o),A("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},A("invalid",n);break;case"textarea":xi(n,o),A("invalid",n)}Ro(r,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?n.textContent!==i&&(o.suppressHydrationWarning!==!0&&Mn(n.textContent,i,e),s=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Mn(n.textContent,i,e),s=["children",""+i]):Jr.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&A("scroll",n)}switch(r){case"input":Cn(n),yi(n,o,!0);break;case"textarea":Cn(n),wi(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=ls)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ka(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[be]=t,e[on]=n,wc(e,t,!1,!1),t.stateNode=e;e:{switch(l=_o(r,n),r){case"dialog":A("cancel",e),A("close",e),s=n;break;case"iframe":case"object":case"embed":A("load",e),s=n;break;case"video":case"audio":for(s=0;s<qr.length;s++)A(qr[s],e);s=n;break;case"source":A("error",e),s=n;break;case"img":case"image":case"link":A("error",e),A("load",e),s=n;break;case"details":A("toggle",e),s=n;break;case"input":vi(e,n),s=Eo(e,n),A("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=V({},n,{value:void 0}),A("invalid",e);break;case"textarea":xi(e,n),s=Po(e,n),A("invalid",e);break;default:s=n}Ro(r,s),i=s;for(o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="style"?Za(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ya(e,a)):o==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Kr(e,a):typeof a=="number"&&Kr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&A("scroll",e):a!=null&&kl(e,o,a,l))}switch(r){case"input":Cn(e),yi(e,n,!1);break;case"textarea":Cn(e),wi(e);break;case"option":n.value!=null&&e.setAttribute("value",""+kt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?lr(e,!!n.multiple,o,!1):n.defaultValue!=null&&lr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ls)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Sc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=zt(an.current),zt(He.current),On(t)){if(n=t.stateNode,r=t.memoizedProps,n[be]=t,(o=n.nodeValue!==r)&&(e=ke,e!==null))switch(e.tag){case 3:Mn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[be]=t,t.stateNode=n}return ie(t),null;case 13:if(F($),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&t.mode&1&&!(t.flags&128))Fu(),hr(),t.flags|=98560,o=!1;else if(o=On(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[be]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),o=!1}else Oe!==null&&(cl(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?Y===0&&(Y=3):ni())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return vr(),rl(e,t),e===null&&nn(t.stateNode.containerInfo),ie(t),null;case 10:return Fl(t.type._context),ie(t),null;case 17:return ve(t.type)&&is(),ie(t),null;case 19:if(F($),o=t.memoizedState,o===null)return ie(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)Lr(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ms(e),l!==null){for(t.flags|=128,Lr(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return U($,$.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>xr&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304)}else{if(!n)if(e=ms(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!B)return ie(t),null}else 2*Q()-o.renderingStartTime>xr&&r!==1073741824&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,r=$.current,U($,n?r&1|2:r&1),t):(ie(t),null);case 22:case 23:return ri(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?xe&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function cp(e,t){switch(Dl(t),t.tag){case 1:return ve(t.type)&&is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),F(ge),F(ue),Hl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vl(t),null;case 13:if(F($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F($),null;case 4:return vr(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return ri(),null;case 24:return null;default:return null}}var qn=!1,ae=!1,dp=typeof WeakSet=="function"?WeakSet:Set,R=null;function sr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){H(e,t,n)}else r.current=null}function nl(e,t,r){try{r()}catch(n){H(e,t,n)}}var ua=!1;function fp(e,t){if(Fo=ns,e=Pu(),Ol(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,i=-1,a=-1,d=0,h=0,m=e,g=null;t:for(;;){for(var w;m!==r||s!==0&&m.nodeType!==3||(i=l+s),m!==o||n!==0&&m.nodeType!==3||(a=l+n),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===r&&++d===s&&(i=l),g===o&&++h===n&&(a=l),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}r=i===-1||a===-1?null:{start:i,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bo={focusedElem:e,selectionRange:r},ns=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,C=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Le(t.type,v),C);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){H(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return k=ua,ua=!1,k}function Hr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&nl(t,r,o)}s=s.next}while(s!==n)}}function Os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function sl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function jc(e){var t=e.alternate;t!==null&&(e.alternate=null,jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[on],delete t[Vo],delete t[Qf],delete t[Jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function ca(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ol(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ls));else if(n!==4&&(e=e.child,e!==null))for(ol(e,t,r),e=e.sibling;e!==null;)ol(e,t,r),e=e.sibling}function ll(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ll(e,t,r),e=e.sibling;e!==null;)ll(e,t,r),e=e.sibling}var re=null,Me=!1;function st(e,t,r){for(r=r.child;r!==null;)Cc(e,t,r),r=r.sibling}function Cc(e,t,r){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ns,r)}catch{}switch(r.tag){case 5:ae||sr(r,t);case 6:var n=re,s=Me;re=null,st(e,t,r),re=n,Me=s,re!==null&&(Me?(e=re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(Me?(e=re,r=r.stateNode,e.nodeType===8?io(e.parentNode,r):e.nodeType===1&&io(e,r),en(e)):io(re,r.stateNode));break;case 4:n=re,s=Me,re=r.stateNode.containerInfo,Me=!0,st(e,t,r),re=n,Me=s;break;case 0:case 11:case 14:case 15:if(!ae&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&nl(r,t,l),s=s.next}while(s!==n)}st(e,t,r);break;case 1:if(!ae&&(sr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(i){H(r,t,i)}st(e,t,r);break;case 21:st(e,t,r);break;case 22:r.mode&1?(ae=(n=ae)||r.memoizedState!==null,st(e,t,r),ae=n):st(e,t,r);break;default:st(e,t,r)}}function da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new dp),t.forEach(function(n){var s=kp.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Ie(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var o=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:re=i.stateNode,Me=!1;break e;case 3:re=i.stateNode.containerInfo,Me=!0;break e;case 4:re=i.stateNode.containerInfo,Me=!0;break e}i=i.return}if(re===null)throw Error(N(160));Cc(o,l,s),re=null,Me=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(d){H(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Be(e),n&4){try{Hr(3,e,e.return),Os(3,e)}catch(v){H(e,e.return,v)}try{Hr(5,e,e.return)}catch(v){H(e,e.return,v)}}break;case 1:Ie(t,e),Be(e),n&512&&r!==null&&sr(r,r.return);break;case 5:if(Ie(t,e),Be(e),n&512&&r!==null&&sr(r,r.return),e.flags&32){var s=e.stateNode;try{Kr(s,"")}catch(v){H(e,e.return,v)}}if(n&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,i=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Qa(s,o),_o(i,l);var d=_o(i,o);for(l=0;l<a.length;l+=2){var h=a[l],m=a[l+1];h==="style"?Za(s,m):h==="dangerouslySetInnerHTML"?Ya(s,m):h==="children"?Kr(s,m):kl(s,h,m,d)}switch(i){case"input":Co(s,o);break;case"textarea":Ja(s,o);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?lr(s,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?lr(s,!!o.multiple,o.defaultValue,!0):lr(s,!!o.multiple,o.multiple?[]:"",!1))}s[on]=o}catch(v){H(e,e.return,v)}}break;case 6:if(Ie(t,e),Be(e),n&4){if(e.stateNode===null)throw Error(N(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(v){H(e,e.return,v)}}break;case 3:if(Ie(t,e),Be(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{en(t.containerInfo)}catch(v){H(e,e.return,v)}break;case 4:Ie(t,e),Be(e);break;case 13:Ie(t,e),Be(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(ei=Q())),n&4&&da(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ae=(d=ae)||h,Ie(t,e),ae=d):Ie(t,e),Be(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(m=R=h;R!==null;){switch(g=R,w=g.child,g.tag){case 0:case 11:case 14:case 15:Hr(4,g,g.return);break;case 1:sr(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){H(n,r,v)}}break;case 5:sr(g,g.return);break;case 22:if(g.memoizedState!==null){pa(m);continue}}w!==null?(w.return=g,R=w):pa(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{s=m.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,i.style.display=Xa("display",l))}catch(v){H(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(v){H(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(t,e),Be(e),n&4&&da(e);break;case 21:break;default:Ie(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ec(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Kr(s,""),n.flags&=-33);var o=ca(e);ll(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,i=ca(e);ol(e,i,l);break;default:throw Error(N(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,r){R=e,Pc(e)}function Pc(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var s=R,o=s.child;if(s.tag===22&&n){var l=s.memoizedState!==null||qn;if(!l){var i=s.alternate,a=i!==null&&i.memoizedState!==null||ae;i=qn;var d=ae;if(qn=l,(ae=a)&&!d)for(R=s;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?ma(s):a!==null?(a.return=l,R=a):ma(s);for(;o!==null;)R=o,Pc(o),o=o.sibling;R=s,qn=i,ae=d}fa(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,R=o):fa(e)}}function fa(e){for(;R!==null;){var t=R;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Os(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ae)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Le(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ki(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ki(t,l,r)}break;case 5:var i=t.stateNode;if(r===null&&t.flags&4){r=i;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&en(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ae||t.flags&512&&sl(t)}catch(g){H(t,t.return,g)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function pa(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function ma(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Os(4,t)}catch(a){H(t,r,a)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(a){H(t,s,a)}}var o=t.return;try{sl(t)}catch(a){H(t,o,a)}break;case 5:var l=t.return;try{sl(t)}catch(a){H(t,l,a)}}}catch(a){H(t,t.return,a)}if(t===e){R=null;break}var i=t.sibling;if(i!==null){i.return=t.return,R=i;break}R=t.return}}var mp=Math.ceil,vs=rt.ReactCurrentDispatcher,Xl=rt.ReactCurrentOwner,Te=rt.ReactCurrentBatchConfig,D=0,te=null,J=null,ne=0,xe=0,or=Et(0),Y=0,fn=null,Bt=0,zs=0,Zl=0,Wr=null,me=null,ei=0,xr=1/0,Ge=null,ys=!1,il=null,vt=null,Un=!1,ct=null,xs=0,Gr=0,al=null,Jn=-1,Kn=0;function de(){return D&6?Q():Jn!==-1?Jn:Jn=Q()}function yt(e){return e.mode&1?D&2&&ne!==0?ne&-ne:Yf.transition!==null?(Kn===0&&(Kn=du()),Kn):(e=q,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function Ue(e,t,r,n){if(50<Gr)throw Gr=0,al=null,Error(N(185));gn(e,r,n),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(zs|=r),Y===4&&at(e,ne)),ye(e,n),r===1&&D===0&&!(t.mode&1)&&(xr=Q()+500,Is&&Ct()))}function ye(e,t){var r=e.callbackNode;Kd(e,t);var n=rs(e,e===te?ne:0);if(n===0)r!==null&&ji(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ji(r),t===1)e.tag===0?Kf(ha.bind(null,e)):qu(ha.bind(null,e)),Wf(function(){!(D&6)&&Ct()}),r=null;else{switch(fu(n)){case 1:r=Nl;break;case 4:r=uu;break;case 16:r=ts;break;case 536870912:r=cu;break;default:r=ts}r=zc(r,Tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Tc(e,t){if(Jn=-1,Kn=0,D&6)throw Error(N(327));var r=e.callbackNode;if(dr()&&e.callbackNode!==r)return null;var n=rs(e,e===te?ne:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ws(e,n);else{t=n;var s=D;D|=2;var o=_c();(te!==e||ne!==t)&&(Ge=null,xr=Q()+500,Dt(e,t));do try{vp();break}catch(i){Rc(e,i)}while(!0);Al(),vs.current=o,D=s,J!==null?t=0:(te=null,ne=0,t=Y)}if(t!==0){if(t===2&&(s=zo(e),s!==0&&(n=s,t=ul(e,s))),t===1)throw r=fn,Dt(e,0),at(e,n),ye(e,Q()),r;if(t===6)at(e,n);else{if(s=e.current.alternate,!(n&30)&&!hp(s)&&(t=ws(e,n),t===2&&(o=zo(e),o!==0&&(n=o,t=ul(e,o))),t===1))throw r=fn,Dt(e,0),at(e,n),ye(e,Q()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Lt(e,me,Ge);break;case 3:if(at(e,n),(n&130023424)===n&&(t=ei+500-Q(),10<t)){if(rs(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){de(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=bo(Lt.bind(null,e,me,Ge),t);break}Lt(e,me,Ge);break;case 4:if(at(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var l=31-qe(n);o=1<<l,l=t[l],l>s&&(s=l),n&=~o}if(n=s,n=Q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*mp(n/1960))-n,10<n){e.timeoutHandle=bo(Lt.bind(null,e,me,Ge),n);break}Lt(e,me,Ge);break;case 5:Lt(e,me,Ge);break;default:throw Error(N(329))}}}return ye(e,Q()),e.callbackNode===r?Tc.bind(null,e):null}function ul(e,t){var r=Wr;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=ws(e,t),e!==2&&(t=me,me=r,t!==null&&cl(t)),e}function cl(e){me===null?me=e:me.push.apply(me,e)}function hp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],o=s.getSnapshot;s=s.value;try{if(!Ae(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Zl,t&=~zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-qe(t),n=1<<r;e[r]=-1,t&=~n}}function ha(e){if(D&6)throw Error(N(327));dr();var t=rs(e,0);if(!(t&1))return ye(e,Q()),null;var r=ws(e,t);if(e.tag!==0&&r===2){var n=zo(e);n!==0&&(t=n,r=ul(e,n))}if(r===1)throw r=fn,Dt(e,0),at(e,t),ye(e,Q()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,me,Ge),ye(e,Q()),null}function ti(e,t){var r=D;D|=1;try{return e(t)}finally{D=r,D===0&&(xr=Q()+500,Is&&Ct())}}function $t(e){ct!==null&&ct.tag===0&&!(D&6)&&dr();var t=D;D|=1;var r=Te.transition,n=q;try{if(Te.transition=null,q=1,e)return e()}finally{q=n,Te.transition=r,D=t,!(D&6)&&Ct()}}function ri(){xe=or.current,F(or)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Hf(r)),J!==null)for(r=J.return;r!==null;){var n=r;switch(Dl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&is();break;case 3:vr(),F(ge),F(ue),Hl();break;case 5:Vl(n);break;case 4:vr();break;case 13:F($);break;case 19:F($);break;case 10:Fl(n.type._context);break;case 22:case 23:ri()}r=r.return}if(te=e,J=e=xt(e.current,null),ne=xe=t,Y=0,fn=null,Zl=zs=Bt=0,me=Wr=null,Ot!==null){for(t=0;t<Ot.length;t++)if(r=Ot[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=s,n.next=l}r.pending=n}Ot=null}return e}function Rc(e,t){do{var r=J;try{if(Al(),Wn.current=gs,hs){for(var n=b.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}hs=!1}if(Ft=0,ee=K=b=null,Vr=!1,un=0,Xl.current=null,r===null||r.return===null){Y=1,fn=t,J=null;break}e:{var o=e,l=r.return,i=r,a=t;if(t=ne,i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,h=i,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=ra(l);if(w!==null){w.flags&=-257,na(w,l,i,o,t),w.mode&1&&ta(o,d,t),t=w,a=d;var k=t.updateQueue;if(k===null){var v=new Set;v.add(a),t.updateQueue=v}else k.add(a);break e}else{if(!(t&1)){ta(o,d,t),ni();break e}a=Error(N(426))}}else if(B&&i.mode&1){var C=ra(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),na(C,l,i,o,t),ql(yr(a,i));break e}}o=a=yr(a,i),Y!==4&&(Y=2),Wr===null?Wr=[o]:Wr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=fc(o,a,t);Ji(o,p);break e;case 1:i=a;var c=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(vt===null||!vt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=pc(o,i,t);Ji(o,x);break e}}o=o.return}while(o!==null)}Lc(r)}catch(y){t=y,J===r&&r!==null&&(J=r=r.return);continue}break}while(!0)}function _c(){var e=vs.current;return vs.current=gs,e===null?gs:e}function ni(){(Y===0||Y===3||Y===2)&&(Y=4),te===null||!(Bt&268435455)&&!(zs&268435455)||at(te,ne)}function ws(e,t){var r=D;D|=2;var n=_c();(te!==e||ne!==t)&&(Ge=null,Dt(e,t));do try{gp();break}catch(s){Rc(e,s)}while(!0);if(Al(),D=r,vs.current=n,J!==null)throw Error(N(261));return te=null,ne=0,Y}function gp(){for(;J!==null;)Ic(J)}function vp(){for(;J!==null&&!Bd();)Ic(J)}function Ic(e){var t=Oc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Lc(e):J=t,Xl.current=null}function Lc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=cp(r,t),r!==null){r.flags&=32767,J=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,J=null;return}}else if(r=up(r,t,xe),r!==null){J=r;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Y===0&&(Y=5)}function Lt(e,t,r){var n=q,s=Te.transition;try{Te.transition=null,q=1,yp(e,t,r,n)}finally{Te.transition=s,q=n}return null}function yp(e,t,r,n){do dr();while(ct!==null);if(D&6)throw Error(N(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Yd(e,o),e===te&&(J=te=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Un||(Un=!0,zc(ts,function(){return dr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Te.transition,Te.transition=null;var l=q;q=1;var i=D;D|=4,Xl.current=null,fp(e,r),Nc(r,e),Uf(Bo),ns=!!Fo,Bo=Fo=null,e.current=r,pp(r),$d(),D=i,q=l,Te.transition=o}else e.current=r;if(Un&&(Un=!1,ct=e,xs=s),o=e.pendingLanes,o===0&&(vt=null),Hd(r.stateNode),ye(e,Q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(ys)throw ys=!1,e=il,il=null,e;return xs&1&&e.tag!==0&&dr(),o=e.pendingLanes,o&1?e===al?Gr++:(Gr=0,al=e):Gr=0,Ct(),null}function dr(){if(ct!==null){var e=fu(xs),t=Te.transition,r=q;try{if(Te.transition=null,q=16>e?16:e,ct===null)var n=!1;else{if(e=ct,ct=null,xs=0,D&6)throw Error(N(331));var s=D;for(D|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var i=o.deletions;if(i!==null){for(var a=0;a<i.length;a++){var d=i[a];for(R=d;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Hr(8,h,o)}var m=h.child;if(m!==null)m.return=h,R=m;else for(;R!==null;){h=R;var g=h.sibling,w=h.return;if(jc(h),h===d){R=null;break}if(g!==null){g.return=w,R=g;break}R=w}}}var k=o.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,R=p;break e}R=o.return}}var c=e.current;for(R=c;R!==null;){l=R;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,R=f;else e:for(l=c;R!==null;){if(i=R,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Os(9,i)}}catch(y){H(i,i.return,y)}if(i===l){R=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,R=x;break e}R=i.return}}if(D=s,Ct(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ns,e)}catch{}n=!0}return n}finally{q=r,Te.transition=t}}return!1}function ga(e,t,r){t=yr(r,t),t=fc(e,t,1),e=gt(e,t,1),t=de(),e!==null&&(gn(e,1,t),ye(e,t))}function H(e,t,r){if(e.tag===3)ga(e,e,r);else for(;t!==null;){if(t.tag===3){ga(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vt===null||!vt.has(n))){e=yr(r,e),e=pc(t,e,1),t=gt(t,e,1),e=de(),t!==null&&(gn(t,1,e),ye(t,e));break}}t=t.return}}function xp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&r,te===e&&(ne&r)===r&&(Y===4||Y===3&&(ne&130023424)===ne&&500>Q()-ei?Dt(e,0):Zl|=r),ye(e,t)}function Mc(e,t){t===0&&(e.mode&1?(t=Tn,Tn<<=1,!(Tn&130023424)&&(Tn=4194304)):t=1);var r=de();e=et(e,t),e!==null&&(gn(e,t,r),ye(e,r))}function wp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Mc(e,r)}function kp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),Mc(e,r)}var Oc;Oc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return he=!1,ap(e,t,r);he=!!(e.flags&131072)}else he=!1,B&&t.flags&1048576&&Uu(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Qn(e,t),e=t.pendingProps;var s=mr(t,ue.current);cr(t,r),s=Gl(null,t,n,e,s,r);var o=Ql();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(n)?(o=!0,as(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,$l(t),s.updater=Ms,t.stateNode=s,s._reactInternals=t,Ko(t,n,e,r),t=Zo(null,t,n,!0,o,r)):(t.tag=0,B&&o&&zl(t),ce(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Qn(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=jp(n),e=Le(n,e),s){case 0:t=Xo(null,t,n,e,r);break e;case 1:t=la(null,t,n,e,r);break e;case 11:t=sa(null,t,n,e,r);break e;case 14:t=oa(null,t,n,Le(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),Xo(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),la(e,t,n,s,r);case 3:e:{if(vc(t),e===null)throw Error(N(387));n=t.pendingProps,o=t.memoizedState,s=o.element,Vu(e,t),ps(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=yr(Error(N(423)),t),t=ia(e,t,n,r,s);break e}else if(n!==s){s=yr(Error(N(424)),t),t=ia(e,t,n,r,s);break e}else for(we=ht(t.stateNode.containerInfo.firstChild),ke=t,B=!0,Oe=null,r=$u(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(hr(),n===s){t=tt(e,t,r);break e}ce(e,t,n,r)}t=t.child}return t;case 5:return Hu(t),e===null&&Go(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,$o(n,s)?l=null:o!==null&&$o(n,o)&&(t.flags|=32),gc(e,t),ce(e,t,l,r),t.child;case 6:return e===null&&Go(t),null;case 13:return yc(e,t,r);case 4:return bl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=gr(t,null,n,r):ce(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),sa(e,t,n,s,r);case 7:return ce(e,t,t.pendingProps,r),t.child;case 8:return ce(e,t,t.pendingProps.children,r),t.child;case 12:return ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,o=t.memoizedProps,l=s.value,U(ds,n._currentValue),n._currentValue=l,o!==null)if(Ae(o.value,l)){if(o.children===s.children&&!ge.current){t=tt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var a=i.firstContext;a!==null;){if(a.context===n){if(o.tag===1){a=Ye(-1,r&-r),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?a.next=a:(a.next=h.next,h.next=a),d.pending=a}}o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),Qo(o.return,r,t),i.lanes|=r;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(N(341));l.lanes|=r,i=l.alternate,i!==null&&(i.lanes|=r),Qo(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ce(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,cr(t,r),s=Re(s),n=n(s),t.flags|=1,ce(e,t,n,r),t.child;case 14:return n=t.type,s=Le(n,t.pendingProps),s=Le(n.type,s),oa(e,t,n,s,r);case 15:return mc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),Qn(e,t),t.tag=1,ve(n)?(e=!0,as(t)):e=!1,cr(t,r),dc(t,n,s),Ko(t,n,s,r),Zo(null,t,n,!0,e,r);case 19:return xc(e,t,r);case 22:return hc(e,t,r)}throw Error(N(156,t.tag))};function zc(e,t){return au(e,t)}function Sp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,r,n){return new Sp(e,t,r,n)}function si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return si(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jl)return 11;if(e===El)return 14}return 2}function xt(e,t){var r=e.alternate;return r===null?(r=Pe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Yn(e,t,r,n,s,o){var l=2;if(n=e,typeof e=="function")si(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Jt:return qt(r.children,s,o,t);case Sl:l=8,s|=8;break;case wo:return e=Pe(12,r,t,s|2),e.elementType=wo,e.lanes=o,e;case ko:return e=Pe(13,r,t,s),e.elementType=ko,e.lanes=o,e;case So:return e=Pe(19,r,t,s),e.elementType=So,e.lanes=o,e;case Ha:return Ds(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ba:l=10;break e;case Va:l=9;break e;case jl:l=11;break e;case El:l=14;break e;case ot:l=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Pe(l,r,t,s),t.elementType=e,t.type=n,t.lanes=o,t}function qt(e,t,r,n){return e=Pe(7,e,n,t),e.lanes=r,e}function Ds(e,t,r,n){return e=Pe(22,e,n,t),e.elementType=Ha,e.lanes=r,e.stateNode={isHidden:!1},e}function go(e,t,r){return e=Pe(6,e,null,t),e.lanes=r,e}function vo(e,t,r){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ep(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ks(0),this.expirationTimes=Ks(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function oi(e,t,r,n,s,o,l,i,a){return e=new Ep(e,t,r,i,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(o),e}function Cp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Dc(e){if(!e)return St;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(ve(r))return Du(e,r,t)}return t}function qc(e,t,r,n,s,o,l,i,a){return e=oi(r,n,!0,e,s,o,l,i,a),e.context=Dc(null),r=e.current,n=de(),s=yt(r),o=Ye(n,s),o.callback=t??null,gt(r,o,s),e.current.lanes=s,gn(e,s,n),ye(e,n),e}function qs(e,t,r,n){var s=t.current,o=de(),l=yt(s);return r=Dc(r),t.context===null?t.context=r:t.pendingContext=r,t=Ye(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=gt(s,t,l),e!==null&&(Ue(e,s,l,o),Hn(e,s,l)),l}function ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function va(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function li(e,t){va(e,t),(e=e.alternate)&&va(e,t)}function Np(){return null}var Uc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ii(e){this._internalRoot=e}Us.prototype.render=ii.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));qs(e,t,null,null)};Us.prototype.unmount=ii.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){qs(null,e,null,null)}),t[Ze]=null}};function Us(e){this._internalRoot=e}Us.prototype.unstable_scheduleHydration=function(e){if(e){var t=hu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<it.length&&t!==0&&t<it[r].priority;r++);it.splice(r,0,e),r===0&&vu(e)}};function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ya(){}function Pp(e,t,r,n,s){if(s){if(typeof n=="function"){var o=n;n=function(){var d=ks(l);o.call(d)}}var l=qc(t,n,e,0,null,!1,!1,"",ya);return e._reactRootContainer=l,e[Ze]=l.current,nn(e.nodeType===8?e.parentNode:e),$t(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var i=n;n=function(){var d=ks(a);i.call(d)}}var a=oi(e,0,!1,null,null,!1,!1,"",ya);return e._reactRootContainer=a,e[Ze]=a.current,nn(e.nodeType===8?e.parentNode:e),$t(function(){qs(t,a,r,n)}),a}function Fs(e,t,r,n,s){var o=r._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var i=s;s=function(){var a=ks(l);i.call(a)}}qs(t,l,e,s)}else l=Pp(r,t,e,s,n);return ks(l)}pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(Pl(t,r|1),ye(t,Q()),!(D&6)&&(xr=Q()+500,Ct()))}break;case 13:$t(function(){var n=et(e,1);if(n!==null){var s=de();Ue(n,e,1,s)}}),li(e,1)}};Tl=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var r=de();Ue(t,e,134217728,r)}li(e,134217728)}};mu=function(e){if(e.tag===13){var t=yt(e),r=et(e,t);if(r!==null){var n=de();Ue(r,e,t,n)}li(e,t)}};hu=function(){return q};gu=function(e,t){var r=q;try{return q=e,t()}finally{q=r}};Lo=function(e,t,r){switch(t){case"input":if(Co(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=_s(n);if(!s)throw Error(N(90));Ga(n),Co(n,s)}}}break;case"textarea":Ja(e,r);break;case"select":t=r.value,t!=null&&lr(e,!!r.multiple,t,!1)}};ru=ti;nu=$t;var Tp={usingClientEntryPoint:!1,Events:[yn,Zt,_s,eu,tu,ti]},Mr={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rp={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||Np,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var An=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!An.isDisabled&&An.supportsFiber)try{Ns=An.inject(Rp),Ve=An}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;je.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ai(t))throw Error(N(200));return Cp(e,t,null,r)};je.createRoot=function(e,t){if(!ai(e))throw Error(N(299));var r=!1,n="",s=Uc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=oi(e,1,!1,null,null,r,!1,n,s),e[Ze]=t.current,nn(e.nodeType===8?e.parentNode:e),new ii(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return $t(e)};je.hydrate=function(e,t,r){if(!As(t))throw Error(N(200));return Fs(null,e,t,!0,r)};je.hydrateRoot=function(e,t,r){if(!ai(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,s=!1,o="",l=Uc;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=qc(t,null,e,1,r??null,s,!1,o,l),e[Ze]=t.current,nn(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Us(t)};je.render=function(e,t,r){if(!As(t))throw Error(N(200));return Fs(null,e,t,!1,r)};je.unmountComponentAtNode=function(e){if(!As(e))throw Error(N(40));return e._reactRootContainer?($t(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};je.unstable_batchedUpdates=ti;je.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!As(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Fs(e,t,r,!1,n)};je.version="18.3.1-next-f1338f8080-20240426";function Ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac)}catch(e){console.error(e)}}Ac(),Aa.exports=je;var _p=Aa.exports,Fc,xa=_p;Fc=xa.createRoot,xa.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pn(){return pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pn.apply(this,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const wa="popstate";function Ip(e){e===void 0&&(e={});function t(n,s){let{pathname:o,search:l,hash:i}=n.location;return dl("",{pathname:o,search:l,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:Ss(s)}return Mp(t,r,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ui(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Lp(){return Math.random().toString(36).substr(2,8)}function ka(e,t){return{usr:e.state,key:e.key,idx:t}}function dl(e,t,r,n){return r===void 0&&(r=null),pn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Er(t):t,{state:r,key:t&&t.key||n||Lp()})}function Ss(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Er(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Mp(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:o=!1}=n,l=s.history,i=dt.Pop,a=null,d=h();d==null&&(d=0,l.replaceState(pn({},l.state,{idx:d}),""));function h(){return(l.state||{idx:null}).idx}function m(){i=dt.Pop;let C=h(),p=C==null?null:C-d;d=C,a&&a({action:i,location:v.location,delta:p})}function g(C,p){i=dt.Push;let c=dl(v.location,C,p);d=h()+1;let f=ka(c,d),x=v.createHref(c);try{l.pushState(f,"",x)}catch(y){if(y instanceof DOMException&&y.name==="DataCloneError")throw y;s.location.assign(x)}o&&a&&a({action:i,location:v.location,delta:1})}function w(C,p){i=dt.Replace;let c=dl(v.location,C,p);d=h();let f=ka(c,d),x=v.createHref(c);l.replaceState(f,"",x),o&&a&&a({action:i,location:v.location,delta:0})}function k(C){let p=s.location.origin!=="null"?s.location.origin:s.location.href,c=typeof C=="string"?C:Ss(C);return c=c.replace(/ $/,"%20"),W(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let v={get action(){return i},get location(){return e(s,l)},listen(C){if(a)throw new Error("A history only accepts one active listener");return s.addEventListener(wa,m),a=C,()=>{s.removeEventListener(wa,m),a=null}},createHref(C){return t(s,C)},createURL:k,encodeLocation(C){let p=k(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:w,go(C){return l.go(C)}};return v}var Sa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sa||(Sa={}));function Op(e,t,r){return r===void 0&&(r="/"),zp(e,t,r)}function zp(e,t,r,n){let s=typeof t=="string"?Er(t):t,o=wr(s.pathname||"/",r);if(o==null)return null;let l=Bc(e);Dp(l);let i=null;for(let a=0;i==null&&a<l.length;++a){let d=Gp(o);i=Hp(l[a],d)}return i}function Bc(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(o,l,i)=>{let a={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(W(a.relativePath.startsWith(n),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(n.length));let d=wt([n,a.relativePath]),h=r.concat(a);o.children&&o.children.length>0&&(W(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Bc(o.children,t,h,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:bp(d,o.index),routesMeta:h})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))s(o,l);else for(let a of $c(o.path))s(o,l,a)}),t}function $c(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return s?[o,""]:[o];let l=$c(n.join("/")),i=[];return i.push(...l.map(a=>a===""?o:[o,a].join("/"))),s&&i.push(...l),i.map(a=>e.startsWith("/")&&a===""?"/":a)}function Dp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Vp(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const qp=/^:[\w-]+$/,Up=3,Ap=2,Fp=1,Bp=10,$p=-2,ja=e=>e==="*";function bp(e,t){let r=e.split("/"),n=r.length;return r.some(ja)&&(n+=$p),t&&(n+=Ap),r.filter(s=>!ja(s)).reduce((s,o)=>s+(qp.test(o)?Up:o===""?Fp:Bp),n)}function Vp(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function Hp(e,t,r){let{routesMeta:n}=e,s={},o="/",l=[];for(let i=0;i<n.length;++i){let a=n[i],d=i===n.length-1,h=o==="/"?t:t.slice(o.length)||"/",m=fl({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},h),g=a.route;if(!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:wt([o,m.pathname]),pathnameBase:Xp(wt([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=wt([o,m.pathnameBase]))}return l}function fl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Wp(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:n.reduce((d,h,m)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let v=i[m]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const k=i[m];return w&&!k?d[g]=void 0:d[g]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:l,pattern:e}}function Wp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ui(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,a)=>(n.push({paramName:i,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function Gp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ui(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jp=e=>Qp.test(e);function Kp(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?Er(e):e,o;if(r)if(Jp(r))o=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),ui(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?o=Ea(r.substring(1),"/"):o=Ea(r,t)}else o=t;return{pathname:o,search:Zp(n),hash:em(s)}}function Ea(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function yo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function bc(e,t){let r=Yp(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Vc(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=Er(e):(s=pn({},e),W(!s.pathname||!s.pathname.includes("?"),yo("?","pathname","search",s)),W(!s.pathname||!s.pathname.includes("#"),yo("#","pathname","hash",s)),W(!s.search||!s.search.includes("#"),yo("#","search","hash",s)));let o=e===""||s.pathname==="",l=o?"/":s.pathname,i;if(l==null)i=r;else{let m=t.length-1;if(!n&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}i=m>=0?t[m]:"/"}let a=Kp(s,i),d=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&r.endsWith("/");return!a.pathname.endsWith("/")&&(d||h)&&(a.pathname+="/"),a}const wt=e=>e.join("/").replace(/\/\/+/g,"/"),Xp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,em=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hc=["post","put","patch","delete"];new Set(Hc);const rm=["get",...Hc];new Set(rm);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},mn.apply(this,arguments)}const Bs=P.createContext(null),Wc=P.createContext(null),Nt=P.createContext(null),$s=P.createContext(null),nt=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Gc=P.createContext(null);function nm(e,t){let{relative:r}=t===void 0?{}:t;wn()||W(!1);let{basename:n,navigator:s}=P.useContext(Nt),{hash:o,pathname:l,search:i}=bs(e,{relative:r}),a=l;return n!=="/"&&(a=l==="/"?n:wt([n,l])),s.createHref({pathname:a,search:i,hash:o})}function wn(){return P.useContext($s)!=null}function Ht(){return wn()||W(!1),P.useContext($s).location}function Qc(e){P.useContext(Nt).static||P.useLayoutEffect(e)}function Jc(){let{isDataRoute:e}=P.useContext(nt);return e?ym():sm()}function sm(){wn()||W(!1);let e=P.useContext(Bs),{basename:t,future:r,navigator:n}=P.useContext(Nt),{matches:s}=P.useContext(nt),{pathname:o}=Ht(),l=JSON.stringify(bc(s,r.v7_relativeSplatPath)),i=P.useRef(!1);return Qc(()=>{i.current=!0}),P.useCallback(function(d,h){if(h===void 0&&(h={}),!i.current)return;if(typeof d=="number"){n.go(d);return}let m=Vc(d,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:wt([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,l,o,e])}const om=P.createContext(null);function lm(e){let t=P.useContext(nt).outlet;return t&&P.createElement(om.Provider,{value:e},t)}function ci(){let{matches:e}=P.useContext(nt),t=e[e.length-1];return t?t.params:{}}function bs(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=P.useContext(Nt),{matches:s}=P.useContext(nt),{pathname:o}=Ht(),l=JSON.stringify(bc(s,n.v7_relativeSplatPath));return P.useMemo(()=>Vc(e,JSON.parse(l),o,r==="path"),[e,l,o,r])}function im(e,t){return am(e,t)}function am(e,t,r,n){wn()||W(!1);let{navigator:s}=P.useContext(Nt),{matches:o}=P.useContext(nt),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let d=Ht(),h;if(t){var m;let C=typeof t=="string"?Er(t):t;a==="/"||(m=C.pathname)!=null&&m.startsWith(a)||W(!1),h=C}else h=d;let g=h.pathname||"/",w=g;if(a!=="/"){let C=a.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=Op(e,{pathname:w}),v=pm(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},i,C.params),pathname:wt([a,s.encodeLocation?s.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:wt([a,s.encodeLocation?s.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,r,n);return t&&v?P.createElement($s.Provider,{value:{location:mn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:dt.Pop}},v):v}function um(){let e=vm(),t=tm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),r?P.createElement("pre",{style:s},r):null,null)}const cm=P.createElement(um,null);class dm extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?P.createElement(nt.Provider,{value:this.props.routeContext},P.createElement(Gc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fm(e){let{routeContext:t,match:r,children:n}=e,s=P.useContext(Bs);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),P.createElement(nt.Provider,{value:t},n)}function pm(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,i=(s=r)==null?void 0:s.errors;if(i!=null){let h=l.findIndex(m=>m.route.id&&(i==null?void 0:i[m.route.id])!==void 0);h>=0||W(!1),l=l.slice(0,Math.min(l.length,h+1))}let a=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<l.length;h++){let m=l[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:g,errors:w}=r,k=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||k){a=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((h,m,g)=>{let w,k=!1,v=null,C=null;r&&(w=i&&m.route.id?i[m.route.id]:void 0,v=m.route.errorElement||cm,a&&(d<0&&g===0?(xm("route-fallback"),k=!0,C=null):d===g&&(k=!0,C=m.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),c=()=>{let f;return w?f=v:k?f=C:m.route.Component?f=P.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=h,P.createElement(fm,{match:m,routeContext:{outlet:h,matches:p,isDataRoute:r!=null},children:f})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?P.createElement(dm,{location:r.location,revalidation:r.revalidation,component:v,error:w,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Kc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kc||{}),Yc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yc||{});function mm(e){let t=P.useContext(Bs);return t||W(!1),t}function hm(e){let t=P.useContext(Wc);return t||W(!1),t}function gm(e){let t=P.useContext(nt);return t||W(!1),t}function Xc(e){let t=gm(),r=t.matches[t.matches.length-1];return r.route.id||W(!1),r.route.id}function vm(){var e;let t=P.useContext(Gc),r=hm(),n=Xc();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function ym(){let{router:e}=mm(Kc.UseNavigateStable),t=Xc(Yc.UseNavigateStable),r=P.useRef(!1);return Qc(()=>{r.current=!0}),P.useCallback(function(s,o){o===void 0&&(o={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,mn({fromRouteId:t},o)))},[e,t])}const Ca={};function xm(e,t,r){Ca[e]||(Ca[e]=!0)}function wm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function km(e){return lm(e.context)}function Gt(e){W(!1)}function Sm(e){let{basename:t="/",children:r=null,location:n,navigationType:s=dt.Pop,navigator:o,static:l=!1,future:i}=e;wn()&&W(!1);let a=t.replace(/^\/*/,"/"),d=P.useMemo(()=>({basename:a,navigator:o,static:l,future:mn({v7_relativeSplatPath:!1},i)}),[a,i,o,l]);typeof n=="string"&&(n=Er(n));let{pathname:h="/",search:m="",hash:g="",state:w=null,key:k="default"}=n,v=P.useMemo(()=>{let C=wr(h,a);return C==null?null:{location:{pathname:C,search:m,hash:g,state:w,key:k},navigationType:s}},[a,h,m,g,w,k,s]);return v==null?null:P.createElement(Nt.Provider,{value:d},P.createElement($s.Provider,{children:r,value:v}))}function jm(e){let{children:t,location:r}=e;return im(pl(t),r)}new Promise(()=>{});function pl(e,t){t===void 0&&(t=[]);let r=[];return P.Children.forEach(e,(n,s)=>{if(!P.isValidElement(n))return;let o=[...t,s];if(n.type===P.Fragment){r.push.apply(r,pl(n.props.children,o));return}n.type!==Gt&&W(!1),!n.props.index||!n.props.children||W(!1);let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=pl(n.props.children,o)),r.push(l)}),r}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},js.apply(this,arguments)}function Zc(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function Em(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cm(e,t){return e.button===0&&(!t||t==="_self")&&!Em(e)}const Nm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Tm="6";try{window.__reactRouterVersion=Tm}catch{}const Rm=P.createContext({isTransitioning:!1}),_m="startTransition",Na=yd[_m];function Im(e){let{basename:t,children:r,future:n,window:s}=e,o=P.useRef();o.current==null&&(o.current=Ip({window:s,v5Compat:!0}));let l=o.current,[i,a]=P.useState({action:l.action,location:l.location}),{v7_startTransition:d}=n||{},h=P.useCallback(m=>{d&&Na?Na(()=>a(m)):a(m)},[a,d]);return P.useLayoutEffect(()=>l.listen(h),[l,h]),P.useEffect(()=>wm(n),[n]),P.createElement(Sm,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:l,future:n})}const Lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=P.forwardRef(function(t,r){let{onClick:n,relative:s,reloadDocument:o,replace:l,state:i,target:a,to:d,preventScrollReset:h,viewTransition:m}=t,g=Zc(t,Nm),{basename:w}=P.useContext(Nt),k,v=!1;if(typeof d=="string"&&Mm.test(d)&&(k=d,Lm))try{let f=new URL(window.location.href),x=d.startsWith("//")?new URL(f.protocol+d):new URL(d),y=wr(x.pathname,w);x.origin===f.origin&&y!=null?d=y+x.search+x.hash:v=!0}catch{}let C=nm(d,{relative:s}),p=Dm(d,{replace:l,state:i,target:a,preventScrollReset:h,relative:s,viewTransition:m});function c(f){n&&n(f),f.defaultPrevented||p(f)}return P.createElement("a",js({},g,{href:k||C,onClick:v||o?n:c,ref:r,target:a}))}),Om=P.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:s=!1,className:o="",end:l=!1,style:i,to:a,viewTransition:d,children:h}=t,m=Zc(t,Pm),g=bs(a,{relative:m.relative}),w=Ht(),k=P.useContext(Wc),{navigator:v,basename:C}=P.useContext(Nt),p=k!=null&&qm(g)&&d===!0,c=v.encodeLocation?v.encodeLocation(g).pathname:g.pathname,f=w.pathname,x=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;s||(f=f.toLowerCase(),x=x?x.toLowerCase():null,c=c.toLowerCase()),x&&C&&(x=wr(x,C)||x);const y=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let S=f===c||!l&&f.startsWith(c)&&f.charAt(y)==="/",j=x!=null&&(x===c||!l&&x.startsWith(c)&&x.charAt(c.length)==="/"),E={isActive:S,isPending:j,isTransitioning:p},I=S?n:void 0,T;typeof o=="function"?T=o(E):T=[o,S?"active":null,j?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let z=typeof i=="function"?i(E):i;return P.createElement(Qr,js({},m,{"aria-current":I,className:T,ref:r,style:z,to:a,viewTransition:d}),typeof h=="function"?h(E):h)});var ml;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ml||(ml={}));var Pa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pa||(Pa={}));function zm(e){let t=P.useContext(Bs);return t||W(!1),t}function Dm(e,t){let{target:r,replace:n,state:s,preventScrollReset:o,relative:l,viewTransition:i}=t===void 0?{}:t,a=Jc(),d=Ht(),h=bs(e,{relative:l});return P.useCallback(m=>{if(Cm(m,r)){m.preventDefault();let g=n!==void 0?n:Ss(d)===Ss(h);a(e,{replace:g,state:s,preventScrollReset:o,relative:l,viewTransition:i})}},[d,a,h,n,s,r,e,o,l,i])}function qm(e,t){t===void 0&&(t={});let r=P.useContext(Rm);r==null&&W(!1);let{basename:n}=zm(ml.useViewTransitionState),s=bs(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=wr(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=wr(r.nextLocation.pathname,n)||r.nextLocation.pathname;return fl(s.pathname,l)!=null||fl(s.pathname,o)!=null}function Um(){const t=Ht().pathname.includes("/courses");return u.jsx("header",{className:"bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg",children:u.jsx("div",{className:"container mx-auto px-4 py-3",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs(Qr,{to:"/",className:"flex items-center gap-3 group",children:[u.jsx("span",{className:"w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white group-hover:bg-white/30 transition-colors shadow-md",children:"🎓"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xl font-bold tracking-tight block",children:"EduPlatform"}),u.jsx("span",{className:"text-xs text-white/70 block",children:"Learn by doing"})]})]}),u.jsxs("nav",{className:"flex items-center gap-6",children:[u.jsxs(Qr,{to:"/courses",className:`px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${t?"bg-white/20 shadow-inner":"text-white/90 hover:text-white hover:bg-white/10"}`,children:[u.jsx("span",{children:"📚"}),"Courses"]}),u.jsxs(Qr,{to:"/progress",className:"text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all flex items-center gap-2",children:[u.jsx("span",{children:"📊"}),"My Progress"]})]})]})})})}function Am(){return u.jsx("footer",{className:"bg-primary-700 mt-8 text-white",children:u.jsxs("div",{className:"container mx-auto px-4 py-6 text-sm",children:["© ",new Date().getFullYear()," EduPlatform — Educational demo app"]})})}function Fm(){return u.jsxs("div",{className:"min-h-screen flex flex-col",children:[u.jsx(Um,{}),u.jsx("main",{className:"container mx-auto px-4 py-8 flex-1",children:u.jsx(km,{})}),u.jsx(Am,{})]})}const Cr=[{id:"1",title:"Git & GitHub",slug:"git-and-github",description:"Master version control with Git and collaborate effectively using GitHub. Learn branching, pull requests, and professional workflows.",level:"Beginner",duration:"2-3 hours",prerequisites:["Basic computer skills","Familiarity with command line basics"],objectives:["Understand version control concepts","Master Git commands and workflows","Collaborate using GitHub","Manage projects with branching strategies"],skills:["Version Control","Branch Management","Code Collaboration","Pull Requests","GitHub Workflows"],category:"Development Tools",instructor:"John Doe",rating:4.8,students:1250,projects:3,tags:["git","github","version-control","collaboration"],lastUpdated:"2024-01-15",thumbnail:"/images/git-course.jpg"},{id:"2",title:"Node & Express.js",slug:"node-and-express",description:"Build scalable backend services with Node.js and Express.js. Create REST APIs, middleware, authentication, and deploy production-ready applications.",level:"Intermediate",duration:"6-8 hours",prerequisites:["JavaScript fundamentals","Basic understanding of HTTP","Async/await concepts"],objectives:["Build RESTful APIs with Express.js","Implement middleware and error handling","Connect to databases (MongoDB)","Add authentication and security","Deploy applications to production"],skills:["Backend Development","REST API Design","Middleware Implementation","Database Integration","Authentication & Security"],category:"Backend Development",instructor:"Jane Smith",rating:4.9,students:890,projects:5,tags:["nodejs","express","backend","api","mongodb"],lastUpdated:"2024-01-10",thumbnail:"/images/express-course.jpg"},{id:"3",title:"React Fundamentals",slug:"react-fundamentals",description:"Learn modern React development with hooks, context, and best practices. Build interactive user interfaces with component-based architecture.",level:"Beginner",duration:"4-5 hours",prerequisites:["HTML & CSS basics","JavaScript ES6+ features","Basic programming concepts"],objectives:["Understand React components and JSX","Master React hooks (useState, useEffect)","Manage state and props effectively","Build forms and handle events","Create reusable component libraries"],skills:["React Components","Hooks & State Management","Event Handling","Component Composition","Modern React Patterns"],category:"Frontend Development",instructor:"Mike Johnson",rating:4.7,students:2100,projects:4,tags:["react","frontend","javascript","ui","components"],lastUpdated:"2024-01-12",thumbnail:"/images/react-course.jpg"}];function ed({course:e}){return u.jsx(Qr,{to:`/courses/${e.slug}`,"aria-label":`Open course ${e.title}`,className:"card border-l-4 border-primary-500 block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150",children:u.jsx("div",{className:"flex items-start justify-between",children:u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-2 text-slate-900",children:e.title}),u.jsx("p",{className:"text-sm text-slate-600 mb-3",children:e.description}),u.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-500",children:[u.jsx("span",{className:"inline-block px-2 py-1 bg-slate-100 rounded",children:e.level}),u.jsx("span",{children:e.duration})]})]})})})}function Bm(){return u.jsxs("div",{children:[u.jsxs("section",{className:"text-center py-12",children:[u.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Learn new skills online"}),u.jsx("p",{className:"text-gray-600",children:"Bite-sized courses to help you grow."})]}),u.jsxs("section",{children:[u.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Featured courses"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Cr.map(e=>u.jsx(ed,{course:e},e.id))})]})]})}const ze={slug:"git-and-github",title:"Git & GitHub",description:"Master version control with Git and collaborate effectively using GitHub. Learn branching, pull requests, and professional workflows.",level:"Beginner",duration:"2-3 hours",prerequisites:["Basic computer skills","Familiarity with command line basics"],skillsGained:["Version Control","Branch Management","Code Collaboration","Pull Requests","GitHub Workflows"],totalModules:3,totalLessons:8,totalExercises:4,totalProjects:1,welcomeMessage:{title:"Welcome to Git & GitHub Mastery",description:"Learn professional version control skills that every developer needs. From basic commits to advanced collaboration workflows."},completionCertificate:!0,sections:[{id:"getting-started",title:"Getting Started with Git",duration:"45 minutes",objectives:["Understand version control concepts","Install and configure Git","Create your first repository","Make and track changes"],lessons:[{id:"what-is-git",title:"What is Git?",type:"theory",content:{paragraphs:["Git is a distributed version control system that helps developers track changes in their codebase, collaborate with others, and maintain project history.","Unlike centralized version control systems, every developer has a complete copy of the repository with full history."],keyPoints:["Distributed version control system","Tracks changes to files over time","Enables collaboration and branching","Maintains complete project history"]}},{id:"install-setup",title:"Installation & Setup",type:"practical",content:{steps:[{text:"Install Git on your system:",code:`# Windows: Download from git-scm.com
# macOS: brew install git
# Linux: sudo apt install git`},{text:"Verify installation:",code:"git --version"},{text:"Configure your identity:",code:`git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`}]}}],exercises:[{id:"ex-git-1",title:"First Repository",description:"Create your first Git repository and make initial commits",task:`1. Create a new directory
2. Initialize a Git repository
3. Create a README.md file
4. Make your first commit
5. Check the commit history`,difficulty:"beginner",estimatedTime:"15 minutes",solution:`mkdir my-first-repo
cd my-first-repo
git init
echo "# My Project" > README.md
git add .
git commit -m "Initial commit"
git log`}]},{id:"basic-commands",title:"Essential Git Commands",duration:"1 hour",objectives:["Master basic Git workflow","Understand staging and committing","Learn to view history and changes","Handle file modifications"],lessons:[{id:"basic-workflow",title:"Basic Git Workflow",type:"theory",content:{paragraphs:["Git follows a simple three-stage workflow: working directory → staging area → repository. Understanding this flow is crucial for effective version control."],keyPoints:["Working directory: where you make changes","Staging area: where you prepare changes for commit","Repository: where committed changes are stored"]}},{id:"essential-commands",title:"Essential Commands",type:"example",content:{description:"Daily Git commands you'll use constantly",code:`# Check status of files
git status

# Add files to staging area
git add filename.txt
git add .  # all files

# Commit changes
git commit -m "Descriptive commit message"

# View history
git log
git log --oneline

# See changes
git diff
git diff --staged`}}],exercises:[{id:"ex-git-2",title:"Practice Workflow",description:"Practice the complete Git workflow with multiple changes",task:`1. Create multiple files
2. Make changes to files
3. Stage specific files
4. Commit changes with meaningful messages
5. View your commit history`,difficulty:"beginner",estimatedTime:"20 minutes"}],quiz:[{question:"What does 'git add' do?",options:["Commits changes to repository","Adds files to staging area","Creates a new branch","Pushes changes to remote"],correct:1,explanation:"git add moves changes from working directory to staging area, preparing them for commit."}]},{id:"branching-workflows",title:"Branching & Collaboration",duration:"45 minutes",objectives:["Understand branching strategies","Create and merge branches","Learn GitHub collaboration","Handle pull requests"],lessons:[{id:"git-branching",title:"Git Branching",type:"theory",content:{paragraphs:["Branching allows you to work on different features, fixes, or experiments independently without affecting the main codebase."]}},{id:"github-collab",title:"GitHub Collaboration",type:"practical",content:{steps:[{text:"Create a GitHub repository:",code:"# On GitHub.com, click New Repository"},{text:"Connect local repo to GitHub:",code:`git remote add origin https://github.com/username/repo.git
git push -u origin main`}]}}],finalProject:{title:"Complete GitHub Workflow",description:"Implement a complete feature using Git and GitHub collaboration workflow",requirements:["Create a new repository on GitHub","Clone repository locally","Create a feature branch","Make changes and commit","Push branch and create pull request","Merge pull request"],learningOutcomes:["Full understanding of Git workflow","GitHub collaboration skills","Branch management","Code review process"]}}]},De={slug:"node-and-express",title:"Node & Express.js",description:"Build backend services with Node.js and Express.js — create APIs, middleware and serve static files.",level:"Beginner",duration:"6-8 hours",prerequisites:["Basic JavaScript knowledge","Understanding of HTTP basics"],sections:[{id:"module-1",title:"Module 1: Node.js Fundamentals & Setup",duration:"45 minutes",objectives:["Understand Node.js runtime environment","Set up development environment","Create first Node.js server"],lessons:[{id:"what-is-node",title:"What is Node.js?",type:"theory",content:{paragraphs:["Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server.","Key features: Event-driven, non-blocking I/O model, perfect for data-intensive real-time applications."],keyPoints:["Uses Google's V8 JavaScript engine","Single-threaded with event loop","Perfect for I/O-heavy applications"]}},{id:"setup-environment",title:"Environment Setup",type:"practical",content:{steps:[{text:"Verify Node.js installation:",code:`node --version
npm --version`},{text:"Create project directory:",code:`mkdir my-first-app
cd my-first-app`},{text:"Initialize npm project:",code:"npm init -y"}]}},{id:"first-server",title:"First HTTP Server",type:"example",content:{description:"Create a basic HTTP server using Node.js built-in http module",code:`const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}}],exercises:[{id:"ex-1-1",title:"Simple Server Modification",description:"Modify the server to return different responses based on the URL",task:`Create a server that returns:
- 'Home Page' for '/'
- 'About Page' for '/about'
- '404 Not Found' for other routes`,hint:"Check req.url property",solution:`const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}],quiz:[{question:"What is Node.js?",options:["A JavaScript framework for frontend development","A runtime environment for executing JavaScript on the server","A database management system","A CSS preprocessor"],correct:1}]},{id:"module-2",title:"Module 2: Express.js Fundamentals",duration:"1 hour",objectives:["Understand Express.js framework","Create basic Express application","Handle different HTTP methods"],lessons:[{id:"express-intro",title:"Introduction to Express.js",type:"theory",content:{paragraphs:["Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.","It simplifies the process of building web applications by providing utilities for routing, middleware, template engines, and more."]}},{id:"basic-express-app",title:"Basic Express Application",type:"example",content:{description:"Create a minimal Express application",steps:[{text:"Install Express:",code:"npm install express"}],code:`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}},{id:"http-methods",title:"Handling HTTP Methods",type:"example",content:{description:"Handle different HTTP methods (GET, POST, PUT, DELETE)",code:`app.get('/users', (req, res) => {
  res.send('GET: List all users');
});

app.post('/users', (req, res) => {
  res.send('POST: Create a user');
});

app.put('/users/:id', (req, res) => {
  res.send(\`PUT: Update user \${req.params.id}\`);
});

app.delete('/users/:id', (req, res) => {
  res.send(\`DELETE: Delete user \${req.params.id}\`);
});`}}],exercises:[{id:"ex-2-1",title:"RESTful Bookstore API",description:"Create a simple bookstore API with basic CRUD operations",task:`Implement these endpoints:
GET /books - return list of books
POST /books - add a new book
GET /books/:id - get a specific book
PUT /books/:id - update a book
DELETE /books/:id - delete a book

Use an in-memory array to store books.`,hint:"Start with defining your books array and implement each route",solution:`const express = require('express');
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

app.put('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books.splice(index, 1);
  res.status(204).send();
});`}]},{id:"module-2-5",title:"Module 2.5: Bookstore App Setup & Project Structure (ES modules)",duration:"45 minutes",objectives:["Create a project scaffold for a small ecommerce/bookstore API",'Use ES modules (type: "module") in package.json',"Wire up app.js, server.js, routes and simple controllers with mock data"],lessons:[{id:"bookstore-setup",title:"Step-by-step: Scaffold bookstore Express app (type: module)",type:"practical",content:{description:'Follow these steps to create a small bookstore API using ES modules (package.json: type = "module"). Each step shows which files to create and minimal example content.',code:`ecommerce-api/
├── package.json
├── server.js
└── src/
    ├── app.js
    ├── controllers/
    │   ├── productController.js
    │   └── categoryController.js
    ├── routes/
    │   ├── productRoutes.js
    │   ├── categoryRoutes.js
    │   └── index.js
    └── data/
        └── mockData.js`,steps:[{text:"1) Init project and set ES module type",code:`npm init -y
// open package.json and add: "type": "module"`},{text:"2) Install Express",code:"npm install express"},{text:"2.1) Install nodemon for development (optional but recommended)",code:"npm install --save-dev nodemon"},{text:"3) Create src/app.js — export configured Express app",code:`// src/app.js
import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use('/api', routes);

export default app;`},{text:"4) Create server.js — import app and start server",code:`// server.js
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`},{text:"5) Create mock data",code:`// src/data/mockData.js
export const products = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', price: 29.99 },
  { id: 2, title: 'You Don\\'t Know JS', author: 'Kyle Simpson', price: 24.99 }
];

export const categories = [
  { id: 1, name: 'Programming' },
  { id: 2, name: 'Databases' }
];`},{text:"6) Create simple controllers",code:`// src/controllers/productController.js
import { products } from '../data/mockData.js';

export const listProducts = (req, res) => {
  res.json(products);
};

export const getProduct = (req, res) => {
  const p = products.find(p => p.id === parseInt(req.params.id));
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
};`},{text:"7) Create routes and index router",code:`// src/routes/productRoutes.js
import express from 'express';
import { listProducts, getProduct } from '../controllers/productController.js';

const router = express.Router();
router.get('/', listProducts);
router.get('/:id', getProduct);
export default router;

// src/routes/index.js
import express from 'express';
import productRoutes from './productRoutes.js';

const router = express.Router();
router.use('/products', productRoutes);
export default router;`},{text:"8) Start server npm run dev or npm start",code:`// To start server:
// Suggested package.json scripts (add to package.json)
// "scripts": {
//   "start": "node server.js",
//   "dev": "nodemon server.js"
// }
 npm run dev // for development with nodemon  or npm start // for production`},{text:"Notes",code:`- Use imports/exports because package.json has "type": "module"
- Keep controllers small and return mock data initially
- Later replace mockData with database calls`}]}}],exercises:[{id:"ex-2-5-1",title:"Scaffold the Bookstore App",description:"Create the project scaffold above, run the server and verify GET /api/products returns mock data.",task:"Follow the steps in the lesson, create files, run node server.js and verify endpoint."}]},{id:"module-3",title:"Module 3: Middleware & Request Processing",duration:"2 hours",objectives:["Understand Express middleware concept with real-world analogies","Master the request-response cycle and middleware execution order","Create custom middleware for various use cases","Use built-in and third-party middleware effectively"],lessons:[{id:"middleware-concept",title:"What is Middleware? The Car Assembly Line Analogy",type:"theory",content:{paragraphs:["Imagine Express as a car assembly line. A request is like a chassis (car frame) moving down the line. Each station is a middleware function that can inspect, modify, or stop the chassis. The final station (your route handler) completes the car and sends it back as a response.","Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle. They form a chain where each middleware can execute code, modify the request/response, or end the cycle."],keyPoints:["Each middleware is a station on the assembly line","Middleware executes in the ORDER they are defined","Three actions: Inspect/Modify (like req.body), Stop the Line (send response), or Pass to Next (call next())","If you don't call next(), the request hangs forever","The route handler is the final middleware that sends the response"],analogy:{title:"The Assembly Line Metaphor",description:"Understand middleware through a real-world analogy",stages:[{stage:"The Chassis Arrives",middleware:"Request comes in",action:"Initial chassis enters the line"},{stage:"Station 1: Inspection",middleware:"app.use((req, res, next) => { console.log(req.url); next(); })",action:"Worker inspects the chassis (logs request details) and sends it to the next station"},{stage:"Station 2: Body Assembly",middleware:"express.json() - Built-in middleware",action:"Worker assembles the body (parses JSON) and passes it along"},{stage:"Station 3: Quality Check",middleware:"Authentication middleware",action:"Worker checks if chassis meets standards. If not, STOP (reject). Otherwise, continue"},{stage:"Final Station: Installation",middleware:"app.get('/', (req, res) => { res.send(...) })",action:"Final worker installs engine and seats (business logic) and sends finished car (response)"}]},visualFlow:`
Request In
    |
    V
Middleware 1 (Logger) -----> Inspect request, call next()
    |
    V
Middleware 2 (JSON Parser) -> Parse body, call next()
    |
    V
Middleware 3 (Auth Check) --> Verify user, call next() or STOP
    |
    V
Route Handler (Final Station) -> Process & SEND RESPONSE
    |
    V
Response Out to Client
        `}},{id:"three-actions",title:"The Three Actions of Middleware",type:"example",content:{description:"Understanding what middleware can do",paragraphs:["Middleware can inspect/modify requests, stop the request cycle, or pass control to the next middleware. Full code examples are available in the subsections below."],code:"// See subsections for three detailed examples: Inspect/Modify, Stop the Line, Pass Control",subsections:[{title:"Action 1: Inspect & Modify (The Assembly Worker Inspects)",description:"Check or modify the request/response without stopping",code:`// Logging middleware - inspects the request
app.use((req, res, next) => {
  console.log(\`Request: \${req.method} \${req.url}\`);
  console.log(\`Headers: \${JSON.stringify(req.headers)}\`);
  
  // Add custom data to the request object
  req.startTime = Date.now();
  req.customData = 'some value';
  
  next(); // Pass to the next middleware
});

// Use the added data in route handler
app.get('/', (req, res) => {
  console.log(\`Route took \${Date.now() - req.startTime}ms\`);
  res.send('Hello');
});`},{title:"Action 2: Stop the Line (The Assembly Worker Rejects)",description:"End the request immediately with a response",code:`// Authentication middleware - STOPS if user not logged in
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token === 'secret-token') {
    next(); // User is valid, continue
  } else {
    // STOP HERE - don't call next()
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Using the middleware
app.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'This data is only for authenticated users' });
});`},{title:"Action 3: Pass Control (The Assembly Worker Continues)",description:"Call next() to pass control to the next middleware",code:`// Middleware that always passes to next
app.use((req, res, next) => {
  console.log('Middleware 1: Doing something...');
  // Do some work here
  next(); // Pass to next middleware/route
});

app.use((req, res, next) => {
  console.log('Middleware 2: Doing something else...');
  next(); // Pass to next middleware/route
});

app.get('/', (req, res) => {
  console.log('Route handler: Final stop');
  res.send('Response');
});

// Order of execution:
// 1. Middleware 1 logs and calls next()
// 2. Middleware 2 logs and calls next()
// 3. Route handler runs and sends response`}]}},{id:"custom-middleware",title:"Creating Custom Middleware",type:"example",content:{description:"Build practical middleware from scratch",paragraphs:["Practical middleware patterns: logging, response-timing, auth, role checks and validation. Full examples follow in the examples array."],code:"// See examples array for concrete middleware implementations (logger, response-time, auth, admin check, validation)",examples:[{title:"Request Logger with Timestamps",code:"// Simple request logger\napp.use((req, res, next) => {\n  const timestamp = new Date().toISOString();\n  console.log(`[${timestamp}] ${req.method} ${req.url}`);\n  next();\n});"},{title:"Response Time Tracker",code:`// Middleware that tracks how long each request takes
app.use((req, res, next) => {
  const startTime = Date.now();
  
  // Hook into the 'finish' event to see when response is sent
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(\`Request to \${req.url} took \${duration}ms\`);
  });
  
  next();
});`},{title:"Authentication Middleware",code:`// Check if user is authenticated
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  if (token === 'valid-token') {
    req.user = { id: 1, name: 'John Doe' };
    next();
  } else {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Use it on specific routes
app.get('/protected', requireAuth, (req, res) => {
  res.json({ message: \`Hello \${req.user.name}\` });
});`},{title:"Admin Role Check Middleware",code:`// Check if user has admin role
const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Admin access required' });
  }
};

// Chain multiple middlewares
app.delete('/users/:id', requireAuth, requireAdmin, (req, res) => {
  res.json({ message: \`Deleted user \${req.params.id}\` });
});`},{title:"Request Body Validation",code:`// Validate that required fields are in the request body
const validateUserData = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Missing required fields: name and email' 
    });
  }
  
  if (!email.includes('@')) {
    return res.status(400).json({ 
      error: 'Invalid email format' 
    });
  }
  
  next();
};

app.post('/users', validateUserData, (req, res) => {
  res.json({ message: 'User created successfully' });
});`}]}},{id:"builtin-middleware",title:"Built-in Middleware",type:"example",content:{description:"Using Express built-in middleware for common tasks",paragraphs:["Express provides built-in middleware for common tasks such as JSON/body parsing, urlencoded parsing, and serving static files. See code examples below."],code:"// See examples array for usage of express.json(), express.urlencoded(), and express.static()",examples:[{title:"JSON Parser - Parse incoming JSON requests",code:`// Without express.json(), req.body would be undefined
app.use(express.json());

app.post('/api/users', (req, res) => {
  console.log(req.body); // Now contains parsed JSON data
  res.json({ received: req.body });
});`},{title:"URL-Encoded Parser - Parse form data",code:`// Parse form submissions (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.post('/form', (req, res) => {
  // req.body contains form data
  res.send(\`Received form data: \${JSON.stringify(req.body)}\`);
});`},{title:"Static Files - Serve CSS, images, etc.",code:`// Serve files from the 'public' folder
app.use(express.static('public'));

// Now http://localhost:3000/style.css serves public/style.css
// http://localhost:3000/logo.png serves public/logo.png`},{title:"Combining Built-in Middleware",code:`const express = require('express');
const app = express();

// Order matters! Parse before using
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Your custom middleware here
app.use((req, res, next) => {
  console.log('Processing request...');
  next();
});

// Routes here
app.post('/api/data', (req, res) => {
  res.json(req.body);
});`}]}},{id:"middleware-order",title:"Middleware Execution Order - CRITICAL",type:"example",content:{description:"Why the order of middleware matters",warning:"The order in which you define middleware is crucial!",code:`// WRONG ORDER - This will NOT work
app.get('/users', (req, res) => {
  res.json(users);
});

app.use(express.json()); // DEFINED AFTER the route!

// CORRECT ORDER
app.use(express.json()); // Parse JSON FIRST

app.get('/users', (req, res) => {
  // Now we can use req.body if someone POSTs to /users
  res.json(users);
});

// EXECUTION ORDER EXAMPLE
app.use((req, res, next) => {
  console.log('1. First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('2. Second middleware');
  next();
});

app.get('/', (req, res) => {
  console.log('3. Route handler');
  res.send('Done');
});

// Output when GET /:
// 1. First middleware
// 2. Second middleware
// 3. Route handler`}},{id:"error-handling",title:"Error Handling Middleware",type:"example",content:{description:"Handle errors across your entire application",keyPoints:["Error-handling middleware has 4 parameters: (err, req, res, next)","Must be defined LAST, after all other routes and middleware","Pass errors to it by calling next(error)"],code:`// Route that might have an error
app.get('/divide/:a/:b', (req, res, next) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  
  if (b === 0) {
    const error = new Error('Cannot divide by zero');
    error.status = 400;
    return next(error); // Pass error to error handler
  }
  
  res.json({ result: a / b });
});

// ERROR HANDLING MIDDLEWARE (must be last!)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  
  console.error('Error:', message);
  
  res.status(status).json({
    error: {
      message: message,
      status: status
    }
  });
});`}}],exercises:[{id:"ex-3-1",title:"Request Logger Middleware",description:"Create a detailed request logger",difficulty:"Beginner",task:`Create middleware that logs:
- Timestamp (ISO format)
- HTTP method
- URL path
- User-Agent header
- Response time (in milliseconds)

Format: "2023-10-01T10:00:00.000Z - GET /api/users - Chrome/120 - 15ms"`,hint:"Use res.on('finish') to track when the response is sent",solution:`app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const userAgent = req.get('User-Agent') || 'Unknown';
    const timestamp = new Date().toISOString();
    
    console.log(
      \`\${timestamp} - \${req.method} \${req.url} - \${userAgent} - \${duration}ms\`
    );
  });
  
  next();
});`},{id:"ex-3-2",title:"Error Handling Middleware",description:"Create global error handling middleware",difficulty:"Intermediate",task:`Create error handling middleware that:
1. Catches all errors thrown or passed via next(error)
2. Returns consistent JSON error responses
3. Includes different handling for validation vs generic errors
4. Shows detailed errors in development, generic in production
5. Logs all errors to console`,hint:"Error middleware has 4 parameters: (err, req, res, next). Check process.env.NODE_ENV",solution:`// Error handling middleware (must be LAST)
app.use((err, req, res, next) => {
  console.error('ERROR:', err.message);
  console.error('Stack:', err.stack);
  
  let status = err.status || err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  
  // Handle validation errors specifically
  if (err.name === 'ValidationError') {
    status = 400;
    message = 'Validation Error';
  }
  
  // Different response for production vs development
  const response = {
    error: {
      message: message,
      status: status
    }
  };
  
  // In development, include full error details
  if (process.env.NODE_ENV === 'development') {
    response.error.details = err.stack;
  }
  
  res.status(status).json(response);
});`},{id:"ex-3-3",title:"Authentication Middleware",description:"Create a token-based authentication middleware",difficulty:"Intermediate",task:`Create authentication middleware that:
1. Checks for Authorization header with Bearer token
2. Validates the token (accept 'valid-token' for now)
3. Attaches user data to req.user if valid
4. Returns 401 error if missing or invalid token
5. Can be applied to specific routes only`,hint:"Check req.headers.authorization. Use .replace('Bearer ', '') to extract token",solution:`const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'Missing authorization header' });
  }
  
  const token = authHeader.replace('Bearer ', '');
  
  if (token === 'valid-token') {
    // Attach user to request
    req.user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    };
    next();
  } else {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Apply to specific route
app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});

// Test with: curl -H "Authorization: Bearer valid-token" http://localhost:3000/profile`},{id:"ex-3-4",title:"Request Validation Middleware",description:"Create reusable validation middleware",difficulty:"Intermediate",task:`Create a middleware factory that validates request bodies:
1. Check for required fields
2. Validate email format
3. Check numeric ranges
4. Ensure correct data types
5. Return helpful error messages

Create separate validators for different routes (user, product, etc.)`,hint:"Create a function that returns middleware",solution:`// Middleware factory for validating user data
const validateUserInput = (req, res, next) => {
  const { name, email, age } = req.body;
  const errors = [];
  
  // Check required fields
  if (!name) errors.push('Name is required');
  if (!email) errors.push('Email is required');
  
  // Validate email format
  if (email && !email.includes('@')) {
    errors.push('Invalid email format');
  }
  
  // Validate age range
  if (age !== undefined) {
    if (typeof age !== 'number') errors.push('Age must be a number');
    if (age < 0 || age > 150) errors.push('Age must be between 0 and 150');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({ 
      error: 'Validation failed',
      details: errors 
    });
  }
  
  next();
};

// Reusable validator factory
const createValidator = (rules) => {
  return (req, res, next) => {
    const errors = [];
    
    Object.keys(rules).forEach(field => {
      const rule = rules[field];
      const value = req.body[field];
      
      if (rule.required && !value) {
        errors.push(\`\${field} is required\`);
      }
      
      if (rule.type && value && typeof value !== rule.type) {
        errors.push(\`\${field} must be a \${rule.type}\`);
      }
      
      if (rule.min !== undefined && value < rule.min) {
        errors.push(\`\${field} must be at least \${rule.min}\`);
      }
      
      if (rule.max !== undefined && value > rule.max) {
        errors.push(\`\${field} must be no more than \${rule.max}\`);
      }
    });
    
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    
    next();
  };
};

// Usage:
const userValidator = createValidator({
  name: { required: true, type: 'string' },
  email: { required: true, type: 'string' },
  age: { type: 'number', min: 0, max: 150 }
});

app.post('/users', userValidator, (req, res) => {
  res.json({ message: 'User created', user: req.body });
});`},{id:"ex-3-5",title:"Rate Limiting Middleware",description:"Prevent API abuse with rate limiting",difficulty:"Advanced",task:`Create a simple rate limiting middleware that:
1. Limits requests per IP address
2. Allows X requests per Y minutes
3. Returns 429 status when limit exceeded
4. Includes retry-after header
5. Displays remaining requests in response header`,hint:"Use a Map to store request counts per IP. Store { count, resetTime }",solution:`const createRateLimiter = (maxRequests = 5, windowMs = 60000) => {
  const requestMap = new Map();
  
  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    // Get or create rate limit entry
    let rateLimitData = requestMap.get(ip);
    
    if (!rateLimitData || now > rateLimitData.resetTime) {
      // Window expired or first request
      rateLimitData = {
        count: 1,
        resetTime: now + windowMs
      };
    } else {
      // Within current window
      rateLimitData.count++;
    }
    
    requestMap.set(ip, rateLimitData);
    
    const remaining = Math.max(0, maxRequests - rateLimitData.count);
    const resetAfter = Math.ceil((rateLimitData.resetTime - now) / 1000);
    
    // Set headers
    res.set('X-RateLimit-Limit', maxRequests);
    res.set('X-RateLimit-Remaining', remaining);
    res.set('X-RateLimit-Reset', rateLimitData.resetTime);
    
    if (rateLimitData.count > maxRequests) {
      return res.status(429).json({
        error: 'Too many requests',
        retryAfter: resetAfter,
        message: \`You've exceeded the rate limit. Try again in \${resetAfter} seconds.\`
      });
    }
    
    next();
  };
};

// Usage: Allow 10 requests per 5 minutes
const limiter = createRateLimiter(10, 5 * 60 * 1000);
app.use(limiter);`},{id:"ex-3-6",title:"Conditional Middleware Chain",description:"Apply middleware based on conditions",difficulty:"Advanced",task:`Create middleware that:
1. Applies authentication only to routes starting with /api/protected
2. Applies rate limiting to /api routes but not /public
3. Applies logging to all routes
4. Can be easily configured

Create a flexible middleware system that routes to different validators based on content type.`,hint:"Use req.path to check the route. Middleware stack can be conditional.",solution:`// Route-specific middleware wrapper
const ifPath = (pattern, middleware) => {
  return (req, res, next) => {
    if (req.path.startsWith(pattern)) {
      return middleware(req, res, next);
    }
    next();
  };
};

// Global logging (applies to all)
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.path}\`);
  next();
});

// Rate limiting only for /api routes
app.use(ifPath('/api', createRateLimiter(100, 60000)));

// Authentication only for protected routes
app.use(ifPath('/api/protected', authenticate));

// Different validators based on route
const handleValidation = (req, res, next) => {
  if (req.path.startsWith('/api/users')) {
    return userValidator(req, res, next);
  }
  if (req.path.startsWith('/api/products')) {
    return productValidator(req, res, next);
  }
  next();
};

app.use(ifPath('/api', handleValidation));

// Public routes (no auth required)
app.get('/public/info', (req, res) => {
  res.json({ message: 'Public data' });
});

// Protected API routes
app.get('/api/protected/data', authenticate, (req, res) => {
  res.json({ user: req.user, data: 'secret' });
});`},{id:"ex-3-7",title:"Custom Error Class & Error Middleware Integration",description:"Create an organized error handling system",difficulty:"Advanced",task:`Create:
1. Custom Error classes (ValidationError, NotFoundError, etc.)
2. Middleware that catches and properly formats errors
3. Async error wrapper to catch promise rejections
4. Proper HTTP status codes for different error types`,solution:`// Custom Error classes
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(\`\${resource} not found\`, 404);
    this.name = 'NotFoundError';
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
    this.name = 'UnauthorizedError';
  }
}

// Async error wrapper
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: {
        name: err.name,
        message: err.message,
        statusCode: err.statusCode
      }
    });
  }
  
  // Unknown error
  res.status(500).json({
    error: {
      message: 'Internal Server Error',
      statusCode: 500
    }
  });
});

// Usage examples
app.post('/users', asyncHandler(async (req, res, next) => {
  if (!req.body.email) {
    throw new ValidationError('Email is required');
  }
  
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    throw new ValidationError('Email already exists');
  }
  
  res.json({ message: 'User created' });
}));

app.get('/users/:id', asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new NotFoundError('User');
  }
  res.json(user);
}));`}]},{id:"module-4",title:"Module 4: Routing & Route Parameters",duration:"1 hour 30 minutes",objectives:["Organize routes with Express Router","Handle route parameters and query strings","Implement route validation"],lessons:[{id:"express-router",title:"Using Express Router",type:"example",content:{description:"Organize routes into separate modules",code:`// routes/users.js
const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

module.exports = router;

// In main app.js
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);`}},{id:"route-parameters",title:"Route Parameters & Query Strings",type:"example",content:{description:"Working with dynamic routes and query parameters",code:`// Route parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  res.json({
    userId: req.params.userId,
    postId: req.params.postId
  });
});

// Query parameters
app.get('/search', (req, res) => {
  const { q, page = 1, limit = 10 } = req.query;
  res.json({
    query: q,
    page: parseInt(page),
    limit: parseInt(limit),
    results: [] // your search results here
  });
});

// Optional parameters and regex
app.get('/products/:category?', (req, res) => {
  const category = req.params.category || 'all';
  res.json({ category });
});`}},{id:"route-validation",title:"Route Validation",type:"example",content:{description:"Validate route parameters and request data",code:`// Validation middleware
const validateUser = (req, res, next) => {
  const { name, email, age } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  if (age && (age < 0 || age > 150)) {
    return res.status(400).json({ error: 'Age must be between 0 and 150' });
  }
  
  next();
};

// Using validation
app.post('/users', validateUser, (req, res) => {
  // If we reach here, validation passed
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});`}}],exercises:[{id:"ex-4-1",title:"Blog API with Router",description:"Create a blog API with organized routing",task:`Create a blog system with:
- Separate routers for posts and comments
- Nested routes: /posts/:postId/comments
- Query parameters for filtering and pagination
- Input validation for all routes`,solution:`// routes/posts.js
const express = require('express');
const router = express.Router();

let posts = [];
let comments = [];

// Posts routes
router.get('/', (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const results = posts.slice(startIndex, endIndex);
  res.json({
    posts: results,
    currentPage: parseInt(page),
    totalPages: Math.ceil(posts.length / limit)
  });
});

router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  
  const post = { id: Date.now(), title, content, createdAt: new Date() };
  posts.push(post);
  res.status(201).json(post);
});

// Comments routes nested under posts
router.get('/:postId/comments', (req, res) => {
  const postComments = comments.filter(c => c.postId === parseInt(req.params.postId));
  res.json(postComments);
});

router.post('/:postId/comments', (req, res) => {
  const { content, author } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }
  
  const comment = {
    id: Date.now(),
    postId: parseInt(req.params.postId),
    content,
    author: author || 'Anonymous',
    createdAt: new Date()
  };
  
  comments.push(comment);
  res.status(201).json(comment);
});

module.exports = router;`}]},{id:"module-5",title:"Module 5: Template Engines & Views",duration:"1 hour",objectives:["Understand template engines","Set up EJS template engine","Create dynamic views"],lessons:[{id:"template-engines",title:"Introduction to Template Engines",type:"theory",content:{paragraphs:["Template engines enable you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.","Popular template engines: EJS, Pug, Handlebars"]}},{id:"ejs-setup",title:"Setting up EJS",type:"example",content:{description:"Configure EJS as template engine",steps:[{text:"Install EJS:",code:"npm install ejs"}],code:`// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', './views'); // folder where templates are stored

// Basic route rendering a template
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
    message: 'Welcome to our website!',
    users: ['Alice', 'Bob', 'Charlie']
  });
});`}},{id:"ejs-templates",title:"Creating EJS Templates",type:"example",content:{description:"Create dynamic templates with EJS",code:`<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>
    
    <!-- Loop through users -->
    <ul>
        <% users.forEach(user => { %>
            <li><%= user %></li>
        <% }); %>
    </ul>
    
    <!-- Conditionals -->
    <% if (users.length > 0) { %>
        <p>There are <%= users.length %> users</p>
    <% } else { %>
        <p>No users found</p>
    <% } %>
    
    <!-- Include partials -->
    <%- include('partials/footer') %>
</body>
</html>`}}],exercises:[{id:"ex-5-1",title:"Blog Frontend with EJS",description:"Create a frontend for the blog using EJS templates",task:`Create EJS templates for:
- Homepage showing recent posts
- Single post page with comments
- Layout template with header and footer
- Partial for post preview

Use the blog API from previous module as data source.`,solution:`<!-- views/layout.ejs -->
<!DOCTYPE html>
<html>
<head>
    <title>My Blog - <%= title %></title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <header>
        <h1>My Awesome Blog</h1>
        <nav>
            <a href="/">Home</a>
        </nav>
    </header>
    <main>
        <%- body %>
    </main>
    <footer>
        <p>&copy; 2024 My Blog</p>
    </footer>
</body>
</html>

<!-- views/index.ejs -->
<% layout('layout') -%>

<h2>Recent Posts</h2>
<% if (posts.length > 0) { %>
    <div class="posts">
        <% posts.forEach(post => { %>
            <article class="post">
                <h3><a href="/posts/<%= post.id %>"><%= post.title %></a></h3>
                <p><%= post.content.substring(0, 100) %>...</p>
                <time><%= new Date(post.createdAt).toLocaleDateString() %></time>
            </article>
        <% }); %>
    </div>
<% } else { %>
    <p>No posts yet. Be the first to write one!</p>
<% } %>`}]},{id:"module-6",title:"Module 6: Database Integration",duration:"2 hours",objectives:["Connect to MongoDB with Mongoose","Define schemas and models","Perform CRUD operations"],lessons:[{id:"mongodb-setup",title:"MongoDB & Mongoose Setup",type:"practical",content:{steps:[{text:"Install Mongoose:",code:"npm install mongoose"},{text:"Connect to MongoDB:",code:`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});`}]}},{id:"mongoose-schemas",title:"Defining Schemas and Models",type:"example",content:{description:"Create Mongoose schemas and models",code:`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);`}},{id:"crud-operations",title:"CRUD Operations with Mongoose",type:"example",content:{description:"Perform Create, Read, Update, Delete operations",code:`// Create
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read one
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}}],exercises:[{id:"ex-6-1",title:"Task Manager with MongoDB",description:"Create a full task management API with MongoDB",task:`Build a task manager with:
- Task model with title, description, status, dueDate, priority
- CRUD operations for tasks
- Filtering by status and priority
- Sorting by due date and priority
- Input validation with Mongoose`,solution:`const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { 
    type: String, 
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  dueDate: Date,
  createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

// Get tasks with filtering and sorting
app.get('/tasks', async (req, res) => {
  try {
    const { status, priority, sortBy = 'createdAt' } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    
    const tasks = await Task.find(filter).sort({ [sortBy]: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}]},{id:"module-7",title:"Module 7: Authentication & Security",duration:"1 hour 30 minutes",objectives:["Implement user authentication","Use JWT for stateless authentication","Add security best practices"],lessons:[{id:"jwt-authentication",title:"JWT Authentication",type:"example",content:{steps:[{text:"Install JWT package:",code:"npm install jsonwebtoken bcryptjs"}],code:`const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'your-secret-key';

// User registration
app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({ token, user: { id: user._id, name: user.name, email } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}},{id:"auth-middleware",title:"Authentication Middleware",type:"example",content:{description:"Create middleware to protect routes",code:`const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token, authorization denied' });
    }
    
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(401).json({ error: 'Token is not valid' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token is not valid' });
  }
};

// Protected route
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});`}}],exercises:[{id:"ex-7-1",title:"Secure Blog API",description:"Add authentication to the blog API",task:`Add authentication to your blog:
- Users must register/login to create posts
- Users can only edit/delete their own posts
- Add author information to posts
- Implement password reset functionality`,solution:`// Add author to post schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create post (protected)
app.post('/posts', authMiddleware, async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.user._id
    });
    
    await post.save();
    await post.populate('author', 'name email');
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update post (only author)
app.put('/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Not authorized to update this post' });
    }
    
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('author', 'name email');
    
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`}]},{id:"module-8",title:"Module 8: Deployment & Best Practices",duration:"1 hour",objectives:["Prepare app for production","Environment configuration","Deploy to cloud platform"],lessons:[{id:"environment-config",title:"Environment Configuration",type:"example",content:{description:"Use environment variables for configuration",code:`// Install dotenv for development
npm install dotenv

// Create .env file
JWT_SECRET=your-super-secret-key
MONGODB_URI=mongodb://localhost:27017/your-database
PORT=3000
NODE_ENV=development

// In your app
require('dotenv').config(); // at top of file

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// Use in your app
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});`}},{id:"production-best-practices",title:"Production Best Practices",type:"theory",content:{keyPoints:["Use environment variables for configuration","Enable CORS for frontend communication","Use helmet for security headers","Implement rate limiting","Add proper logging","Use process managers like PM2"]}},{id:"cors-helmet",title:"CORS & Security Headers",type:"example",content:{steps:[{text:"Install security packages:",code:"npm install cors helmet"}],code:`const cors = require('cors');
const helmet = require('helmet');

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);`}}],exercises:[{id:"ex-8-1",title:"Production Ready App",description:"Prepare your Express app for production",task:`Make your app production ready:
1. Add environment configuration
2. Implement security middleware
3. Add error handling
4. Create production build script
5. Create PM2 ecosystem file`,solution:`// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-express-app',
    script: './index.js',
    instances: 'max',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    }
  }]
};

// package.json scripts
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "production": "pm2 start ecosystem.config.js --env production"
}

// Production error handling
app.use((err, req, res, next) => {
  // Don't leak error details in production
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).json({
      error: 'Internal Server Error'
    });
  }
  
  // Detailed error in development
  res.status(500).json({
    error: err.message,
    stack: err.stack
  });
});`}],finalProject:{title:"Build a Complete Blog Platform",description:"Combine all modules to build a full-stack blog application",requirements:["User authentication and authorization","CRUD operations for blog posts and comments","MongoDB database with proper schemas","RESTful API with proper error handling","EJS templates for frontend","Production-ready configuration","Security best practices implemented"],bonus:["Add file upload for post images","Implement search functionality","Add pagination for posts","Create admin dashboard","Add social media sharing"]}}]},$m={"git-and-github":{"getting-started":100,"basic-commands":75,"branching-workflows":25},"node-and-express":{"module-1":100,"module-2":80,"module-3":40,"module-4":20,"module-5":0,"module-6":0,"module-7":0,"module-8":0}};function bm({isOpen:e,title:t,children:r,onClose:n}){return P.useEffect(()=>{const s=o=>{o.key==="Escape"&&n()};return e&&window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[e,n]),e?u.jsxs("div",{className:"fixed inset-0 z-1000 flex items-center justify-center",children:[u.jsx("div",{className:"absolute inset-0 bg-black/40",onClick:n,"aria-hidden":"true"}),u.jsxs("div",{className:"relative bg-white rounded-xl shadow-lg max-w-lg w-full mx-4",children:[u.jsxs("div",{className:"p-4 border-b border-slate-100 flex items-center justify-between",children:[u.jsx("div",{className:"text-lg font-semibold",children:t}),u.jsx("button",{onClick:n,className:"text-slate-500 hover:text-slate-700 rounded p-1","aria-label":"Close modal",children:"✕"})]}),u.jsx("div",{className:"p-4 text-sm text-slate-700",children:r}),u.jsx("div",{className:"p-4 border-t border-slate-100 flex justify-end",children:u.jsx("button",{onClick:n,className:"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm",children:"Close"})})]})]}):null}function Es(){const{slug:e}=ci(),t=Jc(),r=Ht(),n=$m;let s=null;e===ze.slug?s=ze:e===De.slug&&(s=De);const o=y=>{var E;const S=e??"",j=i(S);return j&&typeof j[y]=="number"?j[y]:((E=n[S])==null?void 0:E[y])||0},l=y=>{const S=i(y);if(S){const I=Object.values(S);return I.length===0?0:Math.round(I.reduce((T,z)=>T+z,0)/I.length)}const j=n[y];if(!j)return 0;const E=Object.values(j);return E.length===0?0:Math.round(E.reduce((I,T)=>I+T,0)/E.length)};function i(y){try{const S=localStorage.getItem(`progress-${y}`);if(S){const E=JSON.parse(S);if(Array.isArray(E)){const I=E;let T=null;if(y===ze.slug?T=ze:y===De.slug&&(T=De),T&&T.sections){const z={};return T.sections.forEach(X=>{var Pt,Fe;const oe=(((Pt=X.lessons)==null?void 0:Pt.length)||0)+(((Fe=X.exercises)==null?void 0:Fe.length)||0);if(oe===0){z[X.id]=0;return}let We=0;(X.lessons||[]).forEach(Tt=>{I.includes(Tt.id)&&We++}),(X.exercises||[]).forEach(Tt=>{I.includes(Tt.id)&&We++}),z[X.id]=Math.round(We/oe*100)}),z}}if(E&&typeof E=="object"&&Object.values(E).every(T=>typeof T=="number"))return E}const j=localStorage.getItem(`progressItems-${y}`);if(j){const E=JSON.parse(j);if(Array.isArray(E)){let I=null;if(y===ze.slug?I=ze:y===De.slug&&(I=De),I&&I.sections){const T={};return I.sections.forEach(z=>{var We,Pt;const X=(((We=z.lessons)==null?void 0:We.length)||0)+(((Pt=z.exercises)==null?void 0:Pt.length)||0);if(X===0){T[z.id]=0;return}let oe=0;(z.lessons||[]).forEach(Fe=>{E.includes(Fe.id)&&oe++}),(z.exercises||[]).forEach(Fe=>{E.includes(Fe.id)&&oe++}),T[z.id]=Math.round(oe/X*100)}),T}}}}catch(S){console.warn("Failed to read stored progress",S)}return null}const a=(y,S)=>S===100?"✅":S>0?"📖":["🔰","🚀","🛠️","🗺️","🎨","💾","🔒","☁️"][y]||"📚",[d,h]=Ur.useState(!1),[m,g]=Ur.useState(null),[w,k]=Ur.useState(null),v=(y,S)=>{g(y),k(S),h(!0)},C=()=>{try{if(!e)return v("No course selected","No course selected to save progress.");let y=[];const S=localStorage.getItem(`progressItems-${e}`);if(S)try{const j=JSON.parse(S);Array.isArray(j)&&(y=j)}catch{}if(y.length===0){const j=localStorage.getItem(`progress-${e}`);if(j)try{const E=JSON.parse(j);Array.isArray(E)&&(y=E)}catch{}}if(s&&y.length>0){const j={};s.sections.forEach(E=>{var z,X;const I=(((z=E.lessons)==null?void 0:z.length)||0)+(((X=E.exercises)==null?void 0:X.length)||0);if(I===0){j[E.id]=0;return}let T=0;(E.lessons||[]).forEach(oe=>{y.includes(oe.id)&&T++}),(E.exercises||[]).forEach(oe=>{y.includes(oe.id)&&T++}),j[E.id]=Math.round(T/I*100)}),localStorage.setItem(`progress-${e}`,JSON.stringify(j))}else if(y.length===0){const j={};s&&s.sections.forEach(E=>{j[E.id]=0}),localStorage.setItem(`progress-${e}`,JSON.stringify(j))}localStorage.setItem(`progressItems-${e}`,JSON.stringify(y)),v("Progress saved","Progress saved locally.")}catch(y){console.error(y),v("Error","Failed to save progress.")}},p=()=>{if(!e)return v("No course selected","Select a course to take notes.");v("Notes","Notes feature coming soon! For now, focus on the course content.")},c=()=>{if(!e)return v("No course selected","Select a course first.");const y=l(e);v("Course Progress",`Your progress in this course: ${y}% complete!`)},f=y=>{e&&(r.pathname.includes(`/courses/${e}`)||t(`/courses/${e}`),setTimeout(()=>{const S=document.getElementById(y);S&&(S.scrollIntoView({behavior:"smooth",block:"start"}),S.classList.add("bg-yellow-50","border-yellow-200"),setTimeout(()=>{S.classList.remove("bg-yellow-50","border-yellow-200")},2e3))},100))},x=y=>r.hash===`#${y}`;return u.jsx("aside",{className:"hidden md:block md:col-span-1",children:u.jsx("nav",{className:"sticky top-16",children:u.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-card h-[calc(100vh-4rem)] overflow-auto sidebar-scroll w-full",children:[u.jsx(bm,{isOpen:d,title:m,onClose:()=>h(!1),children:w}),u.jsxs("div",{className:"mb-6",children:[u.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-3 flex items-center gap-2",children:[u.jsx("span",{children:"📁"}),"My Courses"]}),u.jsx("ul",{className:"space-y-2",children:Cr.map(y=>{const S=l(y.slug);return y.slug,u.jsx("li",{children:u.jsxs(Om,{to:`/courses/${y.slug}`,className:({isActive:j})=>`block text-sm px-3 py-2 rounded-lg border transition-all group ${j?"bg-primary-50 border-primary-200 text-primary-700 font-semibold shadow-sm":"border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"}`,children:[u.jsxs("div",{className:"flex justify-between items-center mb-1",children:[u.jsx("span",{className:"font-medium truncate",children:y.title}),S>0&&u.jsxs("span",{className:"text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full flex-shrink-0",children:[S,"%"]})]}),u.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500 mb-2",children:[u.jsx("span",{className:`px-1.5 py-0.5 rounded ${y.level==="Beginner"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`,children:y.level}),u.jsx("span",{children:y.duration})]}),u.jsx("div",{className:"w-full bg-slate-200 rounded-full h-1.5",children:u.jsx("div",{className:"bg-primary-500 h-1.5 rounded-full transition-all progress-bar",style:{width:`${S}%`}})})]})},y.id)})})]}),s&&u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("h4",{className:"text-sm font-bold text-slate-800 flex items-center gap-2",children:[u.jsx("span",{children:"📑"}),"Course Content"]}),u.jsxs("span",{className:"text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded",children:[s.totalModules," modules"]})]}),u.jsx("ul",{className:"space-y-2",children:s.sections.map((y,S)=>{const j=o(y.id),E=x(y.id);return u.jsxs("li",{children:[u.jsx("button",{onClick:()=>f(y.id),className:`w-full text-left text-sm px-3 py-3 rounded-lg border transition-all group ${E?"bg-primary-50 border-primary-200 text-primary-700 font-semibold shadow-sm":"border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"}`,children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`w-6 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${j===100?"bg-green-100 text-green-600":j>0?"bg-blue-100 text-blue-600":"bg-slate-100 text-slate-400"}`,children:a(S,j)}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("div",{className:"font-semibold text-slate-800 group-hover:text-slate-900 truncate",children:y.title}),u.jsxs("div",{className:"flex items-center gap-3 mt-1 text-xs text-slate-500 flex-wrap",children:[u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx("span",{children:"⏱️"}),y.duration]}),u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx("span",{children:"📚"}),y.lessons.length," lessons"]}),y.exercises&&u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx("span",{children:"💪"}),y.exercises.length," exercises"]})]}),j>0&&u.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[u.jsx("div",{className:"flex-1 bg-slate-200 rounded-full h-1.5",children:u.jsx("div",{className:`h-1.5 rounded-full transition-all progress-bar ${j===100?"bg-green-500":"bg-primary-500"}`,style:{width:`${j}%`}})}),u.jsxs("span",{className:`text-xs font-medium ${j===100?"text-green-600":"text-primary-600"}`,children:[j,"%"]})]}),j===0&&u.jsxs("div",{className:"flex items-center gap-1 mt-1 text-xs text-slate-400",children:[u.jsx("span",{children:"👉"}),"Start learning"]})]})]})}),E&&y.objectives&&u.jsxs("div",{className:"ml-11 mt-2 p-2 bg-slate-50 rounded-lg border border-slate-200",children:[u.jsx("h5",{className:"text-xs font-semibold text-slate-700 mb-1",children:"What you'll learn:"}),u.jsxs("ul",{className:"text-xs text-slate-600 space-y-0.5",children:[y.objectives.slice(0,2).map((I,T)=>u.jsxs("li",{className:"flex items-start gap-1",children:[u.jsx("span",{className:"text-primary-500 mt-0.5",children:"•"}),u.jsx("span",{className:"truncate",children:I})]},T)),y.objectives.length>2&&u.jsxs("li",{className:"text-slate-500 text-xs",children:["+",y.objectives.length-2," more objectives"]})]})]})]},y.id)})}),u.jsx("div",{className:"mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200",children:u.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"font-semibold text-slate-700",children:s.totalLessons}),u.jsx("div",{className:"text-slate-500",children:"Lessons"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"font-semibold text-slate-700",children:s.totalExercises}),u.jsx("div",{className:"text-slate-500",children:"Exercises"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"font-semibold text-slate-700",children:s.totalProjects}),u.jsx("div",{className:"text-slate-500",children:"Projects"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"font-semibold text-slate-700",children:l(e)}),u.jsx("div",{className:"text-slate-500",children:"Complete"})]})]})})]}),u.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-200",children:[u.jsx("h4",{className:"text-sm font-bold text-slate-800 mb-3",children:"Quick Actions"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("button",{onClick:C,className:"w-full text-sm bg-primary-500 hover:bg-primary-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2",children:[u.jsx("span",{children:"💾"}),"Save Progress"]}),u.jsxs("button",{onClick:p,className:"w-full text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2",children:[u.jsx("span",{children:"📋"}),"Take Notes"]}),s&&u.jsxs("button",{onClick:c,className:"w-full text-sm bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2",children:[u.jsx("span",{children:"📊"}),"View Progress"]})]})]}),s&&u.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:"text-sm font-semibold text-slate-700",children:"Overall Progress"}),u.jsxs("span",{className:"text-sm font-bold text-primary-600",children:[l(e),"%"]})]}),u.jsx("div",{className:"w-full bg-slate-200 rounded-full h-2",children:u.jsx("div",{className:"bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all progress-bar",style:{width:`${l(e)}%`}})}),u.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mt-1",children:[u.jsx("span",{children:"Started"}),u.jsxs("span",{children:[l(e),"% Complete"]})]})]})]})})})}function Vm(){return u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[u.jsx(Es,{}),u.jsxs("main",{className:"md:col-span-3",children:[u.jsx("h1",{className:"text-2xl font-bold mb-4",children:"All Courses"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Cr.map(e=>u.jsx(ed,{course:e},e.id))})]})]})}function fr({code:e,className:t}){const[r,n]=P.useState(!1),s=async()=>{try{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)}catch{const l=document.createElement("textarea");l.value=e,l.style.position="fixed",l.style.left="-9999px",document.body.appendChild(l),l.select();try{document.execCommand("copy"),n(!0),setTimeout(()=>n(!1),2e3)}catch{}document.body.removeChild(l)}};return u.jsxs("div",{className:`relative rounded-md overflow-hidden ${t??""}`,children:[u.jsx("pre",{className:"bg-black text-white rounded p-3 overflow-auto whitespace-pre-wrap",children:u.jsx("code",{children:e})}),u.jsx("button",{onClick:s,"aria-label":"Copy code",className:"absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded",title:"Copy",children:u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"w-4 h-4",children:[u.jsx("path",{d:"M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("rect",{x:"8",y:"3",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),r&&u.jsx("div",{className:"absolute top-10 right-2 bg-white text-slate-900 text-xs px-2 py-1 rounded shadow",children:"Copied"})]})}function Hm(){const{slug:e}=ci(),[t,r]=P.useState(new Set),[n,s]=P.useState({}),[o,l]=P.useState({}),[i,a]=P.useState(null),d=Cr.find(v=>v.slug===e);let h=null;e==="git-and-github"&&(h=ze),e==="node-and-express"&&(h=De),P.useEffect(()=>{const v=`progressItems-${e}`,C=localStorage.getItem(v);if(C)try{const c=JSON.parse(C);if(Array.isArray(c)){r(new Set(c));return}}catch(c){console.warn("Failed to parse saved progress items:",c)}const p=localStorage.getItem(`progress-${e}`);if(p)try{const c=JSON.parse(p);if(Array.isArray(c)){r(new Set(c));return}if(c&&typeof c=="object"){const f=[];if(!Object.values(c).every(S=>typeof S=="number")){Object.keys(c).forEach(S=>{c[S]&&f.push(S)}),r(new Set(f));return}if(h){Object.keys(c).forEach(S=>{const j=c[S];if(typeof j=="number"&&j>=100){const E=h.sections.find(I=>I.id===S);E&&((E.lessons||[]).forEach(I=>f.push(I.id)),(E.exercises||[]).forEach(I=>f.push(I.id)))}}),f.length>0&&r(new Set(f));return}}r(new Set([String(c)]))}catch(c){console.warn("Failed to parse saved progress:",c)}},[e,h]);const m=v=>{const C=new Set(t);C.has(v)?C.delete(v):C.add(v),r(C);try{localStorage.setItem(`progress-${e}`,JSON.stringify([...C])),localStorage.setItem(`progressItems-${e}`,JSON.stringify([...C]))}catch{}},g=v=>{s(C=>({...C,[v]:!C[v]}))},w=(v,C,p)=>{l(c=>({...c,[`${v}-${C}`]:p}))},k=(v,C)=>{let p=0;return v?(v.forEach((c,f)=>{o[`${C}-${f}`]===c.correct&&p++}),{correct:p,total:v.length}):{correct:0,total:0}};return d?h?u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 min-h-screen",children:[u.jsx(Es,{}),u.jsxs("main",{className:"md:col-span-3 space-y-8 py-6",children:[u.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-lg border border-slate-200",children:u.jsx("div",{className:"flex items-start justify-between",children:u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("span",{className:"bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full",children:d.level}),u.jsxs("span",{className:"bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full",children:["⏱️ ",d.duration]}),u.jsxs("span",{className:"bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full",children:["📊 ",t.size," items completed"]})]}),u.jsx("h1",{className:"text-4xl font-bold text-slate-900 mb-4",children:d.title}),u.jsx("p",{className:"text-xl text-slate-600 mb-6 leading-relaxed",children:d.description}),h.prerequisites&&u.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[u.jsxs("h3",{className:"font-semibold text-yellow-800 mb-2 flex items-center gap-2",children:[u.jsx("span",{children:"📋"}),"Prerequisites"]}),u.jsx("ul",{className:"text-yellow-700 list-disc list-inside space-y-1",children:h.prerequisites.map((v,C)=>u.jsx("li",{children:v},C))})]})]})})}),u.jsx("div",{className:"space-y-8",children:h.sections.map((v,C)=>{var p,c;return u.jsxs("section",{id:v.id,className:"bg-white rounded-2xl p-8 shadow-lg border border-slate-200 scroll-mt-8",children:[u.jsx("div",{className:"flex items-start justify-between mb-8",children:u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[u.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg",children:C+1}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:v.title}),u.jsxs("div",{className:"flex items-center gap-4 mt-2 text-sm text-slate-600",children:[u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx("span",{children:"⏱️"}),v.duration]}),u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx("span",{children:"🎯"}),((p=v.lessons)==null?void 0:p.length)||0," lessons"]})]})]})]}),v.objectives&&u.jsxs("div",{className:"bg-primary-50 rounded-lg p-4 border border-primary-200",children:[u.jsxs("h3",{className:"font-semibold text-primary-900 mb-3 flex items-center gap-2",children:[u.jsx("span",{children:"🎯"}),"Learning Objectives"]}),u.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:v.objectives.map((f,x)=>u.jsxs("li",{className:"flex items-start gap-2 text-primary-700",children:[u.jsx("span",{className:"text-primary-500 mt-1",children:"✓"}),f]},x))})]})]})}),u.jsx("div",{className:"space-y-8",children:(c=v.lessons)==null?void 0:c.map((f,x)=>{var y,S,j,E,I;return u.jsx("div",{className:"border-l-4 border-primary-300 pl-6 ml-3",children:u.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[u.jsx("button",{onClick:()=>m(f.id),className:`w-7 h-7 rounded-full border-2 flex-shrink-0 mt-1 transition-all ${t.has(f.id)?"bg-green-500 border-green-500 text-white":"border-slate-300 hover:border-primary-400"}`,children:t.has(f.id)&&"✓"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[u.jsx("h3",{className:"text-xl font-semibold text-slate-800",children:f.title}),u.jsx("span",{className:`text-xs font-medium px-2 py-1 rounded-full ${f.type==="theory"?"bg-blue-100 text-blue-700":f.type==="practical"?"bg-green-100 text-green-700":"bg-purple-100 text-purple-700"}`,children:f.type})]}),u.jsxs("div",{className:"space-y-4",children:[(S=(y=f.content)==null?void 0:y.paragraphs)==null?void 0:S.map((T,z)=>u.jsx("p",{className:"text-slate-700 leading-relaxed",children:T},z)),((j=f.content)==null?void 0:j.keyPoints)&&u.jsxs("div",{className:"bg-slate-50 rounded-lg p-4",children:[u.jsx("h4",{className:"font-medium text-slate-800 mb-2",children:"Key Points:"}),u.jsx("ul",{className:"list-disc list-inside space-y-1 text-slate-700",children:f.content.keyPoints.map((T,z)=>u.jsx("li",{children:T},z))})]}),((E=f.content)==null?void 0:E.steps)&&u.jsx("div",{className:"space-y-3",children:f.content.steps.map((T,z)=>u.jsx("div",{className:"bg-slate-50 rounded-lg p-4 border border-slate-200",children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("span",{className:"w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5",children:z+1}),u.jsxs("div",{className:"flex-1",children:[u.jsx("p",{className:"text-slate-700 mb-2",children:T.text}),T.code&&u.jsx(fr,{code:T.code})]})]})},z))}),((I=f.content)==null?void 0:I.code)&&u.jsxs("div",{children:[f.content.description&&u.jsx("p",{className:"text-slate-600 mb-3",children:f.content.description}),u.jsx(fr,{code:f.content.code})]})]})]})]})},f.id)})}),v.exercises&&v.exercises.length>0&&u.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-200",children:[u.jsxs("h3",{className:"text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",children:[u.jsx("span",{className:"w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center",children:"💪"}),"Practice Exercises"]}),u.jsx("div",{className:"space-y-6",children:v.exercises.map(f=>u.jsxs("div",{className:"bg-orange-50 border border-orange-200 rounded-xl p-6",children:[u.jsxs("div",{className:"flex items-start justify-between mb-4",children:[u.jsxs("div",{children:[u.jsx("h4",{className:"text-lg font-semibold text-orange-900 mb-2",children:f.title}),u.jsx("p",{className:"text-orange-800 mb-3",children:f.description}),u.jsxs("div",{className:"bg-white rounded-lg p-4 border border-orange-300",children:[u.jsx("h5",{className:"font-medium text-orange-900 mb-2",children:"Your Task:"}),u.jsx("pre",{className:"text-slate-700 whitespace-pre-wrap text-sm",children:f.task})]})]}),u.jsx("button",{onClick:()=>m(f.id),className:`w-7 h-7 rounded-full border-2 flex-shrink-0 transition-all ${t.has(f.id)?"bg-green-500 border-green-500 text-white":"border-slate-300 hover:border-primary-400"}`,children:t.has(f.id)&&"✓"})]}),f.hint&&u.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4",children:u.jsxs("p",{className:"text-yellow-800 text-sm",children:[u.jsx("strong",{children:"💡 Hint:"})," ",f.hint]})}),u.jsx("button",{onClick:()=>g(f.id),className:"bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium",children:n[f.id]?"Hide Solution":"Show Solution"}),n[f.id]&&f.solution&&u.jsxs("div",{className:"mt-4 bg-white rounded-lg p-4 border border-orange-300",children:[u.jsx("h5",{className:"font-medium text-orange-900 mb-3",children:"Solution:"}),u.jsx(fr,{code:f.solution})]})]},f.id))})]}),v.quiz&&v.quiz.length>0&&u.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-200",children:[u.jsxs("h3",{className:"text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",children:[u.jsx("span",{className:"w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center",children:"🧠"}),"Knowledge Check"]}),u.jsxs("div",{className:"space-y-6",children:[v.quiz.map((f,x)=>u.jsxs("div",{className:"bg-white border border-slate-300 rounded-xl p-6",children:[u.jsxs("h4",{className:"text-lg font-medium text-slate-900 mb-4",children:[x+1,". ",f.question]}),u.jsx("div",{className:"space-y-2",children:f.options.map((y,S)=>u.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:border-primary-300 cursor-pointer transition-colors",children:[u.jsx("input",{type:"radio",name:`quiz-${v.id}-${x}`,value:S,onChange:()=>w(v.id,x,S),className:"text-primary-500 focus:ring-primary-500"}),u.jsx("span",{className:"text-slate-700",children:y})]},S))}),o[`${v.id}-${x}`]!==void 0&&u.jsx("div",{className:`mt-4 p-3 rounded-lg ${o[`${v.id}-${x}`]===f.correct?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:o[`${v.id}-${x}`]===f.correct?"✅ Correct! Well done.":"❌ Not quite right. Try again!"})]},x)),u.jsxs("div",{className:"bg-slate-100 rounded-xl p-6 text-center",children:[u.jsx("h4",{className:"font-semibold text-slate-900 mb-2",children:"Quiz Results"}),u.jsxs("p",{className:"text-slate-700",children:[k(v.quiz,v.id).correct," /"," ",k(v.quiz,v.id).total," correct"]})]})]})]}),v.finalProject&&u.jsx("div",{className:"mt-8 pt-6 border-t border-slate-200",children:u.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white",children:[u.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center gap-3",children:[u.jsx("span",{children:"🚀"}),v.finalProject.title]}),u.jsx("p",{className:"text-blue-100 text-lg mb-6",children:v.finalProject.description}),u.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsxs("h4",{className:"font-semibold mb-3 flex items-center gap-2",children:[u.jsx("span",{children:"📋"}),"Requirements"]}),u.jsx("ul",{className:"space-y-2",children:v.finalProject.requirements.map((f,x)=>u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx("span",{children:"•"}),u.jsx("span",{children:f})]},x))})]}),v.finalProject.bonus&&u.jsxs("div",{children:[u.jsxs("h4",{className:"font-semibold mb-3 flex items-center gap-2",children:[u.jsx("span",{children:"⭐"}),"Bonus Features"]}),u.jsx("ul",{className:"space-y-2",children:v.finalProject.bonus.map((f,x)=>u.jsxs("li",{className:"flex items-start gap-2",children:[u.jsx("span",{children:"+"}),u.jsx("span",{children:f})]},x))})]})]})]})})]},v.id)})}),u.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center",children:[u.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🎉 Course Complete!"}),u.jsx("p",{className:"text-green-100 text-lg mb-6",children:"You've finished all modules. Great job on your learning journey!"}),u.jsx("div",{className:"bg-white/20 rounded-lg p-4 inline-block",children:u.jsxs("p",{className:"font-semibold",children:["Progress: ",t.size," items completed"]})})]})]})]}):u.jsx("div",{className:"container mx-auto px-4 py-8",children:"Course content not available"}):u.jsx("div",{className:"container mx-auto px-4 py-8",children:"Course not found"})}function Wm(){const{slug:e,sectionId:t}=ci(),r=Cr.find(s=>s.slug===e);if(!r)return u.jsx("div",{children:"Course not found"});const n=e===ze.slug?ze.sections.find(s=>s.id===t):e===De.slug?De.sections.find(s=>s.id===t):null;return n?u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[u.jsx(Es,{}),u.jsxs("main",{className:"md:col-span-3 space-y-6",children:[u.jsxs("h1",{className:"text-3xl font-bold",children:[r.title," — ",n.title]}),n.paragraphs&&n.paragraphs.map((s,o)=>u.jsx("p",{className:"text-gray-700",children:s},o)),n.subsections&&n.subsections.map(s=>u.jsxs("section",{id:s.id,className:"pt-4",children:[u.jsx("h2",{className:"text-2xl font-semibold mb-2",children:s.title}),s.description&&u.jsx("p",{className:"text-sm text-gray-600 mb-2",children:s.description}),s.steps&&u.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-800",children:s.steps.map((o,l)=>u.jsxs("li",{className:"mb-2",children:[o.os?u.jsxs(u.Fragment,{children:[u.jsxs("strong",{children:[o.os,":"]})," ",o.text]}):o.text,o.code&&u.jsx("div",{className:"mt-2",children:u.jsx(fr,{code:o.code})})]},l))}),s.code&&u.jsx("div",{className:"mt-2",children:u.jsx(fr,{code:s.code})}),"verify"in s&&s.verify&&u.jsx("div",{className:"mt-2",children:u.jsx(fr,{code:s.verify})})]},s.id)),n.items&&u.jsx("ul",{className:"list-disc pl-5 mt-2 text-gray-700",children:n.items.map((s,o)=>u.jsx("li",{dangerouslySetInnerHTML:{__html:s}},o))})]})]}):u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[u.jsx(Es,{}),u.jsx("main",{className:"md:col-span-3",children:u.jsx("h2",{className:"text-2xl font-semibold",children:"Section not found"})})]})}function Gm(){return u.jsx(jm,{children:u.jsxs(Gt,{path:"/",element:u.jsx(Fm,{}),children:[u.jsx(Gt,{index:!0,element:u.jsx(Bm,{})}),u.jsx(Gt,{path:"courses",element:u.jsx(Vm,{})}),u.jsx(Gt,{path:"courses/:slug",element:u.jsx(Hm,{})}),u.jsx(Gt,{path:"courses/:slug/:sectionId",element:u.jsx(Wm,{})})]})})}const Qm="/express-course/";Fc(document.getElementById("root")).render(u.jsx(Ur.StrictMode,{children:u.jsx(Im,{basename:Qm,children:u.jsx(Gm,{})})}));(function(){try{const t=r=>r?r===ze.slug?ze:r===De.slug?De:null:null;Cr.forEach(r=>{const n=r.slug;if(!n)return;const s=localStorage.getItem(`progressItems-${n}`);if(s)try{const o=JSON.parse(s);if(Array.isArray(o)){const l=t(n);if(l&&l.sections){const i={};l.sections.forEach(a=>{var h,m;const d=(((h=a.lessons)==null?void 0:h.length)||0)+(((m=a.exercises)==null?void 0:m.length)||0);if(d===0)i[a.id]=0;else{let g=0;(a.lessons||[]).forEach(w=>{o.includes(w.id)&&g++}),(a.exercises||[]).forEach(w=>{o.includes(w.id)&&g++}),i[a.id]=Math.round(g/d*100)}}),localStorage.setItem(`progress-${n}`,JSON.stringify(i))}}}catch{}else{const o=localStorage.getItem(`progress-${n}`);if(o)try{const l=JSON.parse(o);if(Array.isArray(l)){localStorage.setItem(`progressItems-${n}`,JSON.stringify(l));const i=t(n);if(i&&i.sections){const a={};i.sections.forEach(d=>{var m,g;const h=(((m=d.lessons)==null?void 0:m.length)||0)+(((g=d.exercises)==null?void 0:g.length)||0);if(h===0)a[d.id]=0;else{let w=0;(d.lessons||[]).forEach(k=>{l.includes(k.id)&&w++}),(d.exercises||[]).forEach(k=>{l.includes(k.id)&&w++}),a[d.id]=Math.round(w/h*100)}}),localStorage.setItem(`progress-${n}`,JSON.stringify(a))}}}catch{}}})}catch(t){console.warn("Progress normalization failed:",t)}})();
