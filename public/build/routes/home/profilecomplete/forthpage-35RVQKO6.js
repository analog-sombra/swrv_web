import{a as G}from"/build/_shared/chunk-SABFZQUQ.js";import"/build/_shared/chunk-PVF54MGG.js";import{a as D}from"/build/_shared/chunk-6ONMTUBQ.js";import{a as v,b as h}from"/build/_shared/chunk-MNPIC26H.js";import{A as w,E as H,a as f}from"/build/_shared/chunk-RWDLZR7I.js";import{a as I,c as T,k as M}from"/build/_shared/chunk-WLPYV2BQ.js";import{c as y,d as Z,e as B}from"/build/_shared/chunk-7UEYUE33.js";var r=y(Z());var e=y(B());var _=()=>{let g=M(),N=g.user.id,j=g.country,C=["MALE","FEMALE","TRANSGENDER"],R=g.user.role.code=="50",[l,A]=(0,r.useState)([]),[P,k]=(0,r.useState)(!1),[s,E]=(0,r.useState)([]),[X,S]=(0,r.useState)(!1),[u,a]=(0,r.useState)(""),[p,L]=(0,r.useState)(null),[q,b]=(0,r.useState)(!1),[F,z]=(0,r.useState)([]),[n,U]=(0,r.useState)(null),[d,J]=(0,r.useState)(),K=t=>{J(t.target.value.replace(/\D/g,""))},c=(0,r.useRef)(null),Q=async t=>{let o=await v.post(`${h}/api/get-city`,{search:t});z(o.data.data)},V=G(t=>t.setIndex),te=I(),[x,W]=(0,r.useState)(!1),Y=()=>{W(!x)},O=(0,r.useRef)(null);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:`w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${q?"grid":"hidden"}`,children:(0,e.jsx)("div",{className:"bg-white shadow-md w-80 rounded-lg p-4",children:F.length==0?(0,e.jsxs)("div",{className:"min-h-96",children:[(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:"No city found with this name"}),(0,e.jsx)("button",{className:"px-2 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",onClick:()=>{b(!1)},children:"Close"})]}):(0,e.jsx)("div",{className:"h-72 overflow-y-scroll no-scrollbar",children:F.map((t,o)=>(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{onClick:()=>{U(t),b(!1),c.current.value=""},className:"my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500",children:[t.name," - ",t.code]},o)}))})})}),(0,e.jsx)("div",{className:"p-8 w-full",children:(0,e.jsx)("div",{className:"flex w-full",children:(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg mt-4",children:"Country"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:l.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:`${t.name} - [${t.code}]`})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{k(!0)},children:(0,e.jsx)(f,{icon:w})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${P?"":"hidden"} grid place-items-center`,children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",children:[(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar w-80",children:j.map((t,o)=>(0,e.jsxs)("h1",{onClick:()=>{if(l.includes(t)){let i=l.filter(m=>m!=t);A(i)}else A([t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${l.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:[t.code," - ",t.name]},o))}),(0,e.jsx)("div",{onClick:()=>{k(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Gender"}),(0,e.jsxs)("div",{className:"bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full",children:[(0,e.jsx)("div",{className:"flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar",children:s.map((t,o)=>(0,e.jsx)("div",{className:"flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4",children:(0,e.jsx)("h1",{className:" text-black font-semibold text-center w-40",children:t})},o))}),(0,e.jsx)("div",{className:"grow"}),(0,e.jsx)("div",{className:"grid place-items-center px-4 bg-gray-300 rounded-lg",onClick:()=>{S(!0)},children:(0,e.jsx)(f,{icon:w})})]}),(0,e.jsx)("div",{className:`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${X?"":"hidden"} grid place-items-center`,children:(0,e.jsxs)("div",{className:"bg-white p-10 cursor-pointer",children:[(0,e.jsx)("div",{className:"min-h-80 overflow-y-scroll no-scrollbar w-80",children:C.map((t,o)=>(0,e.jsx)("h1",{onClick:()=>{if(s.includes(t)){let i=s.filter(m=>m!=t);E(i)}else E([t])},className:`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${s.includes(t)?"border-green-500 text-green-500":"border-gray-800 text-black"}  no-scrollbar`,children:t},o))}),(0,e.jsx)("div",{onClick:()=>{S(!1)},className:"my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center",children:"Close"})]})}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"City"}),(0,e.jsxs)("div",{className:"w-full bg-[#EEEEEE] rounded-md flex p-2",children:[(0,e.jsx)("div",{className:"grow",children:(0,e.jsx)("input",{ref:c,className:"h-full w-full outline-none focus:border-gray-300 bg-transparent"})}),(0,e.jsx)("div",{className:"bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer",onClick:()=>{var t,o,i,m,$;((t=c.current)==null?void 0:t.value)==null||((o=c.current)==null?void 0:o.value)==null||((i=c.current)==null?void 0:i.value)==""?L("Enter the city name"):(b(!0),L(null),Q(($=(m=c.current)==null?void 0:m.value)!=null?$:""))},children:(0,e.jsx)(f,{icon:H})})]}),p==""||p==null||p==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:p}),n==""||n==null||n==null?null:(0,e.jsxs)("div",{className:"bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4",children:[n.name," - ",n.code]}),(0,e.jsx)("p",{className:"text-black text-left font-normal text-lg  mt-4",children:"Phone number"}),(0,e.jsxs)("div",{className:"p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex",children:[(0,e.jsx)("div",{className:"text-center text-black font-normal text-md mr-4",children:n==null?0:n.country.isd}),(0,e.jsx)("input",{onChange:K,value:d,type:"text",maxLength:10,className:"w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none"})]}),(0,e.jsxs)("div",{className:"flex gap-2 mt-4 items-center",children:[(0,e.jsx)("div",{children:(0,e.jsx)("input",{checked:x,onChange:Y,type:"checkbox",name:"check2"})}),(0,e.jsx)("p",{className:"text-left text-[10px] text-black font-normal",children:"The above details are true and correct"})]}),u==""||u==null||u==null?null:(0,e.jsx)("div",{className:"bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4",children:u}),(0,e.jsx)("div",{className:"w-full",onClick:async()=>{if(l.length==0)a("Select the country");else if(C.length==0)a("Select your gender");else if(n==null||l==null)a("Select the city");else if(d==null||d==null||d==0)a("Fill the contact number");else if(d.toString().length!=10)a("Enter a 10 degit valid contact number");else if(!x)a("Check the box in order to procide");else{let t={id:N,cityId:n.id,userContact:d,userGender:s[0]=="MALE"?"1":s[0]=="FEMALE"?"2":"3"},o=await v({method:"post",url:`${h}/api/updateuser`,data:t,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"application/json",Accept:"*"}});if(o.data.status==!1)return a(o.data.message);V(4),O.current.click()}},children:(0,e.jsx)(D,{text:"Next",textColor:"text-white",width:"w-full",background:"bg-primary",fontwidth:"font-bold"})}),(0,e.jsxs)(T,{method:"post",className:"hidden",children:[(0,e.jsx)("input",{type:"hidden",name:"id",value:N.toString()}),(0,e.jsx)("input",{type:"hidden",name:"address",value:R?"/home/profilecomplete/fifthpage":"/home"}),(0,e.jsx)("button",{ref:O,name:"submit",children:"Submit"})]})]})})})]})},ee=_;export{ee as default};
