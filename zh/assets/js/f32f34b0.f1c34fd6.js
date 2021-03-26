(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),o=(t(0),t(263)),i={title:"Configuring Data/Env in Application"},c={unversionedId:"developer-experience-guide/cli/config-app",id:"version-v0.3.5/developer-experience-guide/cli/config-app",isDocsHomePage:!1,title:"Configuring Data/Env in Application",description:"vela provides a config command to manage config data.",source:"@site/versioned_docs/version-v0.3.5/developer-experience-guide/cli/config-app.md",slug:"/developer-experience-guide/cli/config-app",permalink:"/zh/docs/v0.3.5/developer-experience-guide/cli/config-app",editUrl:"https://github.com/oam-dev/kubevela.io/versioned_docs/version-v0.3.5/developer-experience-guide/cli/config-app.md",version:"v0.3.5",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616664342,formattedLastUpdatedAt:"3/25/2021",sidebar:"version-v0.3.5/docs",previous:{title:"Setting Up Deployment Environment",permalink:"/zh/docs/v0.3.5/developer-experience-guide/cli/config-enviroments"},next:{title:"vela_config",permalink:"/zh/docs/v0.3.5/cli-references/vela_config"}},l=[{value:"<code>vela config set</code>",id:"vela-config-set",children:[]},{value:"<code>vela config get</code>",id:"vela-config-get",children:[]},{value:"<code>vela config del</code>",id:"vela-config-del",children:[]},{value:"<code>vela config ls</code>",id:"vela-config-ls",children:[]},{value:"Configure env in application",id:"configure-env-in-application",children:[]}],p={toc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"vela")," provides a ",Object(o.b)("inlineCode",{parentName:"p"},"config")," command to manage config data."),Object(o.b)("h2",{id:"vela-config-set"},Object(o.b)("inlineCode",{parentName:"h2"},"vela config set")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b c=d\nreading existing config data and merging with user input\nconfig data saved successfully \u2705\n")),Object(o.b)("h2",{id:"vela-config-get"},Object(o.b)("inlineCode",{parentName:"h2"},"vela config get")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config get test\nData:\n  a: b\n  c: d\n")),Object(o.b)("h2",{id:"vela-config-del"},Object(o.b)("inlineCode",{parentName:"h2"},"vela config del")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config del test\nconfig (test) deleted successfully\n")),Object(o.b)("h2",{id:"vela-config-ls"},Object(o.b)("inlineCode",{parentName:"h2"},"vela config ls")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b\n$ vela config set test2 c=d\n$ vela config ls\nNAME\ntest\ntest2\n")),Object(o.b)("h2",{id:"configure-env-in-application"},"Configure env in application"),Object(o.b)("p",null,"The config data can be set as the env in applications."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config set demo DEMO_HELLO=helloworld\n")),Object(o.b)("p",null,"Save the following to ",Object(o.b)("inlineCode",{parentName:"p"},"vela.yaml")," in current directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"name: testapp\nservices:\n  env-config-demo:\n    image: heroku/nodejs-hello-world\n    config: demo\n")),Object(o.b)("p",null,"Then run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (env-config-demo)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc env-config-demo\n")),Object(o.b)("p",null,"Check env var:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ vela exec testapp -- printenv | grep DEMO_HELLO\nDEMO_HELLO=helloworld\n")))}d.isMDXComponent=!0},263:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,b=s["".concat(i,".").concat(u)]||s[u]||g[u]||o;return t?r.a.createElement(b,c(c({ref:n},p),{},{components:t})):r.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);