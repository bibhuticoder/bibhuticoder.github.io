webpackJsonp([1],{"+YwY":function(t,e){},0:function(t,e){},"1hn0":function(t,e){},"6HYR":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row",attrs:{id:"artwork-list"}},t._l(t.artworks,function(e){return a("div",{staticClass:"col-sm-6 col-md-4 col-xs-6"},[a("div",{staticClass:"thumbnail pic-thumbnai"},[a("img",{staticClass:"art-pic",attrs:{src:e.src,"data-toggle":"modal","data-target":"#art-large","data-name":e.title}}),t._v(" "),a("div",{staticClass:"caption"},[a("h5",[t._v(t._s(e.title))])])])])}))])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h1",[t._v("Art Works")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"lead"},[t._v("List of digital arts built with photoshop, illustrater, MS Powerpoint.")]),t._v(" "),a("br")])}],o={render:s,staticRenderFns:i};e.a=o},"9lab":function(t,e,a){"use strict";e.a={components:{},name:"resume",data:function(){return{name:"Bibhuti Poudyal",profession:"Programmer, Developer",contacts:{email:"bibhutipd@gmail.com",address:"Babarmahal, Kathmandu",mobile:"+977 9810293291",website:"https://bibhuticoder.github.io"},qualificationsSummary:["Skills for developing desktop, mobile and web applications.","Experience in writing scripts and solving complex problems.","A firm believer of teamwork with good communication and interpersonal skill"],technicalSkills:[{name:"HTML5",score:90},{name:"CSS3",score:70},{name:"Javascript",score:80},{name:"Vue JS",score:70},{name:"React JS",score:50},{name:"Angular",score:30},{name:"NodeJs",score:80},{name:"Python",score:60},{name:"PHP",score:80},{name:"C/C++",score:60},{name:"Java",score:40},{name:"C#",score:30},{name:"Teeensy",score:80},{name:"MySQL",score:50}],extratechnicalSkills:"Flask, Django, Express, Socket.io, Firebase, Chrome extensions, ElectronJs, WinForms, PhaserJS, libGDX, MongoDB, Arduino, Google Maps API, Google Drive API, Dropbox API, OpenCV, SCSS, Bootstrap, Materialize.",otherSkills:"Adobe Photoshop, Illustrator",academics:[{title:"SLC (2011)",metadata:"Alpine Academy, Nayapati, Kathmandu : Secured 80.88%"},{title:"+2 in Science (2013)",metadata:"Trinity International college, Dillibazar Kathmandu : Secured 72.35% in aggregate"},{title:"Bachelor of Science in Computer Science and Information Technology (BScCSIT) (Jan 2014 – till now)",metadata:"St Xaviers College, Maitighar, Kathmandu"}],achievements:[{title:"Happy Coding App and website Competition (CAN)",metadata:'1st Place for project "Realtime Whiteboard"'},{title:"Luniva Code Jatra",metadata:'1st Place for project "Traversity'}],traningsWorkshops:[{title:"MIT's Interconnected Embedded Systems at Karkhana",metadata:"IOT workshop on Teensy microcontroller (Final Project: IES-Snake)"}]}},methods:{},computed:{loggedIn:function(){return this.$store.getters.loggedIn}},created:function(){}}},"9tAn":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"shown container content",attrs:{id:"intro"}},[a("div",{staticClass:"profilePic"}),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"about-me align-center"},[a("label",{staticClass:"lead",staticStyle:{color:"green","font-weight":"bold"}},[t._v("/* About a programmer */")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"text"},[t._v("\n        Hello, I am "),a("strong",[t._v("Bibhuti Poudyal")]),t._v(", a programmer, designer, dreamer and an artist who likes art of every form.\n        I am tech enthusiastic spending a lot of time with computer, learning and experimenting stuffs. I started programming in high school\n        and it's been approximately "+t._s(t.elapsedTime)+" seconds till then.\n        I work mostly in web platform. And my other areas of interest include game development, mobile apps, browser Extensions,\n        AI, Machine learning, Natural language processing and computer vision.\n      ")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{staticStyle:{margin:"0 auto","margin-top":"10px"}},t._l(t.handlers,function(t){return a("button",{staticClass:"circleBtn",attrs:{title:t.title}},[a("a",{attrs:{href:t.link,target:"_blank"}},[a("img",{attrs:{src:t.img}})])])}))])])])},i=[],o={render:s,staticRenderFns:i};e.a=o},"Bo/w":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-inverse"},[a("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"to-collapse"}},[a("ul",{staticClass:"nav navbar-nav"},t._l(t.tabs,function(e){return a("li",[a("div",{class:e.path===t.activeTab?"tab tab-active":"tab",on:{click:function(a){t.navigate(e.path)}}},[t._v(t._s(e.name))])])}))])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#to-collapse","aria-expanded":"false"}},[a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})])])}],o={render:s,staticRenderFns:i};e.a=o},Drc2:function(t,e,a){"use strict";e.a={components:{},name:"navbar",methods:{navigate:function(t){this.$router.push(t),this.$store.commit("setActiveTab",t)}},computed:{activeTab:function(){return this.$store.state.activeTab},tabs:function(){return this.$store.state.tabs}}}},Fs8J:function(t,e,a){"use strict";e.a={components:{},name:"home",data:function(){return{timer:null,elapsedTime:0}},methods:{initTimer:function(){var t,e=365*((new Date).getFullYear()-2012)*24*60*60,a=this;setInterval(function(){t=Date.now(),a.elapsedTime=parseInt((t-e)/1e3)},1e3)}},computed:{handlers:function(){return[{title:"Github",link:"https://github.com/bibhuticoder",img:"static/git.png"},{title:"Google+",link:"https://plus.google.com/+Bibhutipd",img:"static/google.png"},{title:"Twitter",link:"https://twitter.com/bibhuti_coder",img:"static/twitter.png"},{title:"Quora",link:"https://www.quora.com/profile/Bibhuti-Poudyal",img:"static/quora.png"},{title:"LinkedIn",link:"https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/",img:"http://isitranslation.com/wp-content/uploads/2015/08/linkedin_circle_color-5122.jpg"},{title:"FlipKarma",link:"http://flipkarma.com/user/BibhutiAlmighty/",img:"http://flipkarma.com/static/new/images/Logo.png"}]}},created:function(){this.initTimer()}}},"If/i":function(t,e){},M93x:function(t,e,a){"use strict";function s(t){a("QKa5")}var i=a("xJD8"),o=a("toAc"),n=a("VU/8"),r=s,c=n(i.a,o.a,r,null,null);e.a=c.exports},MjZo:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("M93x"),o=a("YaEn"),n=a("olkN"),r=a("ORbq");s.a.config.productionTip=!1,s.a.use(r.a),new s.a({el:"#app",template:"<App/>",components:{App:i.a},router:o.a,store:n.a})},PcHo:function(t,e,a){"use strict";e.a={components:{},name:"projects",data:function(){return{filterLanguage:"All",searchKeyword:""}},methods:{setFilter:function(t){this.filterLanguage=t},search:function(){this.setFilter("All")}},computed:{colors:function(){return this.$store.getters.colors},filters:function(){return this.$store.getters.filters},projects:function(){if("All"===this.filterLanguage){if(this.searchKeyword.length>0){var t=this;return this.$store.getters.projects.filter(function(e){return e.name.search(new RegExp(t.searchKeyword,"i"))>0})}return this.$store.getters.projects}var t=this;return this.$store.getters.projects.filter(function(e){return e.language===t.filterLanguage})}},created:function(){this.setFilter("All")}}},QKa5:function(t,e){},U08c:function(t,e,a){"use strict";function s(t){a("MjZo")}var i=a("kHvR"),o=a("6HYR"),n=a("VU/8"),r=s,c=n(i.a,o.a,r,"data-v-9710c270",null);e.a=c.exports},WGWn:function(t,e){},X5Qc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),t._v(" "),a("div",{staticClass:"info"},[a("h1",[t._v("About the site")]),t._v(" "),a("br"),a("br")]),t._v(" "),a("p",{staticClass:"lead",staticStyle:{"font-weight":"300"}},[t._v("\n    This is my personal portfolio and a platform to share my knowledge and experiments with the world.\n    The technologies powering this site are : Html, Css, Javascript, Vue Js(Vuex), github api.\n    Almost all the projects listed here are open source on github. This site itself is open source.\n    Its hosted as a github page at "),a("a",{attrs:{href:"https://github.com/bibhuticoder/bibhuticoder.github.io",target:"_blank"}},[t._v("https://github.com/bibhuticoder/bibhuticoder.github.io")]),t._v(".\n    The list of projects are obtained via "),a("a",{attrs:{href:"https://developer.github.com/v3/",target:"_blank"}},[t._v(" github api")]),t._v(" and the artworks(images) are hosted at google drive.\n  ")]),t._v(" "),a("br"),a("br"),t._v(" "),a("p",{staticClass:"lead",staticStyle:{"font-weight":"300"}},[t._v("\n    If you have any issues regarding the projects, feel free submit the issues at github. And any kind of suggestions regarding my projects or this site are highly appreciated.\n  ")]),t._v(" "),a("br")])}],o={render:s,staticRenderFns:i};e.a=o},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),i=a("/ocq"),o=a("lO7g"),n=a("fc3l"),r=a("U08c"),c=a("uwSr"),l=a("c27y");s.a.use(i.a),e.a=new i.a({routes:[{path:"/",name:"start",component:o.a},{path:"/Home",name:"Home",component:o.a},{path:"/resume",name:"Resume",component:n.a},{path:"/projects",name:"Projects",component:c.a},{path:"/artWorks",name:"Art Works",component:r.a},{path:"/about",name:"About",component:l.a}]})},Zs8U:function(t,e,a){"use strict";e.a={components:{},name:"about",methods:{},computed:{},created:function(){}}},c27y:function(t,e,a){"use strict";function s(t){a("m/sR")}var i=a("Zs8U"),o=a("X5Qc"),n=a("VU/8"),r=s,c=n(i.a,o.a,r,"data-v-53f92474",null);e.a=c.exports},fc3l:function(t,e,a){"use strict";function s(t){a("+YwY")}var i=a("9lab"),o=a("rT/2"),n=a("VU/8"),r=s,c=n(i.a,o.a,r,"data-v-915b4d54",null);e.a=c.exports},kHvR:function(t,e,a){"use strict";e.a={components:{},name:"artWorks",methods:{},computed:{artworks:function(){return this.$store.getters.artworks}},created:function(){}}},lO7g:function(t,e,a){"use strict";function s(t){a("If/i")}var i=a("Fs8J"),o=a("9tAn"),n=a("VU/8"),r=s,c=n(i.a,o.a,r,"data-v-19c9ed48",null);e.a=c.exports},lfLh:function(t,e,a){"use strict";function s(t){a("1hn0")}var i=a("Drc2"),o=a("Bo/w"),n=a("VU/8"),r=s,c=n(i.a,o.a,r,"data-v-6835f88e",null);e.a=c.exports},"m/sR":function(t,e){},n2jT:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"filter-list"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],staticClass:"search",attrs:{type:"text",placeholder:"Search projects.."},domProps:{value:t.searchKeyword},on:{input:[function(e){e.target.composing||(t.searchKeyword=e.target.value)},t.search]}}),t._v(" "),t._l(t.filters,function(e){return a("div",{class:e===t.filterLanguage?"filter filter-active":"filter",style:"color:"+t.colors[e],on:{click:function(a){t.setFilter(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})],2),t._v(" "),a("div",{staticClass:"projects-list"},t._l(t.projects,function(e){return a("div",{staticClass:"project"},[a("div",{staticClass:"title"},[a("a",{attrs:{href:e.demo,target:"_blank"}},[t._v(t._s(e.name))]),t._v(" "),a("a",{staticClass:"code pull-right",attrs:{href:e.code,target:"_blank",title:"Github"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticClass:"info"},[a("i",{staticClass:"fa fa-star pull-left",staticStyle:{"margin-left":"0px"},attrs:{"aria-hidden":"true",title:"stars"}},[a("span",[t._v(" "+t._s(e.stargazers_count))])]),t._v(" "),a("i",{staticClass:"fa fa-code-fork pull-left",attrs:{"aria-hidden":"true",title:"forks"}},[a("span",[t._v(t._s(e.forks))])]),t._v(" "),a("i",{staticClass:"fa fa-circle  pull-left",style:"color:"+t.colors[e.language],attrs:{"aria-hidden":"true"}},[t._v(" "+t._s(e.language))])])])}))])},i=[],o={render:s,staticRenderFns:i};e.a=o},olkN:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var s=a("7+uW"),i=a("NYxO"),o=a("mtWM"),n=a.n(o);s.a.use(i.a);var r=new i.a.Store({state:{tabs:[{name:"Home",path:"home"},{name:"Resume",path:"resume"},{name:"Projects",path:"projects"},{name:"Art Works",path:"artWorks"},{name:"About",path:"about"}],projects:[],artworks:[{title:"Landscape",tool:"Photoshop",src:"https://4.bp.blogspot.com/-x58zdSxeAUI/WKb2HIlvcSI/AAAAAAAAApQ/bqKlU5t3nwEGEaPI0COPSJkb2Qna_z7zgCLcB/s640/landscape.png"},{title:"Cloudy Day",tool:"Photoshop",src:"https://4.bp.blogspot.com/-XvhEpvAa-2I/WKhI3TZeUbI/AAAAAAAAAqU/b6ZDqUaaErIA9e2qavHPMyU0ftgOh3EbwCLcB/s640/cloudSun-land.png"},{title:"Evening",tool:"Photoshop",src:"https://2.bp.blogspot.com/-rmHSkhLZoHM/WKhH3LXU-mI/AAAAAAAAAqI/sokU2oUW0Gk_BWggiQFnmi6kgmRXQ88YwCLcB/s640/land-cloud.png"},{title:"Lonely House",tool:"Photoshop",src:"https://4.bp.blogspot.com/-bIy-zmmqor0/U6aI46YAhhI/AAAAAAAAAMs/5x1r_R_2nIg/s1600/Lonely+house.jpg"},{title:"Hope",tool:"Photoshop",src:"https://3.bp.blogspot.com/-5JrZ89n-dyQ/U6aI_F99TpI/AAAAAAAAANM/DzGiqlBP3zY/s1600/hope.jpg"},{title:"Falling Apart",tool:"Photoshop",src:"https://4.bp.blogspot.com/-1x9meu7tF7E/U6aI8dmD7YI/AAAAAAAAAM8/34m31eVNQN0/s1600/Falling+Apart.png"},{title:"Die Hard",tool:"Photoshop",src:"https://2.bp.blogspot.com/-4Av88FjFwBE/U6aI9QzsFHI/AAAAAAAAANE/UIWVV81Q4i0/s1600/die+hard.jpg"},{title:"One",tool:"Photoshop",src:"https://4.bp.blogspot.com/-w7MOrGdbcu4/U6aI6NFd6qI/AAAAAAAAAM0/MnSMQ5JlPgI/s1600/army.jpg"},{title:"Nepal",tool:"Photoshop",src:"https://1.bp.blogspot.com/-QG3dMjeZ6GQ/VB0F9-ppeXI/AAAAAAAAAPI/Pe9tKIuQtl4/s1600/Nepal.jpg"},{title:"Doodle : Beach",tool:"Photoshop",src:"http://4.bp.blogspot.com/-eDKZ-3AVR5E/VB0HHNSSPdI/AAAAAAAAAPo/q34Zp4nhvMc/s1600/beach.gif"},{title:"Doodle : Irrigation",tool:"Photoshop",src:"http://2.bp.blogspot.com/-fnhSJnA37h0/VB0HDO_MrGI/AAAAAAAAAPQ/BwY-PoDV9Pw/s1600/Water%2BPump.gif"},{title:"Doodle : Bath",tool:"Photoshop",src:"http://3.bp.blogspot.com/-rGGe_TGy0lM/VB0HECGgItI/AAAAAAAAAPg/YrHeBYHcrUE/s1600/bath.gif"},{title:"Doodle : Farm",tool:"Photoshop",src:"http://1.bp.blogspot.com/-eXwt81lqm54/VB0HDRTBHiI/AAAAAAAAAPU/hI98lEmxq7U/s1600/Potatoes.gif"}],colors:{Mercury:"#ff2b2b",TypeScript:"#2b7489",PureBasic:"#5a6986","Objective-C++":"#6866fb","C++":"#f34b7d","C#":"#1E88E5",Self:"#0579aa",edn:"#db5855",NewLisp:"#87AED7","Jupyter Notebook":"#DA5B0B",Rebol:"#358a5b",Frege:"#00cafe",Dart:"#00B4AB",AspectJ:"#a957b0",Shell:"#89e051","Web Ontology Language":"#9cc9dd",xBase:"#403a40",Eiffel:"#946d57",Nix:"#7e7eff",RAML:"#77d9fb",MTML:"#b7e1f4",Racket:"#22228f",Elixir:"#6e4a7e",SAS:"#B34936",Agda:"#315665",wisp:"#7582D1",D:"#ba595e",Kotlin:"#F18E33",Opal:"#f7ede0",Crystal:"#776791","Objective-C":"#438eff","ColdFusion CFC":"#ed2cd6",Oz:"#fab738",Mirah:"#c7a938","Objective-J":"#ff0c5a",Gosu:"#82937f",FreeMarker:"#0050b2",Ruby:"#701516","Component Pascal":"#b0ce4e",Arc:"#aa2afe",Brainfuck:"#2F2530",Nit:"#009917",APL:"#5A8164",Go:"#375eab","Visual Basic":"#945db7",PHP:"#4F5D95",Cirru:"#ccccff",SQF:"#3F3F3F",Glyph:"#e4cc98",Java:"#b07219",MAXScript:"#00a6a6",Scala:"#DC322F",Makefile:"#427819",ColdFusion:"#ed2cd6",Perl:"#0298c3",Lua:"#000080",Vue:"#2c3e50",Verilog:"#b2b7f8",Factor:"#636746",Haxe:"#df7900","Pure Data":"#91de79",Forth:"#341708",Red:"#ee0000",Hy:"#7790B2",Volt:"#1F1F1F",LSL:"#3d9970",eC:"#913960",CoffeeScript:"#244776",HTML:"#e44b23",Lex:"#DBCA00","API Blueprint":"#2ACCA8",Swift:"#ffac45",C:"#555555",AutoHotkey:"#6594b9",Isabelle:"#FEFE00",Metal:"#8f14e9",Clarion:"#db901e",JSONiq:"#40d47e",Boo:"#d4bec1",AutoIt:"#1C3552",Clojure:"#db5855",Rust:"#dea584",Prolog:"#74283c",SourcePawn:"#5c7611",AMPL:"#E6EFBB",FORTRAN:"#4d41b1",ANTLR:"#9DC3FF",Harbour:"#0e60e3",Tcl:"#e4cc98",BlitzMax:"#cd6400",PigLatin:"#fcd7de",Lasso:"#999999",ECL:"#8a1267",VHDL:"#adb2cb",Elm:"#60B5CC","Propeller Spin":"#7fa2a7",X10:"#4B6BEF",IDL:"#a3522f",ATS:"#1ac620",Ada:"#02f88c","Unity3D Asset":"#ab69a1",Nu:"#c9df40",LFE:"#004200",SuperCollider:"#46390b",Oxygene:"#cdd0e3",ASP:"#6a40fd",Assembly:"#6E4C13",Gnuplot:"#f0a9f0",JFlex:"#DBCA00",NetLinx:"#0aa0ff",Turing:"#45f715",Vala:"#fbe5cd",Processing:"#0096D8",Arduino:"#bd79d1",FLUX:"#88ccff",NetLogo:"#ff6375","C Sharp":"#178600",CSS:"#563d7c","Emacs Lisp":"#c065db",Stan:"#b2011d",SaltStack:"#646464",QML:"#44a51c",Pike:"#005390",LOLCODE:"#cc9900",ooc:"#b0b77e",Handlebars:"#01a9d6",J:"#9EEDFF",Mask:"#f97732",EmberScript:"#FFF4F3",TeX:"#3D6117",Nemerle:"#3d3c6e",KRL:"#28431f","Ren'Py":"#ff7f7f","Unified Parallel C":"#4e3617",Golo:"#88562A",Fancy:"#7b9db4",OCaml:"#3be133",Shen:"#120F14",Pascal:"#b0ce4e","F#":"#b845fc",Puppet:"#302B6D",ActionScript:"#882B0F",Diff:"#88dddd","Ragel in Ruby Host":"#9d5200",Fantom:"#dbded5",Zephir:"#118f9e",Click:"#E4E6F3",Smalltalk:"#596706",DM:"#447265",Ioke:"#078193",PogoScript:"#d80074",LiveScript:"#499886",JavaScript:"#FFC107",VimL:"#199f4b",PureScript:"#1D222D",ABAP:"#E8274B",Matlab:"#bb92ac",Slash:"#007eff",R:"#198ce7",Erlang:"#B83998",Pan:"#cc0000",LookML:"#652B81",Eagle:"#814C05",Scheme:"#1e4aec",PLSQL:"#dad8d8",Python:"#3572A5",Max:"#c4a79c","Common Lisp":"#3fb68b",Latte:"#A8FF97",XQuery:"#5232e7",Omgrofl:"#cabbff",XC:"#99DA07",Nimrod:"#37775b",SystemVerilog:"#DAE1C2",Chapel:"#8dc63f",Groovy:"#e69f56",Dylan:"#6c616e",E:"#ccce35",Parrot:"#f3ca0a","Grammatical Framework":"#79aa7a","Game Maker Language":"#8fb200",Papyrus:"#6600cc","NetLinx+ERB":"#747faa",Clean:"#3F85AF",Alloy:"#64C800",Squirrel:"#800000",PAWN:"#dbb284",UnrealScript:"#a54c4d","Standard ML":"#dc566d",Slim:"#ff8f77",Perl6:"#0000fb",Julia:"#a270ba",Haskell:"#29b544",NCL:"#28431f",Io:"#a9188d",Rouge:"#cc0088",cpp:"#f34b7d","AGS Script":"#B9D9FF",Dogescript:"#cca760",nesC:"#94B0C7"},filters:[],activeTab:"home"},getters:{projects:function(t){return t.projects},artworks:function(t){return t.artworks},activeTab:function(t){return t.activeTab},tabs:function(t){return t.tabs},colors:function(t){return t.colors},filters:function(t){return t.filters}},mutations:{setProjects:function(t,e){var a=e.filter(function(t){return!1===t.fork});t.filters.push("All");var s=a.map(function(e){return t.filters.indexOf(e.language)<0&&null!==e.language&&t.filters.push(e.language),{name:e.name,code:"https://github.com/bibhuticoder/"+e.name,demo:e.has_pages?"https://bibhuticoder.github.io/"+e.name:"#",description:e.description,created_at:e.created_at,forks:e.forks,stargazers_count:e.stargazers_count,language:e.language}});t.projects=s},setActiveTab:function(t,e){t.activeTab=e}},actions:{getProjects:function(t,e){n.a.get("https://api.github.com/users/bibhuticoder/repos?sort=updated&per_page=100&page=1").then(function(a){t.commit("setProjects",a.data),e()}).catch(function(t){console.log(t)})}}})},"rT/2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"resume"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[a("div",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"profession"},[t._v(t._s(t.profession))]),t._v(" "),a("div",{staticClass:"pic"})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6",staticStyle:{"text-align":"right"}},[a("div",{staticClass:"content qualificatons"},[a("h3",[t._v("Summary of qualifications")]),t._v(" "),a("ul",t._l(t.qualificationsSummary,function(e){return a("li",[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"content technical-skills"},[a("h3",[t._v("Technical Skills")]),t._v(" "),a("table",{staticClass:"technical-skills"},t._l(t.technicalSkills,function(e){return a("tr",[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[a("div",{staticClass:"scorebar"},[a("div",{staticClass:"score",style:"width:"+e.score+"%"})])])])}))]),t._v(" "),a("div",{staticClass:"content extra-technical-skills"},[a("h3",[t._v("Frameworks, libraries & APIs")]),t._v("\n          "+t._s(t.extratechnicalSkills)+"\n        ")]),t._v(" "),a("div",{staticClass:"content other-skills"},[a("h3",[t._v("And also")]),t._v("\n          "+t._s(t.otherSkills)+"\n        ")])]),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6",staticStyle:{"text-align":"left"}},[a("div",{staticClass:"content academics"},[a("h3",[t._v("Academic")]),t._v(" "),a("ul",t._l(t.academics,function(e){return a("li",[a("label",[t._v(t._s(e.title))]),a("br"),t._v("\n              "+t._s(e.metadata)+"\n              "),a("br"),a("br")])}))]),t._v(" "),a("div",{staticClass:"content achievements"},[a("h3",[t._v("Achievements")]),t._v(" "),a("ul",t._l(t.achievements,function(e){return a("li",[a("label",[t._v(t._s(e.title))]),a("br"),t._v("\n              "+t._s(e.metadata)+"\n              "),a("br"),a("br")])}))]),t._v(" "),a("div",{staticClass:"content traningsWorkshops"},[a("h3",[t._v("Tranings and Workshops")]),t._v(" "),a("ul",t._l(t.traningsWorkshops,function(e){return a("li",[a("label",[t._v(t._s(e.title))]),a("br"),t._v("\n              "+t._s(e.metadata)+"\n              "),a("br"),a("br")])}))]),t._v(" "),a("div",{staticClass:"content contacts"},[a("h3",[t._v("Contact me")]),t._v(" "),a("ul",{staticClass:"null"},[a("li",[a("span",{staticClass:"glyphicon glyphicon-envelope"}),t._v("\n              "+t._s(t.contacts.email)+"\n            ")]),t._v(" "),a("li",[a("span",{staticClass:"glyphicon glyphicon-globe"}),t._v(" "),a("a",{attrs:{href:t.contacts.website,target:"_blank"}},[t._v("\n                "+t._s(t.contacts.website)+"\n              ")])]),t._v(" "),a("li",[a("span",{staticClass:"glyphicon glyphicon-home"}),t._v("\n              "+t._s(t.contacts.address)+"\n            ")]),t._v(" "),a("li",[a("span",{staticClass:"glyphicon glyphicon-phone"}),t._v("\n              "+t._s(t.contacts.mobile)+"\n            ")])])])])])]),t._v(" "),t._m(0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"downlaod",attrs:{href:"https://drive.google.com/open?id=0B1GpWEfRwkduZDFEcllhMEFTeGs",target:"_blank",title:"Download in PDF"}},[a("span",{staticClass:"glyphicon glyphicon-save-file"})])}],o={render:s,staticRenderFns:i};e.a=o},toAc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("router-view",{attrs:{id:"view"}})],1)],1)},i=[],o={render:s,staticRenderFns:i};e.a=o},uwSr:function(t,e,a){"use strict";function s(t){a("WGWn")}var i=a("PcHo"),o=a("n2jT"),n=a("VU/8"),r=s,c=n(i.a,o.a,r,"data-v-4a97bae3",null);e.a=c.exports},xJD8:function(t,e,a){"use strict";var s=a("lfLh"),i=a("mtWM");a.n(i);e.a={components:{Navbar:s.a},name:"app",created:function(){if(0===this.$store.getters.projects.length){this.$store.dispatch("getProjects",function(){})}},computed:{}}}},["NHnr"]);
//# sourceMappingURL=app.89bdda82e54ce0e8b532.js.map
