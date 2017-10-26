<template>
  <div class="hangrysami">
    <h1>Hangry hangry Sami</h1>
    <div id="sami" v-bind:class="{ content: happy }"></div>

                <!-- bag health bar -->
                <div id="hanger-level">
                    <div v-bind:style="{ width: hanger + '%' }"></div>
                </div>

                <!-- game control buttons -->
                <div id="controls">
                    <button v-on:click="nom" v-show="!happy">Feed Sami</button>
                    <button v-on:click="restart">Restart</button>
                </div>
    <a href="/">Back to home page</a>
  </div>
</template>



<script>

   export default {
     name: 'hangrysami',
       data() {
           return {
             hanger: 0,
             happy: false
		       };
       },
       components: {
       },
	   methods: {
       nom: function(){
          this.hanger += 10;
          if ( this.hanger >= 100 ){
              this.happy = true;
          }
      },
      restart: function(){
          this.hanger = 0;
          this.happy = false;
      }
	   },
       computed: {
       },
   };

</script>



<style scoped>

.hangrysami {
  text-align: center;
}

#sami{
    width: 400px;
    height: 600px;
    margin: 0 auto;
    background: url(../img/angry-sami.png) center no-repeat;
    background-size: 100%;
    margin-top: -150px;
    margin-bottom: -150px;
}

#sami.content{
    background-image: url(../img/happy-sami.png);
}

#hanger-level{
    width: 200px;
    border: 2px solid #000;
    margin: 0 auto 20px auto;
}

#hanger-level div{
    height: 20px;
    background: green;
}

#controls{
    width: 120px;
    margin: 0 auto;
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
