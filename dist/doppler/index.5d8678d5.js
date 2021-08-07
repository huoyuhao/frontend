import{a3 as e,h as t,aq as r,f as n,x as a,ar as i,N as o,as as c,at as l,q as u,au as s,av as f,aw as v,ax as d,ay as h,az as g,aA as p,aB as m}from"./vendor.d65cd52f.js";import{p as b}from"./index.295a8195.js";import{g as y}from"./index.863982d0.js";const O=()=>({deleteModal:(n,a)=>{const{confirmModal:i}={confirmModal:({title:n,content:a,width:i},o,c)=>{e.confirm({title:n||"提示",icon:t(r),width:i,content:a||"执行该操作后不可回退，是否继续？",cancelText:"取消",okText:"确定",closable:!0,maskClosable:!0,onOk(){o&&o()},onCancel(){c&&c()}})},infoModal:({title:n,content:a,width:i},o)=>{e.info({title:n||"提示",icon:t(r),width:i,content:a,cancelText:"",okText:"确定",closable:!0,maskClosable:!0,onOk(){o&&o()}})}};i({title:"删除提示",content:"此操作将永久删除该内容, 是否继续?"},(()=>{b(n).then((e=>{o.success("删除成功"),a&&a(e)})).catch()}))}}),j=(e,t,{resetFields:r,validate:c},{formItem:l,api:u})=>{let s="";const f=n(!1),{formData:v,visible:d,isModify:h}=e;a([d,h],(([e,t],[,n])=>{f.value=e,e&&(t===n||t||r(),y(l,i(v.value)),s=JSON.stringify(l))}));const g=()=>{t("update:visible",!1)};return{visibleModal:f,close:g,submit:()=>{c().then((()=>{if(h.value&&JSON.stringify(l)===s)return o.error("没有任何修改!");const e=h.value?"修改":"添加",n=h.value?"put":"post",a={};Object.keys(l).forEach((e=>{l[e]&&(a[e]=l[e])}));b({api:u,method:n,data:a}).then((()=>{o.success(`${e}成功`),r(),g(),t("update")})).catch((()=>{}))})).catch((e=>{console.log(e)}))}}};function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e){var t=!1;return e&&e.length&&e.every((function(e){return!e.required||(t=!0,!1)})),t}function A(e){return null==e?[]:Array.isArray(e)?e:[e]}function P(e,t,r){for(var n=e,a=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i=0,o=a.length;i<o-1&&(n||r);++i){var c=a[i];if(!(c in n)){if(r)throw new Error("please transfer a valid name path to validate!");break}n=n[c]}return{o:n,k:a[i],v:n?n[a[i]]:null,isValid:n&&a[i]in n}}function q(e,t,r){var n=l(e),i={};Object.keys(t).forEach((function(e){i[e]={autoLink:!1,required:x(t[e])}})),i=u(i);var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.length?e.filter((function(e){var r=A(e.trigger||"change");return m(r,t).length})):e},c=null,b=function(e,t,r,n){var a=f([e],t,r,k({validateMessages:v},n),!!n.validateFirst);return i[e].validateStatus="validating",a.catch((function(e){return e})).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===i[e].validateStatus&&(i[e].validateStatus=t.length?"error":"success",i[e].help=t[0])})),a},y=function(r,n){var a=[],i=!0;r?a=Array.isArray(r)?r:[r]:(i=!1,a=Object.keys(t));var l=function(r){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,i=[],l={},u=function(c){var u=r[c],s=P(e,u,a);if(!s.isValid)return"continue";l[u]=s.v;var f=o(t[u],A(n&&n.trigger));f.length&&i.push(b(u,s.v,f,n||{}).then((function(){return{name:u,errors:[]}})).catch((function(e){return Promise.reject({name:u,errors:e})})))},s=0;s<r.length;s++)u(s);var f=g(i);c=f;var v=f.then((function(){return c===f?Promise.resolve(l):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:l,errorFields:t,outOfDate:c!==f})}));return v.catch((function(e){return e})),v}(a,n||{},i);return l.catch((function(e){return e})),l},O=n,j=function(e){var r=[];Object.keys(t).forEach((function(t){var n=P(e,t,!1),a=P(O,t,!1);p(n.v,a.v)||r.push(t)})),y(r,{trigger:"change"}),O=l(e)},w=null==r?void 0:r.debounce;return a(e,w&&w.wait?d(j,w.wait,h(w,["wait"])):j,{immediate:r&&!!r.immediate,deep:!0}),a(t,(function(){r&&r.validateOnRuleChange&&y()}),{deep:!0}),{modelRef:e,rulesRef:t,initialModel:n,validateInfos:i,resetFields:function(r){S(e,k({},l(n),r)),s((function(){Object.keys(i).forEach((function(e){i[e]={autoLink:!1,required:x(t[e])}}))}))},validate:y,validateField:b,mergeValidateInfo:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={autoLink:!1},r=[],n=Array.isArray(e)?e:[e],a=0;a<n.length;a++){var i=n[a];"error"===(null==i?void 0:i.validateStatus)&&(t.validateStatus="error",i.help&&r.push(i.help)),t.required=t.required||(null==i?void 0:i.required)}return t.help=r.join("\n"),t},clearValidate:function(e){(e?Array.isArray(e)?e:[e]:Object.keys(t)).forEach((function(e){i[e]&&S(i[e],{validateStatus:"",help:""})}))}}}c("","success","warning","error","validating");export{j as a,O as d,q as u};
