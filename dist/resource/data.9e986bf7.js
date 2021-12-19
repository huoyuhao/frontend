var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,i=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{d as o,aB as n,aA as s,P as u,az as m,q as c,B as p,a2 as I,T as f,r as v,o as b,c as x,w as y,k as w,g as k,E as M,J as h,as as g,h as O,I as _,j as U,M as T,t as j}from"./vendor.a502bbf1.js";import{p as q}from"./index.6829e04c.js";import{a as D,d as N}from"./index.81a36e1e.js";import{_ as C,e as L}from"./index.b01bbdb3.js";const A=[{title:"唯一标识",dataIndex:"productiveTaskId",rowKey:!0,hideTable:!0,hideForm:!0},{title:"计划名称",dataIndex:"productiveTaskName",required:!0,slots:{customRender:"productiveTaskName"}},{title:"关联单号",dataIndex:"relatedNumber",required:!0},{title:"完⼯⽇期",dataIndex:"requiredDate",required:!0,slots:{customRender:"requiredDate"}},{title:"客户简称",dataIndex:"customName",required:!0},{title:"⽬标物料",dataIndex:"targetMaterialId",hideTable:!0},{title:"⽬标物料",dataIndex:"targetMaterialName",hideForm:!0},{title:"⽬标物料数量",dataIndex:"targetMaterialNum",required:!0},{title:"原材料",dataIndex:"rawMaterialList",required:!0,hideTable:!0,slots:{customRender:"rawMaterialList"}},{title:"紧急程度",dataIndex:"productiveTaskUrgency",required:!0,slots:{customRender:"productiveTaskUrgency"}},{title:"状况",dataIndex:"productiveTaskStatus",required:!0,slots:{customRender:"productiveTaskStatus"}},{title:"负责⼈",dataIndex:"ownerId",required:!0,slots:{customRender:"user"}},{title:"审核⼈",dataIndex:"auditorId",required:!0,slots:{customRender:"user"}},{title:"备注",dataIndex:"description"}],R=[{title:"物料ID",dataIndex:"rawMaterialId",rowKey:!0},{title:"物料代码",dataIndex:"rawMaterialCode"},{title:"物料名称",dataIndex:"rawMaterialName"},{title:"物料数量",dataIndex:"rawMaterialNum"}],K=o({name:"DAddTaskData",components:{"a-radio-group":n.Group,"a-radio-button":n.Button,MinusCircleOutlined:s,PlusOutlined:u},props:{visible:{required:!0,type:Boolean,default:!1},formData:{type:Object,default:()=>null},isModify:{required:!0,type:Boolean,default:!1},materialArr:Array,materialObj:Object},setup(a,{emit:e}){const t=m("userArr"),l=c({}),r=c({});A.forEach((a=>{const{title:e,dataIndex:t}=a;a.required&&(r[t]=[{required:!0,message:`${e}不能为空！`}]),l[t]=""}));const{useForm:d}=I,{resetFields:i,validate:o,validateInfos:n}=d(l,r),{visibleModal:s,close:u,submit:v}=D(p(a),e,{resetFields:i,validate:o},{formItem:l,api:"/productive/task"});return{bomDetail:()=>l.targetMaterialId?!l.targetMaterialNum>0?f.error("请先输入目标物料数量"):void q({api:`bom?targetMaterialId=${l.targetMaterialId}`,method:"get"}).then((a=>{if(0===a.length)return f.error("没有该物料的BOM单信息。");const[e]=a;l.rawMaterialList=e.rawMaterialList.map((a=>({rawMaterialId:a.rawMaterialId,rawMaterialNum:a.rawMaterialNum*l.targetMaterialNum})))})).catch():f.error("请先选择目标物料信息"),addRawMaterialList:()=>{l.rawMaterialList.push({rawMaterialId:null,rawMaterialNum:null})},removeRawMaterialList:a=>{const e=l.rawMaterialList.indexOf(a);-1!==e&&l.rawMaterialList.splice(e,1)},list:A,formItem:l,visibleModal:s,validateInfos:n,close:u,submit:v,userArr:t}}}),P=_("正常"),B=_("紧急"),S=_("正常"),F=_("异常"),$=_(" 新增物料 "),E=U("p",{style:{color:"#1890ff"}},"按BOM分析",-1);const z=o({name:"DProduceTaskData",components:{DAdd:C(K,[["render",function(a,e,t,l,r,d){const i=v("a-select"),o=v("a-form-item"),n=v("a-date-picker"),s=v("a-radio-button"),u=v("a-radio-group"),m=v("a-input-number"),c=v("a-col"),p=v("MinusCircleOutlined"),I=v("a-row"),f=v("PlusOutlined"),_=v("a-button"),U=v("a-input"),T=v("a-form"),j=v("a-modal");return b(),x(j,{visible:a.visibleModal,"onUpdate:visible":e[0]||(e[0]=e=>a.visibleModal=e),title:a.isModify?"修改":"新增",width:"800px",cancelText:"取消",okText:"提交",onOk:a.submit,onCancel:a.close},{default:y((()=>[w(T,{"label-col":{span:6},"wrapper-col":{span:14}},{default:y((()=>[(b(!0),k(h,null,M(a.list,(e=>(b(),k(h,null,["targetMaterialId"===e.dataIndex?(b(),x(o,g({key:0,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:y((()=>[w(i,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,placeholder:"请选择","show-search":"","option-filter-prop":"label",options:a.materialArr},null,8,["value","onUpdate:value","options"])])),_:2},1040,["label"])):"requiredDate"===e.dataIndex?(b(),x(o,g({key:1,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:y((()=>[w(n,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,type:"date",placeholder:"请选择",style:{width:"100%"}},null,8,["value","onUpdate:value"])])),_:2},1040,["label"])):"productiveTaskUrgency"===e.dataIndex?(b(),x(o,g({key:2,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:y((()=>[w(u,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,"button-style":"solid"},{default:y((()=>[w(s,{value:0},{default:y((()=>[P])),_:1}),w(s,{value:1},{default:y((()=>[B])),_:1})])),_:2},1032,["value","onUpdate:value"])])),_:2},1040,["label"])):"productiveTaskStatus"===e.dataIndex?(b(),x(o,g({key:3,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:y((()=>[w(u,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,"button-style":"solid"},{default:y((()=>[w(s,{value:0},{default:y((()=>[S])),_:1}),w(s,{value:1},{default:y((()=>[F])),_:1})])),_:2},1032,["value","onUpdate:value"])])),_:2},1040,["label"])):"targetMaterialNum"===e.dataIndex?(b(),x(o,g({key:4,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:y((()=>[w(m,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,placeholder:`请输入${e.title}`},null,8,["value","onUpdate:value","placeholder"])])),_:2},1040,["label"])):["ownerId","auditorId"].includes(e.dataIndex)?(b(),x(o,g({key:5,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:y((()=>[w(i,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,placeholder:"请选择","show-search":"","option-filter-prop":"label",options:a.userArr},null,8,["value","onUpdate:value","options"])])),_:2},1040,["label"])):"rawMaterialList"===e.dataIndex?(b(),k(h,{key:6},[(b(!0),k(h,null,M(a.formItem.rawMaterialList,((t,l)=>(b(),x(o,{key:t+e+l,label:e.title,name:["domains1",l,"value"]},{default:y((()=>[w(I,{align:"middle"},{default:y((()=>[w(c,{span:"8"},{default:y((()=>[w(i,{value:t.rawMaterialId,"onUpdate:value":a=>t.rawMaterialId=a,placeholder:"请选择","show-search":"","option-filter-prop":"label",options:a.materialArr},null,8,["value","onUpdate:value","options"])])),_:2},1024),w(c,{span:"11",offset:"2"},{default:y((()=>[w(m,{value:t.rawMaterialNum,"onUpdate:value":a=>t.rawMaterialNum=a,placeholder:"请输入原材料数量",formatter:e=>`${e}${a.materialObj[t.rawMaterialId]||""}`,parser:e=>e.replace(`${a.materialObj[t.rawMaterialId]||""}`,"")},null,8,["value","onUpdate:value","formatter","parser"])])),_:2},1024),w(c,{span:"1"},{default:y((()=>[a.formItem.rawMaterialList.length>1?(b(),x(p,{key:0,class:"dynamic-delete-button",disabled:1===a.formItem.rawMaterialList.length,onClick:e=>a.removeRawMaterialList(t)},null,8,["disabled","onClick"])):O("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","name"])))),128)),w(o,{key:e.dataIndex,label:"物料操作"},{default:y((()=>[w(I,{align:"middle"},{default:y((()=>[w(c,{span:"9",offset:"2"},{default:y((()=>[w(_,{type:"dashed",block:"",onClick:a.addRawMaterialList},{default:y((()=>[w(f),$])),_:1},8,["onClick"])])),_:1}),w(c,{span:"9",offset:"2"},{default:y((()=>[w(_,{type:"dashed",block:"",onClick:a.bomDetail},{default:y((()=>[E])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:2},1024)],64)):e.hideForm?O("",!0):(b(),x(o,g({key:7,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:y((()=>[w(U,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t},null,8,["value","onUpdate:value"])])),_:2},1040,["label"]))],64)))),256))])),_:1})])),_:1},8,["visible","title","onOk","onCancel"])}]])},setup(){const a=m("userNameObj"),o=T(),n=c({title:"生产计划",loading:!1,data:[],rowKey:"",showModal:!1,formData:null,materialArr:[],materialObj:{},taskMaterial:R}),s="/productive/task",u=[];A.forEach((a=>{const{dataIndex:e,rowKey:t,hideTable:l}=a;t&&(n.rowKey=e),l||u.push(a)})),u.push({title:"操作",dataIndex:"action",align:"center",width:"80px",slots:{customRender:"action"}});const I=()=>{n.loading=!0,q({api:s,method:"get"}).then((a=>{n.loading=!1,n.data=a})).catch(),q({api:"/material",method:"get"}).then((a=>{n.materialArr=[],n.materialObj={},a.forEach((a=>{var e;n.materialArr.push({value:a.materialId,label:a.materialName}),n.materialObj[a.materialId]=(null==(e=null==a?void 0:a.materialUnit)?void 0:e.materialUnitName)||""}))})).catch()},f=()=>{I()},{deleteModal:v}=N();return I(),b=((a,e)=>{for(var t in e||(e={}))r.call(e,t)&&i(a,t,e[t]);if(l)for(var t of l(e))d.call(e,t)&&i(a,t,e[t]);return a})({},p(n)),e(b,t({userNameObj:a,columns:u,routeLink:a=>{const{productiveTaskId:e}=a;o.push({path:"/produce/task/detail/detail",query:{productiveTaskId:e}})},query:I,update:f,add:()=>{n.showModal=!0,n.formData={productiveTaskUrgency:0,productiveTaskStatus:0,rawMaterialList:[]}},deleteData:a=>{const e=a[n.rowKey],t={method:"delete",api:s,data:{[n.rowKey]:e}};v(t,(()=>{f()}))},getTime:L,modify:a=>{n.showModal=!0,n.formData=a}}));var b}}),G=_("刷新"),J=_("新增"),H=["onClick"],Q=_("删除");var V=C(z,[["render",function(a,e,t,l,r,d){const i=v("a-button"),o=v("d-table"),n=v("d-card"),s=v("d-add");return b(),k(h,null,[w(n,{title:a.title},{default:y((()=>[w(o,{loading:a.loading,columns:a.columns,"data-source":a.data,rowKey:a.rowKey,isSearch:!0},{header:y((()=>[w(i,{type:"primary",onClick:a.query},{default:y((()=>[G])),_:1},8,["onClick"]),w(i,{type:"primary",onClick:a.add},{default:y((()=>[J])),_:1},8,["onClick"])])),productiveTaskName:y((({record:e,text:t})=>[U("a",{onClick:t=>a.routeLink(e)},j(t),9,H)])),requiredDate:y((({text:e})=>[U("p",null,j(a.getTime(e)),1)])),productiveTaskUrgency:y((({text:a})=>[U("p",null,j(1===a?"紧急":"正常"),1)])),productiveTaskStatus:y((({text:a})=>[U("p",null,j(1===a?"异常":"正常"),1)])),user:y((({text:e})=>[U("p",null,j(a.userNameObj[e]||e),1)])),action:y((({record:e})=>[w(i,{type:"primary",size:"small",onClick:t=>a.deleteData(e)},{default:y((()=>[Q])),_:2},1032,["onClick"])])),expandedRowRender:y((({record:e})=>[w(o,{columns:a.taskMaterial,"data-source":e.rawMaterialList,rowKey:"rawMaterialId"},null,8,["columns","data-source"])])),_:1},8,["loading","columns","data-source","rowKey"])])),_:1},8,["title"]),w(s,{visible:a.showModal,"onUpdate:visible":e[0]||(e[0]=e=>a.showModal=e),"form-data":a.formData,"is-modify":Boolean(a.formData&&a.formData[a.rowKey]),materialArr:a.materialArr,materialObj:a.materialObj,onUpdate:a.update},null,8,["visible","form-data","is-modify","materialArr","materialObj","onUpdate"])],64)}]]);export{V as default};