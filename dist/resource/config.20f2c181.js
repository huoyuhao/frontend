import{f as e,x as a}from"./vendor.a502bbf1.js";import{p as t}from"./index.6829e04c.js";const l=l=>{const r=e([]),i=e([]),o=e(null);a((()=>l.value),(e=>{clearTimeout(o.value),o.value=setTimeout((()=>{u(e)}),2e3)}));const u=e=>{if(0===e.length)return r.value=[];i.value=!0,t({api:"/material/entity",method:"post",data:{rfTagCodeList:e}}).then((e=>{i.value=!1,r.value=e})).catch()};return{loading:i,materialDetail:r,queryMaterialDetail:u}};export{l as g};