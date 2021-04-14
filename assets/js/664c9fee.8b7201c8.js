(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(307)),l={title:"Task"},c={unversionedId:"developers/references/component-types/task",id:"developers/references/component-types/task",isDocsHomePage:!1,title:"Task",description:"Description",source:"@site/docs/developers/references/component-types/task.md",slug:"/developers/references/component-types/task",permalink:"/docs/developers/references/component-types/task",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/references/component-types/task.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618298461,formattedLastUpdatedAt:"4/13/2021",sidebar:"docs",previous:{title:"Webservice",permalink:"/docs/developers/references/component-types/webservice"},next:{title:"Worker",permalink:"/docs/developers/references/component-types/worker"}},i=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Describes jobs that run code or a script to completion."),Object(o.b)("h2",{id:"specification"},"Specification"),Object(o.b)("p",null,"List of all configuration options for a ",Object(o.b)("inlineCode",{parentName:"p"},"Task")," workload type."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'...\n    image: perl\n    count: 10\n    cmd: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cmd"),Object(o.b)("td",{parentName:"tr",align:null},"Commands to run in the container"),Object(o.b)("td",{parentName:"tr",align:null},"[]string"),Object(o.b)("td",{parentName:"tr",align:null},"false"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"count"),Object(o.b)("td",{parentName:"tr",align:null},"specify number of tasks to run in parallel"),Object(o.b)("td",{parentName:"tr",align:null},"int"),Object(o.b)("td",{parentName:"tr",align:null},"true"),Object(o.b)("td",{parentName:"tr",align:null},"1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"restart"),Object(o.b)("td",{parentName:"tr",align:null},"Define the job restart policy, the value can only be Never or OnFailure. By default, it's Never."),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"true"),Object(o.b)("td",{parentName:"tr",align:null},"Never")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"image"),Object(o.b)("td",{parentName:"tr",align:null},"Which image would you like to use for your service"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"true"),Object(o.b)("td",{parentName:"tr",align:null})))))}b.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);