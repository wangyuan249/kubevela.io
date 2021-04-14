(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{207:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),c=(t(0),t(307)),o={title:"Define resources located in defferent namespace with application"},i={unversionedId:"cue/cross-namespace-resource",id:"version-v1.0/cue/cross-namespace-resource",isDocsHomePage:!1,title:"Define resources located in defferent namespace with application",description:"In this section, we will introduce how to use cue template create resources (workload/trait) in different namespace with the application.",source:"@site/versioned_docs/version-v1.0/cue/cross-namespace-resource.md",slug:"/cue/cross-namespace-resource",permalink:"/docs/v1.0/cue/cross-namespace-resource",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/cue/cross-namespace-resource.md",version:"v1.0",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618390410,formattedLastUpdatedAt:"4/14/2021"},s=[{value:"Usage",id:"usage",children:[]}],p={toc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In this section, we will introduce how to use cue template create resources (workload/trait) in different namespace with the application."),Object(c.b)("p",null,"By default, the ",Object(c.b)("inlineCode",{parentName:"p"},"metadata.namespace")," of K8s resource in CuE template is automatically filled with the same namespace of the application."),Object(c.b)("p",null,"If you want to create K8s resources running in a specific namespace witch is different with the application, you can set the ",Object(c.b)("inlineCode",{parentName:"p"},"metadata.namespace")," field.\nKubeVela will create the resources in the specified namespace, and create a resourceTracker object as owener of those resources."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\nspec:\n  definitionRef:\n    name: deployments.apps\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            name:  string\n            image: string\n            namespace: string  # make this parameter `namespace` as keyword which represents the resource maybe located in defferent namespace with application\n        }\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n                metadata: {\n                   namespace: my-namespace\n                }\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": parameter.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": parameter.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  parameter.name\n                            image: parameter.image\n                        }]\n                    }}}\n        }\n')))}u.isMDXComponent=!0},307:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),d=a,f=l["".concat(o,".").concat(d)]||l[d]||m[d]||c;return t?r.a.createElement(f,i(i({ref:n},p),{},{components:t})):r.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);