<template>
  <MainScreen></MainScreen>

  <body>
    <NavBar></NavBar>
    <div>
      
      
      <p>hola mundo
      <br><br><br><br><br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

      </p>
    </div>
    <FooterPage></FooterPage>
  </body>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
import MainScreen from './components/MainScreen.vue';
export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FooterPage,
    MainScreen
  }
});
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

</style>
