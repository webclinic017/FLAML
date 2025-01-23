"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[951],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,m=s["".concat(l,".").concat(f)]||s[f]||g[f]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4177:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(8168),a=(t(6540),t(5680));const o={sidebar_label:"trainer",title:"automl.nlp.huggingface.trainer"},i=void 0,c={unversionedId:"reference/automl/nlp/huggingface/trainer",id:"reference/automl/nlp/huggingface/trainer",isDocsHomePage:!1,title:"automl.nlp.huggingface.trainer",description:"TrainerForAuto Objects",source:"@site/docs/reference/automl/nlp/huggingface/trainer.md",sourceDirName:"reference/automl/nlp/huggingface",slug:"/reference/automl/nlp/huggingface/trainer",permalink:"/FLAML/docs/reference/automl/nlp/huggingface/trainer",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/automl/nlp/huggingface/trainer.md",tags:[],version:"current",frontMatter:{sidebar_label:"trainer",title:"automl.nlp.huggingface.trainer"},sidebar:"referenceSideBar",previous:{title:"histgb",permalink:"/FLAML/docs/reference/automl/contrib/histgb"},next:{title:"training_args",permalink:"/FLAML/docs/reference/automl/nlp/huggingface/training_args"}},l=[{value:"TrainerForAuto Objects",id:"trainerforauto-objects",children:[{value:"evaluate",id:"evaluate",children:[],level:4}],level:2}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.yg)("wrapper",(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"trainerforauto-objects"},"TrainerForAuto Objects"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class TrainerForAuto(Seq2SeqTrainer)\n")),(0,a.yg)("h4",{id:"evaluate"},"evaluate"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'def evaluate(eval_dataset=None, ignore_keys=None, metric_key_prefix="eval")\n')),(0,a.yg)("p",null,"Overriding transformers.Trainer.evaluate by saving metrics and checkpoint path."))}p.isMDXComponent=!0}}]);