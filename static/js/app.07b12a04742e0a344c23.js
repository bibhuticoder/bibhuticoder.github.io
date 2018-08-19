webpackJsonp([0],{"+YwY":function(t,e){},0:function(t,e){},"1hn0":function(t,e){},"2cLy":function(t,e,a){"use strict";e.a={components:{},name:"BlogList",data:function(){return{blogsCount:0,years:[]}},methods:{gotoBlog:function(t){this.$router.push({path:"blogs/"+t})}},computed:{blogs:function(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=this.$store.state.blogs;if(e){for(var a={},s=0;s<e.length;s++){var n=e[s],o=new Date(n.published),r=o.getFullYear(),i=t[o.getMonth()],c=o.getDate();-1==this.years.indexOf(r)&&this.years.push(r),n.year=r,n.month=i,n.day=c,a[r]||(a[r]=[]),a[r].push(n)}return this.years.sort(function(t,e){return e-t}),this.blogsCount=e.length,a}}},created:function(){this.$store.state.blogs||this.$store.dispatch("getBlogs",function(){console.log("Blogs")})}}},"3Om1":function(t,e){},"6HYR":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row",attrs:{id:"artwork-list"}},t._l(t.artworks,function(e,s){return a("div",{key:s,staticClass:"col-xs-6 col-md-4",on:{click:function(a){t.currentArtwork=e}}},[a("div",{staticClass:"thumbnail pic-thumbnai"},[a("img",{staticClass:"art-pic",attrs:{src:e.src,"data-toggle":"modal","data-target":"#art-large","data-name":e.title}}),t._v(" "),a("div",{staticClass:"caption"},[a("h5",{staticClass:"artname"},[t._v(t._s(e.title))])])])])})),t._v(" "),a("div",{staticClass:"modal fade bs-example-modal-lg",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel",id:"art-large"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"thumbnail"},[t.currentArtwork?a("img",{attrs:{src:t.currentArtwork.src}}):t._e()])])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h1",{staticClass:"center"},[t._v("Art Works")]),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"lead center"},[t._v("Digital arts built with Adobe Photoshop & Illustrater.")]),t._v(" "),a("br")])}],o={render:s,staticRenderFns:n};e.a=o},"6Xhe":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v(" "),a("h2",{staticClass:"center"},[t._v("Quotes")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},t._l(t.quotes.set1,function(e,s){return a("blockquote",{key:s,staticClass:"success"},[a("p",[t._v(t._s(e.content))]),t._v(" "),e.author?a("footer",[a("cite",{attrs:{title:"Source Title"}},[t._v(t._s(e.author))])]):t._e()])})),t._v(" "),a("div",{staticClass:"col-md-6"},t._l(t.quotes.set2,function(e,s){return a("blockquote",{key:s,staticClass:"success"},[a("p",[t._v(t._s(e.content))]),t._v(" "),e.author?a("footer",[a("cite",{attrs:{title:"Source Title"}},[t._v(t._s(e.author))])]):t._e()])}))])])])},n=[],o={render:s,staticRenderFns:n};e.a=o},"9lab":function(t,e,a){"use strict";e.a={components:{},name:"resume",data:function(){return{name:"Bibhuti Poudyal",profession:"Programmer | Developer",contacts:{email:"bibhutipd@gmail.com",address:"Babarmahal, Kathmandu",mobile:"+977 9810293291",website:"http://www.bibhutipoudyal.com.np"},qualificationsSummary:["Skills for developing Desktop, Mobile and Web applications.","A firm believer of teamwork with good communication and interpersonal skill"],technicalSkills:[{name:"HTML5",score:95},{name:"CSS3",score:70},{name:"Javascript",score:80},{name:"Vue JS",score:75},{name:"React JS",score:50},{name:"Angular",score:30},{name:"NodeJs",score:80},{name:"Python",score:65},{name:"PHP (Laravel)",score:80},{name:"C/C++",score:60},{name:"Java(Android)",score:70},{name:"C#",score:30},{name:"Teeensy",score:80},{name:"MySQL",score:60},{name:"Solidity(Ethereum)",score:50}],extratechnicalSkills:"Android, Laravel, Firebase, Express, Socket.io,\n                            Flask, Django, Chrome extensions, ElectronJs, WinForms,\n                            PhaserJS, libGDX, MongoDB, Arduino, Google Maps API, Google Drive API,\n                            Dropbox API, OpenCV, Tensorflow, SCSS, Bootstrap, Materialize.",otherSkills:"Adobe Photoshop, Illustrator",academics:[{title:"SLC (2011)",metadata:"Alpine Academy, Nayapati, Kathmandu : Secured 80.88%"},{title:"+2 in Science (2013)",metadata:"Trinity International college, Dillibazar Kathmandu : Secured 72.35% in aggregate"},{title:"Bachelor of Science in Computer Science and Information Technology (BScCSIT) (Jan 2014 – till now)",metadata:"St Xaviers College, Maitighar, Kathmandu"}],achievements:[{title:"Happy Coding App and website Competition (CAN)",metadata:'1st Place for project "Realtime Whiteboard"'},{title:"Luniva Code Jatra 2017",metadata:'1st Place for project "Traversity"'},{title:"Yomari Code Camp 2018",metadata:'3rd Place for project "Cryptovoting"'},{title:"The Kathmandu Post",metadata:'An <a href="http://epaper.ekantipur.com/the-kathmandu-post/2017-11-01/6" target="_blank"> article</a> regarding Cyber Security.'}],traningsWorkshops:[{title:"MIT's Interconnected Embedded Systems at Karkhana",metadata:"IOT workshop on Teensy microcontroller (Final Project: IES-Snake)"}]}},methods:{},computed:{loggedIn:function(){return this.$store.getters.loggedIn}},created:function(){this.$store.commit("setCurrentTab",this.$options.name)}}},"9tAn":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-lg-3 col-sm-12 col-xs-12"},[a("Intro")],1),t._v(" "),a("div",{staticClass:"col-md-9 col-lg-9 col-sm-12 col-xs-12"},[a("BlogList")],1)])])},n=[],o={render:s,staticRenderFns:n};e.a=o},AkO8:function(t,e,a){"use strict";e.a={components:{},name:"bio",methods:{},computed:{},created:function(){}}},BWrL:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-links"},t._l(t.socialLinks,function(e,s){return a("button",{key:s,staticClass:"circleBtn",attrs:{title:e.title}},[a("a",{attrs:{href:e.link,target:"_blank"}},[a("div",{style:"color:"+e.color,domProps:{innerHTML:t._s(e.tag)}})])])}))},n=[],o={render:s,staticRenderFns:n};e.a=o},BcsI:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[a("div",{staticClass:"title"},[a("a",{attrs:{href:t.demo_url,target:"_blank",title:"View Demo"}},[t._v(t._s(t.name))]),t._v(" "),a("a",{staticClass:"code pull-right",attrs:{href:t.src_url,target:"_blank",title:"View source at Github"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),a("div",{staticClass:"info"},[a("i",{staticClass:"fa fa-star pull-left",staticStyle:{"margin-left":"0px"},attrs:{"aria-hidden":"true",title:"stars"}},[a("span",[t._v(" "+t._s(t.stars))])]),t._v(" "),a("i",{staticClass:"fa fa-code-fork pull-left",attrs:{"aria-hidden":"true",title:"forks"}},[a("span",[t._v(t._s(t.forks))])]),t._v(" "),a("i",{staticClass:"fa fa-circle  pull-left",style:"color:"+t.color,attrs:{"aria-hidden":"true"}},[t._v("\n       "),a("label",{staticClass:"language"},[t._v(t._s(t.language))])])])])},n=[],o={render:s,staticRenderFns:n};e.a=o},"Bo/w":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-inverse"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),a("div",{staticClass:"home",on:{click:function(e){t.navigate("home")}}},[a("span",{staticClass:"white"},[t._v("Bibhuti")]),t._v(" "),a("span",{staticClass:"green"},[t._v("Poudyal")])])]),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"to-collapse"}},[a("ul",{staticClass:"nav navbar-nav navbar-right"},t._l(t.tabs,function(e){return a("li",{key:e.name},[a("div",{class:e.path===t.currentTab&&null!==t.currentTab?"tab tab-active":"tab",domProps:{innerHTML:t._s(e.name)},on:{click:function(a){t.navigate(e.path)}}})])}))])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#to-collapse","aria-expanded":"false"}},[a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"})])}],o={render:s,staticRenderFns:n};e.a=o},CHQz:function(t,e,a){"use strict";var s=a("d9EC"),n=a("OiDD");e.a={components:{VueDisqus:s.a,Bio:n.a},name:"blog",data:function(){return{nextPost:null,prevPost:null}},methods:{fetchData:function(t){var e=this;this.$store.dispatch("getCurrentBlog",{id:t,callback:function(){e.$store.dispatch("getBlogs",function(){for(var t,a=0;a<e.blogs.length;a++)e.currentBlog.id===e.blogs[a].id&&(t=a);e.prevPost=0!=t?e.blogs[t-1]:e.blogs[e.blogs.length-1],t!=e.blogs.length-1?e.nextPost=e.blogs[t+1]:e.nextPost=e.blogs[0]})}})},navigate:function(t){this.nextPost=null,this.prevPost=null,this.$store.commit("setCurrentBlog",null),this.$router.push({name:"Blog",params:{id:t}}),this.$route.params.id=t,this.fetchData(t)}},computed:{currentBlog:function(){return this.$store.state.currentBlog},blogs:function(){return this.$store.state.blogs}},created:function(){this.fetchData(this.$route.params.id),this.$store.commit("setCurrentTab",this.$options.name)}}},Drc2:function(t,e,a){"use strict";e.a={components:{},name:"navbar",data:function(){return{tabs:[{name:"Home",path:"home"},{name:"Resume",path:"resume"},{name:"Projects",path:"projects"},{name:'<i class="fa fa-question-circle" aria-hidden="true" style="font-size: 20px; margin-top:15px"></i>',path:"about"}]}},methods:{navigate:function(t){this.$router.replace({path:"/"+t})}},computed:{currentTab:function(){return this.$store.state.currentTab}}}},Fs8J:function(t,e,a){"use strict";var s=a("U2xI"),n=a("xa4f");e.a={components:{BlogList:s.a,Intro:n.a},name:"home",created:function(){this.$store.commit("setCurrentTab",this.$options.name)}}},IKBl:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro center"},[a("div",{staticClass:"about-me"},[a("div",{staticClass:"profilePic"}),t._v(" "),a("h2",{staticClass:"lead center"},[t._v("Hey there!")]),t._v(" "),a("p",{staticClass:"text"},[t._v("\n      I am Bibhuti Poudyal. This is my portfolio and a blog.\n      ")]),a("hr"),t._v("\n      View my "),a("router-link",{staticClass:"link",attrs:{to:"/resume"}},[t._v("resume")]),t._v("\n      and"),a("router-link",{staticClass:"link",attrs:{to:"/projects"}},[t._v(" projects")]),t._v(" "),a("br"),t._v("\n      Read my answers on "),a("a",{staticClass:"link",attrs:{href:"https://www.quora.com/profile/Bibhuti-Poudyal"}},[t._v("Quora")]),t._v(" "),a("br"),t._v("\n      Follow me on "),a("a",{staticClass:"link",attrs:{href:"https://twitter.com/bibhuti_coder"}},[t._v("Twitter")]),t._v(" "),a("br"),t._v("\n      Email me at "),a("a",{staticClass:"link",attrs:{href:"mailto:bibhutipd@gmail.com"}},[t._v("bibhutipd@gmail.com")]),t._v(" "),a("br"),a("br"),t._v(" "),a("p"),t._v(" "),a("SocialHandlers"),t._v(" "),a("hr"),t._v(" "),a("p",{staticClass:"left"},[a("router-link",{staticClass:"link",attrs:{to:"/artworks"}},[t._v("Artworks")]),t._v(" "),a("br"),t._v("Digital arts and illustrations I did on my free time .\n      "),a("br"),a("br"),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:"/quotes"}},[t._v("Quotes")]),t._v(" "),a("br"),t._v("I collect inspirational quotes as a hobby .\n    ")],1)],1)])},n=[],o={render:s,staticRenderFns:n};e.a=o},"If/i":function(t,e){},Kw7b:function(t,e,a){"use strict";e.a={components:{},name:"Project",props:["name","demo_url","src_url","description","stars","forks","language","color"],methods:{},computed:{},created:function(){}}},M93x:function(t,e,a){"use strict";function s(t){a("QKa5")}var n=a("xJD8"),o=a("toAc"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,null,null);e.a=c.exports},MQRS:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[a("br"),a("br"),a("br"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"lead error-msg"},[a("div",{domProps:{innerHTML:t._s(t.errorMsg)}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h1",[a("i",{staticClass:"fa fa-exclamation-triangle sad",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("br"),a("br")])}],o={render:s,staticRenderFns:n};e.a=o},MjZo:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("M93x"),o=a("YaEn"),r=a("olkN"),i=a("ORbq");s.a.config.productionTip=!1,s.a.use(i.a),new s.a({el:"#app",template:"<App/>",components:{App:n.a},router:o.a,store:r.a})},OiDD:function(t,e,a){"use strict";function s(t){a("U1hz")}var n=a("AkO8"),o=a("nNZy"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-19f59fa2",null);e.a=c.exports},PcHo:function(t,e,a){"use strict";var s=a("wa3q");e.a={components:{Project:s.a},name:"projects",data:function(){return{filterLanguage:"All",searchKeyword:"",colors:{TypeScript:"#2b7489","C++":"#f34b7d","C#":"#1E88E5","Jupyter Notebook":"#DA5B0B",Shell:"#89e051",Kotlin:"#F18E33","Objective-C":"#438eff",Ruby:"#701516",Go:"#375eab","Visual Basic":"#945db7",PHP:"#4F5D95",Java:"#b07219",Scala:"#DC322F",Makefile:"#427819",Perl:"#0298c3",Lua:"#000080",Vue:"#2c3e50",CoffeeScript:"#244776",HTML:"#e44b23",Swift:"#ffac45",C:"#555555",JavaScript:"#FFA000",Python:"#3572A5"}}},methods:{setFilter:function(t){this.filterLanguage=t},search:function(){this.setFilter("All")},initFilters:function(t){for(var e=["All"],a=0;a<t.length;a++){var s=t[a].language;-1===e.indexOf(s)&&null!==s&&e.push(s)}return e}},computed:{projects:function(){if("All"===this.filterLanguage){if(this.searchKeyword.length>0){var t=this;return this.$store.getters.projects.filter(function(e){return e.name.search(new RegExp(t.searchKeyword,"i"))>0})}return this.$store.getters.projects}var t=this;return this.$store.getters.projects.filter(function(e){return e.language===t.filterLanguage})},filters:function(){return this.$store.state.projects?this.initFilters(this.$store.state.projects):null}},created:function(){var t=this;t.setFilter("All"),t.$store.state.projects||t.$store.dispatch("getProjects",function(){}),this.$store.commit("setCurrentTab",this.$options.name)}}},QKa5:function(t,e){},RaSo:function(t,e){},SGec:function(t,e,a){"use strict";function s(t){a("Suuk")}var n=a("CHQz"),o=a("p913"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-0f560e8b",null);e.a=c.exports},Suuk:function(t,e){},"TU/D":function(t,e){},U08c:function(t,e,a){"use strict";function s(t){a("MjZo")}var n=a("kHvR"),o=a("6HYR"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-9710c270",null);e.a=c.exports},U1hz:function(t,e){},U2xI:function(t,e,a){"use strict";function s(t){a("eBH4")}var n=a("2cLy"),o=a("ciEt"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-890f1a6e",null);e.a=c.exports},WGWn:function(t,e){},X5Qc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center"},[a("br"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"container text"},[a("p",{staticClass:"lead center"}),t._v(" "),a("br"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("P",{staticClass:"lead"},[t._v("I have also explained it  "),a("router-link",{attrs:{to:"/blogs/325227775290080082"}},[t._v("here")])],1),t._v(" "),a("p",{staticClass:"lead center"},[t._v("\n      If you have any issues regarding the projects and blog feel free to contact me.\n      And any kind of suggestions regarding my projects, blogs or this site are highly appreciated.\n    ")]),t._v(" "),a("br"),t._v(" "),a("SocialHandlers")],1),t._v(" "),a("br")])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("i",{staticClass:"fa fa-cogs",attrs:{"aria-hidden":"true"}}),t._v("  \n      How I built this site\n        "),a("i",{staticClass:"fa fa-flask",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"lead"},[a("b",[t._v("Domain")]),t._v(" : Free .np domain by  "),a("a",{attrs:{href:"https://register.com.np/",target:"_blank>"}},[t._v("Mercentile")]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("Hosting")]),t._v(" : "),a("a",{attrs:{href:"https://pages.github.com/",target:"_blank>"}},[t._v("Github Pages")]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("Blog")]),t._v(" : "),a("a",{attrs:{href:"https://developers.google.com/blogger/docs/3.0/getting_started",target:"_blank>"}},[t._v("Blogger REST API v3")]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("Projects")]),t._v(" : "),a("a",{attrs:{href:"https://developer.github.com/v3/",target:"_blank>"}},[t._v("GitHub REST API v3")]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("Frontend Framework")]),t._v(" : "),a("a",{attrs:{href:"https://developer.github.com/v3/",target:"_blank>"}},[t._v("Vue js")]),t._v(" with "),a("a",{attrs:{href:"https://vuex.vuejs.org/en/",target:"_blank"}},[t._v(" VueX ")]),t._v(" "),a("br"),t._v(" "),a("b",[t._v("Source code")]),t._v(" : "),a("a",{attrs:{href:"https://github.com/bibhuticoder/bibhuticoder.github.io",target:"_blank"}},[t._v("https://github.com/bibhuticoder/bibhuticoder.github.io")]),t._v(".\n      "),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"lead"},[a("i",{staticClass:"fa fa-hand-o-down",attrs:{"aria-hidden":"true"}})])}],o={render:s,staticRenderFns:n};e.a=o},YEWq:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"disqus_thread"}})},n=[],o={render:s,staticRenderFns:n};e.a=o},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),n=a("/ocq"),o=a("lO7g"),r=a("fc3l"),i=a("U08c"),c=a("uwSr"),l=a("awhP"),u=a("c27y"),d=a("SGec"),h=a("OiDD"),v=a("pl3Q");s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Start",component:o.a},{path:"/Blogs/:id",name:"Blog",component:d.a},{path:"/Home",name:"Home",component:o.a},{path:"/resume",name:"Resume",component:r.a},{path:"/projects",name:"Projects",component:c.a},{path:"/artWorks",name:"Art Works",component:i.a},{path:"/quotes",name:"Quotes",component:l.a},{path:"/bio",name:"Bio",component:h.a},{path:"/about",name:"About",component:u.a},{path:"/errors/:type",name:"Errors",component:v.a},{path:"*",component:v.a}]})},Zs8U:function(t,e,a){"use strict";var s=a("eM+6");e.a={components:{SocialHandlers:s.a},name:"about",methods:{},computed:{},created:function(){this.$store.commit("setCurrentTab",this.$options.name)}}},aY2b:function(t,e,a){"use strict";e.a={components:{},name:"quotes",data:function(){return{allQuotes:[{content:"A river cuts through a rock not beacuse of its power but its persistance.",author:null},{content:"No matter how big your house is, how recent your Car is, how big your Bank balance is, our Graves will be the same size. STAY HUMBLE",author:null},{content:"It might take a year, it might take a day, but what's meant to be will always find its way.",author:null},{content:"You can't go back and change the begining but you can start where you are and change the ending.",author:"C.S. Lewis"},{content:"A river cuts through a rock not beacuse of its power but its persistance.",author:null},{content:"Sometimes you need to burn bridges to stop yourself from crossing them again.",author:null},{content:"Never let a bad day make you feel like you have a bad life.",author:null},{content:"Don't judge people for the choices they make when you don't know the options they had to choose from.",author:null},{content:"If it is important for you, you will find a way. If it is not, you will find an excuse.",author:null},{content:"Success hugs you in private. Failure slaps you in public. That's LIFE.",author:"Billionare's Saying"},{content:"If it is important for you, you will find a way. If it is not, you will find an excuse.",author:null},{content:"Man cannot discover new oceans unless he has the courage to lose sight of the shore.",author:"Andre Gide"},{content:"A comfort zone is a beautiful place, but nothing ever grows there.",author:null},{content:"The happiest people don't have the best of everything, they just make the best of everything.",author:null},{content:"You can't stop the wave but you can learn to surf.",author:null},{content:"Without rain nothing grows, learn to embrace the storms of your life.",author:null},{content:"Miracles start to happen when you give as much energy to your dreams as you do to your fears.",author:null},{content:"No matter what comes in your way, share it off and move forward. When you have a positive mindset, you can't be defeated.",author:null},{content:"It's not the load that breaks you down, it's the way you carry it.",author:null},{content:"Discipline is the bridge between goals and accomplishment.",author:null},{content:"When the caterpillar thought the world was over, it became the butterfly.",author:null},{content:"Whoever is trying to bring you down is already below you.",author:null},{content:"Your life doesn't get better by chance, it gets better by change.",author:" Jim Rohn"},{content:"Life is not perfect...There is always a possibility of problems. The problems is not the end. But it's the beginning of a different life.",author:null},{content:"Every day you wait is another day you won't get back.",author:null},{content:"The best view comes from the highest climb.",author:null},{content:"Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.",author:null},{content:"One small positive thought can change your whole day.",author:null},{content:"The meaning of life is to give life meaning.",author:"Ken Hudgins"},{content:"The head full of fears has no space for dreams.",author:null},{content:"Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.",author:null},{content:"Your attitude determines your direction.",author:null},{content:"Don't stress the could haves. It should have, it would have.",author:null},{content:"It's not how we make mistakes, But how we correct them that defines us.",author:null},{content:"Don't Talk, Just Act. Don't Say, Just Show. Don't Promise, Just Prove.",author:null},{content:"When life puts you in tough situations, Don't say 'Why me' say 'Try me'.",author:null}]}},methods:{},computed:{quotes:function(){for(var t={set1:[],set2:[]},e=0;e<this.allQuotes.length/2;e++)t.set1.push(this.allQuotes[e]);for(var e=this.allQuotes.length/2;e<this.allQuotes.length;e++)t.set2.push(this.allQuotes[e]);return t}},created:function(){this.$store.commit("setCurrentTab",this.$options.name)}}},awhP:function(t,e,a){"use strict";function s(t){a("TU/D")}var n=a("aY2b"),o=a("6Xhe"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-26036da0",null);e.a=c.exports},c27y:function(t,e,a){"use strict";function s(t){a("m/sR")}var n=a("Zs8U"),o=a("X5Qc"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-53f92474",null);e.a=c.exports},ciEt:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blogs"},[a("br"),t._v(" "),a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-6"},[t.blogs?a("label",{staticClass:"post-count"},[t._v(t._s(t.blogsCount)+" posts")]):t._e()])]),t._v(" "),t._l(t.years,function(e,s){return t.blogs?a("div",{key:s,staticClass:"blog-list"},[a("label",{staticClass:"year"},[a("i",{staticClass:"fa fa-calendar-o",attrs:{"aria-hidden":"true"}}),t._v("  "+t._s(e))]),t._v(" "),t._l(t.blogs[e],function(e,s){return a("div",{key:s,staticClass:"row blog-row",on:{click:function(a){t.gotoBlog(e.id)}}},[a("div",{staticClass:"col-md-6"},[a("span",{staticClass:"title pull-left"},[t._v(t._s(e.title))])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("span",{staticClass:"pull-right"},[t._v(t._s(e.month+" "+e.day))])])])})],2):a("div",[a("img",{staticClass:"loading",attrs:{src:"static/loading.gif"}})])})],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("p",{staticClass:"lead"},[t._v("  All blog posts ")])])}],o={render:s,staticRenderFns:n};e.a=o},d9EC:function(t,e,a){"use strict";var s=a("gNKr"),n=a("YEWq"),o=a("VU/8"),r=o(s.a,n.a,null,null,null);e.a=r.exports},eBH4:function(t,e){},"eM+6":function(t,e,a){"use strict";function s(t){a("wVsP")}var n=a("rnaO"),o=a("BWrL"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-33adb49f",null);e.a=c.exports},fc3l:function(t,e,a){"use strict";function s(t){a("+YwY")}var n=a("9lab"),o=a("rT/2"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-915b4d54",null);e.a=c.exports},gNKr:function(t,e,a){"use strict";e.a={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1}},mounted:function(){if(window.DISQUS)return void this.reset(window.DISQUS);this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){e.setBaseConfig(this)}})},init:function(){var t=this,e=this;window.disqus_config=function(){e.setBaseConfig(this)},setTimeout(function(){var e=document,a=e.createElement("script");a.setAttribute("id","embed-disqus"),a.setAttribute("data-timestamp",+new Date),a.type="text/javascript",a.async=!0,a.src="//"+t.shortname+".disqus.com/embed.js",(e.head||e.body).appendChild(a)},0)},setBaseConfig:function(t){var e=this;t.page.identifier=this.identifier||this.$route.path||window.location.pathname,t.page.url=this.url||this.$el.baseURI,this.title&&(t.page.title=this.title),this.remote_auth_s3&&(t.page.remote_auth_s3=this.remote_auth_s3),this.key&&(t.page.api_key=this.key),this.sso_config&&(t.sso=this.sso_config),t.callbacks.onReady=[function(){e.$emit("ready")}]}}}},kHvR:function(t,e,a){"use strict";e.a={components:{},name:"artWorks",data:function(){return{currentArtwork:null,artworks:[{title:"Landscape",tool:"Photoshop",src:"https://4.bp.blogspot.com/-x58zdSxeAUI/WKb2HIlvcSI/AAAAAAAAApQ/bqKlU5t3nwEGEaPI0COPSJkb2Qna_z7zgCLcB/s640/landscape.png"},{title:"Cloudy Day",tool:"Photoshop",src:"https://4.bp.blogspot.com/-XvhEpvAa-2I/WKhI3TZeUbI/AAAAAAAAAqU/b6ZDqUaaErIA9e2qavHPMyU0ftgOh3EbwCLcB/s640/cloudSun-land.png"},{title:"Evening",tool:"Photoshop",src:"https://2.bp.blogspot.com/-rmHSkhLZoHM/WKhH3LXU-mI/AAAAAAAAAqI/sokU2oUW0Gk_BWggiQFnmi6kgmRXQ88YwCLcB/s640/land-cloud.png"},{title:"One",tool:"Photoshop",src:"https://4.bp.blogspot.com/-w7MOrGdbcu4/U6aI6NFd6qI/AAAAAAAAAM0/MnSMQ5JlPgI/s1600/army.jpg"},{title:"Nepal",tool:"Photoshop",src:"https://1.bp.blogspot.com/-QG3dMjeZ6GQ/VB0F9-ppeXI/AAAAAAAAAPI/Pe9tKIuQtl4/s1600/Nepal.jpg"}]}},methods:{},computed:{},created:function(){this.$store.commit("setCurrentTab",this.$options.name)}}},lO7g:function(t,e,a){"use strict";function s(t){a("If/i")}var n=a("Fs8J"),o=a("9tAn"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-19c9ed48",null);e.a=c.exports},lY77:function(t,e,a){"use strict";e.a={components:{},name:"errors",data:function(){return{errorMsg:"The page you are looking for doesn't exist."}},methods:{},computed:{},created:function(){"demo_not_found"===this.$route.params.type&&(this.errorMsg='Sorry! Demo for the project is not available. Instead you can download the source and run it locally.\n        <br><br> <a href="https://github.com/bibhuticoder/'+this.$route.query.name+'">View Source Code</a>')}}},lfLh:function(t,e,a){"use strict";function s(t){a("1hn0")}var n=a("Drc2"),o=a("Bo/w"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-6835f88e",null);e.a=c.exports},"m/sR":function(t,e){},n2jT:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),t._v(" "),t.projects?a("div",[a("div",{staticClass:"filter-list"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],staticClass:"search",attrs:{type:"text",placeholder:"Search projects.."},domProps:{value:t.searchKeyword},on:{input:[function(e){e.target.composing||(t.searchKeyword=e.target.value)},t.search]}}),t._v(" "),t._l(t.filters,function(e,s){return a("div",{key:s,class:e===t.filterLanguage?"filter filter-active":"filter",style:"color:"+t.colors[e],on:{click:function(a){t.setFilter(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])})],2),t._v(" "),a("div",{staticClass:"projects-list"},t._l(t.projects,function(e,s){return a("Project",{key:s,attrs:{name:e.name,demo_url:e.demo_url,src_url:e.html_url,description:e.description,stars:e.stargazers_count,forks:e.forks,language:e.language,color:t.colors[e.language]}})}))]):a("div",[a("img",{staticClass:"loading",attrs:{src:"static/loading.gif"}})])])},n=[],o={render:s,staticRenderFns:n};e.a=o},nNZy:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bio"},[a("div",{staticClass:"pic"}),t._v(" "),a("p",[a("br"),t._v("        \n    Hello, I am Bibhuti Poudyal, a programmer, designer, dreamer and an artist who\n    likes art of every form. I am tech enthusiastic spending a lot of time with computer,\n    learning and experimenting stuffs.          \n    "),a("br"),t._v("\n    In my free time I experiment with different technologies. You can view all of my projects\n    "),a("a",{attrs:{href:"http://www.bibhutipoudyal.com.np/#/projects"}},[t._v("here")]),t._v(". Also I write answers on\n    "),a("a",{attrs:{href:"https://www.quora.com/profile/Bibhuti-Poudyal"}},[t._v("Quora")]),t._v(".\n    Other than technical stuffs, I like books, movies, meditation, digital art and Cooking.\n    I share all those experiences on my "),a("a",{attrs:{href:"http://www.bibhutipoudyal.com.np/#/"}},[t._v("blog")]),t._v(".\n    Be sure to check it out. \n    "),a("br")])])}],o={render:s,staticRenderFns:n};e.a=o},olkN:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var s=a("7+uW"),n=a("NYxO"),o=a("mtWM"),r=a.n(o);s.a.use(n.a);var i=new n.a.Store({state:{projects:null,blogs:null,currentBlog:null,currentTab:null},getters:{projects:function(t){return t.projects},blogs:function(t){return t.blogs},currentBlog:function(t){return t.currentBlog},currentTab:function(t){return t.currentTab}},mutations:{setCurrentTab:function(t,e){t.currentTab=e},setProjects:function(t,e){var a=e.filter(function(t){return!1===t.fork}),s=a.map(function(t){return t.has_pages?t.demo_url="https://bibhuticoder.github.io/"+t.name:t.demo_url="/#/errors/demo_not_found?name="+t.name,t});t.projects=s},setBlogs:function(t,e){t.blogs=e},setCurrentBlog:function(t,e){if(null===e)return void(t.currentBlog=null);var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=new Date(e.published),n=s.getFullYear()+"",o=a[s.getMonth()],r=s.getDate();e.year=n,e.month=o,e.day=r,t.currentBlog=e}},actions:{getProjects:function(t,e){r.a.get("https://api.github.com/users/bibhuticoder/repos?sort=updated&per_page=100&page=1").then(function(a){t.commit("setProjects",a.data),e()}).catch(function(t){console.log(t)})},getBlogs:function(t,e){r.a.get("https://www.googleapis.com/blogger/v3/blogs/6929645571399469422/posts?key=AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU&orderBy=published&fetchBodies=false").then(function(a){t.commit("setBlogs",a.data.items),e()}).catch(function(t){console.log(t)})},getCurrentBlog:function(t,e){t.commit("setCurrentBlog",null),r.a.get("https://www.googleapis.com/blogger/v3/blogs/6929645571399469422/posts/"+e.id+"?key=AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU").then(function(a){t.commit("setCurrentBlog",a.data),e.callback()}).catch(function(t){console.log(t)})}}})},p913:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.currentBlog?a("div",{staticClass:"content"},[a("h1",{staticClass:"center"},[t._v(t._s(t.currentBlog.title))]),t._v(" "),a("p",{staticClass:"center"},[t._v(" By Bibhuti Poudyal | "+t._s(t.currentBlog.day+" "+t.currentBlog.month+", "+t.currentBlog.year)+" ")]),t._v(" "),a("br"),a("br"),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.currentBlog.content)}}),t._v(" "),a("bio"),t._v(" "),a("div",{staticClass:"comments"},[a("vue-disqus",{attrs:{shortname:"bibhuticoder",identifier:t.currentBlog.id,url:"'http://localhost:8080'",title:"Blog"+t.currentBlog.id}})],1)],1):a("div",[a("img",{staticClass:"loading",attrs:{src:"static/loading.gif"}})]),t._v(" "),t.prevPost?a("div",{staticClass:"nav-post left-post",on:{click:function(e){t.navigate(t.prevPost.id)}}},[a("div",{staticClass:"text"},[a("span",[t._v(t._s(t.prevPost.title))])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.nextPost?a("div",{staticClass:"nav-post right-post",on:{click:function(e){t.navigate(t.nextPost.id)}}},[a("div",{staticClass:"text"},[a("span",[t._v(t._s(t.nextPost.title))])]),t._v(" "),t._m(1)]):t._e()])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"arrow"},[a("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"arrow"},[a("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])}],o={render:s,staticRenderFns:n};e.a=o},pl3Q:function(t,e,a){"use strict";function s(t){a("RaSo")}var n=a("lY77"),o=a("MQRS"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-3b183194",null);e.a=c.exports},qjoz:function(t,e){},"rT/2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),t._v(" "),a("div",{staticClass:"resume"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[a("div",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"profession"},[t._v(t._s(t.profession))]),t._v(" "),a("div",{staticClass:"pic"})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6",staticStyle:{"text-align":"right"}},[a("div",{staticClass:"content qualificatons"},[a("h3",[t._v("Summary of qualifications")]),t._v(" "),a("ul",t._l(t.qualificationsSummary,function(e){return a("li",[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"content technical-skills"},[a("h3",[t._v("Technical Skills")]),t._v(" "),a("table",{staticClass:"technical-skills"},t._l(t.technicalSkills,function(e){return a("tr",[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[a("div",{staticClass:"scorebar"},[a("div",{staticClass:"score",style:"width:"+e.score+"%"})])])])}))]),t._v(" "),a("div",{staticClass:"content extra-technical-skills"},[a("h3",[t._v("Frameworks, libraries & APIs")]),t._v("\n          "+t._s(t.extratechnicalSkills)+"\n        ")]),t._v(" "),a("div",{staticClass:"content other-skills"},[a("h3",[t._v("And also")]),t._v("\n          "+t._s(t.otherSkills)+"\n        ")])]),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-6",staticStyle:{"text-align":"left"}},[a("div",{staticClass:"content academics"},[a("h3",[t._v("Academic")]),t._v(" "),a("ul",t._l(t.academics,function(e){return a("li",[a("label",[t._v(t._s(e.title))]),a("br"),t._v("\n              "+t._s(e.metadata)+"\n              "),a("br"),a("br")])}))]),t._v(" "),a("div",{staticClass:"content achievements"},[a("h3",[t._v("Achievements")]),t._v(" "),a("ul",t._l(t.achievements,function(e){return a("li",[a("label",[t._v(t._s(e.title))]),a("br"),t._v(" "),a("div",{domProps:{innerHTML:t._s(e.metadata)}}),t._v(" "),a("br")])}))]),t._v(" "),a("div",{staticClass:"content traningsWorkshops"},[a("h3",[t._v("Tranings and Workshops")]),t._v(" "),a("ul",t._l(t.traningsWorkshops,function(e){return a("li",[a("label",[t._v(t._s(e.title))]),a("br"),t._v("\n              "+t._s(e.metadata)+"\n              "),a("br"),a("br")])}))]),t._v(" "),a("div",{staticClass:"content contacts"},[a("h3",[t._v("Contact me")]),t._v(" "),a("ul",{staticClass:"null"},[a("li",[a("span",{staticClass:"glyphicon glyphicon-envelope"}),t._v("\n              "+t._s(t.contacts.email)+"\n            ")]),t._v(" "),a("li",[a("span",{staticClass:"glyphicon glyphicon-globe"}),t._v(" "),a("a",{attrs:{href:t.contacts.website,target:"_blank"}},[t._v("\n                "+t._s(t.contacts.website)+"\n              ")])]),t._v(" "),a("li",[a("span",{staticClass:"glyphicon glyphicon-home"}),t._v("\n              "+t._s(t.contacts.address)+"\n            ")]),t._v(" "),a("li",[a("span",{staticClass:"glyphicon glyphicon-phone"}),t._v("\n              "+t._s(t.contacts.mobile)+"\n            ")])])])])])]),t._v(" "),t._m(0)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"download",attrs:{href:"https://drive.google.com/open?id=1wPOtvdEnsY1JTbAvJZZ_pf8zj-ZcTRQy",target:"_blank",title:"Download in PDF"}},[a("i",{staticClass:"fa fa-file-pdf-o",attrs:{"aria-hidden":"true"}})])}],o={render:s,staticRenderFns:n};e.a=o},rnaO:function(t,e,a){"use strict";e.a={components:{},name:"SocialHandlers",data:function(){return{socialLinks:[{title:"Github",link:"https://github.com/bibhuticoder",color:"#373737",tag:'<i class="fa fa-github" aria-hidden="true"></i>'},{title:"Google+",link:"https://plus.google.com/+Bibhutipd",color:"maroon",tag:'<i class="fa fa-google-plus" aria-hidden="true"></i>'},{title:"Twitter",link:"https://twitter.com/bibhuti_coder",color:"deepskyblue",tag:'<i class="fa fa-twitter" aria-hidden="true"></i>'},{title:"Quora",link:"https://www.quora.com/profile/Bibhuti-Poudyal",color:"maroon",tag:'<i class="fa fa-quora" aria-hidden="true"></i>'},{title:"LinkedIn",link:"https://www.linkedin.com/in/bibhuti-poudyal-4883aa116/",color:"royalblue",tag:'<i class="fa fa-linkedin" aria-hidden="true"></i>'}]}},methods:{},computed:{},created:function(){}}},toAc:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("router-view",{attrs:{id:"view"}})],1)],1)},n=[],o={render:s,staticRenderFns:n};e.a=o},uXHU:function(t,e,a){"use strict";var s=a("eM+6");e.a={components:{SocialHandlers:s.a},name:"Intro",data:function(){return{}},methods:{},computed:{},created:function(){}}},uwSr:function(t,e,a){"use strict";function s(t){a("WGWn")}var n=a("PcHo"),o=a("n2jT"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-4a97bae3",null);e.a=c.exports},wVsP:function(t,e){},wa3q:function(t,e,a){"use strict";function s(t){a("qjoz")}var n=a("Kw7b"),o=a("BcsI"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-0249ae40",null);e.a=c.exports},xJD8:function(t,e,a){"use strict";var s=a("lfLh");e.a={components:{Navbar:s.a},name:"app"}},xa4f:function(t,e,a){"use strict";function s(t){a("3Om1")}var n=a("uXHU"),o=a("IKBl"),r=a("VU/8"),i=s,c=r(n.a,o.a,i,"data-v-5076405a",null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.07b12a04742e0a344c23.js.map
