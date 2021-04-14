(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(106)),i={id:"windows",title:"Windows"},c={unversionedId:"install/windows",id:"install/windows",isDocsHomePage:!1,title:"Windows",description:"This application compiles and runs just fine on Windows.",source:"@site/docs/install/windows.md",slug:"/install/windows",permalink:"/docs/install/windows",version:"current",sidebar:"someSidebar",previous:{title:"Linux",permalink:"/docs/install/linux"},next:{title:"CloudKey",permalink:"/docs/install/cloudkey"}},l=[{value:"First",id:"first",children:[]},{value:"Install",id:"install",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This application compiles and runs just fine on Windows."),Object(o.b)("h2",{id:"first"},"First"),Object(o.b)("p",null,"Make sure you have set up a user on your controller for UniFi Poller to poll. You must have\na working (and supported) version of ",Object(o.b)("a",{parentName:"p",href:"../dependencies/grafana"},"Grafana")," and at\nleast one of ",Object(o.b)("a",{parentName:"p",href:"../dependencies/influxDB"},"InfluxDB")," or ",Object(o.b)("a",{parentName:"p",href:"../dependencies/prometheus"},"Prometheus"),".\nIf you don't have then, follow these instructions for installing\n",Object(o.b)("a",{parentName:"p",href:"../dependencies/influxdb"},"InfluxDB")," and ",Object(o.b)("a",{parentName:"p",href:"../dependencies/grafana"},"Grafana"),"."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("p",null,"As it is now, a pre-compiled windows binary (.exe) is provided on the Releases page.\nCombine this with a valid config file and you can run this on Windows.\nPlease contact us on Discord if you need any help."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"unifi-poller.exe -c up.conf\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When configuring make sure that you do ",Object(o.b)("strong",{parentName:"p"},"not")," include ",Object(o.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller\nif you are using ",Object(o.b)("inlineCode",{parentName:"p"},"unifios"),". Those are: UDM Pro, UDM, or CkoudKey with recent firmware."))))}p.isMDXComponent=!0}}]);