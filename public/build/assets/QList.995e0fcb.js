import{u as c,a as u}from"./use-dark.46133ca7.js";import{b as d,f as t,h as m,j as v,g as h}from"./app.3d0443e2.js";const B={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},o={xs:2,sm:4,md:8,lg:16,xl:24};var x=d({name:"QSeparator",props:{...c,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const i=v(),n=u(e,i.proxy.$q),a=t(()=>e.vertical===!0?"vertical":"horizontal"),s=t(()=>` q-separator--${a.value}`),g=t(()=>e.inset!==!1?`${s.value}-${B[e.inset]}`:""),$=t(()=>`q-separator${s.value}${g.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),q=t(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${o.md}px`:e.spaced in o?`${o[e.spaced]}px`:e.spaced,l=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${l[0]}`]=r[`margin${l[1]}`]=f}return r});return()=>m("hr",{class:$.value,style:q.value,"aria-orientation":a.value})}}),k=d({name:"QList",props:{...c,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:i}){const n=v(),a=u(e,n.proxy.$q),s=t(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m(e.tag,{class:s.value},h(i.default))}});export{k as Q,x as a};
