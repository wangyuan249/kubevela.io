(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{307:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),s=o,b=m["".concat(i,".").concat(s)]||m[s]||d[s]||a;return t?r.a.createElement(b,c(c({ref:n},p),{},{components:t})):r.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(307)),i={title:"Setting Up Deployment Environment"},c={unversionedId:"developers/config-enviroments",id:"developers/config-enviroments",isDocsHomePage:!1,title:"Setting Up Deployment Environment",description:"A deployment environment is where you could configure the workspace, email for contact and domain for your applications globally.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/config-enviroments.md",slug:"/developers/config-enviroments",permalink:"/zh/docs/developers/config-enviroments",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/config-enviroments.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Learning Appfile",permalink:"/zh/docs/developers/learn-appfile"},next:{title:"Port Forwarding",permalink:"/zh/docs/developers/port-forward"}},l=[{value:"Create environment",id:"create-environment",children:[]},{value:"Check the deployment environment metadata",id:"check-the-deployment-environment-metadata",children:[]},{value:"Configure changes",id:"configure-changes",children:[]},{value:"Optional Configure Domain if you have public IP",id:"optional-configure-domain-if-you-have-public-ip",children:[{value:"Using domain in Appfile",id:"using-domain-in-appfile",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A deployment environment is where you could configure the workspace, email for contact and domain for your applications globally.\nA typical set of deployment environment is ",Object(a.b)("inlineCode",{parentName:"p"},"test"),", ",Object(a.b)("inlineCode",{parentName:"p"},"staging"),", ",Object(a.b)("inlineCode",{parentName:"p"},"prod"),", etc."),Object(a.b)("h2",{id:"create-environment"},"Create environment"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --email my@email.com\nenvironment demo created, Namespace: default, Email: my@email.com\n")),Object(a.b)("h2",{id:"check-the-deployment-environment-metadata"},"Check the deployment environment metadata"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env ls\nNAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       default     my@email.com\n")),Object(a.b)("p",null,"By default, the environment will use ",Object(a.b)("inlineCode",{parentName:"p"},"default")," namespace in K8s."),Object(a.b)("h2",{id:"configure-changes"},"Configure changes"),Object(a.b)("p",null,"You could change the config by executing the environment again."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --namespace demo\nenvironment demo created, Namespace: demo, Email: my@email.com\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env ls\nNAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       demo        my@email.com\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note that the created apps won't be affected, only newly created apps will use the updated info.")),Object(a.b)("h2",{id:"optional-configure-domain-if-you-have-public-ip"},"[Optional]"," Configure Domain if you have public IP"),Object(a.b)("p",null,"If your K8s cluster is provisioned by cloud provider and has public IP for ingress.\nYou could configure your domain in the environment, then you'll be able to visit\nyour app by this domain with an mTLS supported automatically."),Object(a.b)("p",null,"For example, you could get the public IP from ingress service.  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get svc -A | grep LoadBalancer\nNAME                         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE\nnginx-ingress-lb             LoadBalancer   172.21.2.174    123.57.10.233   80:32740/TCP,443:32086/TCP   41d\n")),Object(a.b)("p",null,"The fourth column is public IP. Configure 'A' record for your custom domain."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"*.your.domain => 123.57.10.233\n")),Object(a.b)("p",null,"You could also use ",Object(a.b)("inlineCode",{parentName:"p"},"123.57.10.233.xip.io")," as your domain, if you don't have a custom one.\n",Object(a.b)("inlineCode",{parentName:"p"},"xip.io")," will automatically route to the prefix IP ",Object(a.b)("inlineCode",{parentName:"p"},"123.57.10.233"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --domain 123.57.10.233.xip.io\nenvironment demo updated, Namespace: demo, Email: my@email.com\n")),Object(a.b)("h3",{id:"using-domain-in-appfile"},"Using domain in Appfile"),Object(a.b)("p",null,"Since you now have domain configured globally in deployment environment, you don't need to specify the domain in route configuration anymore."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"# in demo environment\nservcies:\n  express-server:\n    ...\n\n    route:\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ curl http://123.57.10.233.xip.io/testapp\nHello World\n")))}u.isMDXComponent=!0}}]);