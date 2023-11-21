import{Q as $,_ as w,ab as re,ar as ne,aa as de,A as S,f as me,a8 as ie,o as c,c as h,w as u,a as t,R as e,V as s,a6 as g,a2 as v,aq as U,ao as k,T as N,a5 as D,S as L,as as y,b1 as ue,b2 as ce}from"./app.3d0443e2.js";import{Q as C,b as O}from"./QSelect.639ca693.js";import{Q as pe}from"./QToggle.f83700e9.js";import{Q as _,a as be}from"./QCard.8d93a297.js";import{a as ge,Q as H}from"./QItemSection.4f5690cc.js";import{Q as Z}from"./QItemLabel.65ad92c8.js";import{r as I,m as Q,a as B,s as fe,e as ve,u as xe,Q as Ve}from"./i18n-validators.a07dc84a.js";import{j as x}from"./index.esm.0660b863.js";import{c as T}from"./countries.78ffa676.js";import"./use-key-composition.68005297.js";import"./use-dark.46133ca7.js";import"./uid.fa5a297c.js";import"./focus-manager.387b0375.js";import"./QMenu.06d5990f.js";import"./position-engine.10c506f8.js";import"./selection.c3b8e743.js";import"./focusout.fcf09816.js";import"./QDialog.70fc69ea.js";import"./use-prevent-scroll.c93d91aa.js";import"./use-form.ae068b8e.js";import"./format.865294d5.js";import"./use-checkbox.1380f23c.js";const qe={class:"row q-col-gutter-md q-mt-xs"},ye={class:"col-12"},_e={class:"text-h5 bg-primary q-pa-md"},$e={class:"row bg-dark justify-between q-pt-lg"},we={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},he={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Ue={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},ke={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},De={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Le={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Ce={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Ie={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Qe={class:"col-12"},Be={class:"text-h5 bg-primary q-pa-md"},Se={class:"row bg-dark justify-center q-pt-lg"},Ne={class:"col-lg-9 col-md-12 col-xs-12 q-px-md q-pb-sm"},Te={class:"col-12"},ze={class:"text-h5 bg-primary q-pa-md"},Ae={class:"row bg-dark justify-center q-pt-lg"},Ee={class:"col-lg-12 col-md-12 col-xs-12 q-px-md q-pb-sm"},Pe={class:"col-12"},je={class:"text-h5 bg-primary q-pa-md"},Re={class:"row justify-between items-center q-pt-lg"},Fe={key:0,class:"col-lg-1 col-md-1 col-xs-12 text-center"},Me={class:"col-lg-12 col-md-12 col-xs-12 q-py-lg text-center bg-dark"},Oe={class:"col-12"},He={class:"text-h5 bg-primary q-pa-md"},Ze={class:"row items-center q-pt-lg"},Ge={class:"col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm"},Je={class:"col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm"},Ke={class:"col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm"},We={class:"col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm"},Xe={class:"col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm"},Ye={class:"col-lg-3 col-md-4 col-xs-12 q-px-md q-pb-sm"},eo={key:0,class:"col-lg-4 col-md-2 col-xs-12 text-center"},oo={class:"col-lg-12 col-md-12 col-xs-12 q-py-lg text-center bg-dark"},ho={__name:"Form",props:{formData:{type:Object,required:!0,default:()=>{}}},setup(m){const{formData:f}=m,G=$(()=>w(()=>import("./CardHeader.079bc338.js"),["assets/CardHeader.079bc338.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css","assets/QCard.8d93a297.js","assets/use-dark.46133ca7.js"])),z=$(()=>w(()=>import("./country-flag.esm.23960c75.js"),["assets/country-flag.esm.23960c75.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css"])),p=$(()=>w(()=>import("./BaseInput.725fa578.js"),["assets/BaseInput.725fa578.js","assets/QInput.a8bac8ea.js","assets/use-key-composition.68005297.js","assets/app.3d0443e2.js","assets/app.e33f6f08.css","assets/use-dark.46133ca7.js","assets/uid.fa5a297c.js","assets/focus-manager.387b0375.js","assets/use-form.ae068b8e.js"])),J=$(()=>w(()=>import("./FileUpload.ec89fee9.js"),["assets/FileUpload.ec89fee9.js","assets/FileUpload.e3ff5874.css","assets/app.3d0443e2.js","assets/app.e33f6f08.css"])),K=i=>{var o;return(o=T.find(q=>(q==null?void 0:q.countryName)===f.locations[i].country))==null?void 0:o.regions},{t:a}=re(),W=ne(),A=de(),E=S([{id:1,name:a("select.gender.male")},{id:2,name:a("select.gender.female")}]),X=S({email:"",phone:"",mobile:""}),Y=S({country:"",city:"",state:"",first_address:"",second_address:"",zip:""}),ee=i=>!x.req(i)||/[A-Z]/.test(i),oe=i=>!x.req(i)||/[a-z]/.test(i),le=i=>!x.req(i)||/[0-9]/.test(i),se=i=>!x.req(i)||/[#?!@$%^&*-]/.test(i),te=me(()=>({username:{required:I,minLength:Q(8),maxLength:B(100)},firstname:{minLength:Q(3),maxLength:B(50)},lastname:{minLength:Q(3),maxLength:B(50)},password:{containsUppercase:x.withMessage(a("validations.contains_uppercase",{property:"password"}),ee),containsLowercase:x.withMessage(a("validations.contains_lowercase",{property:"password"}),oe),containsNumber:x.withMessage(a("validations.contains_number",{property:"password"}),le),containsSpecial:x.withMessage(a("validations.contains_special",{property:"password"}),se),minLength:Q(8),maxLength:B(100)},password_confirmation:{sameAsPassword:fe(f==null?void 0:f.password)},email:{email:ve},gender:{required:I},is_active:{required:I},role:{required:I}})),l=xe(te,f),P=ie(),j=async()=>{!await l.value.$validate()||(A.params.id&&await P.dispatch("user/updateUser",f),A.params.id||await P.dispatch("user/createUser",f),W.push({name:"user.list"}))},ae=()=>{f.city=""},R=(i,o)=>{f[i].push({...o})},F=(i,o)=>{f[i].splice(o,1)};return(i,o)=>(c(),h(be,{class:"bg-transparent",flat:"",style:{"border-radius":"20px"}},{default:u(()=>{var q,M;return[t(e(G),{onOnSubmit:j,module:"user",reference:(q=m.formData)==null?void 0:q.username,"item-id":(M=m.formData)==null?void 0:M.id,class:"bg-dark"},null,8,["reference","item-id"]),t(Ve,{onSubmit:j},{default:u(()=>[s("div",qe,[t(_,{class:"col-lg-6 col-md-6 col-xs-12 q-px-none q-pb-none"},{default:u(()=>[s("div",ye,[s("div",_e,g(e(a)("card.basic_info")),1)]),s("div",$e,[s("div",we,[t(e(p),{modelValue:m.formData.username,"onUpdate:modelValue":o[0]||(o[0]=r=>m.formData.username=r),label:e(a)("username"),error:e(l).username.$error,onInput:o[1]||(o[1]=()=>e(l).username.$touch()),onBlur:o[2]||(o[2]=()=>e(l).username.$touch()),errors:e(l).username.$errors},null,8,["modelValue","label","error","errors"])]),s("div",he,[t(e(p),{modelValue:m.formData.email,"onUpdate:modelValue":o[3]||(o[3]=r=>m.formData.email=r),label:e(a)("email"),type:"email",error:e(l).email.$error,onInput:o[4]||(o[4]=()=>e(l).email.$touch()),onBlur:o[5]||(o[5]=()=>e(l).email.$touch()),errors:e(l).email.$errors},null,8,["modelValue","label","error","errors"])]),s("div",Ue,[t(e(p),{modelValue:m.formData.firstname,"onUpdate:modelValue":o[6]||(o[6]=r=>m.formData.firstname=r),label:e(a)("firstname"),error:e(l).firstname.$error,onInput:o[7]||(o[7]=()=>e(l).firstname.$touch()),onBlur:o[8]||(o[8]=()=>e(l).firstname.$touch()),errors:e(l).firstname.$errors},null,8,["modelValue","label","error","errors"])]),s("div",ke,[t(e(p),{modelValue:m.formData.lastname,"onUpdate:modelValue":o[9]||(o[9]=r=>m.formData.lastname=r),label:e(a)("lastname"),error:e(l).lastname.$error,onInput:o[10]||(o[10]=()=>e(l).lastname.$touch()),onBlur:o[11]||(o[11]=()=>e(l).lastname.$touch()),errors:e(l).lastname.$errors},null,8,["modelValue","label","error","errors"])]),s("div",De,[t(e(p),{modelValue:e(l).password.$model,"onUpdate:modelValue":o[12]||(o[12]=r=>e(l).password.$model=r),label:e(a)("password"),error:e(l).password.$error,onInput:o[13]||(o[13]=()=>e(l).password.$touch()),onBlur:o[14]||(o[14]=()=>e(l).password.$touch()),errors:e(l).password.$errors},null,8,["modelValue","label","error","errors"])]),s("div",Le,[t(e(p),{modelValue:e(l).password_confirmation.$model,"onUpdate:modelValue":o[15]||(o[15]=r=>e(l).password_confirmation.$model=r),label:e(a)("password_confirmation"),error:e(l).password_confirmation.$error,onInput:o[16]||(o[16]=()=>e(l).password_confirmation.$touch()),onBlur:o[17]||(o[17]=()=>e(l).password_confirmation.$touch()),errors:e(l).password_confirmation.$errors},null,8,["modelValue","label","error","errors"])]),s("div",Ce,[t(C,{modelValue:m.formData.gender,"onUpdate:modelValue":o[18]||(o[18]=r=>m.formData.gender=r),outlined:"",rounded:"","options-dense":"","option-label":"name","option-value":"id","options-cover":"","emit-value":"","map-options":"",label:e(a)("gender"),options:E,error:e(l).gender.$error,onInput:o[19]||(o[19]=()=>e(l).gender.$touch()),onBlur:o[20]||(o[20]=()=>e(l).gender.$touch())},{error:u(()=>[s("div",null,[(c(!0),v(U,null,k(e(l).gender.$errors,r=>(c(),v("span",{class:"text-red-500",key:r.$uid},g(r.$message),1))),128))])]),_:1},8,["modelValue","label","options","error"])]),s("div",Ie,[t(pe,{"keep-color":"",modelValue:m.formData.is_active,"onUpdate:modelValue":o[21]||(o[21]=r=>m.formData.is_active=r),label:e(a)("is_active"),error:e(l).is_active.$error,onInput:o[22]||(o[22]=()=>e(l).is_active.$touch()),onBlur:o[23]||(o[23]=()=>e(l).is_active.$touch())},null,8,["modelValue","label","error"])])])]),_:1}),t(_,{class:"col-lg-6 col-md-6 col-xs-12 q-px-none q-pb-none"},{default:u(()=>[s("div",Qe,[s("div",Be,g(e(a)("card.image")),1)]),s("div",Se,[s("div",Ne,[t(e(J),{object:m.formData,namespace:"formData","key-of-images":"avatar"},null,8,["object"])])])]),_:1}),t(_,{class:"col-lg-6 col-md-6 col-xs-12 q-px-none q-pb-none"},{default:u(()=>[s("div",Te,[s("div",ze,g(e(a)("card.image")),1)]),s("div",Ae,[s("div",Ee,[t(C,{modelValue:m.formData.role,"onUpdate:modelValue":o[24]||(o[24]=r=>m.formData.role=r),outlined:"",rounded:"","options-dense":"","option-label":"name","option-value":"id","options-cover":"","emit-value":"","map-options":"",label:e(a)("role"),options:E,error:e(l).role.$error,onInput:o[25]||(o[25]=()=>e(l).role.$touch()),onBlur:o[26]||(o[26]=()=>e(l).role.$touch())},{error:u(()=>[s("div",null,[(c(!0),v(U,null,k(e(l).role.$errors,r=>(c(),v("span",{class:"text-red-500",key:r.$uid},g(r.$message),1))),128))])]),_:1},8,["modelValue","label","options","error"])])])]),_:1}),t(_,{class:"col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"},{default:u(()=>{var r;return[s("div",Pe,[s("div",je,g(e(a)("card.contacts")),1)]),(c(!0),v(U,null,k((r=m.formData)==null?void 0:r.contacts,(n,b)=>(c(),v("div",{key:b,class:"bg-dark"},[s("div",Re,[s("div",{class:N([b!==0?"col-lg-3 col-md-3":"col-lg-4 col-md-4 col-xs-12","q-px-md q-pb-sm"])},[D(g(n.mobile)+" ",1),t(e(p),{rounded:"",outlined:"",label:e(a)("mobile"),modelValue:n.mobile,"onUpdate:modelValue":d=>n.mobile=d},null,8,["label","modelValue","onUpdate:modelValue"])],2),s("div",{class:N([b!==0?"col-lg-4 col-md-4":"col-lg-4 col-md-4 col-xs-12","q-px-md q-pb-sm"])},[t(e(p),{modelValue:n.phone,"onUpdate:modelValue":d=>n.phone=d,label:e(a)("phone")},null,8,["modelValue","onUpdate:modelValue","label"])],2),s("div",{class:N([b!==0?"col-lg-4 col-md-4":"col-lg-4 col-md-4 col-xs-12","q-px-md q-pb-sm"])},[t(e(p),{modelValue:n.email,"onUpdate:modelValue":d=>n.email=d,label:e(a)("email"),type:"email"},null,8,["modelValue","onUpdate:modelValue","label"])],2),b!==0?(c(),v("div",Fe,[t(L,{onClick:()=>F("contacts",b),label:e(a)("action.delete"),color:"red-10"},null,8,["onClick","label"])])):y("",!0)])]))),128)),s("div",Me,[t(L,{onClick:o[27]||(o[27]=n=>R("contacts",X)),label:e(a)("action.add_another_contact"),color:"primary"},null,8,["label"])])]}),_:1}),t(_,{class:"col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"},{default:u(()=>{var r;return[s("div",Oe,[s("div",He,g(e(a)("card.locations")),1)]),(c(!0),v(U,null,k((r=m.formData)==null?void 0:r.locations,(n,b)=>(c(),v("div",{key:b,class:"bg-dark"},[s("div",Ze,[s("div",Ge,[t(C,{modelValue:n.country,"onUpdate:modelValue":[d=>n.country=d,o[28]||(o[28]=d=>ae())],outlined:"",rounded:"","options-dense":"","emit-value":"","option-value":"countryName","option-label":"countryName","map-options":"",label:e(a)("country"),options:e(T)},{option:u(d=>[t(ge,ue(ce(d.itemProps)),{default:u(()=>[t(H,{avatar:""},{default:u(()=>{var V;return[t(e(z),{country:(V=d.opt)==null?void 0:V.countryShortCode,size:"normal"},null,8,["country"])]}),_:2},1024),t(H,null,{default:u(()=>[t(Z,{innerHTML:d.opt.countryName},null,8,["innerHTML"]),t(Z,{caption:""},{default:u(()=>{var V;return[D(g((V=d.opt)==null?void 0:V.countryShortCode),1)]}),_:2},1024)]),_:2},1024)]),_:2},1040)]),selected:u(()=>{var d;return[n.country?(c(),h(e(z),{key:0,country:(d=e(T).find(V=>V.countryName===n.country))==null?void 0:d.countryShortCode,size:"normal"},null,8,["country"])):y("",!0),n.country?(c(),h(O,{key:1,dense:"",square:"",color:"primary","text-color":"white"},{default:u(()=>[D(g(n.country),1)]),_:2},1024)):y("",!0)]}),_:2},1032,["modelValue","onUpdate:modelValue","label","options"])]),s("div",Je,[t(C,{modelValue:n.city,"onUpdate:modelValue":d=>n.city=d,outlined:"",rounded:"","options-dense":"",label:e(a)("city"),options:K(b),"option-label":"name","option-value":"name","options-cover":"","emit-value":"","map-options":""},{selected:u(()=>[n.city?(c(),h(O,{key:0,dense:"",square:"",color:"primary","text-color":"white"},{default:u(()=>[D(g(n.city),1)]),_:2},1024)):y("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue","label","options"])]),s("div",Ke,[t(e(p),{modelValue:n.first_address,"onUpdate:modelValue":d=>n.first_address=d,label:e(a)("first_address")},null,8,["modelValue","onUpdate:modelValue","label"])]),s("div",We,[t(e(p),{modelValue:n.second_address,"onUpdate:modelValue":d=>n.second_address=d,label:e(a)("second_address")},null,8,["modelValue","onUpdate:modelValue","label"])]),s("div",Xe,[t(e(p),{modelValue:n.state,"onUpdate:modelValue":d=>n.state=d,label:e(a)("state")},null,8,["modelValue","onUpdate:modelValue","label"])]),s("div",Ye,[t(e(p),{modelValue:n.zip,"onUpdate:modelValue":d=>n.zip=d,label:e(a)("zip")},null,8,["modelValue","onUpdate:modelValue","label"])]),b!==0?(c(),v("div",eo,[t(L,{onClick:()=>F("locations",b),label:e(a)("action.delete"),color:"red-10"},null,8,["onClick","label"])])):y("",!0)])]))),128)),s("div",oo,[t(L,{onClick:o[29]||(o[29]=n=>R("locations",Y)),label:e(a)("action.add_another_location"),color:"primary"},null,8,["label"])])]}),_:1})])]),_:1})]}),_:1}))}};export{ho as default};