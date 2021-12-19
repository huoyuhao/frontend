var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;import{d as i,q as s,B as n,a2 as c,r as p,o as u,c as m,w as f,k as y,g as b,E as v,J as h,as as w,h as I,I as x}from"./vendor.a502bbf1.js";import{p as g}from"./index.6829e04c.js";import{a as D,d as M}from"./index.81a36e1e.js";import{t as j}from"./config.a89bd074.js";import{_ as k}from"./index.b01bbdb3.js";const O=i({name:"DAddWarehouseType",components:{},props:{visible:{required:!0,type:Boolean,default:!1},formData:{type:Object,default:()=>({})},isModify:{required:!0,type:Boolean,default:!1}},setup(e,{emit:a}){const t=s({}),o=s({});j.forEach((e=>{const{title:a,dataIndex:r}=e;e.required&&(o[r]=[{required:!0,message:`${a}不能为空！`}]),t[r]=""}));const{useForm:r}=c,{resetFields:l,validate:d,validateInfos:i}=r(t,o),{visibleModal:p,close:u,submit:m}=D(n(e),a,{resetFields:l,validate:d},{formItem:t,api:"/warehouse/type"});return{type:j,formItem:t,visibleModal:p,validateInfos:i,close:u,submit:m}}});const K=i({name:"DMaterialWarehouseType",components:{DAdd:k(O,[["render",function(e,a,t,o,r,l){const d=p("a-input"),i=p("a-form-item"),s=p("a-form"),n=p("a-modal");return u(),m(n,{visible:e.visibleModal,"onUpdate:visible":a[0]||(a[0]=a=>e.visibleModal=a),title:e.isModify?"修改":"新增",width:"800px",cancelText:"取消",okText:"提交",onOk:e.submit,onCancel:e.close},{default:f((()=>[y(s,{"label-col":{span:6},"wrapper-col":{span:14}},{default:f((()=>[(u(!0),b(h,null,v(e.type,(a=>(u(),b(h,null,[a.hideForm?I("",!0):(u(),m(i,w({key:0,key:a.dataIndex,label:a.title},e.validateInfos[a.dataIndex]),{default:f((()=>[y(d,{value:e.formItem[a.dataIndex],"onUpdate:value":t=>e.formItem[a.dataIndex]=t},null,8,["value","onUpdate:value"])])),_:2},1040,["label"]))],64)))),256))])),_:1})])),_:1},8,["visible","title","onOk","onCancel"])}]])},setup(){const e=s({title:"仓库类型",loading:!1,data:[],rowKey:"warehouseTypeId",showModal:!1,formData:{}}),i="/warehouse/type",c=[];j.forEach((a=>{const{dataIndex:t,rowKey:o,hideTable:r}=a;o&&(e.rowKey=t),r||c.push(a)})),c.push({title:"操作",dataIndex:"action",align:"center",width:"80px",slots:{customRender:"action"}});const p=()=>{e.loading=!0,g({api:i,method:"get"}).then((a=>{e.loading=!1,e.data=a})).catch()},u=()=>{p()},{deleteModal:m}=M();return p(),f=((e,a)=>{for(var t in a||(a={}))r.call(a,t)&&d(e,t,a[t]);if(o)for(var t of o(a))l.call(a,t)&&d(e,t,a[t]);return e})({},n(e)),a(f,t({columns:c,query:p,update:u,add:()=>{e.showModal=!0,e.formData={}},deleteData:a=>{const t=a[e.rowKey],o={method:"delete",api:i,data:{[e.rowKey]:t}};m(o,(()=>{u()}))},modify:a=>{e.showModal=!0,e.formData=a}}));var f}}),_=x("刷新"),C=x("新增"),q=x("删除");var T=k(K,[["render",function(e,a,t,o,r,l){const d=p("a-button"),i=p("d-table"),s=p("d-card"),n=p("d-add");return u(),b(h,null,[y(s,{title:e.title},{default:f((()=>[y(i,{loading:e.loading,columns:e.columns,"data-source":e.data,rowKey:e.rowKey,isSearch:!0},{header:f((()=>[y(d,{type:"primary",onClick:e.query},{default:f((()=>[_])),_:1},8,["onClick"]),y(d,{type:"primary",onClick:e.add},{default:f((()=>[C])),_:1},8,["onClick"])])),action:f((({record:a})=>[y(d,{type:"primary",size:"small",onClick:t=>e.deleteData(a)},{default:f((()=>[q])),_:2},1032,["onClick"])])),_:1},8,["loading","columns","data-source","rowKey"])])),_:1},8,["title"]),y(n,{visible:e.showModal,"onUpdate:visible":a[0]||(a[0]=a=>e.showModal=a),"form-data":e.formData,"is-modify":Boolean(e.formData&&e.formData[e.rowKey]),onUpdate:e.update},null,8,["visible","form-data","is-modify","onUpdate"])],64)}]]);export{T as default};