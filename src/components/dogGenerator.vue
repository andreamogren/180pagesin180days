<template>
  <div class="hangrysami">
    <!-- <head><title>Sadness be gone!</title></head> -->
    <h1>Happy Dog Generator 2.0</h1>
    <div id="headers">
      <h1> Having a bad day?</h1>
      <h1> Not anymore! </h1>
    </div>

    <h3 id="subheader">Happiness and fluffyness is just a click away</h3>

    <div id="imageContainer" ref="imageContainer"></div>

    <button id="randomDog" class="button" v-on:click="randomDog()">Click away!</button>
    </br><a href="/">Back to home page</a>
  </div>
</template>



<script>
import axios from 'axios';

   export default {
     name: 'dogGenerator',
     data: () => ({
       gifs: {},
       errors: []
     }),
	   methods: {
       randomDog() {
         axios.get(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dog`)
         .then(response => {
           // JSON responses are automatically parsed.
           this.gifs = response.data.data.image_url;
           this.$refs.imageContainer.innerHTML = '<center><img src = "' +this.gifs + '"  title="GIF via Giphy"></center>';
         })
         .catch(e => {
           this.errors.push(e)
         })
       }
	   },
       computed: {
       },
   };

</script>



<style scope>

body {
	font-family: Georgia, serif;
	text-align: center;
}

h1 {
	font-size: 42;
}

#headers {
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
	background: #85e085;
	width: 400px;
	padding: 5px;
	border-radius: 10px;
}

#subheader {
	display: block;
	margin-left: auto;
	margin-right: auto;
	background: #80bfff;
	padding: 10px;
	width: 400px;
	border-radius: 10px;
}

#randomDog {
	background-color: #d24dff;
	color: white;
	font-size: 20px;
	border: none;
	padding: 20px;
	border-radius: 10px;
	margin: left;
	margin-bottom: 10px;
}

#anotherDog {
	background-color: #ffa64d;
	color: white;
	font-size: 20px;
	border: none;
	padding: 20px;
	border-radius: 10px;s
	margin: right;
}

#column-1 {
	width: 50%;
}

</style>
