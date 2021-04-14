(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{307:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,u=d["".concat(c,".").concat(g)]||d[g]||b[g]||r;return t?o.a.createElement(u,i(i({ref:n},p),{},{components:t})):o.a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(307)),c={title:"Configuring data/env in Application"},i={unversionedId:"developers/config-app",id:"version-v1.0/developers/config-app",isDocsHomePage:!1,title:"Configuring data/env in Application",description:"vela provides a config command to manage config data.",source:"@site/versioned_docs/version-v1.0/developers/config-app.md",slug:"/developers/config-app",permalink:"/docs/v1.0/developers/config-app",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/config-app.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-v1.0/docs",previous:{title:"Managing Capabilities",permalink:"/docs/v1.0/developers/cap-center"},next:{title:"vela components",permalink:"/docs/v1.0/cli/vela_components"}},l=[{value:"<code>vela config set</code>",id:"vela-config-set",children:[]},{value:"<code>vela config get</code>",id:"vela-config-get",children:[]},{value:"<code>vela config del</code>",id:"vela-config-del",children:[]},{value:"<code>vela config ls</code>",id:"vela-config-ls",children:[]},{value:"Configure env in application",id:"configure-env-in-application",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"vela")," provides a ",Object(r.b)("inlineCode",{parentName:"p"},"config")," command to manage config data."),Object(r.b)("h2",{id:"vela-config-set"},Object(r.b)("inlineCode",{parentName:"h2"},"vela config set")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b c=d\nreading existing config data and merging with user input\nconfig data saved successfully \u2705\n")),Object(r.b)("h2",{id:"vela-config-get"},Object(r.b)("inlineCode",{parentName:"h2"},"vela config get")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config get test\nData:\n  a: b\n  c: d\n")),Object(r.b)("h2",{id:"vela-config-del"},Object(r.b)("inlineCode",{parentName:"h2"},"vela config del")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config del test\nconfig (test) deleted successfully\n")),Object(r.b)("h2",{id:"vela-config-ls"},Object(r.b)("inlineCode",{parentName:"h2"},"vela config ls")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config set test a=b\n$ vela config set test2 c=d\n$ vela config ls\nNAME\ntest\ntest2\n")),Object(r.b)("h2",{id:"configure-env-in-application"},"Configure env in application"),Object(r.b)("p",null,"The config data can be set as the env in applications."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ vela config set demo DEMO_HELLO=helloworld\n")),Object(r.b)("p",null,"Save the following to ",Object(r.b)("inlineCode",{parentName:"p"},"vela.yaml")," in current directory:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"name: testapp\nservices:\n  env-config-demo:\n    image: heroku/nodejs-hello-world\n    config: demo\n")),Object(r.b)("p",null,"Then run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\nParsing vela.yaml ...\nLoading templates ...\n\nRendering configs for service (env-config-demo)...\nWriting deploy config to (.vela/deploy.yaml)\n\nApplying deploy configs ...\nChecking if app has been deployed...\nApp has not been deployed, creating a new deployment...\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward testapp\n             SSH: vela exec testapp\n         Logging: vela logs testapp\n      App status: vela status testapp\n  Service status: vela status testapp --svc env-config-demo\n")),Object(r.b)("p",null,"Check env var:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ vela exec testapp -- printenv | grep DEMO_HELLO\nDEMO_HELLO=helloworld\n")))}s.isMDXComponent=!0}}]);