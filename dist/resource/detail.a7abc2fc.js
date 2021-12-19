var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{d as i,q as s,B as n,f as u,x as m,a2 as c,r as p,o as I,c as f,w as b,k as v,g as h,E as w,J as k,as as y,h as x,u as M,T as g,j as T,t as O,aw as j,I as _}from"./vendor.a502bbf1.js";import{p as N}from"./index.6829e04c.js";import{a as U,d as C,m as D}from"./index.81a36e1e.js";import{_ as P,e as S}from"./index.b01bbdb3.js";const q=[{title:"唯一标识",dataIndex:"productiveSubTaskId",rowKey:!0,hideTable:!0,hideForm:!0},{title:"⼯序名称",dataIndex:"productiveSubTaskName",hideForm:!0,required:!0},{title:"⽣产计划",dataIndex:"productiveTaskId",hideForm:!0,hideTable:!0,required:!0},{title:"⽬标物料",dataIndex:"targetMaterialId",hideTable:!0,hideForm:!0},{title:"⽬标物料",dataIndex:"targetMaterialName",hideForm:!0},{title:"标准⼯序",dataIndex:"standardProcessId",required:!0},{title:"物料数量",dataIndex:"targetMaterialNum"},{title:"⼯序状态",dataIndex:"productiveSubTaskStatus",hideForm:!0},{title:"原材料",dataIndex:"rawMaterialList",hideTable:!0,slots:{customRender:"rawMaterialList"}},{title:"计划开始时间",dataIndex:"scheduledStartTime",required:!0,slots:{customRender:"date"}},{title:"计划结束时间",dataIndex:"scheduledEndTime",required:!0,slots:{customRender:"date"}},{title:"描述",dataIndex:"description"}],A=[{title:"物料ID",dataIndex:"rawMaterialId",rowKey:!0},{title:"物料代码",dataIndex:"rawMaterialCode"},{title:"物料名称",dataIndex:"rawMaterialName"},{title:"物料数量",dataIndex:"rawMaterialNum"}],K=i({name:"DAddTaskData",components:{},props:{visible:{required:!0,type:Boolean,default:!1},formData:{type:Object,default:()=>null},isModify:{required:!0,type:Boolean,default:!1},materialArr:Array,materialObj:Object},setup(a,{emit:e}){const t=s({}),l=s({});q.forEach((a=>{const{title:e,dataIndex:d}=a;a.required&&(l[d]=[{required:!0,message:`${e}不能为空！`}]),t[d]=""}));const{useForm:d}=c,{resetFields:r,validate:o,validateInfos:i}=d(t,l),{visibleModal:p,close:I,submit:f}=U(n(a),e,{resetFields:r,validate:o},{formItem:t,api:"/productive/sub/task"}),b=u(null),v=u([]);return m((()=>[t.standardProcessId,t.targetMaterialNum]),(()=>{if(t.standardProcessId){if(!t.targetMaterialNum)return;const{targetMaterialId:a,standardProcessName:e,rawMaterialList:l}=b[t.standardProcessId];t.targetMaterialId=a,t.productiveSubTaskName=e,t.rawMaterialList=l.map((a=>({rawMaterialId:a.rawMaterialId,rawMaterialNum:a.rawMaterialNum*t.targetMaterialNum})))}})),N({api:"/standard/process",method:"get"}).then((a=>{v.value=[],b.value={},a.forEach((a=>{v.value.push({value:a.standardProcessId,label:a.standardProcessName}),b[a.standardProcessId]=a}))})).catch(),{processArr:v,detail:q,formItem:t,visibleModal:p,validateInfos:i,close:I,submit:f}}});const F=i({name:"DProduceTaskDetail",components:{DAdd:P(K,[["render",function(a,e,t,l,d,r){const o=p("a-select"),i=p("a-form-item"),s=p("a-date-picker"),n=p("a-input-number"),u=p("a-col"),m=p("a-row"),c=p("a-input"),M=p("a-form"),g=p("a-modal");return I(),f(g,{visible:a.visibleModal,"onUpdate:visible":e[0]||(e[0]=e=>a.visibleModal=e),title:a.isModify?"修改":"新增",width:"800px",cancelText:"取消",okText:"提交",onOk:a.submit,onCancel:a.close},{default:b((()=>[v(M,{"label-col":{span:6},"wrapper-col":{span:14}},{default:b((()=>[(I(!0),h(k,null,w(a.detail,(e=>(I(),h(k,null,["standardProcessId"===e.dataIndex?(I(),f(i,y({key:0,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:b((()=>[v(o,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,placeholder:"请选择","show-search":"","option-filter-prop":"label",options:a.processArr},null,8,["value","onUpdate:value","options"])])),_:2},1040,["label"])):["scheduledStartTime","scheduledEndTime"].includes(e.dataIndex)?(I(),f(i,y({key:1,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:b((()=>[v(s,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,type:"date",placeholder:"请选择",style:{width:"100%"}},null,8,["value","onUpdate:value"])])),_:2},1040,["label"])):"targetMaterialNum"===e.dataIndex?(I(),f(i,y({key:2,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:b((()=>[v(n,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t,placeholder:`请输入${e.title}`},null,8,["value","onUpdate:value","placeholder"])])),_:2},1040,["label"])):"rawMaterialList"===e.dataIndex?(I(!0),h(k,{key:3},w(a.formItem.rawMaterialList,((t,l)=>(I(),f(i,{key:t+e+l,label:e.title,disabled:!0,name:["domains1",l,"value"]},{default:b((()=>[v(m,{align:"middle"},{default:b((()=>[v(u,{span:"8"},{default:b((()=>[v(o,{value:t.rawMaterialId,"onUpdate:value":a=>t.rawMaterialId=a,placeholder:"请选择","show-search":"","option-filter-prop":"label",options:a.materialArr},null,8,["value","onUpdate:value","options"])])),_:2},1024),v(u,{span:"11",offset:"2"},{default:b((()=>[v(n,{value:t.rawMaterialNum,"onUpdate:value":a=>t.rawMaterialNum=a,placeholder:"请输入原材料数量",formatter:e=>`${e}${a.materialObj[t.rawMaterialId]||""}`,parser:e=>e.replace(`${a.materialObj[t.rawMaterialId]||""}`,"")},null,8,["value","onUpdate:value","formatter","parser"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","name"])))),128)):e.hideForm?x("",!0):(I(),f(i,y({key:4,key:e.dataIndex,label:e.title},a.validateInfos[e.dataIndex]),{default:b((()=>[v(c,{value:a.formItem[e.dataIndex],"onUpdate:value":t=>a.formItem[e.dataIndex]=t},null,8,["value","onUpdate:value"])])),_:2},1040,["label"]))],64)))),256))])),_:1})])),_:1},8,["visible","title","onOk","onCancel"])}]])},setup(){const a=M(),i=s({title:"生产计划工序",loading:!1,data:[],rowKey:"",showModal:!1,formData:null,materialArr:[],materialObj:{},taskMaterial:A}),{productiveTaskId:u}=a.query,m=`/productive/sub/task?productiveTaskId=${u}`,c=[];q.forEach((a=>{const{dataIndex:e,rowKey:t,hideTable:l}=a;t&&(i.rowKey=e),l||c.push(a)})),c.push({title:"操作",dataIndex:"action",align:"center",width:"80px",slots:{customRender:"action"}});const p=()=>{i.loading=!0,N({api:m,method:"get"}).then((a=>{i.loading=!1,i.data=a})).catch(),N({api:"/material",method:"get"}).then((a=>{i.materialArr=[],i.materialObj={},a.forEach((a=>{var e;i.materialArr.push({value:a.materialId,label:a.materialName}),i.materialObj[a.materialId]=(null==(e=null==a?void 0:a.materialUnit)?void 0:e.materialUnitName)||""}))})).catch()},I=()=>{p()},{deleteModal:f}=C();return p(),b=((a,e)=>{for(var t in e||(e={}))d.call(e,t)&&o(a,t,e[t]);if(l)for(var t of l(e))r.call(e,t)&&o(a,t,e[t]);return a})({},n(i)),e(b,t({columns:c,query:p,update:I,add:()=>{i.showModal=!0,i.formData={productiveTaskId:u,rawMaterialList:[]}},deleteData:a=>{const e=a[i.rowKey],t={method:"delete",api:m,data:{[i.rowKey]:e}};f(t,(()=>{I()}))},taskStatus:(a,e)=>{const{confirmModal:t}=D();t({title:"修改工序状态提示",content:"此操作将修改工序状态, 是否继续?"},(()=>{const{productiveSubTaskId:t}=a;N({api:`/productive/sub/task/${e}?productiveSubTaskId=${t}`,method:"put",data:{productiveSubTaskId:t}}).then((()=>{g.success("修改工序状态成功"),I()})).catch()}))},getTime:S,modify:a=>{i.showModal=!0,i.formData=a}}));var b}}),E=_("刷新"),L=_("新增"),$=_(" 操作 "),R=["onClick"],B=["onClick"],J=["onClick"],z=["onClick"];var G=P(F,[["render",function(a,e,t,l,d,r){const o=p("a-button"),i=p("DownOutlined"),s=p("a-menu-item"),n=p("a-menu"),u=p("a-dropdown"),m=p("d-table"),c=p("d-card"),f=p("d-add");return I(),h(k,null,[v(c,{title:a.title},{default:b((()=>[v(m,{loading:a.loading,columns:a.columns,"data-source":a.data,rowKey:a.rowKey,isSearch:!0},{header:b((()=>[v(o,{type:"primary",onClick:a.query},{default:b((()=>[E])),_:1},8,["onClick"]),v(o,{type:"primary",onClick:a.add},{default:b((()=>[L])),_:1},8,["onClick"])])),date:b((({text:e})=>[T("p",null,O(a.getTime(e)),1)])),action:b((({record:t})=>[v(u,{placement:"bottomCenter"},{overlay:b((()=>[v(n,null,{default:b((()=>[v(s,{key:"start"},{default:b((()=>[T("a",{onClick:e=>a.taskStatus(t,"start")},"启动",8,R)])),_:2},1024),v(s,{key:"finish"},{default:b((()=>[T("a",{onClick:e=>a.taskStatus(t,"finish")},"完成",8,B)])),_:2},1024),v(s,{key:"delete"},{default:b((()=>[T("a",{onClick:e=>a.deleteData(t)},"删除",8,J)])),_:2},1024),v(s,{key:"note"},{default:b((()=>[T("a",{onClick:e=>a.note(t)},"领料出库",8,z)])),_:2},1024)])),_:2},1024)])),default:b((()=>[T("a",{onClick:e[0]||(e[0]=j((()=>{}),["prevent"]))},[$,v(i)])])),_:2},1024)])),expandedRowRender:b((({record:e})=>[v(m,{columns:a.taskMaterial,"data-source":e.rawMaterialList,rowKey:"rawMaterialId"},null,8,["columns","data-source"])])),_:1},8,["loading","columns","data-source","rowKey"])])),_:1},8,["title"]),v(f,{visible:a.showModal,"onUpdate:visible":e[1]||(e[1]=e=>a.showModal=e),"form-data":a.formData,"is-modify":Boolean(a.formData&&a.formData[a.rowKey]),materialArr:a.materialArr,materialObj:a.materialObj,onUpdate:a.update},null,8,["visible","form-data","is-modify","materialArr","materialObj","onUpdate"])],64)}]]);export{G as default};
