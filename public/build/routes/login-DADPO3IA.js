import{a as I}from"/build/_shared/chunk-J32PS5QO.js";import{a as O,b as R,c as T}from"/build/_shared/chunk-NIGJXJWR.js";import{a as h}from"/build/_shared/chunk-6ONMTUBQ.js";import{a as b,b as y}from"/build/_shared/chunk-MNPIC26H.js";import{a as P}from"/build/_shared/chunk-5UWGKQS3.js";import"/build/_shared/chunk-PVF54MGG.js";import{B as F,a as N,g as S,o as B}from"/build/_shared/chunk-DJ3N2H5H.js";import{a as A,c as L,g as s,l as C}from"/build/_shared/chunk-WLPYV2BQ.js";import{c as o,d as X,e as c}from"/build/_shared/chunk-7UEYUE33.js";var t=o(c()),V=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-full flex py-6 px-8",children:(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center content-center items-center w-full",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s,{to:"/about",className:"text-sm text-gray-600 text-center px-4 font-normal",children:"About"})}),(0,t.jsx)("div",{children:(0,t.jsx)(s,{to:"/tos",className:"text-sm text-gray-600 text-center px-4 font-normal",children:"Terms of use"})}),(0,t.jsx)("div",{children:(0,t.jsx)(s,{to:"/pp",className:"text-sm text-gray-600 text-center px-4 font-normal",children:"Privacy policy"})}),(0,t.jsx)("div",{children:(0,t.jsx)(s,{to:"/",className:"text-sm text-gray-600 text-center px-4 font-normal",children:"Cookie policy"})}),(0,t.jsx)("div",{children:(0,t.jsx)(s,{to:"/",className:"text-sm text-gray-600 text-center px-4 font-normal",children:"FAQ"})})]})})});var i=o(X());var $=o(I()),e=o(c()),D=n=>{let M=A(),[g,W]=(0,i.useState)(!1),H=()=>{W(!g)},[f,k]=(0,i.useState)(null),z=async(m,l)=>{let r=await b.post(`${y}/api/login`,{email:m,password:l});r.data.status?M(`/extra/sociallogin/${r.data.data.id}`):k(r.data.message)},d=(0,i.useRef)(null),[u,v]=(0,i.useState)(null),[G,w]=(0,i.useState)(!1),U=async()=>{var m,l,r,p,x;if(((m=d.current)==null?void 0:m.value)==null||((l=d.current)==null?void 0:l.value)==null||((r=d.current)==null?void 0:r.value)=="")v("Fill the Brand info");else if(!$.validate((p=d.current)==null?void 0:p.value))v("Enter valid email");else{let E=await b.post(`${y}/api/send-forgot-password`,{user:(x=d.current)==null?void 0:x.value});return E.data.status?w(!1):v(E.data.message)}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`fixed top-0 left-0 bg-gray-600 bg-opacity-20 h-screen w-full grid place-items-center shadow-xl ${G?"":"hidden"} `,style:{zIndex:100},children:(0,e.jsxs)("div",{className:"bg-white rounded-lg p-8 w-96",children:[(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsx)("div",{className:"grow"}),(0,e.jsxs)("div",{onClick:()=>{w(!1)},children:[" ",(0,e.jsx)(N,{className:"text-black text-2xl font-bold",icon:F})," "]})]}),(0,e.jsx)("p",{className:"text-black font-bold text-lg mt-4 text-center my-4",children:"Forget password"}),(0,e.jsx)("input",{ref:d,type:"email",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",placeholder:"example@mail.com"}),u==""||u==null||u==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:u}),(0,e.jsx)("div",{onClick:U,children:(0,e.jsx)(h,{text:"Send",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-full"})})]})}),(0,e.jsxs)("div",{className:"relative",children:[(0,e.jsx)("div",{className:" text-center text-[70px] -translate-y-4 font-black text-stroke text-white absolute top-0 w-full md:-translate-y-10 md:text-[150px]",children:"Welcome"}),(0,e.jsxs)("div",{className:"w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20",children:[(0,e.jsx)("div",{className:"hidden lg:flex"}),(0,e.jsx)("div",{className:"bg-white rounded-xl shadow-xl py-6 px-10 relative mt-12",children:(0,e.jsxs)(L,{method:"post",children:[n.message&&(0,e.jsx)("p",{className:"w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500",children:n.message}),(0,e.jsx)("p",{className:"text-black text-left font-bold text-lg mt-4",children:"Login"}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg",children:"Email"}),(0,e.jsx)("input",{name:"email",type:"email",className:"bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2",placeholder:"example@mail.com"}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg mt-4",children:"Password"}),(0,e.jsxs)("div",{className:"bg-gray-200 rounded-md px-4 py-2 flex",children:[(0,e.jsx)("input",{name:"password",type:g?"text":"password",className:"bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full",placeholder:"8 character"}),(0,e.jsx)("div",{className:"text-gray-600 text-center px-1 text-md",onClick:H,children:(0,e.jsx)(N,{icon:g?B:S})})]}),(0,e.jsx)("div",{className:"grid place-items-center py-2",children:(0,e.jsxs)("div",{className:"flex content-center gap-4",children:[(0,e.jsx)("div",{className:"grid place-items-center",children:(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  allign-center",children:"Login with"})}),(0,e.jsx)("img",{src:"/images/media/facebook.png",alt:"error",className:"w-10 h-10"}),(0,e.jsx)("div",{onClick:async()=>{var p;let m=new O,l=await R(T,m),r=((p=l.user.displayName)==null?void 0:p.trim().split(" ").join("").toLowerCase().trim())+"SWRV123@#";try{await z(l.user.email,r)}catch(x){k(x.toString())}},children:(0,e.jsx)("img",{src:"/images/icons/google.png",alt:"error",className:"w-10 h-10"})})]})}),f==""||f==null||f==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:f}),(0,e.jsx)("button",{className:"w-full inline black rounded-xl bg-secondary shadow-lg text-center font-bold text-white text-xl py-2 ",children:"Submit"}),(0,e.jsxs)("p",{className:"text-black text-left font-normal text-sm mt-4",children:["CAN'T LOG IN? ",(0,e.jsx)("span",{onClick:()=>{w(!0)},className:"font-bold cursor-pointer",children:"RESTORE PASSWORD"})]}),(0,e.jsx)("p",{className:"text-black text-left font-bold text-sm mt-6",children:"Don't have an account?"}),(0,e.jsx)(s,{to:"/register",children:(0,e.jsx)(h,{text:"Join",textColor:"text-white",background:"bg-primary",fontwidth:"font-bold",width:"w-full"})})]})}),(0,e.jsx)("div",{className:"hidden lg:block"})]})]})]})};var j=o(I());var a=o(c()),J=()=>{let n=C();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,a.jsx)(P,{}),(0,a.jsx)(D,{message:n==null?void 0:n.message}),(0,a.jsx)("div",{className:"grow"}),(0,a.jsx)(V,{})]})})};var Q=J;export{Q as default};
