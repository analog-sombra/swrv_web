import{a as l}from"/build/_shared/chunk-ULKYCL4M.js";import{a as p}from"/build/_shared/chunk-6ONMTUBQ.js";import"/build/_shared/chunk-ONQBKG3Y.js";import{D as k,a as c,x as I}from"/build/_shared/chunk-6UZFRPE3.js";import{a as C}from"/build/_shared/chunk-R4UOJVSO.js";import{c as u,d as P,e as E}from"/build/_shared/chunk-7UEYUE33.js";var a=u(P());var e=u(E()),S=()=>{let[o,i]=(0,a.useState)(null),[n,f]=(0,a.useState)(null),x=l(t=>t.image),B=l(t=>t.addImage),z=l(t=>t.removeImage),r=(0,a.useRef)(null),A=l(t=>t.brandinfo),F=l(t=>t.setBrandinfo),s=(0,a.useRef)(null),L=l(t=>t.campaginPurpose),M=l(t=>t.setCampaginPurpose),v=(0,a.useRef)(null);(0,a.useEffect)(()=>{r.current.value=A,s.current.value=L},[]);let g=C();return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"flex gap-x-4 flex-col lg:flex-row",children:[(0,e.jsxs)("div",{className:"bg-white shadow-xl rounded-xl px-8 py-4 mt-4",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Create campaign"}),(0,e.jsx)("p",{className:"text-primary text-md font-normal",children:"The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population."}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Brand info"}),(0,e.jsx)("textarea",{ref:r,className:"p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Campaign purpose"}),(0,e.jsx)("textarea",{ref:s,className:"p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"}),(0,e.jsx)("h2",{className:"text-primary tect-xl font-medium text-left my-1",children:"Mood boards"}),(0,e.jsx)("div",{className:"hidden",children:(0,e.jsx)("input",{type:"file",accept:"image/*",ref:v,onChange:t=>{parseInt((t.target.files[0].size/1024/1024).toString())<4?(f(null),B(t.target.files[0])):f("Image file size must be less then 4 mb")}})}),(0,e.jsxs)("div",{className:"flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]",children:[x.map((t,m)=>{var d=URL.createObjectURL(t);return(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative",children:[(0,e.jsx)("div",{className:"top-0 left-0 absolute h-full w-full",children:(0,e.jsx)("img",{src:d,alt:"error",className:"w-full h-full rounded-xl object-cover"})}),(0,e.jsx)("div",{className:"cursor-pointer",onClick:()=>{z(t)},children:(0,e.jsx)(c,{className:"text-red-500 font-bold text-xl top-0 right-0 absolute",icon:k})})]})},m)}),(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"w-32 h-32 bg-gray-200 rounded-xl grid place-items-center cursor-pointer",onClick:()=>{var t;(t=v.current)==null||t.click()},children:(0,e.jsx)(c,{icon:I,className:"text-gray-400 text-3xl font-bold text-center"})})})]}),n==""||n==null||n==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:n})]}),(0,e.jsx)("div",{children:(0,e.jsxs)("div",{className:"lg:w-80 bg-white shadow-lx rounded-xl p-4 mt-4",children:[(0,e.jsx)("h1",{className:"text-primary text-lg font-medium",children:"Campaign Summary"}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Brand info"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:"Brand info"})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Campaign purpose"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:"Campaign purpose"})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Hashtags"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:"Hashtags"})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"Mentions"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:"Mentions"})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"You should do:"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:"You should do:"})]}),(0,e.jsxs)("div",{className:"flex my-4",children:[(0,e.jsx)("p",{className:"text-sm text-primary font-normal",children:"You should don't:"}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("p",{className:"text-sm text-primary font-medium",children:"You should don't:"})]}),o==""||o==null||o==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:o}),(0,e.jsxs)("div",{className:"flex w-full",children:[(0,e.jsx)("div",{onClick:()=>{g(-1)},className:"w-full",children:(0,e.jsx)(p,{text:"Back",textColor:"text-black",background:"bg-gray-100",width:"w-full",fontwidth:"font-bold"})}),(0,e.jsx)("div",{className:"w-10"}),(0,e.jsx)("div",{className:"w-full",onClick:()=>{var t,m,d,N,h,y,b,w;((t=r.current)==null?void 0:t.value)==null||((m=r.current)==null?void 0:m.value)==null||((d=r.current)==null?void 0:d.value)==""?i("Fill the Brand Info"):((N=s.current)==null?void 0:N.value)==null||((h=s.current)==null?void 0:h.value)==null||((y=s.current)==null?void 0:y.value)==""?i("Fill the Campaign Purpose."):x.length==0?i("Select at least one image."):(F((b=r.current)==null?void 0:b.value),M((w=s.current)==null?void 0:w.value),i(null),g("/home/createcampaign/step6"))},children:(0,e.jsx)(p,{text:"Next",textColor:"text-white",background:"bg-secondary",width:"w-full",fontwidth:"font-bold"})})]})]})})]})})},T=S;export{T as default};
