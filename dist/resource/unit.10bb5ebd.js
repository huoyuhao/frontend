var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,i=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;import{d as n,q as r,B as s,_ as u,r as c,o as m,c as f,an as p,h as y,G as b,E as v,ap as w,j as h,ao as k,F as x}from"./vendor.3dbe8742.js";import{p as I}from"./index.d1bda31d.js";import{a as g,d as j}from"./index.0938e8a9.js";import{u as D}from"./config.0b912e9f.js";import"./index.ff13d247.js";import"./index.855c6cab.js";const M=n({name:"DAddMaterialUnit",components:{},props:{visible:{required:!0,type:Boolean,default:!1},formData:{type:Object,default:()=>null},isModify:{required:!0,type:Boolean,default:!1}},setup(e,{emit:a}){const t=r({}),o=r({}),l=e.isModify?"修改":"新增";D.forEach((e=>{const{title:a,dataIndex:l}=e;e.required&&(o[l]=[{required:!0,message:`${a}不能为空！`}]),t[l]=""}));const{useForm:d}=u,{resetFields:i,validate:n,validateInfos:c}=d(t,o),{visibleModal:m,close:f,submit:p}=g(s(e),a,{resetFields:i,validate:n},{formItem:t,api:"/material/unit"});return{title:l,unit:D,formItem:t,visibleModal:m,validateInfos:c,close:f,submit:p}}});M.render=function(e,a,t,o,l,d){const i=c("a-input"),n=c("a-form-item"),r=c("a-form"),s=c("a-modal");return m(),f(s,{visible:e.visibleModal,"onUpdate:visible":a[1]||(a[1]=a=>e.visibleModal=a),title:e.title,width:"800px",cancelText:"取消",okText:"提交",onOk:e.submit,onCancel:e.close},{default:p((()=>[y(r,{"label-col":{span:6},"wrapper-col":{span:14}},{default:p((()=>[(m(!0),f(b,null,v(e.unit,(a=>(m(),f(b,null,[a.hideForm?h("",!0):(m(),f(n,w({key:0,key:a.dataIndex,label:a.title},e.validateInfos[a.dataIndex]),{default:p((()=>[y(i,{value:e.formItem[String(a.dataIndex)],"onUpdate:value":t=>e.formItem[String(a.dataIndex)]=t},null,8,["value","onUpdate:value"])])),_:2},1040,["label"]))],64)))),256))])),_:1})])),_:1},8,["visible","title","onOk","onCancel"])};const O=n({name:"DProductMaterialUnit",components:{DAdd:M},setup(){const e=r({title:"物料单位",loading:!1,data:[],rowKey:"materialUnitId",showModal:!1,formData:null}),n="/material/unit",u=[];D.forEach((a=>{const{dataIndex:t,rowKey:o,hideTable:l}=a;o&&(e.rowKey=t),l||u.push(a)})),u.push({title:"操作",dataIndex:"action",align:"center",width:"80px",slots:{customRender:"action"}});const c=()=>{e.loading=!0,I({api:n,method:"get"}).then((a=>{e.loading=!1,e.data=a})).catch()},m=()=>{c()},{deleteModal:f}=j();return c(),p=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&i(e,t,a[t]);if(o)for(var t of o(a))d.call(a,t)&&i(e,t,a[t]);return e})({},s(e)),a(p,t({columns:u,query:c,update:m,add:()=>{e.showModal=!0,e.formData={}},deleteData:a=>{const t=a[e.rowKey],o={method:"delete",api:n,data:{[e.rowKey]:t}};f(o,(()=>{m()}))},modify:a=>{e.showModal=!0,e.formData=a}}));var p}}),C=x("刷新"),_=x("新增"),K=x(" 操作 ");O.render=function(e,a,t,o,l,d){const i=c("a-button"),n=c("DownOutlined"),r=c("a-menu-item"),s=c("a-menu"),u=c("a-dropdown"),v=c("d-table"),w=c("d-card"),h=c("d-add");return m(),f(b,null,[y(w,{title:e.title},{default:p((()=>[y(v,{loading:e.loading,columns:e.columns,"data-source":e.data,rowKey:e.rowKey,isSearch:!0},{header:p((()=>[y(i,{type:"primary",onClick:e.query},{default:p((()=>[C])),_:1},8,["onClick"]),y(i,{type:"primary",onClick:e.add},{default:p((()=>[_])),_:1},8,["onClick"])])),action:p((({record:t})=>[y(u,{placement:"bottomCenter"},{overlay:p((()=>[y(s,null,{default:p((()=>[y(r,{key:"modify"},{default:p((()=>[y("a",{onClick:a=>e.modify(t)},"修改",8,["onClick"])])),_:2},1024),y(r,{key:"delete"},{default:p((()=>[y("a",{onClick:a=>e.deleteData(t)},"删除",8,["onClick"])])),_:2},1024)])),_:2},1024)])),default:p((()=>[y("a",{onClick:a[1]||(a[1]=k((()=>{}),["prevent"]))},[K,y(n)])])),_:2},1024)])),_:1},8,["loading","columns","data-source","rowKey"])])),_:1},8,["title"]),y(h,{visible:e.showModal,"onUpdate:visible":a[2]||(a[2]=a=>e.showModal=a),"form-data":e.formData,"is-modify":Boolean(e.formData&&e.formData[e.rowKey]),onUpdate:e.update},null,8,["visible","form-data","is-modify","onUpdate"])],64)};export{O as default};
