<template>
  <MainScreen>
  </MainScreen>
  <NavBar></NavBar>
  <OptionsContainer></OptionsContainer>
  <FooterPage></FooterPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainScreen from './components/MainScreen.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainScreen
  }
});
</script>

<style>

</style>
