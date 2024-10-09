import{I as ye,r as L,aQ as D,d as G,D as y,aY as Q,A as T,aZ as He,a_ as Ne,a$ as We,b0 as oe,b1 as Je,b2 as ue,o as re,B as he,as as we,aR as Qe,aS as Ge,aT as Ye,aU as ve,aV as Ke,F as se,aO as Oe,aP as Ze,b3 as Xe,b4 as Ce,b as Ve,b5 as xe,b6 as K,az as _e,b7 as et,aW as B,P as ke,Q as N,k as Se,S as de,U as Z,b8 as Be,aq as Le,X as Y,c as p,e as $,f as z,Y as tt,b9 as at,N as U,n as b,M as I,g as _,t as J,h as V,ba as lt,bb as nt,E as $e,G as Re,V as it,bc as ot,bd as ut,W as rt,be as st,bf as dt,H as ct,J as vt,L as R,w as P,bg as ee,i as x,T as ft,K as ge,O as pt,bh as bt,aa as mt,ab as gt,aF as yt,bi as ht,bj as Ot,a9 as C,$ as kt,bk as ne,R as St,bl as $t,bm as wt}from"./DFMpWn2_.js";import{_ as Ct}from"./DxNbdpCP.js";import{f as At,c as F,a as It,l as Mt,n as Vt,u as Bt,r as Lt,i as Rt}from"./DKaIm436.js";import{d as Dt,e as Ft}from"./CBGVxveO.js";const jt=ye,Et={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}};let Ae=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Ie(e){var u,c;let o=(u=e.innerText)!=null?u:"",v=e.cloneNode(!0);if(!(v instanceof HTMLElement))return o;let a=!1;for(let m of v.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))m.remove(),a=!0;let t=a?(c=v.innerText)!=null?c:"":o;return Ae.test(t)&&(t=t.replace(Ae,"")),t}function zt(e){let u=e.getAttribute("aria-label");if(typeof u=="string")return u.trim();let c=e.getAttribute("aria-labelledby");if(c){let o=c.split(" ").map(v=>{let a=document.getElementById(v);if(a){let t=a.getAttribute("aria-label");return typeof t=="string"?t.trim():Ie(a).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return Ie(e).trim()}function Pt(e){let u=L(""),c=L("");return()=>{let o=D(e);if(!o)return"";let v=o.innerText;if(u.value===v)return c.value;let a=zt(o).trim().toLowerCase();return u.value=v,c.value=a,a}}function Tt(e,u){return e===u}var Ut=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ut||{}),qt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(qt||{}),Ht=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ht||{});function Nt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let De=Symbol("ListboxContext");function fe(e){let u=_e(De,null);if(u===null){let c=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,fe),c}return u}let Wt=G({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Tt},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:u,attrs:c,emit:o}){let v=L(1),a=L(null),t=L(null),m=L(null),d=L([]),h=L(""),s=L(null),n=L(1);function i(l=f=>f){let f=s.value!==null?d.value[s.value]:null,g=et(l(d.value.slice()),S=>D(S.dataRef.domRef)),r=f?g.indexOf(f):null;return r===-1&&(r=null),{options:g,activeOptionIndex:r}}let A=y(()=>e.multiple?1:0),[k,w]=Dt(y(()=>e.modelValue),l=>o("update:modelValue",l),y(()=>e.defaultValue)),j=y(()=>k.value===void 0?Q(A.value,{1:[],0:void 0}):k.value),M={listboxState:v,value:j,mode:A,compare(l,f){if(typeof e.by=="string"){let g=e.by;return(l==null?void 0:l[g])===(f==null?void 0:f[g])}return e.by(l,f)},orientation:y(()=>e.horizontal?"horizontal":"vertical"),labelRef:a,buttonRef:t,optionsRef:m,disabled:y(()=>e.disabled),options:d,searchQuery:h,activeOptionIndex:s,activationTrigger:n,closeListbox(){e.disabled||v.value!==1&&(v.value=1,s.value=null)},openListbox(){e.disabled||v.value!==0&&(v.value=0)},goToOption(l,f,g){if(e.disabled||v.value===1)return;let r=i(),S=At(l===F.Specific?{focus:F.Specific,id:f}:{focus:l},{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:q=>q.id,resolveDisabled:q=>q.dataRef.disabled});h.value="",s.value=S,n.value=g??1,d.value=r.options},search(l){if(e.disabled||v.value===1)return;let f=h.value!==""?0:1;h.value+=l.toLowerCase();let g=(s.value!==null?d.value.slice(s.value+f).concat(d.value.slice(0,s.value+f)):d.value).find(S=>S.dataRef.textValue.startsWith(h.value)&&!S.dataRef.disabled),r=g?d.value.indexOf(g):-1;r===-1||r===s.value||(s.value=r,n.value=1)},clearSearch(){e.disabled||v.value!==1&&h.value!==""&&(h.value="")},registerOption(l,f){let g=i(r=>[...r,{id:l,dataRef:f}]);d.value=g.options,s.value=g.activeOptionIndex},unregisterOption(l){let f=i(g=>{let r=g.findIndex(S=>S.id===l);return r!==-1&&g.splice(r,1),g});d.value=f.options,s.value=f.activeOptionIndex,n.value=1},theirOnChange(l){e.disabled||w(l)},select(l){e.disabled||w(Q(A.value,{0:()=>l,1:()=>{let f=T(M.value.value).slice(),g=T(l),r=f.findIndex(S=>M.compare(g,T(S)));return r===-1?f.push(g):f.splice(r,1),f}}))}};He([t,m],(l,f)=>{var g;M.closeListbox(),Ne(f,We.Loose)||(l.preventDefault(),(g=D(t))==null||g.focus())},y(()=>v.value===0)),oe(De,M),Je(y(()=>Q(v.value,{0:ue.Open,1:ue.Closed})));let E=y(()=>{var l;return(l=D(t))==null?void 0:l.closest("form")});return re(()=>{he([E],()=>{if(!E.value||e.defaultValue===void 0)return;function l(){M.theirOnChange(e.defaultValue)}return E.value.addEventListener("reset",l),()=>{var f;(f=E.value)==null||f.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:f,disabled:g,form:r,...S}=e,q={open:v.value===0,disabled:g,value:j.value};return we(se,[...l!=null&&j.value!=null?Ft({[l]:j.value}).map(([te,pe])=>we(Qe,Ge({features:Ye.Hidden,key:te,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:r,disabled:g,name:te,value:pe}))):[],ve({ourProps:{},theirProps:{...c,...Ke(S,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:q,slots:u,attrs:c,name:"Listbox"})])}}}),Jt=G({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:u,slots:c,expose:o}){var v;let a=(v=e.id)!=null?v:`headlessui-listbox-button-${Oe()}`,t=fe("ListboxButton");o({el:t.buttonRef,$el:t.buttonRef});function m(n){switch(n.key){case B.Space:case B.Enter:case B.ArrowDown:n.preventDefault(),t.openListbox(),K(()=>{var i;(i=D(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(F.First)});break;case B.ArrowUp:n.preventDefault(),t.openListbox(),K(()=>{var i;(i=D(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(F.Last)});break}}function d(n){switch(n.key){case B.Space:n.preventDefault();break}}function h(n){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),K(()=>{var i;return(i=D(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})})):(n.preventDefault(),t.openListbox(),Nt(()=>{var i;return(i=D(t.optionsRef))==null?void 0:i.focus({preventScroll:!0})})))}let s=Ze(y(()=>({as:e.as,type:u.type})),t.buttonRef);return()=>{var n,i;let A={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{...k}=e,w={ref:t.buttonRef,id:a,type:s.value,"aria-haspopup":"listbox","aria-controls":(n=D(t.optionsRef))==null?void 0:n.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(i=D(t.labelRef))==null?void 0:i.id,a].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:m,onKeyup:d,onClick:h};return ve({ourProps:w,theirProps:k,slot:A,attrs:u,slots:c,name:"ListboxButton"})}}}),Qt=G({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:u,slots:c,expose:o}){var v;let a=(v=e.id)!=null?v:`headlessui-listbox-options-${Oe()}`,t=fe("ListboxOptions"),m=L(null);o({el:t.optionsRef,$el:t.optionsRef});function d(n){switch(m.value&&clearTimeout(m.value),n.key){case B.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case B.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeOptionIndex.value!==null){let i=t.options.value[t.activeOptionIndex.value];t.select(i.dataRef.value)}t.mode.value===0&&(t.closeListbox(),K(()=>{var i;return(i=D(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})}));break;case Q(t.orientation.value,{vertical:B.ArrowDown,horizontal:B.ArrowRight}):return n.preventDefault(),n.stopPropagation(),t.goToOption(F.Next);case Q(t.orientation.value,{vertical:B.ArrowUp,horizontal:B.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),t.goToOption(F.Previous);case B.Home:case B.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToOption(F.First);case B.End:case B.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToOption(F.Last);case B.Escape:n.preventDefault(),n.stopPropagation(),t.closeListbox(),K(()=>{var i;return(i=D(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case B.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(t.search(n.key),m.value=setTimeout(()=>t.clearSearch(),350));break}}let h=Xe(),s=y(()=>h!==null?(h.value&ue.Open)===ue.Open:t.listboxState.value===0);return()=>{var n,i;let A={open:t.listboxState.value===0},{...k}=e,w={"aria-activedescendant":t.activeOptionIndex.value===null||(n=t.options.value[t.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(i=D(t.buttonRef))==null?void 0:i.id,"aria-orientation":t.orientation.value,id:a,onKeydown:d,role:"listbox",tabIndex:0,ref:t.optionsRef};return ve({ourProps:w,theirProps:k,slot:A,attrs:u,slots:c,features:Ce.RenderStrategy|Ce.Static,visible:s.value,name:"ListboxOptions"})}}}),Gt=G({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:u,attrs:c,expose:o}){var v;let a=(v=e.id)!=null?v:`headlessui-listbox-option-${Oe()}`,t=fe("ListboxOption"),m=L(null);o({el:m,$el:m});let d=y(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===a:!1),h=y(()=>Q(t.mode.value,{0:()=>t.compare(T(t.value.value),T(e.value)),1:()=>T(t.value.value).some(l=>t.compare(T(l),T(e.value)))})),s=y(()=>Q(t.mode.value,{1:()=>{var l;let f=T(t.value.value);return((l=t.options.value.find(g=>f.some(r=>t.compare(T(r),T(g.dataRef.value)))))==null?void 0:l.id)===a},0:()=>h.value})),n=Pt(m),i=y(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:m}));re(()=>t.registerOption(a,i)),Ve(()=>t.unregisterOption(a)),re(()=>{he([t.listboxState,h],()=>{t.listboxState.value===0&&h.value&&Q(t.mode.value,{1:()=>{s.value&&t.goToOption(F.Specific,a)},0:()=>{t.goToOption(F.Specific,a)}})},{immediate:!0})}),xe(()=>{t.listboxState.value===0&&d.value&&t.activationTrigger.value!==0&&K(()=>{var l,f;return(f=(l=D(m))==null?void 0:l.scrollIntoView)==null?void 0:f.call(l,{block:"nearest"})})});function A(l){if(e.disabled)return l.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),K(()=>{var f;return(f=D(t.buttonRef))==null?void 0:f.focus({preventScroll:!0})}))}function k(){if(e.disabled)return t.goToOption(F.Nothing);t.goToOption(F.Specific,a)}let w=It();function j(l){w.update(l)}function M(l){w.wasMoved(l)&&(e.disabled||d.value||t.goToOption(F.Specific,a,0))}function E(l){w.wasMoved(l)&&(e.disabled||d.value&&t.goToOption(F.Nothing))}return()=>{let{disabled:l}=e,f={active:d.value,selected:h.value,disabled:l},{value:g,disabled:r,...S}=e,q={id:a,ref:m,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":h.value,disabled:void 0,onClick:A,onFocus:k,onPointerenter:j,onMouseenter:j,onPointermove:M,onMousemove:M,onPointerleave:E,onMouseleave:E};return ve({ourProps:q,theirProps:S,slot:f,attrs:c,slots:u,name:"ListboxOption"})}}});const Me=ke(N.ui.strategy,N.ui.checkbox,Et),Yt=G({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>Me.default.color,validator(e){return N.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:u}){const{ui:c,attrs:o}=de("checkbox",Z(e,"ui"),Me,Z(e,"class")),{emitFormChange:v,color:a,name:t,inputId:m}=Be(e),d=m.value??jt(),h=y({get(){return e.modelValue},set(i){u("update:modelValue",i)}}),s=i=>{u("change",i.target.checked),v()},n=y(()=>Le(Y(c.value.base,c.value.form,c.value.rounded,c.value.background,c.value.border,a.value&&c.value.ring.replaceAll("{color}",a.value),a.value&&c.value.color.replaceAll("{color}",a.value)),e.inputClass));return{ui:c,attrs:o,toggle:h,inputId:d,name:t,inputClass:n,onChange:s}}}),Kt=["data-n-ids"],Zt=["id","name","required","value","disabled","indeterminate"],Xt=["for"];function xt(e,u,c,o,v,a){return p(),$("div",{class:b(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[z("div",{class:b(e.ui.container)},[tt(z("input",U({id:e.inputId,"onUpdate:modelValue":u[0]||(u[0]=t=>e.toggle=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:u[1]||(u[1]=(...t)=>e.onChange&&e.onChange(...t))}),null,16,Zt),[[at,e.toggle]])],2),e.label||e.$slots.label?(p(),$("div",{key:0,class:b(e.ui.inner)},[z("label",{for:e.inputId,class:b(e.ui.label)},[I(e.$slots,"label",{label:e.label},()=>[_(J(e.label),1)]),e.required?(p(),$("span",{key:0,class:b(e.ui.required)},"*",2)):V("",!0)],10,Xt),e.help||e.$slots.help?(p(),$("p",{key:0,class:b(e.ui.help)},[I(e.$slots,"help",{help:e.help},()=>[_(J(e.help),1)])],2)):V("",!0)],2)):V("",!0)],10,Kt)}const _t=Se(Yt,[["render",xt]]),H=ke(N.ui.strategy,N.ui.select,lt),ie=ke(N.ui.strategy,N.ui.selectMenu,nt),ea=G({components:{HCombobox:Mt,HComboboxButton:Vt,HComboboxOptions:Bt,HComboboxOption:Lt,HComboboxInput:Rt,HListbox:Wt,HListboxButton:Jt,HListboxOptions:Qt,HListboxOption:Gt,UIcon:$e,UAvatar:Re},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>H.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>H.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>ie.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},searchableLazy:{type:Boolean,default:!1},clearSearchOnClose:{type:Boolean,default:()=>ie.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:[String,Function],default:()=>ie.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(H.size).includes(e)}},color:{type:String,default:()=>H.default.color,validator(e){return[...N.ui.colors,...Object.keys(H.color)].includes(e)}},variant:{type:String,default:()=>H.default.variant,validator(e){return[...Object.keys(H.variant),...Object.values(H.color).flatMap(u=>Object.keys(u))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:u,slots:c}){const{ui:o,attrs:v}=de("select",Z(e,"ui"),H,Z(e,"class")),{ui:a}=de("selectMenu",Z(e,"uiMenu"),ie),t=y(()=>it({},e.popper,a.value.popper)),[m,d]=ot(t.value),{size:h,rounded:s}=ut({ui:o,props:e}),{emitFormBlur:n,emitFormChange:i,inputId:A,color:k,size:w,name:j}=Be(e,H),M=y(()=>h.value??w.value),E=L(""),l=y({get(){return e.query??E.value},set(O){E.value=O,u("update:query",O)}}),f=y(()=>e.multiple?!Array.isArray(e.modelValue)||!e.modelValue.length?[]:e.valueAttribute?X.value.filter(O=>e.modelValue.includes(O[e.valueAttribute])):X.value.filter(O=>e.modelValue.includes(O)):e.valueAttribute?X.value.find(O=>O[e.valueAttribute]===e.modelValue):X.value.find(O=>O===e.modelValue)),g=y(()=>{var O;return e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length?`${f.value.length} selected`:null:e.modelValue!==void 0&&e.modelValue!==null?e.valueAttribute?((O=f.value)==null?void 0:O[e.optionAttribute])??null:["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]:null}),r=y(()=>{var W,le;const O=((le=(W=o.value.color)==null?void 0:W[k.value])==null?void 0:le[e.variant])||o.value.variant[e.variant];return Le(Y(o.value.base,a.value.select,s.value,o.value.size[M.value],o.value.gap[M.value],e.padded?o.value.padding[M.value]:"p-0",O==null?void 0:O.replaceAll("{color}",k.value),(S.value||c.leading)&&o.value.leading.padding[M.value],(q.value||c.trailing)&&o.value.trailing.padding[M.value]),e.placeholder&&(!e.modelValue||Array.isArray(e.modelValue)&&!e.modelValue.length)&&o.value.placeholder,e.selectClass)}),S=y(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),q=y(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),te=y(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),pe=y(()=>e.loading&&!S.value?e.loadingIcon:e.trailingIcon||e.icon),Fe=y(()=>Y(o.value.icon.leading.wrapper,o.value.icon.leading.pointer,o.value.icon.leading.padding[M.value])),je=y(()=>Y(o.value.icon.base,k.value&&N.ui.colors.includes(k.value)&&o.value.icon.color.replaceAll("{color}",k.value),o.value.icon.size[M.value],e.loading&&o.value.icon.loading)),Ee=y(()=>Y(o.value.icon.trailing.wrapper,o.value.icon.trailing.pointer,o.value.icon.trailing.padding[M.value])),ze=y(()=>Y(o.value.icon.base,k.value&&N.ui.colors.includes(k.value)&&o.value.icon.color.replaceAll("{color}",k.value),o.value.icon.size[M.value],e.loading&&!S.value&&o.value.icon.loading)),be=e.searchable&&typeof e.searchable=="function"?rt(e.searchable,e.debounce):void 0,X=st(async()=>be?await be(l.value):e.options||[],[],{lazy:e.searchableLazy}),ae=y(()=>!l.value||be?X.value:X.value.filter(O=>{var W;return((W=e.searchAttributes)!=null&&W.length?e.searchAttributes:[e.optionAttribute]).some(le=>{if(["string","number"].includes(typeof O))return String(O).search(new RegExp(l.value,"i"))!==-1;const me=dt(O,le);return me!=null&&String(me).search(new RegExp(l.value,"i"))!==-1})})),Pe=y(()=>l.value===""||e.showCreateOptionWhen==="empty"&&ae.value.length||e.showCreateOptionWhen==="always"&&ae.value.find(W=>["string","number"].includes(typeof W)?W===l.value:W[e.optionAttribute]===l.value)||typeof e.showCreateOptionWhen=="function"&&!e.showCreateOptionWhen(l.value,ae.value)?null:["string","number"].includes(typeof e.modelValue)?l.value:{[e.optionAttribute]:l.value});function Te(){e.clearSearchOnClose&&(l.value="")}he(d,O=>{O?u("open"):(Te(),u("close"),n())});function Ue(O){u("update:modelValue",O),u("change",O),i()}function qe(O){l.value=O.target.value}return ct(()=>ye()),{ui:o,uiMenu:a,attrs:v,name:j,inputId:A,popper:t,trigger:m,container:d,selected:f,label:g,isLeading:S,isTrailing:q,selectClass:r,leadingIconName:te,leadingIconClass:je,leadingWrapperIconClass:Fe,trailingIconName:pe,trailingIconClass:ze,trailingWrapperIconClass:Ee,filteredOptions:ae,createOption:Pe,query:l,onUpdate:Ue,onQueryChange:qe}}}),ta=["value","required"],aa=["id","disabled"],la={class:"truncate"};function na(e,u,c,o,v,a){const t=$e,m=vt("HComboboxInput"),d=Re;return p(),R(ee(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.multiple?Array.isArray(e.modelValue)?e.modelValue:[]:e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:b(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:P(({open:h})=>[e.required?(p(),$("input",{key:0,value:e.modelValue,required:e.required,class:b(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,ta)):V("",!0),(p(),R(ee(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:b(e.uiMenu.trigger)},{default:P(()=>[I(e.$slots,"default",{open:h,disabled:e.disabled,loading:e.loading},()=>[z("button",U({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(p(),$("span",{key:0,class:b(e.leadingWrapperIconClass)},[I(e.$slots,"leading",{selected:e.selected,disabled:e.disabled,loading:e.loading},()=>[x(t,{name:e.leadingIconName,class:b(e.leadingIconClass)},null,8,["name","class"])])],2)):V("",!0),I(e.$slots,"label",{selected:e.selected},()=>[e.label?(p(),$("span",{key:0,class:b(e.uiMenu.label)},J(e.label),3)):(p(),$("span",{key:1,class:b(e.uiMenu.label)},J(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(p(),$("span",{key:1,class:b(e.trailingWrapperIconClass)},[I(e.$slots,"trailing",{selected:e.selected,disabled:e.disabled,loading:e.loading},()=>[x(t,{name:e.trailingIconName,class:b(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):V("",!0)],16,aa)])]),_:2},1032,["class"])),h?(p(),$("div",{key:1,ref:"container",class:b([e.uiMenu.container,e.uiMenu.width])},[x(ft,U({appear:""},e.uiMenu.transition),{default:P(()=>[z("div",null,[e.popper.arrow?(p(),$("div",{key:0,"data-popper-arrow":"",class:b(Object.values(e.uiMenu.arrow))},null,2)):V("",!0),(p(),R(ee(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:b([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:P(()=>{var s,n;return[e.searchable?(p(),R(m,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:b(e.uiMenu.input),onChange:e.onQueryChange},null,8,["display-value","placeholder","class","onChange"])):V("",!0),(p(!0),$(se,null,ge(e.filteredOptions,(i,A)=>(p(),R(ee(e.searchable?"HComboboxOption":"HListboxOption"),{key:A,as:"template",value:e.valueAttribute?i[e.valueAttribute]:i,disabled:i.disabled},{default:P(({active:k,selected:w,disabled:j})=>[z("li",{class:b([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,k?e.uiMenu.option.active:e.uiMenu.option.inactive,w&&e.uiMenu.option.selected,j&&e.uiMenu.option.disabled])},[z("div",{class:b(e.uiMenu.option.container)},[I(e.$slots,"option",{option:i,active:k,selected:w},()=>[i.icon?(p(),R(t,{key:0,name:i.icon,class:b([e.uiMenu.option.icon.base,k?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,i.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):i.avatar?(p(),R(d,U({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...i.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):i.chip?(p(),$("span",{key:2,class:b(e.uiMenu.option.chip.base),style:pt({background:`#${i.chip}`})},null,6)):V("",!0),z("span",la,J(["string","number"].includes(typeof i)?i:i[e.optionAttribute]),1)])],2),w?(p(),$("span",{key:0,class:b([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[x(t,{name:e.selectedIcon,class:b(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):V("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(p(),R(ee(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:P(({active:i,selected:A})=>[z("li",{class:b([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,i?e.uiMenu.option.active:e.uiMenu.option.inactive])},[z("div",{class:b(e.uiMenu.option.container)},[I(e.$slots,"option-create",{option:e.createOption,active:i,selected:A},()=>[z("span",{class:b(e.uiMenu.option.create)},'Create "'+J(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((s=e.filteredOptions)!=null&&s.length)?(p(),$("p",{key:2,class:b(e.uiMenu.option.empty)},[I(e.$slots,"option-empty",{query:e.query},()=>[_(' No results for "'+J(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?V("",!0):(p(),$("p",{key:3,class:b(e.uiMenu.empty)},[I(e.$slots,"empty",{query:e.query},()=>[u[0]||(u[0]=_(" No options. "))])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):V("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const ia=Se(ea,[["render",na]]);class ce extends Error{constructor(u){super(u),this.message=u,Object.setPrototypeOf(this,ce.prototype)}}const oa=G({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:u,emit:c}){const o=ye(),v=ht(`form-${o}`);re(()=>{v.on(async s=>{var n;s.type!=="submit"&&((n=e.validateOn)!=null&&n.includes(s.type))&&await d(s.path,{silent:!0})})}),Ve(()=>{v.reset()});const a=L([]);oe("form-errors",a),oe("form-events",v);const t=L({});oe("form-inputs",t);async function m(){let s=await e.validate(e.state);if(e.schema)if(da(e.schema))s=s.concat(await ca(e.state,e.schema));else if(ua(e.schema))s=s.concat(await sa(e.state,e.schema));else if(va(e.schema))s=s.concat(await pa(e.state,e.schema));else if(ba(e.schema))s=s.concat(await ma(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return s}async function d(s,n={silent:!1}){let i=s;if(s&&!Array.isArray(s)&&(i=[s]),i){const A=a.value.filter(w=>!i.includes(w.path)),k=(await m()).filter(w=>i.includes(w.path));a.value=A.concat(k)}else a.value=await m();if(a.value.length>0){if(n.silent)return!1;throw new ce(`Form validation failed: ${JSON.stringify(a.value,null,2)}`)}return e.state}async function h(s){var i;const n=s;try{(i=e.validateOn)!=null&&i.includes("submit")&&await d(),n.data=e.state,c("submit",n)}catch(A){if(!(A instanceof ce))throw A;const k={...n,errors:a.value.map(w=>({...w,id:t.value[w.path]}))};c("error",k)}}return u({validate:d,errors:a,setErrors(s,n){n?a.value=a.value.filter(i=>i.path!==n).concat(s):a.value=s},async submit(){await h(new Event("submit"))},getErrors(s){return s?a.value.filter(n=>n.path===s):a.value},clear(s){s?a.value=a.value.filter(n=>n.path!==s):a.value=[]}}),{onSubmit:h,errors:bt(a)}}});function ua(e){return e.validate&&e.__isYupSchema__}function ra(e){return e.inner!==void 0}async function sa(e,u){try{return await u.validate(e,{abortEarly:!1}),[]}catch(c){if(ra(c))return c.inner.map(o=>({path:o.path??"",message:o.message}));throw c}}function da(e){return e.parse!==void 0}async function ca(e,u){const c=await u.safeParseAsync(e);return c.success===!1?c.error.issues.map(o=>({path:o.path.join("."),message:o.message})):[]}function va(e){return e.validateAsync!==void 0&&e.id!==void 0}function fa(e){return e.isJoi===!0}async function pa(e,u){try{return await u.validateAsync(e,{abortEarly:!1}),[]}catch(c){if(fa(c))return c.details.map(o=>({path:o.path.join("."),message:o.message}));throw c}}function ba(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}async function ma(e,u){var o;return((o=(await("_parse"in u?u._parse(e):"_run"in u?u._run({typed:!1,value:e},{}):u(e))).issues)==null?void 0:o.map(v=>{var a;return{path:((a=v.path)==null?void 0:a.map(t=>t.key).join("."))||"",message:v.message}}))||[]}function ga(e,u,c,o,v,a){return p(),$("form",{onSubmit:u[0]||(u[0]=yt((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"]))},[I(e.$slots,"default",mt(gt({errors:e.errors})))],32)}const ya=Se(oa,[["render",ga]]),$a=G({inheritAttrs:!1,__name:"AuthForm",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},align:{type:String,default:"bottom"},loading:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},providers:{type:Array,default:()=>[]},submitButton:{type:Object,default:()=>({})},schema:{type:Object,default:void 0},validate:{type:[Function,Array],default:void 0},validateOn:{type:Array,default:()=>["submit"]},divider:{type:String,default:"or"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["submit"],setup(e,{expose:u}){const c=e,o=y(()=>({wrapper:"w-full max-w-sm space-y-6",base:"",container:Y("gap-y-6 flex flex-col",c.align==="top"&&"flex-col-reverse"),title:"text-2xl text-gray-900 dark:text-white font-bold",description:"text-gray-500 dark:text-gray-400 mt-1",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},providers:"space-y-3",form:"space-y-6",footer:"text-sm text-gray-500 dark:text-gray-400 mt-2",default:{submitButton:{label:"Continue"}}})),v=L(),{ui:a,attrs:t}=de("auth.form",Z(c,"ui"),o,Z(c,"class"),!0),m=Ot(Object.values(c.fields).reduce((d,{name:h,value:s})=>(d[h]=s,d),{}));return u({formRef:v,state:m}),(d,h)=>{var E,l,f,g;const s=$e,n=St,i=Ct,A=_t,k=ia,w=$t,j=wt,M=ya;return p(),$("div",U({class:C(a).wrapper},C(t)),[e.icon||d.$slots.icon||e.title||d.$slots.title||e.description||d.$slots.description?(p(),$("div",{key:0,class:b(C(a).base)},[e.icon||d.$slots.icon?(p(),$("div",{key:0,class:b(C(a).icon.wrapper)},[I(d.$slots,"icon",{},()=>[x(s,{name:e.icon,class:b(C(a).icon.base)},null,8,["name","class"])])],2)):V("",!0),e.title||d.$slots.title?(p(),$("div",{key:1,class:b(C(a).title)},[I(d.$slots,"title",{},()=>[_(J(e.title),1)])],2)):V("",!0),e.description||d.$slots.description?(p(),$("div",{key:2,class:b(C(a).description)},[I(d.$slots,"description",{},()=>[_(J(e.description),1)])],2)):V("",!0)],2)):V("",!0),z("div",{class:b(C(a).container)},[(E=e.providers)!=null&&E.length?(p(),$("div",{key:0,class:b(C(a).providers)},[(p(!0),$(se,null,ge(e.providers,(r,S)=>(p(),R(n,U({key:S,ref_for:!0},r,{block:"",onClick:r.click}),null,16,["onClick"]))),128))],2)):V("",!0),(l=e.providers)!=null&&l.length&&((f=e.fields)!=null&&f.length)?(p(),R(i,{key:1,label:e.divider},null,8,["label"])):V("",!0),(g=e.fields)!=null&&g.length?(p(),R(M,{key:2,ref_key:"formRef",ref:v,state:C(m),schema:e.schema,validate:e.validate,"validate-on":e.validateOn,class:b(C(a).form),onSubmit:h[0]||(h[0]=r=>d.$emit("submit",r.data))},{default:P(()=>[(p(!0),$(se,null,ge(e.fields,r=>(p(),R(j,{key:r.name,label:r.type==="checkbox"?"":r.label??"",description:r.description,help:r.help,hint:r.hint,name:r.name,size:r.size},kt({default:P(()=>[I(d.$slots,`${r.name}-field`,U({ref_for:!0},{state:C(m),field:C(ne)(r,["description","help","hint","size"])}),()=>[r.type==="checkbox"?(p(),R(A,U({key:0,modelValue:C(m)[r.name],"onUpdate:modelValue":S=>C(m)[r.name]=S,ref_for:!0},C(ne)(r,["description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"])):r.type==="select"?(p(),R(k,U({key:1,modelValue:C(m)[r.name],"onUpdate:modelValue":S=>C(m)[r.name]=S,ref_for:!0},C(ne)(r,["description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"])):(p(),R(w,U({key:2,modelValue:C(m)[r.name],"onUpdate:modelValue":S=>C(m)[r.name]=S,ref_for:!0},C(ne)(r,["label","description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"]))])]),_:2},[d.$slots[`${r.name}-label`]?{name:"label",fn:P(()=>[I(d.$slots,`${r.name}-label`)]),key:"0"}:void 0,d.$slots[`${r.name}-description`]?{name:"description",fn:P(()=>[I(d.$slots,`${r.name}-description`)]),key:"1"}:void 0,d.$slots[`${r.name}-hint`]?{name:"hint",fn:P(()=>[I(d.$slots,`${r.name}-hint`)]),key:"2"}:void 0,d.$slots[`${r.name}-help`]?{name:"help",fn:P(()=>[I(d.$slots,`${r.name}-help`)]),key:"3"}:void 0]),1032,["label","description","help","hint","name","size"]))),128)),I(d.$slots,"validation"),x(n,U({type:"submit",block:"",loading:e.loading},{...C(a).default.submitButton,...e.submitButton}),null,16,["loading"])]),_:3},8,["state","schema","validate","validate-on","class"])):V("",!0)],2),d.$slots.footer?(p(),$("div",{key:1,class:b(C(a).footer)},[I(d.$slots,"footer")],2)):V("",!0)],16)}}});export{$a as _};
