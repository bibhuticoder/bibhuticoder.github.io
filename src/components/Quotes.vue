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
  methods: {

  },
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
