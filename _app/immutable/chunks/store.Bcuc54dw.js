import{al as f,a0 as d,am as A,y as x,an as O,P as B,ao as C,v as M,B as V,ap as j,x as h,H as q,b as T,e as m,h as k,k as S,g as H,C as b,a5 as P,aq as R,ac as W,M as F,K as z}from"./runtime.BZl7O8Me.js";function G(e){var t=A,n=x;f(null),d(null);try{return e()}finally{f(t),d(n)}}const K=new Set,U=new Set;function ee(e,t,n,r){function i(a){if(r.capture||Y.call(t,a),!a.cancelBubble)return G(()=>n.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function te(e){for(var t=0;t<e.length;t++)K.add(e[t]);for(var n of U)n(e)}function Y(e){var E;var t=this,n=t.ownerDocument,r=e.type,i=((E=e.composedPath)==null?void 0:E.call(e))||[],a=i[0]||e.target,v=0,y=e.__root;if(y){var _=i.indexOf(y);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var g=i.indexOf(t);if(g===-1)return;_<=g&&(v=_)}if(a=i[v]||e.target,a!==t){O(e,"currentTarget",{configurable:!0,get(){return a||n}});var D=A,I=x;f(null),d(null);try{for(var s,w=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var o=a["__"+r];if(o!==void 0&&!a.disabled)if(B(o)){var[L,...N]=o;L.apply(a,[e,...N])}else o.call(a,e)}catch(c){s?w.push(c):s=c}if(e.cancelBubble||p===t||p===null)break;a=p}if(s){for(let c of w)queueMicrotask(()=>{throw c});throw s}}finally{e.__root=t,delete e.currentTarget,f(D),d(I)}}}let u;function re(){u=void 0}function ae(e){let t=null,n=h;var r;if(h){for(t=S,u===void 0&&(u=H(document.head));u!==null&&(u.nodeType!==8||u.data!==q);)u=T(u);u===null?m(!1):u=k(T(u))}h||(r=document.head.appendChild(M()));try{V(()=>e(r),j)}finally{n&&(m(!0),u=S,k(t))}}function ne(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const J=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ue(e){return J.includes(e)}const Q={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function ie(e){return e=e.toLowerCase(),Q[e]??e}const X=["touchstart","touchmove"];function se(e){return X.includes(e)}function Z(e,t,n){if(e==null)return t(void 0),b;const r=P(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}let l=!1;function oe(e,t,n){const r=n[t]??(n[t]={store:null,source:W(void 0),unsubscribe:b});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=b;else{var i=!0;r.unsubscribe=Z(e,a=>{i?r.source.v=a:z(r.source,a)}),i=!1}return F(r.source)}function ce(){const e={};return R(()=>{for(var t in e)e[t].unsubscribe()}),e}function le(e){var t=l;try{return l=!1,[e(),l]}finally{l=t}}export{oe as a,K as b,re as c,ae as d,le as e,ne as f,ee as g,Y as h,se as i,te as j,ue as k,ie as n,U as r,ce as s};
