(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),c=a(7),i=(a(0),a(263)),l={title:"Managing Capabilities"},r={unversionedId:"developer-experience-guide/cli/cap-center",id:"developer-experience-guide/cli/cap-center",isDocsHomePage:!1,title:"Managing Capabilities",description:"Managing Capabilities",source:"@site/docs/developer-experience-guide/cli/cap-center.md",slug:"/developer-experience-guide/cli/cap-center",permalink:"/docs/developer-experience-guide/cli/cap-center",editUrl:"https://github.com/oam-dev/kubevela.io/docs/developer-experience-guide/cli/cap-center.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Execute Commands in Container",permalink:"/docs/developer-experience-guide/cli/exec-cmd"},next:{title:"Setting Up Deployment Environment",permalink:"/docs/developer-experience-guide/cli/config-enviroments"}},o=[{value:"Managing Capabilities",id:"managing-capabilities",children:[]},{value:"Add a capability center",id:"add-a-capability-center",children:[]},{value:"List capability centers",id:"list-capability-centers",children:[]},{value:"Optional Remove a capability center",id:"optional-remove-a-capability-center",children:[]},{value:"List all available capabilities in capability center",id:"list-all-available-capabilities-in-capability-center",children:[]},{value:"Install a capability from capability center",id:"install-a-capability-from-capability-center",children:[]},{value:"Use the newly installed capability",id:"use-the-newly-installed-capability",children:[]},{value:"Uninstall a capability",id:"uninstall-a-capability",children:[]}],p={toc:o};function b(e){var t=e.components,l=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"managing-capabilities"},"Managing Capabilities"),Object(i.b)("p",null,"In KubeVela, developers can install more capabilities (i.e. new workload types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as ",Object(i.b)("em",{parentName:"p"},"Capability Centers"),". "),Object(i.b)("p",null,"KubeVela is able to discover OAM definition files in this repo automatically and sync them to your own KubeVela platform."),Object(i.b)("h2",{id:"add-a-capability-center"},"Add a capability center"),Object(i.b)("p",null,"Add and sync a capability center in KubeVela:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center config my-center https://github.com/oam-dev/catalog/tree/master/registry\nsuccessfully sync 1/1 from my-center remote center\nSuccessfully configured capability center my-center and sync from remote\n\n$ vela cap center sync my-center\nsuccessfully sync 1/1 from my-center remote center\nsync finished\n")),Object(i.b)("p",null,"Now, this capability center ",Object(i.b)("inlineCode",{parentName:"p"},"my-center")," is ready to use."),Object(i.b)("h2",{id:"list-capability-centers"},"List capability centers"),Object(i.b)("p",null,"You are allowed to add more capability centers and list them."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center ls\nNAME        ADDRESS\nmy-center   https://github.com/oam-dev/catalog/tree/master/registry\n")),Object(i.b)("h2",{id:"optional-remove-a-capability-center"},"[Optional]"," Remove a capability center"),Object(i.b)("p",null,"Or, remove one."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center remove my-center\n")),Object(i.b)("h2",{id:"list-all-available-capabilities-in-capability-center"},"List all available capabilities in capability center"),Object(i.b)("p",null,"Or, list all available capabilities in certain center."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap ls my-center\nNAME        CENTER      TYPE    DEFINITION                      STATUS      APPLIES-TO\nkubewatch   my-center   trait   kubewatches.labs.bitnami.com    uninstalled []\n")),Object(i.b)("h2",{id:"install-a-capability-from-capability-center"},"Install a capability from capability center"),Object(i.b)("p",null,"Now let's try to install the new trait named ",Object(i.b)("inlineCode",{parentName:"p"},"kubewatch")," from ",Object(i.b)("inlineCode",{parentName:"p"},"my-center")," to your own KubeVela platform."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://github.com/bitnami-labs/kubewatch"},"KubeWatch")," is a Kubernetes plugin that watches events and publishes notifications to Slack channel etc. We can use it as a trait to watch important changes of your app and notify the platform administrators via Slack.")),Object(i.b)("p",null,"Install ",Object(i.b)("inlineCode",{parentName:"p"},"kubewatch")," trait from ",Object(i.b)("inlineCode",{parentName:"p"},"my-center"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ vela cap install my-center/kubewatch\nInstalling trait capability kubewatch\n"my-repo" has been added to your repositories\n2020/11/06 16:19:30 [debug] creating 1 resource(s)\n2020/11/06 16:19:30 [debug] CRD kubewatches.labs.bitnami.com is already present. Skipping.\n2020/11/06 16:19:37 [debug] creating 3 resource(s)\nSuccessfully installed chart (kubewatch) with release name (kubewatch)\nSuccessfully installed capability kubewatch from my-center\n')),Object(i.b)("h2",{id:"use-the-newly-installed-capability"},"Use the newly installed capability"),Object(i.b)("p",null,"Let's check the ",Object(i.b)("inlineCode",{parentName:"p"},"kubewatch")," trait appears in your platform firstly:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela traits\nSynchronizing capabilities from cluster\u231b ...\nSync capabilities successfully \u2705 (no changes)\nTYPE        CATEGORY    DESCRIPTION\nkubewatch   trait       Add a watch for resource\n...\n")),Object(i.b)("p",null,"Great! Now let's deploy an app via Appfile."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF > vela.yaml\nname: testapp\nservices:\n  testsvc:\n    type: webservice\n    image: crccheck/hello-world\n    port: 8000\n    route:\n      domain: testsvc.example.com\nEOF\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(i.b)("p",null,"Then let's add ",Object(i.b)("inlineCode",{parentName:"p"},"kubewatch")," as a trait in this Appfile."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF >> vela.yaml\n    kubewatch:\n      webhook: https://hooks.slack.com/<your-token>\nEOF\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"https://hooks.slack.com/<your-token>")," is the Slack channel that your platform administrators are keeping an eye on.")),Object(i.b)("p",null,"Update the deployment:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ vela up\n")),Object(i.b)("p",null,"Now, your platform administrators should receive notifications whenever important changes happen to your app. For example, a fresh new deployment."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Image of Kubewatch",src:a(356).default})),Object(i.b)("h2",{id:"uninstall-a-capability"},"Uninstall a capability"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: make sure no apps are using the capability before uninstalling.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap uninstall my-center/kubewatch\nSuccessfully removed chart (kubewatch) with release name (kubewatch)\n")))}b.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var p=c.a.createContext({}),b=function(e){var t=c.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=b(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return a?c.a.createElement(m,r(r({ref:t},p),{},{components:a})):c.a.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},356:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/kubewatch-notif-fb69c2e860b7a8082f83d1415aafccba.jpg"}}]);