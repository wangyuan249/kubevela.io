(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(263)),l={title:"Overview"},p={unversionedId:"developer-experience-guide/appfile/quick-start-appfile",id:"developer-experience-guide/appfile/quick-start-appfile",isDocsHomePage:!1,title:"Overview",description:"Building Developer Experience with KubeVela",source:"@site/docs/developer-experience-guide/appfile/quick-start-appfile.md",slug:"/developer-experience-guide/appfile/quick-start-appfile",permalink:"/zh/docs/developer-experience-guide/appfile/quick-start-appfile",editUrl:"https://github.com/oam-dev/kubevela.io/docs/developer-experience-guide/appfile/quick-start-appfile.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Known Limitations",permalink:"/zh/docs/platform-builder-guide/using-helm/known-issues"},next:{title:"Learning Appfile",permalink:"/zh/docs/developer-experience-guide/appfile/learn-appfile"}},o=[{value:"Building Developer Experience with KubeVela",id:"building-developer-experience-with-kubevela",children:[]},{value:"Step 1: Install",id:"step-1-install",children:[]},{value:"Step 2: Deploy Your First Application",id:"step-2-deploy-your-first-application",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"building-developer-experience-with-kubevela"},"Building Developer Experience with KubeVela"),Object(i.b)("p",null,"To achieve best user experience for your platform, we recommend platform builders to create simple and user friendly UI for end users instead of exposing full platform level details to them. Some common practices include building GUI console, adopting DSL, or creating a user friendly command line tool."),Object(i.b)("p",null,"As an proof-of-concept of building developer experience with KubeVela, we developed a client-side tool named ",Object(i.b)("inlineCode",{parentName:"p"},"Appfile")," as well. This tool enables developers to deploy any application with a single file and a single command: ",Object(i.b)("inlineCode",{parentName:"p"},"vela up"),"."),Object(i.b)("p",null,"Now let's walk through its experience."),Object(i.b)("h2",{id:"step-1-install"},"Step 1: Install"),Object(i.b)("p",null,"Make sure you have finished and verified the installation following ",Object(i.b)("a",{parentName:"p",href:"../../getting-started/install"},"this guide"),"."),Object(i.b)("h2",{id:"step-2-deploy-your-first-application"},"Step 2: Deploy Your First Application"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela.yaml\nParsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (testsvc)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward first-vela-app\n             SSH: vela exec first-vela-app\n         Logging: vela logs first-vela-app\n      App status: vela status first-vela-app\n  Service status: vela status first-vela-app --svc testsvc\n")),Object(i.b)("p",null,"Check the status until we see ",Object(i.b)("inlineCode",{parentName:"p"},"Routes")," are ready:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela status first-vela-app\nAbout:\n\n  Name:       first-vela-app\n  Namespace:  default\n  Created at: ...\n  Updated at: ...\n\nServices:\n\n  - Name: testsvc\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Last Deployment:\n      Created at: ...\n      Updated at: ...\n    Traits:\n      - \u2705 ingress: Visiting URL: testsvc.example.com, IP: <your IP address>\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In ",Object(i.b)("a",{parentName:"strong",href:"../../getting-started/install#kind"},"kind cluster setup")),", you can visit the service via localhost. In other setups, replace localhost with ingress address accordingly."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://localhost/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Voila!")," You are all set to go."),Object(i.b)("h2",{id:"whats-next"},"What's Next"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learn details about ",Object(i.b)("a",{parentName:"li",href:"./learn-appfile"},Object(i.b)("inlineCode",{parentName:"a"},"Appfile"))," and know how it works.")))}s.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(l,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(f,p(p({ref:t},c),{},{components:n})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);