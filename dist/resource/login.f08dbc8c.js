var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;import{d as l,I as m,f as d,q as p,B as f,p as i,g as c,r as u,o as b,c as v,h as g,k as h,F as w}from"./vendor.3dbe8742.js";import{h as y}from"./index.ff13d247.js";import{s as j}from"./index.855c6cab.js";const O=l({name:"DLogin",components:{},setup(){const e=m(),l=d(),i=p({loading:!1,data:""}),c=p({name:"admin",psw:"haofang@123"});return u=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&n(e,t,a[t]);if(o)for(var t of o(a))s.call(a,t)&&n(e,t,a[t]);return e})({},f(i)),a(u,t({formState:c,formRef:l,submit:()=>{i.loading=!0,(({api:e,method:a,data:t})=>y.request({url:e,method:a,data:t}))({api:"/login",method:"post",data:c}).then((a=>{i.loading=!1;const{token:t}=a;j(t),e.push({name:"home"})})).catch()}}));var u}}),S=h();i("data-v-686e6637");const _={class:"d-login"},k=w("登录"),P=w("登录");c();const x=S(((e,a,t,o,r,s)=>{const n=u("a-row"),l=u("a-input"),m=u("a-form-item"),d=u("a-button"),p=u("a-form");return b(),v("div",_,[g(p,{name:"custom-validation",ref:"formRef",model:e.formState,class:"d-form","wrapper-col":{span:24}},{default:S((()=>[g(n,{class:"d-title",justify:"center"},{default:S((()=>[k])),_:1}),g(m,{name:"name"},{default:S((()=>[g(l,{size:"large",placeholder:"账号",value:e.formState.name,"onUpdate:value":a[1]||(a[1]=a=>e.formState.name=a),autocomplete:"off"},null,8,["value"])])),_:1}),g(m,{name:"psw"},{default:S((()=>[g(l,{size:"large",placeholder:"密码",value:e.formState.psw,"onUpdate:value":a[2]||(a[2]=a=>e.formState.psw=a),type:"password",autocomplete:"off"},null,8,["value"])])),_:1}),g(d,{class:"d-button","html-type":"submit",block:"",size:"large",onClick:e.submit},{default:S((()=>[P])),_:1},8,["onClick"])])),_:1},8,["model"])])}));O.render=x,O.__scopeId="data-v-686e6637";export{O as default};
