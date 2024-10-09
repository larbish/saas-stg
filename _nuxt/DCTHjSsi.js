import{d as _,S as C,U as y,c as l,L as x,w as H,e as m,n as u,a9 as e,i as O,h as b,f as h,t as w,N as A,E as U,ax as N,r as v,B as T,aD as E,aE as q,a as D,u as F,F as M,K as R,aF as V,x as z,D as K,M as j}from"./DFMpWn2_.js";const P=_({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},i=t,{ui:n,attrs:r}=C("content.surround.link",y(i,"ui"),s,y(i,"class"),!0);return(a,o)=>{const d=U,p=N;return l(),x(p,A({to:t.link._path,class:e(n).wrapper},e(r)),{default:H(()=>[t.icon||t.link.icon?(l(),m("div",{key:0,class:u(e(n).icon.wrapper)},[O(d,{name:t.icon||t.link.icon,class:u(e(n).icon.base)},null,8,["name","class"])],2)):b("",!0),h("p",{class:u(e(n).title)},w(t.link.title),3),h("p",{class:u(e(n).description)},w(t.link.description),3)]),_:1},16,["to","class"])}}}),G={key:1,class:"hidden sm:block"},Y=_({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},i=t,{ui:n,attrs:r}=C("content.surround",y(i,"ui"),s,y(i,"class"),!0),[a,o]=i.surround||[];return(d,p)=>{const c=P;return l(),m("div",A({class:e(n).wrapper},e(r)),[e(a)?(l(),x(c,{key:0,link:e(a),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(l(),m("span",G," ")),e(o)?(l(),x(c,{key:2,link:e(o),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):b("",!0)],16)}}}),J=()=>{const t=v(),s=v([]),i=v([]),n=a=>{a.forEach(o=>{const d=o.target.id;o.isIntersecting?s.value=[...s.value,d]:s.value=s.value.filter(p=>p!==d)})},r=a=>{a.forEach(o=>{t.value&&t.value.observe(o)})};return T(s,(a,o)=>{a.length===0?i.value=o:i.value=a}),E(()=>t.value=new IntersectionObserver(n)),q(()=>{var a;return(a=t.value)==null?void 0:a.disconnect()}),{visibleHeadings:s,activeHeadings:i,updateHeadings:r}},Q=["href","onClick"],L=_({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:s}){const i={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},n=t,r=s,a=D(),o=F(),{activeHeadings:d,updateHeadings:p}=J(),{ui:c,attrs:S}=C("content.toc.links",y(n,"ui"),i,y(n,"class"),!0);o.hooks.hookOnce("page:finish",()=>{p([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const f=k=>{const I=encodeURIComponent(k);a.push(`#${I}`),r("move",k)};return(k,I)=>{var $;const B=L;return($=t.links)!=null&&$.length?(l(),m("ul",A({key:0,class:e(c).wrapper},e(S)),[(l(!0),m(M,null,R(t.links,g=>(l(),m("li",{key:g.text,class:u([e(c).wrapper,g.depth===3&&e(c).depth])},[h("a",{href:`#${g.id}`,class:u([e(c).base,e(d).includes(g.id)?e(c).active:e(c).inactive]),onClick:V(W=>f(g.id),["prevent"])},w(g.text),11,Q),g.children?(l(),x(B,{key:0,links:g.children,ui:e(c)},null,8,["links","ui"])):b("",!0)],2))),128))],16)):b("",!0)}}}),Z=_({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s=z(),i=K(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:s.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),n=t,{ui:r,attrs:a}=C("content.toc",y(n,"ui"),i,y(n,"class"),!0),o=v(!1);return(d,p)=>{var f,k;const c=U,S=L;return l(),m("nav",A({class:e(r).wrapper},e(a)),[h("div",{class:u([(f=t.links)!=null&&f.length?e(r).container.base:e(r).container.empty])},[j(d.$slots,"top"),(k=t.links)!=null&&k.length?(l(),m("button",{key:0,class:u(e(r).button.base),tabindex:"-1",onClick:p[0]||(p[0]=I=>o.value=!e(o))},[h("span",{class:u(e(r).button.label)},w(t.title),3),O(c,{name:e(r).button.trailingIcon.name,class:u(["lg:!hidden",[e(r).button.trailingIcon.base,e(o)?e(r).button.trailingIcon.active:e(r).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):b("",!0),O(S,{links:t.links,ui:e(r).links,class:u([e(o)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),j(d.$slots,"bottom")],2)],16)}}});export{Y as _,Z as a};
