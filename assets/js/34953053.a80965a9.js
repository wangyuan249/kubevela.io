(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),c=(t(0),t(263)),i={},a={unversionedId:"cli-references/vela_completion_zsh",id:"version-v0.3.5/cli-references/vela_completion_zsh",isDocsHomePage:!1,title:"vela_completion_zsh",description:"vela completion zsh",source:"@site/versioned_docs/version-v0.3.5/cli-references/vela_completion_zsh.md",slug:"/cli-references/vela_completion_zsh",permalink:"/docs/v0.3.5/cli-references/vela_completion_zsh",editUrl:"https://github.com/oam-dev/kubevela.io/versioned_docs/version-v0.3.5/cli-references/vela_completion_zsh.md",version:"v0.3.5",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616664342,formattedLastUpdatedAt:"3/25/2021"},l=[{value:"vela completion zsh",id:"vela-completion-zsh",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"vela-completion-zsh"},"vela completion zsh"),Object(c.b)("p",null,"generate autocompletions script for zsh"),Object(c.b)("h3",{id:"synopsis"},"Synopsis"),Object(c.b)("p",null,"Generate the autocompletion script for Vela for the zsh shell."),Object(c.b)("p",null,"To load completions in your current shell session:\n$ source <(vela completion zsh)"),Object(c.b)("p",null,'To load completions for every new session, execute once:\n$ vela completion zsh > "${fpath',"[1]",'}/_vela"'),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"vela completion zsh\n")),Object(c.b)("h3",{id:"options"},"Options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -h, --help   help for zsh\n")),Object(c.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(c.b)("h3",{id:"see-also"},"SEE ALSO"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/v0.3.5/cli-references/vela_completion"},"vela completion"),"\t - Output shell completion code for the specified shell (bash or zsh)")),Object(c.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}p.isMDXComponent=!0},263:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return t?o.a.createElement(b,a(a({ref:n},s),{},{components:t})):o.a.createElement(b,a({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);