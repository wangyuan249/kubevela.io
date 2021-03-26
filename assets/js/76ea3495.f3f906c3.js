(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{155:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(263)),i={},c={unversionedId:"cli-references/vela_port-forward",id:"cli-references/vela_port-forward",isDocsHomePage:!1,title:"vela_port-forward",description:"vela port-forward",source:"@site/docs/cli-references/vela_port-forward.md",slug:"/cli-references/vela_port-forward",permalink:"/docs/cli-references/vela_port-forward",editUrl:"https://github.com/oam-dev/kubevela.io/docs/cli-references/vela_port-forward.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"vela_ls",permalink:"/docs/cli-references/vela_ls"},next:{title:"vela_show",permalink:"/docs/cli-references/vela_show"}},l=[{value:"vela port-forward",id:"vela-port-forward",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"vela-port-forward"},"vela port-forward"),Object(a.b)("p",null,"Forward local ports to services in an application"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Forward local ports to services in an application"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"vela port-forward APP_NAME [flags]\n")),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"port-forward APP_NAME [options] [LOCAL_PORT:]REMOTE_PORT [...[LOCAL_PORT_N:]REMOTE_PORT_N]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"      --address strings                Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, vela will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind. (default [localhost])\n  -h, --help                           help for port-forward\n      --pod-running-timeout duration   The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running (default 1m0s)\n      --route                          forward ports from route trait service\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/cli-references/vela"},"vela"),"\t - ")),Object(a.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}p.isMDXComponent=!0},263:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=n,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);