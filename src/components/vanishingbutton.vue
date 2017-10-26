<template>
  <div class="vanishingbutton">
    <h1>Do not anger the button</h1>
    <button v-if="seen" v-on:click.once="noodle()" v-on:click="seen = !seen">Click me I dare you</button>
    <a href="/">Back to home page</a>
  </div>
</template>

<script>
export default {
  name: 'vanishingbutton',
  data () {
    return {
            seen: 'true',
    }
  },
  methods: {
    noodle() {
      alert('Argh! You have clicked me... this shall not happen again!!');
      seen = !seen;
    },
  },
  computed: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vanishingbutton {
  text-align: center; 
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  font-size: 20px;
  margin-bottom: 10px;
}

</style>
