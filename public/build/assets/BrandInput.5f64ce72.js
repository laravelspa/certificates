import{ab as x,a8 as h,a7 as Q,f as w,x as y,o as V,c as C,w as t,a,b1 as A,b2 as I,aW as c,V as l,a5 as f,a6 as m,T as S,aA as z,R as B}from"./app.3d0443e2.js";import{a as P,Q as b}from"./QItemSection.4f5690cc.js";import{Q as k}from"./QItemLabel.65ad92c8.js";import{b as q,Q as L}from"./QSelect.639ca693.js";import"./use-dark.46133ca7.js";import"./use-key-composition.68005297.js";import"./uid.fa5a297c.js";import"./focus-manager.387b0375.js";import"./QMenu.06d5990f.js";import"./position-engine.10c506f8.js";import"./selection.c3b8e743.js";import"./focusout.fcf09816.js";import"./QDialog.70fc69ea.js";import"./use-prevent-scroll.c93d91aa.js";import"./use-form.ae068b8e.js";import"./format.865294d5.js";const M=["src"],N=["src"],Z={__name:"BrandInput",props:{inputModel:{type:String,default:()=>""},errors:{type:Array,required:!1,default:()=>[]}},async setup(s){let u,p;const{t:v}=x(),d=h();[u,p]=Q(()=>d.dispatch("brand/fetchOptions")),await u,p();const i=w(()=>d.getters["brand/getOptions"]),n=y(i.value),_=(o,r)=>{if(o===""){r(()=>{n.value=i.value});return}r(()=>{const e=o.toLowerCase();n.value=i.value.filter(g=>g.name.toLowerCase().indexOf(e)>-1)})};return(o,r)=>(V(),C(L,z({outlined:"",rounded:"",options:n.value,"options-dense":"","option-label":"name","option-value":"id","options-cover":"","emit-value":"","map-options":"","use-input":"","input-debounce":"0",onFilter:_,modelValue:s.inputModel,"onUpdate:modelValue":r[0]||(r[0]=e=>s.inputModel=e)},o.$attrs,{label:B(v)("brand_id"),"transition-show":"jump-up","transition-hide":"jump-up",behavior:"menu",clearable:""}),{option:t(e=>[a(P,A(I(e.itemProps)),{default:t(()=>[a(b,{avatar:""},{default:t(()=>[a(c,{size:"md"},{default:t(()=>[l("img",{src:e.opt.logo.url},null,8,M)]),_:2},1024)]),_:2},1024),a(b,null,{default:t(()=>[a(k,null,{default:t(()=>[f(m(e.opt.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),error:t(()=>[l("div",{class:S(o.$q.dark.isActive?"text-red-3":"text-negative")},m(s.errors&&s.errors[0].$message),3)]),"selected-item":t(e=>[a(q,{tabindex:e.tabindex,color:"primary","text-color":"white",class:"q-ma-none"},{default:t(()=>[a(c,{size:"sm"},{default:t(()=>[l("img",{src:e.opt.logo.url},null,8,N)]),_:2},1024),f(" "+m(e.opt.name),1)]),_:2},1032,["tabindex"])]),_:1},16,["options","modelValue","label"]))}};export{Z as default};
