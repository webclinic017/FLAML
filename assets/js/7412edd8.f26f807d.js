"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6496],{5680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>y});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||l;return n?t.createElement(d,o(o({ref:r},u),{},{components:n})):t.createElement(d,o({ref:r},u))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},574:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(8168),a=(n(6540),n(5680));const l={sidebar_label:"ml",title:"automl.ml"},o=void 0,i={unversionedId:"reference/automl/ml",id:"reference/automl/ml",isDocsHomePage:!1,title:"automl.ml",description:"sklearn\\metric\\loss\\_score",source:"@site/docs/reference/automl/ml.md",sourceDirName:"reference/automl",slug:"/reference/automl/ml",permalink:"/FLAML/docs/reference/automl/ml",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/automl/ml.md",tags:[],version:"current",frontMatter:{sidebar_label:"ml",title:"automl.ml"},sidebar:"referenceSideBar",previous:{title:"data",permalink:"/FLAML/docs/reference/automl/data"},next:{title:"model",permalink:"/FLAML/docs/reference/automl/model"}},s=[{value:"sklearn_metric_loss_score",id:"sklearn_metric_loss_score",children:[],level:4},{value:"norm_confusion_matrix",id:"norm_confusion_matrix",children:[],level:4},{value:"multi_class_curves",id:"multi_class_curves",children:[],level:4}],c={toc:s};function u(e){let{components:r,...n}=e;return(0,a.yg)("wrapper",(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h4",{id:"sklearn_metric_loss_score"},"sklearn","_","metric","_","loss","_","score"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def sklearn_metric_loss_score(metric_name: str, y_predict, y_true, labels=None, sample_weight=None, groups=None)\n")),(0,a.yg)("p",null,"Loss using the specified metric."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"metric_name")," - A string of the metric name, one of\n'r2', 'rmse', 'mae', 'mse', 'accuracy', 'roc_auc', 'roc_auc_ovr',\n'roc_auc_ovo', 'roc_auc_weighted', 'roc_auc_ovo_weighted', 'roc_auc_ovr_weighted',\n'log_loss', 'mape', 'f1', 'ap', 'ndcg', 'micro_f1', 'macro_f1'."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"y_predict")," - A 1d or 2d numpy array of the predictions which can be\nused to calculate the metric. E.g., 2d for log_loss and 1d\nfor others."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"y_true")," - A 1d numpy array of the true labels."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"labels")," - A list or an array of the unique labels."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"sample_weight")," - A 1d numpy array of the sample weight."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"groups")," - A 1d numpy array of the group labels.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"score")," - A float number of the loss, the lower the better.")),(0,a.yg)("h4",{id:"norm_confusion_matrix"},"norm","_","confusion","_","matrix"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def norm_confusion_matrix(y_true: Union[np.array, Series], y_pred: Union[np.array, Series])\n")),(0,a.yg)("p",null,"normalized confusion matrix."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"estimator")," - A multi-class classification estimator."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"y_true")," - A numpy array or a pandas series of true labels."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"y_pred")," - A numpy array or a pandas series of predicted labels.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns"),":"),(0,a.yg)("p",null,"  A normalized confusion matrix."),(0,a.yg)("h4",{id:"multi_class_curves"},"multi","_","class","_","curves"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"def multi_class_curves(y_true: Union[np.array, Series], y_pred_proba: Union[np.array, Series], curve_func: Callable)\n")),(0,a.yg)("p",null,"Binarize the data for multi-class tasks and produce ROC or precision-recall curves."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Arguments"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"y_true")," - A numpy array or a pandas series of true labels."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"y_pred_proba")," - A numpy array or a pandas dataframe of predicted probabilites."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"curve_func")," - A function to produce a curve (e.g., roc_curve or precision_recall_curve).")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Returns"),":"),(0,a.yg)("p",null,"  A tuple of two dictionaries with the same set of keys (class indices).\nThe first dictionary curve_x stores the x coordinates of each curve, e.g.,\ncurve_x","[0]"," is an 1D array of the x coordinates of class 0.\nThe second dictionary curve_y stores the y coordinates of each curve, e.g.,\ncurve_y","[0]"," is an 1D array of the y coordinates of class 0."))}u.isMDXComponent=!0}}]);