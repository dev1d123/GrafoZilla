<template>
  <div class="body">
      <GraphMain></GraphMain>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterPage from './components/FooterPage.vue';
import MainScreen from './components/MainScreen.vue';
//import OptionsContainer from './components/OptionsContainer.vue';
import SpecificOption from './components/SpecificOption.vue';
import GraphMain from './components/GraphMain.vue';
export default defineComponent({
  name: 'App',
  components: {
    GraphMain,
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
