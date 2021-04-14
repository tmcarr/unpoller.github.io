(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{104:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return f}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=t,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return a?r.a.createElement(f,c(c({ref:n},s),{},{components:a})):r.a.createElement(f,c({ref:n},s))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),i=(a(0),a(104)),l={id:"grafana",title:"Grafana"},c={unversionedId:"dependencies/grafana",id:"dependencies/grafana",isDocsHomePage:!1,title:"Grafana",description:"This page provides simple instructions on how to install Grafana.",source:"@site/docs/dependencies/grafana.md",slug:"/dependencies/grafana",permalink:"/docs/dependencies/grafana",version:"current",sidebar:"someSidebar",previous:{title:"Webserver",permalink:"/docs/install/webserver"},next:{title:"Prometheus",permalink:"/docs/dependencies/prometheus"}},o=[{value:"Plugins",id:"plugins",children:[]},{value:"Installing",id:"installing",children:[{value:"Linux",id:"linux",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Docker",id:"docker",children:[]}]},{value:"Configuring",id:"configuring",children:[]}],s={toc:o};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page provides simple instructions on how to install Grafana."),Object(i.b)("p",null,"You can find official instructions in the ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/installation/"},"Grafana Docs"),"."),Object(i.b)("p",null,"Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required."),Object(i.b)("h2",{id:"plugins"},"Plugins"),Object(i.b)("p",null,"This application uses a few Grafana plugins. Install them. Grafana must be installed first, see below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clock"),Object(i.b)("li",{parentName:"ul"},"Discrete (InfluxDB only)"),Object(i.b)("li",{parentName:"ul"},"PieChart")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"grafana-cli plugins install grafana-clock-panel\ngrafana-cli plugins install natel-discrete-panel\ngrafana-cli plugins install grafana-piechart-panel\n")),Object(i.b)("p",null,"If you're running Grafana in Docker, pass this environment variable/value to Grafana to install the plugins:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel\n")),Object(i.b)("h2",{id:"installing"},"Installing"),Object(i.b)("p",null,"This will set it up on localhost:3000 with admin/admin login."),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("h4",{id:"centos-7"},"CentOS 7"),Object(i.b)("p",null,"Get an RPM. ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/docs/installation/rpm/"},"https://grafana.com/docs/installation/rpm/")),Object(i.b)("h4",{id:"ubuntu-1804"},"Ubuntu 18.04"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'curl https://packages.grafana.com/gpg.key | sudo apt-key add -\nsudo apt install -y apt-transport-https\nsudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"\n\nsudo apt -y update && sudo apt -y install grafana\nsudo systemctl daemon-reload\nsudo systemctl start grafana-server\nsudo systemctl enable grafana-server.service\nsudo systemctl status grafana-server\n')),Object(i.b)("h3",{id:"macos"},"macOS"),Object(i.b)("p",null,"You need Homebrew:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"brew install grafana\nbrew services restart grafana\nbrew services list\n")),Object(i.b)("h3",{id:"docker"},"Docker"),Object(i.b)("p",null,"Pull the container and run Grafana like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"docker pull grafana/grafana\ndocker run -p 3000:3000 \\\n-v /YOURLOCALPATH/grafana:/var/lib/grafana \\\n-e GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel \\\ngrafana/grafana\n")),Object(i.b)("p",null,"Replace ",Object(i.b)("inlineCode",{parentName:"p"},"YOURLOCALPATH")," with a location for the data Grafana needs to write to disk."),Object(i.b)("h2",{id:"configuring"},"Configuring"),Object(i.b)("p",null,"To configure Grafana, you need to add a data source and import the dashboards.\nLearn how to do that in the ",Object(i.b)("a",{parentName:"p",href:"../install/finish"},"Final Steps"),"."))}p.isMDXComponent=!0}}]);