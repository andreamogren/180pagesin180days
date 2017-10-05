<template>
  <div class="halloweenPlaylist">
    <button @click="playSong">Play a spooky song!</button>
    <div id="songcontainer"></div>
    <a href="/">Back to home page</a>
  </div>
</template>

<script>
export default {
  name: 'halloweenPlaylist',
  data () {
    return {
    }
  },
  methods: {
      playSong() {
      const spookySong =
      [
      spookySong[0] = "songs/Spooky Scary Skeletons (Remix) - Extended Mix.mp3"
      /*spookySong[1] = "Dogg/dKN9W2d.jpg"
      spookySong[2] = "Dogg/tumblr_o5ylo4Co0J1uae2w5o1_1280.jpg"
      spookySong[3] = "Dogg/Corgi.png"
      spookySong[4] = "Dogg/fc66726153192e36bb9004406a40d6d1.jpg"
      spookySong[5] = "Dogg/Go8XrPg.jpg"
      spookySong[6] = "Dogg/mf7xVvi.jpg"
      spookySong[7] = "Dogg/mnuBaTa.jpg"*/
    ]

      const generateSpook = Math.floor(Math.random()*spookySong.length);
      document.getElementById('songContainer').innerHTML = '<audio controls><source src="'+spookySong[generateSpook]+'" type="audio/mpeg"></audio>';
      console.log(spookySong[generateSpook]);
    },
  },
  computed: {
  },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Creepster');

button {
  background-color: orange;
  color: black;
  padding: 30px 40px;
  border-radius: 3px;
  margin-top: 300px;
  margin-bottom: 100px;
  border: none;
  display: block;
  font-size: 25px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Creepster', cursive;

}

</style>
