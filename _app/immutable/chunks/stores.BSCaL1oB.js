import{ad as g,ae as f,z as d,a5 as _,af as u,M as p,ag as m,ah as v,a6 as h,ai as k}from"./runtime.BZl7O8Me.js";import{s as y}from"./entry.CE15TpZG.js";function S(e=!1){const s=d,t=s.l.u;if(!t)return;let o=()=>v(s.s);if(e){let n=0,a={};const b=h(()=>{let c=!1;const i=s.s;for(const r in i)i[r]!==a[r]&&(a[r]=i[r],c=!0);return c&&n++,n});o=()=>p(b)}t.b.length&&g(()=>{l(s,o),u(t.b)}),f(()=>{const n=_(()=>t.m.map(m));return()=>{for(const a of n)typeof a=="function"&&a()}}),t.a.length&&f(()=>{l(s,o),u(t.a)})}function l(e,s){if(e.l.s)for(const t of e.l.s)p(t);s()}k();const x=()=>{const e=y;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},$={subscribe(e){return x().page.subscribe(e)}};export{S as i,$ as p};
