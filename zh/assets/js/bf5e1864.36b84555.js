(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(263)),o={title:"Quick Start"},s={unversionedId:"getting-started/quick-start",id:"version-v0.3.5/getting-started/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application.",source:"@site/versioned_docs/version-v0.3.5/getting-started/quick-start.md",slug:"/getting-started/quick-start",permalink:"/zh/docs/v0.3.5/getting-started/quick-start",editUrl:"https://github.com/oam-dev/kubevela.io/versioned_docs/version-v0.3.5/getting-started/quick-start.md",version:"v0.3.5",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616664342,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v0.3.5/docs",previous:{title:"Install",permalink:"/zh/docs/v0.3.5/getting-started/install"},next:{title:"Overview",permalink:"/zh/docs/v0.3.5/platform-builder-guide/design-abstraction/overview"}},l=[{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Welcome to KubeVela! In this guide, we'll walk you through how to install KubeVela, and deploy your first simple application."),Object(i.b)("h2",{id:"step-1-install"},"Step 1: Install"),Object(i.b)("p",null,"Make sure you have finished and verified the installation following ",Object(i.b)("a",{parentName:"p",href:"./install"},"this guide"),"."),Object(i.b)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),Object(i.b)("p",null,"Check the status until we see ",Object(i.b)("inlineCode",{parentName:"p"},"status")," is ",Object(i.b)("inlineCode",{parentName:"p"},"running")," and services are ",Object(i.b)("inlineCode",{parentName:"p"},"healthy"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$  kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  generation: 1\n  name: first-vela-app\n  ...\n  namespace: default\nspec:\n  components:\n  - name: express-server\n    type: webservice\n    settings:\n      image: crccheck/hello-world\n      port: 8000\n    traits:\n    - name: ingress\n      properties:\n        domain: testsvc.example.com\n        http:\n          /: 8000\nstatus:\n  ...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: your ip address'\n      type: ingress\n  status: running\n")),Object(i.b)("p",null,"Under the neath, the K8s resources was created:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deployment\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   1/1     1            1           8m\n$ kubectl get svc\nNAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nexpress-server   ClusterIP   172.21.11.152   <none>        8000/TCP   7m43s\nkubernetes       ClusterIP   172.21.0.1      <none>        443/TCP    116d\n$ kubectl get ingress\nNAME             CLASS    HOSTS                 ADDRESS          PORTS   AGE\nexpress-server   <none>   testsvc.example.com   <your ip address>   80      7m47s\n")),Object(i.b)("p",null,"If your cluster has a working ingress, you can visit the service."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Voila!")," You are all set to go."),Object(i.b)("h2",{id:"whats-next"},"What's Next"),Object(i.b)("p",null,"Here are some recommended next steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learn KubeVela starting from its ",Object(i.b)("a",{parentName:"li",href:"../overview/concepts"},"core concepts")),Object(i.b)("li",{parentName:"ul"},"Learn more details about ",Object(i.b)("a",{parentName:"li",href:"../platform-builder-guide/design-abstraction/application"},Object(i.b)("inlineCode",{parentName:"a"},"Application"))," and understand how it works."),Object(i.b)("li",{parentName:"ul"},"Join ",Object(i.b)("inlineCode",{parentName:"li"},"#kubevela")," channel in CNCF ",Object(i.b)("a",{parentName:"li",href:"https://cloud-native.slack.com"},"Slack")," and/or ",Object(i.b)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter"))),Object(i.b)("p",null,"Welcome onboard and sail Vela!"))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);