import{b as m,c as j,d as x}from"/build/_shared/chunk-7UEYUE33.js";var O=m(w=>{"use strict";var v=x();function L(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var M=typeof Object.is=="function"?Object.is:L,R=v.useState,z=v.useEffect,A=v.useLayoutEffect,C=v.useDebugValue;function F(e,t){var r=t(),u=R({inst:{value:r,getSnapshot:t}}),n=u[0].inst,o=u[1];return A(function(){n.value=r,n.getSnapshot=t,E(n)&&o({inst:n})},[e,r,t]),z(function(){return E(n)&&o({inst:n}),e(function(){E(n)&&o({inst:n})})},[e]),C(r),r}function E(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!M(e,r)}catch{return!0}}function G(e,t){return t()}var H=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?G:F;w.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:H});var D=m((re,V)=>{"use strict";V.exports=O()});var _=m(N=>{"use strict";var y=x(),J=D();function K(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var P=typeof Object.is=="function"?Object.is:K,Q=J.useSyncExternalStore,T=y.useRef,U=y.useEffect,X=y.useMemo,Y=y.useDebugValue;N.useSyncExternalStoreWithSelector=function(e,t,r,u,n){var o=T(null);if(o.current===null){var f={hasValue:!1,value:null};o.current=f}else f=o.current;o=X(function(){function s(i){if(!S){if(S=!0,c=i,i=u(i),n!==void 0&&f.hasValue){var d=f.value;if(n(d,i))return a=d}return a=i}if(d=a,P(c,i))return d;var h=u(i);return n!==void 0&&n(d,h)?d:(c=i,a=h)}var S=!1,c,a,p=r===void 0?null:r;return[function(){return s(t())},p===null?void 0:function(){return s(p())}]},[t,r,u,n]);var l=Q(e,o[0],o[1]);return U(function(){f.hasValue=!0,f.value=l},[l]),Y(l),l}});var k=m((ue,b)=>{"use strict";b.exports=_()});var g=e=>{let t,r=new Set,u=(s,S)=>{let c=typeof s=="function"?s(t):s;if(!Object.is(c,t)){let a=t;t=S??typeof c!="object"?c:Object.assign({},t,c),r.forEach(p=>p(t,a))}},n=()=>t,l={setState:u,getState:n,subscribe:s=>(r.add(s),()=>r.delete(s)),destroy:()=>r.clear()};return t=e(u,n,l),l},q=e=>e?g(e):g;var W=j(x(),1),B=j(k(),1),{useSyncExternalStoreWithSelector:Z}=B.default;function $(e,t=e.getState,r){let u=Z(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,W.useDebugValue)(u),u}var I=e=>{let t=typeof e=="function"?q(e):e,r=(u,n)=>$(t,u,n);return Object.assign(r,t),r},se=e=>e?I(e):I;export{se as a};