import{a as o,b as a}from"/build/_shared/chunk-MNPIC26H.js";async function s(r){try{let t=new FormData;t.append("file",r);let e=await o({method:"post",url:`${a}/api/upload-file`,data:t,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Options":"*","Access-Control-Allow-Methods":"*","X-Content-Type-Options":"*","Content-Type":"multipart/form-data",Accept:"*"}});return e.data.status==!1?e.data.message:e.data.data.filePath}catch(t){return console.log(t.toString()),t.toString()}}export{s as a};
