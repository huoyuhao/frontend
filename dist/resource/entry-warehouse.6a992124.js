var a=Object.defineProperty,t=Object.defineProperties,e=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;import{d as s,q as n,s as m,B as d,f as p,r as c,o as f,g as u,k as b,w as y,c as g,h as v,J as h,a2 as w,T as D,I as j}from"./vendor.a502bbf1.js";import{p as P}from"./index.6829e04c.js";import{g as E}from"./config.20f2c181.js";import{D as O}from"./detail.dc9da8a6.js";import{_}from"./index.b01bbdb3.js";import"./config.d3adc09f.js";const I=s({name:"DMaterialEntryFactory",components:{DMaterialDetail:O},setup(){const a=n({title:"生产入库",tagStr:""}),s=n({rfTagCodeList:[],materialEntityAction:2,materialEntityPositionType:1,materialEntityPosition:null}),c=n({}),{useForm:f}=w,{resetFields:u}=f(s,c);s.rfTagCodeList=m((()=>a.tagStr.trim().split(/[\n\s+,，；;]/g).filter((a=>a))));const{rfTagCodeList:b}=d(s),{loading:y,materialDetail:g,queryMaterialDetail:v}=E(b),h=p([]);return P({api:"/warehouse",method:"get"}).then((a=>{h.value=a.map((a=>({value:a.warehouseId,label:a.warehouseName})))})).catch(),j=((a,t)=>{for(var e in t||(t={}))l.call(t,e)&&o(a,e,t[e]);if(r)for(var e of r(t))i.call(t,e)&&o(a,e,t[e]);return a})({},d(a)),t(j,e({formItem:s,materialEntityPositionArr:h,submit:()=>{a.loading=!0,P({api:"/material/entity",method:"put",data:s}).then((()=>{D.success(`${a.title}成功`),u(),a.tagStr=""})).catch()},loading:y,materialDetail:g,queryMaterialDetail:v}));var j}}),S=j("提交");var x=_(I,[["render",function(a,t,e,r,l,i){const o=c("a-select"),s=c("a-form-item"),n=c("a-textarea"),m=c("a-button"),d=c("a-form"),p=c("d-card"),w=c("d-material-detail");return f(),u(h,null,[b(p,{title:a.title},{default:y((()=>[b(d,{name:"custom-validation",ref:"formRef",model:a.formItem,class:"d-form","label-col":{span:4},"wrapper-col":{span:12}},{default:y((()=>[b(s,{label:"物料位置",name:"materialEntityPosition"},{default:y((()=>[b(o,{value:a.formItem.materialEntityPosition,"onUpdate:value":t[0]||(t[0]=t=>a.formItem.materialEntityPosition=t),placeholder:"请选择","show-search":"","option-filter-prop":"label",options:a.materialEntityPositionArr},null,8,["value","options"])])),_:1}),b(s,{label:"RF标签码",name:"tagStr"},{default:y((()=>[b(n,{value:a.tagStr,"onUpdate:value":t[1]||(t[1]=t=>a.tagStr=t),placeholder:"请输入RF标签码","auto-size":{minRows:3,maxRows:6},"allow-clear":""},null,8,["value"])])),_:1}),b(s,{"wrapper-col":{span:12,offset:4}},{default:y((()=>[b(m,{class:"d-button",type:"primary",onClick:a.submit},{default:y((()=>[S])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])])),_:1},8,["title"]),a.materialDetail&&a.materialDetail.length>0?(f(),g(w,{key:0,data:a.materialDetail,loading:a.loading,onUpdate:a.queryMaterialDetail},null,8,["data","loading","onUpdate"])):v("",!0)],64)}],["__scopeId","data-v-2f1cfb43"]]);export{x as default};