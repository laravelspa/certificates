import{b as k,f as r,h as g,g as H,i as j,e as V,l as F,x as T,k as _,q as P,at as U,j as M,Q as z,_ as B,a8 as K,aT as W,o as w,c as Q,w as o,a as s,r as Y,V as q,a6 as S,R as v,as as G,S as J,aW as X,a4 as Z,O as C,a5 as L,aE as N,T as ee}from"./app.3d0443e2.js";import{Q as te}from"./QSpace.33daebbe.js";import{a as O,Q as $}from"./QItemSection.4f5690cc.js";import{Q as ae,a as E}from"./QList.995e0fcb.js";import{Q as se}from"./QMenu.06d5990f.js";import{Q as oe}from"./QResizeObserver.451db464.js";import"./use-dark.46133ca7.js";import"./position-engine.10c506f8.js";import"./selection.c3b8e743.js";import"./focus-manager.387b0375.js";import"./focusout.fcf09816.js";var re=k({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:d}){const i=r(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>g("div",{class:i.value},H(d.default))}}),le=k({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:d}){const i=r(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:i.value,role:"toolbar"},H(d.default))}}),ne=k({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:d,emit:i}){const{proxy:{$q:u}}=M(),a=j(F,V);if(a===V)return console.error("QHeader needs to be child of QLayout"),V;const m=T(parseInt(t.heightHint,10)),l=T(!0),h=r(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||u.platform.is.ios&&a.isContainer.value===!0),f=r(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return l.value===!0?m.value:0;const e=m.value-a.scroll.value.position;return e>0?e:0}),b=r(()=>t.modelValue!==!0||h.value===!0&&l.value!==!0),y=r(()=>t.modelValue===!0&&b.value===!0&&t.reveal===!0),I=r(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(b.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),R=r(()=>{const e=a.rows.value.top,c={};return e[0]==="l"&&a.left.space===!0&&(c[u.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(c[u.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),c});function n(e,c){a.update("header",e,c)}function p(e,c){e.value!==c&&(e.value=c)}function A({height:e}){p(m,e),n("size",e)}function D(e){y.value===!0&&p(l,!0),i("focusin",e)}_(()=>t.modelValue,e=>{n("space",e),p(l,!0),a.animate()}),_(f,e=>{n("offset",e)}),_(()=>t.reveal,e=>{e===!1&&p(l,t.modelValue)}),_(l,e=>{a.animate(),i("reveal",e)}),_(a.scroll,e=>{t.reveal===!0&&p(l,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const x={};return a.instances.header=x,t.modelValue===!0&&n("size",m.value),n("space",t.modelValue),n("offset",f.value),P(()=>{a.instances.header===x&&(a.instances.header=void 0,n("size",0),n("offset",0),n("space",!1))}),()=>{const e=U(d.default,[]);return t.elevated===!0&&e.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(g(oe,{debounce:0,onResize:A})),g("header",{class:I.value,style:R.value,onFocusin:D},e)}}});const ie={class:"q-ml-sm"},ue={class:"q-gutter-sm row items-center no-wrap"},ce=["src"],ye={__name:"theHeader",setup(t){const d=z(()=>B(()=>import("./theFullScreen.1d4e060a.js"),["assets/theFullScreen.1d4e060a.js","assets/QTooltip.42cacc16.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css","assets/position-engine.10c506f8.js","assets/selection.c3b8e743.js","assets/focus-manager.387b0375.js","assets/use-quasar.416be0e4.js"])),i=z(()=>B(()=>import("./theSwitcherLang.0acbdc6f.js"),["assets/theSwitcherLang.0acbdc6f.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css","assets/QSelect.639ca693.js","assets/use-key-composition.68005297.js","assets/use-dark.46133ca7.js","assets/uid.fa5a297c.js","assets/focus-manager.387b0375.js","assets/QItemSection.4f5690cc.js","assets/QItemLabel.65ad92c8.js","assets/QMenu.06d5990f.js","assets/position-engine.10c506f8.js","assets/selection.c3b8e743.js","assets/focusout.fcf09816.js","assets/QDialog.70fc69ea.js","assets/use-prevent-scroll.c93d91aa.js","assets/use-form.ae068b8e.js","assets/format.865294d5.js","assets/use-quasar.416be0e4.js"])),u=K(),a=r(()=>u.getters["auth/LoginUser"]),m=r(()=>u.getters["setting/getSystemName"]),l=()=>u.dispatch("auth/logoutAction"),h=r(()=>u.getters.getTextClass);return(f,b)=>{const y=W("permission");return w(),Q(ne,{flat:"",dark:"","height-hint":"64",class:ee(["bg-primary",[v(h)]])},{default:o(()=>[s(le,{style:{height:"64px"}},{default:o(()=>[Y(f.$slots,"default"),f.$q.screen.gt.sm?(w(),Q(re,{key:0,shrink:"",dark:"",class:"row items-center no-wrap"},{default:o(()=>[q("span",ie,S(v(m)),1)]),_:1})):G("",!0),s(te),q("div",ue,[s(v(i)),s(v(d)),s(J,{dense:"",flat:"","no-wrap":""},{default:o(()=>[s(X,{size:"26px"},{default:o(()=>[q("img",{src:v(a)&&v(a).avatar.url},null,8,ce)]),_:1}),s(Z,{name:"arrow_drop_down",size:"16px"}),s(se,{"auto-close":"",fit:"","transition-show":"jump-down","transition-hide":"jump-up"},{default:o(()=>[s(ae,{dense:"",style:{"min-width":"100px"}},{default:o(()=>[C((w(),Q(O,{clickable:"",to:{name:"profile"},class:"text-white","active-class":"bg-primary"},{default:o(()=>[s($,null,{default:o(()=>[L(S(f.$t("links.profile")),1)]),_:1})]),_:1})),[[y,["show-profile"]],[N]]),s(E),C((w(),Q(O,{clickable:"",onClick:l},{default:o(()=>[s($,null,{default:o(()=>[L(S(f.$t("auth.logout")),1)]),_:1})]),_:1})),[[N]]),s(E)]),_:1})]),_:1})]),_:1})])]),_:3})]),_:3},8,["class"])}}};export{ye as default};
