(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(263)),r={title:"Overview"},c={unversionedId:"platform-builder-guide/design-abstraction/overview",id:"platform-builder-guide/design-abstraction/overview",isDocsHomePage:!1,title:"Overview",description:"Application CRD",source:"@site/docs/platform-builder-guide/design-abstraction/overview.md",slug:"/platform-builder-guide/design-abstraction/overview",permalink:"/zh/docs/platform-builder-guide/design-abstraction/overview",editUrl:"https://github.com/oam-dev/kubevela.io/docs/platform-builder-guide/design-abstraction/overview.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Quick Start",permalink:"/zh/docs/getting-started/quick-start"},next:{title:"Application CRD",permalink:"/zh/docs/platform-builder-guide/design-abstraction/application"}},l=[{value:"Application CRD",id:"application-crd",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Abstraction",id:"abstraction",children:[]},{value:"Encapsulation",id:"encapsulation",children:[{value:"No Configuration Drift",id:"no-configuration-drift",children:[]},{value:"No &quot;Juggling&quot; Approach to Manage Kubernetes Objects",id:"no-juggling-approach-to-manage-kubernetes-objects",children:[]}]}],s={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"application-crd"},"Application CRD"),Object(o.b)("p",null,"This documentation will explain what is ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," object and why you need it."),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"Encapsulation is probably the mostly widely used approach to enable easier developer experience and allow users to deliver the whole application resources as one unit. For example, many tools today encapsulate Kubernetes ",Object(o.b)("em",{parentName:"p"},"Deployment")," and ",Object(o.b)("em",{parentName:"p"},"Service")," into a ",Object(o.b)("em",{parentName:"p"},"Web Service")," module, and then instantiate this module by simply providing parameters such as ",Object(o.b)("em",{parentName:"p"},"image=foo")," and ",Object(o.b)("em",{parentName:"p"},"ports=80"),". This pattern can be found in cdk8s (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/awslabs/cdk8s/blob/master/examples/typescript/web-service/web-service.ts"},Object(o.b)("inlineCode",{parentName:"a"},"web-service.ts")," "),"), CUE (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuelang/cue/blob/b8b489251a3f9ea318830788794c1b4a753031c0/doc/tutorial/kubernetes/quick/services/kube.cue#L70"},Object(o.b)("inlineCode",{parentName:"a"},"kube.cue")),"), and many widely used Helm charts (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://docs.bitnami.com/tutorials/create-your-first-helm-chart/"},"Web Service"),")."),Object(o.b)("p",null,"Despite the efficiency and extensibility in defining abstractions with encapsulation, both DSL (e.g. cdk8s and CUE) and templating (e.g. Helm) are mostly used as client side tools and can be barely used as a platform level building block. This leaves platform builders either have to create restricted/inextensible abstractions, or re-invent the wheels of what DSL/templating has already been doing great."),Object(o.b)("p",null,"KubeVela is designed to make it possible to build easy-to-use yet highly extensible platforms with leverage of the battle-tested encapsulation and abstraction. "),Object(o.b)("h2",{id:"abstraction"},"Abstraction"),Object(o.b)("p",null,"First of all, KubeVela introduces an ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," CRD as its main abstraction that could capture all needed resources to run the application, and exposes configurable parameters for end users. Every application is composed by multiple components, and each of them is defined by workload specification and traits (operational behaviors). For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: application-sample\nspec:\n  components:\n    - name: foo\n      type: webservice\n      settings:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - name: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n        - name: sidecar\n          properties:\n            name: "logging"\n            image: "fluentd"\n    - name: bar\n      type: aliyun-oss # cloud service\n      bucket: "my-bucket"\n')),Object(o.b)("h2",{id:"encapsulation"},"Encapsulation"),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," provides an abstraction to deploy apps, each ",Object(o.b)("em",{parentName:"p"},"component")," and ",Object(o.b)("em",{parentName:"p"},"trait")," specification in this application is actually enforced by another set of building block objects named ",Object(o.b)("em",{parentName:"p"},'"definitions"'),", for example, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examplesapplication#workload-definition"},Object(o.b)("inlineCode",{parentName:"a"},"WorkloadDefinition"))," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examplesapplication#scaler-trait-definition"},Object(o.b)("inlineCode",{parentName:"a"},"TraitDefinition")),"."),Object(o.b)("p",null,"Definitions are designed to leverage encapsulation technologies such as ",Object(o.b)("inlineCode",{parentName:"p"},"CUE"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Helm")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Terraform modules")," to template and parameterize Kubernetes resources as well as cloud services. This enables users to assemble templated capabilities (defined via Helm charts or CUE modules etc) into an ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," by simply providing parameters, i.e. they only need to interact with an unified abstraction. Actually, in the ",Object(o.b)("inlineCode",{parentName:"p"},"application-sample")," above, it models a Kubernetes Deployment (component ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),") to run container and a Alibaba Cloud OSS bucket (component ",Object(o.b)("inlineCode",{parentName:"p"},"bar"),") alongside."),Object(o.b)("p",null,"This templating based encapsulation and abstraction mechanism is the key for KubeVela to provide ",Object(o.b)("em",{parentName:"p"},"PaaS-like")," experience (",Object(o.b)("em",{parentName:"p"},"i.e. app-centric, higher level abstractions, self-service operations etc"),") to end users."),Object(o.b)("h3",{id:"no-configuration-drift"},"No Configuration Drift"),Object(o.b)("p",null,"Many of the existing encapsulation solutions today work at client side, for example, DSL/IaC tools and Helm. This approach is easy to be adopted and has less invasion in the user cluster, KubeVela encapsulation engine can also be implemented at client side."),Object(o.b)("p",null,"But client side abstractions, though light-weighted, always lead to an issue called infrastructure/configuration drift, i.e. the generated component instances are not in line with the expected configuration. This could be caused by incomplete coverage, less-than-perfect processes or emergency changes."),Object(o.b)("p",null,"Hence, the encapsulation engine of KubeVela is designed to be a ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," and leverage Kubernetes control plane to eliminate the issue of configuration drifting, and still keeps the flexibly and velocity enabled by existing encapsulation solutions (e.g. DSL and templating)."),Object(o.b)("h3",{id:"no-juggling-approach-to-manage-kubernetes-objects"},'No "Juggling" Approach to Manage Kubernetes Objects'),Object(o.b)("p",null,"For example, as the platform team we want to leverage Istio as the Service Mesh layer to control the traffic to certain ",Object(o.b)("inlineCode",{parentName:"p"},"Deployment"),' instances. But this could be really painful today because we have to enforce end users to define and manage a set of Kubernetes resources in a "juggling" approach. For example, in a simple canary rollout case, the end users have to carefully manage a primary ',Object(o.b)("em",{parentName:"p"},"Deployment"),", a primary ",Object(o.b)("em",{parentName:"p"},"Service"),", a ",Object(o.b)("em",{parentName:"p"},"root Service"),", a canary ",Object(o.b)("em",{parentName:"p"},"Deployment"),", a canary ",Object(o.b)("em",{parentName:"p"},"Service"),", and have to probably rename the ",Object(o.b)("em",{parentName:"p"},"Deployment")," instance after canary promotion (this is actually unacceptable in production because renaming will lead to the app restart). What's worse, we have to expect the users properly set the labels and selectors on those objects carefully because they are the key to ensure proper accessibility of every app instance and the only revision mechanism our Istio controller could count on."),Object(o.b)("p",null,"The issue above could be even painful if the component instance is not ",Object(o.b)("em",{parentName:"p"},"Deployment"),", but ",Object(o.b)("em",{parentName:"p"},"StatefulSet")," or custom workload type. For example, normally it doesn't make sense to replicate a ",Object(o.b)("em",{parentName:"p"},"StatefulSet")," instance during rollout, this means the users have to maintain the name, revision, label, selector, app instances in a totally different approach from ",Object(o.b)("em",{parentName:"p"},"Deployment"),"."),Object(o.b)("h4",{id:"standard-contract-behind-the-abstraction"},"Standard Contract Behind The Abstraction"),Object(o.b)("p",null,"The encapsulation engine of KubeVela is designed to relieve such burden of managing versionized Kubernetes resources manually. In nutshell, all the needed Kubernetes resources for an app are now encapsulated in a single abstraction, and KubeVela will maintain the instance name, revisions, labels and selector by the battle tested reconcile loop automation, not by human hand. At the meantime, the existence of definition objects allow the platform team to customize the details of all above metadata behind the abstraction, even control the behavior of how to do revision."),Object(o.b)("p",null,'Thus, all those metadata now become a standard contract that any day 2 operation controller such as Istio or rollout can rely on. This is the key to ensure our platform could provide user friendly experience but keep "transparent" to the operational behaviors.'))}p.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return a?i.a.createElement(m,c(c({ref:t},s),{},{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);