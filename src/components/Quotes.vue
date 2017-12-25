<template>
  <div class="container">
    <div class="info">
      <h2>Quotes and illustrations</h2>
      <hr>
    </div>

    <div id="quote-list" class="container">
      <blockquote v-for="quote in quotes" class="success">
        <p>{{quote.content}}</p>
        <footer v-if="quote.author"><cite title="Source Title">{{quote.author}}</cite></footer>
      </blockquote>
    </div>

  </div>
</template>

<script>

export default {
  components: {},
  name: 'quotes',
  data(){
    return{
      quotes:[
        {content: 'A river cuts through a rock not beacuse of its power but its persistance.', author: null},
        {content: 'No matter how big your house is, how recent your Car is, how big your Bank balance is, our Graves will be the same size. STAY HUMBLE', author: null},
        {content: 'It might take a year, it might take a day, but what\'s meant to be will always find its way.', author: null},
        {content: 'You can\'t go back and change the begining but you can start where you are and change the ending.', author: 'C.S. Lewis'},
        {content: 'A river cuts through a rock not beacuse of its power but its persistance.', author: null},
        {content: 'Sometimes you need to burn bridges to stop yourself from crossing them again.', author: null},
        {content: 'Never let a bad day make you feel like you have a bad life.', author: null},
        {content: 'Don\'t judge people for the choices they make when you don\'t know the options they had to choose from.', author: null},
        {content: "If it is important for you, you will find a way. If it is not, you will find an excuse.", author: null},
        {content: "Success hugs you in private. Failure slaps you in public. That's LIFE.", author: "Billionare's Saying"},
        {content: "If it is important for you, you will find a way. If it is not, you will find an excuse.", author: null},
        {content: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.", author: 'Andre Gide'},
        {content:"A comfort zone is a beautiful place, but nothing ever grows there.", author: null},
        {content:"The happiest people don't have the best of everything, they just make the best of everything.", author: null},
        {content:"You can't stop the wave but you can learn to surf.", author: null},
        {content:"Without rain nothing grows, learn to embrace the storms of your life.", author: null},
        {content:"Miracles start to happen when you give as much energy to your dreams as you do to your fears.", author: null},
        {content:"No matter what comes in your way, share it off and move forward. When you have a positive mindset, you can't be defeated.", author: null},
        {content:"It's not the load that breaks you down, it's the way you carry it.", author: null},
        {content:"Discipline is the bridge between goals and accomplishment.", author: null},
        {content:"When the caterpillar thought the world was over, it became the butterfly.", author: null},
        {content:"Whoever is trying to bring you down is already below you.", author: null},
        {content:"Your life doesn't get better by chance, it gets better by change.", author: ' Jim Rohn'},
        {content:"Life is not perfect...There is always a possibility of problems. The problems is not the end. But it's the beginning of a different life.", author: null},
        {content:"Every day you wait is another day you won't get back.", author: null},
        {content:"The best view comes from the highest climb.", author: null},
        {content:"Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.", author: null},
        {content:"One small positive thought can change your whole day.", author: null},
        {content:"The meaning of life is to give life meaning." , author: "Ken Hudgins"},
        {content:"The head full of fears has no space for dreams.", author: null},
        {content:"Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.", author: null},
        {content:"Your attitude determines your direction.", author: null},
        {content:"Don't stress the could haves. It should have, it would have.", author: null},
        {content:"It's not how we make mistakes, But how we correct them that defines us.", author: null},
        {content:"Don't Talk, Just Act. Don't Say, Just Show. Don't Promise, Just Prove.", author: null},
        {content:"When life puts you in tough situations, Don't say 'Why me' say 'Try me'.", author: null},
    ],
    }
  },
  methods: {},
  computed:{
    quotes(){
      return this.$store.getters.quotes;
    },
  },

  created(){
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
blockquote{
  border-left-color: green;
}

</style>
