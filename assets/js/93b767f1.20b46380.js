"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9928],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4778:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const o={sidebar_label:"state",title:"automl.state"},c=void 0,i={unversionedId:"reference/automl/state",id:"reference/automl/state",isDocsHomePage:!1,title:"automl.state",description:"AutoMLState Objects",source:"@site/docs/reference/automl/state.md",sourceDirName:"reference/automl",slug:"/reference/automl/state",permalink:"/FLAML/docs/reference/automl/state",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/automl/state.md",tags:[],version:"current",frontMatter:{sidebar_label:"state",title:"automl.state"},sidebar:"referenceSideBar",previous:{title:"model",permalink:"/FLAML/docs/reference/automl/model"},next:{title:"estimator",permalink:"/FLAML/docs/reference/default/estimator"}},l=[{value:"AutoMLState Objects",id:"automlstate-objects",children:[{value:"sanitize",id:"sanitize",children:[],level:4}],level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"automlstate-objects"},"AutoMLState Objects"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"class AutoMLState()\n")),(0,a.yg)("h4",{id:"sanitize"},"sanitize"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef sanitize(cls, config: dict) -> dict\n")),(0,a.yg)("p",null,"Make a config ready for passing to estimator."))}u.isMDXComponent=!0}}]);