(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(307)),p={title:"Learning Appfile"},l={unversionedId:"developers/learn-appfile",id:"version-v1.0/developers/learn-appfile",isDocsHomePage:!1,title:"Learning Appfile",description:"A sample Appfile is as below:",source:"@site/versioned_docs/version-v1.0/developers/learn-appfile.md",slug:"/developers/learn-appfile",permalink:"/docs/v1.0/developers/learn-appfile",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/learn-appfile.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-v1.0/docs",previous:{title:"Overview",permalink:"/docs/v1.0/quick-start-appfile"},next:{title:"Setting Up Deployment Environment",permalink:"/docs/v1.0/developers/config-enviroments"}},i=[{value:"Schema",id:"schema",children:[]},{value:"Example Workflow",id:"example-workflow",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"1. Download test app code",id:"1-download-test-app-code",children:[]},{value:"2. Deploy app in one command",id:"2-deploy-app-in-one-command",children:[]},{value:"Optional Configure another workload type",id:"optional-configure-another-workload-type",children:[]}]},{value:"What&#39;s Next?",id:"whats-next",children:[]}],c={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A sample ",Object(o.b)("inlineCode",{parentName:"p"},"Appfile")," is as below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  frontend: # 1st service\n\n    image: oamdev/testapp:v1\n    build:\n      docker:\n        file: Dockerfile\n        context: .\n\n    cmd: ["node", "server.js"]\n    port: 8080\n\n    route: # trait\n      domain: example.com\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n\n  backend: # 2nd service\n    type: task # workload type\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),Object(o.b)("p",null,"Under the hood, ",Object(o.b)("inlineCode",{parentName:"p"},"Appfile")," will build the image from source code, and then generate ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," resource with the image name."),Object(o.b)("h2",{id:"schema"},"Schema"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Before learning about Appfile's detailed schema, we recommend you to get familiar with ",Object(o.b)("a",{parentName:"p",href:"../concepts"},"core concepts")," in KubeVela.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: _app-name_\n\nservices:\n  _service-name_:\n    # If `build` section exists, this field will be used as the name to build image. Otherwise, KubeVela will try to pull the image with given name directly.\n    image: oamdev/testapp:v1\n\n    build:\n      docker:\n        file: _Dockerfile_path_ # relative path is supported, e.g. "./Dockerfile"\n        context: _build_context_path_ # relative path is supported, e.g. "."\n\n      push:\n        local: kind # optionally push to local KinD cluster instead of remote registry\n\n    type: webservice (default) | worker | task\n\n    # detailed configurations of workload\n    ... properties of the specified workload  ...\n\n    _trait_1_:\n      # properties of trait 1\n\n    _trait_2_:\n      # properties of trait 2\n\n    ... more traits and their properties ...\n  \n  _another_service_name_: # more services can be defined\n    ...\n  \n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To learn about how to set the properties of specific workload type or trait, please check the ",Object(o.b)("a",{parentName:"p",href:"./check-ref-doc"},"reference documentation guide"),".")),Object(o.b)("h2",{id:"example-workflow"},"Example Workflow"),Object(o.b)("p",null,"In the following workflow, we will build and deploy an example NodeJS app under ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp"},"examples/testapp/"),"."),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on the host"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"../install"},"KubeVela")," installed and configured")),Object(o.b)("h3",{id:"1-download-test-app-code"},"1. Download test app code"),Object(o.b)("p",null,"git clone and go to the testapp directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/oam-dev/kubevela.git\n$ cd kubevela/docs/examples/testapp\n")),Object(o.b)("p",null,"The example contains NodeJS app code, Dockerfile to build the app."),Object(o.b)("h3",{id:"2-deploy-app-in-one-command"},"2. Deploy app in one command"),Object(o.b)("p",null,"In the directory there is a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/testapp/vela.yaml"},"vela.yaml")," which follows Appfile format supported by Vela.\nWe are going to use it to build and deploy the app."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: please change ",Object(o.b)("inlineCode",{parentName:"p"},"oamdev")," to your own registry account so you can push. Or, you could try the alternative approach in ",Object(o.b)("inlineCode",{parentName:"p"},"Local testing without pushing image remotely")," section.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"    image: oamdev/testapp:v1 # change this to your image\n")),Object(o.b)("p",null,"Run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela.yaml ...\nLoading templates ...\n\nBuilding service (express-server)...\nSending build context to Docker daemon  71.68kB\nStep 1/10 : FROM mhart/alpine-node:12\n ---\x3e 9d88359808c3\n...\n\npushing image (oamdev/testapp:v1)...\n...\n\nRendering configs for service (express-server)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc express-server\n")),Object(o.b)("p",null,"Check the status of the service:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela status testapp\n  About:\n  \n    Name:       testapp\n    Namespace:  default\n    Created at: 2020-11-02 11:08:32.138484 +0800 CST\n    Updated at: 2020-11-02 11:08:32.138485 +0800 CST\n  \n  Services:\n  \n    - Name: express-server\n      Type: webservice\n      HEALTHY Ready: 1/1\n      Last Deployment:\n        Created at: 2020-11-02 11:08:33 +0800 CST\n        Updated at: 2020-11-02T11:08:32+08:00\n      Routes:\n\n")),Object(o.b)("h4",{id:"alternative-local-testing-without-pushing-image-remotely"},"Alternative: Local testing without pushing image remotely"),Object(o.b)("p",null,"If you have local ",Object(o.b)("a",{parentName:"p",href:"../install"},"kind")," cluster running, you may try the local push option. No remote container registry is needed in this case."),Object(o.b)("p",null,"Add local option to ",Object(o.b)("inlineCode",{parentName:"p"},"build"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"    build:\n      # push image into local kind cluster without remote transfer\n      push:\n        local: kind\n\n      docker:\n        file: Dockerfile\n        context: .\n")),Object(o.b)("p",null,"Then deploy the app to kind:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(o.b)("details",null,Object(o.b)("summary",null,"(Advanced) Check rendered manifests"),Object(o.b)("p",null,"By default, Vela renders the final manifests in ",Object(o.b)("inlineCode",{parentName:"p"},".vela/deploy.yaml"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: ApplicationConfiguration\nmetadata:\n  name: testapp\n  namespace: default\nspec:\n  components:\n  - componentName: express-server\n---\napiVersion: core.oam.dev/v1alpha2\nkind: Component\nmetadata:\n  name: express-server\n  namespace: default\nspec:\n  workload:\n    apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: express-server\n    ...\n---\napiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: testapp-default-health\n  namespace: default\nspec:\n  ...\n"))),Object(o.b)("h3",{id:"optional-configure-another-workload-type"},"[Optional]"," Configure another workload type"),Object(o.b)("p",null,"By now we have deployed a ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",{parentName:"em",href:"references/component-types/webservice"},"Web Service")),", which is the default workload type in KubeVela. We can also add another service of ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",{parentName:"em",href:"references/component-types/task"},"Task"))," type in the same app:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'services:\n  pi:\n    type: task\n    image: perl \n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n\n  express-server:\n    ...\n')),Object(o.b)("p",null,"Then deploy Appfile again to update the application:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(o.b)("p",null,"Congratulations! You have just deployed an app using ",Object(o.b)("inlineCode",{parentName:"p"},"Appfile"),"."),Object(o.b)("h2",{id:"whats-next"},"What's Next?"),Object(o.b)("p",null,"Play more with your app:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./check-logs"},"Check Application Logs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./exec-cmd"},"Execute Commands in Application Container")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./port-forward"},"Access Application via Route"))))}s.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);