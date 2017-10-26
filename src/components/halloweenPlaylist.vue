<template>
  <div>
    <button @click="playSong()">Play a spooky song!</button>
    <div ref="songcontainer"></div>
    <a id="back-home" href="/">Back to home page</a>
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
          spookySong[1] = "../../static/songs/GhostnGhost - Sir Ghostington.mp3"
          spookySong[2] = "../../static/songs/Haunted Scottish Castle.mp3"
          spookySong[3] = "../../static/songs/This Is Halloween.mp3"
          spookySong[4] = "../../static/songs/Thriller.mp3"
          spookySong[5] = "../../static/songs/Lavender Town.mp3"
          spookySong[6] = "../../static/songs/Superstition.mp3"
          spookySong[7] = "../../static/songs/Monsters.mp3"
          spookySong[8] = "../../static/songs/Boogeyman.mp3"
          spookySong[9] = "../../static/songs/Boos Haunted Bash.mp3"

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
  text-align: center;
}

#back-home {
  color: darkred;
  font-size: 25px;
  font-family: 'Creepster', cursive;
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
