import{ab as K,x as S,a8 as W,a7 as X,f as D,aT as Y,o as _,c as Z,w as m,a as s,T as c,V as l,a6 as v,R as e,S as w,O as C,a4 as h,a2 as y,aq as R,ao as F}from"./app.3d0443e2.js";import{Q as g,a as ee}from"./QCard.8d93a297.js";import{Q as oe}from"./QToggle.f83700e9.js";import{Q as M,a as N}from"./QPopupProxy.4d26eed0.js";import{r as I,m as $,a as k,b as j,s as le,e as se,u as ae,Q as te}from"./i18n-validators.a07dc84a.js";import{C as T}from"./ClosePopup.eea12898.js";import{j as x}from"./index.esm.0660b863.js";import{c as re}from"./countries.78ffa676.js";import{c as de,a as ie,b as ne,d as me,g as pe,e as ue,l as ce}from"./constraints.e9615d87.js";import{F as be,a as u,S as ve,b as z,c as E,A as O,d as ge,e as fe,R as _e}from"./import.36533b1a.js";import"./use-dark.46133ca7.js";import"./use-checkbox.1380f23c.js";import"./use-form.ae068b8e.js";import"./format.865294d5.js";import"./QDialog.70fc69ea.js";import"./use-prevent-scroll.c93d91aa.js";import"./selection.c3b8e743.js";import"./position-engine.10c506f8.js";import"./focus-manager.387b0375.js";import"./focusout.fcf09816.js";import"./QMenu.06d5990f.js";const xe={class:"row items-center justify-center"},qe={class:"col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"},Ve={class:"col-12"},we={class:"text-h5"},he={class:"col-lg-6 col-md-12 col-xs-12 flex justify-center items-center"},ye={class:"col-12"},$e={class:"row q-col-gutter-md q-mt-xs"},ke={class:"col-12"},Ue={class:"text-h5 text-white bg-primary q-pa-md"},Ce={class:"col-lg-9 col-md-12 col-xs-12 q-px-md q-pb-sm"},Ie={class:"col-12"},je={class:"text-h5 bg-primary text-white q-pa-md"},Be={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Ae={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Le={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Qe={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Pe={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Se={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},De={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Re={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Fe={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Me={class:"row items-center justify-end"},Ne={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},Te={class:"row items-center justify-end"},ze={class:"col-12"},Ee={class:"text-h5 text-white bg-primary q-pa-md"},Oe={class:"row justify-between items-center q-pt-lg"},Ge={class:"q-px-md q-pb-sm col-lg-6 col-md-6 col-xs-12"},He={class:"q-px-md q-pb-sm col-lg-6 col-md-6 col-xs-12"},Je={class:"q-px-md q-pb-sm col-lg-6 col-md-6 col-xs-12"},Ke={class:"col-lg-6 col-md-6 col-xs-12 text-center"},We={class:"col-12"},Xe={class:"text-h5 text-white bg-primary q-pa-md"},Ye={class:"row items-center q-pt-lg"},Ze={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},eo={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},oo={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},lo={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},so={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},ao={class:"col-lg-6 col-md-6 col-xs-12 q-px-md q-pb-sm"},to={class:"col-lg-12 col-md-12 col-xs-12 text-center"},ro={class:"col-12"},io={class:"text-h5 text-white bg-primary q-pa-md"},no={class:"row items-center q-pt-lg"},mo={class:"col-12 q-px-md q-pb-md"},Lo={__name:"ProfileForm",async setup(po){let B,A;const G=p=>{var o;return(o=re.find(f=>(f==null?void 0:f.countryName)===t.value.locations[p].country))==null?void 0:o.regions},{t:d}=K(),q=S(!0),V=S(!0),U=W();[B,A]=X(()=>U.dispatch("auth/fetchProfile")),await B,A();const t=D(()=>U.getters["auth/getProfile"]),H=D(()=>({username:{required:I,minLength:$(8),maxLength:k(100)},firstname:{minLength:$(3),maxLength:k(50)},lastname:{minLength:$(3),maxLength:k(50)},password:{requiredIfRef:j(!t.value.id),containsUppercase:x.withMessage(d("validations.contains_uppercase",{property:"password"}),de),containsLowercase:x.withMessage(d("validations.contains_lowercase",{property:"password"}),ie),containsNumber:x.withMessage(d("validations.contains_number",{property:"password"}),ne),containsSpecial:x.withMessage(d("validations.contains_special",{property:"password"}),me),minLength:$(8),maxLength:k(100)},password_confirmation:{requiredIfRef:j(!t.value.id),sameAsPassword:x.withMessage(d("validations.sameAs",{property:"password",other:"password_confirmation"}),le(t.value.password))},email:{email:se,requiredIfRef:j(t.value.send_notify)},gender:{required:I},is_active:{required:I}})),a=ae(H,t),L=async()=>{!await a.value.$validate()||await U.dispatch("auth/updateProfile",t.value)},J=p=>{t.value.locations[p].city=""},Q=(p,o)=>{t.value[p].push({...o})},P=(p,o)=>{t.value[p].splice(o,1)};return(p,o)=>{const f=Y("permission");return _(),Z(ee,{class:"bg-transparent",flat:"",style:{"max-width":"800px","margin-left":"auto","margin-right":"auto","border-radius":"20px"}},{default:m(()=>[s(g,{class:c(p.$q.dark.isActive?"bg-dark":"bg-white")},{default:m(()=>[l("div",xe,[l("div",qe,[l("div",Ve,[l("div",we,v(e(d)("links.profile")),1)])]),l("div",he,[l("div",ye,[s(w,{label:e(d)("action.dashboard"),color:"negative",to:{name:"dashboard"},class:"q-mr-md"},null,8,["label"]),C(s(w,{label:e(d)("action.save"),type:"submit",color:"positive",onClick:L},null,8,["label"]),[[f,["update-profile"]]])])])])]),_:1},8,["class"]),s(te,{onSubmit:L},{default:m(()=>[l("div",$e,[s(g,{class:"col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"},{default:m(()=>[l("div",ke,[l("div",Ue,v(e(d)("card.image")),1)]),l("div",{class:c(["row justify-center q-pt-lg",p.$q.dark.isActive?"bg-dark":"bg-white"]),style:{"min-height":"165px"}},[l("div",Ce,[s(e(be),{object:e(t),namespace:"formData","key-of-images":"avatar"},null,8,["object"])])],2)]),_:1}),s(g,{class:"col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"},{default:m(()=>[l("div",Ie,[l("div",je,v(e(d)("card.basic_info")),1)]),l("div",{class:c(["row justify-between q-py-lg",p.$q.dark.isActive?"bg-dark":"bg-white"])},[l("div",Be,[s(e(u),{modelValue:e(t).username,"onUpdate:modelValue":o[0]||(o[0]=r=>e(t).username=r),label:e(d)("username"),error:e(a).username.$error,onInput:o[1]||(o[1]=()=>e(a).username.$touch()),onBlur:o[2]||(o[2]=()=>e(a).username.$touch()),errors:e(a).username.$errors},null,8,["modelValue","label","error","errors"])]),l("div",Ae,[s(e(u),{modelValue:e(t).email,"onUpdate:modelValue":o[3]||(o[3]=r=>e(t).email=r),label:e(d)("email"),type:"email",error:e(a).email.$error,onInput:o[4]||(o[4]=()=>e(a).email.$touch()),onBlur:o[5]||(o[5]=()=>e(a).email.$touch()),errors:e(a).email.$errors},null,8,["modelValue","label","error","errors"])]),l("div",Le,[s(e(u),{modelValue:e(t).firstname,"onUpdate:modelValue":o[6]||(o[6]=r=>e(t).firstname=r),label:e(d)("firstname"),error:e(a).firstname.$error,onInput:o[7]||(o[7]=()=>e(a).firstname.$touch()),onBlur:o[8]||(o[8]=()=>e(a).firstname.$touch()),errors:e(a).firstname.$errors},null,8,["modelValue","label","error","errors"])]),l("div",Qe,[s(e(u),{modelValue:e(t).lastname,"onUpdate:modelValue":o[9]||(o[9]=r=>e(t).lastname=r),label:e(d)("lastname"),error:e(a).lastname.$error,onInput:o[10]||(o[10]=()=>e(a).lastname.$touch()),onBlur:o[11]||(o[11]=()=>e(a).lastname.$touch()),errors:e(a).lastname.$errors},null,8,["modelValue","label","error","errors"])]),l("div",Pe,[s(e(u),{modelValue:e(a).password.$model,"onUpdate:modelValue":o[13]||(o[13]=r=>e(a).password.$model=r),label:e(d)("password"),error:e(a).password.$error,onInput:o[14]||(o[14]=()=>e(a).password.$touch()),onBlur:o[15]||(o[15]=()=>e(a).password.$touch()),errors:e(a).password.$errors,type:q.value?"password":"text"},{append:m(()=>[s(h,{name:q.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[12]||(o[12]=r=>q.value=!q.value)},null,8,["name"])]),_:1},8,["modelValue","label","error","errors","type"])]),l("div",Se,[s(e(u),{modelValue:e(a).password_confirmation.$model,"onUpdate:modelValue":o[17]||(o[17]=r=>e(a).password_confirmation.$model=r),label:e(d)("password_confirmation"),error:e(a).password_confirmation.$error,onInput:o[18]||(o[18]=()=>e(a).password_confirmation.$touch()),onBlur:o[19]||(o[19]=()=>e(a).password_confirmation.$touch()),errors:e(a).password_confirmation.$errors,type:V.value?"password":"text"},{append:m(()=>[s(h,{name:V.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[16]||(o[16]=r=>V.value=!V.value)},null,8,["name"])]),_:1},8,["modelValue","label","error","errors","type"])]),l("div",De,[s(e(ve),{modelValue:e(t).gender,"onUpdate:modelValue":o[20]||(o[20]=r=>e(t).gender=r),label:e(d)("gender"),options:e(pe),error:e(a).gender.$error,errors:e(a).gender.$errors,onInput:o[21]||(o[21]=()=>e(a).gender.$touch()),onBlur:o[22]||(o[22]=()=>e(a).gender.$touch())},null,8,["modelValue","label","options","error","errors"])]),l("div",Re,[s(oe,{"keep-color":"",modelValue:e(t).is_active,"onUpdate:modelValue":o[23]||(o[23]=r=>e(t).is_active=r),label:e(d)("is_active"),error:e(a).is_active.$error,onInput:o[24]||(o[24]=()=>e(a).is_active.$touch()),onBlur:o[25]||(o[25]=()=>e(a).is_active.$touch())},null,8,["modelValue","label","error"])]),l("div",Fe,[s(e(z),{modelValue:e(t).date_of_birth,"onUpdate:modelValue":o[27]||(o[27]=r=>e(t).date_of_birth=r),label:e(d)("date_of_birth")},{append:m(()=>[s(h,{name:"event",class:"cursor-pointer"},{default:m(()=>[s(M,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:m(()=>[s(N,{modelValue:e(t).date_of_birth,"onUpdate:modelValue":o[26]||(o[26]=r=>e(t).date_of_birth=r)},{default:m(()=>[l("div",Me,[C(s(w,{label:"Close",color:"primary",flat:""},null,512),[[T]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"])]),l("div",Ne,[s(e(z),{modelValue:e(t).date_of_joining,"onUpdate:modelValue":o[29]||(o[29]=r=>e(t).date_of_joining=r),label:e(d)("date_of_joining")},{append:m(()=>[s(h,{name:"event",class:"cursor-pointer"},{default:m(()=>[s(M,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:m(()=>[s(N,{modelValue:e(t).date_of_joining,"onUpdate:modelValue":o[28]||(o[28]=r=>e(t).date_of_joining=r)},{default:m(()=>[l("div",Te,[C(s(w,{label:"Close",color:"primary",flat:""},null,512),[[T]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"])])],2)]),_:1}),s(g,{class:"col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"},{default:m(()=>{var r;return[l("div",ze,[l("div",Ee,v(e(d)("card.contacts")),1)]),(_(!0),y(R,null,F((r=e(t))==null?void 0:r.contacts,(i,b)=>(_(),y("div",{key:b,class:c(p.$q.dark.isActive?"bg-dark":"bg-white")},[l("div",Oe,[l("div",Ge,[s(e(u),{rounded:"",outlined:"",label:e(d)("mobile"),modelValue:i.mobile,"onUpdate:modelValue":n=>i.mobile=n},null,8,["label","modelValue","onUpdate:modelValue"])]),l("div",He,[s(e(u),{modelValue:i.phone,"onUpdate:modelValue":n=>i.phone=n,label:e(d)("phone")},null,8,["modelValue","onUpdate:modelValue","label"])]),l("div",Je,[s(e(u),{modelValue:i.email,"onUpdate:modelValue":n=>i.email=n,label:e(d)("email"),type:"email"},null,8,["modelValue","onUpdate:modelValue","label"])]),l("div",Ke,[s(e(E),{onClick:()=>P("contacts",b),class:"q-mb-lg"},null,8,["onClick"])])])],2))),128)),l("div",{class:c(["col-lg-12 col-md-12 col-xs-12 q-py-lg text-center",p.$q.dark.isActive?"bg-dark":"bg-white"])},[s(e(O),{onClick:o[30]||(o[30]=()=>Q("contacts",e(ue)))})],2)]}),_:1}),s(g,{class:"col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"},{default:m(()=>{var r;return[l("div",We,[l("div",Xe,v(e(d)("card.locations")),1)]),(_(!0),y(R,null,F((r=e(t))==null?void 0:r.locations,(i,b)=>(_(),y("div",{key:b,class:c(p.$q.dark.isActive?"bg-dark":"bg-white")},[l("div",Ye,[l("div",Ze,[s(e(ge),{modelValue:i.country,"onUpdate:modelValue":[n=>i.country=n,n=>J(b)],label:e(d)("country"),location:i},null,8,["modelValue","onUpdate:modelValue","label","location"])]),l("div",eo,[s(e(fe),{modelValue:i.city,"onUpdate:modelValue":n=>i.city=n,label:e(d)("city"),options:G(b),location:i},null,8,["modelValue","onUpdate:modelValue","label","options","location"])]),l("div",oo,[s(e(u),{modelValue:i.first_address,"onUpdate:modelValue":n=>i.first_address=n,label:e(d)("first_address")},null,8,["modelValue","onUpdate:modelValue","label"])]),l("div",lo,[s(e(u),{modelValue:i.second_address,"onUpdate:modelValue":n=>i.second_address=n,label:e(d)("second_address")},null,8,["modelValue","onUpdate:modelValue","label"])]),l("div",so,[s(e(u),{modelValue:i.state,"onUpdate:modelValue":n=>i.state=n,label:e(d)("state")},null,8,["modelValue","onUpdate:modelValue","label"])]),l("div",ao,[s(e(u),{modelValue:i.zip,"onUpdate:modelValue":n=>i.zip=n,label:e(d)("zip")},null,8,["modelValue","onUpdate:modelValue","label"])]),l("div",to,[s(e(E),{onClick:()=>P("locations",b),class:"q-mb-lg"},null,8,["onClick"])])])],2))),128)),l("div",{class:c(["col-lg-12 col-md-12 col-xs-12 q-py-lg text-center",p.$q.dark.isActive?"bg-dark":"bg-white"])},[s(e(O),{onClick:o[31]||(o[31]=()=>Q("locations",e(ce)))})],2)]}),_:1}),s(g,{class:"col-lg-12 col-md-12 col-xs-12 q-px-none q-pb-none"},{default:m(()=>[l("div",ro,[l("div",io,v(e(d)("card.remarks")),1)]),l("div",{class:c(p.$q.dark.isActive?"bg-dark":"bg-white")},[l("div",no,[l("div",mo,[s(e(_e),{modelValue:e(t).remarks,"onUpdate:modelValue":o[32]||(o[32]=r=>e(t).remarks=r)},null,8,["modelValue"])])])],2)]),_:1})])]),_:1})]),_:1})}}};export{Lo as default};