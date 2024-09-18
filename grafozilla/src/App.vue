<template>
  <!--FIRST PAGE, the welcome...-->
  
  <MainScreen></MainScreen>

  <body>
    <NavBar></NavBar>
    <div>
      <!--<OptionsContainer></OptionsContainer>-->
      <SpecificOption></SpecificOption>
    </div>
    <FooterPage></FooterPage>
  </body>
  <!--SECOND PAGE, the selector...-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
import MainScreen from './components/MainScreen.vue';
//import OptionsContainer from './components/OptionsContainer.vue';
import SpecificOption from './components/SpecificOption.vue';
export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FooterPage,
    MainScreen,
    SpecificOption,
    //OptionsContainer
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
