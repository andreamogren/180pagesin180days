<template>
  <div class="addblog">
    <h2>Add new blog post</h2>
    <form>
      <label>Blog title: </label><br>
      <input type="text" v-model.lazy="blog.title"></input><br>
      <label>Blog text: </label><br>
      <textarea v-model.lazy="blog.text"></textarea>
    </form>
<br>
    <div id="checkboxes">
      <input type="checkbox" value="Doggo" v-model="blog.categories"/>
      <label>Doggo</label><br>
      <input type="checkbox" value="Ghost" v-model="blog.categories"/>
      <label>Ghost</label><br>
      <input type="checkbox" value="Penguin" v-model="blog.categories"/>
      <label>Penguin</label><br>
      <input type="checkbox" value="Noodles" v-model="blog.categories"/>
      <label>Noodles</label>
    </div>
    <div>
      <h3>Preview</h3>
      <p><b>Blog title: </b></p>
      {{blog.title}}
      <p><b>Blog text: </b></p>
      {{blog.text}}
      <p><b>Categories:  </b></p>
        <ul>
          <li v-for="category in blog.categories">{{category}}</li>
        </ul>
    </div>
    <a href="/">Back to home page</a>
  </div>
</template>



<script>

   export default {
     name: 'addblog',
     data() {
         return {
           blog: {
             title: '',
             text: '',
             categories: [],
           }
	       };
     },
	   methods: {
	   },
     computed: {
     },
   };

</script>



<style scoped>

  .addblog {
    text-align: center!important;
  }
  textarea {
    width: 40%;
    height: 200px;
  }
  input[type="text"] {
    width: 40%;
    margin-bottom: 20px;
  }

  input[type="checkbox"] {
  }

  #checkboxes {
    display: block;
    margin: 0 auto;
    width: 10%;
    text-align: left;
  }

  li {
    margin: 0 auto;
    width: 10%;
    text-align: left;
  }
</style>
