import{Q as v,_ as Q,x as b,o as p,c,w as e,a as r,b1 as N,b2 as S,R as s,a5 as d,a6 as y,as as g,aA as x}from"./app.3d0443e2.js";import{a as L,Q as f}from"./QItemSection.4f5690cc.js";import{Q as C}from"./QItemLabel.65ad92c8.js";import{b as P,Q as h}from"./QSelect.639ca693.js";import{c as u}from"./countries.78ffa676.js";import"./use-dark.46133ca7.js";import"./use-key-composition.68005297.js";import"./uid.fa5a297c.js";import"./focus-manager.387b0375.js";import"./QMenu.06d5990f.js";import"./position-engine.10c506f8.js";import"./selection.c3b8e743.js";import"./focusout.fcf09816.js";import"./QDialog.70fc69ea.js";import"./use-prevent-scroll.c93d91aa.js";import"./use-form.ae068b8e.js";import"./format.865294d5.js";const U={__name:"CountryInput",props:{label:{type:String,required:!0,default:""},location:{type:Object,required:!0,default:()=>{}},inputModel:{type:String,default:()=>"eg"}},setup(a){const m=v(()=>Q(()=>import("./country-flag.esm.23960c75.js"),["assets/country-flag.esm.23960c75.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css"])),l=b(u),_=(i,n)=>{if(i===""){n(()=>{l.value=u});return}n(()=>{const t=i.toLowerCase();l.value=u.filter(o=>o.countryName.toLowerCase().indexOf(t)>-1)})};return(i,n)=>(p(),c(h,x({outlined:"",rounded:"","options-dense":"","options-cover":"","emit-value":"","map-options":"","use-input":"","input-debounce":"0","option-value":"countryName","option-label":"countryName",options:l.value,"onUpdate:modelValue":n[0]||(n[0]=t=>a.inputModel=t),onFilter:_},i.$attrs),{option:e(t=>[r(L,N(S(t.itemProps)),{default:e(()=>[r(f,{avatar:""},{default:e(()=>{var o;return[r(s(m),{country:(o=t.opt)==null?void 0:o.countryShortCode,size:"normal"},null,8,["country"])]}),_:2},1024),r(f,null,{default:e(()=>[r(C,{innerHTML:t.opt.countryName},null,8,["innerHTML"]),r(C,{caption:""},{default:e(()=>{var o;return[d(y((o=t.opt)==null?void 0:o.countryShortCode),1)]}),_:2},1024)]),_:2},1024)]),_:2},1040)]),selected:e(()=>{var t;return[a.location.country?(p(),c(s(m),{key:0,country:(t=s(u).find(o=>o.countryName===a.location.country))==null?void 0:t.countryShortCode,size:"normal"},null,8,["country"])):g("",!0),r(P,{dense:"",square:"",color:"primary","text-color":"white"},{default:e(()=>[d(y(a.location.country),1)]),_:1})]}),_:1},16,["options"]))}};export{U as default};