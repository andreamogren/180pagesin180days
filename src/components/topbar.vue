<template>
  <div class="topbar">
  <h1>Welcome to Andrea's Vue challenge!</h1>
  <p>I started on the 20th of September 2017.</p>
    <nav class="topbar-navigation">
        <ul>
                <li v-for="item in menuItems">
                  <router-link :to="{ name: item.state }">{{item.name}}</router-link>
                </li>
        </ul>
	</nav>
  <cookie-law theme="mytheme">
  <div slot="message">
    Lorem Ipsum <router-link to="https://comprend.com">Click here</router-link>
  </div>
</cookie-law>
</div>
</template>



<script>

  import CookieLaw from 'vue-cookie-law';

   export default {
     name: 'topbar',
       data() {
           return {
			   menuItems:
               [
                 { name: 'Vanishing button', state: 'vanishingbutton' },
                 { name: 'Crystal ball', state: 'crystalball' },
                 { name: 'Hangry Sami', state: 'hangrysami' },
                 { name: 'Dog Generator', state: 'dogGenerator' },
               ],
		       };
       },
       props: {
         messsage: 'Lorem Ipsum',
       },
       components: {
         CookieLaw
     },
	   methods: {
	   },
       computed: {
       },
   };

</script>



<style scoped>
.Cookie--mytheme {
  background-color: black;
  padding: 40px;
  font-family: 'calibri';
  color: white;

  > .Cookie__button {
    border: 1px solid white; 
  }
}

.topbar {
}

ul {
  list-style: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}

li {
  text-align: left;
}

</style>
