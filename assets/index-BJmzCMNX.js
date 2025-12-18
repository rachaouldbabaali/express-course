function rd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(n,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rl={exports:{}},bs={},Tl={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gn=Symbol.for("react.element"),sd=Symbol.for("react.portal"),od=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ud=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),pd=Symbol.for("react.memo"),md=Symbol.for("react.lazy"),pa=Symbol.iterator;function fd(e){return e===null||typeof e!="object"?null:(e=pa&&e[pa]||e["@@iterator"],typeof e=="function"?e:null)}var Il={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Al=Object.assign,Ll={};function Sr(e,t,r){this.props=e,this.context=t,this.refs=Ll,this.updater=r||Il}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ml(){}Ml.prototype=Sr.prototype;function gi(e,t,r){this.props=e,this.context=t,this.refs=Ll,this.updater=r||Il}var yi=gi.prototype=new Ml;yi.constructor=gi;Al(yi,Sr.prototype);yi.isPureReactComponent=!0;var ma=Array.isArray,ql=Object.prototype.hasOwnProperty,vi={current:null},Dl={key:!0,ref:!0,__self:!0,__source:!0};function Ol(e,t,r){var n,s={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ql.call(t,n)&&!Dl.hasOwnProperty(n)&&(s[n]=t[n]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)s[n]===void 0&&(s[n]=l[n]);return{$$typeof:gn,type:e,key:o,ref:i,props:s,_owner:vi.current}}function hd(e,t){return{$$typeof:gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===gn}function gd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var fa=/\/+/g;function Vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gd(""+e.key):t.toString(36)}function Fn(e,t,r,n,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case gn:case sd:i=!0}}if(i)return i=e,s=s(i),e=n===""?"."+Vs(i,0):n,ma(s)?(r="",e!=null&&(r=e.replace(fa,"$&/")+"/"),Fn(s,t,r,"",function(d){return d})):s!=null&&(xi(s)&&(s=hd(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(fa,"$&/")+"/")+e)),t.push(s)),1;if(i=0,n=n===""?".":n+":",ma(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+Vs(o,l);i+=Fn(o,t,r,u,s)}else if(u=fd(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+Vs(o,l++),i+=Fn(o,t,r,u,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function jn(e,t,r){if(e==null)return e;var n=[],s=0;return Fn(e,n,"","",function(o){return t.call(r,o,s++)}),n}function yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Bn={transition:null},vd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Bn,ReactCurrentOwner:vi};function Ul(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:jn,forEach:function(e,t,r){jn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return jn(e,function(){t++}),t},toArray:function(e){return jn(e,function(t){return t})||[]},only:function(e){if(!xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Sr;M.Fragment=od;M.Profiler=ad;M.PureComponent=gi;M.StrictMode=id;M.Suspense=dd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vd;M.act=Ul;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Al({},e.props),s=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=vi.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)ql.call(t,u)&&!Dl.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:gn,type:e.type,key:s,ref:o,props:n,_owner:i}};M.createContext=function(e){return e={$$typeof:ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ld,_context:e},e.Consumer=e};M.createElement=Ol;M.createFactory=function(e){var t=Ol.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:cd,render:e}};M.isValidElement=xi;M.lazy=function(e){return{$$typeof:md,_payload:{_status:-1,_result:e},_init:yd}};M.memo=function(e,t){return{$$typeof:pd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Bn.transition;Bn.transition={};try{e()}finally{Bn.transition=t}};M.unstable_act=Ul;M.useCallback=function(e,t){return pe.current.useCallback(e,t)};M.useContext=function(e){return pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};M.useEffect=function(e,t){return pe.current.useEffect(e,t)};M.useId=function(){return pe.current.useId()};M.useImperativeHandle=function(e,t,r){return pe.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return pe.current.useMemo(e,t)};M.useReducer=function(e,t,r){return pe.current.useReducer(e,t,r)};M.useRef=function(e){return pe.current.useRef(e)};M.useState=function(e){return pe.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return pe.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return pe.current.useTransition()};M.version="18.3.1";Tl.exports=M;var E=Tl.exports;const _r=nd(E),xd=rd({__proto__:null,default:_r},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=E,kd=Symbol.for("react.element"),Sd=Symbol.for("react.fragment"),Cd=Object.prototype.hasOwnProperty,jd=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nd={key:!0,ref:!0,__self:!0,__source:!0};function _l(e,t,r){var n,s={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Cd.call(t,n)&&!Nd.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:kd,type:e,key:o,ref:i,props:s,_owner:jd.current}}bs.Fragment=Sd;bs.jsx=_l;bs.jsxs=_l;Rl.exports=bs;var a=Rl.exports,zl={exports:{}},Ce={},Fl={exports:{}},Bl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,A){var L=T.length;T.push(A);e:for(;0<L;){var G=L-1>>>1,Z=T[G];if(0<s(Z,A))T[G]=A,T[L]=Z,L=G;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var A=T[0],L=T.pop();if(L!==A){T[0]=L;e:for(var G=0,Z=T.length,Sn=Z>>>1;G<Sn;){var Tt=2*(G+1)-1,$s=T[Tt],It=Tt+1,Cn=T[It];if(0>s($s,L))It<Z&&0>s(Cn,$s)?(T[G]=Cn,T[It]=L,G=It):(T[G]=$s,T[Tt]=L,G=Tt);else if(It<Z&&0>s(Cn,L))T[G]=Cn,T[It]=L,G=It;else break e}}return A}function s(T,A){var L=T.sortIndex-A.sortIndex;return L!==0?L:T.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var u=[],d=[],h=1,f=null,v=3,k=!1,S=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var A=r(d);A!==null;){if(A.callback===null)n(d);else if(A.startTime<=T)n(d),A.sortIndex=A.expirationTime,t(u,A);else break;A=r(d)}}function g(T){if(C=!1,p(T),!S)if(r(u)!==null)S=!0,Fe(x);else{var A=r(d);A!==null&&Rt(g,A.startTime-T)}}function x(T,A){S=!1,C&&(C=!1,m(j),j=-1),k=!0;var L=v;try{for(p(A),f=r(u);f!==null&&(!(f.expirationTime>A)||T&&!D());){var G=f.callback;if(typeof G=="function"){f.callback=null,v=f.priorityLevel;var Z=G(f.expirationTime<=A);A=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===r(u)&&n(u),p(A)}else n(u);f=r(u)}if(f!==null)var Sn=!0;else{var Tt=r(d);Tt!==null&&Rt(g,Tt.startTime-A),Sn=!1}return Sn}finally{f=null,v=L,k=!1}}var N=!1,w=null,j=-1,I=5,P=-1;function D(){return!(e.unstable_now()-P<I)}function X(){if(w!==null){var T=e.unstable_now();P=T;var A=!0;try{A=w(!0,T)}finally{A?oe():(N=!1,w=null)}}else N=!1}var oe;if(typeof c=="function")oe=function(){c(X)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Pt=Ge.port2;Ge.port1.onmessage=X,oe=function(){Pt.postMessage(null)}}else oe=function(){y(X,0)};function Fe(T){w=T,N||(N=!0,oe())}function Rt(T,A){j=y(function(){T(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,Fe(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(T){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var L=v;v=A;try{return T()}finally{v=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,A){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=v;v=T;try{return A()}finally{v=L}},e.unstable_scheduleCallback=function(T,A,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,T={id:h++,callback:A,priorityLevel:T,startTime:L,expirationTime:Z,sortIndex:-1},L>G?(T.sortIndex=L,t(d,T),r(u)===null&&T===r(d)&&(C?(m(j),j=-1):C=!0,Rt(g,L-G))):(T.sortIndex=Z,t(u,T),S||k||(S=!0,Fe(x))),T},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(T){var A=v;return function(){var L=v;v=A;try{return T.apply(this,arguments)}finally{v=L}}}})(Bl);Fl.exports=Bl;var bd=Fl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed=E,Se=bd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wl=new Set,Kr={};function $t(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Wl.add(t[e])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wo=Object.prototype.hasOwnProperty,Pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha={},ga={};function Rd(e){return wo.call(ga,e)?!0:wo.call(ha,e)?!1:Pd.test(e)?ga[e]=!0:(ha[e]=!0,!1)}function Td(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Id(e,t,r,n){if(t===null||typeof t>"u"||Td(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,r,n,s,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var wi=/[\-:]([a-z])/g;function ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wi,ki);se[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wi,ki);se[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wi,ki);se[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Si(e,t,r,n){var s=se.hasOwnProperty(t)?se[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Id(t,r,s,n)&&(r=null),n||s===null?Rd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var nt=Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nn=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ci=Symbol.for("react.strict_mode"),ko=Symbol.for("react.profiler"),Hl=Symbol.for("react.provider"),$l=Symbol.for("react.context"),ji=Symbol.for("react.forward_ref"),So=Symbol.for("react.suspense"),Co=Symbol.for("react.suspense_list"),Ni=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Vl=Symbol.for("react.offscreen"),ya=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Gs;function qr(e){if(Gs===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Gs=t&&t[1]||""}return`
`+Gs+e}var Js=!1;function Qs(e,t){if(!e||Js)return"";Js=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=n.stack.split(`
`),i=s.length-1,l=o.length-1;1<=i&&0<=l&&s[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(s[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||s[i]!==o[l]){var u=`
`+s[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=l);break}}}finally{Js=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?qr(e):""}function Ad(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function jo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Kt:return"Portal";case ko:return"Profiler";case Ci:return"StrictMode";case So:return"Suspense";case Co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $l:return(e.displayName||"Context")+".Consumer";case Hl:return(e._context.displayName||"Context")+".Provider";case ji:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ni:return t=e.displayName||null,t!==null?t:jo(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return jo(e(t))}catch{}}return null}function Ld(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jo(t);case 8:return t===Ci?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Md(e){var t=Gl(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bn(e){e._valueTracker||(e._valueTracker=Md(e))}function Jl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Gl(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function No(e,t){var r=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function va(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=St(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ql(e,t){t=t.checked,t!=null&&Si(e,"checked",t,!1)}function bo(e,t){Ql(e,t);var r=St(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Eo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Eo(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xa(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Eo(e,t,r){(t!=="number"||Zn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Dr=Array.isArray;function lr(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+St(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(b(92));if(Dr(r)){if(1<r.length)throw Error(b(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:St(r)}}function Kl(e,t){var r=St(t.value),n=St(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ka(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,Xl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qd=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(e){qd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zr[t]=zr[e]})});function Zl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||zr.hasOwnProperty(e)&&zr[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=Zl(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var Dd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(e,t){if(t){if(Dd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lo=null,ur=null,cr=null;function Sa(e){if(e=xn(e)){if(typeof Lo!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Is(t),Lo(e.stateNode,e.type,t))}}function tu(e){ur?cr?cr.push(e):cr=[e]:ur=e}function ru(){if(ur){var e=ur,t=cr;if(cr=ur=null,Sa(e),t)for(e=0;e<t.length;e++)Sa(t[e])}}function nu(e,t){return e(t)}function su(){}var Ks=!1;function ou(e,t,r){if(Ks)return e(t,r);Ks=!0;try{return nu(e,t,r)}finally{Ks=!1,(ur!==null||cr!==null)&&(su(),ru())}}function Xr(e,t){var r=e.stateNode;if(r===null)return null;var n=Is(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(b(231,t,typeof r));return r}var Mo=!1;if(Ze)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Mo=!1}function Od(e,t,r,n,s,o,i,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var Fr=!1,es=null,ts=!1,qo=null,Ud={onError:function(e){Fr=!0,es=e}};function _d(e,t,r,n,s,o,i,l,u){Fr=!1,es=null,Od.apply(Ud,arguments)}function zd(e,t,r,n,s,o,i,l,u){if(_d.apply(this,arguments),Fr){if(Fr){var d=es;Fr=!1,es=null}else throw Error(b(198));ts||(ts=!0,qo=d)}}function Vt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ca(e){if(Vt(e)!==e)throw Error(b(188))}function Fd(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return Ca(s),e;if(o===n)return Ca(s),t;o=o.sibling}throw Error(b(188))}if(r.return!==n.return)r=s,n=o;else{for(var i=!1,l=s.child;l;){if(l===r){i=!0,r=s,n=o;break}if(l===n){i=!0,n=s,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,n=s;break}if(l===n){i=!0,n=o,r=s;break}l=l.sibling}if(!i)throw Error(b(189))}}if(r.alternate!==n)throw Error(b(190))}if(r.tag!==3)throw Error(b(188));return r.stateNode.current===r?e:t}function au(e){return e=Fd(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lu(e);if(t!==null)return t;e=e.sibling}return null}var uu=Se.unstable_scheduleCallback,ja=Se.unstable_cancelCallback,Bd=Se.unstable_shouldYield,Wd=Se.unstable_requestPaint,J=Se.unstable_now,Hd=Se.unstable_getCurrentPriorityLevel,Ei=Se.unstable_ImmediatePriority,cu=Se.unstable_UserBlockingPriority,rs=Se.unstable_NormalPriority,$d=Se.unstable_LowPriority,du=Se.unstable_IdlePriority,Es=null,$e=null;function Vd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Qd,Gd=Math.log,Jd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Gd(e)/Jd|0)|0}var Pn=64,Rn=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~s;l!==0?n=Or(l):(o&=i,o!==0&&(n=Or(o)))}else i=r&~s,i!==0?n=Or(i):o!==0&&(n=Or(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ue(t),s=1<<r,n|=e[r],t&=~s;return n}function Kd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Ue(o),l=1<<i,u=s[i];u===-1?(!(l&r)||l&n)&&(s[i]=Kd(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Do(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pu(){var e=Pn;return Pn<<=1,!(Pn&4194240)&&(Pn=64),e}function Ys(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function yn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=r}function Xd(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ue(r),o=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~o}}function Pi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ue(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var O=0;function mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fu,Ri,hu,gu,yu,Oo=!1,Tn=[],mt=null,ft=null,ht=null,Zr=new Map,en=new Map,lt=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":en.delete(t.pointerId)}}function Rr(e,t,r,n,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},t!==null&&(t=xn(t),t!==null&&Ri(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ep(e,t,r,n,s){switch(t){case"focusin":return mt=Rr(mt,e,t,r,n,s),!0;case"dragenter":return ft=Rr(ft,e,t,r,n,s),!0;case"mouseover":return ht=Rr(ht,e,t,r,n,s),!0;case"pointerover":var o=s.pointerId;return Zr.set(o,Rr(Zr.get(o)||null,e,t,r,n,s)),!0;case"gotpointercapture":return o=s.pointerId,en.set(o,Rr(en.get(o)||null,e,t,r,n,s)),!0}return!1}function vu(e){var t=Mt(e.target);if(t!==null){var r=Vt(t);if(r!==null){if(t=r.tag,t===13){if(t=iu(r),t!==null){e.blockedOn=t,yu(e.priority,function(){hu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Uo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ao=n,r.target.dispatchEvent(n),Ao=null}else return t=xn(r),t!==null&&Ri(t),e.blockedOn=r,!1;t.shift()}return!0}function ba(e,t,r){Wn(e)&&r.delete(t)}function tp(){Oo=!1,mt!==null&&Wn(mt)&&(mt=null),ft!==null&&Wn(ft)&&(ft=null),ht!==null&&Wn(ht)&&(ht=null),Zr.forEach(ba),en.forEach(ba)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Oo||(Oo=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,tp)))}function tn(e){function t(s){return Tr(s,e)}if(0<Tn.length){Tr(Tn[0],e);for(var r=1;r<Tn.length;r++){var n=Tn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(mt!==null&&Tr(mt,e),ft!==null&&Tr(ft,e),ht!==null&&Tr(ht,e),Zr.forEach(t),en.forEach(t),r=0;r<lt.length;r++)n=lt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<lt.length&&(r=lt[0],r.blockedOn===null);)vu(r),r.blockedOn===null&&lt.shift()}var dr=nt.ReactCurrentBatchConfig,ss=!0;function rp(e,t,r,n){var s=O,o=dr.transition;dr.transition=null;try{O=1,Ti(e,t,r,n)}finally{O=s,dr.transition=o}}function np(e,t,r,n){var s=O,o=dr.transition;dr.transition=null;try{O=4,Ti(e,t,r,n)}finally{O=s,dr.transition=o}}function Ti(e,t,r,n){if(ss){var s=Uo(e,t,r,n);if(s===null)ao(e,t,n,os,r),Na(e,n);else if(ep(s,e,t,r,n))n.stopPropagation();else if(Na(e,n),t&4&&-1<Zd.indexOf(e)){for(;s!==null;){var o=xn(s);if(o!==null&&fu(o),o=Uo(e,t,r,n),o===null&&ao(e,t,n,os,r),o===s)break;s=o}s!==null&&n.stopPropagation()}else ao(e,t,n,null,r)}}var os=null;function Uo(e,t,r,n){if(os=null,e=bi(n),e=Mt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=iu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return os=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case Ei:return 1;case cu:return 4;case rs:case $d:return 16;case du:return 536870912;default:return 16}default:return 16}}var ct=null,Ii=null,Hn=null;function wu(){if(Hn)return Hn;var e,t=Ii,r=t.length,n,s="value"in ct?ct.value:ct.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===s[o-n];n++);return Hn=s.slice(e,1<n?1-n:void 0)}function $n(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Ea(){return!1}function je(e){function t(r,n,s,o,i){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?In:Ea,this.isPropagationStopped=Ea,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=je(Cr),vn=H({},Cr,{view:0,detail:0}),sp=je(vn),Xs,Zs,Ir,Ps=H({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Xs=e.screenX-Ir.screenX,Zs=e.screenY-Ir.screenY):Zs=Xs=0,Ir=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),Pa=je(Ps),op=H({},Ps,{dataTransfer:0}),ip=je(op),ap=H({},vn,{relatedTarget:0}),eo=je(ap),lp=H({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),up=je(lp),cp=H({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=je(cp),pp=H({},Cr,{data:0}),Ra=je(pp),mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hp[e])?!!t[e]:!1}function Li(){return gp}var yp=H({},vn,{key:function(e){if(e.key){var t=mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Li,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=je(yp),xp=H({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ta=je(xp),wp=H({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Li}),kp=je(wp),Sp=H({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cp=je(Sp),jp=H({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Np=je(jp),bp=[9,13,27,32],Mi=Ze&&"CompositionEvent"in window,Br=null;Ze&&"documentMode"in document&&(Br=document.documentMode);var Ep=Ze&&"TextEvent"in window&&!Br,ku=Ze&&(!Mi||Br&&8<Br&&11>=Br),Ia=" ",Aa=!1;function Su(e,t){switch(e){case"keyup":return bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Pp(e,t){switch(e){case"compositionend":return Cu(t);case"keypress":return t.which!==32?null:(Aa=!0,Ia);case"textInput":return e=t.data,e===Ia&&Aa?null:e;default:return null}}function Rp(e,t){if(Xt)return e==="compositionend"||!Mi&&Su(e,t)?(e=wu(),Hn=Ii=ct=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var Tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tp[e.type]:t==="textarea"}function ju(e,t,r,n){tu(n),t=is(t,"onChange"),0<t.length&&(r=new Ai("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Wr=null,rn=null;function Ip(e){qu(e,0)}function Rs(e){var t=tr(e);if(Jl(t))return e}function Ap(e,t){if(e==="change")return t}var Nu=!1;if(Ze){var to;if(Ze){var ro="oninput"in document;if(!ro){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),ro=typeof Ma.oninput=="function"}to=ro}else to=!1;Nu=to&&(!document.documentMode||9<document.documentMode)}function qa(){Wr&&(Wr.detachEvent("onpropertychange",bu),rn=Wr=null)}function bu(e){if(e.propertyName==="value"&&Rs(rn)){var t=[];ju(t,rn,e,bi(e)),ou(Ip,t)}}function Lp(e,t,r){e==="focusin"?(qa(),Wr=t,rn=r,Wr.attachEvent("onpropertychange",bu)):e==="focusout"&&qa()}function Mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rs(rn)}function qp(e,t){if(e==="click")return Rs(t)}function Dp(e,t){if(e==="input"||e==="change")return Rs(t)}function Op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:Op;function nn(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!wo.call(t,s)||!ze(e[s],t[s]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oa(e,t){var r=Da(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Da(r)}}function Eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pu(){for(var e=window,t=Zn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Zn(e.document)}return t}function qi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Up(e){var t=Pu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Eu(r.ownerDocument.documentElement,r)){if(n!==null&&qi(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(n.start,s);n=n.end===void 0?o:Math.min(n.end,s),!e.extend&&o>n&&(s=n,n=o,o=s),s=Oa(r,o);var i=Oa(r,n);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _p=Ze&&"documentMode"in document&&11>=document.documentMode,Zt=null,_o=null,Hr=null,zo=!1;function Ua(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zo||Zt==null||Zt!==Zn(n)||(n=Zt,"selectionStart"in n&&qi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Hr&&nn(Hr,n)||(Hr=n,n=is(_o,"onSelect"),0<n.length&&(t=new Ai("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Zt)))}function An(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionend:An("Transition","TransitionEnd")},no={},Ru={};Ze&&(Ru=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Ts(e){if(no[e])return no[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ru)return no[e]=t[r];return e}var Tu=Ts("animationend"),Iu=Ts("animationiteration"),Au=Ts("animationstart"),Lu=Ts("transitionend"),Mu=new Map,_a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){Mu.set(e,t),$t(t,[e])}for(var so=0;so<_a.length;so++){var oo=_a[so],zp=oo.toLowerCase(),Fp=oo[0].toUpperCase()+oo.slice(1);jt(zp,"on"+Fp)}jt(Tu,"onAnimationEnd");jt(Iu,"onAnimationIteration");jt(Au,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(Lu,"onTransitionEnd");fr("onMouseEnter",["mouseout","mouseover"]);fr("onMouseLeave",["mouseout","mouseover"]);fr("onPointerEnter",["pointerout","pointerover"]);fr("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function za(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,zd(n,t,void 0,e),e.currentTarget=null}function qu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==o&&s.isPropagationStopped())break e;za(s,l,d),o=u}else for(i=0;i<n.length;i++){if(l=n[i],u=l.instance,d=l.currentTarget,l=l.listener,u!==o&&s.isPropagationStopped())break e;za(s,l,d),o=u}}}if(ts)throw e=qo,ts=!1,qo=null,e}function _(e,t){var r=t[$o];r===void 0&&(r=t[$o]=new Set);var n=e+"__bubble";r.has(n)||(Du(t,e,2,!1),r.add(n))}function io(e,t,r){var n=0;t&&(n|=4),Du(r,e,n,t)}var Ln="_reactListening"+Math.random().toString(36).slice(2);function sn(e){if(!e[Ln]){e[Ln]=!0,Wl.forEach(function(r){r!=="selectionchange"&&(Bp.has(r)||io(r,!1,e),io(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ln]||(t[Ln]=!0,io("selectionchange",!1,t))}}function Du(e,t,r,n){switch(xu(t)){case 1:var s=rp;break;case 4:s=np;break;default:s=Ti}r=s.bind(null,t,r,e),s=void 0,!Mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function ao(e,t,r,n,s){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(i===4)for(i=n.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;i=i.return}for(;l!==null;){if(i=Mt(l),i===null)return;if(u=i.tag,u===5||u===6){n=o=i;continue e}l=l.parentNode}}n=n.return}ou(function(){var d=o,h=bi(r),f=[];e:{var v=Mu.get(e);if(v!==void 0){var k=Ai,S=e;switch(e){case"keypress":if($n(r)===0)break e;case"keydown":case"keyup":k=vp;break;case"focusin":S="focus",k=eo;break;case"focusout":S="blur",k=eo;break;case"beforeblur":case"afterblur":k=eo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=kp;break;case Tu:case Iu:case Au:k=up;break;case Lu:k=Cp;break;case"scroll":k=sp;break;case"wheel":k=Np;break;case"copy":case"cut":case"paste":k=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ta}var C=(t&4)!==0,y=!C&&e==="scroll",m=C?v!==null?v+"Capture":null:v;C=[];for(var c=d,p;c!==null;){p=c;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,m!==null&&(g=Xr(c,m),g!=null&&C.push(on(c,g,p)))),y)break;c=c.return}0<C.length&&(v=new k(v,S,null,r,h),f.push({event:v,listeners:C}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",v&&r!==Ao&&(S=r.relatedTarget||r.fromElement)&&(Mt(S)||S[et]))break e;if((k||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,k?(S=r.relatedTarget||r.toElement,k=d,S=S?Mt(S):null,S!==null&&(y=Vt(S),S!==y||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=d),k!==S)){if(C=Pa,g="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=Ta,g="onPointerLeave",m="onPointerEnter",c="pointer"),y=k==null?v:tr(k),p=S==null?v:tr(S),v=new C(g,c+"leave",k,r,h),v.target=y,v.relatedTarget=p,g=null,Mt(h)===d&&(C=new C(m,c+"enter",S,r,h),C.target=p,C.relatedTarget=y,g=C),y=g,k&&S)t:{for(C=k,m=S,c=0,p=C;p;p=Jt(p))c++;for(p=0,g=m;g;g=Jt(g))p++;for(;0<c-p;)C=Jt(C),c--;for(;0<p-c;)m=Jt(m),p--;for(;c--;){if(C===m||m!==null&&C===m.alternate)break t;C=Jt(C),m=Jt(m)}C=null}else C=null;k!==null&&Fa(f,v,k,C,!1),S!==null&&y!==null&&Fa(f,y,S,C,!0)}}e:{if(v=d?tr(d):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var x=Ap;else if(La(v))if(Nu)x=Dp;else{x=Mp;var N=Lp}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(x=qp);if(x&&(x=x(e,d))){ju(f,x,r,h);break e}N&&N(e,v,d),e==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&Eo(v,"number",v.value)}switch(N=d?tr(d):window,e){case"focusin":(La(N)||N.contentEditable==="true")&&(Zt=N,_o=d,Hr=null);break;case"focusout":Hr=_o=Zt=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,Ua(f,r,h);break;case"selectionchange":if(_p)break;case"keydown":case"keyup":Ua(f,r,h)}var w;if(Mi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Xt?Su(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(ku&&r.locale!=="ko"&&(Xt||j!=="onCompositionStart"?j==="onCompositionEnd"&&Xt&&(w=wu()):(ct=h,Ii="value"in ct?ct.value:ct.textContent,Xt=!0)),N=is(d,j),0<N.length&&(j=new Ra(j,e,null,r,h),f.push({event:j,listeners:N}),w?j.data=w:(w=Cu(r),w!==null&&(j.data=w)))),(w=Ep?Pp(e,r):Rp(e,r))&&(d=is(d,"onBeforeInput"),0<d.length&&(h=new Ra("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:d}),h.data=w))}qu(f,t)})}function on(e,t,r){return{instance:e,listener:t,currentTarget:r}}function is(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Xr(e,r),o!=null&&n.unshift(on(e,o,s)),o=Xr(e,t),o!=null&&n.push(on(e,o,s))),e=e.return}return n}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fa(e,t,r,n,s){for(var o=t._reactName,i=[];r!==null&&r!==n;){var l=r,u=l.alternate,d=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&d!==null&&(l=d,s?(u=Xr(r,o),u!=null&&i.unshift(on(r,u,l))):s||(u=Xr(r,o),u!=null&&i.push(on(r,u,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Wp=/\r\n?/g,Hp=/\u0000|\uFFFD/g;function Ba(e){return(typeof e=="string"?e:""+e).replace(Wp,`
`).replace(Hp,"")}function Mn(e,t,r){if(t=Ba(t),Ba(e)!==t&&r)throw Error(b(425))}function as(){}var Fo=null,Bo=null;function Wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,Vp=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(Gp)}:Ho;function Gp(e){setTimeout(function(){throw e})}function lo(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),tn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);tn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),He="__reactFiber$"+jr,an="__reactProps$"+jr,et="__reactContainer$"+jr,$o="__reactEvents$"+jr,Jp="__reactListeners$"+jr,Qp="__reactHandles$"+jr;function Mt(e){var t=e[He];if(t)return t;for(var r=e.parentNode;r;){if(t=r[et]||r[He]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ha(e);e!==null;){if(r=e[He])return r;e=Ha(e)}return t}e=r,r=e.parentNode}return null}function xn(e){return e=e[He]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Is(e){return e[an]||null}var Vo=[],rr=-1;function Nt(e){return{current:e}}function z(e){0>rr||(e.current=Vo[rr],Vo[rr]=null,rr--)}function U(e,t){rr++,Vo[rr]=e.current,e.current=t}var Ct={},ue=Nt(Ct),ge=Nt(!1),zt=Ct;function hr(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ye(e){return e=e.childContextTypes,e!=null}function ls(){z(ge),z(ue)}function $a(e,t,r){if(ue.current!==Ct)throw Error(b(168));U(ue,t),U(ge,r)}function Ou(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(b(108,Ld(e)||"Unknown",s));return H({},r,n)}function us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,zt=ue.current,U(ue,e),U(ge,ge.current),!0}function Va(e,t,r){var n=e.stateNode;if(!n)throw Error(b(169));r?(e=Ou(e,t,zt),n.__reactInternalMemoizedMergedChildContext=e,z(ge),z(ue),U(ue,e)):z(ge),U(ge,r)}var Qe=null,As=!1,uo=!1;function Uu(e){Qe===null?Qe=[e]:Qe.push(e)}function Kp(e){As=!0,Uu(e)}function bt(){if(!uo&&Qe!==null){uo=!0;var e=0,t=O;try{var r=Qe;for(O=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Qe=null,As=!1}catch(s){throw Qe!==null&&(Qe=Qe.slice(e+1)),uu(Ei,bt),s}finally{O=t,uo=!1}}return null}var nr=[],sr=0,cs=null,ds=0,Ne=[],be=0,Ft=null,Ke=1,Ye="";function At(e,t){nr[sr++]=ds,nr[sr++]=cs,cs=e,ds=t}function _u(e,t,r){Ne[be++]=Ke,Ne[be++]=Ye,Ne[be++]=Ft,Ft=e;var n=Ke;e=Ye;var s=32-Ue(n)-1;n&=~(1<<s),r+=1;var o=32-Ue(t)+s;if(30<o){var i=s-s%5;o=(n&(1<<i)-1).toString(32),n>>=i,s-=i,Ke=1<<32-Ue(t)+s|r<<s|n,Ye=o+e}else Ke=1<<o|r<<s|n,Ye=e}function Di(e){e.return!==null&&(At(e,1),_u(e,1,0))}function Oi(e){for(;e===cs;)cs=nr[--sr],nr[sr]=null,ds=nr[--sr],nr[sr]=null;for(;e===Ft;)Ft=Ne[--be],Ne[be]=null,Ye=Ne[--be],Ne[be]=null,Ke=Ne[--be],Ne[be]=null}var ke=null,we=null,F=!1,Me=null;function zu(e,t){var r=Ee(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ga(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ft!==null?{id:Ke,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ee(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ke=e,we=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jo(e){if(F){var t=we;if(t){var r=t;if(!Ga(e,t)){if(Go(e))throw Error(b(418));t=gt(r.nextSibling);var n=ke;t&&Ga(e,t)?zu(n,r):(e.flags=e.flags&-4097|2,F=!1,ke=e)}}else{if(Go(e))throw Error(b(418));e.flags=e.flags&-4097|2,F=!1,ke=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function qn(e){if(e!==ke)return!1;if(!F)return Ja(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wo(e.type,e.memoizedProps)),t&&(t=we)){if(Go(e))throw Fu(),Error(b(418));for(;t;)zu(e,t),t=gt(t.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){we=gt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?gt(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=we;e;)e=gt(e.nextSibling)}function gr(){we=ke=null,F=!1}function Ui(e){Me===null?Me=[e]:Me.push(e)}var Yp=nt.ReactCurrentBatchConfig;function Ar(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(b(309));var n=r.stateNode}if(!n)throw Error(b(147,e));var s=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=s.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!r._owner)throw Error(b(290,e))}return e}function Dn(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function Bu(e){function t(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function r(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function n(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function s(m,c){return m=wt(m,c),m.index=0,m.sibling=null,m}function o(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,p,g){return c===null||c.tag!==6?(c=yo(p,m.mode,g),c.return=m,c):(c=s(c,p),c.return=m,c)}function u(m,c,p,g){var x=p.type;return x===Yt?h(m,c,p.props.children,g,p.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===it&&Qa(x)===c.type)?(g=s(c,p.props),g.ref=Ar(m,c,p),g.return=m,g):(g=Xn(p.type,p.key,p.props,null,m.mode,g),g.ref=Ar(m,c,p),g.return=m,g)}function d(m,c,p,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=vo(p,m.mode,g),c.return=m,c):(c=s(c,p.children||[]),c.return=m,c)}function h(m,c,p,g,x){return c===null||c.tag!==7?(c=_t(p,m.mode,g,x),c.return=m,c):(c=s(c,p),c.return=m,c)}function f(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yo(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Nn:return p=Xn(c.type,c.key,c.props,null,m.mode,p),p.ref=Ar(m,null,c),p.return=m,p;case Kt:return c=vo(c,m.mode,p),c.return=m,c;case it:var g=c._init;return f(m,g(c._payload),p)}if(Dr(c)||Er(c))return c=_t(c,m.mode,p,null),c.return=m,c;Dn(m,c)}return null}function v(m,c,p,g){var x=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:l(m,c,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:return p.key===x?u(m,c,p,g):null;case Kt:return p.key===x?d(m,c,p,g):null;case it:return x=p._init,v(m,c,x(p._payload),g)}if(Dr(p)||Er(p))return x!==null?null:h(m,c,p,g,null);Dn(m,p)}return null}function k(m,c,p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(p)||null,l(c,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nn:return m=m.get(g.key===null?p:g.key)||null,u(c,m,g,x);case Kt:return m=m.get(g.key===null?p:g.key)||null,d(c,m,g,x);case it:var N=g._init;return k(m,c,p,N(g._payload),x)}if(Dr(g)||Er(g))return m=m.get(p)||null,h(c,m,g,x,null);Dn(c,g)}return null}function S(m,c,p,g){for(var x=null,N=null,w=c,j=c=0,I=null;w!==null&&j<p.length;j++){w.index>j?(I=w,w=null):I=w.sibling;var P=v(m,w,p[j],g);if(P===null){w===null&&(w=I);break}e&&w&&P.alternate===null&&t(m,w),c=o(P,c,j),N===null?x=P:N.sibling=P,N=P,w=I}if(j===p.length)return r(m,w),F&&At(m,j),x;if(w===null){for(;j<p.length;j++)w=f(m,p[j],g),w!==null&&(c=o(w,c,j),N===null?x=w:N.sibling=w,N=w);return F&&At(m,j),x}for(w=n(m,w);j<p.length;j++)I=k(w,m,j,p[j],g),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?j:I.key),c=o(I,c,j),N===null?x=I:N.sibling=I,N=I);return e&&w.forEach(function(D){return t(m,D)}),F&&At(m,j),x}function C(m,c,p,g){var x=Er(p);if(typeof x!="function")throw Error(b(150));if(p=x.call(p),p==null)throw Error(b(151));for(var N=x=null,w=c,j=c=0,I=null,P=p.next();w!==null&&!P.done;j++,P=p.next()){w.index>j?(I=w,w=null):I=w.sibling;var D=v(m,w,P.value,g);if(D===null){w===null&&(w=I);break}e&&w&&D.alternate===null&&t(m,w),c=o(D,c,j),N===null?x=D:N.sibling=D,N=D,w=I}if(P.done)return r(m,w),F&&At(m,j),x;if(w===null){for(;!P.done;j++,P=p.next())P=f(m,P.value,g),P!==null&&(c=o(P,c,j),N===null?x=P:N.sibling=P,N=P);return F&&At(m,j),x}for(w=n(m,w);!P.done;j++,P=p.next())P=k(w,m,j,P.value,g),P!==null&&(e&&P.alternate!==null&&w.delete(P.key===null?j:P.key),c=o(P,c,j),N===null?x=P:N.sibling=P,N=P);return e&&w.forEach(function(X){return t(m,X)}),F&&At(m,j),x}function y(m,c,p,g){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:e:{for(var x=p.key,N=c;N!==null;){if(N.key===x){if(x=p.type,x===Yt){if(N.tag===7){r(m,N.sibling),c=s(N,p.props.children),c.return=m,m=c;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===it&&Qa(x)===N.type){r(m,N.sibling),c=s(N,p.props),c.ref=Ar(m,N,p),c.return=m,m=c;break e}r(m,N);break}else t(m,N);N=N.sibling}p.type===Yt?(c=_t(p.props.children,m.mode,g,p.key),c.return=m,m=c):(g=Xn(p.type,p.key,p.props,null,m.mode,g),g.ref=Ar(m,c,p),g.return=m,m=g)}return i(m);case Kt:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){r(m,c.sibling),c=s(c,p.children||[]),c.return=m,m=c;break e}else{r(m,c);break}else t(m,c);c=c.sibling}c=vo(p,m.mode,g),c.return=m,m=c}return i(m);case it:return N=p._init,y(m,c,N(p._payload),g)}if(Dr(p))return S(m,c,p,g);if(Er(p))return C(m,c,p,g);Dn(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(r(m,c.sibling),c=s(c,p),c.return=m,m=c):(r(m,c),c=yo(p,m.mode,g),c.return=m,m=c),i(m)):r(m,c)}return y}var yr=Bu(!0),Wu=Bu(!1),ps=Nt(null),ms=null,or=null,_i=null;function zi(){_i=or=ms=null}function Fi(e){var t=ps.current;z(ps),e._currentValue=t}function Qo(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function pr(e,t){ms=e,_i=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(_i!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(ms===null)throw Error(b(308));or=e,ms.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var qt=null;function Bi(e){qt===null?qt=[e]:qt.push(e)}function Hu(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,Bi(t)):(r.next=s.next,s.next=r),t.interleaved=r,tt(e,n)}function tt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var at=!1;function Wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,q&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,tt(e,r)}return s=n.interleaved,s===null?(t.next=t,Bi(n)):(t.next=s.next,s.next=t),n.interleaved=t,tt(e,r)}function Vn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pi(e,r)}}function Ka(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fs(e,t,r,n){var s=e.updateQueue;at=!1;var o=s.firstBaseUpdate,i=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==i&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=u))}if(o!==null){var f=s.baseState;i=0,h=d=u=null,l=o;do{var v=l.lane,k=l.eventTime;if((n&v)===v){h!==null&&(h=h.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,C=l;switch(v=t,k=r,C.tag){case 1:if(S=C.payload,typeof S=="function"){f=S.call(k,f,v);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,v=typeof S=="function"?S.call(k,f,v):S,v==null)break e;f=H({},f,v);break e;case 2:at=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=k,u=f):h=h.next=k,i|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(h===null&&(u=f),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=f}}function Ya(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(b(191,s));s.call(n)}}}var wn={},Ve=Nt(wn),ln=Nt(wn),un=Nt(wn);function Dt(e){if(e===wn)throw Error(b(174));return e}function Hi(e,t){switch(U(un,t),U(ln,e),U(Ve,wn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ro(t,e)}z(Ve),U(Ve,t)}function vr(){z(Ve),z(ln),z(un)}function Vu(e){Dt(un.current);var t=Dt(Ve.current),r=Ro(t,e.type);t!==r&&(U(ln,e),U(Ve,r))}function $i(e){ln.current===e&&(z(Ve),z(ln))}var B=Nt(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=[];function Vi(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Gn=nt.ReactCurrentDispatcher,po=nt.ReactCurrentBatchConfig,Bt=0,W=null,K=null,ee=null,gs=!1,$r=!1,cn=0,Xp=0;function ie(){throw Error(b(321))}function Gi(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ze(e[r],t[r]))return!1;return!0}function Ji(e,t,r,n,s,o){if(Bt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gn.current=e===null||e.memoizedState===null?rm:nm,e=r(n,s),$r){o=0;do{if($r=!1,cn=0,25<=o)throw Error(b(301));o+=1,ee=K=null,t.updateQueue=null,Gn.current=sm,e=r(n,s)}while($r)}if(Gn.current=ys,t=K!==null&&K.next!==null,Bt=0,ee=K=W=null,gs=!1,t)throw Error(b(300));return e}function Qi(){var e=cn!==0;return cn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Te(){if(K===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(b(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function dn(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=Te(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=K,s=n.baseQueue,o=r.pending;if(o!==null){if(s!==null){var i=s.next;s.next=o.next,o.next=i}n.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,n=n.baseState;var l=i=null,u=null,d=o;do{var h=d.lane;if((Bt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=f,i=n):u=u.next=f,W.lanes|=h,Wt|=h}d=d.next}while(d!==null&&d!==o);u===null?i=n:u.next=l,ze(n,t.memoizedState)||(he=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do o=s.lane,W.lanes|=o,Wt|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fo(e){var t=Te(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var i=s=s.next;do o=e(o,i.action),i=i.next;while(i!==s);ze(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Gu(){}function Ju(e,t){var r=W,n=Te(),s=t(),o=!ze(n.memoizedState,s);if(o&&(n.memoizedState=s,he=!0),n=n.queue,Ki(Yu.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(r.flags|=2048,pn(9,Ku.bind(null,r,n,s,t),void 0,null),te===null)throw Error(b(349));Bt&30||Qu(r,t,s)}return s}function Qu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Ku(e,t,r,n){t.value=r,t.getSnapshot=n,Xu(t)&&Zu(e)}function Yu(e,t,r){return r(function(){Xu(t)&&Zu(e)})}function Xu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ze(e,r)}catch{return!0}}function Zu(e){var t=tt(e,1);t!==null&&_e(t,e,1,-1)}function Xa(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t.queue=e,e=e.dispatch=tm.bind(null,W,e),[t.memoizedState,e]}function pn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ec(){return Te().memoizedState}function Jn(e,t,r,n){var s=We();W.flags|=e,s.memoizedState=pn(1|t,r,void 0,n===void 0?null:n)}function Ls(e,t,r,n){var s=Te();n=n===void 0?null:n;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,n!==null&&Gi(n,i.deps)){s.memoizedState=pn(t,r,o,n);return}}W.flags|=e,s.memoizedState=pn(1|t,r,o,n)}function Za(e,t){return Jn(8390656,8,e,t)}function Ki(e,t){return Ls(2048,8,e,t)}function tc(e,t){return Ls(4,2,e,t)}function rc(e,t){return Ls(4,4,e,t)}function nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sc(e,t,r){return r=r!=null?r.concat([e]):null,Ls(4,4,nc.bind(null,t,e),r)}function Yi(){}function oc(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Gi(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ic(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Gi(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ac(e,t,r){return Bt&21?(ze(r,t)||(r=pu(),W.lanes|=r,Wt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=r)}function Zp(e,t){var r=O;O=r!==0&&4>r?r:4,e(!0);var n=po.transition;po.transition={};try{e(!1),t()}finally{O=r,po.transition=n}}function lc(){return Te().memoizedState}function em(e,t,r){var n=xt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},uc(e))cc(t,r);else if(r=Hu(e,t,r,n),r!==null){var s=de();_e(r,e,n,s),dc(r,t,n)}}function tm(e,t,r){var n=xt(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(uc(e))cc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(s.hasEagerState=!0,s.eagerState=l,ze(l,i)){var u=t.interleaved;u===null?(s.next=s,Bi(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}r=Hu(e,t,s,n),r!==null&&(s=de(),_e(r,e,n,s),dc(r,t,n))}}function uc(e){var t=e.alternate;return e===W||t!==null&&t===W}function cc(e,t){$r=gs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function dc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pi(e,r)}}var ys={readContext:Re,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},rm={readContext:Re,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Za,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Jn(4194308,4,nc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Jn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jn(4,2,e,t)},useMemo:function(e,t){var r=We();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=We();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=em.bind(null,W,e),[n.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Xa,useDebugValue:Yi,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Xa(!1),t=e[0];return e=Zp.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=W,s=We();if(F){if(r===void 0)throw Error(b(407));r=r()}else{if(r=t(),te===null)throw Error(b(349));Bt&30||Qu(n,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,Za(Yu.bind(null,n,o,e),[e]),n.flags|=2048,pn(9,Ku.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=We(),t=te.identifierPrefix;if(F){var r=Ye,n=Ke;r=(n&~(1<<32-Ue(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=cn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Xp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nm={readContext:Re,useCallback:oc,useContext:Re,useEffect:Ki,useImperativeHandle:sc,useInsertionEffect:tc,useLayoutEffect:rc,useMemo:ic,useReducer:mo,useRef:ec,useState:function(){return mo(dn)},useDebugValue:Yi,useDeferredValue:function(e){var t=Te();return ac(t,K.memoizedState,e)},useTransition:function(){var e=mo(dn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Ju,useId:lc,unstable_isNewReconciler:!1},sm={readContext:Re,useCallback:oc,useContext:Re,useEffect:Ki,useImperativeHandle:sc,useInsertionEffect:tc,useLayoutEffect:rc,useMemo:ic,useReducer:fo,useRef:ec,useState:function(){return fo(dn)},useDebugValue:Yi,useDeferredValue:function(e){var t=Te();return K===null?t.memoizedState=e:ac(t,K.memoizedState,e)},useTransition:function(){var e=fo(dn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Ju,useId:lc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ko(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:H({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ms={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=de(),s=xt(e),o=Xe(n,s);o.payload=t,r!=null&&(o.callback=r),t=yt(e,o,s),t!==null&&(_e(t,e,s,n),Vn(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=de(),s=xt(e),o=Xe(n,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=yt(e,o,s),t!==null&&(_e(t,e,s,n),Vn(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=de(),n=xt(e),s=Xe(r,n);s.tag=2,t!=null&&(s.callback=t),t=yt(e,s,n),t!==null&&(_e(t,e,n,r),Vn(t,e,n))}};function el(e,t,r,n,s,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!nn(r,n)||!nn(s,o):!0}function pc(e,t,r){var n=!1,s=Ct,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(s=ye(t)?zt:ue.current,n=t.contextTypes,o=(n=n!=null)?hr(e,s):Ct),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ms,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function tl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function Yo(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Wi(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Re(o):(o=ye(t)?zt:ue.current,s.context=hr(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ko(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ms.enqueueReplaceState(s,s.state,null),fs(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,t){try{var r="",n=t;do r+=Ad(n),n=n.return;while(n);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function ho(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var om=typeof WeakMap=="function"?WeakMap:Map;function mc(e,t,r){r=Xe(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){xs||(xs=!0,li=n),Xo(e,t)},r}function fc(e,t,r){r=Xe(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){Xo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Xo(e,t),typeof n!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function rl(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new om;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=xm.bind(null,e,t,r),t.then(e,e))}function nl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sl(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Xe(-1,1),t.tag=2,yt(r,t,1))),r.lanes|=1),e)}var im=nt.ReactCurrentOwner,he=!1;function ce(e,t,r,n){t.child=e===null?Wu(t,null,r,n):yr(t,e.child,r,n)}function ol(e,t,r,n,s){r=r.render;var o=t.ref;return pr(t,s),n=Ji(e,t,r,n,o,s),r=Qi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,rt(e,t,s)):(F&&r&&Di(t),t.flags|=1,ce(e,t,n,s),t.child)}function il(e,t,r,n,s){if(e===null){var o=r.type;return typeof o=="function"&&!oa(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,hc(e,t,o,n,s)):(e=Xn(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:nn,r(i,n)&&e.ref===t.ref)return rt(e,t,s)}return t.flags|=1,e=wt(o,n),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,r,n,s){if(e!==null){var o=e.memoizedProps;if(nn(o,n)&&e.ref===t.ref)if(he=!1,t.pendingProps=n=o,(e.lanes&s)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,rt(e,t,s)}return Zo(e,t,r,n,s)}function gc(e,t,r){var n=t.pendingProps,s=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ar,xe),xe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(ar,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,U(ar,xe),xe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,U(ar,xe),xe|=n;return ce(e,t,s,r),t.child}function yc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zo(e,t,r,n,s){var o=ye(r)?zt:ue.current;return o=hr(t,o),pr(t,s),r=Ji(e,t,r,n,o,s),n=Qi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,rt(e,t,s)):(F&&n&&Di(t),t.flags|=1,ce(e,t,r,s),t.child)}function al(e,t,r,n,s){if(ye(r)){var o=!0;us(t)}else o=!1;if(pr(t,s),t.stateNode===null)Qn(e,t),pc(t,r,n),Yo(t,r,n,s),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var u=i.context,d=r.contextType;typeof d=="object"&&d!==null?d=Re(d):(d=ye(r)?zt:ue.current,d=hr(t,d));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||u!==d)&&tl(t,i,n,d),at=!1;var v=t.memoizedState;i.state=v,fs(t,n,i,s),u=t.memoizedState,l!==n||v!==u||ge.current||at?(typeof h=="function"&&(Ko(t,r,h,n),u=t.memoizedState),(l=at||el(t,r,l,n,v,u,d))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),i.props=n,i.state=u,i.context=d,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,$u(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ae(t.type,l),i.props=d,f=t.pendingProps,v=i.context,u=r.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=ye(r)?zt:ue.current,u=hr(t,u));var k=r.getDerivedStateFromProps;(h=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||v!==u)&&tl(t,i,n,u),at=!1,v=t.memoizedState,i.state=v,fs(t,n,i,s);var S=t.memoizedState;l!==f||v!==S||ge.current||at?(typeof k=="function"&&(Ko(t,r,k,n),S=t.memoizedState),(d=at||el(t,r,d,n,v,S,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,S,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,S,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=S),i.props=n,i.state=S,i.context=u,n=d):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),n=!1)}return ei(e,t,r,n,o,s)}function ei(e,t,r,n,s,o){yc(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return s&&Va(t,r,!1),rt(e,t,o);n=t.stateNode,im.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=yr(t,e.child,null,o),t.child=yr(t,null,l,o)):ce(e,t,l,o),t.memoizedState=n.state,s&&Va(t,r,!0),t.child}function vc(e){var t=e.stateNode;t.pendingContext?$a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$a(e,t.context,!1),Hi(e,t.containerInfo)}function ll(e,t,r,n,s){return gr(),Ui(s),t.flags|=256,ce(e,t,r,n),t.child}var ti={dehydrated:null,treeContext:null,retryLane:0};function ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function xc(e,t,r){var n=t.pendingProps,s=B.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),U(B,s&1),e===null)return Jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Os(i,n,0,null),e=_t(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ri(r),t.memoizedState=ti,e):Xi(t,i));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return am(e,t,i,n,l,s,r);if(o){o=n.fallback,i=t.mode,s=e.child,l=s.sibling;var u={mode:"hidden",children:n.children};return!(i&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=wt(s,u),n.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=wt(l,o):(o=_t(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?ri(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=ti,n}return o=e.child,e=o.sibling,n=wt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Xi(e,t){return t=Os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function On(e,t,r,n){return n!==null&&Ui(n),yr(t,e.child,null,r),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function am(e,t,r,n,s,o,i){if(r)return t.flags&256?(t.flags&=-257,n=ho(Error(b(422))),On(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,s=t.mode,n=Os({mode:"visible",children:n.children},s,0,null),o=_t(o,s,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&yr(t,e.child,null,i),t.child.memoizedState=ri(i),t.memoizedState=ti,o);if(!(t.mode&1))return On(e,t,i,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(b(419)),n=ho(o,n,void 0),On(e,t,i,n)}if(l=(i&e.childLanes)!==0,he||l){if(n=te,n!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|i)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,tt(e,s),_e(n,e,s,-1))}return sa(),n=ho(Error(b(421))),On(e,t,i,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=wm.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,we=gt(s.nextSibling),ke=t,F=!0,Me=null,e!==null&&(Ne[be++]=Ke,Ne[be++]=Ye,Ne[be++]=Ft,Ke=e.id,Ye=e.overflow,Ft=t),t=Xi(t,n.children),t.flags|=4096,t)}function ul(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Qo(e.return,t,r)}function go(e,t,r,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=s)}function wc(e,t,r){var n=t.pendingProps,s=n.revealOrder,o=n.tail;if(ce(e,t,n.children,r),n=B.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ul(e,r,t);else if(e.tag===19)ul(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(U(B,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&hs(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),go(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&hs(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}go(t,!0,r,null,o);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,r=wt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function lm(e,t,r){switch(t.tag){case 3:vc(t),gr();break;case 5:Vu(t);break;case 1:ye(t.type)&&us(t);break;case 4:Hi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;U(ps,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(U(B,B.current&1),t.flags|=128,null):r&t.child.childLanes?xc(e,t,r):(U(B,B.current&1),e=rt(e,t,r),e!==null?e.sibling:null);U(B,B.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return wc(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),U(B,B.current),n)break;return null;case 22:case 23:return t.lanes=0,gc(e,t,r)}return rt(e,t,r)}var kc,ni,Sc,Cc;kc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ni=function(){};Sc=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,Dt(Ve.current);var o=null;switch(r){case"input":s=No(e,s),n=No(e,n),o=[];break;case"select":s=H({},s,{value:void 0}),n=H({},n,{value:void 0}),o=[];break;case"textarea":s=Po(e,s),n=Po(e,n),o=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=as)}To(r,n);var i;r=null;for(d in s)if(!n.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Kr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var u=n[d];if(l=s!=null?s[d]:void 0,n.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(i in l)!l.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in u)u.hasOwnProperty(i)&&l[i]!==u[i]&&(r||(r={}),r[i]=u[i])}else r||(o||(o=[]),o.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&_("scroll",e),o||l===u||(o=[])):(o=o||[]).push(d,u))}r&&(o=o||[]).push("style",r);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Cc=function(e,t,r,n){r!==n&&(t.flags|=4)};function Lr(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function um(e,t,r){var n=t.pendingProps;switch(Oi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ye(t.type)&&ls(),ae(t),null;case 3:return n=t.stateNode,vr(),z(ge),z(ue),Vi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(di(Me),Me=null))),ni(e,t),ae(t),null;case 5:$i(t);var s=Dt(un.current);if(r=t.type,e!==null&&t.stateNode!=null)Sc(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(b(166));return ae(t),null}if(e=Dt(Ve.current),qn(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[He]=t,n[an]=o,e=(t.mode&1)!==0,r){case"dialog":_("cancel",n),_("close",n);break;case"iframe":case"object":case"embed":_("load",n);break;case"video":case"audio":for(s=0;s<Ur.length;s++)_(Ur[s],n);break;case"source":_("error",n);break;case"img":case"image":case"link":_("error",n),_("load",n);break;case"details":_("toggle",n);break;case"input":va(n,o),_("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},_("invalid",n);break;case"textarea":wa(n,o),_("invalid",n)}To(r,o),s=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mn(n.textContent,l,e),s=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mn(n.textContent,l,e),s=["children",""+l]):Kr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&_("scroll",n)}switch(r){case"input":bn(n),xa(n,o,!0);break;case"textarea":bn(n),ka(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=as)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[He]=t,e[an]=n,kc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Io(r,n),r){case"dialog":_("cancel",e),_("close",e),s=n;break;case"iframe":case"object":case"embed":_("load",e),s=n;break;case"video":case"audio":for(s=0;s<Ur.length;s++)_(Ur[s],e);s=n;break;case"source":_("error",e),s=n;break;case"img":case"image":case"link":_("error",e),_("load",e),s=n;break;case"details":_("toggle",e),s=n;break;case"input":va(e,n),s=No(e,n),_("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=H({},n,{value:void 0}),_("invalid",e);break;case"textarea":wa(e,n),s=Po(e,n),_("invalid",e);break;default:s=n}To(r,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?eu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xl(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&_("scroll",e):u!=null&&Si(e,o,u,i))}switch(r){case"input":bn(e),xa(e,n,!1);break;case"textarea":bn(e),ka(e);break;case"option":n.value!=null&&e.setAttribute("value",""+St(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?lr(e,!!n.multiple,o,!1):n.defaultValue!=null&&lr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=as)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Cc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(b(166));if(r=Dt(un.current),Dt(Ve.current),qn(t)){if(n=t.stateNode,r=t.memoizedProps,n[He]=t,(o=n.nodeValue!==r)&&(e=ke,e!==null))switch(e.tag){case 3:Mn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[He]=t,t.stateNode=n}return ae(t),null;case 13:if(z(B),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&we!==null&&t.mode&1&&!(t.flags&128))Fu(),gr(),t.flags|=98560,o=!1;else if(o=qn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[He]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),o=!1}else Me!==null&&(di(Me),Me=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Y===0&&(Y=3):sa())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return vr(),ni(e,t),e===null&&sn(t.stateNode.containerInfo),ae(t),null;case 10:return Fi(t.type._context),ae(t),null;case 17:return ye(t.type)&&ls(),ae(t),null;case 19:if(z(B),o=t.memoizedState,o===null)return ae(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)Lr(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=hs(e),i!==null){for(t.flags|=128,Lr(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return U(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>wr&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304)}else{if(!n)if(e=hs(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!F)return ae(t),null}else 2*J()-o.renderingStartTime>wr&&r!==1073741824&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,r=B.current,U(B,n?r&1|2:r&1),t):(ae(t),null);case 22:case 23:return na(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?xe&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function cm(e,t){switch(Oi(t),t.tag){case 1:return ye(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),z(ge),z(ue),Vi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $i(t),null;case 13:if(z(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(B),null;case 4:return vr(),null;case 10:return Fi(t.type._context),null;case 22:case 23:return na(),null;case 24:return null;default:return null}}var Un=!1,le=!1,dm=typeof WeakSet=="function"?WeakSet:Set,R=null;function ir(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){$(e,t,n)}else r.current=null}function si(e,t,r){try{r()}catch(n){$(e,t,n)}}var cl=!1;function pm(e,t){if(Fo=ss,e=Pu(),qi(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,u=-1,d=0,h=0,f=e,v=null;t:for(;;){for(var k;f!==r||s!==0&&f.nodeType!==3||(l=i+s),f!==o||n!==0&&f.nodeType!==3||(u=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(k=f.firstChild)!==null;)v=f,f=k;for(;;){if(f===e)break t;if(v===r&&++d===s&&(l=i),v===o&&++h===n&&(u=i),(k=f.nextSibling)!==null)break;f=v,v=f.parentNode}f=k}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bo={focusedElem:e,selectionRange:r},ss=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,y=S.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?C:Ae(t.type,C),y);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(g){$(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return S=cl,cl=!1,S}function Vr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&si(t,r,o)}s=s.next}while(s!==n)}}function qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function oi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function jc(e){var t=e.alternate;t!==null&&(e.alternate=null,jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[an],delete t[$o],delete t[Jp],delete t[Qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ii(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=as));else if(n!==4&&(e=e.child,e!==null))for(ii(e,t,r),e=e.sibling;e!==null;)ii(e,t,r),e=e.sibling}function ai(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ai(e,t,r),e=e.sibling;e!==null;)ai(e,t,r),e=e.sibling}var re=null,Le=!1;function ot(e,t,r){for(r=r.child;r!==null;)bc(e,t,r),r=r.sibling}function bc(e,t,r){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Es,r)}catch{}switch(r.tag){case 5:le||ir(r,t);case 6:var n=re,s=Le;re=null,ot(e,t,r),re=n,Le=s,re!==null&&(Le?(e=re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(Le?(e=re,r=r.stateNode,e.nodeType===8?lo(e.parentNode,r):e.nodeType===1&&lo(e,r),tn(e)):lo(re,r.stateNode));break;case 4:n=re,s=Le,re=r.stateNode.containerInfo,Le=!0,ot(e,t,r),re=n,Le=s;break;case 0:case 11:case 14:case 15:if(!le&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var o=s,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&si(r,t,i),s=s.next}while(s!==n)}ot(e,t,r);break;case 1:if(!le&&(ir(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){$(r,t,l)}ot(e,t,r);break;case 21:ot(e,t,r);break;case 22:r.mode&1?(le=(n=le)||r.memoizedState!==null,ot(e,t,r),le=n):ot(e,t,r);break;default:ot(e,t,r)}}function pl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new dm),t.forEach(function(n){var s=km.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Ie(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:re=l.stateNode,Le=!1;break e;case 3:re=l.stateNode.containerInfo,Le=!0;break e;case 4:re=l.stateNode.containerInfo,Le=!0;break e}l=l.return}if(re===null)throw Error(b(160));bc(o,i,s),re=null,Le=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){$(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ec(t,e),t=t.sibling}function Ec(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Be(e),n&4){try{Vr(3,e,e.return),qs(3,e)}catch(C){$(e,e.return,C)}try{Vr(5,e,e.return)}catch(C){$(e,e.return,C)}}break;case 1:Ie(t,e),Be(e),n&512&&r!==null&&ir(r,r.return);break;case 5:if(Ie(t,e),Be(e),n&512&&r!==null&&ir(r,r.return),e.flags&32){var s=e.stateNode;try{Yr(s,"")}catch(C){$(e,e.return,C)}}if(n&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ql(s,o),Io(l,i);var d=Io(l,o);for(i=0;i<u.length;i+=2){var h=u[i],f=u[i+1];h==="style"?eu(s,f):h==="dangerouslySetInnerHTML"?Xl(s,f):h==="children"?Yr(s,f):Si(s,h,f,d)}switch(l){case"input":bo(s,o);break;case"textarea":Kl(s,o);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?lr(s,!!o.multiple,k,!1):v!==!!o.multiple&&(o.defaultValue!=null?lr(s,!!o.multiple,o.defaultValue,!0):lr(s,!!o.multiple,o.multiple?[]:"",!1))}s[an]=o}catch(C){$(e,e.return,C)}}break;case 6:if(Ie(t,e),Be(e),n&4){if(e.stateNode===null)throw Error(b(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(C){$(e,e.return,C)}}break;case 3:if(Ie(t,e),Be(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(C){$(e,e.return,C)}break;case 4:Ie(t,e),Be(e);break;case 13:Ie(t,e),Be(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(ta=J())),n&4&&pl(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(le=(d=le)||h,Ie(t,e),le=d):Ie(t,e),Be(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(f=R=h;R!==null;){switch(v=R,k=v.child,v.tag){case 0:case 11:case 14:case 15:Vr(4,v,v.return);break;case 1:ir(v,v.return);var S=v.stateNode;if(typeof S.componentWillUnmount=="function"){n=v,r=v.return;try{t=n,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(C){$(n,r,C)}}break;case 5:ir(v,v.return);break;case 22:if(v.memoizedState!==null){fl(f);continue}}k!==null?(k.return=v,R=k):fl(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,u=f.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Zl("display",i))}catch(C){$(e,e.return,C)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(C){$(e,e.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ie(t,e),Be(e),n&4&&pl(e);break;case 21:break;default:Ie(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Nc(r)){var n=r;break e}r=r.return}throw Error(b(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(Yr(s,""),n.flags&=-33);var o=dl(e);ai(e,o,s);break;case 3:case 4:var i=n.stateNode.containerInfo,l=dl(e);ii(e,l,i);break;default:throw Error(b(161))}}catch(u){$(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mm(e,t,r){R=e,Pc(e)}function Pc(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var s=R,o=s.child;if(s.tag===22&&n){var i=s.memoizedState!==null||Un;if(!i){var l=s.alternate,u=l!==null&&l.memoizedState!==null||le;l=Un;var d=le;if(Un=i,(le=u)&&!d)for(R=s;R!==null;)i=R,u=i.child,i.tag===22&&i.memoizedState!==null?hl(s):u!==null?(u.return=i,R=u):hl(s);for(;o!==null;)R=o,Pc(o),o=o.sibling;R=s,Un=l,le=d}ml(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,R=o):ml(e)}}function ml(e){for(;R!==null;){var t=R;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||qs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!le)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Ae(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ya(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ya(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&tn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}le||t.flags&512&&oi(t)}catch(v){$(t,t.return,v)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function fl(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function hl(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{qs(4,t)}catch(u){$(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(u){$(t,s,u)}}var o=t.return;try{oi(t)}catch(u){$(t,o,u)}break;case 5:var i=t.return;try{oi(t)}catch(u){$(t,i,u)}}}catch(u){$(t,t.return,u)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var fm=Math.ceil,vs=nt.ReactCurrentDispatcher,Zi=nt.ReactCurrentOwner,Pe=nt.ReactCurrentBatchConfig,q=0,te=null,Q=null,ne=0,xe=0,ar=Nt(0),Y=0,mn=null,Wt=0,Ds=0,ea=0,Gr=null,fe=null,ta=0,wr=1/0,Je=null,xs=!1,li=null,vt=null,_n=!1,dt=null,ws=0,Jr=0,ui=null,Kn=-1,Yn=0;function de(){return q&6?J():Kn!==-1?Kn:Kn=J()}function xt(e){return e.mode&1?q&2&&ne!==0?ne&-ne:Yp.transition!==null?(Yn===0&&(Yn=pu()),Yn):(e=O,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e):1}function _e(e,t,r,n){if(50<Jr)throw Jr=0,ui=null,Error(b(185));yn(e,r,n),(!(q&2)||e!==te)&&(e===te&&(!(q&2)&&(Ds|=r),Y===4&&ut(e,ne)),ve(e,n),r===1&&q===0&&!(t.mode&1)&&(wr=J()+500,As&&bt()))}function ve(e,t){var r=e.callbackNode;Yd(e,t);var n=ns(e,e===te?ne:0);if(n===0)r!==null&&ja(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ja(r),t===1)e.tag===0?Kp(gl.bind(null,e)):Uu(gl.bind(null,e)),Vp(function(){!(q&6)&&bt()}),r=null;else{switch(mu(n)){case 1:r=Ei;break;case 4:r=cu;break;case 16:r=rs;break;case 536870912:r=du;break;default:r=rs}r=Dc(r,Rc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Rc(e,t){if(Kn=-1,Yn=0,q&6)throw Error(b(327));var r=e.callbackNode;if(mr()&&e.callbackNode!==r)return null;var n=ns(e,e===te?ne:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ks(e,n);else{t=n;var s=q;q|=2;var o=Ic();(te!==e||ne!==t)&&(Je=null,wr=J()+500,Ut(e,t));do try{ym();break}catch(l){Tc(e,l)}while(!0);zi(),vs.current=o,q=s,Q!==null?t=0:(te=null,ne=0,t=Y)}if(t!==0){if(t===2&&(s=Do(e),s!==0&&(n=s,t=ci(e,s))),t===1)throw r=mn,Ut(e,0),ut(e,n),ve(e,J()),r;if(t===6)ut(e,n);else{if(s=e.current.alternate,!(n&30)&&!hm(s)&&(t=ks(e,n),t===2&&(o=Do(e),o!==0&&(n=o,t=ci(e,o))),t===1))throw r=mn,Ut(e,0),ut(e,n),ve(e,J()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(b(345));case 2:Lt(e,fe,Je);break;case 3:if(ut(e,n),(n&130023424)===n&&(t=ta+500-J(),10<t)){if(ns(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){de(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ho(Lt.bind(null,e,fe,Je),t);break}Lt(e,fe,Je);break;case 4:if(ut(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var i=31-Ue(n);o=1<<i,i=t[i],i>s&&(s=i),n&=~o}if(n=s,n=J()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*fm(n/1960))-n,10<n){e.timeoutHandle=Ho(Lt.bind(null,e,fe,Je),n);break}Lt(e,fe,Je);break;case 5:Lt(e,fe,Je);break;default:throw Error(b(329))}}}return ve(e,J()),e.callbackNode===r?Rc.bind(null,e):null}function ci(e,t){var r=Gr;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=ks(e,t),e!==2&&(t=fe,fe=r,t!==null&&di(t)),e}function di(e){fe===null?fe=e:fe.push.apply(fe,e)}function hm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],o=s.getSnapshot;s=s.value;try{if(!ze(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~ea,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ue(t),n=1<<r;e[r]=-1,t&=~n}}function gl(e){if(q&6)throw Error(b(327));mr();var t=ns(e,0);if(!(t&1))return ve(e,J()),null;var r=ks(e,t);if(e.tag!==0&&r===2){var n=Do(e);n!==0&&(t=n,r=ci(e,n))}if(r===1)throw r=mn,Ut(e,0),ut(e,t),ve(e,J()),r;if(r===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,fe,Je),ve(e,J()),null}function ra(e,t){var r=q;q|=1;try{return e(t)}finally{q=r,q===0&&(wr=J()+500,As&&bt())}}function Ht(e){dt!==null&&dt.tag===0&&!(q&6)&&mr();var t=q;q|=1;var r=Pe.transition,n=O;try{if(Pe.transition=null,O=1,e)return e()}finally{O=n,Pe.transition=r,q=t,!(q&6)&&bt()}}function na(){xe=ar.current,z(ar)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,$p(r)),Q!==null)for(r=Q.return;r!==null;){var n=r;switch(Oi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ls();break;case 3:vr(),z(ge),z(ue),Vi();break;case 5:$i(n);break;case 4:vr();break;case 13:z(B);break;case 19:z(B);break;case 10:Fi(n.type._context);break;case 22:case 23:na()}r=r.return}if(te=e,Q=e=wt(e.current,null),ne=xe=t,Y=0,mn=null,ea=Ds=Wt=0,fe=Gr=null,qt!==null){for(t=0;t<qt.length;t++)if(r=qt[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=s,n.next=i}r.pending=n}qt=null}return e}function Tc(e,t){do{var r=Q;try{if(zi(),Gn.current=ys,gs){for(var n=W.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}gs=!1}if(Bt=0,ee=K=W=null,$r=!1,cn=0,Zi.current=null,r===null||r.return===null){Y=1,mn=t,Q=null;break}e:{var o=e,i=r.return,l=r,u=t;if(t=ne,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=nl(i);if(k!==null){k.flags&=-257,sl(k,i,l,o,t),k.mode&1&&rl(o,d,t),t=k,u=d;var S=t.updateQueue;if(S===null){var C=new Set;C.add(u),t.updateQueue=C}else S.add(u);break e}else{if(!(t&1)){rl(o,d,t),sa();break e}u=Error(b(426))}}else if(F&&l.mode&1){var y=nl(i);if(y!==null){!(y.flags&65536)&&(y.flags|=256),sl(y,i,l,o,t),Ui(xr(u,l));break e}}o=u=xr(u,l),Y!==4&&(Y=2),Gr===null?Gr=[o]:Gr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=mc(o,u,t);Ka(o,m);break e;case 1:l=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vt===null||!vt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=fc(o,l,t);Ka(o,g);break e}}o=o.return}while(o!==null)}Lc(r)}catch(x){t=x,Q===r&&r!==null&&(Q=r=r.return);continue}break}while(!0)}function Ic(){var e=vs.current;return vs.current=ys,e===null?ys:e}function sa(){(Y===0||Y===3||Y===2)&&(Y=4),te===null||!(Wt&268435455)&&!(Ds&268435455)||ut(te,ne)}function ks(e,t){var r=q;q|=2;var n=Ic();(te!==e||ne!==t)&&(Je=null,Ut(e,t));do try{gm();break}catch(s){Tc(e,s)}while(!0);if(zi(),q=r,vs.current=n,Q!==null)throw Error(b(261));return te=null,ne=0,Y}function gm(){for(;Q!==null;)Ac(Q)}function ym(){for(;Q!==null&&!Bd();)Ac(Q)}function Ac(e){var t=qc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Lc(e):Q=t,Zi.current=null}function Lc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=cm(r,t),r!==null){r.flags&=32767,Q=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(r=um(r,t,xe),r!==null){Q=r;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function Lt(e,t,r){var n=O,s=Pe.transition;try{Pe.transition=null,O=1,vm(e,t,r,n)}finally{Pe.transition=s,O=n}return null}function vm(e,t,r,n){do mr();while(dt!==null);if(q&6)throw Error(b(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Xd(e,o),e===te&&(Q=te=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||_n||(_n=!0,Dc(rs,function(){return mr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=O;O=1;var l=q;q|=4,Zi.current=null,pm(e,r),Ec(r,e),Up(Bo),ss=!!Fo,Bo=Fo=null,e.current=r,mm(r),Wd(),q=l,O=i,Pe.transition=o}else e.current=r;if(_n&&(_n=!1,dt=e,ws=s),o=e.pendingLanes,o===0&&(vt=null),Vd(r.stateNode),ve(e,J()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(xs)throw xs=!1,e=li,li=null,e;return ws&1&&e.tag!==0&&mr(),o=e.pendingLanes,o&1?e===ui?Jr++:(Jr=0,ui=e):Jr=0,bt(),null}function mr(){if(dt!==null){var e=mu(ws),t=Pe.transition,r=O;try{if(Pe.transition=null,O=16>e?16:e,dt===null)var n=!1;else{if(e=dt,dt=null,ws=0,q&6)throw Error(b(331));var s=q;for(q|=4,R=e.current;R!==null;){var o=R,i=o.child;if(R.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(R=d;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:Vr(8,h,o)}var f=h.child;if(f!==null)f.return=h,R=f;else for(;R!==null;){h=R;var v=h.sibling,k=h.return;if(jc(h),h===d){R=null;break}if(v!==null){v.return=k,R=v;break}R=k}}}var S=o.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var y=C.sibling;C.sibling=null,C=y}while(C!==null)}}R=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,R=i;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,R=m;break e}R=o.return}}var c=e.current;for(R=c;R!==null;){i=R;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,R=p;else e:for(i=c;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qs(9,l)}}catch(x){$(l,l.return,x)}if(l===i){R=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,R=g;break e}R=l.return}}if(q=s,bt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Es,e)}catch{}n=!0}return n}finally{O=r,Pe.transition=t}}return!1}function yl(e,t,r){t=xr(r,t),t=mc(e,t,1),e=yt(e,t,1),t=de(),e!==null&&(yn(e,1,t),ve(e,t))}function $(e,t,r){if(e.tag===3)yl(e,e,r);else for(;t!==null;){if(t.tag===3){yl(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vt===null||!vt.has(n))){e=xr(r,e),e=fc(t,e,1),t=yt(t,e,1),e=de(),t!==null&&(yn(t,1,e),ve(t,e));break}}t=t.return}}function xm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&r,te===e&&(ne&r)===r&&(Y===4||Y===3&&(ne&130023424)===ne&&500>J()-ta?Ut(e,0):ea|=r),ve(e,t)}function Mc(e,t){t===0&&(e.mode&1?(t=Rn,Rn<<=1,!(Rn&130023424)&&(Rn=4194304)):t=1);var r=de();e=tt(e,t),e!==null&&(yn(e,t,r),ve(e,r))}function wm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Mc(e,r)}function km(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(b(314))}n!==null&&n.delete(t),Mc(e,r)}var qc;qc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return he=!1,lm(e,t,r);he=!!(e.flags&131072)}else he=!1,F&&t.flags&1048576&&_u(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Qn(e,t),e=t.pendingProps;var s=hr(t,ue.current);pr(t,r),s=Ji(null,t,n,e,s,r);var o=Qi();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(n)?(o=!0,us(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wi(t),s.updater=Ms,t.stateNode=s,s._reactInternals=t,Yo(t,n,e,r),t=ei(null,t,n,!0,o,r)):(t.tag=0,F&&o&&Di(t),ce(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Qn(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=Cm(n),e=Ae(n,e),s){case 0:t=Zo(null,t,n,e,r);break e;case 1:t=al(null,t,n,e,r);break e;case 11:t=ol(null,t,n,e,r);break e;case 14:t=il(null,t,n,Ae(n.type,e),r);break e}throw Error(b(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ae(n,s),Zo(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ae(n,s),al(e,t,n,s,r);case 3:e:{if(vc(t),e===null)throw Error(b(387));n=t.pendingProps,o=t.memoizedState,s=o.element,$u(e,t),fs(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=xr(Error(b(423)),t),t=ll(e,t,n,r,s);break e}else if(n!==s){s=xr(Error(b(424)),t),t=ll(e,t,n,r,s);break e}else for(we=gt(t.stateNode.containerInfo.firstChild),ke=t,F=!0,Me=null,r=Wu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),n===s){t=rt(e,t,r);break e}ce(e,t,n,r)}t=t.child}return t;case 5:return Vu(t),e===null&&Jo(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,i=s.children,Wo(n,s)?i=null:o!==null&&Wo(n,o)&&(t.flags|=32),yc(e,t),ce(e,t,i,r),t.child;case 6:return e===null&&Jo(t),null;case 13:return xc(e,t,r);case 4:return Hi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=yr(t,null,n,r):ce(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ae(n,s),ol(e,t,n,s,r);case 7:return ce(e,t,t.pendingProps,r),t.child;case 8:return ce(e,t,t.pendingProps.children,r),t.child;case 12:return ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,o=t.memoizedProps,i=s.value,U(ps,n._currentValue),n._currentValue=i,o!==null)if(ze(o.value,i)){if(o.children===s.children&&!ge.current){t=rt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=Xe(-1,r&-r),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),Qo(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(b(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Qo(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ce(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,pr(t,r),s=Re(s),n=n(s),t.flags|=1,ce(e,t,n,r),t.child;case 14:return n=t.type,s=Ae(n,t.pendingProps),s=Ae(n.type,s),il(e,t,n,s,r);case 15:return hc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ae(n,s),Qn(e,t),t.tag=1,ye(n)?(e=!0,us(t)):e=!1,pr(t,r),pc(t,n,s),Yo(t,n,s,r),ei(null,t,n,!0,e,r);case 19:return wc(e,t,r);case 22:return gc(e,t,r)}throw Error(b(156,t.tag))};function Dc(e,t){return uu(e,t)}function Sm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,r,n){return new Sm(e,t,r,n)}function oa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cm(e){if(typeof e=="function")return oa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ji)return 11;if(e===Ni)return 14}return 2}function wt(e,t){var r=e.alternate;return r===null?(r=Ee(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xn(e,t,r,n,s,o){var i=2;if(n=e,typeof e=="function")oa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Yt:return _t(r.children,s,o,t);case Ci:i=8,s|=8;break;case ko:return e=Ee(12,r,t,s|2),e.elementType=ko,e.lanes=o,e;case So:return e=Ee(13,r,t,s),e.elementType=So,e.lanes=o,e;case Co:return e=Ee(19,r,t,s),e.elementType=Co,e.lanes=o,e;case Vl:return Os(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hl:i=10;break e;case $l:i=9;break e;case ji:i=11;break e;case Ni:i=14;break e;case it:i=16,n=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Ee(i,r,t,s),t.elementType=e,t.type=n,t.lanes=o,t}function _t(e,t,r,n){return e=Ee(7,e,n,t),e.lanes=r,e}function Os(e,t,r,n){return e=Ee(22,e,n,t),e.elementType=Vl,e.lanes=r,e.stateNode={isHidden:!1},e}function yo(e,t,r){return e=Ee(6,e,null,t),e.lanes=r,e}function vo(e,t,r){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jm(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ys(0),this.expirationTimes=Ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ys(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ia(e,t,r,n,s,o,i,l,u){return e=new jm(e,t,r,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wi(o),e}function Nm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Oc(e){if(!e)return Ct;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var r=e.type;if(ye(r))return Ou(e,r,t)}return t}function Uc(e,t,r,n,s,o,i,l,u){return e=ia(r,n,!0,e,s,o,i,l,u),e.context=Oc(null),r=e.current,n=de(),s=xt(r),o=Xe(n,s),o.callback=t??null,yt(r,o,s),e.current.lanes=s,yn(e,s,n),ve(e,n),e}function Us(e,t,r,n){var s=t.current,o=de(),i=xt(s);return r=Oc(r),t.context===null?t.context=r:t.pendingContext=r,t=Xe(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=yt(s,t,i),e!==null&&(_e(e,s,i,o),Vn(e,s,i)),i}function Ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function aa(e,t){vl(e,t),(e=e.alternate)&&vl(e,t)}function bm(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function la(e){this._internalRoot=e}_s.prototype.render=la.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Us(e,t,null,null)};_s.prototype.unmount=la.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Us(null,e,null,null)}),t[et]=null}};function _s(e){this._internalRoot=e}_s.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<lt.length&&t!==0&&t<lt[r].priority;r++);lt.splice(r,0,e),r===0&&vu(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xl(){}function Em(e,t,r,n,s){if(s){if(typeof n=="function"){var o=n;n=function(){var d=Ss(i);o.call(d)}}var i=Uc(t,n,e,0,null,!1,!1,"",xl);return e._reactRootContainer=i,e[et]=i.current,sn(e.nodeType===8?e.parentNode:e),Ht(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var l=n;n=function(){var d=Ss(u);l.call(d)}}var u=ia(e,0,!1,null,null,!1,!1,"",xl);return e._reactRootContainer=u,e[et]=u.current,sn(e.nodeType===8?e.parentNode:e),Ht(function(){Us(t,u,r,n)}),u}function Fs(e,t,r,n,s){var o=r._reactRootContainer;if(o){var i=o;if(typeof s=="function"){var l=s;s=function(){var u=Ss(i);l.call(u)}}Us(t,i,e,s)}else i=Em(r,t,e,s,n);return Ss(i)}fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Or(t.pendingLanes);r!==0&&(Pi(t,r|1),ve(t,J()),!(q&6)&&(wr=J()+500,bt()))}break;case 13:Ht(function(){var n=tt(e,1);if(n!==null){var s=de();_e(n,e,1,s)}}),aa(e,1)}};Ri=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var r=de();_e(t,e,134217728,r)}aa(e,134217728)}};hu=function(e){if(e.tag===13){var t=xt(e),r=tt(e,t);if(r!==null){var n=de();_e(r,e,t,n)}aa(e,t)}};gu=function(){return O};yu=function(e,t){var r=O;try{return O=e,t()}finally{O=r}};Lo=function(e,t,r){switch(t){case"input":if(bo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Is(n);if(!s)throw Error(b(90));Jl(n),bo(n,s)}}}break;case"textarea":Kl(e,r);break;case"select":t=r.value,t!=null&&lr(e,!!r.multiple,t,!1)}};nu=ra;su=Ht;var Pm={usingClientEntryPoint:!1,Events:[xn,tr,Is,tu,ru,ra]},Mr={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rm={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=au(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zn.isDisabled&&zn.supportsFiber)try{Es=zn.inject(Rm),$e=zn}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;Ce.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(b(200));return Nm(e,t,null,r)};Ce.createRoot=function(e,t){if(!ua(e))throw Error(b(299));var r=!1,n="",s=_c;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ia(e,1,!1,null,null,r,!1,n,s),e[et]=t.current,sn(e.nodeType===8?e.parentNode:e),new la(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=au(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ht(e)};Ce.hydrate=function(e,t,r){if(!zs(t))throw Error(b(200));return Fs(null,e,t,!0,r)};Ce.hydrateRoot=function(e,t,r){if(!ua(e))throw Error(b(405));var n=r!=null&&r.hydratedSources||null,s=!1,o="",i=_c;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=Uc(t,null,e,1,r??null,s,!1,o,i),e[et]=t.current,sn(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new _s(t)};Ce.render=function(e,t,r){if(!zs(t))throw Error(b(200));return Fs(null,e,t,!1,r)};Ce.unmountComponentAtNode=function(e){if(!zs(e))throw Error(b(40));return e._reactRootContainer?(Ht(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Ce.unstable_batchedUpdates=ra;Ce.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!zs(r))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Fs(e,t,r,!1,n)};Ce.version="18.3.1-next-f1338f8080-20240426";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),zl.exports=Ce;var Tm=zl.exports,Fc,wl=Tm;Fc=wl.createRoot,wl.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fn(){return fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fn.apply(this,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));const kl="popstate";function Im(e){e===void 0&&(e={});function t(n,s){let{pathname:o,search:i,hash:l}=n.location;return pi("",{pathname:o,search:i,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:Cs(s)}return Lm(t,r,null,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ca(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Am(){return Math.random().toString(36).substr(2,8)}function Sl(e,t){return{usr:e.state,key:e.key,idx:t}}function pi(e,t,r,n){return r===void 0&&(r=null),fn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nr(t):t,{state:r,key:t&&t.key||n||Am()})}function Cs(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Nr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Lm(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:o=!1}=n,i=s.history,l=pt.Pop,u=null,d=h();d==null&&(d=0,i.replaceState(fn({},i.state,{idx:d}),""));function h(){return(i.state||{idx:null}).idx}function f(){l=pt.Pop;let y=h(),m=y==null?null:y-d;d=y,u&&u({action:l,location:C.location,delta:m})}function v(y,m){l=pt.Push;let c=pi(C.location,y,m);d=h()+1;let p=Sl(c,d),g=C.createHref(c);try{i.pushState(p,"",g)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;s.location.assign(g)}o&&u&&u({action:l,location:C.location,delta:1})}function k(y,m){l=pt.Replace;let c=pi(C.location,y,m);d=h();let p=Sl(c,d),g=C.createHref(c);i.replaceState(p,"",g),o&&u&&u({action:l,location:C.location,delta:0})}function S(y){let m=s.location.origin!=="null"?s.location.origin:s.location.href,c=typeof y=="string"?y:Cs(y);return c=c.replace(/ $/,"%20"),V(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let C={get action(){return l},get location(){return e(s,i)},listen(y){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(kl,f),u=y,()=>{s.removeEventListener(kl,f),u=null}},createHref(y){return t(s,y)},createURL:S,encodeLocation(y){let m=S(y);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:k,go(y){return i.go(y)}};return C}var Cl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cl||(Cl={}));function Mm(e,t,r){return r===void 0&&(r="/"),qm(e,t,r)}function qm(e,t,r,n){let s=typeof t=="string"?Nr(t):t,o=kr(s.pathname||"/",r);if(o==null)return null;let i=Bc(e);Dm(i);let l=null;for(let u=0;l==null&&u<i.length;++u){let d=Gm(o);l=$m(i[u],d)}return l}function Bc(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(o,i,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};u.relativePath.startsWith("/")&&(V(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let d=kt([n,u.relativePath]),h=r.concat(u);o.children&&o.children.length>0&&(V(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Bc(o.children,t,h,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:Wm(d,o.index),routesMeta:h})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,i);else for(let u of Wc(o.path))s(o,i,u)}),t}function Wc(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return s?[o,""]:[o];let i=Wc(n.join("/")),l=[];return l.push(...i.map(u=>u===""?o:[o,u].join("/"))),s&&l.push(...i),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Dm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Hm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Om=/^:[\w-]+$/,Um=3,_m=2,zm=1,Fm=10,Bm=-2,jl=e=>e==="*";function Wm(e,t){let r=e.split("/"),n=r.length;return r.some(jl)&&(n+=Bm),t&&(n+=_m),r.filter(s=>!jl(s)).reduce((s,o)=>s+(Om.test(o)?Um:o===""?zm:Fm),n)}function Hm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function $m(e,t,r){let{routesMeta:n}=e,s={},o="/",i=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,h=o==="/"?t:t.slice(o.length)||"/",f=mi({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h),v=u.route;if(!f)return null;Object.assign(s,f.params),i.push({params:s,pathname:kt([o,f.pathname]),pathnameBase:Xm(kt([o,f.pathnameBase])),route:v}),f.pathnameBase!=="/"&&(o=kt([o,f.pathnameBase]))}return i}function mi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Vm(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let o=s[0],i=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:n.reduce((d,h,f)=>{let{paramName:v,isOptional:k}=h;if(v==="*"){let C=l[f]||"";i=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const S=l[f];return k&&!S?d[v]=void 0:d[v]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:i,pattern:e}}function Vm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ca(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,u)=>(n.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function Gm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ca(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function kr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qm=e=>Jm.test(e);function Km(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?Nr(e):e,o;if(r)if(Qm(r))o=r;else{if(r.includes("//")){let i=r;r=r.replace(/\/\/+/g,"/"),ca(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?o=Nl(r.substring(1),"/"):o=Nl(r,t)}else o=t;return{pathname:o,search:Zm(n),hash:ef(s)}}function Nl(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function xo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ym(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Hc(e,t){let r=Ym(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function $c(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=Nr(e):(s=fn({},e),V(!s.pathname||!s.pathname.includes("?"),xo("?","pathname","search",s)),V(!s.pathname||!s.pathname.includes("#"),xo("#","pathname","hash",s)),V(!s.search||!s.search.includes("#"),xo("#","search","hash",s)));let o=e===""||s.pathname==="",i=o?"/":s.pathname,l;if(i==null)l=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),f-=1;s.pathname=v.join("/")}l=f>=0?t[f]:"/"}let u=Km(s,l),d=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const kt=e=>e.join("/").replace(/\/\/+/g,"/"),Xm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ef=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vc=["post","put","patch","delete"];new Set(Vc);const rf=["get",...Vc];new Set(rf);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hn(){return hn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},hn.apply(this,arguments)}const Bs=E.createContext(null),Gc=E.createContext(null),Et=E.createContext(null),Ws=E.createContext(null),st=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Jc=E.createContext(null);function nf(e,t){let{relative:r}=t===void 0?{}:t;kn()||V(!1);let{basename:n,navigator:s}=E.useContext(Et),{hash:o,pathname:i,search:l}=Hs(e,{relative:r}),u=i;return n!=="/"&&(u=i==="/"?n:kt([n,i])),s.createHref({pathname:u,search:l,hash:o})}function kn(){return E.useContext(Ws)!=null}function Gt(){return kn()||V(!1),E.useContext(Ws).location}function Qc(e){E.useContext(Et).static||E.useLayoutEffect(e)}function Kc(){let{isDataRoute:e}=E.useContext(st);return e?xf():sf()}function sf(){kn()||V(!1);let e=E.useContext(Bs),{basename:t,future:r,navigator:n}=E.useContext(Et),{matches:s}=E.useContext(st),{pathname:o}=Gt(),i=JSON.stringify(Hc(s,r.v7_relativeSplatPath)),l=E.useRef(!1);return Qc(()=>{l.current=!0}),E.useCallback(function(d,h){if(h===void 0&&(h={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let f=$c(d,JSON.parse(i),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:kt([t,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[t,n,i,o,e])}const of=E.createContext(null);function af(e){let t=E.useContext(st).outlet;return t&&E.createElement(of.Provider,{value:e},t)}function da(){let{matches:e}=E.useContext(st),t=e[e.length-1];return t?t.params:{}}function Hs(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=E.useContext(Et),{matches:s}=E.useContext(st),{pathname:o}=Gt(),i=JSON.stringify(Hc(s,n.v7_relativeSplatPath));return E.useMemo(()=>$c(e,JSON.parse(i),o,r==="path"),[e,i,o,r])}function lf(e,t){return uf(e,t)}function uf(e,t,r,n){kn()||V(!1);let{navigator:s}=E.useContext(Et),{matches:o}=E.useContext(st),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let u=i?i.pathnameBase:"/";i&&i.route;let d=Gt(),h;if(t){var f;let y=typeof t=="string"?Nr(t):t;u==="/"||(f=y.pathname)!=null&&f.startsWith(u)||V(!1),h=y}else h=d;let v=h.pathname||"/",k=v;if(u!=="/"){let y=u.replace(/^\//,"").split("/");k="/"+v.replace(/^\//,"").split("/").slice(y.length).join("/")}let S=Mm(e,{pathname:k}),C=ff(S&&S.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:kt([u,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:kt([u,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r,n);return t&&C?E.createElement(Ws.Provider,{value:{location:hn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:pt.Pop}},C):C}function cf(){let e=vf(),t=tf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),r?E.createElement("pre",{style:s},r):null,null)}const df=E.createElement(cf,null);class pf extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?E.createElement(st.Provider,{value:this.props.routeContext},E.createElement(Jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mf(e){let{routeContext:t,match:r,children:n}=e,s=E.useContext(Bs);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(st.Provider,{value:t},n)}function ff(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,l=(s=r)==null?void 0:s.errors;if(l!=null){let h=i.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);h>=0||V(!1),i=i.slice(0,Math.min(i.length,h+1))}let u=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<i.length;h++){let f=i[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:v,errors:k}=r,S=f.route.loader&&v[f.route.id]===void 0&&(!k||k[f.route.id]===void 0);if(f.route.lazy||S){u=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((h,f,v)=>{let k,S=!1,C=null,y=null;r&&(k=l&&f.route.id?l[f.route.id]:void 0,C=f.route.errorElement||df,u&&(d<0&&v===0?(wf("route-fallback"),S=!0,y=null):d===v&&(S=!0,y=f.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,v+1)),c=()=>{let p;return k?p=C:S?p=y:f.route.Component?p=E.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=h,E.createElement(mf,{match:f,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:p})};return r&&(f.route.ErrorBoundary||f.route.errorElement||v===0)?E.createElement(pf,{location:r.location,revalidation:r.revalidation,component:C,error:k,children:c(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):c()},null)}var Yc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yc||{}),Xc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xc||{});function hf(e){let t=E.useContext(Bs);return t||V(!1),t}function gf(e){let t=E.useContext(Gc);return t||V(!1),t}function yf(e){let t=E.useContext(st);return t||V(!1),t}function Zc(e){let t=yf(),r=t.matches[t.matches.length-1];return r.route.id||V(!1),r.route.id}function vf(){var e;let t=E.useContext(Jc),r=gf(),n=Zc();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function xf(){let{router:e}=hf(Yc.UseNavigateStable),t=Zc(Xc.UseNavigateStable),r=E.useRef(!1);return Qc(()=>{r.current=!0}),E.useCallback(function(s,o){o===void 0&&(o={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,hn({fromRouteId:t},o)))},[e,t])}const bl={};function wf(e,t,r){bl[e]||(bl[e]=!0)}function kf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Sf(e){return af(e.context)}function Qt(e){V(!1)}function Cf(e){let{basename:t="/",children:r=null,location:n,navigationType:s=pt.Pop,navigator:o,static:i=!1,future:l}=e;kn()&&V(!1);let u=t.replace(/^\/*/,"/"),d=E.useMemo(()=>({basename:u,navigator:o,static:i,future:hn({v7_relativeSplatPath:!1},l)}),[u,l,o,i]);typeof n=="string"&&(n=Nr(n));let{pathname:h="/",search:f="",hash:v="",state:k=null,key:S="default"}=n,C=E.useMemo(()=>{let y=kr(h,u);return y==null?null:{location:{pathname:y,search:f,hash:v,state:k,key:S},navigationType:s}},[u,h,f,v,k,S,s]);return C==null?null:E.createElement(Et.Provider,{value:d},E.createElement(Ws.Provider,{children:r,value:C}))}function jf(e){let{children:t,location:r}=e;return lf(fi(t),r)}new Promise(()=>{});function fi(e,t){t===void 0&&(t=[]);let r=[];return E.Children.forEach(e,(n,s)=>{if(!E.isValidElement(n))return;let o=[...t,s];if(n.type===E.Fragment){r.push.apply(r,fi(n.props.children,o));return}n.type!==Qt&&V(!1),!n.props.index||!n.props.children||V(!1);let i={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=fi(n.props.children,o)),r.push(i)}),r}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},js.apply(this,arguments)}function ed(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function Nf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bf(e,t){return e.button===0&&(!t||t==="_self")&&!Nf(e)}const Ef=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pf=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Rf="6";try{window.__reactRouterVersion=Rf}catch{}const Tf=E.createContext({isTransitioning:!1}),If="startTransition",El=xd[If];function Af(e){let{basename:t,children:r,future:n,window:s}=e,o=E.useRef();o.current==null&&(o.current=Im({window:s,v5Compat:!0}));let i=o.current,[l,u]=E.useState({action:i.action,location:i.location}),{v7_startTransition:d}=n||{},h=E.useCallback(f=>{d&&El?El(()=>u(f)):u(f)},[u,d]);return E.useLayoutEffect(()=>i.listen(h),[i,h]),E.useEffect(()=>kf(n),[n]),E.createElement(Cf,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}const Lf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=E.forwardRef(function(t,r){let{onClick:n,relative:s,reloadDocument:o,replace:i,state:l,target:u,to:d,preventScrollReset:h,viewTransition:f}=t,v=ed(t,Ef),{basename:k}=E.useContext(Et),S,C=!1;if(typeof d=="string"&&Mf.test(d)&&(S=d,Lf))try{let p=new URL(window.location.href),g=d.startsWith("//")?new URL(p.protocol+d):new URL(d),x=kr(g.pathname,k);g.origin===p.origin&&x!=null?d=x+g.search+g.hash:C=!0}catch{}let y=nf(d,{relative:s}),m=Of(d,{replace:i,state:l,target:u,preventScrollReset:h,relative:s,viewTransition:f});function c(p){n&&n(p),p.defaultPrevented||m(p)}return E.createElement("a",js({},v,{href:S||y,onClick:C||o?n:c,ref:r,target:u}))}),qf=E.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:s=!1,className:o="",end:i=!1,style:l,to:u,viewTransition:d,children:h}=t,f=ed(t,Pf),v=Hs(u,{relative:f.relative}),k=Gt(),S=E.useContext(Gc),{navigator:C,basename:y}=E.useContext(Et),m=S!=null&&Uf(v)&&d===!0,c=C.encodeLocation?C.encodeLocation(v).pathname:v.pathname,p=k.pathname,g=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;s||(p=p.toLowerCase(),g=g?g.toLowerCase():null,c=c.toLowerCase()),g&&y&&(g=kr(g,y)||g);const x=c!=="/"&&c.endsWith("/")?c.length-1:c.length;let N=p===c||!i&&p.startsWith(c)&&p.charAt(x)==="/",w=g!=null&&(g===c||!i&&g.startsWith(c)&&g.charAt(c.length)==="/"),j={isActive:N,isPending:w,isTransitioning:m},I=N?n:void 0,P;typeof o=="function"?P=o(j):P=[o,N?"active":null,w?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let D=typeof l=="function"?l(j):l;return E.createElement(Qr,js({},f,{"aria-current":I,className:P,ref:r,style:D,to:u,viewTransition:d}),typeof h=="function"?h(j):h)});var hi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(hi||(hi={}));var Pl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pl||(Pl={}));function Df(e){let t=E.useContext(Bs);return t||V(!1),t}function Of(e,t){let{target:r,replace:n,state:s,preventScrollReset:o,relative:i,viewTransition:l}=t===void 0?{}:t,u=Kc(),d=Gt(),h=Hs(e,{relative:i});return E.useCallback(f=>{if(bf(f,r)){f.preventDefault();let v=n!==void 0?n:Cs(d)===Cs(h);u(e,{replace:v,state:s,preventScrollReset:o,relative:i,viewTransition:l})}},[d,u,h,n,s,r,e,o,i,l])}function Uf(e,t){t===void 0&&(t={});let r=E.useContext(Tf);r==null&&V(!1);let{basename:n}=Df(hi.useViewTransitionState),s=Hs(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=kr(r.currentLocation.pathname,n)||r.currentLocation.pathname,i=kr(r.nextLocation.pathname,n)||r.nextLocation.pathname;return mi(s.pathname,i)!=null||mi(s.pathname,o)!=null}function _f(){const t=Gt().pathname.includes("/courses");return a.jsx("header",{className:"bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg",children:a.jsx("div",{className:"container mx-auto px-4 py-3",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs(Qr,{to:"/",className:"flex items-center gap-3 group",children:[a.jsx("span",{className:"w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white group-hover:bg-white/30 transition-colors shadow-md",children:"🎓"}),a.jsxs("div",{children:[a.jsx("span",{className:"text-xl font-bold tracking-tight block",children:"EduPlatform"}),a.jsx("span",{className:"text-xs text-white/70 block",children:"Learn by doing"})]})]}),a.jsxs("nav",{className:"flex items-center gap-6",children:[a.jsxs(Qr,{to:"/courses",className:`px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${t?"bg-white/20 shadow-inner":"text-white/90 hover:text-white hover:bg-white/10"}`,children:[a.jsx("span",{children:"📚"}),"Courses"]}),a.jsxs(Qr,{to:"/progress",className:"text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all flex items-center gap-2",children:[a.jsx("span",{children:"📊"}),"My Progress"]})]})]})})})}function zf(){return a.jsx("footer",{className:"bg-primary-700 mt-8 text-white",children:a.jsxs("div",{className:"container mx-auto px-4 py-6 text-sm",children:["© ",new Date().getFullYear()," EduPlatform — Educational demo app"]})})}function Ff(){return a.jsxs("div",{className:"min-h-screen flex flex-col",children:[a.jsx(_f,{}),a.jsx("main",{className:"container mx-auto px-4 py-8 flex-1",children:a.jsx(Sf,{})}),a.jsx(zf,{})]})}const br=[{id:"1",title:"Git & GitHub",slug:"git-and-github",description:"Master version control with Git and collaborate effectively using GitHub. Learn branching, pull requests, and professional workflows.",level:"Beginner",duration:"2-3 hours",prerequisites:["Basic computer skills","Familiarity with command line basics"],objectives:["Understand version control concepts","Master Git commands and workflows","Collaborate using GitHub","Manage projects with branching strategies"],skills:["Version Control","Branch Management","Code Collaboration","Pull Requests","GitHub Workflows"],category:"Development Tools",instructor:"John Doe",rating:4.8,students:1250,projects:3,tags:["git","github","version-control","collaboration"],lastUpdated:"2024-01-15",thumbnail:"/images/git-course.jpg"},{id:"2",title:"Node & Express.js",slug:"node-and-express",description:"Build scalable backend services with Node.js and Express.js. Create REST APIs, middleware, authentication, and deploy production-ready applications.",level:"Intermediate",duration:"6-8 hours",prerequisites:["JavaScript fundamentals","Basic understanding of HTTP","Async/await concepts"],objectives:["Build RESTful APIs with Express.js","Implement middleware and error handling","Connect to databases (MongoDB)","Add authentication and security","Deploy applications to production"],skills:["Backend Development","REST API Design","Middleware Implementation","Database Integration","Authentication & Security"],category:"Backend Development",instructor:"Jane Smith",rating:4.9,students:890,projects:5,tags:["nodejs","express","backend","api","mongodb"],lastUpdated:"2024-01-10",thumbnail:"/images/express-course.jpg"},{id:"3",title:"React Fundamentals",slug:"react-fundamentals",description:"Learn modern React development with hooks, context, and best practices. Build interactive user interfaces with component-based architecture.",level:"Beginner",duration:"4-5 hours",prerequisites:["HTML & CSS basics","JavaScript ES6+ features","Basic programming concepts"],objectives:["Understand React components and JSX","Master React hooks (useState, useEffect)","Manage state and props effectively","Build forms and handle events","Create reusable component libraries"],skills:["React Components","Hooks & State Management","Event Handling","Component Composition","Modern React Patterns"],category:"Frontend Development",instructor:"Mike Johnson",rating:4.7,students:2100,projects:4,tags:["react","frontend","javascript","ui","components"],lastUpdated:"2024-01-12",thumbnail:"/images/react-course.jpg"}];function td({course:e}){return a.jsx(Qr,{to:`/courses/${e.slug}`,"aria-label":`Open course ${e.title}`,className:"card border-l-4 border-primary-500 block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150 bg-white rounded-xl overflow-hidden",children:a.jsx("div",{className:"p-5",children:a.jsx("div",{className:"flex items-start justify-between",children:a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2 text-slate-900",children:e.title}),a.jsx("p",{className:"text-sm text-slate-600 mb-3 line-clamp-2",children:e.description}),a.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-500 mb-3",children:[a.jsx("span",{className:`inline-block px-2 py-1 rounded-full ${e.level==="Beginner"?"bg-green-100 text-green-800":e.level==="Intermediate"?"bg-blue-100 text-blue-800":"bg-purple-100 text-purple-800"}`,children:e.level}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.duration]})]}),e.prerequisites&&e.prerequisites.length>0&&a.jsxs("div",{className:"text-xs text-slate-500",children:[a.jsx("span",{className:"font-medium",children:"Prerequisites:"})," ",e.prerequisites.slice(0,2).join(", "),e.prerequisites.length>2&&"..."]})]})})})})}function Bf(){return a.jsxs("div",{children:[a.jsxs("section",{className:"text-center py-12",children:[a.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Learn new skills online"}),a.jsx("p",{className:"text-gray-600",children:"Bite-sized courses to help you grow."})]}),a.jsxs("section",{children:[a.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Featured courses"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:br.map(e=>a.jsx(td,{course:e},e.id))})]})]})}const qe={slug:"git-and-github",title:"Git & GitHub",description:"Master version control with Git and collaborate effectively using GitHub. Learn branching, pull requests, and professional workflows.",level:"Beginner",duration:"2-3 hours",prerequisites:["Basic computer skills","Familiarity with command line basics"],skillsGained:["Version Control","Branch Management","Code Collaboration","Pull Requests","GitHub Workflows"],totalModules:3,totalLessons:8,totalExercises:4,totalProjects:1,welcomeMessage:{title:"Welcome to Git & GitHub Mastery",description:"Learn professional version control skills that every developer needs. From basic commits to advanced collaboration workflows."},completionCertificate:!0,sections:[{id:"getting-started",title:"Getting Started with Git",duration:"45 minutes",objectives:["Understand version control concepts","Install and configure Git","Create your first repository","Make and track changes"],lessons:[{id:"what-is-git",title:"What is Git?",type:"theory",content:{paragraphs:["Git is a distributed version control system that helps developers track changes in their codebase, collaborate with others, and maintain project history.","Unlike centralized version control systems, every developer has a complete copy of the repository with full history."],keyPoints:["Distributed version control system","Tracks changes to files over time","Enables collaboration and branching","Maintains complete project history"]}},{id:"install-setup",title:"Installation & Setup",type:"practical",content:{steps:[{text:"Install Git on your system:",code:`# Windows: Download from git-scm.com
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
});`}]},{id:"module-7",title:"Module 7: Authentication & Security",duration:"1 hour 30 minutes",objectives:["Understand what authentication is and why it's important","Learn how JWT works (like a digital ID card)","Implement user registration and login","Protect routes with authentication middleware","Add basic security measures"],lessons:[{id:"authentication-basics",title:"What is Authentication?",type:"theory",content:{description:"Authentication is like showing your ID card to get into a club. It proves WHO you are to the system.",analogy:{title:"The Clubhouse Metaphor",scenarios:[{situation:"Without Authentication",explanation:"Anyone can walk into the clubhouse, use the facilities, and take things."},{situation:"With Authentication",explanation:"You need to show your membership card (login) to enter. The bouncer (server) checks if it's valid."}]},keyConcepts:[{term:"Registration",explanation:"Getting your membership card for the first time"},{term:"Login",explanation:"Showing your card to enter the clubhouse"},{term:"Session",explanation:"How long you can stay inside before needing to show your card again"}],realWorldExamples:["Logging into Facebook/Instagram","Banking app login","Email account access"]}},{id:"jwt-explained",title:"What are JWTs? (Digital ID Cards)",type:"theory",content:{description:"JWT stands for JSON Web Token. It's like a digital ID card that your app creates after you login successfully.",visual:`
          ┌─────────────────────────────────┐
          │        JWT STRUCTURE            │
          ├─────────────────────────────────┤
          │   HEADER                         │
          │   (Type: JWT, Algorithm: HS256) │
          ├─────────────────────────────────┤
          │   PAYLOAD                       │
          │   (User ID, Name, Expiry)       │
          ├─────────────────────────────────┤
          │   SIGNATURE                     │
          │   (Secret Key + Hash)           │
          └─────────────────────────────────┘
        `,jwtParts:[{part:"Header",analogy:"The plastic part of your ID card",contains:"Type of token and encryption algorithm"},{part:"Payload",analogy:"The information printed on your ID",contains:"User data (ID, name, expiry date)"},{part:"Signature",analogy:"The hologram or security sticker",contains:"Secret code that proves the ID is genuine"}],howItWorks:["1. User logs in with email/password","2. Server creates a JWT (digital ID card)","3. Client stores the JToken","4. Client sends JWT with every request","5. Server verifies JWT before allowing access"]}},{id:"password-security",title:"Password Security: Why Hash Passwords?",type:"theory",content:{description:"Never store passwords in plain text! Imagine writing your password on a sticky note vs putting it in a safe.",comparison:{badPractice:"Plain Text Passwords",goodPractice:"Hashed Passwords",analogy:"Writing password on paper vs putting it in a locked safe"},hashExample:`Password: "mypassword123"
Hash: "$2a$12$N9qo8uLOickgx2ZMRZoMy.Mrq1V1zHX7cYq3iB6C7QjK9pVW1lX.O"

Even tiny changes create completely different hashes:
"mypassword124" → "$2a$12$differenthashcompletely..."
        `,keyPoints:["Hashing is one-way: Can't convert hash back to password","Same password always produces same hash","bcrypt adds 'salt' - extra randomness for security","12 is the 'work factor' - higher = more secure but slower"]}},{id:"jwt-authentication",title:"JWT Authentication: Hands-On",type:"example",content:{description:"Let's implement authentication step by step. We'll create two endpoints: /register and /login",steps:[{step:1,text:"Install required packages",code:"npm install jsonwebtoken bcryptjs",explanation:"jsonwebtoken for creating/verifying tokens, bcryptjs for password hashing"},{step:2,text:"Set up environment variable for secret key",code:"Create .env file with: JWT_SECRET=your-super-secret-key-here",explanation:"Never hardcode secrets! Use environment variables."}],code:`// Import required modules
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET;

// REGISTER: Creating a new user (like getting a club membership)
app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Step 1: Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        error: 'User already exists',
        suggestion: 'Try logging in instead'
      });
    }
    
    // Step 2: Hash the password (put it in a safe)
    const hashedPassword = await bcrypt.hash(password, 12);
    // 12 is the 'work factor' - higher = more secure but slower
    
    // Step 3: Create and save user
    const user = new User({
      name,
      email,
      password: hashedPassword  // Store the hash, NOT the plain password!
    });
    
    await user.save();
    
    // Step 4: Generate JWT (create digital ID card)
    const token = jwt.sign(
      { userId: user._id },  // What's written on the ID card
      JWT_SECRET,            // The secret to sign it
      { expiresIn: '7d' }    // ID card expires in 7 days
    );
    
    // Step 5: Send response
    res.status(201).json({
      message: 'Registration successful!',
      token,  // The digital ID card
      user: {
        id: user._id,
        name,
        email
      }
    });
    
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      error: 'Registration failed',
      details: error.message 
    });
  }
});

// LOGIN: Existing users getting access
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Step 1: Find the user
    const user = await User.findOne({ email });
    if (!user) {
      // Don't say "user doesn't exist" - security best practice
      return res.status(400).json({ 
        error: 'Invalid credentials',
        hint: 'Check your email and password'
      });
    }
    
    // Step 2: Compare password with hash
    const isValidPassword = await bcrypt.compare(password, user.password);
    // bcrypt.compare checks if password matches the hash
    
    if (!isValidPassword) {
      return res.status(400).json({ 
        error: 'Invalid credentials',
        hint: 'Check your email and password'
      });
    }
    
    // Step 3: Generate new JWT
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Step 4: Send success response
    res.json({
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Login failed',
      details: error.message 
    });
  }
});`}},{id:"auth-middleware",title:"Authentication Middleware: The Bouncer",type:"example",content:{description:"Middleware is like a bouncer at the club door. It checks your JWT (ID card) before letting you in.",analogy:"The bouncer checks: 1) Do you have an ID? 2) Is it valid? 3) Is it expired?",code:`// Create middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  try {
    // Step 1: Get token from header
    // Format should be: "Authorization: Bearer your-token-here"
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // Step 2: Check if token exists
    if (!token) {
      return res.status(401).json({ 
        error: 'Access denied',
        message: 'No token provided. Please login first.'
      });
    }
    
    // Step 3: Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // This checks: Is the signature valid? Is it expired?
    
    // Step 4: Find the user
    const user = await User.findById(decoded.userId).select('-password');
    // .select('-password') removes password from the result
    
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid token',
        message: 'User not found. Token might be outdated.'
      });
    }
    
    // Step 5: Attach user to request
    req.user = user;  // Now all routes can access req.user
    next();  // Allow request to continue to the route handler
    
  } catch (error) {
    // Different error types
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        error: 'Invalid token',
        message: 'Token is malformed or corrupted.'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        error: 'Token expired',
        message: 'Please login again.'
      });
    }
    
    // Any other error
    res.status(401).json({ 
      error: 'Authentication failed',
      details: error.message 
    });
  }
};

module.exports = authMiddleware;`}},{id:"protected-routes",title:"Using Protected Routes",type:"example",content:{description:"Now let's use our middleware to protect routes. Think of it as putting a bouncer in front of VIP areas.",code:`// Import the middleware
const authMiddleware = require('./middleware/authMiddleware');

// PUBLIC ROUTES (no bouncer)
app.get('/public', (req, res) => {
  res.json({ message: 'Anyone can see this!' });
});

// PROTECTED ROUTES (has bouncer)
app.get('/profile', authMiddleware, (req, res) => {
  // If we get here, the bouncer (authMiddleware) approved the user
  res.json({
    message: 'Welcome to your profile!',
    user: req.user,  // Available from authMiddleware
    secretData: 'This is only for authenticated users'
  });
});

// Multiple middlewares can be chained
app.get('/dashboard', authMiddleware, someOtherMiddleware, (req, res) => {
  // authMiddleware runs first, then someOtherMiddleware
  res.json({ message: 'Dashboard data', user: req.user });
});

// Example: Get current user's posts
app.get('/my-posts', authMiddleware, async (req, res) => {
  try {
    const posts = await Post.find({ author: req.user._id });
    res.json({
      user: req.user.name,
      postCount: posts.length,
      posts: posts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}},{id:"security-best-practices",title:"Security Best Practices",type:"theory",content:{description:"Essential security measures every app should have.",checklist:[{item:"✅ Use environment variables for secrets",why:"Prevents accidental commits of passwords to GitHub"},{item:"✅ Always hash passwords with bcrypt",why:"Protects users even if database is compromised"},{item:"✅ Set reasonable token expiry",why:"Limits damage if token is stolen"},{item:"✅ Use HTTPS in production",why:"Encrypts data between client and server"},{item:"✅ Sanitize user input",why:"Prevents SQL injection and other attacks"},{item:"✅ Implement rate limiting",why:"Prevents brute force attacks"}],commonMistakes:["❌ Storing plain text passwords","❌ Using weak JWT secrets","❌ Not validating user input","❌ Exposing error details to users","❌ Using GET for sensitive operations"]}}],exercises:[{id:"ex-7-1",title:"Secure Blog API",description:"Add authentication to your blog API",task:`Enhance your blog with these security features:
1. Users must register/login to create posts
2. Users can only edit/delete their own posts
3. Add author information to posts
4. Create a "My Posts" endpoint

Use this starter Post model:`,starterCode:`// Post model (add author field)
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});`,hint:"Remember: authMiddleware adds req.user. Compare post.author with req.user._id using .toString()",solution:`// 1. Create post (protected route)
app.post('/posts', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ 
        error: 'Title and content are required' 
      });
    }
    
    const post = new Post({
      title,
      content,
      author: req.user._id  // From authMiddleware
    });
    
    await post.save();
    
    // Populate author info for response
    await post.populate('author', 'name email');
    
    res.status(201).json({
      message: 'Post created successfully',
      post: post
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. Update post (only author can edit)
app.put('/posts/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Check if current user is the author
    // Must convert ObjectId to string for comparison
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        error: 'Permission denied',
        message: 'You can only edit your own posts'
      });
    }
    
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { 
        new: true,           // Return updated document
        runValidators: true  // Run schema validators
      }
    ).populate('author', 'name email');
    
    res.json({
      message: 'Post updated successfully',
      post: updatedPost
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. Get current user's posts
app.get('/my-posts', authMiddleware, async (req, res) => {
  try {
    const posts = await Post.find({ author: req.user._id })
      .populate('author', 'name email')
      .sort({ createdAt: -1 }); // Newest first
    
    res.json({
      user: req.user.name,
      postCount: posts.length,
      posts: posts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Get single post with author info
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'name email');
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`},{id:"ex-7-2",title:"Enhanced Error Messages",description:"Improve error handling for better user experience",task:`Improve the authentication error messages:
1. Differentiate between "user not found" and "wrong password"
2. Add validation for email format
3. Check password strength (min 6 characters)
4. Return helpful suggestions`,solution:`app.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Validation
    if (!email || !password || !name) {
      return res.status(400).json({ 
        error: 'Missing fields',
        required: ['email', 'password', 'name']
      });
    }
    
    // Email format validation
    const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        example: 'user@example.com'
      });
    }
    
    // Password strength
    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'Password too short',
        minimum: '6 characters',
        suggestion: 'Add numbers or special characters'
      });
    }
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        error: 'Email already registered',
        suggestion: 'Try logging in or use forgot password'
      });
    }
    
    // Rest of registration logic...
    
  } catch (error) {
    res.status(500).json({ 
      error: 'Registration failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});`}],quiz:[{question:"What is the main purpose of hashing passwords?",options:["To make passwords shorter","To encrypt passwords so they can be decrypted later","To create a one-way secure representation of passwords","To make passwords easier to remember"],correct:2,explanation:"Hashing creates a one-way transformation. You can't get the original password back from the hash."},{question:"Where should you store your JWT_SECRET?",options:["Hardcoded in your JavaScript files","In a .env file that's not committed to GitHub","In the database","In the browser's localStorage"],correct:1,explanation:"Environment variables keep secrets out of your code and version control."},{question:"What does the authMiddleware do?",options:["Creates new users","Hashes passwords","Checks if a JWT is valid and attaches user to request","Sends emails"],correct:2,explanation:"It's like a bouncer - checks the token and if valid, adds the user to req.user."}],commonMistakes:[{mistake:"Comparing ObjectIds without .toString()",solution:"Always use: post.author.toString() === req.user._id.toString()"},{mistake:"Forgetting to remove password from user responses",solution:"Use .select('-password') when fetching users"},{mistake:"Not handling JWT expiration",solution:"Check error.name === 'TokenExpiredError' in authMiddleware"}],testingYourAPI:["1. Register a new user with POST /register","2. Login with POST /login to get a token","3. Try accessing /profile WITHOUT token → should get 401","4. Access /profile WITH token in Authorization header → should work","5. Create a post with POST /posts using your token"]},{id:"module-8",title:"Module 8: Authorization & User Roles",duration:"45 minutes",objectives:["Understand authorization vs authentication","Add user roles (member, admin)","Protect routes using role checks","Create admin-only routes"],lessons:[{id:"auth-vs-authorization",title:"Authentication vs Authorization",type:"theory",content:{description:"Learn the difference between authentication and authorization:",keyPoints:["Authentication: WHO are you? (Login/Register)","Authorization: WHAT can you do? (Permissions)","Example: Authentication checks your ID card, Authorization checks what rooms you can enter"],analogy:{title:"Clubhouse Example",description:"Think of your app as a clubhouse:",scenarios:[{situation:"Authentication",explanation:"You show your membership card at the door (login)"},{situation:"Authorization - Member",explanation:"Members can enter the main room but not the VIP section"},{situation:"Authorization - Admin",explanation:"Admins can enter all rooms, including the VIP section"}]}}},{id:"add-role-to-user",title:"Step 1: Add Role to User Model",type:"example",content:{description:"First, let's add a simple role field to our User model:",code:`// Update your User model in models/User.js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Add this new role field
  role: {
    type: String,
    enum: ['member', 'admin'], // Only these two values allowed
    default: 'member' // New users are members by default
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);`}},{id:"simple-admin-middleware",title:"Step 2: Create Simple Admin Middleware",type:"example",content:{description:"Create middleware that checks if the user is an admin. This should be used AFTER your authMiddleware:",code:`// Create a new middleware file: middleware/adminAuth.js
const isAdmin = (req, res, next) => {
  // First, make sure user is authenticated (req.user exists)
  if (!req.user) {
    return res.status(401).json({ 
      error: 'Please login first' 
    });
  }
  
  // Check if user is admin
  if (req.user.role !== 'admin') {
    return res.status(403).json({ 
      error: 'Admin access required',
      message: 'Only administrators can access this feature'
    });
  }
  
  // User is admin, continue to the route
  next();
};

module.exports = isAdmin;`}},{id:"admin-route-example",title:"Step 3: Protect Admin Routes",type:"example",content:{description:"Use the isAdmin middleware to protect specific routes. Note the order: authMiddleware first, then isAdmin:",code:`// In your routes file (e.g., routes/admin.js)
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminAuth');

// Route 1: Admin dashboard - only admins can see
router.get('/dashboard', authMiddleware, isAdmin, (req, res) => {
  res.json({
    message: 'Welcome to Admin Dashboard',
    admin: req.user.name,
    role: req.user.role,
    features: [
      'View all users',
      'Manage content',
      'See analytics'
    ]
  });
});

// Route 2: Get all users - only admins can see
router.get('/users', authMiddleware, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({
      count: users.length,
      users: users
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;`}},{id:"using-in-main-app",title:"Step 4: Set Up Routes in Main App",type:"example",content:{description:"Mount the admin routes in your main app.js file:",code:`// In your app.js or server.js file
const adminRoutes = require('./routes/admin');

// Mount admin routes under /admin
app.use('/admin', adminRoutes);

// Your other public routes
app.get('/profile', authMiddleware, (req, res) => {
  res.json({
    user: req.user,
    message: 'Anyone can see their own profile'
  });
});

// Test these endpoints:
// GET /admin/dashboard - needs admin token
// GET /admin/users - needs admin token
// GET /profile - needs any user token`}},{id:"creating-admin-user",title:"Step 5: How to Create an Admin User",type:"practical",content:{description:"Since new users default to 'member', here's how to create an admin user:",steps:[{text:"Option 1: Direct database update (for development)",code:`// In MongoDB Compass or terminal
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin" } }
)`},{text:"Option 2: Create a special registration route (for admins only)",code:`// routes/setup.js - Don't expose this in production!
app.post('/setup/admin', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create admin user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: 'admin' // Explicitly set as admin
    });
    
    await user.save();
    
    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.status(201).json({ 
      message: 'Admin user created',
      token,
      user: { id: user._id, name, email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}]}}],exercises:[{id:"ex-8-1",title:"Simple Role-Based Blog",description:"Add role-based permissions to your blog",task:`Enhance your blog API with these requirements:
1. Regular users (members) can only create posts
2. Admins can delete any post
3. Only post owners can edit their own posts
4. Create a simple admin panel route

Use this starter code for the Post model:`,starterCode:`const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});`,solution:`// Middleware to check if user can edit post
const canEditPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Check if user is the author OR an admin
    const isAuthor = post.author.toString() === req.user._id.toString();
    const isAdmin = req.user.role === 'admin';
    
    if (isAuthor || isAdmin) {
      req.post = post;
      next();
    } else {
      return res.status(403).json({ 
        error: 'Not authorized to edit this post' 
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Middleware to check if user can delete post
const canDeletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    // Only admins can delete posts (or the author if you want)
    const isAdmin = req.user.role === 'admin';
    const isAuthor = post.author.toString() === req.user._id.toString();
    
    if (isAdmin || isAuthor) {
      req.post = post;
      next();
    } else {
      return res.status(403).json({ 
        error: 'Only admins can delete posts' 
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Routes
app.put('/posts/:id', authMiddleware, canEditPost, async (req, res) => {
  // Only author or admin can edit
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).populate('author', 'name email role');
  
  res.json(updatedPost);
});

app.delete('/posts/:id', authMiddleware, canDeletePost, async (req, res) => {
  // Only admin can delete
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted successfully' });
});

// Admin route to get all posts (not just user's)
app.get('/admin/posts', authMiddleware, isAdmin, async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name email role')
      .sort({ createdAt: -1 });
    
    res.json({
      count: posts.length,
      posts: posts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`},{id:"ex-8-2",title:"User Profile with Role Display",description:"Create a user profile that shows different information based on role",task:`Create a user profile system where:
1. Users can see their own profile with all details
2. Members can only see basic info of other users
3. Admins can see all details of any user
4. Add a simple "role badge" to the profile

Implement this in the /profile/:id route.`,hint:"Check if req.user._id === req.params.id to see if it's their own profile",solution:`app.get('/profile/:id?', authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id || req.user._id;
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Check if viewing own profile
    const isOwnProfile = req.user._id.toString() === userId.toString();
    const isAdmin = req.user.role === 'admin';
    
    // Basic info everyone can see
    const profileData = {
      id: user._id,
      name: user.name,
      role: user.role,
      roleBadge: user.role === 'admin' ? '👑 Admin' : '👤 Member',
      createdAt: user.createdAt
    };
    
    // Only show email and detailed info to self or admins
    if (isOwnProfile || isAdmin) {
      profileData.email = user.email;
      profileData.isOwnProfile = isOwnProfile;
      profileData.canEdit = true;
      
      // Admins see extra info
      if (isAdmin && !isOwnProfile) {
        profileData.isAdminViewing = true;
      }
    }
    
    res.json(profileData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`}],quiz:[{question:"What is the main difference between authentication and authorization?",options:["Authentication is for checking passwords, authorization is for checking usernames","Authentication verifies WHO you are, authorization verifies WHAT you can do","Authentication is for admins only, authorization is for all users","They mean the same thing"],correct:1,explanation:"Authentication confirms your identity (login), while authorization determines your permissions (what features you can access)."},{question:"In our user model, what is the default role for new users?",options:["admin","member","moderator","guest"],correct:1,explanation:"We set the default role to 'member' in our user schema: default: 'member'."},{question:"What HTTP status code should you return when a non-admin tries to access an admin-only route?",options:["200 - OK","401 - Unauthorized","403 - Forbidden","404 - Not Found"],correct:2,explanation:"403 - Forbidden is the correct status when a user is authenticated but doesn't have permission to access a resource."}],commonMistakes:[{mistake:"Forgetting to check authentication before authorization",solution:"Always use authMiddleware BEFORE role-checking middleware: app.get('/admin', authMiddleware, isAdmin, handler)"},{mistake:"Hardcoding user IDs instead of using req.user",solution:"Always get the current user from req.user (set by authMiddleware) not from request body"},{mistake:"Not using .toString() when comparing ObjectIds",solution:"MongoDB ObjectIds need to be converted to strings: post.author.toString() === req.user._id.toString()"}],nextSteps:["Try adding a 'moderator' role with specific permissions","Create a user management page for admins","Add role-based UI elements in your frontend","Implement permission levels (e.g., moderator can edit but not delete)"]},{id:"module-9",title:"Module 9: File Uploads with Multer",duration:"1 hour",objectives:["Understand what Multer is and how it works","Configure Multer for file uploads","Implement secure file validation","Handle single and multiple file uploads"],lessons:[{id:"what-is-multer",title:"What is Multer?",type:"theory",content:{paragraphs:["Multer is middleware for handling multipart/form-data, which is primarily used for uploading files in Express.","It processes files before they reach your route handlers, making file uploads much easier."],keyPoints:["Handles file uploads in Express","Processes multipart/form-data","Can store files on disk or in memory","Includes file validation options"],analogy:{title:"The Post Office Analogy",scenarios:[{situation:"Regular Forms (JSON)",explanation:"Like sending a letter - just text content in an envelope"},{situation:"File Uploads with Multer",explanation:"Like sending a package - can contain files, images, documents along with text"}]},keyConcepts:[{term:"multipart/form-data",explanation:"A special format browsers use to send files along with form data"},{term:"Middleware",explanation:"Multer sits between the request and your route handler, processing files first"},{term:"Disk Storage",explanation:"Saves files to your server's filesystem"},{term:"Memory Storage",explanation:"Keeps files in memory (good for processing before saving)"}]}},{id:"multer-setup",title:"Setting Up Multer (ES Modules)",type:"practical",content:{steps:[{text:"Install Multer package:",code:"npm install multer"},{text:"Create uploads directory:",code:"mkdir uploads"}],code:`import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Basic Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store in 'uploads' folder
  },
  filename: (req, file, cb) => {
    // Create unique filename
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage: storage });

// Single file upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    message: 'File uploaded successfully!',
    file: req.file
  });
});

// Multiple files upload
app.post('/upload-multiple', upload.array('files', 5), (req, res) => {
  res.json({
    message: 'Files uploaded successfully!',
    files: req.files
  });
});

// Mixed upload (single file + fields)
app.post('/upload-mixed', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 3 }
]), (req, res) => {
  res.json({
    avatar: req.files['avatar'][0],
    gallery: req.files['gallery']
  });
});`}},{id:"file-validation",title:"File Validation & Security",type:"theory",content:{description:"Never trust user-uploaded files! Always validate and sanitize them.",checklist:[{item:"✅ Check file types (MIME types)",why:"Prevent users from uploading executable files or scripts"},{item:"✅ Limit file size",why:"Protect your server from denial-of-service attacks"},{item:"✅ Sanitize filenames",why:"Prevent directory traversal attacks"},{item:"✅ Store files outside public directory",why:"Control access to uploaded files"}],commonMistakes:[" Allowing any file type without validation"," No file size limits"," Storing files with original names"," Directly serving uploaded files without checks"]}},{id:"secure-upload-implementation",title:"Secure File Upload Implementation",type:"example",content:{description:"Implement a secure file upload system with proper validation",code:`import multer from 'multer';
import path from 'path';

// Allowed file types
const allowedMimeTypes = [
  'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
  'application/pdf', 'text/plain'
];

// File filter function
const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Invalid file type. Allowed: JPEG, PNG, GIF, PDF, TXT'), false);
  }
};

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Sanitize filename
    const sanitizedName = file.originalname
      .toLowerCase()
      .replace(/[^a-z0-9.]/g, '-')
      .replace(/-+/g, '-');
    
    const uniqueName = Date.now() + '-' + sanitizedName;
    cb(null, uniqueName);
  }
});

// Configure multer with limits and validation
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 5 // Maximum 5 files per request
  }
});

// Profile picture upload endpoint
app.post('/api/profile/picture', 
  authMiddleware,
  upload.single('picture'),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // Get file information
      const fileInfo = {
        filename: req.file.filename,
        originalname: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        path: req.file.path,
        url: \`/uploads/\${req.file.filename}\`
      };
      
      res.json({
        message: 'Profile picture uploaded successfully',
        file: fileInfo
      });
      
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ 
        error: 'Upload failed',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
);`}}],exercises:[{id:"ex-9-1",title:"File Upload API with Validation",description:"Create a secure file upload API",difficulty:"Beginner",task:`Create a file upload API that:
1. Accepts only image files (JPEG, PNG, GIF)
2. Limits file size to 3MB
3. Sanitizes filenames
4. Returns file information in response
5. Stores files in 'uploads/' directory

Endpoint: POST /api/upload/image`,hint:"Use multer's fileFilter and limits options. Sanitize filenames by removing special characters.",solution:`import multer from 'multer';
import path from 'path';

const imageUpload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const sanitized = file.originalname
        .toLowerCase()
        .replace(/[^a-z0-9.]/g, '-')
        .replace(/-+/g, '-');
      cb(null, \`\${Date.now()}-\${sanitized}\`);
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  },
  limits: {
    fileSize: 3 * 1024 * 1024
  }
});

app.post('/api/upload/image', 
  imageUpload.single('image'),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    res.json({
      success: true,
      file: {
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
        url: \`/uploads/\${req.file.filename}\`
      }
    });
  }
);`}],quiz:[{question:"What is the primary purpose of Multer?",options:["To handle JSON data in requests","To process multipart/form-data for file uploads","To authenticate users","To compress uploaded files"],correct:1,explanation:"Multer is specifically designed to handle multipart/form-data, which is used when uploading files through HTML forms."},{question:"Which Multer method is used for uploading a single file?",options:["upload.array()","upload.single()","upload.fields()","upload.any()"],correct:1,explanation:"upload.single('fieldname') is used to handle a single file upload from a specific form field."}]},{id:"module-10",title:"Module 10: Image Processing & File Serving",duration:"1 hour",objectives:["Process images with Sharp library","Optimize images for web use","Serve static files securely","Create responsive image sizes"],lessons:[{id:"image-processing-sharp",title:"Image Processing with Sharp",type:"practical",content:{steps:[{text:"Install Sharp package:",code:"npm install sharp"}],code:`import sharp from 'sharp';
import fs from 'fs/promises';

// Basic image optimization
app.post('/api/upload/optimize', async (req, res) => {
  try {
    // Assuming file is already uploaded via multer
    const inputPath = req.file.path;
    const outputPath = \`uploads/optimized-\${req.file.filename}\`;
    
    // Resize and convert to webp
    await sharp(inputPath)
      .resize(800, 600, {
        fit: 'inside',       // Fit within dimensions
        withoutEnlargement: true // Don't enlarge small images
      })
      .toFormat('webp', {
        quality: 80,         // Good quality with compression
        effort: 6            // Compression effort (0-6)
      })
      .toFile(outputPath);
    
    // Get file sizes
    const originalStats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(outputPath);
    const savings = Math.round((1 - optimizedStats.size / originalStats.size) * 100);
    
    res.json({
      originalSize: originalStats.size,
      optimizedSize: optimizedStats.size,
      savings: \`\${savings}%\`,
      format: 'webp',
      url: \`/uploads/\${path.basename(outputPath)}\`
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Image processing failed' });
  }
});`}},{id:"responsive-images",title:"Creating Responsive Image Sizes",type:"example",content:{description:"Generate multiple image sizes for different devices",code:`const createResponsiveImages = async (inputPath, baseName) => {
  const sizes = {
    thumbnail: { width: 150, height: 150 },
    medium: { width: 500, height: 500 },
    large: { width: 1200, height: 1200 }
  };
  
  const results = {};
  
  for (const [sizeName, dimensions] of Object.entries(sizes)) {
    const outputPath = \`uploads/\${baseName}-\${sizeName}.webp\`;
    
    await sharp(inputPath)
      .resize(dimensions.width, dimensions.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    results[sizeName] = {
      path: outputPath,
      url: \`/uploads/\${path.basename(outputPath)}\`,
      width: dimensions.width,
      height: dimensions.height
    };
  }
  
  return results;
};

// Avatar processing example
app.post('/api/avatar', 
  upload.single('avatar'),
  async (req, res) => {
    try {
      const baseName = \`avatar-\${req.user.id}-\${Date.now()}\`;
      const imageSizes = await createResponsiveImages(req.file.path, baseName);
      
      // Delete original file
      await fs.unlink(req.file.path);
      
      res.json({
        message: 'Avatar processed successfully',
        sizes: imageSizes
      });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);`}},{id:"serving-files-securely",title:"Serving Files Securely",type:"example",content:{description:"Serve uploaded files with proper security headers",code:`import express from 'express';
import path from 'path';
import fs from 'fs/promises';

// Serve static files with security headers
app.use('/uploads', express.static('uploads', {
  setHeaders: (res, filePath) => {
    // Security headers
    res.set('Cross-Origin-Resource-Policy', 'same-origin');
    res.set('X-Content-Type-Options', 'nosniff');
    
    // Cache control
    res.set('Cache-Control', 'public, max-age=86400');
    
    // Set proper content type based on extension
    const ext = path.extname(filePath).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
      res.type(\`image/\${ext === '.jpg' ? 'jpeg' : ext.slice(1)}\`);
    }
  }
}));

// Secure file download endpoint
app.get('/api/files/:filename', authMiddleware, async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('uploads', filename);
  
  try {
    // Security check: prevent directory traversal
    if (filename.includes('..') || filename.includes('/')) {
      return res.status(403).json({ error: 'Invalid filename' });
    }
    
    // Check file exists
    await fs.access(filePath);
    
    // Get file stats
    const stats = await fs.stat(filePath);
    
    // Set headers
    res.set('Content-Length', stats.size);
    res.set('Cache-Control', 'public, max-age=86400');
    
    // Stream file
    const fileStream = await fs.createReadStream(filePath);
    fileStream.pipe(res);
    
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).json({ error: 'File not found' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});`}}],exercises:[{id:"ex-10-1",title:"Image Optimization API",description:"Create an API that optimizes uploaded images",difficulty:"Intermediate",task:`Build an image optimization API that:
1. Accepts image uploads
2. Creates three sizes: thumbnail (150x150), medium (500x500), large (1200x1200)
3. Converts images to WebP format
4. Returns URLs for all sizes
5. Deletes the original file after processing`,hint:"Use Sharp's resize() and toFormat() methods. Process images in parallel with Promise.all().",solution:`import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const processImageSizes = async (inputPath, prefix) => {
  const sizes = [
    { name: 'thumbnail', width: 150, height: 150 },
    { name: 'medium', width: 500, height: 500 },
    { name: 'large', width: 1200, height: 1200 }
  ];
  
  const results = {};
  
  await Promise.all(sizes.map(async (size) => {
    const outputFilename = \`\${prefix}-\${size.name}.webp\`;
    const outputPath = path.join('uploads', outputFilename);
    
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    results[size.name] = {
      url: \`/uploads/\${outputFilename}\`,
      width: size.width,
      height: size.height
    };
  }));
  
  return results;
};

app.post('/api/images/optimize', 
  upload.single('image'),
  async (req, res) => {
    try {
      const prefix = \`img-\${Date.now()}\`;
      const optimizedSizes = await processImageSizes(req.file.path, prefix);
      
      // Delete original
      await fs.unlink(req.file.path);
      
      res.json({
        message: 'Image processed successfully',
        sizes: optimizedSizes
      });
      
    } catch (error) {
      res.status(500).json({ error: 'Processing failed' });
    }
  }
);`}]},{id:"module-11",title:"Module 11: CORS & Production Deployment",duration:"1 hour",objectives:["Understand CORS and configure it properly","Implement production-ready file uploads","Deploy file upload applications","Monitor and maintain upload systems"],lessons:[{id:"what-is-cors",title:"What is CORS?",type:"theory",content:{description:"CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can access your API.",analogy:{title:"The Club Membership Analogy",scenarios:[{situation:"Without CORS",explanation:"Like a private club - only members from this location (origin) can enter"},{situation:"With CORS configured",explanation:"Like a club with a guest list - specific external guests (origins) are allowed"}]},keyConcepts:[{term:"Origin",explanation:"The combination of protocol, domain, and port (e.g., http://localhost:3000)"},{term:"Same-Origin Policy",explanation:"Browser security rule: blocks requests from different origins"},{term:"Preflight Request",explanation:"OPTIONS request that checks if the actual request is allowed"}]}},{id:"cors-configuration",title:"CORS Configuration in Express",type:"example",content:{description:"Configure CORS to allow your frontend to communicate with your backend",code:`import cors from 'cors';

// Option 1: Allow specific origins (RECOMMENDED)
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      process.env.CLIENT_URL,        // From environment variable
      process.env.ADMIN_URL          // Admin panel URL
    ].filter(Boolean); // Remove undefined values
    
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true, // Allow cookies/auth headers
  maxAge: 86400, // Cache preflight response for 24 hours
};

app.use(cors(corsOptions));

// Option 2: Route-specific CORS
app.get('/api/public/data', cors(), (req, res) => {
  res.json({ message: 'Public data accessible from anywhere' });
});

app.get('/api/private/data', cors(corsOptions), authMiddleware, (req, res) => {
  res.json({ message: 'Private data with CORS restrictions' });
});

// Handle preflight requests
app.options('*', cors(corsOptions));`}},{id:"production-file-uploads",title:"Production File Upload Setup",type:"theory",content:{description:"Important considerations for production file uploads",checklist:[{item:"✅ Use cloud storage (AWS S3, Cloudinary, etc.)",why:"More scalable and reliable than local filesystem"},{item:"✅ Implement rate limiting",why:"Prevent abuse and DoS attacks"},{item:"✅ Add file virus scanning",why:"Protect your server and users"},{item:"✅ Set up automated cleanup",why:"Prevent disk space exhaustion"},{item:"✅ Use environment variables",why:"Separate configuration from code"}],productionCode:`import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import multer from 'multer';

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Configure Multer for S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read',
    key: (req, file, cb) => {
      const fileName = \`\${Date.now()}-\${file.originalname}\`;
      cb(null, fileName);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  }
});

// Upload to S3
app.post('/api/upload/s3', 
  upload.single('file'),
  (req, res) => {
    // req.file.location contains the S3 URL
    res.json({
      url: req.file.location,
      key: req.file.key,
      size: req.file.size
    });
  }
);`}},{id:"rate-limiting-uploads",title:"Rate Limiting for File Uploads",type:"example",content:{description:"Prevent abuse by limiting upload frequency",code:`import rateLimit from 'express-rate-limit';

// Rate limiter for uploads
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10, // 10 uploads per 15 minutes
  message: 'Too many upload attempts. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip // Limit by IP address
});

// Per-user rate limiting
const userUploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 50, // 50 uploads per hour per user
  message: 'You have exceeded the upload limit. Try again in an hour.',
  keyGenerator: (req) => req.user?.id || req.ip // Use user ID if authenticated
});

// Apply to upload routes
app.post('/api/upload', uploadLimiter, upload.single('file'), handler);
app.post('/api/user/upload', authMiddleware, userUploadLimiter, upload.single('file'), handler);`}}],exercises:[{id:"ex-11-1",title:"Complete Upload System with CORS",description:"Build a production-ready file upload system",difficulty:"Advanced",task:`Create a complete file upload system with:
1. CORS configuration for specific origins
2. Rate limiting (5 uploads per hour per user)
3. File validation (images only, max 5MB)
4. Image optimization (convert to WebP, create thumbnails)
5. Secure file serving with proper headers

Environment variables needed:
- CLIENT_URL (your frontend URL)
- ALLOWED_ORIGINS (comma-separated list)
- UPLOAD_LIMIT_PER_HOUR`,hint:"Use environment variables for configuration. Implement both IP-based and user-based rate limiting.",solution:`import cors from 'cors';
import rateLimit from 'express-rate-limit';
import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs/promises';

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Rate limiting
const uploadRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: parseInt(process.env.UPLOAD_LIMIT_PER_HOUR) || 5,
  message: 'Upload limit exceeded. Try again in an hour.',
  keyGenerator: (req) => req.user?.id || req.ip
});

// Multer configuration
const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, \`\${Date.now()}-\${file.originalname}\`);
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG and PNG images allowed'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }
});

// Upload endpoint with all features
app.post('/api/secure-upload',
  authMiddleware,
  uploadRateLimit,
  upload.single('image'),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // Create thumbnail
      const thumbnailPath = \`uploads/thumb-\${req.file.filename}\`;
      await sharp(req.file.path)
        .resize(200, 200, { fit: 'cover' })
        .webp({ quality: 70 })
        .toFile(thumbnailPath);
      
      // Optimize main image
      const optimizedPath = \`uploads/opt-\${req.file.filename}\`;
      await sharp(req.file.path)
        .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(optimizedPath);
      
      // Delete original
      await fs.unlink(req.file.path);
      
      res.json({
        success: true,
        images: {
          thumbnail: \`/uploads/\${path.basename(thumbnailPath)}\`,
          optimized: \`/uploads/\${path.basename(optimizedPath)}\`
        }
      });
      
    } catch (error) {
      // Cleanup on error
      if (req.file?.path) {
        try { await fs.unlink(req.file.path); } catch {}
      }
      res.status(500).json({ error: 'Upload failed' });
    }
  }
);`}],quiz:[{question:"What is the purpose of CORS in a web application?",options:["To compress API responses","To control which domains can access your API","To authenticate users","To cache static files"],correct:1,explanation:"CORS (Cross-Origin Resource Sharing) controls which external domains can make requests to your API, following browser security policies."},{question:"Why should you use cloud storage instead of local filesystem for uploads in production?",options:["It's always free","It's more scalable, reliable, and secure","It requires less code","It works faster on all devices"],correct:1,explanation:"Cloud storage services provide better scalability, reliability, and security features compared to local filesystem storage."}],productionChecklist:["✅ Configure environment variables for all secrets","✅ Implement proper CORS with production domains","✅ Add rate limiting to prevent abuse","✅ Use cloud storage for file persistence","✅ Set up monitoring and logging","✅ Implement automated cleanup of old files","✅ Add virus scanning for uploaded files","✅ Use HTTPS for all file transfers"]},{id:"module-12",title:"Module 12: Deployment & Best Practices",duration:"1 hour",objectives:["Prepare app for production","Environment configuration","Deploy to cloud platform"],lessons:[{id:"environment-config",title:"Environment Configuration",type:"example",content:{description:"Use environment variables for configuration",code:`// Install dotenv for development
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
app.use(limiter);`}}],exercises:[{id:"ex-12-1",title:"Production Ready App",description:"Prepare your Express app for production",task:`Make your app production ready:
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
});`}],finalProject:{title:"Build a Complete Blog Platform",description:"Combine all modules to build a full-stack blog application",requirements:["User authentication and authorization","CRUD operations for blog posts and comments","MongoDB database with proper schemas","RESTful API with proper error handling","EJS templates for frontend","Production-ready configuration","Security best practices implemented"],bonus:["Add file upload for post images","Implement search functionality","Add pagination for posts","Create admin dashboard","Add social media sharing"]}}]},Oe={slug:"react-fundamentals",title:"React Fundamentals",description:"Learn React from scratch - build modern web applications with components, hooks, and state management.",level:"Beginner",duration:"8-10 hours",prerequisites:["Basic HTML/CSS knowledge","Basic JavaScript knowledge (ES6+)"],sections:[{id:"module-1",title:"Module 1: React Basics & First App",duration:"1 hour",objectives:["Understand what React is and why it's popular","Set up development environment","Create your first React component","Understand JSX syntax"],lessons:[{id:"what-is-react",title:"What is React?",type:"theory",content:{paragraphs:["React is a JavaScript library for building user interfaces, created by Facebook. It lets you build complex UIs from small, reusable pieces called components.","Think of React like LEGO blocks - you build small pieces (components) and combine them to create complex applications."],keyPoints:["Component-based architecture","Declarative (you describe WHAT you want, React handles HOW)","Virtual DOM for performance","One-way data flow"],analogy:{title:"The Restaurant Menu Analogy",scenarios:[{situation:"Traditional Websites (Imperative)",explanation:"Like telling a chef every single step: 'Chop onions, heat pan, add oil, cook onions...'"},{situation:"React (Declarative)",explanation:"Like ordering from a menu: 'I want a burger with fries' - the kitchen (React) handles the details"}]}}},{id:"setup-environment",title:"Setting Up React Environment",type:"practical",content:{steps:[{text:"Install Node.js and npm:",code:`# Download from nodejs.org
# Verify installation:
node --version
npm --version`},{text:"Create React App (the easiest way to start):",code:`npx create-react-app my-first-app
cd my-first-app
npm start`},{text:"Project Structure Overview:",code:`my-first-app/
├── node_modules/     # Dependencies
├── public/          # Static files
│   └── index.html   # Main HTML file
├── src/             # Source code
│   ├── App.js       # Main component
│   ├── index.js     # Entry point
│   └── index.css    # Styles
├── package.json     # Project config
└── README.md`}]}},{id:"first-component",title:"Your First React Component",type:"example",content:{description:"Create a simple component that displays a welcome message",code:`// App.js - Your first component
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to your first React application.</p>
    </div>
  );
}

export default App;`}},{id:"understanding-jsx",title:"Understanding JSX",type:"theory",content:{paragraphs:["JSX (JavaScript XML) is a syntax extension that looks like HTML but works inside JavaScript. It makes writing React components easier and more readable.","JSX gets compiled to regular JavaScript function calls behind the scenes."],comparison:{jsx:'<h1 className="title">Hello World</h1>',javascript:"React.createElement('h1', { className: 'title' }, 'Hello World')"},rules:["JSX must have a single parent element (use <div> or <> (Fragment))","Use className instead of class","Use camelCase for attributes (onClick, not onclick)","JavaScript expressions go inside {}","Close all tags (<br /> not <br>)"]}}],exercises:[{id:"ex-1-1",title:"Personal Profile Component",description:"Create a component that displays your personal information",task:`Create a component that shows:
1. Your name as an <h1>
2. A short bio in a <p> tag
3. Your location in a <span> with className="location"
4. A list of 3 hobbies using <ul> and <li>`,hint:"Remember to wrap everything in a single parent element. Use className for styling.",solution:`function Profile() {
  return (
    <div className="profile">
      <h1>Alex Johnson</h1>
      <p>Frontend developer passionate about creating beautiful web experiences.</p>
      <span className="location">📍 New York, NY</span>
      <h2>Hobbies:</h2>
      <ul>
        <li>🎸 Playing guitar</li>
        <li>📚 Reading tech blogs</li>
        <li>🚴 Cycling</li>
      </ul>
    </div>
  );
}`}],quiz:[{question:"What is React primarily used for?",options:["Backend server programming","Building user interfaces","Database management","Mobile app development only"],correct:1},{question:"What command creates a new React app?",options:["react create-app","npm create react","npx create-react-app","node new-react"],correct:2}]},{id:"module-2",title:"Module 2: Components & Props",duration:"1.5 hours",objectives:["Create reusable components","Understand props (component parameters)","Pass data between components","Use props for dynamic content"],lessons:[{id:"component-types",title:"Two Ways to Write Components",type:"theory",content:{paragraphs:["React components can be written as functions or classes. Function components are simpler and recommended for beginners.","Think of components like custom HTML tags that you can reuse."],comparison:{functionComponent:`// Function Component (modern way)
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,classComponent:`// Class Component (older way)
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`},recommendation:"Use function components with hooks (we'll learn hooks later!)"}},{id:"creating-components",title:"Creating Reusable Components",type:"example",content:{description:"Create a Button component that can be reused with different text",code:`// Button.js - A reusable button component
function Button(props) {
  return (
    <button className="btn">
      {props.text}
    </button>
  );
}

// Using the Button component
function App() {
  return (
    <div>
      <Button text="Click Me!" />
      <Button text="Submit" />
      <Button text="Cancel" />
    </div>
  );
}`}},{id:"understanding-props",title:"Understanding Props",type:"theory",content:{description:"Props are like function parameters for components",analogy:{title:"The Coffee Shop Analogy",scenarios:[{situation:"Without Props",explanation:"Every coffee is the same - always a black coffee"},{situation:"With Props",explanation:"You can order different coffees: 'large latte', 'small cappuccino', 'medium americano'"}]},rules:["Props are READ-ONLY (components can't change their own props)","Props are passed from parent to child","Use {} to insert JavaScript values in JSX","Destructure props for cleaner code"]}},{id:"props-in-action",title:"Props in Action",type:"example",content:{description:"Create a UserCard component that displays user information",code:`// UserCard.js
function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
      <span>Age: {props.age}$</span>
    </div>
  );
}

// App.js - Using UserCard with different data
function App() {
  return (
    <div className="app">
      <UserCard 
        name="Sarah Chen"
        avatar="https://example.com/sarah.jpg"
        bio="Software engineer at TechCorp"
        age={28}
      />
      <UserCard 
        name="Mike Johnson"
        avatar="https://example.com/mike.jpg"
        bio="UX Designer passionate about accessibility"
        age={32}
      />
    </div>
  );
}`}},{id:"destructuring-props",title:"Cleaner Code with Destructuring",type:"example",content:{description:"Use destructuring to make your component code cleaner",code:`// Before: Accessing props directly
function ProductCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

// After: Using destructuring
function ProductCard({ name, price, category }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}$</p>
      <p>Category: {category}</p>
    </div>
  );
}

// Usage with default values
function ProductCard({ 
  name = "Unknown Product", 
  price = 0, 
  category = "General" 
}) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}$</p>
      <p>Category: {category}</p>
    </div>
  );
}`}}],exercises:[{id:"ex-2-1",title:"Product Card Component",description:"Create a reusable product card component",task:`Create a ProductCard component that displays:
1. Product name
2. Price
3. Category
4. Image
5. A "Buy Now" button

Use the component to display 3 different products.`,hint:"Create a separate ProductCard component file. Pass data via props.",solution:`// ProductCard.js
function ProductCard({ name, price, category, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price}$</p>
      <p className="category">{category}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}

// App.js
function App() {
  return (
    <div className="products">
      <ProductCard
        name="Wireless Headphones"
        price={99.99}
        category="Electronics"
        image="/headphones.jpg"
      />
      <ProductCard
        name="Coffee Mug"
        price={19.99}
        category="Home & Kitchen"
        image="/mug.jpg"
      />
      <ProductCard
        name="Desk Lamp"
        price={49.99}
        category="Home Office"
        image="/lamp.jpg"
      />
    </div>
  );
}`},{id:"ex-2-2",title:"Team Member Directory",description:"Create a team directory using components and props",task:`Create a TeamMember component and use it to display:
- 4 team members
- Each with: name, role, email, and bio
- Add a button to contact each member`,solution:`function TeamMember({ name, role, email, bio }) {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
      <a href={\`mailto:\${email}\`} className="contact-btn">
        Contact {name.split(' ')[0]}
      </a>
    </div>
  );
}

function App() {
  const team = [
    {
      name: "Alice Zhang",
      role: "CEO",
      email: "alice@company.com",
      bio: "10+ years in tech leadership"
    },
    {
      name: "Bob Smith",
      role: "CTO",
      email: "bob@company.com",
      bio: "Expert in cloud architecture"
    },
    // Add 2 more team members...
  ];

  return (
    <div className="team">
      {team.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          role={member.role}
          email={member.email}
          bio={member.bio}
        />
      ))}
    </div>
  );
}`}]},{id:"module-3",title:"Module 3: State & Interactivity",duration:"2 hours",objectives:["Understand what state is in React","Use the useState hook","Handle user events (clicks, input)","Create interactive components"],lessons:[{id:"what-is-state",title:"What is State?",type:"theory",content:{description:"State is data that can change over time in your component",analogy:{title:"The Light Switch Analogy",scenarios:[{situation:"Props",explanation:"Like the color of the switch plate - fixed when installed"},{situation:"State",explanation:"Like whether the light is ON or OFF - changes when you flip the switch"}]},examples:["Form input values","Toggle switches (on/off)","Counter values","Loading status","User authentication status"],rules:["State is mutable (can change)","Changing state triggers re-render","Use useState hook for state","Never modify state directly"]}},{id:"useState-hook",title:"The useState Hook",type:"example",content:{description:"Learn to use useState to add state to your components",code:`import { useState } from 'react';

function Counter() {
  // Declare state variable 'count' with initial value 0
  // 'setCount' is the function to update count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// How it works:
// 1. useState(0) → returns [0, setFunction]
// 2. count = 0 (current state)
// 3. setCount(5) → updates count to 5
// 4. Component re-renders with new count`}},{id:"state-examples",title:"Common State Examples",type:"example",content:{description:"See different use cases for state in React",examples:[{title:"Toggle Switch",code:`function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Turn {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}`},{title:"Form Input",code:`function NameForm() {
  const [name, setName] = useState('');
  
  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}`},{title:"Todo Item",code:`function TodoItem() {
  const [completed, setCompleted] = useState(false);
  
  return (
    <div className={\`todo-item \${completed ? 'completed' : ''}\`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <span>Learn React hooks</span>
    </div>
  );
}`}]}},{id:"event-handling",title:"Handling Events in React",type:"example",content:{description:"Learn how to handle user interactions",comparison:{html:'<button onclick="handleClick()">Click me</button>',react:"<button onClick={handleClick}>Click me</button>"},commonEvents:["onClick - mouse clicks","onChange - form inputs","onSubmit - form submission","onMouseEnter/onMouseLeave - hover effects","onKeyDown - keyboard input"],code:`function EventExamples() {
  const [text, setText] = useState('');
  const [clicks, setClicks] = useState(0);
  
  const handleClick = () => {
    setClicks(clicks + 1);
    console.log('Button clicked!');
  };
  
  const handleChange = (event) => {
    setText(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted: ' + text);
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        Clicked {clicks} times
      </button>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something"
        />
        <button type="submit">Submit</button>
      </form>
      
      <p onMouseEnter={() => console.log('Mouse entered!')}>
        Hover over me
      </p>
    </div>
  );
}`}}],exercises:[{id:"ex-3-1",title:"Counter with Multiple Buttons",description:"Create a counter with increment, decrement, and reset",task:`Create a counter component with:
1. Display current count
2. + button to increment
3. - button to decrement
4. Reset button to set count to 0
5. Don't allow negative numbers`,hint:"Use conditional logic to disable decrement button when count is 0.",solution:`function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={count === 0}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      <p>{count === 0 ? 'Start counting!' : 'Keep going!'}</p>
    </div>
  );
}`},{id:"ex-3-2",title:"Toggle Theme Component",description:"Create a theme switcher (light/dark mode)",task:`Build a theme switcher that:
1. Toggles between light and dark mode
2. Shows current theme
3. Changes background color
4. Has an icon that changes with theme`,solution:`function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const themeStyles = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
    padding: '20px',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };
  
  return (
    <div style={themeStyles}>
      <h2>{isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p>Current theme: {isDarkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
}`},{id:"ex-3-3",title:"Shopping Cart Item",description:"Create an interactive shopping cart item",task:`Create a cart item component with:
1. Product name and price
2. Quantity selector (increase/decrease)
3. Total price calculation
4. Remove button
5. Disable decrease when quantity is 1`,solution:`function CartItem({ name, price, onRemove }) {
  const [quantity, setQuantity] = useState(1);
  
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const total = price * quantity;
  
  return (
    <div className="cart-item">
      <div className="item-info">
        <h3>{name}</h3>
        <p>Price: {price}$</p>
      </div>
      
      <div className="quantity-controls">
        <button onClick={decreaseQty} disabled={quantity === 1}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQty}>+</button>
      </div>
      
      <div className="item-total">
        <p>Total: {total.toFixed(2)}$</p>
        <button onClick={onRemove} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
}`}]},{id:"module-4",title:"Module 4: Lists & Conditional Rendering",duration:"1.5 hours",objectives:["Render lists of data","Use the map() function","Understand keys in lists","Show/hide content conditionally","Render different UIs based on state"],lessons:[{id:"rendering-lists",title:"Rendering Lists with map()",type:"theory",content:{description:"Use JavaScript's map() function to render lists of components",analogy:{title:"The Factory Assembly Line",description:"Think of map() as a factory that takes raw data (array) and produces components (products)"},code:`// Example: Rendering a list of names
const names = ['Alice', 'Bob', 'Charlie', 'Diana'];

function NameList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

// How it works:
// 1. names.map() loops through each name
// 2. For each name, creates an <li> element
// 3. key={index} helps React identify items
// 4. Returns array of <li> elements`}},{id:"keys-in-lists",title:"Understanding Keys",type:"theory",content:{description:"Keys help React identify which items have changed, been added, or removed",analogy:{title:"Student ID Numbers",description:"Keys are like student ID numbers - they uniquely identify each student, even if names are similar"},rules:["Keys should be unique among siblings","Use stable IDs when possible (from database)","Index can be used as last resort","Keys only need to be unique in the same list"],badExample:`// Problem: No key
{items.map(item => <li>{item.name}</li>)}`,goodExample:`// Solution: Add key
{items.map(item => <li key={item.id}>{item.name}</li>)}`}},{id:"list-examples",title:"List Rendering Examples",type:"example",content:{description:"Different ways to render lists in React",examples:[{title:"Todo List",code:`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Deploy to netlify', completed: false }
  ]);
  
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`},{title:"Product Grid",code:`function ProductGrid() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 999 },
    { id: 'p2', name: 'Mouse', price: 25 },
    { id: 'p3', name: 'Keyboard', price: 75 }
  ];
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.price}$</p>
        </div>
      ))}
    </div>
  );
}`}]}},{id:"conditional-rendering",title:"Conditional Rendering",type:"theory",content:{description:"Show different content based on conditions",methods:[{name:"if/else statements",code:`function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}`},{name:"Ternary operator",code:`function Notification({ hasNewMessage }) {
  return (
    <div>
      {hasNewMessage ? (
        <p>You have new messages!</p>
      ) : (
        <p>No new messages.</p>
      )}
    </div>
  );
}`},{name:"Logical && operator",code:`function ShoppingCart({ items }) {
  return (
    <div>
      {items.length > 0 && (
        <p>You have {items.length} items in cart.</p>
      )}
    </div>
  );
}`},{name:"Early return",code:`function UserProfile({ user }) {
  if (!user) {
    return <p>Loading user data...</p>;
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}]}},{id:"conditional-examples",title:"Conditional Rendering Examples",type:"example",content:{description:"Practical examples of conditional rendering",examples:[{title:"Loading State",code:`function DataDisplay({ data, isLoading }) {
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  
  if (!data) {
    return <div className="error">No data available</div>;
  }
  
  return (
    <div className="data">
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
}`},{title:"Auth Display",code:`function Dashboard({ user }) {
  const isAdmin = user?.role === 'admin';
  
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Always show */}
      <p>Welcome, {user.name}!</p>
      
      {/* Show for all users */}
      {user && <UserProfile user={user} />}
      
      {/* Show only for admins */}
      {isAdmin && <AdminPanel />}
      
      {/* Show different content based on role */}
      {isAdmin ? (
        <button>Manage Users</button>
      ) : (
        <button>View Profile</button>
      )}
    </div>
  );
}`}]}}],exercises:[{id:"ex-4-1",title:"Student Roster",description:"Create a student roster with filtering",task:`Create a student list component that:
1. Displays list of students (name, grade, attendance)
2. Shows only students with attendance > 80%
3. Highlights students with grade A
4. Has toggle to show all students vs filtered`,solution:`function StudentRoster() {
  const [showAll, setShowAll] = useState(false);
  
  const students = [
    { id: 1, name: 'Alice', grade: 'A', attendance: 95 },
    { id: 2, name: 'Bob', grade: 'B', attendance: 75 },
    { id: 3, name: 'Charlie', grade: 'A', attendance: 90 },
    { id: 4, name: 'Diana', grade: 'C', attendance: 70 }
  ];
  
  const filteredStudents = showAll 
    ? students 
    : students.filter(s => s.attendance > 80);
  
  return (
    <div>
      <h2>Student Roster</h2>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show High Attendance Only' : 'Show All Students'}
      </button>
      
      <ul>
        {filteredStudents.map(student => (
          <li 
            key={student.id}
            className={student.grade === 'A' ? 'grade-a' : ''}
          >
            {student.name} - Grade: {student.grade} - Attendance: {student.attendance}%
          </li>
        ))}
      </ul>
      
      <p>Showing {filteredStudents.length} of {students.length} students</p>
    </div>
  );
}`},{id:"ex-4-2",title:"Task Manager UI",description:"Create a task manager with filtering options",task:`Build a task manager that:
1. Shows list of tasks
2. Filter by: All, Active, Completed
3. Show task count
4. Display different messages for empty states`,solution:`function TaskManager() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build project', completed: false },
    { id: 3, text: 'Deploy app', completed: false }
  ]);
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });
  
  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;
  
  return (
    <div className="task-manager">
      <div className="filters">
        <button onClick={() => setFilter('all')}>All ({tasks.length})</button>
        <button onClick={() => setFilter('active')}>Active ({activeCount})</button>
        <button onClick={() => setFilter('completed')}>Completed ({completedCount})</button>
      </div>
      
      {filteredTasks.length === 0 ? (
        <p className="empty-state">
          {filter === 'all' && 'No tasks yet. Add one!'}
          {filter === 'active' && 'No active tasks. Great job!'}
          {filter === 'completed' && 'No completed tasks yet.'}
        </p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`}]},{id:"module-5",title:"Module 5: Forms & User Input",duration:"1.5 hours",objectives:["Create controlled form components","Handle form submission","Validate form inputs","Create multi-step forms","Handle multiple inputs efficiently"],lessons:[{id:"controlled-components",title:"Controlled Components",type:"theory",content:{description:"In React, form inputs should be controlled by React state",comparison:{uncontrolled:`// Uncontrolled (traditional HTML)
<input type="text" />`,controlled:`// Controlled (React way)
const [value, setValue] = useState('');
<input 
  type="text" 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`},benefits:["React state becomes the single source of truth","Easy to validate and transform input","Can control form behavior programmatically","Easier to implement features like reset/undo"]}},{id:"basic-form",title:"Basic Form Implementation",type:"example",content:{description:"Create a simple registration form",code:`function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send data to server here
  };
  
  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="6"
        />
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
}`}},{id:"form-validation",title:"Form Validation",type:"example",content:{description:"Add validation to your forms",code:`function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/S+@S+.S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Login successful!');
    } catch (error) {
      alert('Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={errors.password ? 'error' : ''}
        />
        {errors.password && <span className="error-text">{errors.password}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}`}},{id:"form-input-types",title:"Different Input Types",type:"example",content:{description:"Handle various form input types",code:`function SurveyForm() {
  const [survey, setSurvey] = useState({
    name: '',
    age: '',
    email: '',
    favoriteColor: 'blue',
    newsletter: true,
    interests: [],
    rating: 5,
    feedback: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setSurvey(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleMultiSelect = (e) => {
    const { value, checked } = e.target;
    
    setSurvey(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(i => i !== value)
    }));
  };
  
  return (
    <form>
      {/* Text Input */}
      <input
        type="text"
        name="name"
        value={survey.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      
      {/* Number Input */}
      <input
        type="number"
        name="age"
        value={survey.age}
        onChange={handleChange}
        min="0"
        max="120"
      />
      
      {/* Email Input */}
      <input
        type="email"
        name="email"
        value={survey.email}
        onChange={handleChange}
      />
      
      {/* Select Dropdown */}
      <select 
        name="favoriteColor" 
        value={survey.favoriteColor}
        onChange={handleChange}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      
      {/* Checkbox (single) */}
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={survey.newsletter}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      
      {/* Checkboxes (multiple) */}
      <div>
        <label>
          <input
            type="checkbox"
            value="sports"
            checked={survey.interests.includes('sports')}
            onChange={handleMultiSelect}
          />
          Sports
        </label>
        <label>
          <input
            type="checkbox"
            value="music"
            checked={survey.interests.includes('music')}
            onChange={handleMultiSelect}
          />
          Music
        </label>
      </div>
      
      {/* Radio Buttons */}
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={survey.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={survey.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      
      {/* Range Slider */}
      <input
        type="range"
        name="rating"
        min="1"
        max="10"
        value={survey.rating}
        onChange={handleChange}
      />
      <span>Rating: {survey.rating}</span>
      
      {/* Textarea */}
      <textarea
        name="feedback"
        value={survey.feedback}
        onChange={handleChange}
        placeholder="Your feedback..."
        rows="4"
      />
      
      {/* Date Input */}
      <input
        type="date"
        name="birthdate"
        value={survey.birthdate}
        onChange={handleChange}
      />
    </form>
  );
}`}}],exercises:[{id:"ex-5-1",title:"Contact Form with Validation",description:"Create a fully validated contact form",task:`Build a contact form that:
1. Has fields: name, email, message, subject
2. Validates all fields
3. Shows real-time validation errors
4. Disables submit while processing
5. Shows success/error messages`,solution:`function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/\\S+@\\S+\\.\\S+/.test(value)) return 'Email is invalid';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate individual field
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {submitStatus === 'success' && (
        <div className="success-message">
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="error-message">
          Failed to send message. Please try again.
        </div>
      )}
      
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>
      
      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label>Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={errors.message ? 'error' : ''}
        />
        <div className="char-count">
          {formData.message.length} / 500 characters
        </div>
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="submit-btn"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}`},{id:"ex-5-2",title:"Multi-Step Registration Form",description:"Create a registration form with multiple steps",task:`Build a 3-step registration form:
Step 1: Personal Info (name, email)
Step 2: Account Details (username, password)
Step 3: Preferences (newsletter, notifications)
With navigation between steps and summary at the end.`,solution:`function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    // Step 2
    username: '',
    password: '',
    confirmPassword: '',
    // Step 3
    newsletter: true,
    notifications: 'daily'
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    }
    
    if (step === 2) {
      if (!formData.username) newErrors.username = 'Username required';
      if (!formData.password) newErrors.password = 'Password required';
      else if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form submitted:', formData);
      alert('Registration successful!');
    }
  };
  
  return (
    <div className="multi-step-form">
      <div className="step-indicator">
        <span className={step >= 1 ? 'active' : ''}>1. Personal</span>
        <span className={step >= 2 ? 'active' : ''}>2. Account</span>
        <span className={step >= 3 ? 'active' : ''}>3. Preferences</span>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h3>Personal Information</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
            
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            
            <button type="button" onClick={nextStep} className="next-btn">
              Next →
            </button>
          </div>
        )}
        
        {step === 2 && (
          <div className="form-step">
            <h3>Account Details</h3>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <span className="error-text">{errors.username}</span>}
            
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
            
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && (
              <span className="error-text">{errors.confirmPassword}</span>
            )}
            
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="back-btn">
                ← Back
              </button>
              <button type="button" onClick={nextStep} className="next-btn">
                Next →
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="form-step">
            <h3>Preferences</h3>
            
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              Subscribe to newsletter
            </label>
            
            <div className="radio-group">
              <p>Notification frequency:</p>
              <label>
                <input
                  type="radio"
                  name="notifications"
                  value="daily"
                  checked={formData.notifications === 'daily'}
                  onChange={handleChange}
                />
                Daily
              </label>
              <label>
                <input
                  type="radio"
                  name="notifications"
                  value="weekly"
                  checked={formData.notifications === 'weekly'}
                  onChange={handleChange}
                />
                Weekly
              </label>
            </div>
            
            <div className="step-buttons">
              <button type="button" onClick={prevStep} className="back-btn">
                ← Back
              </button>
              <button type="submit" className="submit-btn">
                Complete Registration
              </button>
            </div>
          </div>
        )}
      </form>
      
      {step === 3 && (
        <div className="form-summary">
          <h4>Summary</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}</p>
          <p><strong>Notifications:</strong> {formData.notifications}</p>
        </div>
      )}
    </div>
  );
}`}]},{id:"module-6",title:"Module 6: useEffect & API Calls",duration:"2 hours",objectives:["Understand side effects in React","Use the useEffect hook","Fetch data from APIs","Handle loading and error states","Clean up effects properly"],lessons:[{id:"what-is-useeffect",title:"What is useEffect?",type:"theory",content:{description:"useEffect lets you perform side effects in function components",analogy:{title:"The Butler Analogy",description:"useEffect is like a butler who performs tasks for you when certain conditions change"},sideEffectExamples:["Fetching data from an API","Updating the document title","Setting up subscriptions","Manipulating the DOM directly","Setting timers"],basicSyntax:`useEffect(() => {
  // Code to run on component mount and updates
  console.log('Component rendered!');
  
  return () => {
    // Cleanup function (optional)
    console.log('Component will unmount!');
  };
}, [dependency1, dependency2]); // Dependency array`}},{id:"useEffect-variations",title:"useEffect Dependency Array",type:"theory",content:{description:"The dependency array controls when useEffect runs",variations:[{type:"Run on every render",code:`useEffect(() => {
  console.log('Runs after EVERY render');
}); // No dependency array`,useCase:"Be careful! Can cause infinite loops"},{type:"Run once on mount",code:`useEffect(() => {
  console.log('Runs ONCE when component mounts');
  // Good for initial data fetching
}, []); // Empty array`,useCase:"ComponentDidMount equivalent"},{type:"Run when dependencies change",code:`useEffect(() => {
  console.log('Runs when userId changes');
  fetchUserData(userId);
}, [userId]); // Specific dependencies`,useCase:"ComponentDidUpdate equivalent"},{type:"Cleanup on unmount",code:`useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => {
    clearInterval(timer); // Cleanup
    console.log('Timer cleared');
  };
}, []);`,useCase:"ComponentWillUnmount equivalent"}]}},{id:"fetching-data",title:"Fetching Data from APIs",type:"example",content:{description:"Learn how to fetch data in React components",code:`function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // This function fetches data
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []); // Empty array = run once on mount
  
  if (loading) {
    return <div className="loading">Loading users...</div>;
  }
  
  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}`}},{id:"real-world-examples",title:"Real-World useEffect Examples",type:"example",content:{description:"Practical examples of useEffect in action",examples:[{title:"Document Title Updater",code:`function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Update document title
    document.title = \`Count: \${count}\`;
    
    // Cleanup: reset title when component unmounts
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Run when count changes
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`},{title:"Window Resize Listener",code:`function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array = run once on mount
  
  return (
    <div>
      <p>Window Width: {windowSize.width}px</p>
      <p>Window Height: {windowSize.height}px</p>
      <p>Device: {windowSize.width < 768 ? 'Mobile' : 'Desktop'}</p>
    </div>
  );
}`},{title:"Search with Debounce",code:`function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    
    // Debounce: wait 500ms before searching
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const response = await fetch(
          \`https://api.example.com/search?q=\${query}\`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    }, 500); // 500ms delay
    
    // Cleanup: cancel timer if query changes
    return () => clearTimeout(timer);
  }, [query]); // Run when query changes
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      
      {loading && <p>Searching...</p>}
      
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}`}]}},{id:"api-best-practices",title:"API Call Best Practices",type:"theory",content:{description:"Follow these best practices when making API calls",checklist:[{item:"✅ Handle loading states",why:"Users should know data is being fetched"},{item:"✅ Handle errors gracefully",why:"Show helpful error messages, don't crash"},{item:"✅ Cancel requests on unmount",why:"Prevent memory leaks and errors"},{item:"✅ Use proper error boundaries",why:"Prevent entire app from crashing"},{item:"✅ Implement retry logic",why:"Network requests can fail"}],codeExample:`// Good API call pattern
useEffect(() => {
  let isMounted = true; // Flag to check if component is mounted
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      
      const data = await response.json();
      
      // Only update state if component is still mounted
      if (isMounted) {
        setData(data);
      }
    } catch (err) {
      if (isMounted) {
        setError(err.message);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };
  
  fetchData();
  
  // Cleanup function
  return () => {
    isMounted = false;
    // Optionally cancel fetch here
  };
}, [url]);`}}],exercises:[{id:"ex-6-1",title:"Todo List with API",description:"Create a todo list that fetches from an API",task:`Build a todo list that:
1. Fetches todos from JSONPlaceholder API
2. Shows loading state
3. Handles errors
4. Allows adding new todos (POST request)
5. Allows deleting todos (DELETE request)`,solution:`function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodo, setNewTodo] = useState('');
  
  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);
  
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      );
      
      if (!response.ok) throw new Error('Failed to fetch');
      
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    
    const todo = {
      title: newTodo,
      completed: false,
      userId: 1
    };
    
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo)
        }
      );
      
      const data = await response.json();
      
      // Add to local state (JSONPlaceholder returns fake ID)
      setTodos(prev => [...prev, { ...data, id: Date.now() }]);
      setNewTodo('');
    } catch (err) {
      alert('Failed to add todo');
    }
  };
  
  const deleteTodo = async (id) => {
    try {
      await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
        method: 'DELETE'
      });
      
      // Remove from local state
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      alert('Failed to delete todo');
    }
  };
  
  if (loading) return <div className="loading">Loading todos...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <button onClick={fetchTodos} className="refresh-btn">
        Refresh Todos
      </button>
    </div>
  );
}`},{id:"ex-6-2",title:"Weather Dashboard",description:"Create a weather app that fetches from OpenWeather API",task:`Build a weather dashboard that:
1. Fetches current weather by city name
2. Shows temperature, humidity, conditions
3. Has a search input for different cities
4. Shows loading state
5. Caches weather data for 10 minutes`,solution:`function WeatherDashboard() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  
  // Replace with your actual API key
  const API_KEY = 'your_api_key_here';
  
  const fetchWeather = useCallback(async () => {
    // Check cache (10 minute expiry)
    const cached = localStorage.getItem(\`weather_\${city}\`);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
      
      if (timestamp > tenMinutesAgo) {
        setWeather(data);
        setLastUpdated(new Date(timestamp).toLocaleTimeString());
        return;
      }
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      setWeather(data);
      setLastUpdated(new Date().toLocaleTimeString());
      
      // Cache the data
      localStorage.setItem(
        \`weather_\${city}\`,
        JSON.stringify({
          data,
          timestamp: Date.now()
        })
      );
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [city]);
  
  useEffect(() => {
    if (city.trim()) {
      fetchWeather();
    }
  }, [city, fetchWeather]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCity = formData.get('city');
    if (newCity.trim()) {
      setCity(newCity);
    }
  };
  
  return (
    <div className="weather-dashboard">
      <h1>Weather Dashboard</h1>
      
      <form onSubmit={handleSearch} className="search-form">
        <input
          name="city"
          type="text"
          placeholder="Enter city name..."
          defaultValue={city}
        />
        <button type="submit">Search</button>
      </form>
      
      {loading && <div className="loading">Loading weather data...</div>}
      
      {error && <div className="error">Error: {error}</div>}
      
      {weather && !loading && !error && (
        <div className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <div className="weather-main">
            <img
              src={\`https://openweathermap.org/img/wn/\${weather.weather[0].icon}@2x.png\`}
              alt={weather.weather[0].description}
            />
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
          </div>
          <p className="description">{weather.weather[0].description}</p>
          
          <div className="weather-details">
            <div className="detail">
              <span>Feels like:</span>
              <strong>{Math.round(weather.main.feels_like)}°C</strong>
            </div>
            <div className="detail">
              <span>Humidity:</span>
              <strong>{weather.main.humidity}%</strong>
            </div>
            <div className="detail">
              <span>Wind:</span>
              <strong>{weather.wind.speed} m/s</strong>
            </div>
            <div className="detail">
              <span>Pressure:</span>
              <strong>{weather.main.pressure} hPa</strong>
            </div>
          </div>
          
          {lastUpdated && (
            <p className="updated">Last updated: {lastUpdated}</p>
          )}
        </div>
      )}
    </div>
  );
}`}]},{id:"module-7",title:"Module 7: Context API & Global State",duration:"1.5 hours",objectives:["Understand prop drilling problem","Use Context API for global state","Create and consume contexts","Combine context with useState/useReducer"],lessons:[{id:"prop-drilling",title:"The Prop Drilling Problem",type:"theory",content:{description:"Prop drilling happens when you pass data through multiple component levels",analogy:{title:"The Office Memo Analogy",description:"Like passing a memo through 5 managers when it only needs to go to 1 person"},codeExample:`// Prop drilling example - passing theme through multiple levels
function App() {
  const [theme, setTheme] = useState('light');
  
  return <Header theme={theme} setTheme={setTheme} />;
}

function Header({ theme, setTheme }) {
  return <Nav theme={theme} setTheme={setTheme} />;
}

function Nav({ theme, setTheme }) {
  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}

function ThemeToggle({ theme, setTheme }) {
  // Finally uses the theme - passed through 3 components!
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}`,solution:"Use Context API to share data without passing props"}},{id:"creating-context",title:"Creating a Context",type:"example",content:{description:"Learn how to create and provide context",code:`// 1. Create a context
import { createContext, useContext, useState } from 'react';

// Create context with default value
const ThemeContext = createContext();

// 2. Create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for consuming context
function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}

// 4. Wrap your app with the provider
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}`}},{id:"using-context",title:"Using Context in Components",type:"example",content:{description:"Consume context in different components",code:`// Header.js - Uses theme without prop drilling
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={\`header \${theme}\`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

// MainContent.js - Also uses theme
function MainContent() {
  const { theme, isDark } = useTheme();
  
  return (
    <main className={\`main \${theme}\`}>
      <p>Current theme: {theme}</p>
      <p>Is dark mode? {isDark ? 'Yes' : 'No'}</p>
    </main>
  );
}

// Footer.js - Doesn't need theme, so doesn't consume it
function Footer() {
  return <footer>© 2024 My App</footer>;
}`}},{id:"auth-context-example",title:"Authentication Context Example",type:"example",content:{description:"Create a complete auth context for user management",code:`// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);
  
  const login = async (email, password) => {
    // Simulate API call
    const mockUser = {
      id: '1',
      email,
      name: 'John Doe',
      token: 'fake-jwt-token'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  
  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };
  
  const value = {
    user,
    loading,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  
  return context;
}

// ProtectedRoute.js - Route guard component
function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

// App.js - Using the auth context
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}`}},{id:"multiple-contexts",title:"Using Multiple Contexts",type:"example",content:{description:"Combine multiple contexts in an application",code:`// App.js - Multiple providers
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <MainApp />
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

// Component using multiple contexts
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const { showNotification } = useNotification();
  
  const handleLogout = () => {
    logout();
    showNotification('Logged out successfully', 'success');
  };
  
  return (
    <nav className={\`navbar \${theme}\`}>
      <div className="nav-left">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      
      <div className="nav-center">
        <h1>My Store</h1>
        <span className="cart-count">Cart: {cartItems.length}</span>
      </div>
      
      <div className="nav-right">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}`}}],exercises:[{id:"ex-7-1",title:"Shopping Cart Context",description:"Create a shopping cart using Context API",task:`Build a shopping cart system with:
1. Cart context to manage cart items globally
2. Add/remove items from cart
3. Update item quantities
4. Calculate total price
5. Persist cart to localStorage`,solution:`// CartContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Increase quantity if item already in cart
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Add new item with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };
  
  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };
  
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    ).toFixed(2);
  };
  
  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  
  return context;
}

// ProductCard.js - Component that adds to cart
function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}$</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

// CartPage.js - Component that shows cart contents
function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal,
    clearCart 
  } = useCart();
  
  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>;
  }
  
  return (
    <div className="cart-page">
      <h1>Shopping Cart ({cartItems.length} items)</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.price}$</p>
            </div>
            
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            
            <div className="item-total">
              {(item.price * item.quantity).toFixed(2)}$
            </div>
            
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>{getCartTotal()}$</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>
          <span>$5.99</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>{(parseFloat(getCartTotal()) + 5.99).toFixed(2)}$</span>
        </div>
        
        <button className="checkout-btn">Proceed to Checkout</button>
        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
      </div>
    </div>
  );
}`}]},{id:"module-8",title:"Module 8: React Router & Navigation",duration:"1.5 hours",objectives:["Set up React Router","Create navigation between pages","Handle route parameters","Implement protected routes","Use nested routes"],lessons:[{id:"router-setup",title:"Setting Up React Router",type:"practical",content:{steps:[{text:"Install React Router:",code:"npm install react-router-dom"},{text:"Wrap your app with BrowserRouter:",code:`// index.js or App.js
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);`}],basicSetup:`// App.js - Basic router setup
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}`}},{id:"route-parameters",title:"Route Parameters & Dynamic Routes",type:"example",content:{description:"Create dynamic routes with parameters",code:`// App.js - Routes with parameters
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/users/:userId/posts/:postId" element={<UserPost />} />
    </Routes>
  );
}

// ProductDetail.js - Accessing route parameters
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); // Get the id parameter from URL
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
}

// UserPost.js - Multiple parameters
function UserPost() {
  const { userId, postId } = useParams();
  
  return (
    <div>
      <h1>User {userId}'s Post</h1>
      <p>Showing post ID: {postId}</p>
    </div>
  );
}`}},{id:"navigation-methods",title:"Different Navigation Methods",type:"example",content:{description:"Various ways to navigate in React Router",methods:[{name:"Link Component",description:"For clickable links",code:`import { Link } from 'react-router-dom';

<Link to="/about">About Us</Link>
<Link to="/products/laptop">Laptop Details</Link>`},{name:"Navigate Component",description:"For programmatic navigation",code:`import { Navigate } from 'react-router-dom';

function PrivateRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}`},{name:"useNavigate Hook",description:"For navigation in event handlers",code:`import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    // Login logic...
    navigate('/dashboard'); // Redirect after login
  };
  
  const goBack = () => {
    navigate(-1); // Go back one page
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Login</button>
      <button type="button" onClick={goBack}>Go Back</button>
    </form>
  );
}`},{name:"NavLink Component",description:"For navigation with active styling",code:`import { NavLink } from 'react-router-dom';

<nav>
  <NavLink 
    to="/"
    className={({ isActive }) => isActive ? 'active' : ''}
  >
    Home
  </NavLink>
  <NavLink 
    to="/about"
    style={({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal'
    })}
  >
    About
  </NavLink>
</nav>`}]}},{id:"nested-routes",title:"Nested Routes & Layouts",type:"example",content:{description:"Create nested routes for complex applications",code:`// App.js - Nested routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested inside Layout */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />}>
          {/* Nested inside Dashboard */}
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// Layout.js - Shared layout component
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>My App</h1>
        <nav>{/* Navigation links */}</nav>
      </header>
      
      <main>
        {/* Outlet renders the nested routes */}
        <Outlet />
      </main>
      
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}

// Dashboard.js - Dashboard layout
function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </aside>
      
      <div className="dashboard-content">
        {/* Nested routes render here */}
        <Outlet />
      </div>
    </div>
  );
}`}},{id:"query-parameters",title:"Query Parameters & Search",type:"example",content:{description:"Handle query parameters in your routes",code:`import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get query parameters
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || 'all';
  const page = parseInt(searchParams.get('page')) || 1;
  
  const updateSearch = (newSearch) => {
    setSearchParams({ search: newSearch, category, page: 1 });
  };
  
  const updateCategory = (newCategory) => {
    setSearchParams({ search, category: newCategory, page: 1 });
  };
  
  const nextPage = () => {
    setSearchParams({ search, category, page: page + 1 });
  };
  
  return (
    <div>
      <h1>Products</h1>
      
      <div className="filters">
        <input
          type="text"
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          placeholder="Search products..."
        />
        
        <select 
          value={category} 
          onChange={(e) => updateCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>
      
      <p>Showing page {page} of results for "{search}" in {category}</p>
      
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
}`}}],exercises:[{id:"ex-8-1",title:"E-commerce Router",description:"Create a complete e-commerce routing system",task:`Build an e-commerce app with these routes:
1. Home page (/)
2. Product listing (/products)
3. Product details (/products/:id)
4. Shopping cart (/cart)
5. Checkout (/checkout)
6. User profile (/profile)
7. Admin dashboard (/admin/* nested routes)

Features:
- Navigation menu
- Protected routes for checkout and profile
- Product search with query parameters
- Breadcrumb navigation`,solution:`// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="search" element={<SearchResults />} />
              
              {/* Protected routes */}
              <Route path="checkout" element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              } />
              
              <Route path="profile" element={
                <ProtectedRoute>
                  <ProfileLayout />
                </ProtectedRoute>
              }>
                <Route index element={<ProfileOverview />} />
                <Route path="orders" element={<OrderHistory />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Route>
              
              {/* Admin routes */}
              <Route path="admin" element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<ManageProducts />} />
                <Route path="orders" element={<ManageOrders />} />
                <Route path="users" element={<ManageUsers />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

// Layout.js
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { useCart } from './contexts/CartContext';

function Layout() {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <div className="app-layout">
      <header className="header">
        <div className="logo">
          <Link to="/">E-Shop</Link>
        </div>
        
        <nav className="main-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          
          {user?.role === 'admin' && (
            <NavLink to="/admin">Admin</NavLink>
          )}
        </nav>
        
        <div className="header-right">
          <Link to="/cart" className="cart-link">
            🛒 Cart ({getItemCount()})
          </Link>
          
          {user ? (
            <div className="user-menu">
              <span>Welcome, {user.name}</span>
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <p>© 2024 E-Shop. All rights reserved.</p>
        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </footer>
    </div>
  );
}

// ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
}

// AdminRoute.js
function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }
  
  return children;
}

// SearchResults.js - With query parameters
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  
  // Fetch products based on query and category
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchResults = async () => {
      // API call with query parameters
      const response = await fetch(
        \`/api/products?search=\${query}&category=\${category}\`
      );
      const data = await response.json();
      setProducts(data);
    };
    
    fetchResults();
  }, [query, category]);
  
  return (
    <div className="search-results">
      <h1>Search Results for "{query}"</h1>
      {category !== 'all' && <p>Category: {category}</p>}
      
      {products.length === 0 ? (
        <p>No products found. Try a different search.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}`}]}]},Wf={"git-and-github":{},"node-and-express":{},"react-fun":{}};function Hf({isOpen:e,title:t,children:r,onClose:n}){return E.useEffect(()=>{const s=o=>{o.key==="Escape"&&n()};return e&&window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[e,n]),e?a.jsxs("div",{className:"fixed inset-0 z-1000 flex items-center justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black/40",onClick:n,"aria-hidden":"true"}),a.jsxs("div",{className:"relative bg-white rounded-xl shadow-lg max-w-lg w-full mx-4",children:[a.jsxs("div",{className:"p-4 border-b border-slate-100 flex items-center justify-between",children:[a.jsx("div",{className:"text-lg font-semibold",children:t}),a.jsx("button",{onClick:n,className:"text-slate-500 hover:text-slate-700 rounded p-1","aria-label":"Close modal",children:"✕"})]}),a.jsx("div",{className:"p-4 text-sm text-slate-700",children:r}),a.jsx("div",{className:"p-4 border-t border-slate-100 flex justify-end",children:a.jsx("button",{onClick:n,className:"bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm",children:"Close"})})]})]}):null}function Ns(){const{slug:e}=da(),t=Kc(),r=Gt(),n=Wf;let s=null;e===qe.slug?s=qe:e===De.slug?s=De:e===Oe.slug&&(s=Oe);const o=x=>{var j;const N=e??"",w=l(N);return w&&typeof w[x]=="number"?w[x]:((j=n[N])==null?void 0:j[x])||0},i=x=>{const N=l(x);if(N){const I=Object.values(N);return I.length===0?0:Math.round(I.reduce((P,D)=>P+D,0)/I.length)}const w=n[x];if(!w)return 0;const j=Object.values(w);return j.length===0?0:Math.round(j.reduce((I,P)=>I+P,0)/j.length)};function l(x){try{const N=localStorage.getItem(`progress-${x}`);if(N){const j=JSON.parse(N);if(Array.isArray(j)){const I=j;let P=null;if(x===qe.slug?P=qe:x===De.slug?P=De:x===Oe.slug&&(P=Oe),P&&P.sections){const D={};return P.sections.forEach(X=>{var Pt,Fe;const oe=(((Pt=X.lessons)==null?void 0:Pt.length)||0)+(((Fe=X.exercises)==null?void 0:Fe.length)||0);if(oe===0){D[X.id]=0;return}let Ge=0;(X.lessons||[]).forEach(Rt=>{I.includes(Rt.id)&&Ge++}),(X.exercises||[]).forEach(Rt=>{I.includes(Rt.id)&&Ge++}),D[X.id]=Math.round(Ge/oe*100)}),D}}if(j&&typeof j=="object"&&Object.values(j).every(P=>typeof P=="number"))return j}const w=localStorage.getItem(`progressItems-${x}`);if(w){const j=JSON.parse(w);if(Array.isArray(j)){let I=null;if(x===qe.slug?I=qe:x===De.slug?I=De:x===Oe.slug&&(I=Oe),I&&I.sections){const P={};return I.sections.forEach(D=>{var Ge,Pt;const X=(((Ge=D.lessons)==null?void 0:Ge.length)||0)+(((Pt=D.exercises)==null?void 0:Pt.length)||0);if(X===0){P[D.id]=0;return}let oe=0;(D.lessons||[]).forEach(Fe=>{j.includes(Fe.id)&&oe++}),(D.exercises||[]).forEach(Fe=>{j.includes(Fe.id)&&oe++}),P[D.id]=Math.round(oe/X*100)}),P}}}}catch(N){console.warn("Failed to read stored progress",N)}return null}const u=(x,N)=>N===100?"✅":N>0?"📖":["🔰","🚀","🛠️","🗺️","🎨","💾","🔒","☁️"][x]||"📚",[d,h]=_r.useState(!1),[f,v]=_r.useState(null),[k,S]=_r.useState(null),C=(x,N)=>{v(x),S(N),h(!0)},y=()=>{try{if(!e)return C("No course selected","No course selected to save progress.");let x=[];const N=localStorage.getItem(`progressItems-${e}`);if(N)try{const w=JSON.parse(N);Array.isArray(w)&&(x=w)}catch{}if(x.length===0){const w=localStorage.getItem(`progress-${e}`);if(w)try{const j=JSON.parse(w);Array.isArray(j)&&(x=j)}catch{}}if(s&&x.length>0){const w={};s.sections.forEach(j=>{var D,X;const I=(((D=j.lessons)==null?void 0:D.length)||0)+(((X=j.exercises)==null?void 0:X.length)||0);if(I===0){w[j.id]=0;return}let P=0;(j.lessons||[]).forEach(oe=>{x.includes(oe.id)&&P++}),(j.exercises||[]).forEach(oe=>{x.includes(oe.id)&&P++}),w[j.id]=Math.round(P/I*100)}),localStorage.setItem(`progress-${e}`,JSON.stringify(w))}else if(x.length===0){const w={};s&&s.sections.forEach(j=>{w[j.id]=0}),localStorage.setItem(`progress-${e}`,JSON.stringify(w))}localStorage.setItem(`progressItems-${e}`,JSON.stringify(x)),C("Progress saved","Progress saved locally.")}catch(x){console.error(x),C("Error","Failed to save progress.")}},m=()=>{if(!e)return C("No course selected","Select a course to take notes.");C("Notes","Notes feature coming soon! For now, focus on the course content.")},c=()=>{if(!e)return C("No course selected","Select a course first.");const x=i(e);C("Course Progress",`Your progress in this course: ${x}% complete!`)},p=x=>{e&&(r.pathname.includes(`/courses/${e}`)||t(`/courses/${e}`),setTimeout(()=>{const N=document.getElementById(x);N&&(N.scrollIntoView({behavior:"smooth",block:"start"}),N.classList.add("bg-yellow-50","border-yellow-200"),setTimeout(()=>{N.classList.remove("bg-yellow-50","border-yellow-200")},2e3))},100))},g=x=>r.hash===`#${x}`;return a.jsx("aside",{className:"hidden md:block md:col-span-1",children:a.jsx("nav",{className:"sticky top-16",children:a.jsxs("div",{className:"bg-white rounded-xl p-4 shadow-card h-[calc(100vh-4rem)] overflow-auto sidebar-scroll w-full",children:[a.jsx(Hf,{isOpen:d,title:f,onClose:()=>h(!1),children:k}),a.jsxs("div",{className:"mb-6",children:[a.jsxs("h3",{className:"text-sm font-bold text-slate-800 mb-3 flex items-center gap-2",children:[a.jsx("span",{children:"📁"}),"My Courses"]}),a.jsx("ul",{className:"space-y-2",children:br.map(x=>{const N=i(x.slug);return x.slug,a.jsx("li",{children:a.jsxs(qf,{to:`/courses/${x.slug}`,className:({isActive:w})=>`block text-sm px-3 py-2 rounded-lg border transition-all group ${w?"bg-primary-50 border-primary-200 text-primary-700 font-semibold shadow-sm":"border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"}`,children:[a.jsxs("div",{className:"flex justify-between items-center mb-1",children:[a.jsx("span",{className:"font-medium truncate",children:x.title}),N>0&&a.jsxs("span",{className:"text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full flex-shrink-0",children:[N,"%"]})]}),a.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500 mb-2",children:[a.jsx("span",{className:`px-1.5 py-0.5 rounded ${x.level==="Beginner"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`,children:x.level}),a.jsx("span",{children:x.duration})]}),a.jsx("div",{className:"w-full bg-slate-200 rounded-full h-1.5",children:a.jsx("div",{className:"bg-primary-500 h-1.5 rounded-full transition-all progress-bar",style:{width:`${N}%`}})})]})},x.id)})})]}),s&&a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("h4",{className:"text-sm font-bold text-slate-800 flex items-center gap-2",children:[a.jsx("span",{children:"📑"}),"Course Content"]}),a.jsxs("span",{className:"text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded",children:[s.totalModules," modules"]})]}),a.jsx("ul",{className:"space-y-2",children:s.sections.map((x,N)=>{const w=o(x.id),j=g(x.id);return a.jsxs("li",{children:[a.jsx("button",{onClick:()=>p(x.id),className:`w-full text-left text-sm px-3 py-3 rounded-lg border transition-all group ${j?"bg-primary-50 border-primary-200 text-primary-700 font-semibold shadow-sm":"border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"}`,children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("div",{className:`w-6 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${w===100?"bg-green-100 text-green-600":w>0?"bg-blue-100 text-blue-600":"bg-slate-100 text-slate-400"}`,children:u(N,w)}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"font-semibold text-slate-800 group-hover:text-slate-900 truncate",children:x.title}),a.jsxs("div",{className:"flex items-center gap-3 mt-1 text-xs text-slate-500 flex-wrap",children:[a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("span",{children:"⏱️"}),x.duration]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("span",{children:"📚"}),x.lessons.length," lessons"]}),x.exercises&&a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("span",{children:"💪"}),x.exercises.length," exercises"]})]}),w>0&&a.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[a.jsx("div",{className:"flex-1 bg-slate-200 rounded-full h-1.5",children:a.jsx("div",{className:`h-1.5 rounded-full transition-all progress-bar ${w===100?"bg-green-500":"bg-primary-500"}`,style:{width:`${w}%`}})}),a.jsxs("span",{className:`text-xs font-medium ${w===100?"text-green-600":"text-primary-600"}`,children:[w,"%"]})]}),w===0&&a.jsxs("div",{className:"flex items-center gap-1 mt-1 text-xs text-slate-400",children:[a.jsx("span",{children:"👉"}),"Start learning"]})]})]})}),j&&x.objectives&&a.jsxs("div",{className:"ml-11 mt-2 p-2 bg-slate-50 rounded-lg border border-slate-200",children:[a.jsx("h5",{className:"text-xs font-semibold text-slate-700 mb-1",children:"What you'll learn:"}),a.jsxs("ul",{className:"text-xs text-slate-600 space-y-0.5",children:[x.objectives.slice(0,2).map((I,P)=>a.jsxs("li",{className:"flex items-start gap-1",children:[a.jsx("span",{className:"text-primary-500 mt-0.5",children:"•"}),a.jsx("span",{className:"truncate",children:I})]},P)),x.objectives.length>2&&a.jsxs("li",{className:"text-slate-500 text-xs",children:["+",x.objectives.length-2," more objectives"]})]})]})]},x.id)})}),a.jsx("div",{className:"mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200",children:a.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"font-semibold text-slate-700",children:s.totalLessons}),a.jsx("div",{className:"text-slate-500",children:"Lessons"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"font-semibold text-slate-700",children:s.totalExercises}),a.jsx("div",{className:"text-slate-500",children:"Exercises"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"font-semibold text-slate-700",children:s.totalProjects}),a.jsx("div",{className:"text-slate-500",children:"Projects"})]}),a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"font-semibold text-slate-700",children:i(e)}),a.jsx("div",{className:"text-slate-500",children:"Complete"})]})]})})]}),a.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-200",children:[a.jsx("h4",{className:"text-sm font-bold text-slate-800 mb-3",children:"Quick Actions"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("button",{onClick:y,className:"w-full text-sm bg-primary-500 hover:bg-primary-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2",children:[a.jsx("span",{children:"💾"}),"Save Progress"]}),a.jsxs("button",{onClick:m,className:"w-full text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2",children:[a.jsx("span",{children:"📋"}),"Take Notes"]}),s&&a.jsxs("button",{onClick:c,className:"w-full text-sm bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2",children:[a.jsx("span",{children:"📊"}),"View Progress"]})]})]}),s&&a.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-200",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"text-sm font-semibold text-slate-700",children:"Overall Progress"}),a.jsxs("span",{className:"text-sm font-bold text-primary-600",children:[i(e),"%"]})]}),a.jsx("div",{className:"w-full bg-slate-200 rounded-full h-2",children:a.jsx("div",{className:"bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all progress-bar",style:{width:`${i(e)}%`}})}),a.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mt-1",children:[a.jsx("span",{children:"Started"}),a.jsxs("span",{children:[i(e),"% Complete"]})]})]})]})})})}function $f(){return a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[a.jsx(Ns,{}),a.jsxs("main",{className:"md:col-span-3",children:[a.jsx("h1",{className:"text-2xl font-bold mb-4",children:"All Courses"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:br.map(e=>a.jsx(td,{course:e},e.id))})]})]})}function Ot({code:e,className:t}){const[r,n]=E.useState(!1),s=async()=>{try{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)}catch{const i=document.createElement("textarea");i.value=e,i.style.position="fixed",i.style.left="-9999px",document.body.appendChild(i),i.select();try{document.execCommand("copy"),n(!0),setTimeout(()=>n(!1),2e3)}catch{}document.body.removeChild(i)}};return a.jsxs("div",{className:`relative rounded-md overflow-hidden ${t??""}`,children:[a.jsx("pre",{className:"bg-black text-white rounded p-3 overflow-auto whitespace-pre-wrap",children:a.jsx("code",{children:e})}),a.jsx("button",{onClick:s,"aria-label":"Copy code",className:"absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded",title:"Copy",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"w-4 h-4",children:[a.jsx("path",{d:"M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("rect",{x:"8",y:"3",width:"13",height:"13",rx:"2",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),r&&a.jsx("div",{className:"absolute top-10 right-2 bg-white text-slate-900 text-xs px-2 py-1 rounded shadow",children:"Copied"})]})}function Vf(){const{slug:e}=da(),[t,r]=E.useState(new Set),[n,s]=E.useState({}),[o,i]=E.useState({}),[l,u]=E.useState(null),d=br.find(y=>y.slug===e);let h=null;e==="git-and-github"&&(h=qe),e==="node-and-express"&&(h=De),e==="react-fundamentals"&&(h=Oe),E.useEffect(()=>{const y=`progressItems-${e}`,m=localStorage.getItem(y);if(m)try{const p=JSON.parse(m);if(Array.isArray(p)){r(new Set(p));return}}catch(p){console.warn("Failed to parse saved progress items:",p)}const c=localStorage.getItem(`progress-${e}`);if(c)try{const p=JSON.parse(c);if(Array.isArray(p)){r(new Set(p));return}if(p&&typeof p=="object"){const g=[];if(!Object.values(p).every(w=>typeof w=="number")){Object.keys(p).forEach(w=>{p[w]&&g.push(w)}),r(new Set(g));return}if(h){Object.keys(p).forEach(w=>{const j=p[w];if(typeof j=="number"&&j>=100){const I=h.sections.find(P=>P.id===w);I&&((I.lessons||[]).forEach(P=>g.push(P.id)),(I.exercises||[]).forEach(P=>g.push(P.id)))}}),g.length>0&&r(new Set(g));return}}r(new Set([String(p)]))}catch(p){console.warn("Failed to parse saved progress:",p)}},[e,h]);const f=y=>{const m=new Set(t);m.has(y)?m.delete(y):m.add(y),r(m);try{localStorage.setItem(`progress-${e}`,JSON.stringify([...m])),localStorage.setItem(`progressItems-${e}`,JSON.stringify([...m]))}catch{}},v=y=>{s(m=>({...m,[y]:!m[y]}))},k=(y,m,c)=>{i(p=>({...p,[`${y}-${m}`]:c}))},S=(y,m)=>{let c=0;return y?(y.forEach((p,g)=>{o[`${m}-${g}`]===p.correct&&c++}),{correct:c,total:y.length}):{correct:0,total:0}},C=y=>{var m;return y?a.jsxs("div",{className:"space-y-6",children:[(m=y.paragraphs)==null?void 0:m.map((c,p)=>a.jsx("p",{className:"text-slate-700 leading-relaxed",children:c},p)),y.description&&a.jsx("p",{className:"text-slate-600 mb-3",children:y.description}),y.keyPoints&&a.jsxs("div",{className:"bg-blue-50 rounded-lg p-5 border border-blue-200",children:[a.jsxs("h4",{className:"font-semibold text-blue-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Key Points"]}),a.jsx("ul",{className:"space-y-2",children:y.keyPoints.map((c,p)=>a.jsxs("li",{className:"flex items-start gap-2 text-blue-800",children:[a.jsx("span",{className:"text-blue-500 mt-1.5 flex-shrink-0",children:"•"}),a.jsx("span",{children:c})]},p))})]}),y.keyConcepts&&a.jsxs("div",{className:"bg-amber-50 rounded-lg p-5 border border-amber-200",children:[a.jsxs("h4",{className:"font-semibold text-amber-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"Key Concepts"]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:y.keyConcepts.map((c,p)=>a.jsxs("div",{className:"bg-white rounded-lg p-3 border border-amber-100",children:[a.jsx("h5",{className:"font-medium text-amber-900 mb-1",children:c.term}),a.jsx("p",{className:"text-amber-700 text-sm",children:c.explanation})]},p))})]}),y.analogy&&a.jsxs("div",{className:"bg-purple-50 rounded-lg p-5 border border-purple-200",children:[a.jsxs("h4",{className:"font-semibold text-purple-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}),y.analogy.title?`Real-World Analogy: ${y.analogy.title}`:"Real-World Analogy"]}),y.analogy.description&&a.jsx("p",{className:"text-purple-800 mb-4",children:y.analogy.description}),y.analogy.scenarios&&a.jsx("div",{className:"space-y-3",children:y.analogy.scenarios.map((c,p)=>a.jsx("div",{className:"bg-white rounded-lg p-3 border border-purple-100",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("span",{className:"w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",children:p+1}),a.jsxs("div",{children:[a.jsx("h5",{className:"font-medium text-purple-900",children:c.situation}),a.jsx("p",{className:"text-purple-700 text-sm mt-1",children:c.explanation})]})]})},p))}),y.analogy.stages&&a.jsx("div",{className:"space-y-3 mt-4",children:y.analogy.stages.map((c,p)=>a.jsx("div",{className:"bg-white rounded-lg p-3 border border-purple-100",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("span",{className:"w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",children:p+1}),a.jsxs("div",{children:[a.jsx("h5",{className:"font-medium text-purple-900",children:c.stage}),a.jsx("p",{className:"text-purple-700 text-sm mt-1",children:c.explanation})]})]})},p))})]}),y.checklist&&a.jsxs("div",{className:"bg-emerald-50 rounded-lg p-5 border border-emerald-200",children:[a.jsxs("h4",{className:"font-semibold text-emerald-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Security Checklist"]}),a.jsx("div",{className:"space-y-2",children:y.checklist.map((c,p)=>a.jsx("div",{className:"bg-white rounded-lg p-3 border border-emerald-100",children:a.jsxs("div",{className:"flex items-start gap-2",children:[a.jsx("span",{className:"text-emerald-500 mt-0.5",children:"✓"}),a.jsxs("div",{children:[a.jsx("p",{className:"font-medium text-emerald-900",children:c.item}),a.jsx("p",{className:"text-emerald-700 text-sm mt-1",children:c.why})]})]})},p))})]}),y.realWorldExamples&&a.jsxs("div",{className:"bg-teal-50 rounded-lg p-5 border border-teal-200",children:[a.jsxs("h4",{className:"font-semibold text-teal-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Real World Examples"]}),a.jsx("div",{className:"space-y-2",children:y.realWorldExamples.map((c,p)=>a.jsxs("div",{className:"flex items-start gap-2 text-teal-800",children:[a.jsx("span",{className:"text-teal-500 mt-1.5 flex-shrink-0",children:"→"}),a.jsx("span",{children:c})]},p))})]}),y.jwtParts&&a.jsxs("div",{className:"bg-indigo-50 rounded-lg p-5 border border-indigo-200",children:[a.jsxs("h4",{className:"font-semibold text-indigo-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),"JWT Structure Explained"]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-3",children:y.jwtParts.map((c,p)=>a.jsxs("div",{className:"bg-white rounded-lg p-3 border border-indigo-100",children:[a.jsx("h5",{className:"font-medium text-indigo-900 mb-1",children:c.part}),a.jsx("p",{className:"text-indigo-700 text-xs mb-2 italic",children:c.analogy}),a.jsx("p",{className:"text-indigo-600 text-sm",children:c.contains})]},p))})]}),y.comparison&&a.jsxs("div",{className:"bg-cyan-50 rounded-lg p-5 border border-cyan-200",children:[a.jsx("h4",{className:"font-semibold text-cyan-900 mb-3",children:"Good vs Bad Practices"}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"bg-white rounded-lg p-4 border border-red-200",children:[a.jsxs("h5",{className:"font-medium text-red-700 mb-2",children:["❌ ",y.comparison.badPractice]}),a.jsx("p",{className:"text-red-600 text-sm",children:y.comparison.analogy})]}),a.jsxs("div",{className:"bg-white rounded-lg p-4 border border-green-200",children:[a.jsxs("h5",{className:"font-medium text-green-700 mb-2",children:["✅ ",y.comparison.goodPractice]}),a.jsx("p",{className:"text-green-600 text-sm",children:y.comparison.analogy})]})]})]}),y.howItWorks&&a.jsxs("div",{className:"bg-cyan-50 rounded-lg p-5 border border-cyan-200",children:[a.jsxs("h4",{className:"font-semibold text-cyan-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"How It Works"]}),a.jsx("ol",{className:"space-y-2",children:y.howItWorks.map((c,p)=>a.jsxs("li",{className:"flex items-start gap-2 text-cyan-800",children:[a.jsx("span",{className:"w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",children:p+1}),a.jsx("span",{children:c})]},p))})]}),y.visualFlow&&a.jsxs("div",{className:"bg-green-50 rounded-lg p-5 border border-green-200",children:[a.jsxs("h4",{className:"font-semibold text-green-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"})}),"Visual Flow"]}),a.jsx("div",{className:"bg-white p-4 rounded border border-green-200",children:a.jsx("pre",{className:"text-green-800 font-mono text-sm whitespace-pre",children:y.visualFlow})})]}),y.commonMistakes&&a.jsxs("div",{className:"bg-red-50 rounded-lg p-5 border border-red-200",children:[a.jsxs("h4",{className:"font-semibold text-red-900 mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.928-.833-2.698 0L4.782 16.5c-.77.833.192 2.5 1.732 2.5z"})}),"Common Mistakes to Avoid"]}),a.jsx("div",{className:"space-y-2",children:y.commonMistakes.map((c,p)=>a.jsxs("div",{className:"flex items-start gap-2 text-red-800",children:[a.jsx("span",{className:"text-red-500 mt-1",children:"❌"}),a.jsx("span",{children:c})]},p))})]}),y.hashExample&&a.jsxs("div",{className:"bg-gray-50 rounded-lg p-5 border border-gray-200",children:[a.jsx("h4",{className:"font-semibold text-gray-900 mb-3",children:"Hash Example"}),a.jsx("div",{className:"bg-white p-3 rounded border border-gray-300",children:a.jsx("pre",{className:"text-gray-800 text-sm overflow-x-auto",children:y.hashExample})})]}),y.steps&&a.jsxs("div",{className:"space-y-3",children:[a.jsx("h4",{className:"font-semibold text-slate-900 mb-3",children:"Step-by-Step Guide"}),y.steps.map((c,p)=>a.jsx("div",{className:"bg-white rounded-lg p-4 border border-slate-200",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("span",{className:"w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0",children:p+1}),a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-slate-800 mb-2 font-medium",children:c.text}),c.explanation&&a.jsx("p",{className:"text-slate-600 text-sm mb-2",children:c.explanation}),c.code&&a.jsx(Ot,{code:c.code})]})]})},p))]}),y.code&&a.jsxs("div",{children:[y.description&&a.jsx("p",{className:"text-slate-600 mb-3",children:y.description}),a.jsx(Ot,{code:y.code})]})]}):null};return d?h?a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 min-h-screen",children:[a.jsx(Ns,{}),a.jsxs("main",{className:"md:col-span-3 space-y-8 py-6",children:[a.jsx("div",{className:"bg-white rounded-2xl p-8 shadow-lg border border-slate-200",children:a.jsx("div",{className:"flex items-start justify-between",children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[a.jsx("span",{className:"bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full",children:d.level}),a.jsxs("span",{className:"bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full",children:["⏱️ ",d.duration]}),a.jsxs("span",{className:"bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full",children:["📊 ",t.size," items completed"]})]}),a.jsx("h1",{className:"text-4xl font-bold text-slate-900 mb-4",children:d.title}),a.jsx("p",{className:"text-xl text-slate-600 mb-6 leading-relaxed",children:d.description}),h.prerequisites&&a.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:[a.jsxs("h3",{className:"font-semibold text-yellow-800 mb-2 flex items-center gap-2",children:[a.jsx("span",{children:"📋"}),"Prerequisites"]}),a.jsx("ul",{className:"text-yellow-700 list-disc list-inside space-y-1",children:h.prerequisites.map((y,m)=>a.jsx("li",{children:y},m))})]})]})})}),a.jsx("div",{className:"space-y-8",children:h.sections.map((y,m)=>{var c,p;return a.jsxs("section",{id:y.id,className:"bg-white rounded-2xl p-8 shadow-lg border border-slate-200 scroll-mt-8",children:[a.jsx("div",{className:"flex items-start justify-between mb-8",children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[a.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg",children:m+1}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-slate-900",children:y.title}),a.jsxs("div",{className:"flex items-center gap-4 mt-2 text-sm text-slate-600",children:[a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("span",{children:"⏱️"}),y.duration]}),a.jsxs("span",{className:"flex items-center gap-1",children:[a.jsx("span",{children:"🎯"}),((c=y.lessons)==null?void 0:c.length)||0," lessons"]})]})]})]}),y.objectives&&a.jsxs("div",{className:"bg-primary-50 rounded-lg p-4 border border-primary-200",children:[a.jsxs("h3",{className:"font-semibold text-primary-900 mb-3 flex items-center gap-2",children:[a.jsx("span",{children:"🎯"}),"Learning Objectives"]}),a.jsx("ul",{className:"grid md:grid-cols-2 gap-2",children:y.objectives.map((g,x)=>a.jsxs("li",{className:"flex items-start gap-2 text-primary-700",children:[a.jsx("span",{className:"text-primary-500 mt-1",children:"✓"}),g]},x))})]})]})}),a.jsx("div",{className:"space-y-8",children:(p=y.lessons)==null?void 0:p.map((g,x)=>a.jsx("div",{className:"border-l-4 border-primary-300 pl-6 ml-3",children:a.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[a.jsx("button",{onClick:()=>f(g.id),className:`w-7 h-7 rounded-full border-2 flex-shrink-0 mt-1 transition-all ${t.has(g.id)?"bg-green-500 border-green-500 text-white":"border-slate-300 hover:border-primary-400"}`,children:t.has(g.id)&&"✓"}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("h3",{className:"text-xl font-semibold text-slate-800",children:g.title}),a.jsx("span",{className:`text-xs font-medium px-2 py-1 rounded-full ${g.type==="theory"?"bg-blue-100 text-blue-700":g.type==="practical"?"bg-green-100 text-green-700":"bg-purple-100 text-purple-700"}`,children:g.type})]}),C(g.content)]})]})},g.id))}),y.exercises&&y.exercises.length>0&&a.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-200",children:[a.jsxs("h3",{className:"text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",children:[a.jsx("span",{className:"w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center",children:"💪"}),"Practice Exercises"]}),a.jsx("div",{className:"space-y-6",children:y.exercises.map(g=>a.jsxs("div",{className:"bg-orange-50 border border-orange-200 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"text-lg font-semibold text-orange-900 mb-2",children:g.title}),a.jsx("p",{className:"text-orange-800 mb-3",children:g.description}),a.jsxs("div",{className:"bg-white rounded-lg p-4 border border-orange-300",children:[a.jsx("h5",{className:"font-medium text-orange-900 mb-2",children:"Your Task:"}),a.jsx("pre",{className:"text-slate-700 whitespace-pre-wrap text-sm",children:g.task})]})]}),a.jsx("button",{onClick:()=>f(g.id),className:`w-7 h-7 rounded-full border-2 flex-shrink-0 transition-all ${t.has(g.id)?"bg-green-500 border-green-500 text-white":"border-slate-300 hover:border-primary-400"}`,children:t.has(g.id)&&"✓"})]}),g.hint&&a.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4",children:a.jsxs("p",{className:"text-yellow-800 text-sm",children:[a.jsx("strong",{children:"💡 Hint:"})," ",g.hint]})}),g.starterCode&&a.jsxs("div",{className:"mb-4",children:[a.jsx("h5",{className:"font-medium text-orange-900 mb-2",children:"Starter Code:"}),a.jsx(Ot,{code:g.starterCode})]}),a.jsx("button",{onClick:()=>v(g.id),className:"bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium",children:n[g.id]?"Hide Solution":"Show Solution"}),n[g.id]&&g.solution&&a.jsxs("div",{className:"mt-4 bg-white rounded-lg p-4 border border-orange-300",children:[a.jsx("h5",{className:"font-medium text-orange-900 mb-3",children:"Solution:"}),a.jsx(Ot,{code:g.solution})]})]},g.id))})]}),y.commonMistakes&&a.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-200",children:[a.jsxs("h3",{className:"text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",children:[a.jsx("span",{className:"w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center",children:"⚠️"}),"Common Mistakes & Solutions"]}),a.jsx("div",{className:"space-y-4",children:y.commonMistakes.map((g,x)=>a.jsx("div",{className:"bg-red-50 rounded-lg p-4 border border-red-200",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("span",{className:"text-red-500 mt-1",children:"❌"}),a.jsxs("div",{children:[a.jsx("p",{className:"font-medium text-red-900 mb-1",children:g.mistake}),a.jsxs("p",{className:"text-red-700 text-sm",children:[a.jsx("strong",{children:"Solution:"})," ",g.solution]})]})]})},x))})]}),y.quiz&&y.quiz.length>0&&a.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-200",children:[a.jsxs("h3",{className:"text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",children:[a.jsx("span",{className:"w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center",children:"🧠"}),"Knowledge Check"]}),a.jsxs("div",{className:"space-y-6",children:[y.quiz.map((g,x)=>a.jsxs("div",{className:"bg-white border border-slate-300 rounded-xl p-6",children:[a.jsxs("h4",{className:"text-lg font-medium text-slate-900 mb-4",children:[x+1,". ",g.question]}),a.jsx("div",{className:"space-y-2",children:g.options.map((N,w)=>a.jsxs("label",{className:"flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:border-primary-300 cursor-pointer transition-colors",children:[a.jsx("input",{type:"radio",name:`quiz-${y.id}-${x}`,value:w,onChange:()=>k(y.id,x,w),className:"text-primary-500 focus:ring-primary-500"}),a.jsx("span",{className:"text-slate-700",children:N})]},w))}),o[`${y.id}-${x}`]!==void 0&&a.jsxs("div",{className:`mt-4 p-3 rounded-lg ${o[`${y.id}-${x}`]===g.correct?"bg-green-100 text-green-800 border border-green-200":"bg-red-100 text-red-800 border border-red-200"}`,children:[o[`${y.id}-${x}`]===g.correct?"✅ Correct! Well done.":"❌ Not quite right. Try again!",g.explanation&&a.jsx("p",{className:"mt-2 text-sm",children:g.explanation})]})]},x)),a.jsxs("div",{className:"bg-slate-100 rounded-xl p-6 text-center",children:[a.jsx("h4",{className:"font-semibold text-slate-900 mb-2",children:"Quiz Results"}),a.jsxs("p",{className:"text-slate-700",children:[S(y.quiz,y.id).correct," /"," ",S(y.quiz,y.id).total," correct"]})]})]})]}),y.nextSteps&&a.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-200",children:[a.jsxs("h3",{className:"text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",children:[a.jsx("span",{className:"w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center",children:"🚀"}),"Next Steps"]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:y.nextSteps.map((g,x)=>a.jsx("div",{className:"bg-blue-50 rounded-lg p-4 border border-blue-200",children:a.jsx("p",{className:"text-blue-800",children:g})},x))})]}),y.testingYourAPI&&a.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-200",children:[a.jsxs("h3",{className:"text-xl font-bold text-slate-900 mb-6 flex items-center gap-3",children:[a.jsx("span",{className:"w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center",children:"🧪"}),"Testing Your API"]}),a.jsx("div",{className:"space-y-3",children:y.testingYourAPI.map((g,x)=>a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("span",{className:"w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",children:x+1}),a.jsx("p",{className:"text-slate-700",children:g})]},x))})]}),y.finalProject&&a.jsx("div",{className:"mt-8 pt-6 border-t border-slate-200",children:a.jsxs("div",{className:"bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center gap-3",children:[a.jsx("span",{children:"🚀"}),y.finalProject.title]}),a.jsx("p",{className:"text-blue-100 text-lg mb-6",children:y.finalProject.description}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsxs("h4",{className:"font-semibold mb-3 flex items-center gap-2",children:[a.jsx("span",{children:"📋"}),"Requirements"]}),a.jsx("ul",{className:"space-y-2",children:y.finalProject.requirements.map((g,x)=>a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx("span",{children:"•"}),a.jsx("span",{children:g})]},x))})]}),y.finalProject.bonus&&a.jsxs("div",{children:[a.jsxs("h4",{className:"font-semibold mb-3 flex items-center gap-2",children:[a.jsx("span",{children:"⭐"}),"Bonus Features"]}),a.jsx("ul",{className:"space-y-2",children:y.finalProject.bonus.map((g,x)=>a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx("span",{children:"+"}),a.jsx("span",{children:g})]},x))})]})]})]})})]},y.id)})}),a.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4",children:"🎉 Course Complete!"}),a.jsx("p",{className:"text-green-100 text-lg mb-6",children:"You've finished all modules. Great job on your learning journey!"}),a.jsx("div",{className:"bg-white/20 rounded-lg p-4 inline-block",children:a.jsxs("p",{className:"font-semibold",children:["Progress: ",t.size," items completed"]})})]})]})]}):a.jsx("div",{className:"container mx-auto px-4 py-8",children:"Course content not available"}):a.jsx("div",{className:"container mx-auto px-4 py-8",children:"Course not found"})}function Gf(){const{slug:e,sectionId:t}=da(),r=br.find(s=>s.slug===e);if(!r)return a.jsx("div",{children:"Course not found"});const n=e===qe.slug?qe.sections.find(s=>s.id===t):e===De.slug?De.sections.find(s=>s.id===t):e===Oe.slug?Oe.sections.find(s=>s.id===t):null;return n?a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[a.jsx(Ns,{}),a.jsxs("main",{className:"md:col-span-3 space-y-6",children:[a.jsxs("h1",{className:"text-3xl font-bold",children:[r.title," — ",n.title]}),n.paragraphs&&n.paragraphs.map((s,o)=>a.jsx("p",{className:"text-gray-700",children:s},o)),n.subsections&&n.subsections.map(s=>a.jsxs("section",{id:s.id,className:"pt-4",children:[a.jsx("h2",{className:"text-2xl font-semibold mb-2",children:s.title}),s.description&&a.jsx("p",{className:"text-sm text-gray-600 mb-2",children:s.description}),s.steps&&a.jsx("ul",{className:"list-disc pl-5 text-sm text-gray-800",children:s.steps.map((o,i)=>a.jsxs("li",{className:"mb-2",children:[o.os?a.jsxs(a.Fragment,{children:[a.jsxs("strong",{children:[o.os,":"]})," ",o.text]}):o.text,o.code&&a.jsx("div",{className:"mt-2",children:a.jsx(Ot,{code:o.code})})]},i))}),s.code&&a.jsx("div",{className:"mt-2",children:a.jsx(Ot,{code:s.code})}),"verify"in s&&s.verify&&a.jsx("div",{className:"mt-2",children:a.jsx(Ot,{code:s.verify})})]},s.id)),n.items&&a.jsx("ul",{className:"list-disc pl-5 mt-2 text-gray-700",children:n.items.map((s,o)=>a.jsx("li",{dangerouslySetInnerHTML:{__html:s}},o))})]})]}):a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[a.jsx(Ns,{}),a.jsx("main",{className:"md:col-span-3",children:a.jsx("h2",{className:"text-2xl font-semibold",children:"Section not found"})})]})}function Jf(){return a.jsx(jf,{children:a.jsxs(Qt,{path:"/",element:a.jsx(Ff,{}),children:[a.jsx(Qt,{index:!0,element:a.jsx(Bf,{})}),a.jsx(Qt,{path:"courses",element:a.jsx($f,{})}),a.jsx(Qt,{path:"courses/:slug",element:a.jsx(Vf,{})}),a.jsx(Qt,{path:"courses/:slug/:sectionId",element:a.jsx(Gf,{})})]})})}const Qf="/express-course/";Fc(document.getElementById("root")).render(a.jsx(_r.StrictMode,{children:a.jsx(Af,{basename:Qf,children:a.jsx(Jf,{})})}));(function(){try{const t=r=>r?r===qe.slug?qe:r===De.slug?De:r===Oe.slug?Oe:null:null;br.forEach(r=>{const n=r.slug;if(!n)return;const s=localStorage.getItem(`progressItems-${n}`);if(s)try{const o=JSON.parse(s);if(Array.isArray(o)){const i=t(n);if(i&&i.sections){const l={};i.sections.forEach(u=>{var h,f;const d=(((h=u.lessons)==null?void 0:h.length)||0)+(((f=u.exercises)==null?void 0:f.length)||0);if(d===0)l[u.id]=0;else{let v=0;(u.lessons||[]).forEach(k=>{o.includes(k.id)&&v++}),(u.exercises||[]).forEach(k=>{o.includes(k.id)&&v++}),l[u.id]=Math.round(v/d*100)}}),localStorage.setItem(`progress-${n}`,JSON.stringify(l))}}}catch{}else{const o=localStorage.getItem(`progress-${n}`);if(o)try{const i=JSON.parse(o);if(Array.isArray(i)){localStorage.setItem(`progressItems-${n}`,JSON.stringify(i));const l=t(n);if(l&&l.sections){const u={};l.sections.forEach(d=>{var f,v;const h=(((f=d.lessons)==null?void 0:f.length)||0)+(((v=d.exercises)==null?void 0:v.length)||0);if(h===0)u[d.id]=0;else{let k=0;(d.lessons||[]).forEach(S=>{i.includes(S.id)&&k++}),(d.exercises||[]).forEach(S=>{i.includes(S.id)&&k++}),u[d.id]=Math.round(k/h*100)}}),localStorage.setItem(`progress-${n}`,JSON.stringify(u))}}}catch{}}})}catch(t){console.warn("Progress normalization failed:",t)}})();
