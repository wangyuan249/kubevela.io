(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{263:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,d=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return a?r.a.createElement(d,l(l({ref:t},c),{},{components:a})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},343:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/install-metrics-server-in-ASK-2529e58d4997fdec13b35fa6c962a1a3.jpg"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(263)),i={title:"FAQ"},l={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"\x3c!-- - Compare to X",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/oam-dev/kubevela.io/docs/faq.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1616663193,formattedLastUpdatedAt:"3/25/2021",sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/roadmap/roadmap"}},s=[{value:"Compare to X",id:"compare-to-x",children:[{value:"What is the difference between KubeVela and Helm?",id:"what-is-the-difference-between-kubevela-and-helm",children:[]}]},{value:"Issues",id:"issues",children:[{value:"Error: unable to create new content in namespace cert-manager because it is being terminated",id:"error-unable-to-create-new-content-in-namespace-cert-manager-because-it-is-being-terminated",children:[]},{value:"Error: ScopeDefinition exists",id:"error-scopedefinition-exists",children:[]},{value:"You have reached your pull rate limit",id:"you-have-reached-your-pull-rate-limit",children:[]},{value:"Warning: Namespace cert-manager exists",id:"warning-namespace-cert-manager-exists",children:[]},{value:"How to fix issue: MutatingWebhookConfiguration mutating-webhook-configuration exists?",id:"how-to-fix-issue-mutatingwebhookconfiguration-mutating-webhook-configuration-exists",children:[]}]},{value:"Operating",id:"operating",children:[{value:"Autoscale: how to enable metrics server in various Kubernetes clusters?",id:"autoscale-how-to-enable-metrics-server-in-various-kubernetes-clusters",children:[]}]}],c={toc:s};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"compare-to-x"},"Compare to X"),Object(o.b)("h3",{id:"what-is-the-difference-between-kubevela-and-helm"},"What is the difference between KubeVela and Helm?"),Object(o.b)("p",null,"KubeVela is a platform builder tool to create easy-to-use yet extensible app delivery/management systems with Kubernetes. KubeVela relies on Helm as templating engine and package format for apps. But Helm is not the only templating module that KubeVela supports. Another first-class supported approach is CUE. "),Object(o.b)("p",null,"Also, KubeVela is by design a Kubernetes controller (i.e. works on server side), even for its Helm part, a Helm operator will be installed."),Object(o.b)("h2",{id:"issues"},"Issues"),Object(o.b)("h3",{id:"error-unable-to-create-new-content-in-namespace-cert-manager-because-it-is-being-terminated"},"Error: unable to create new content in namespace cert-manager because it is being terminated"),Object(o.b)("p",null,"Occasionally you might hit the issue as below. It happens when the last KubeVela release deletion hasn't completed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nFailed to install the chart with error: serviceaccounts "cert-manager-cainjector" is forbidden: unable to create new content in namespace cert-manager because it is being terminated\nfailed to create resource\nhelm.sh/helm/v3/pkg/kube.(*Client).Update.func1\n    /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/kube/client.go:190\n...\nError: failed to create resource: serviceaccounts "cert-manager-cainjector" is forbidden: unable to create new content in namespace cert-manager because it is being terminated\n')),Object(o.b)("p",null,"Take a break and try again in a few seconds."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ vela install\n- Installing Vela Core Chart:\nVela system along with OAM runtime already exist.\nAutomatically discover capabilities successfully \u2705 Add(0) Update(0) Delete(8)\n\nTYPE        CATEGORY    DESCRIPTION\n-task       workload    One-off task to run a piece of code or script to completion\n-webservice workload    Long-running scalable service with stable endpoint to receive external traffic\n-worker     workload    Long-running scalable backend worker without network endpoint\n-autoscale  trait       Automatically scale the app following certain triggers or metrics\n-metrics    trait       Configure metrics targets to be monitored for the app\n-rollout    trait       Configure canary deployment strategy to release the app\n-route      trait       Configure route policy to the app\n-scaler     trait       Manually scale the app\n\n- Finished successfully.\n")),Object(o.b)("p",null,"And manually apply all WorkloadDefinition and TraitDefinition manifests to have all capabilities back."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ kubectl apply -f charts/vela-core/templates/defwithtemplate\ntraitdefinition.core.oam.dev/autoscale created\ntraitdefinition.core.oam.dev/scaler created\ntraitdefinition.core.oam.dev/metrics created\ntraitdefinition.core.oam.dev/rollout created\ntraitdefinition.core.oam.dev/route created\nworkloaddefinition.core.oam.dev/task created\nworkloaddefinition.core.oam.dev/webservice created\nworkloaddefinition.core.oam.dev/worker created\n\n$ vela workloads\nAutomatically discover capabilities successfully \u2705 Add(8) Update(0) Delete(0)\n\nTYPE        CATEGORY    DESCRIPTION\n+task       workload    One-off task to run a piece of code or script to completion\n+webservice workload    Long-running scalable service with stable endpoint to receive external traffic\n+worker     workload    Long-running scalable backend worker without network endpoint\n+autoscale  trait       Automatically scale the app following certain triggers or metrics\n+metrics    trait       Configure metrics targets to be monitored for the app\n+rollout    trait       Configure canary deployment strategy to release the app\n+route      trait       Configure route policy to the app\n+scaler     trait       Manually scale the app\n\nNAME        DESCRIPTION\ntask        One-off task to run a piece of code or script to completion\nwebservice  Long-running scalable service with stable endpoint to receive external traffic\nworker      Long-running scalable backend worker without network endpoint\n")),Object(o.b)("h3",{id:"error-scopedefinition-exists"},"Error: ScopeDefinition exists"),Object(o.b)("p",null,"Occasionally you might hit the issue as below. It happens when there is an old OAM Kubernetes Runtime release, or you applied ",Object(o.b)("inlineCode",{parentName:"p"},"ScopeDefinition")," before."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ vela install\n  - Installing Vela Core Chart:\n  install chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\n  Failed to install the chart with error: ScopeDefinition "healthscopes.core.oam.dev" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: key "meta.helm.sh/release-name" must equal "kubevela": current value is "oam"; annotation validation error: key "meta.helm.sh/release-namespace" must equal "vela-system": current value is "oam-system"\n  rendered manifests contain a resource that already exists. Unable to continue with install\n  helm.sh/helm/v3/pkg/action.(*Install).Run\n    /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/action/install.go:274\n  ...\n  Error: rendered manifests contain a resource that already exists. Unable to continue with install: ScopeDefinition "healthscopes.core.oam.dev" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; annotation validation error: key "meta.helm.sh/release-name" must equal "kubevela": current value is "oam"; annotation validation error: key "meta.helm.sh/release-namespace" must equal "vela-system": current value is "oam-system"\n')),Object(o.b)("p",null,"Delete ",Object(o.b)("inlineCode",{parentName:"p"},"ScopeDefinition"),' "healthscopes.core.oam.dev" and try again.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ kubectl delete ScopeDefinition "healthscopes.core.oam.dev"\nscopedefinition.core.oam.dev "healthscopes.core.oam.dev" deleted\n\n$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nSuccessfully installed the chart, status: deployed, last deployed time = 2020-12-03 16:26:41.491426 +0800 CST m=+4.026069452\nWARN: handle workload template `containerizedworkloads.core.oam.dev` failed: no template found, you will unable to use this workload capabilityWARN: handle trait template `manualscalertraits.core.oam.dev` failed\n: no template found, you will unable to use this trait capabilityAutomatically discover capabilities successfully \u2705 Add(8) Update(0) Delete(0)\n\nTYPE        CATEGORY    DESCRIPTION\n+task       workload    One-off task to run a piece of code or script to completion\n+webservice workload    Long-running scalable service with stable endpoint to receive external traffic\n+worker     workload    Long-running scalable backend worker without network endpoint\n+autoscale  trait       Automatically scale the app following certain triggers or metrics\n+metrics    trait       Configure metrics targets to be monitored for the app\n+rollout    trait       Configure canary deployment strategy to release the app\n+route      trait       Configure route policy to the app\n+scaler     trait       Manually scale the app\n\n- Finished successfully.\n')),Object(o.b)("h3",{id:"you-have-reached-your-pull-rate-limit"},"You have reached your pull rate limit"),Object(o.b)("p",null,"When you look into the logs of Pod kubevela-vela-core and found the issue as below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ kubectl get pod -n vela-system -l app.kubernetes.io/name=vela-core\nNAME                                 READY   STATUS    RESTARTS   AGE\nkubevela-vela-core-f8b987775-wjg25   0/1     -         0          35m\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Error response from daemon: toomanyrequests: You have reached your pull rate limit. You may increase the limit by\nauthenticating and upgrading: ",Object(o.b)("a",{parentName:"p",href:"https://www.docker.com/increase-rate-limit"},"https://www.docker.com/increase-rate-limit"))),Object(o.b)("p",null,"You can use github container registry instead."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ docker pull ghcr.io/oam-dev/kubevela/vela-core:latest\n")),Object(o.b)("h3",{id:"warning-namespace-cert-manager-exists"},"Warning: Namespace cert-manager exists"),Object(o.b)("p",null,"If you hit the issue as below, an ",Object(o.b)("inlineCode",{parentName:"p"},"cert-manager")," release might exist whose namespace and RBAC related resource conflict\nwith KubeVela."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nFailed to install the chart with error: Namespace "cert-manager" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\nrendered manifests contain a resource that already exists. Unable to continue with install\nhelm.sh/helm/v3/pkg/action.(*Install).Run\n        /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/action/install.go:274\n...\n        /opt/hostedtoolcache/go/1.14.12/x64/src/runtime/asm_amd64.s:1373\nError: rendered manifests contain a resource that already exists. Unable to continue with install: Namespace "cert-manager" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\n')),Object(o.b)("p",null,"Try these steps to fix the problem."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Delete release ",Object(o.b)("inlineCode",{parentName:"li"},"cert-manager")),Object(o.b)("li",{parentName:"ul"},"Delete namespace ",Object(o.b)("inlineCode",{parentName:"li"},"cert-manager")),Object(o.b)("li",{parentName:"ul"},"Install KubeVela again")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'$ helm delete cert-manager -n cert-manager\nrelease "cert-manager" uninstalled\n\n$ kubectl delete ns cert-manager\nnamespace "cert-manager" deleted\n\n$ vela install\n- Installing Vela Core Chart:\ninstall chart vela-core, version 0.1.0, desc : A Helm chart for Kube Vela core, contains 35 file\nSuccessfully installed the chart, status: deployed, last deployed time = 2020-12-04 10:46:46.782617 +0800 CST m=+4.248889379\nAutomatically discover capabilities successfully \u2705 (no changes)\n\nTYPE        CATEGORY    DESCRIPTION\ntask        workload    One-off task to run a piece of code or script to completion\nwebservice  workload    Long-running scalable service with stable endpoint to receive external traffic\nworker      workload    Long-running scalable backend worker without network endpoint\nautoscale   trait       Automatically scale the app following certain triggers or metrics\nmetrics     trait       Configure metrics targets to be monitored for the app\nrollout     trait       Configure canary deployment strategy to release the app\nroute       trait       Configure route policy to the app\nscaler      trait       Manually scale the app\n- Finished successfully.\n')),Object(o.b)("h3",{id:"how-to-fix-issue-mutatingwebhookconfiguration-mutating-webhook-configuration-exists"},"How to fix issue: MutatingWebhookConfiguration mutating-webhook-configuration exists?"),Object(o.b)("p",null,"If you deploy some other services which will apply MutatingWebhookConfiguration mutating-webhook-configuration, installing\nKubeVela will hit the issue as below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'- Installing Vela Core Chart:\ninstall chart vela-core, version v0.2.1, desc : A Helm chart for Kube Vela core, contains 36 file\nFailed to install the chart with error: MutatingWebhookConfiguration "mutating-webhook-configuration" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\nrendered manifests contain a resource that already exists. Unable to continue with install\nhelm.sh/helm/v3/pkg/action.(*Install).Run\n    /home/runner/go/pkg/mod/helm.sh/helm/v3@v3.2.4/pkg/action/install.go:274\ngithub.com/oam-dev/kubevela/pkg/commands.InstallOamRuntime\n    /home/runner/work/kubevela/kubevela/pkg/commands/system.go:259\ngithub.com/oam-dev/kubevela/pkg/commands.(*initCmd).run\n    /home/runner/work/kubevela/kubevela/pkg/commands/system.go:162\ngithub.com/oam-dev/kubevela/pkg/commands.NewInstallCommand.func2\n    /home/runner/work/kubevela/kubevela/pkg/commands/system.go:119\ngithub.com/spf13/cobra.(*Command).execute\n    /home/runner/go/pkg/mod/github.com/spf13/cobra@v1.1.1/command.go:850\ngithub.com/spf13/cobra.(*Command).ExecuteC\n    /home/runner/go/pkg/mod/github.com/spf13/cobra@v1.1.1/command.go:958\ngithub.com/spf13/cobra.(*Command).Execute\n    /home/runner/go/pkg/mod/github.com/spf13/cobra@v1.1.1/command.go:895\nmain.main\n    /home/runner/work/kubevela/kubevela/references/cmd/cli/main.go:16\nruntime.main\n    /opt/hostedtoolcache/go/1.14.13/x64/src/runtime/proc.go:203\nruntime.goexit\n    /opt/hostedtoolcache/go/1.14.13/x64/src/runtime/asm_amd64.s:1373\nError: rendered manifests contain a resource that already exists. Unable to continue with install: MutatingWebhookConfiguration "mutating-webhook-configuration" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "kubevela"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "vela-system"\n')),Object(o.b)("p",null,"To fix this issue, please upgrade KubeVela Cli ",Object(o.b)("inlineCode",{parentName:"p"},"vela")," version to be higher than ",Object(o.b)("inlineCode",{parentName:"p"},"v0.2.2")," from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/releases"},"KubeVela releases"),"."),Object(o.b)("h2",{id:"operating"},"Operating"),Object(o.b)("h3",{id:"autoscale-how-to-enable-metrics-server-in-various-kubernetes-clusters"},"Autoscale: how to enable metrics server in various Kubernetes clusters?"),Object(o.b)("p",null,"Operating Autoscale depends on metrics server, so it has to be enabled in various clusters. Please check whether metrics server\nis enabled with command ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl top nodes")," or ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl top pods"),"."),Object(o.b)("p",null,"If the output is similar as below, the metrics is enabled."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl top nodes\nNAME                     CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%\ncn-hongkong.10.0.1.237   288m         7%     5378Mi          78%\ncn-hongkong.10.0.1.238   351m         8%     5113Mi          74%\n\n$ kubectl top pods\nNAME                          CPU(cores)   MEMORY(bytes)\nphp-apache-65f444bf84-cjbs5   0m           1Mi\nwordpress-55c59ccdd5-lf59d    1m           66Mi\n")),Object(o.b)("p",null,"Or you have to manually enable metrics server in your Kubernetes cluster."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ACK (Alibaba Cloud Container Service for Kubernetes)")),Object(o.b)("p",null,"Metrics server is already enabled."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ASK (Alibaba Cloud Serverless Kubernetes)")),Object(o.b)("p",null,"Metrics server has to be enabled in ",Object(o.b)("inlineCode",{parentName:"p"},"Operations/Add-ons")," section of ",Object(o.b)("a",{parentName:"p",href:"https://cs.console.aliyun.com/"},"Alibaba Cloud console")," as below."),Object(o.b)("p",null,Object(o.b)("img",{src:a(343).default})),Object(o.b)("p",null,"Please refer to ",Object(o.b)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/176515.html"},"metrics server debug guide")," if you hit more issue."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Kind")),Object(o.b)("p",null,"Install metrics server as below, or you can install the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/metrics-server#installation"},"latest version"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.3.7/components.yaml\n")),Object(o.b)("p",null,"Also add the following part under ",Object(o.b)("inlineCode",{parentName:"p"},".spec.template.spec.containers")," in the yaml file loaded by ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl edit deploy -n kube-system metrics-server"),"."),Object(o.b)("p",null,"Noted: This is just a walk-around, not for production-level use."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"command:\n- /metrics-server\n- --kubelet-insecure-tls\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MiniKube")),Object(o.b)("p",null,"Enable it with following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ minikube addons enable metrics-server\n")),Object(o.b)("p",null,"Have fun to ",Object(o.b)("a",{parentName:"p",href:"./developer-experience-guide/extensions/set-autoscale"},"set autoscale")," on your application."))}u.isMDXComponent=!0}}]);