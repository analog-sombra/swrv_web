import{a as C}from"/build/_shared/chunk-HETNVBB4.js";import{a as u}from"/build/_shared/chunk-57PMQZPE.js";import{a as g}from"/build/_shared/chunk-6ONMTUBQ.js";import{a as b,b as h}from"/build/_shared/chunk-MNPIC26H.js";import{a as m,l as p}from"/build/_shared/chunk-DJ3N2H5H.js";import{g as c,k as x}from"/build/_shared/chunk-WLPYV2BQ.js";import{c as l,d as w,e as f}from"/build/_shared/chunk-7UEYUE33.js";var i=l(w());var e=l(f());var y=()=>{let[o,s]=(0,i.useState)(!1),t=x(),r=t.userdata.role.code=="50",a=t.camp.campaigns;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex my-6 md:flex-row flex-col",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{className:"text-2xl font-bold text-black text-left mt-4",children:"My campaigns"}),(0,e.jsx)("p",{className:"text-md font-normal text-black text-left",children:"Here you can manage all the campaigns that you are participating in."})]}),(0,e.jsx)("div",{className:"hidden md:block md:grow"})]}),r?(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl p-6",children:[(0,e.jsx)("h1",{className:"text-black text-center font-bold text-2xl",children:"Would you like to collaborate ?"}),(0,e.jsx)("div",{className:"w-full text-center bg-red",children:(0,e.jsx)(c,{to:"/home/createcampaign",children:(0,e.jsx)(g,{text:"Create Campaign",textColor:"text-white",background:"bg-secondary"})})})]}):null,r?(0,e.jsx)("div",{children:o?(0,e.jsx)(N,{}):(0,e.jsx)(v,{camp:a})}):(0,e.jsx)(k,{userid:t.userdata.id})]})})},A=y,v=o=>{let s=o.camp;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4",children:[" ",(0,e.jsx)(m,{icon:p,className:"text-md text-secondary"})," New Campaign "]}),s.length==0?(0,e.jsx)("h1",{className:"text-black font-medium text-xl text-center",children:"Here is no campaign created.."}):null,(0,e.jsx)("div",{className:"grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:s.map((t,r)=>{let a=[];for(let d=0;d<t.platforms.length;d++)a.push(t.platforms[d].platformLogoUrl);let n=t.brand.length==0||t.brand==null||t.brand==null||t.brand==""||t.brand.logo=="0"||t.brand.logo==null||t.brand.logo==null||t.brand.logo==""?"/images/avatar/user.png":t.brand.logo;return(0,e.jsx)("div",{children:(0,e.jsx)(C,{id:t.id,currency:t.currency.code,platforms:a,maxval:t.costPerPost.split(".")[0],weburl:"agag",category:t.type.name,image:n,name:t.name})},r)})})]})})},N=()=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center",children:[(0,e.jsx)(u,{}),(0,e.jsx)(u,{})]})}),k=o=>{let[s,t]=(0,i.useState)([]),r=async()=>{let a={search:{status:"3",influencer:o.userid,fromUser:o.userid}},n=await b({method:"post",url:`${h}/api/search-invite`,data:a,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});t(n.data.data)};return(0,i.useEffect)(()=>{r()},[]),(0,e.jsxs)("div",{className:"bg-white rounded-2xl my-3 shadow-xl p-4",children:[(0,e.jsxs)("div",{className:"w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4",children:[" ",(0,e.jsx)(m,{icon:p,className:"text-md text-secondary"})," New Campaign "]}),s.length==0?(0,e.jsx)("h1",{className:"text-black font-medium text-xl text-center",children:"You haven't collaborated in any champaing."}):null,(0,e.jsx)("div",{className:"grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:s.map((a,n)=>{let d=a.brand.length==0||a.brand==null||a.brand==null||a.brand==""||a.brand.logo=="0"||a.brand.logo==null||a.brand.logo==null||a.brand.logo==""?"/images/avatar/user.png":a.brand.logo;return(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"bg-white rounded-xl shadow-xl p-4 w-64 my-2",children:[(0,e.jsxs)("div",{className:"flex items-end gap-x-3",children:[(0,e.jsx)("div",{children:(0,e.jsx)("img",{src:d,alt:"error",className:"object-cover w-16 h-16 rounded"})}),(0,e.jsx)("p",{className:"text-black font-semibold text-xl content-end text-left",children:a.brand.name})]}),(0,e.jsxs)("p",{className:"text-black font-semibold text-xs text-left mt-2",children:["email : ",a.brand.email]}),(0,e.jsx)(c,{to:`/home/campaigns/${a.campaign.id}`,children:(0,e.jsx)(g,{text:"View",textColor:"text-black",background:"bg-[#01FFF4]",width:"w-full",margin:"my-2",fontwidth:"font-bold"})})]})},n)})})]})};export{A as default};
