import{u as q,d as E,s as I,af as k,ag as M,ah as v,ai as w,a9 as e,c as s,L as u,w as o,h as _,aj as C,ak as G,i as r,N as U,f as d,t as $,e as b,K as H,g as K,F as O,q as S,al as Q,am as J,G as W,R as X,an as Y}from"./DFMpWn2_.js";import{_ as Z,a as tt}from"./KsB3w45j.js";import et from"./CrcLCHm6.js";import{_ as at,a as nt}from"./DCTHjSsi.js";import"./NcBU_gTN.js";import"./Dnd51l0P.js";function ot(B){let a;return a=q().$nuxtSiteConfig,a||{}}const st={class:"text-gray-500 dark:text-gray-400"},rt={class:"flex flex-wrap items-center gap-3 mt-4"},it={key:1},pt=E({__name:"[slug]",async setup(B){var g,y,h;let a,i;const c=I(),{data:t}=([a,i]=k(()=>C(c.path,()=>S(c.path).findOne(),"$9yljQkk6zF")),a=await a,i(),a);if(!t.value)throw M({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:m}=([a,i]=k(()=>C(`${c.path}-surround`,()=>S("/blog").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(Q(c.path)),{default:()=>[]})),a=await a,i(),a),p=((g=t.value.head)==null?void 0:g.title)||t.value.title,f=((y=t.value.head)==null?void 0:y.description)||t.value.description;if(v({title:p,ogTitle:p,description:f,ogDescription:f}),(h=t.value.image)!=null&&h.src){const l=ot();v({ogImage:w(l.url,t.value.image.src),twitterImage:w(l.url,t.value.image.src)})}return(l,x)=>{const N=J,D=W,P=X,A=Z,L=et,R=at,T=tt,V=nt,j=Y,z=G;return e(t)?(s(),u(z,{key:0},{default:o(()=>[r(A,{title:e(t).title,description:e(t).description},{headline:o(()=>[r(N,U(e(t).badge,{variant:"subtle"}),null,16),x[0]||(x[0]=d("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1)),d("time",st,$(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:o(()=>[d("div",rt,[(s(!0),b(O,null,H(e(t).authors,(n,F)=>(s(),u(P,{key:F,to:n.to,color:"white",target:"_blank",size:"sm"},{default:o(()=>[r(D,U({ref_for:!0},n.avatar,{alt:n.name,size:"2xs"}),null,16,["alt"]),K(" "+$(n.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(j,null,{right:o(()=>[e(t).body&&e(t).body.toc?(s(),u(V,{key:0,links:e(t).body.toc.links},null,8,["links"])):_("",!0)]),default:o(()=>[r(T,{prose:""},{default:o(()=>{var n;return[e(t)&&e(t).body?(s(),u(L,{key:0,value:e(t)},null,8,["value"])):_("",!0),(n=e(m))!=null&&n.length?(s(),b("hr",it)):_("",!0),r(R,{surround:e(m)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):_("",!0)}}});export{pt as default};
