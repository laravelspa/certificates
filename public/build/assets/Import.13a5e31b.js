import{x as B,ab as I,A as S,f as N,o as l,c as m,w as o,ar as T,a8 as A,a,V as e,a6 as i,R as s,S as x,as as g,a2 as n,ao as _,aq as p}from"./app.3d0443e2.js";import{a as E,Q as f}from"./QCard.8d93a297.js";import{Q as R,a as y}from"./QTable.2b6fe4cf.js";import{A as $,$ as D,T as F}from"./vue-csv-import.esm.76b47ecd.js";import"./use-dark.46133ca7.js";import"./QList.995e0fcb.js";import"./QSelect.639ca693.js";import"./use-key-composition.68005297.js";import"./uid.fa5a297c.js";import"./focus-manager.387b0375.js";import"./QItemSection.4f5690cc.js";import"./QItemLabel.65ad92c8.js";import"./QMenu.06d5990f.js";import"./position-engine.10c506f8.js";import"./selection.c3b8e743.js";import"./focusout.fcf09816.js";import"./QDialog.70fc69ea.js";import"./use-prevent-scroll.c93d91aa.js";import"./use-form.ae068b8e.js";import"./format.865294d5.js";import"./QCheckbox.f712fdb1.js";import"./use-checkbox.1380f23c.js";import"./use-fullscreen.b42a56c7.js";const L={class:"row items-center justify-center"},M={class:"col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"},U={class:"col-12"},z={class:"text-h5"},G={class:"col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"},H={class:"col-12"},J={class:"clickable bg-black text-white q-pa-md"},K={class:"q-pa-sm col-12"},O={class:"text-center"},P={class:"text-center"},W={class:"text-center text-weight-bolder"},X={class:"text-center text-weight-bolder"},Y={class:"text-weight-bolder"},Z={class:"text-left text-negative text-weight-bolder"},ke={__name:"Import",setup(ee){const r=B(null),b=T(),{t}=I(),w=S({username:{required:!0,label:t("username")},password:{required:!1,label:t("password")},email:{required:!1,label:t("email")},firstname:{required:!1,label:t("firstname")},lastname:{required:!1,label:t("lastname")},gender:{required:!1,label:t("gender")},date_of_birth:{required:!1,label:t("date_of_birth")},date_of_joining:{required:!1,label:t("date_of_joining")},is_active:{required:!1,label:t("is_active")}}),c=A(),q=async()=>{await c.dispatch("user/importCsv",r.value),r.value=null,c.state.errors=[],b.push({name:"user.list"})},k=()=>{r.value=null,c.state.errors=[],b.push({name:"user.list"})},h=N(()=>c.getters.getErrors,{root:!0});return(C,d)=>(l(),m(E,{flat:"",style:{"max-width":"800px","margin-left":"auto","margin-right":"auto","border-radius":"20px"}},{default:o(()=>[a(f,null,{default:o(()=>[e("div",L,[e("div",M,[e("div",U,[e("div",z,i(s(t)("card.import_csv")),1)])]),e("div",G,[e("div",H,[a(x,{label:s(t)("action.cancel"),color:"negative",onClick:d[0]||(d[0]=()=>k()),class:"q-mr-md"},null,8,["label"]),a(x,{label:s(t)("action.save"),type:"submit",color:"positive",onClick:q,disabled:!r.value},null,8,["label","disabled"])])])])]),_:1}),a(f,{class:"flex justify-center items-center col-12"},{default:o(()=>[a(s($),{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=u=>r.value=u),fields:w},{default:o(()=>[e("label",null,[a(s(D),{class:"bg-black q-pa-lg w-full"}),e("span",J,i(C.$t("action.choose_your_file")),1)]),a(s(F))]),_:1},8,["modelValue","fields"])]),_:1}),e("div",K,[r.value?(l(),m(R,{key:0,flat:"",bordered:"",separator:"cell",dense:"",rows:r.value.slice(1),"row-key":"name"},null,8,["rows"])):g("",!0)]),s(h)?(l(),m(f,{key:0,class:"flex justify-center items-center col-12"},{default:o(()=>[a(y,{flat:"",bordered:"",separator:"cell"},{default:o(()=>[e("thead",null,[e("tr",null,[e("th",O,i(s(t)("username")),1),e("th",P,i(s(t)("table.validation_errors")),1)])]),e("tbody",null,[(l(!0),n(p,null,_(s(h),(u,v)=>(l(),n("tr",{key:v},[e("td",W,i(v),1),e("td",X,[a(y,{flat:"",bordered:"",separator:"cell"},{default:o(()=>[e("tbody",null,[(l(!0),n(p,null,_(u,(j,Q)=>(l(),n("tr",null,[e("td",Y,i(Q),1),(l(!0),n(p,null,_(j,V=>(l(),n("tr",null,[e("td",Z,i(V),1)]))),256))]))),256))])]),_:2},1024)])]))),128))])]),_:1})]),_:1})):g("",!0)]),_:1}))}};export{ke as default};
