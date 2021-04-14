(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(307)),l={title:"Progressive Rollout"},i={unversionedId:"rollout/rollout",id:"rollout/rollout",isDocsHomePage:!1,title:"Progressive Rollout",description:'Rollout or Upgrade is one of the most essential "day 2" operation on any application',source:"@site/docs/rollout/rollout.md",slug:"/rollout/rollout",permalink:"/docs/rollout/rollout",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/rollout/rollout.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1618399121,formattedLastUpdatedAt:"4/14/2021",sidebar:"docs",previous:{title:"Deploy Application",permalink:"/docs/application"},next:{title:"Multi-Cluster Deployment",permalink:"/docs/rollout/appdeploy"}},p=[{value:"Overview",id:"overview",children:[{value:"Design Principles and Goals",id:"design-principles-and-goals",children:[]}]},{value:"AppRollout",id:"approllout",children:[]},{value:"User Workflow",id:"user-workflow",children:[]},{value:"State Transition",id:"state-transition",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],c={toc:p};function s(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Rollout")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Upgrade"),' is one of the most essential "day 2" operation on any application\n. KubeVela, as an application centric platform, definitely needs to provide a customized solution\nto alleviate the burden on the application operators.'),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"There are several attempts at solving this problem in the cloud native community. However, none\nof them provide a true rolling style upgrade. For example, flagger supports Blue/Green, Canary\nand A/B testing. Therefore, we decide to add support for batch based rolling upgrade as\nour first style to support in KubeVela."),Object(r.b)("h3",{id:"design-principles-and-goals"},"Design Principles and Goals"),Object(r.b)("p",null,"We design KubeVela rollout solutions with the following principles in mind"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"First, we want all flavors of rollout controllers share the same core rollout\nrelated logic. The trait and application related logic can be easily encapsulated into its own\npackage."),Object(r.b)("li",{parentName:"ul"},"Second, the core rollout related logic is easily extensible to support different type of\nworkloads, i.e. Deployment, CloneSet, Statefulset, DaemonSet or even customized workloads."),Object(r.b)("li",{parentName:"ul"},"Thirdly, the core rollout related logic has a well documented state machine that\ndoes state transition explicitly."),Object(r.b)("li",{parentName:"ul"},"Finally, the controllers can support all the rollout/upgrade needs of an application running\nin a production environment including Blue/Green, Canary and A/B testing.")),Object(r.b)("h2",{id:"approllout"},"AppRollout"),Object(r.b)("p",null,"Here is a simple ",Object(r.b)("inlineCode",{parentName:"p"},"AppRollout")," that upgrade an application from v1 to v2 in three batches. The\nfirst batch contains only 1 pod while the rest of the batches split the rest."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  sourceAppRevisionName: test-rolling-v1\n  targetAppRevisionName: test-rolling-v2\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 1\n      - replicas: 50%\n      - replicas: 50%\n    batchPartition: 1\n')),Object(r.b)("h2",{id:"user-workflow"},"User Workflow"),Object(r.b)("p",null,"Here is the end to end user experience based on ",Object(r.b)("a",{parentName:"p",href:"https://openkruise.io/en-us/docs/cloneset.html"},"CloneSet")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install CloneSet and its ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition"),"."),Object(r.b)("p",{parentName:"li"},"Since CloneSet is an customized workload for Kubernetes, we need to install its controller and component definition manually to KubeVela platform."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"helm install kruise https://github.com/openkruise/kruise/releases/download/v0.7.0/kruise-chart.tgz\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/cloneset-rollout/clonesetDefinition.yaml\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Deploy application to the cluster"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: test-rolling\n  annotations:\n    "app.oam.dev/rolling-components": "metrics-provider"\n    "app.oam.dev/rollout-template": "true"\nspec:\n  components:\n    - name: metrics-provider\n      type: clonesetservice\n      properties:\n        cmd:\n          - ./podinfo\n          - stress-cpu=1\n        image: stefanprodan/podinfo:4.0.6\n        port: 8080\n        updateStrategyType: InPlaceIfPossible\n        replicas: 5\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Attach the following rollout plan to upgrade the application to v1"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # application (revision) reference\n  targetAppRevisionName: test-rolling-v1\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 10%\n      - replicas: 40%\n      - replicas: 50%\n')),Object(r.b)("p",{parentName:"li"},"Use can check the status of the ApplicationRollout and wait for the rollout to complete.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"User can continue to modify the application image tag and apply"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: test-rolling\n  annotations:\n    "app.oam.dev/rolling-components": "metrics-provider"\n    "app.oam.dev/rollout-template": "true"\nspec:\n  components:\n    - name: metrics-provider\n      type: clonesetservice\n      properties:\n        cmd:\n          - ./podinfo\n          - stress-cpu=1\n        image: stefanprodan/podinfo:5.0.2\n        port: 8080\n        updateStrategyType: InPlaceIfPossible\n        replicas: 5\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Apply the application rollout that upgrade the application from v1 to v2"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # application (revision) reference\n  sourceAppRevisionName: test-rolling-v1\n  targetAppRevisionName: test-rolling-v2\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 1\n      - replicas: 2\n      - replicas: 2\n')),Object(r.b)("p",{parentName:"li"},'User can check the status of the ApplicationRollout and see the rollout completes, and the\nApplicationRollout\'s "Rolling State" becomes ',Object(r.b)("inlineCode",{parentName:"p"},"rolloutSucceed")))),Object(r.b)("h2",{id:"state-transition"},"State Transition"),Object(r.b)("p",null,"Here is the high level state transition graph"),Object(r.b)("p",null,Object(r.b)("img",{src:n(391).default})),Object(r.b)("h2",{id:"roadmap"},"Roadmap"),Object(r.b)("p",null,"Our recent roadmap for progressive rollout is ",Object(r.b)("a",{parentName:"p",href:"./roadmap"},"here"),"."))}s.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.a.createElement(b,i(i({ref:t},c),{},{components:n})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},391:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/approllout-status-transition-78db00cbc539d19e6c5d3feeead31b16.jpg"}}]);