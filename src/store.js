import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    tabs:[      
      {name: "Intro", path: 'intro'},
      {name: "Blog", path: 'blogs'},
      {name: "Resume", path: 'resume'},
      {name: "Projects", path: 'projects'},
      {name: "Art Works", path: 'artWorks'},
      {name: "About", path: 'about'}
    ],
    projects: [],
    blogs: null,
    artworks: [
      {
        title: 'Landscape',
        tool: 'Photoshop',
        src: 'https://4.bp.blogspot.com/-x58zdSxeAUI/WKb2HIlvcSI/AAAAAAAAApQ/bqKlU5t3nwEGEaPI0COPSJkb2Qna_z7zgCLcB/s640/landscape.png'

      },

      {
        title: 'Cloudy Day',
        tool: 'Photoshop',
        src: 'https://4.bp.blogspot.com/-XvhEpvAa-2I/WKhI3TZeUbI/AAAAAAAAAqU/b6ZDqUaaErIA9e2qavHPMyU0ftgOh3EbwCLcB/s640/cloudSun-land.png'

      },

      {
        title: 'Evening',
        tool: 'Photoshop',
        src: 'https://2.bp.blogspot.com/-rmHSkhLZoHM/WKhH3LXU-mI/AAAAAAAAAqI/sokU2oUW0Gk_BWggiQFnmi6kgmRXQ88YwCLcB/s640/land-cloud.png'

      },

      {
        title: 'Lonely House',
        tool: 'Photoshop',
        src: 'https://4.bp.blogspot.com/-bIy-zmmqor0/U6aI46YAhhI/AAAAAAAAAMs/5x1r_R_2nIg/s1600/Lonely+house.jpg'

      },

      {
        title: 'Hope',
        tool: 'Photoshop',
        src: 'https://3.bp.blogspot.com/-5JrZ89n-dyQ/U6aI_F99TpI/AAAAAAAAANM/DzGiqlBP3zY/s1600/hope.jpg'

      },

      {
        title: 'Falling Apart',
        tool: 'Photoshop',
        src: 'https://4.bp.blogspot.com/-1x9meu7tF7E/U6aI8dmD7YI/AAAAAAAAAM8/34m31eVNQN0/s1600/Falling+Apart.png'

      },

      {
        title: 'Die Hard',
        tool: 'Photoshop',
        src: 'https://2.bp.blogspot.com/-4Av88FjFwBE/U6aI9QzsFHI/AAAAAAAAANE/UIWVV81Q4i0/s1600/die+hard.jpg'

      },

      {
        title: 'One',
        tool: 'Photoshop',
        src: 'https://4.bp.blogspot.com/-w7MOrGdbcu4/U6aI6NFd6qI/AAAAAAAAAM0/MnSMQ5JlPgI/s1600/army.jpg'

      },

      {
        title: 'Nepal',
        tool: 'Photoshop',
        src: 'https://1.bp.blogspot.com/-QG3dMjeZ6GQ/VB0F9-ppeXI/AAAAAAAAAPI/Pe9tKIuQtl4/s1600/Nepal.jpg'

      },

      {
        title: 'Doodle : Beach',
        tool: 'Photoshop',
        src: 'http://4.bp.blogspot.com/-eDKZ-3AVR5E/VB0HHNSSPdI/AAAAAAAAAPo/q34Zp4nhvMc/s1600/beach.gif'

      },

      {
        title: 'Doodle : Irrigation',
        tool: 'Photoshop',
        src: 'http://2.bp.blogspot.com/-fnhSJnA37h0/VB0HDO_MrGI/AAAAAAAAAPQ/BwY-PoDV9Pw/s1600/Water%2BPump.gif'

      },


      {
        title: 'Doodle : Bath',
        tool: 'Photoshop',
        src: 'http://3.bp.blogspot.com/-rGGe_TGy0lM/VB0HECGgItI/AAAAAAAAAPg/YrHeBYHcrUE/s1600/bath.gif'

      },

      {
        title: 'Doodle : Farm',
        tool: 'Photoshop',
        src: 'http://1.bp.blogspot.com/-eXwt81lqm54/VB0HDRTBHiI/AAAAAAAAAPU/hI98lEmxq7U/s1600/Potatoes.gif'

      },
    ],
    colors:{
      "Mercury": "#ff2b2b",
      "TypeScript": "#2b7489",
      "PureBasic": "#5a6986",
      "Objective-C++": "#6866fb",
      "C++": "#f34b7d",
      "C#": "#1E88E5",
      "Self": "#0579aa",
      "edn": "#db5855",
      "NewLisp": "#87AED7",
      "Jupyter Notebook": "#DA5B0B",
      "Rebol": "#358a5b",
      "Frege": "#00cafe",
      "Dart": "#00B4AB",
      "AspectJ": "#a957b0",
      "Shell": "#89e051",
      "Web Ontology Language": "#9cc9dd",
      "xBase": "#403a40",
      "Eiffel": "#946d57",
      "Nix": "#7e7eff",
      "RAML": "#77d9fb",
      "MTML": "#b7e1f4",
      "Racket": "#22228f",
      "Elixir": "#6e4a7e",
      "SAS": "#B34936",
      "Agda": "#315665",
      "wisp": "#7582D1",
      "D": "#ba595e",
      "Kotlin": "#F18E33",
      "Opal": "#f7ede0",
      "Crystal": "#776791",
      "Objective-C": "#438eff",
      "ColdFusion CFC": "#ed2cd6",
      "Oz": "#fab738",
      "Mirah": "#c7a938",
      "Objective-J": "#ff0c5a",
      "Gosu": "#82937f",
      "FreeMarker": "#0050b2",
      "Ruby": "#701516",
      "Component Pascal": "#b0ce4e",
      "Arc": "#aa2afe",
      "Brainfuck": "#2F2530",
      "Nit": "#009917",
      "APL": "#5A8164",
      "Go": "#375eab",
      "Visual Basic": "#945db7",
      "PHP": "#4F5D95",
      "Cirru": "#ccccff",
      "SQF": "#3F3F3F",
      "Glyph": "#e4cc98",
      "Java": "#b07219",
      "MAXScript": "#00a6a6",
      "Scala": "#DC322F",
      "Makefile": "#427819",
      "ColdFusion": "#ed2cd6",
      "Perl": "#0298c3",
      "Lua": "#000080",
      "Vue": "#2c3e50",
      "Verilog": "#b2b7f8",
      "Factor": "#636746",
      "Haxe": "#df7900",
      "Pure Data": "#91de79",
      "Forth": "#341708",
      "Red": "#ee0000",
      "Hy": "#7790B2",
      "Volt": "#1F1F1F",
      "LSL": "#3d9970",
      "eC": "#913960",
      "CoffeeScript": "#244776",
      "HTML": "#e44b23",
      "Lex": "#DBCA00",
      "API Blueprint": "#2ACCA8",
      "Swift": "#ffac45",
      "C": "#555555",
      "AutoHotkey": "#6594b9",
      "Isabelle": "#FEFE00",
      "Metal": "#8f14e9",
      "Clarion": "#db901e",
      "JSONiq": "#40d47e",
      "Boo": "#d4bec1",
      "AutoIt": "#1C3552",
      "Clojure": "#db5855",
      "Rust": "#dea584",
      "Prolog": "#74283c",
      "SourcePawn": "#5c7611",
      "AMPL": "#E6EFBB",
      "FORTRAN": "#4d41b1",
      "ANTLR": "#9DC3FF",
      "Harbour": "#0e60e3",
      "Tcl": "#e4cc98",
      "BlitzMax": "#cd6400",
      "PigLatin": "#fcd7de",
      "Lasso": "#999999",
      "ECL": "#8a1267",
      "VHDL": "#adb2cb",
      "Elm": "#60B5CC",
      "Propeller Spin": "#7fa2a7",
      "X10": "#4B6BEF",
      "IDL": "#a3522f",
      "ATS": "#1ac620",
      "Ada": "#02f88c",
      "Unity3D Asset": "#ab69a1",
      "Nu": "#c9df40",
      "LFE": "#004200",
      "SuperCollider": "#46390b",
      "Oxygene": "#cdd0e3",
      "ASP": "#6a40fd",
      "Assembly": "#6E4C13",
      "Gnuplot": "#f0a9f0",
      "JFlex": "#DBCA00",
      "NetLinx": "#0aa0ff",
      "Turing": "#45f715",
      "Vala": "#fbe5cd",
      "Processing": "#0096D8",
      "Arduino": "#bd79d1",
      "FLUX": "#88ccff",
      "NetLogo": "#ff6375",
      "C Sharp": "#178600",
      "CSS": "#563d7c",
      "Emacs Lisp": "#c065db",
      "Stan": "#b2011d",
      "SaltStack": "#646464",
      "QML": "#44a51c",
      "Pike": "#005390",
      "LOLCODE": "#cc9900",
      "ooc": "#b0b77e",
      "Handlebars": "#01a9d6",
      "J": "#9EEDFF",
      "Mask": "#f97732",
      "EmberScript": "#FFF4F3",
      "TeX": "#3D6117",
      "Nemerle": "#3d3c6e",
      "KRL": "#28431f",
      "Ren'Py": "#ff7f7f",
      "Unified Parallel C": "#4e3617",
      "Golo": "#88562A",
      "Fancy": "#7b9db4",
      "OCaml": "#3be133",
      "Shen": "#120F14",
      "Pascal": "#b0ce4e",
      "F#": "#b845fc",
      "Puppet": "#302B6D",
      "ActionScript": "#882B0F",
      "Diff": "#88dddd",
      "Ragel in Ruby Host": "#9d5200",
      "Fantom": "#dbded5",
      "Zephir": "#118f9e",
      "Click": "#E4E6F3",
      "Smalltalk": "#596706",
      "DM": "#447265",
      "Ioke": "#078193",
      "PogoScript": "#d80074",
      "LiveScript": "#499886",
      "JavaScript": "#FFC107",
      "VimL": "#199f4b",
      "PureScript": "#1D222D",
      "ABAP": "#E8274B",
      "Matlab": "#bb92ac",
      "Slash": "#007eff",
      "R": "#198ce7",
      "Erlang": "#B83998",
      "Pan": "#cc0000",
      "LookML": "#652B81",
      "Eagle": "#814C05",
      "Scheme": "#1e4aec",
      "PLSQL": "#dad8d8",
      "Python": "#3572A5",
      "Max": "#c4a79c",
      "Common Lisp": "#3fb68b",
      "Latte": "#A8FF97",
      "XQuery": "#5232e7",
      "Omgrofl": "#cabbff",
      "XC": "#99DA07",
      "Nimrod": "#37775b",
      "SystemVerilog": "#DAE1C2",
      "Chapel": "#8dc63f",
      "Groovy": "#e69f56",
      "Dylan": "#6c616e",
      "E": "#ccce35",
      "Parrot": "#f3ca0a",
      "Grammatical Framework": "#79aa7a",
      "Game Maker Language": "#8fb200",
      "Papyrus": "#6600cc",
      "NetLinx+ERB": "#747faa",
      "Clean": "#3F85AF",
      "Alloy": "#64C800",
      "Squirrel": "#800000",
      "PAWN": "#dbb284",
      "UnrealScript": "#a54c4d",
      "Standard ML": "#dc566d",
      "Slim": "#ff8f77",
      "Perl6": "#0000fb",
      "Julia": "#a270ba",
      "Haskell": "#29b544",
      "NCL": "#28431f",
      "Io": "#a9188d",
      "Rouge": "#cc0088",
      "cpp": "#f34b7d",
      "AGS Script": "#B9D9FF",
      "Dogescript": "#cca760",
      "nesC": "#94B0C7"
    },
    filters:[],
    activeTab: "intro",
    currentBlog: null
  },

  getters: {
    projects(state){
      return state.projects;
    },
    artworks(state){
      return state.artworks;
    },
    activeTab(state){
      return state.activeTab;
    },
    tabs(state){
      return state.tabs;
    },
    colors(state){
      return state.colors;
    },
    filters(state){
      return state.filters;
    },
    blogs(state){
      return state.blogs;
    },
    currentBlog(state){
      return state.currentBlog;
    }
  },

  mutations:{
    setProjects(state, projects){
      var filtered = projects.filter((d)=>{return(d.fork === false)});
      state.filters.push('All');
      var parsed = filtered.map(function(f){
        if(state.filters.indexOf(f.language) < 0 && f.language !== null)state.filters.push(f.language);
        return({
          "name" : f.name,
          "code" : "https://github.com/bibhuticoder/" + f.name,
          "demo" : (f.has_pages)?"https://bibhuticoder.github.io/" + f.name : "#",
          // "description" : parseEmoji(f.description),
          "description" : (f.description),
          "created_at" : f.created_at,
          "forks" : f.forks,
          "stargazers_count": f.stargazers_count,
          "language" : f.language
        });
      });
      state.projects = parsed;
    },

    setBlogs(state, blogs){
      state.blogs = {};
      var months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      for(var i=0; i<blogs.length; i++){
        var b = blogs[i];
        var date = new Date(b.published);
        var year = date.getFullYear() + "";
        var month = months[date.getMonth()];
        var day = date.getDate();

        b["year"] = year;
        b["month"] = month;
        b["day"] = day;

        if(!state.blogs[year]) state.blogs[year] = [];
        state.blogs[year].push(b);
      }

      console.log(state.blogs);

    },

    setActiveTab(state, activeTab){
      state.activeTab = activeTab;
    },

    setCurrentBlog(state, currentBlog){
      var months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var date = new Date(currentBlog.published);
      var year = date.getFullYear() + "";
      var month = months[date.getMonth()];
      var day = date.getDate();
      
      
      currentBlog["year"] = year;
      currentBlog["month"] = month;
      currentBlog["day"] = day;

      state.currentBlog = currentBlog;
    }
  },

  actions:{
    getProjects(context, callback){
      axios.get('https://api.github.com/users/bibhuticoder/repos?sort=updated&per_page=100&page=1')
        .then(response => {
          context.commit('setProjects', response.data);
          callback();
        })
        .catch(e => {
          console.log(e);
        })
    },
    getBlogs(context, callback){
      axios.get('https://www.googleapis.com/blogger/v3/blogs/6929645571399469422/posts?key=AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU')
        .then(response => {
          //console.log(response);
          context.commit('setBlogs', response.data.items);
          callback();
        })
        .catch(e => {
          console.log(e);
        })
    },

    getCurrentBlog(context, payload){
      axios.get(`https://www.googleapis.com/blogger/v3/blogs/6929645571399469422/posts/${payload.id}?key=AIzaSyC39mYo0t5fxe3QlQ5cd2xKDnzgEVUL7JU`)
      .then(response => {
        context.commit('setCurrentBlog', response.data);
        payload.callback();
      })
      .catch(e => {
        console.log(e);
      })
    }

  }
});
