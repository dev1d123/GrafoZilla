<template>
  <body>
    <NavBar></NavBar>
  </body>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
export default defineComponent({
  name: 'App',
  components: {
    NavBar
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
