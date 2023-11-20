import{b as ae,x as M,f as l,k as w,L as ne,m as se,h as A,g as ue,aM as le,q as ie,j as re,aN as ce,N as fe}from"./app.3d0443e2.js";import{u as de,a as ve,v as D,b as ge,c as me,d as he,e as ye,f as Pe,g as ke,r as R,s as Te,p as H,h as xe,i as Ce}from"./position-engine.10c506f8.js";import{u as Se,a as be,b as qe,d as Oe}from"./selection.c3b8e743.js";import{u as Be,a as Ee}from"./use-dark.46133ca7.js";import{a as Fe,r as Me,b as K,c as we}from"./focusout.fcf09816.js";import{a as Ae}from"./focus-manager.387b0375.js";var je=ae({name:"QMenu",inheritAttrs:!1,props:{...de,...Se,...Be,...ve,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:D},self:{type:String,validator:D},offset:{type:Array,validator:ge},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...be,"click","escapeKey"],setup(t,{slots:Q,emit:c,attrs:d}){let n=null,f,i,v;const k=re(),{proxy:g}=k,{$q:o}=g,a=M(null),s=M(!1),W=l(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),j=Ee(t,o),{registerTick:L,removeTick:N}=me(),{registerTimeout:T}=qe(),{transitionProps:_,transitionStyle:I}=he(t),{localScrollTarget:x,changeScrollEvent:U,unconfigureScrollTarget:$}=ye(t,E),{anchorEl:u,canShow:z}=Pe({showing:s}),{hide:C}=Oe({showing:s,canShow:z,handleShow:Y,handleHide:Z,hideOnRouteChange:W,processOnMount:!0}),{showPortal:S,hidePortal:b,renderPortal:G}=ke(k,a,ee,"menu"),m={anchorEl:u,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return C(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&fe(e),!0}},q=l(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),J=l(()=>t.cover===!0?q.value:H(t.self||"top start",o.lang.rtl)),V=l(()=>(t.square===!0?" q-menu--square":"")+(j.value===!0?" q-menu--dark q-dark":"")),X=l(()=>t.autoClose===!0?{onClick:p}:{}),O=l(()=>s.value===!0&&t.persistent!==!0);w(O,e=>{e===!0?(we(y),xe(m)):(K(y),R(m))});function h(){Ae(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function Y(e){if(n=t.noRefocus===!1?document.activeElement:null,Fe(F),S(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=ne(e);if(P.left!==void 0){const{top:te,left:oe}=u.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}i===void 0&&(i=w(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),L(()=>{r(),t.noFocus!==!0&&h()}),T(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),S(!0),c("show",e)},t.transitionDuration)}function Z(e){N(),b(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{b(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(Me(F),$(),R(m),K(y)),e!==!0&&(n=null)}function E(){(u.value!==null||t.scrollTarget!==void 0)&&(x.value=se(u.value,t.scrollTarget),U(x.value,r))}function p(e){v!==!0?(Ce(g,e),c("click",e)):v=!1}function F(e){O.value===!0&&t.noFocus!==!0&&ce(a.value,e.target)!==!0&&h()}function y(e){c("escapeKey"),C(e)}function r(){const e=a.value;e===null||u.value===null||Te({el:e,offset:t.offset,anchorEl:u.value,anchorOrigin:q.value,selfOrigin:J.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(le,_.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+V.value,d.class],style:[d.style,I.value],...X.value},ue(Q.default)):null)}return ie(B),Object.assign(g,{focus:h,updatePosition:r}),G}});export{je as Q};
