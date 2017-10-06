<template>
  <div>
    <button @click="playSong()">Play a spooky song!</button>
    <!-- <audio controls autoplay><source src="../songs/spooky_scary_skeletons.mp3" type="audio/mpeg"></audio> -->
    <div ref="songcontainer"></div>
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
      var spookySong = new Array ()
          spookySong[0] = "../../static/songs/spooky_scary_skeletons.mp3"
          spookySong[1] = "../../static/songs/spooky_scary_skeletons.mp3"

      const generateSpook = Math.floor(Math.random()*spookySong.length);
      this.$refs.songcontainer.innerHTML = '<audio autoplay><source src="'+spookySong[generateSpook]+'" type="audio/mpeg"></audio>';
      console.log(spookySong[generateSpook]);
    },
  },
  computed: {
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Creepster');

.halloweenPlaylist {
  background-image: url('../img/ghost.gif');
  background-repeat: no-repeat;
  background-size: cover;
}

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
