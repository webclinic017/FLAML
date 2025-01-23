"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6731],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>u});var a=r(6540);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,m=function(e,t){if(null==e)return{};var r,a,m={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(m[r]=e[r]);return m}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(m[r]=e[r])}return m}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,m=e.mdxType,n=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=o(r),u=m,A=c["".concat(s,".").concat(u)]||c[u]||p[u]||n;return r?a.createElement(A,l(l({ref:t},g),{},{components:r})):a.createElement(A,l({ref:t},g))}));function u(e,t){var r=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var n=r.length,l=new Array(n);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:m,l[1]=i;for(var o=2;o<n;o++)l[o]=r[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7799:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(8168),m=(r(6540),r(5680));const n={},l="AutoML for LightGBM",i={unversionedId:"Examples/AutoML-for-LightGBM",id:"Examples/AutoML-for-LightGBM",isDocsHomePage:!1,title:"AutoML for LightGBM",description:"Prerequisites for this example",source:"@site/docs/Examples/AutoML-for-LightGBM.md",sourceDirName:"Examples",slug:"/Examples/AutoML-for-LightGBM",permalink:"/FLAML/docs/Examples/AutoML-for-LightGBM",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/AutoML-for-LightGBM.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoML - Time Series Forecast",permalink:"/FLAML/docs/Examples/AutoML-Time series forecast"},next:{title:"AutoML for XGBoost",permalink:"/FLAML/docs/Examples/AutoML-for-XGBoost"}},s=[{value:"Prerequisites for this example",id:"prerequisites-for-this-example",children:[],level:3},{value:"Use built-in LGBMEstimator",id:"use-built-in-lgbmestimator",children:[{value:"Sample output",id:"sample-output",children:[],level:4},{value:"Retrieve best config",id:"retrieve-best-config",children:[],level:4},{value:"Plot feature importance",id:"plot-feature-importance",children:[],level:4},{value:"Compute predictions of testing dataset",id:"compute-predictions-of-testing-dataset",children:[],level:4},{value:"Compute different metric values on testing dataset",id:"compute-different-metric-values-on-testing-dataset",children:[],level:4},{value:"Compare with untuned LightGBM",id:"compare-with-untuned-lightgbm",children:[],level:4},{value:"Plot learning curve",id:"plot-learning-curve",children:[],level:4}],level:3},{value:"Use a customized LightGBM learner",id:"use-a-customized-lightgbm-learner",children:[{value:"Create a customized LightGBM learner with a custom objective function",id:"create-a-customized-lightgbm-learner-with-a-custom-objective-function",children:[],level:4},{value:"Add the customized learner and tune it",id:"add-the-customized-learner-and-tune-it",children:[],level:4}],level:3}],o={toc:s};function g(e){let{components:t,...n}=e;return(0,m.yg)("wrapper",(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,m.yg)("h1",{id:"automl-for-lightgbm"},"AutoML for LightGBM"),(0,m.yg)("h3",{id:"prerequisites-for-this-example"},"Prerequisites for this example"),(0,m.yg)("p",null,"Install the ","[","automl","]"," option."),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-bash"},'pip install "flaml[automl] matplotlib openml"\n')),(0,m.yg)("h3",{id:"use-built-in-lgbmestimator"},"Use built-in LGBMEstimator"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},'from flaml import AutoML\nfrom flaml.automl.data import load_openml_dataset\n\n# Download [houses dataset](https://www.openml.org/d/537) from OpenML. The task is to predict median price of the house in the region based on demographic composition and a state of housing market in the region.\nX_train, X_test, y_train, y_test = load_openml_dataset(dataset_id=537, data_dir="./")\n\nautoml = AutoML()\nsettings = {\n    "time_budget": 60,  # total running time in seconds\n    "metric": "r2",  # primary metrics for regression can be chosen from: [\'mae\',\'mse\',\'r2\']\n    "estimator_list": ["lgbm"],  # list of ML learners; we tune lightgbm in this example\n    "task": "regression",  # task type\n    "log_file_name": "houses_experiment.log",  # flaml log file\n    "seed": 7654321,  # random seed\n}\nautoml.fit(X_train=X_train, y_train=y_train, **settings)\n')),(0,m.yg)("p",null,(0,m.yg)("strong",{parentName:"p"},"Note"),": You can access the best model's estimator using ",(0,m.yg)("inlineCode",{parentName:"p"},"automl.model.estimator"),"."),(0,m.yg)("h4",{id:"sample-output"},"Sample output"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre"},"[flaml.automl: 11-15 19:46:44] {1485} INFO - Data split method: uniform\n[flaml.automl: 11-15 19:46:44] {1489} INFO - Evaluation method: cv\n[flaml.automl: 11-15 19:46:44] {1540} INFO - Minimizing error metric: 1-r2\n[flaml.automl: 11-15 19:46:44] {1577} INFO - List of ML learners in AutoML Run: ['lgbm']\n[flaml.automl: 11-15 19:46:44] {1826} INFO - iteration 0, current learner lgbm\n[flaml.automl: 11-15 19:46:44] {1944} INFO - Estimated sufficient time budget=3232s. Estimated necessary time budget=3s.\n[flaml.automl: 11-15 19:46:44] {2029} INFO -  at 0.5s,  estimator lgbm's best error=0.7383, best estimator lgbm's best error=0.7383\n[flaml.automl: 11-15 19:46:44] {1826} INFO - iteration 1, current learner lgbm\n[flaml.automl: 11-15 19:46:44] {2029} INFO -  at 0.6s,  estimator lgbm's best error=0.4774, best estimator lgbm's best error=0.4774\n[flaml.automl: 11-15 19:46:44] {1826} INFO - iteration 2, current learner lgbm\n[flaml.automl: 11-15 19:46:44] {2029} INFO -  at 0.7s,  estimator lgbm's best error=0.4774, best estimator lgbm's best error=0.4774\n[flaml.automl: 11-15 19:46:44] {1826} INFO - iteration 3, current learner lgbm\n[flaml.automl: 11-15 19:46:44] {2029} INFO -  at 0.9s,  estimator lgbm's best error=0.2985, best estimator lgbm's best error=0.2985\n[flaml.automl: 11-15 19:46:44] {1826} INFO - iteration 4, current learner lgbm\n[flaml.automl: 11-15 19:46:45] {2029} INFO -  at 1.3s,  estimator lgbm's best error=0.2337, best estimator lgbm's best error=0.2337\n[flaml.automl: 11-15 19:46:45] {1826} INFO - iteration 5, current learner lgbm\n[flaml.automl: 11-15 19:46:45] {2029} INFO -  at 1.4s,  estimator lgbm's best error=0.2337, best estimator lgbm's best error=0.2337\n[flaml.automl: 11-15 19:46:45] {1826} INFO - iteration 6, current learner lgbm\n[flaml.automl: 11-15 19:46:46] {2029} INFO -  at 2.5s,  estimator lgbm's best error=0.2219, best estimator lgbm's best error=0.2219\n[flaml.automl: 11-15 19:46:46] {1826} INFO - iteration 7, current learner lgbm\n[flaml.automl: 11-15 19:46:46] {2029} INFO -  at 2.9s,  estimator lgbm's best error=0.2219, best estimator lgbm's best error=0.2219\n[flaml.automl: 11-15 19:46:46] {1826} INFO - iteration 8, current learner lgbm\n[flaml.automl: 11-15 19:46:48] {2029} INFO -  at 4.5s,  estimator lgbm's best error=0.1764, best estimator lgbm's best error=0.1764\n[flaml.automl: 11-15 19:46:48] {1826} INFO - iteration 9, current learner lgbm\n[flaml.automl: 11-15 19:46:54] {2029} INFO -  at 10.5s, estimator lgbm's best error=0.1630, best estimator lgbm's best error=0.1630\n[flaml.automl: 11-15 19:46:54] {1826} INFO - iteration 10, current learner lgbm\n[flaml.automl: 11-15 19:46:56] {2029} INFO -  at 12.4s, estimator lgbm's best error=0.1630, best estimator lgbm's best error=0.1630\n[flaml.automl: 11-15 19:46:56] {1826} INFO - iteration 11, current learner lgbm\n[flaml.automl: 11-15 19:47:13] {2029} INFO -  at 29.0s, estimator lgbm's best error=0.1630, best estimator lgbm's best error=0.1630\n[flaml.automl: 11-15 19:47:13] {1826} INFO - iteration 12, current learner lgbm\n[flaml.automl: 11-15 19:47:15] {2029} INFO -  at 31.1s, estimator lgbm's best error=0.1630, best estimator lgbm's best error=0.1630\n[flaml.automl: 11-15 19:47:15] {1826} INFO - iteration 13, current learner lgbm\n[flaml.automl: 11-15 19:47:29] {2029} INFO -  at 45.8s, estimator lgbm's best error=0.1564, best estimator lgbm's best error=0.1564\n[flaml.automl: 11-15 19:47:33] {2242} INFO - retrain lgbm for 3.2s\n[flaml.automl: 11-15 19:47:33] {2247} INFO - retrained model: LGBMRegressor(colsample_bytree=0.8025848209352517,\n              learning_rate=0.09100963138990374, max_bin=255,\n              min_child_samples=42, n_estimators=363, num_leaves=216,\n              reg_alpha=0.001113000336715291, reg_lambda=76.50614276906414,\n              verbose=-1)\n[flaml.automl: 11-15 19:47:33] {1608} INFO - fit succeeded\n[flaml.automl: 11-15 19:47:33] {1610} INFO - Time taken to find the best model: 45.75616669654846\n[flaml.automl: 11-15 19:47:33] {1624} WARNING - Time taken to find the best model is 76% of the provided time budget and not all estimators' hyperparameter search converged. Consider increasing the time budget.\n")),(0,m.yg)("h4",{id:"retrieve-best-config"},"Retrieve best config"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},"print(\"Best hyperparmeter config:\", automl.best_config)\nprint(\"Best r2 on validation data: {0:.4g}\".format(1 - automl.best_loss))\nprint(\"Training duration of best run: {0:.4g} s\".format(automl.best_config_train_time))\nprint(automl.model.estimator)\n# Best hyperparmeter config: {'n_estimators': 363, 'num_leaves': 216, 'min_child_samples': 42, 'learning_rate': 0.09100963138990374, 'log_max_bin': 8, 'colsample_bytree': 0.8025848209352517, 'reg_alpha': 0.001113000336715291, 'reg_lambda': 76.50614276906414}\n# Best r2 on validation data: 0.8436\n# Training duration of best run: 3.229 s\n# LGBMRegressor(colsample_bytree=0.8025848209352517,\n#               learning_rate=0.09100963138990374, max_bin=255,\n#               min_child_samples=42, n_estimators=363, num_leaves=216,\n#               reg_alpha=0.001113000336715291, reg_lambda=76.50614276906414,\n#               verbose=-1)\n")),(0,m.yg)("h4",{id:"plot-feature-importance"},"Plot feature importance"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\n\nplt.barh(automl.feature_names_in_, automl.feature_importances_)\n")),(0,m.yg)("p",null,(0,m.yg)("img",{alt:"png",src:r(2465).A})),(0,m.yg)("h4",{id:"compute-predictions-of-testing-dataset"},"Compute predictions of testing dataset"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},'y_pred = automl.predict(X_test)\nprint("Predicted labels", y_pred)\n# Predicted labels [143391.65036562 245535.13731811 153171.44071629 ... 184354.52735963\n#  235510.49470445 282617.22858956]\n')),(0,m.yg)("h4",{id:"compute-different-metric-values-on-testing-dataset"},"Compute different metric values on testing dataset"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},'from flaml.automl.ml import sklearn_metric_loss_score\n\nprint("r2", "=", 1 - sklearn_metric_loss_score("r2", y_pred, y_test))\nprint("mse", "=", sklearn_metric_loss_score("mse", y_pred, y_test))\nprint("mae", "=", sklearn_metric_loss_score("mae", y_pred, y_test))\n# r2 = 0.8505434326526395\n# mse = 1975592613.138005\n# mae = 29471.536046068788\n')),(0,m.yg)("h4",{id:"compare-with-untuned-lightgbm"},"Compare with untuned LightGBM"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},'from lightgbm import LGBMRegressor\n\nlgbm = LGBMRegressor()\nlgbm.fit(X_train, y_train)\ny_pred = lgbm.predict(X_test)\nfrom flaml.automl.ml import sklearn_metric_loss_score\n\nprint("default lgbm r2", "=", 1 - sklearn_metric_loss_score("r2", y_pred, y_test))\n# default lgbm r2 = 0.8296179648694404\n')),(0,m.yg)("h4",{id:"plot-learning-curve"},"Plot learning curve"),(0,m.yg)("p",null,"How does the model accuracy improve as we search for different hyperparameter configurations?"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},"from flaml.automl.data import get_output_from_log\nimport numpy as np\n\ntime_history, best_valid_loss_history, valid_loss_history, config_history, metric_history =\n    get_output_from_log(filename=settings['log_file_name'], time_budget=60)\nplt.title('Learning Curve')\nplt.xlabel('Wall Clock Time (s)')\nplt.ylabel('Validation r2')\nplt.step(time_history, 1 - np.array(best_valid_loss_history), where='post')\nplt.show()\n")),(0,m.yg)("p",null,(0,m.yg)("img",{alt:"png",src:r(2478).A})),(0,m.yg)("h3",{id:"use-a-customized-lightgbm-learner"},"Use a customized LightGBM learner"),(0,m.yg)("p",null,"The native API of LightGBM allows one to specify a custom objective function in the model constructor. You can easily enable it by adding a customized LightGBM learner in FLAML. In the following example, we show how to add such a customized LightGBM learner with a custom objective function."),(0,m.yg)("h4",{id:"create-a-customized-lightgbm-learner-with-a-custom-objective-function"},"Create a customized LightGBM learner with a custom objective function"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\n\n# define your customized objective function\ndef my_loss_obj(y_true, y_pred):\n    c = 0.5\n    residual = y_pred - y_true\n    grad = c * residual / (np.abs(residual) + c)\n    hess = c ** 2 / (np.abs(residual) + c) ** 2\n    # rmse grad and hess\n    grad_rmse = residual\n    hess_rmse = 1.0\n\n    # mae grad and hess\n    grad_mae = np.array(residual)\n    grad_mae[grad_mae > 0] = 1.\n    grad_mae[grad_mae <= 0] = -1.\n    hess_mae = 1.0\n\n    coef = [0.4, 0.3, 0.3]\n    return coef[0] * grad + coef[1] * grad_rmse + coef[2] * grad_mae,\n           coef[0] * hess + coef[1] * hess_rmse + coef[2] * hess_mae\n\n\nfrom flaml.automl.model import LGBMEstimator\n\n\nclass MyLGBM(LGBMEstimator):\n    """LGBMEstimator with my_loss_obj as the objective function"""\n\n    def __init__(self, **config):\n        super().__init__(objective=my_loss_obj, **config)\n')),(0,m.yg)("h4",{id:"add-the-customized-learner-and-tune-it"},"Add the customized learner and tune it"),(0,m.yg)("pre",null,(0,m.yg)("code",{parentName:"pre",className:"language-python"},'automl = AutoML()\nautoml.add_learner(learner_name="my_lgbm", learner_class=MyLGBM)\nsettings["estimator_list"] = ["my_lgbm"]  # change the estimator list\nautoml.fit(X_train=X_train, y_train=y_train, **settings)\n')),(0,m.yg)("p",null,(0,m.yg)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/automl_lightgbm.ipynb"},"Link to notebook")," | ",(0,m.yg)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/automl_lightgbm.ipynb"},"Open in colab")))}g.isMDXComponent=!0},2478:(e,t,r)=>{r.d(t,{A:()=>a});const a="data:image/png;base64,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"},2465:(e,t,r)=>{r.d(t,{A:()=>a});const a="data:image/png;base64,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"}}]);