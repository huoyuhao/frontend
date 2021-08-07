var t=Object.defineProperty,a=Object.defineProperties,e=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,e,r)=>e in a?t(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;import{d as n,q as s,s as m,B as d,p,g as c,N as u,r as f,o as b,c as v,h as y,k as g,F as h}from"./vendor.d65cd52f.js";import{p as I}from"./index.295a8195.js";import"./index.96ee9d22.js";import"./index.863982d0.js";const j=n({name:"DProductEntryFactory",components:{},setup(){const t=s({title:"入库",materialArr:[],tagStr:""}),n=s({materialId:"",rfTagCodeList:[],materialEntityAction:2,materialEntityPosition:0});I({api:"/material",method:"get"}).then((a=>{t.materialArr=a.map((t=>({value:t.materialId,label:t.materialName})))})).catch(),n.rfTagCodeList=m((()=>t.tagStr.trim().split(/[\n\s+,，；;]/g).filter((t=>t))));return p=((t,a)=>{for(var e in a||(a={}))l.call(a,e)&&i(t,e,a[e]);if(r)for(var e of r(a))o.call(a,e)&&i(t,e,a[e]);return t})({},d(t)),a(p,e({formItem:n,submit:()=>{t.loading=!0,I({api:"/material/entity",method:"put",data:n}).then((()=>{u.success(`${t.title}成功`)})).catch()}}));var p}}),w=g();p("data-v-1f3a7940");const P=h("提交");c();const O=w(((t,a,e,r,l,o)=>{const i=f("a-select"),n=f("a-form-item"),s=f("a-textarea"),m=f("a-input-number"),d=f("a-button"),p=f("a-form"),c=f("d-card");return b(),v(c,{title:t.title},{default:w((()=>[y(p,{name:"custom-validation",ref:"formRef",model:t.formItem,class:"d-form","label-col":{span:4},"wrapper-col":{span:12}},{default:w((()=>[y(n,{label:"物料",name:"materialId"},{default:w((()=>[y(i,{value:t.formItem.materialId,"onUpdate:value":a[1]||(a[1]=a=>t.formItem.materialId=a),placeholder:"请选择","show-search":"","option-filter-prop":"label",options:t.materialArr},null,8,["value","options"])])),_:1}),y(n,{label:"RF标签码",name:"tagStr"},{default:w((()=>[y(s,{value:t.tagStr,"onUpdate:value":a[2]||(a[2]=a=>t.tagStr=a),placeholder:"请输入RF标签码","auto-size":{minRows:3,maxRows:6},"allow-clear":""},null,8,["value"])])),_:1}),y(n,{label:"物料位置",name:"materialEntityPosition"},{default:w((()=>[y(m,{value:t.formItem.materialEntityPosition,"onUpdate:value":a[3]||(a[3]=a=>t.formItem.materialEntityPosition=a),placeholder:"输入输入物料位置"},null,8,["value"])])),_:1}),y(n,{"wrapper-col":{span:12,offset:4}},{default:w((()=>[y(d,{class:"d-button",type:"primary",onClick:t.submit},{default:w((()=>[P])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title"])}));j.render=O,j.__scopeId="data-v-1f3a7940";export{j as default};
