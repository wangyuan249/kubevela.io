(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(263)),c={},o={unversionedId:"developer-experience-guide/extensions/set-metrics",id:"developer-experience-guide/extensions/set-metrics",isDocsHomePage:!1,title:"set-metrics",description:"Monitoring Application",source:"@site/docs/developer-experience-guide/extensions/set-metrics.md",slug:"/developer-experience-guide/extensions/set-metrics",permalink:"/docs/developer-experience-guide/extensions/set-metrics",editUrl:"https://github.com/oam-dev/kubevela.io/docs/developer-experience-guide/extensions/set-metrics.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021"},p=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Setting metrics policy",id:"setting-metrics-policy",children:[]}],l={toc:p};function s(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"monitoring-application"},"Monitoring Application"),Object(i.b)("p",null,"If your application has exposed metrics, you can easily tell the platform how to collect the metrics data from your app with ",Object(i.b)("inlineCode",{parentName:"p"},"metrics")," capability."),Object(i.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(i.b)("p",null,"Make sure metrics trait controller is installed in your cluster"),Object(i.b)("p",null,"Install metrics trait controller with helm"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add helm chart repo for metrics trait"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add oam.catalog  http://oam.dev/catalog/\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update the chart repo"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install metrics trait controller"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system metricstrait oam.catalog/metricstrait\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: metrics is one of the extension capabilities ",Object(i.b)("a",{parentName:"p",href:"../cli/cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",Object(i.b)("inlineCode",{parentName:"p"},"vela traits"),".")),Object(i.b)("h2",{id:"setting-metrics-policy"},"Setting metrics policy"),Object(i.b)("p",null,"Let's run ",Object(i.b)("a",{parentName:"p",href:"https://github.com/christianhxc/prometheus-tutorial"},Object(i.b)("inlineCode",{parentName:"a"},"christianhxc/gorandom:1.0"))," as an example app.\nThe app will emit random latencies as metrics."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Prepare Appfile:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ cat <<EOF > vela.yaml\n    name: metricapp\n    services:\n      metricapp:\n        type: webservice\n        image: christianhxc/gorandom:1.0\n        port: 8080\n\n        metrics:\n          enabled: true\n          format: prometheus\n          path: /metrics\n          port: 0\n          scheme: http\n  EOF\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The full specification of ",Object(i.b)("inlineCode",{parentName:"p"},"metrics")," could show up by ",Object(i.b)("inlineCode",{parentName:"p"},"$ vela show metrics")," or be found on ",Object(i.b)("a",{parentName:"p",href:"../../capability-references/metrics"},"its reference documentation"))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Deploy the application:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check status:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  $ vela status metricapp\n  About:\n\n    Name:       metricapp\n    Namespace:  default\n    Created at: 2020-11-11 17:00:59.436347573 -0800 PST\n    Updated at: 2020-11-11 17:01:06.511064661 -0800 PST\n\n  Services:\n\n    - Name: metricapp\n      Type: webservice\n      HEALTHY Ready: 1/1\n      Traits:\n        - \u2705 metrics: Monitoring port: 8080, path: /metrics, format: prometheus, schema: http.\n      Last Deployment:\n        Created at: 2020-11-11 17:00:59 -0800 PST\n        Updated at: 2020-11-11T17:01:06-08:00\n")))),Object(i.b)("p",null,"The metrics trait will automatically discover port and label to monitor if no parameters specified.\nIf more than one ports found, it will choose the first one by default."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"(Optional) Verify that the metrics are collected on Prometheus")),Object(i.b)("details",null,Object(i.b)("p",null,"Expose the port of Prometheus dashboard:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl --namespace monitoring port-forward `kubectl -n monitoring get pods -l prometheus=oam -o name` 9090\n")),Object(i.b)("p",null,"Then access the Prometheus dashboard via http://localhost:9090/targets"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Prometheus Dashboard",src:r(357).default}))))}s.isMDXComponent=!0},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||i;return r?a.a.createElement(d,o(o({ref:t},l),{},{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},357:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/metrics-ce1236dabe05eef5e4b57867b48b3c33.jpg"}}]);