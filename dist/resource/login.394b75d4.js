var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;import{d as l,M as m,f as p,q as f,B as i,r as d,o as c,g as u,k as b,w as v,I as g}from"./vendor.a502bbf1.js";import{p as w}from"./index.6829e04c.js";import{_ as j,s as y}from"./index.b01bbdb3.js";import{g as h}from"./index.444898cc.js";const O=l({name:"DLogin",components:{},setup(){const e=m(),{setUserName:l}=h(),d=p(),c=f({loading:!1,data:""}),u=f({name:"admin",psw:"haofang@123"});return b=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))s.call(a,t)&&n(e,t,a[t]);return e})({},i(c)),a(b,t({formState:u,formRef:d,submit:()=>{c.loading=!0,w({api:"/login",method:"post",data:u}).then((a=>{c.loading=!1;const{token:t}=a;y(t),l(u.name),e.push({name:"home"})})).catch()}}));var b}}),_={class:"d-login"},S=g("登录"),k=g("登录");var P=j(O,[["render",function(e,a,t,o,r,s){const n=d("a-row"),l=d("a-input"),m=d("a-form-item"),p=d("a-button"),f=d("a-form");return c(),u("div",_,[b(f,{name:"custom-validation",ref:"formRef",model:e.formState,class:"d-form","wrapper-col":{span:24}},{default:v((()=>[b(n,{class:"d-title",justify:"center"},{default:v((()=>[S])),_:1}),b(m,{name:"name"},{default:v((()=>[b(l,{size:"large",placeholder:"账号",value:e.formState.name,"onUpdate:value":a[0]||(a[0]=a=>e.formState.name=a),autocomplete:"off"},null,8,["value"])])),_:1}),b(m,{name:"psw"},{default:v((()=>[b(l,{size:"large",placeholder:"密码",value:e.formState.psw,"onUpdate:value":a[1]||(a[1]=a=>e.formState.psw=a),type:"password",autocomplete:"off"},null,8,["value"])])),_:1}),b(p,{class:"d-button","html-type":"submit",block:"",size:"large",onClick:e.submit},{default:v((()=>[k])),_:1},8,["onClick"])])),_:1},8,["model"])])}],["__scopeId","data-v-24b6d207"]]);export{P as default};
