<template>
  <div class="container">
    <div class="resume">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="name">{{name}}</div>
          <div class="profession">{{profession}}</div>
          <div class="pic"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6" style="text-align: right">
          <div class="content qualificatons">
            <h3>Summary of qualifications</h3>
            <ul>
              <li v-for="q in qualificationsSummary">{{q}}</li>
            </ul>
          </div>
          <div class="content technical-skills">
            <h3>Technical Skills</h3>
            <table class="technical-skills">
              <tr v-for="t in technicalSkills">
                <td>{{t.name}}</td>
                <td>
                  <div class="scorebar">
                    <div class="score" :style="'width:'+ t.score + '%'"></div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="content extra-technical-skills">
            <h3>Frameworks, libraries & APIs</h3>
            {{extratechnicalSkills}}
          </div>
          <div class="content other-skills">
            <h3>And also</h3>
            {{otherSkills}}
          </div>

        </div>
        <div class="col-lg-6 col-md-6 col-sm-6" style="text-align: left">
          <div class="content academics">
            <h3>Academic</h3>
            <ul>
              <li v-for="a in academics">
                <label>{{a.title}}</label><br>
                {{a.metadata}}
                <br><br>
              </li>
            </ul>
          </div>
          <div class="content achievements">
            <h3>Achievements</h3>
            <ul>
              <li v-for="a in achievements">
                <label>{{a.title}}</label><br>
                {{a.metadata}}
                <br><br>
              </li>
            </ul>
          </div>
          <div class="content traningsWorkshops">
            <h3>Tranings and Workshops</h3>
            <ul>
              <li v-for="t in traningsWorkshops">
                <label>{{t.title}}</label><br>
                {{t.metadata}}
                <br><br>
              </li>
            </ul>
          </div>
          <div class="content contacts">
            <h3>Contact me</h3>
            <ul class="null">
              <li>
                <span class="glyphicon glyphicon-envelope"></span>
                {{contacts.email}}
              </li>
              <li>
                <span class="glyphicon glyphicon-globe"></span>
                <a :href="contacts.website" target="_blank">
                  {{contacts.website}}
                </a>

              </li>
              <li>
                <span class="glyphicon glyphicon-home"></span>
                {{contacts.address}}
              </li>
              <li>
                <span class="glyphicon glyphicon-phone"></span>
                {{contacts.mobile}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <a href="https://drive.google.com/open?id=0B1GpWEfRwkduZDFEcllhMEFTeGs"
       target="_blank"
       title="Download in PDF"
       class="downlaod">
      <span class="glyphicon glyphicon-save-file"></span>
    </a>

  </div>
</template>

<script>

export default {
  components: {},
  name: 'resume',
  data(){
    return{
      name: "Bibhuti Poudyal",
      profession: "Programmer, Developer",
      contacts:{
        email: "bibhutipd@gmail.com",
        address: "Babarmahal, Kathmandu",
        mobile: "+977 9810293291",
        website: "https://bibhuticoder.github.io"
      },
      qualificationsSummary:[
        'Skills for developing desktop, mobile and web applications.',
        'Experience in writing scripts and solving complex problems.',
        'A firm believer of teamwork with good communication and interpersonal skill'
      ],
      technicalSkills:[
        {
          name: 'HTML5',
          score: 90
        },
        {
          name: 'CSS3',
          score: 70
        },
        {
          name: 'Javascript',
          score: 80
        },
        {
          name: 'Vue JS',
          score: 70
        },
        {
          name: 'React JS',
          score: 50
        },
        {
          name: 'Angular',
          score: 30
        },
        {
          name: 'NodeJs',
          score: 80
        },
        {
          name: 'Python',
          score: 60
        },
        {
          name: 'PHP',
          score: 80
        },
        {
          name: 'C/C++',
          score: 60
        },
        {
          name: 'Java',
          score: 40
        },
        {
          name: 'C#',
          score: 30
        },
        {
          name: 'Teeensy',
          score: 80
        },
        {
          name: 'MySQL',
          score: 50
        }
      ],
      extratechnicalSkills:'Flask, Django, Express, Socket.io, Firebase, Chrome extensions, ElectronJs, WinForms, PhaserJS, libGDX, MongoDB, Arduino, Google Maps API, Google Drive API, Dropbox API, OpenCV, SCSS, Bootstrap, Materialize.',
      otherSkills: 'Adobe Photoshop, Illustrator',
      academics:[
        {
          title: 'SLC (2011)',
          metadata: 'Alpine Academy, Nayapati, Kathmandu : Secured 80.88%'
        },
        {
          title: '+2 in Science (2013)',
          metadata: 'Trinity International college, Dillibazar Kathmandu : Secured 72.35% in aggregate'
        },
        {
          title: 'Bachelor of Science in Computer Science and Information Technology (BScCSIT) (Jan 2015 – till now)',
          metadata: 'St Xaviers College, Maitighar, Kathmandu'
        }
      ],
      achievements:[
        {
          title: 'Happy Coding App and website Competition (CAN)',
          metadata: '1st Place for project "Realtime Whiteboard"'
        },
        {
          title: 'Luniva Code Jatra',
          metadata: '1st Place for project "Traversity'
        }
      ],
      traningsWorkshops: [
        {
          title: 'MIT\'s Interconnected Embedded Systems at Karkhana',
          metadata: 'IOT workshop on Teensy microcontroller (Final Project: IES-Snake)'
        }
      ]
    }
  },
  methods: {

  },
  computed:{
    loggedIn(){
      return this.$store.getters.loggedIn;
    },
  },
  created(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .resume{
    margin: 0 auto;
    width: 950px;
  }
  .name{
    margin: 0 auto;
    border-style: solid;
    border-color: #373737;
    border-width: 1px;
    width: 400px;
    padding: 10px;
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    font-family: "Trebuchet MS";
    color: #373737;
  }
  .profession{
    margin: 0 auto;
    margin-top: 10px;
    width: 400px;
    color:dimgray;
    font-size: 20px;
    text-align: center;
  }
  .pic{
    margin: 0 auto;
    margin-top: 20px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-bottom: 30px;
    background-image: url("https://qph.ec.quoracdn.net/main-thumb-90418459-200-whsmopziphktwwyulynuhdrojnwtpzsu.jpeg");
    background-size: cover;
  }
  .content{
    margin: 10px;
    padding: 5px;
    background-color: white;
  }
  .technical-skills{
    margin-left: auto;
  }
  .technical-skills tr td{
    padding: 5px;
  }
  .scorebar{
    height: 8px;
    background-color: #90A4AE;
    width: 200px;
  }
  .scorebar .score{
    background-color: #455A64;
    height: 8px;
  }
  ul.null{
    psdding-left: 5px;
  }
  ul.null li{
    list-style: none;
  }

  .downlaod{
    height: 50px;
    width: 50px;

    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 100%;
    background-color: #607D8B;
    cursor: pointer;
    box-shadow: 1px 1px 5px grey;
    line-height: 50px;

    text-decoration: none;
    color: white;
    font-size: 20px;
    text-align: center;
    transition: background-color 0.5s ease;
  }

  .downlaod:hover{
    background-color: #455A64;
  }

</style>
