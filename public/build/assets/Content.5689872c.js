import{E as Fe,F as P,s as Ie,G as Qe,H as V,I as R,J as fe,K,L as re,M as G,N as He,b as je,i as Ne,e as J,l as Xe,x as O,f as m,k as b,D as ve,n as Ue,q as Ye,O as Re,h as W,P as me,g as Ke,j as Ge,Q as he,_ as pe,o as Z,c as ee,w as T,a as x,R as ye,S as Je,T as Ze,U as be,r as et,V as ge,W as we}from"./app.3d0443e2.js";import{u as tt,a as at}from"./use-prevent-scroll.c93d91aa.js";import{c as rt,u as ot,a as ut,b as nt,d as it}from"./selection.c3b8e743.js";import{u as lt,a as st}from"./use-dark.46133ca7.js";import{b as F}from"./format.865294d5.js";import{Q as dt,a as ct}from"./QLayout.b38590f3.js";const oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ft=Object.keys(oe);oe.all=!0;function Ce(t){const o={};for(const n of ft)t[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?oe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function ke(t,o){return o.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof o.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(o.uid)===-1)}function te(t,o,n){const h=re(t);let e,r=h.left-o.event.x,l=h.top-o.event.y,d=Math.abs(r),c=Math.abs(l);const s=o.direction;s.horizontal===!0&&s.vertical!==!0?e=r<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=l<0?"up":"down":s.up===!0&&l<0?(e="up",d>c&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.down===!0&&l>0?(e="down",d>c&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.left===!0&&r<0?(e="left",d<c&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down"))):s.right===!0&&r>0&&(e="right",d<c&&(s.up===!0&&l<0?e="up":s.down===!0&&l>0&&(e="down")));let u=!1;if(e===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};e=o.event.lastDir,u=!0,e==="left"||e==="right"?(h.left-=r,d=0,r=0):(h.top-=l,c=0,l=0)}return{synthetic:u,payload:{evt:t,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:h,direction:e,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:d,y:c},offset:{x:r,y:l},delta:{x:h.left-o.event.lastX,y:h.top-o.event.lastY}}}}let vt=0;var ae=Fe({name:"touch-pan",beforeMount(t,{value:o,modifiers:n}){if(n.mouse!==!0&&P.has.touch!==!0)return;function h(r,l){n.mouse===!0&&l===!0?He(r):(n.stop===!0&&K(r),n.prevent===!0&&fe(r))}const e={uid:"qvtp_"+vt++,handler:o,modifiers:n,direction:Ce(n),noop:Ie,mouseStart(r){ke(r,e)&&Qe(r)&&(V(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(ke(r,e)){const l=r.target;V(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","passiveCapture"],[l,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,l){if(P.is.firefox===!0&&R(t,!0),e.lastEvt=r,l===!0||n.stop===!0){if(e.direction.all!==!0&&(l!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&fe(s),r.cancelBubble===!0&&K(s),Object.assign(s,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:s}}K(r)}const{left:d,top:c}=re(r);e.event={x:d,y:c,time:Date.now(),mouse:l===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:c}},move(r){if(e.event===void 0)return;const l=re(r),d=l.left-e.event.x,c=l.top-e.event.y;if(d===0&&c===0)return;e.lastEvt=r;const s=e.event.mouse===!0,u=()=>{h(r,s);let y;n.preserveCursor!==!0&&n.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),rt(),e.styleCleanup=f=>{if(e.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),s===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{q(),f()},50):q()}else f!==void 0&&f()}};if(e.event.detected===!0){e.event.isFirst!==!0&&h(r,e.event.mouse);const{payload:y,synthetic:f}=te(r,e,!1);y!==void 0&&(e.handler(y)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&u(),e.event.lastX=y.position.left,e.event.lastY=y.position.top,e.event.lastDir=f===!0?void 0:y.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){u(),e.event.detected=!0,e.move(r);return}const k=Math.abs(d),p=Math.abs(c);k!==p&&(e.direction.horizontal===!0&&k>p||e.direction.vertical===!0&&k<p||e.direction.up===!0&&k<p&&c<0||e.direction.down===!0&&k<p&&c>0||e.direction.left===!0&&k>p&&d<0||e.direction.right===!0&&k>p&&d>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,l){if(e.event!==void 0){if(G(e,"temp"),P.is.firefox===!0&&R(t,!1),l===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(te(r===void 0?e.lastEvt:r,e).payload);const{payload:d}=te(r===void 0?e.lastEvt:r,e,!0),c=()=>{e.handler(d)};e.styleCleanup!==void 0?e.styleCleanup(c):c()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,n.mouse===!0){const r=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";V(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}P.has.touch===!0&&V(e,"main",[[t,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,o){const n=t.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ce(o.modifiers))},beforeUnmount(t){const o=t.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),G(o,"main"),G(o,"temp"),P.is.firefox===!0&&R(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchpan)}});const _e=150;var mt=je({name:"QDrawer",inheritAttrs:!1,props:{...ot,...lt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ut,"onLayout","miniState"],setup(t,{slots:o,emit:n,attrs:h}){const e=Ge(),{proxy:{$q:r}}=e,l=st(t,r),{preventBodyScroll:d}=at(),{registerTimeout:c,removeTimeout:s}=nt(),u=Ne(Xe,J);if(u===J)return console.error("QDrawer needs to be child of QLayout"),J;let k,p=null,y;const f=O(t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint),q=m(()=>t.mini===!0&&f.value!==!0),w=m(()=>q.value===!0?t.miniWidth:t.width),v=O(t.showIfAbove===!0&&f.value===!1?!0:t.modelValue===!0),ue=m(()=>t.persistent!==!0&&(f.value===!0||Be.value===!0));function ne(a,i){if(qe(),a!==!1&&u.animate(),C(0),f.value===!0){const g=u.instances[z.value];g!==void 0&&g.belowBreakpoint===!0&&g.hide(!1),S(1),u.isContainer.value!==!0&&d(!0)}else S(0),a!==!1&&X(!1);c(()=>{a!==!1&&X(!0),i!==!0&&n("show",a)},_e)}function ie(a,i){Se(),a!==!1&&u.animate(),S(0),C(M.value*w.value),U(),i!==!0?c(()=>{n("hide",a)},_e):s()}const{show:I,hide:E}=it({showing:v,hideOnRouteChange:ue,handleShow:ne,handleHide:ie}),{addToHistory:qe,removeFromHistory:Se}=tt(v,E,ue),$={belowBreakpoint:f,hide:E},_=m(()=>t.side==="right"),M=m(()=>(r.lang.rtl===!0?-1:1)*(_.value===!0?1:-1)),le=O(0),D=O(!1),Q=O(!1),se=O(w.value*M.value),z=m(()=>_.value===!0?"left":"right"),H=m(()=>v.value===!0&&f.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:w.value:0),j=m(()=>t.overlay===!0||t.miniToOverlay===!0||u.view.value.indexOf(_.value?"R":"L")>-1||r.platform.is.ios===!0&&u.isContainer.value===!0),L=m(()=>t.overlay===!1&&v.value===!0&&f.value===!1),Be=m(()=>t.overlay===!0&&v.value===!0&&f.value===!1),Te=m(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&D.value===!1?" hidden":"")),Oe=m(()=>({backgroundColor:`rgba(0,0,0,${le.value*.4})`})),de=m(()=>_.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),xe=m(()=>_.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),Me=m(()=>{const a={};return u.header.space===!0&&de.value===!1&&(j.value===!0?a.top=`${u.header.offset}px`:u.header.space===!0&&(a.top=`${u.header.size}px`)),u.footer.space===!0&&xe.value===!1&&(j.value===!0?a.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(a.bottom=`${u.footer.size}px`)),a}),De=m(()=>{const a={width:`${w.value}px`,transform:`translateX(${se.value}px)`};return f.value===!0?a:Object.assign(a,Me.value)}),Ee=m(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),Le=m(()=>`q-drawer q-drawer--${t.side}`+(Q.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(j.value===!0||L.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),Pe=m(()=>{const a=r.lang.rtl===!0?t.side:z.value;return[[ae,Ve,void 0,{[a]:!0,mouse:!0}]]}),$e=m(()=>{const a=r.lang.rtl===!0?z.value:t.side;return[[ae,ce,void 0,{[a]:!0,mouse:!0}]]}),ze=m(()=>{const a=r.lang.rtl===!0?z.value:t.side;return[[ae,ce,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function N(){We(f,t.behavior==="mobile"||t.behavior!=="desktop"&&u.totalWidth.value<=t.breakpoint)}b(f,a=>{a===!0?(k=v.value,v.value===!0&&E(!1)):t.overlay===!1&&t.behavior!=="mobile"&&k!==!1&&(v.value===!0?(C(0),S(0),U()):I(!1))}),b(()=>t.side,(a,i)=>{u.instances[i]===$&&(u.instances[i]=void 0,u[i].space=!1,u[i].offset=0),u.instances[a]=$,u[a].size=w.value,u[a].space=L.value,u[a].offset=H.value}),b(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&N()}),b(()=>t.behavior+t.breakpoint,N),b(u.isContainer,a=>{v.value===!0&&d(a!==!0),a===!0&&N()}),b(u.scrollbarWidth,()=>{C(v.value===!0?0:void 0)}),b(H,a=>{B("offset",a)}),b(L,a=>{n("onLayout",a),B("space",a)}),b(_,()=>{C()}),b(w,a=>{C(),Y(t.miniToOverlay,a)}),b(()=>t.miniToOverlay,a=>{Y(a,w.value)}),b(()=>r.lang.rtl,()=>{C()}),b(()=>t.mini,()=>{t.modelValue===!0&&(Ae(),u.animate())}),b(q,a=>{n("miniState",a)});function C(a){a===void 0?ve(()=>{a=v.value===!0?0:w.value,C(M.value*a)}):(u.isContainer.value===!0&&_.value===!0&&(f.value===!0||Math.abs(a)===w.value)&&(a+=M.value*u.scrollbarWidth.value),se.value=a)}function S(a){le.value=a}function X(a){const i=a===!0?"remove":u.isContainer.value!==!0?"add":"";i!==""&&document.body.classList[i]("q-body--drawer-toggle")}function Ae(){p!==null&&clearTimeout(p),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),Q.value=!0,p=setTimeout(()=>{p=null,Q.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ve(a){if(v.value!==!1)return;const i=w.value,g=F(a.distance.x,0,i);if(a.isFinal===!0){g>=Math.min(75,i)===!0?I():(u.animate(),S(0),C(M.value*i)),D.value=!1;return}C((r.lang.rtl===!0?_.value!==!0:_.value)?Math.max(i-g,0):Math.min(0,g-i)),S(F(g/i,0,1)),a.isFirst===!0&&(D.value=!0)}function ce(a){if(v.value!==!0)return;const i=w.value,g=a.direction===t.side,A=(r.lang.rtl===!0?g!==!0:g)?F(a.distance.x,0,i):0;if(a.isFinal===!0){Math.abs(A)<Math.min(75,i)===!0?(u.animate(),S(1),C(0)):E(),D.value=!1;return}C(M.value*A),S(F(1-A/i,0,1)),a.isFirst===!0&&(D.value=!0)}function U(){d(!1),X(!0)}function B(a,i){u.update(t.side,a,i)}function We(a,i){a.value!==i&&(a.value=i)}function Y(a,i){B("size",a===!0?t.miniWidth:i)}return u.instances[t.side]=$,Y(t.miniToOverlay,w.value),B("space",L.value),B("offset",H.value),t.showIfAbove===!0&&t.modelValue!==!0&&v.value===!0&&t["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Ue(()=>{n("onLayout",L.value),n("miniState",q.value),k=t.showIfAbove===!0;const a=()=>{(v.value===!0?ne:ie)(!1,!0)};if(u.totalWidth.value!==0){ve(a);return}y=b(u.totalWidth,()=>{y(),y=void 0,v.value===!1&&t.showIfAbove===!0&&f.value===!1?I(!1):a()})}),Ye(()=>{y!==void 0&&y(),p!==null&&(clearTimeout(p),p=null),v.value===!0&&U(),u.instances[t.side]===$&&(u.instances[t.side]=void 0,B("size",0),B("offset",0),B("space",!1))}),()=>{const a=[];f.value===!0&&(t.noSwipeOpen===!1&&a.push(Re(W("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Pe.value)),a.push(me("div",{ref:"backdrop",class:Te.value,style:Oe.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",t.noSwipeBackdrop!==!0&&v.value===!0,()=>ze.value)));const i=q.value===!0&&o.mini!==void 0,g=[W("div",{...h,key:""+i,class:[Ee.value,h.class]},i===!0?o.mini():Ke(o.default))];return t.elevated===!0&&v.value===!0&&g.push(W("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(me("aside",{ref:"content",class:Le.value,style:De.value},g,"contentclose",t.noSwipeClose!==!0&&f.value===!0,()=>$e.value)),W("div",{class:"q-drawer-container"},a)}}});const ht={class:"fixed-center"},pt={class:"fixed-center"},yt={__name:"Content",setup(t){const o=he(()=>pe(()=>import("./theHeader.07ce9e66.js"),["assets/theHeader.07ce9e66.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css","assets/QSpace.33daebbe.js","assets/QItemSection.4f5690cc.js","assets/use-dark.46133ca7.js","assets/QList.995e0fcb.js","assets/QMenu.06d5990f.js","assets/position-engine.10c506f8.js","assets/selection.c3b8e743.js","assets/focus-manager.387b0375.js","assets/focusout.fcf09816.js","assets/QResizeObserver.451db464.js"])),n=he(()=>pe(()=>import("./theLeftSidebar.f86a2b72.js"),["assets/theLeftSidebar.f86a2b72.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css","assets/QItemSection.4f5690cc.js","assets/use-dark.46133ca7.js","assets/QItemLabel.65ad92c8.js","assets/QList.995e0fcb.js","assets/QResizeObserver.451db464.js","assets/QLayout.b38590f3.js","assets/format.865294d5.js","assets/navigation.e4a08906.js","assets/use-prevent-scroll.c93d91aa.js","assets/selection.c3b8e743.js"])),h=O(!1),e=O(!0);function r(){h.value=!h.value}return(l,d)=>(Z(),ee(ct,{view:"hHh Lpr lff"},{default:T(()=>[x(ye(o),null,{default:T(()=>[x(Je,{flat:"",dense:"",round:"",onClick:r,"aria-label":"Menu",icon:"menu"})]),_:1}),x(dt,{class:Ze(["page-container",{"bg-grey-4":!l.$q.dark.isActive}])},{default:T(()=>[(Z(),ee(be,null,{default:T(()=>[et(l.$slots,"default")]),fallback:T(()=>[ge("div",ht,[x(we,{color:"primary",size:"10em"})])]),_:3})),(Z(),ee(be,null,{default:T(()=>[x(mt,{modelValue:h.value,"onUpdate:modelValue":d[0]||(d[0]=c=>h.value=c),"show-if-above":"",mini:e.value,onMouseover:d[1]||(d[1]=c=>e.value=!1),onMouseout:d[2]||(d[2]=c=>e.value=!0),"mini-to-overlay":"",width:200,breakpoint:500,bordered:""},{default:T(()=>[x(ye(n))]),_:1},8,["modelValue","mini"])]),fallback:T(()=>[ge("div",pt,[x(we,{color:"primary",size:"10em"})])]),_:1}))]),_:3},8,["class"])]),_:3}))}};var St=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));export{St as C,ae as T};
