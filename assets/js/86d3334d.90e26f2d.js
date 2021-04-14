(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{198:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(3),o=t(7),r=(t(0),t(307)),i={title:"How-to"},l={unversionedId:"helm/component",id:"helm/component",isDocsHomePage:!1,title:"How-to",description:"In this section, it will introduce how to declare Helm charts as app components via ComponentDefinition.",source:"@site/docs/helm/component.md",slug:"/helm/component",permalink:"/docs/helm/component",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/helm/component.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618298461,formattedLastUpdatedAt:"4/13/2021",sidebar:"docs",previous:{title:"Learning CUE",permalink:"/docs/cue/basic"},next:{title:"Attach Traits",permalink:"/docs/helm/trait"}},c=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Declare <code>ComponentDefinition</code>",id:"declare-componentdefinition",children:[]},{value:"Declare an <code>Application</code>",id:"declare-an-application",children:[{value:"Generate Form from Helm Based Components",id:"generate-form-from-helm-based-components",children:[]}]}],p={toc:c};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section, it will introduce how to declare Helm charts as app components via ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Before reading this part, please make sure you've learned ",Object(r.b)("a",{parentName:"p",href:"../platform-engineers/definition-and-templates"},"the definition and template concepts"),".")),Object(r.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Make sure you have enabled Helm support in the ",Object(r.b)("a",{parentName:"li",href:"/docs/install"},"installation guide"),".")),Object(r.b)("h2",{id:"declare-componentdefinition"},"Declare ",Object(r.b)("inlineCode",{parentName:"h2"},"ComponentDefinition")),Object(r.b)("p",null,"Here is an example ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," about how to use Helm as schematic module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webapp-chart\n  annotations:\n    definition.oam.dev/description: helm chart for webapp\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    helm:\n      release:\n        chart:\n          spec:\n            chart: "podinfo"\n            version: "5.1.4"\n      repository:\n        url: "http://oam.dev/catalog/"\n')),Object(r.b)("p",null,"In detail:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".spec.workload")," is required to indicate the workload type of this Helm based component. Please also check for ",Object(r.b)("a",{parentName:"li",href:"/docs/helm/known-issues?id=workload-type-indicator"},"Known Limitations")," if you have multiple workloads packaged in one chart."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".spec.schematic.helm")," contains information of Helm ",Object(r.b)("inlineCode",{parentName:"li"},"release")," and ",Object(r.b)("inlineCode",{parentName:"li"},"repository")," which leverages ",Object(r.b)("inlineCode",{parentName:"li"},"fluxcd/flux2"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"i.e. the pec of ",Object(r.b)("inlineCode",{parentName:"li"},"release")," aligns with ",Object(r.b)("a",{parentName:"li",href:"https://github.com/fluxcd/helm-controller/blob/main/docs/api/helmrelease.md"},Object(r.b)("inlineCode",{parentName:"a"},"HelmReleaseSpec"))," and spec of ",Object(r.b)("inlineCode",{parentName:"li"},"repository")," aligns with ",Object(r.b)("a",{parentName:"li",href:"https://github.com/fluxcd/source-controller/blob/main/docs/api/source.md#source.toolkit.fluxcd.io/v1beta1.HelmRepository"},Object(r.b)("inlineCode",{parentName:"a"},"HelmRepositorySpec")),".")))),Object(r.b)("h2",{id:"declare-an-application"},"Declare an ",Object(r.b)("inlineCode",{parentName:"h2"},"Application")),Object(r.b)("p",null,"Here is an example ",Object(r.b)("inlineCode",{parentName:"p"},"Application"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart \n      properties: \n        image:\n          tag: "5.1.2"\n')),Object(r.b)("p",null,"The component ",Object(r.b)("inlineCode",{parentName:"p"},"properties")," is exactly the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/master/charts/podinfo/values.yaml"},"overlay values")," of the Helm chart."),Object(r.b)("p",null,"Deploy the application and after several minutes (it may take time to fetch Helm chart), you can check the Helm release is installed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ helm ls -A\nmyapp-demo-podinfo  default   1   2021-03-05 02:02:18.692317102 +0000 UTC deployed  podinfo-5.1.4     5.1.4\n")),Object(r.b)("p",null,"Check the workload defined in the chart has been created successfully."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy\nNAME                     READY   UP-TO-DATE   AVAILABLE   AGE\nmyapp-demo-podinfo   1/1     1            1           66m\n")),Object(r.b)("p",null,"Check the values (",Object(r.b)("inlineCode",{parentName:"p"},"image.tag = 5.1.2"),") from application's ",Object(r.b)("inlineCode",{parentName:"p"},"properties")," are assigned to the chart."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment myapp-demo-podinfo -o json | jq '.spec.template.spec.containers[0].image'\n\"ghcr.io/stefanprodan/podinfo:5.1.2\"\n")),Object(r.b)("h3",{id:"generate-form-from-helm-based-components"},"Generate Form from Helm Based Components"),Object(r.b)("p",null,"KubeVela will automatically generate OpenAPI v3 JSON schema based on ",Object(r.b)("a",{parentName:"p",href:"https://helm.sh/docs/topics/charts/#schema-files"},Object(r.b)("inlineCode",{parentName:"a"},"values.schema.json"))," in the Helm chart, and store it in a ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigMap")," in the same ",Object(r.b)("inlineCode",{parentName:"p"},"namespace")," with the definition object. Furthermore, if ",Object(r.b)("inlineCode",{parentName:"p"},"values.schema.json")," is not provided by the chart author, KubeVela will generate OpenAPI v3 JSON schema based on its ",Object(r.b)("inlineCode",{parentName:"p"},"values.yaml")," file automatically. "),Object(r.b)("p",null,"Please check the ",Object(r.b)("a",{parentName:"p",href:"/docs/platform-engineers/openapi-v3-json-schema"},"Generate Forms from Definitions")," guide for more detail of using this schema to render GUI forms. "))}m.isMDXComponent=!0},307:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),m=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(t),d=a,u=s["".concat(i,".").concat(d)]||s[d]||b[d]||r;return t?o.a.createElement(u,l(l({ref:n},p),{},{components:t})):o.a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);