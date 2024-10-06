<template>
  <div class="body">
  </div>
  <nav>
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/works">Graph</router-link>
  </nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
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
