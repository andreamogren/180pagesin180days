<template>
  <div class="dogGenerator">
    <!-- <head><title>Sadness be gone!</title></head> -->
    <h1>Happy Dog Generator 2.0</h1>
    <div class="headers-div">
      <h1> Having a bad day?</h1>
      <h1> Not anymore! </h1>
    </div>

    <h3 class="subheader">Happiness and fluffyness is just a click away</h3>

    <div ref="imageContainer"></div>

    <button class="gif-button" v-on:click="randomDog()">Click away!</button>
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
           console.log(errors);
         })
       }
	   },
       computed: {
       },
   };

</script>

<style scope>

  .headers-div {
  	display: block;
  	margin-left: auto;
  	margin-right: auto;
  	margin-top: 50px;
  	background: #85e085;
  	width: 400px;
  	padding: 5px;
  	border-radius: 10px;
    font-size: 42;
    margin-bottom: 30px;
  }

  .subheader {
  	display: block;
  	margin-left: auto;
  	margin-right: auto;
  	background: #80bfff;
  	padding: 20px;
  	width: 400px;
  	border-radius: 10px;
    margin-bottom: 30px;
  }

  .gif-button {
  	background-color: #cd6eef;
  	color: white;
  	font-size: 20px;
  	border: none;
  	padding: 20px;
  	border-radius: 10px;
  	margin: left;
  	margin-bottom: 20px;
  }

  .gif-button:hover {
    cursor: pointer;
  }
</style>
