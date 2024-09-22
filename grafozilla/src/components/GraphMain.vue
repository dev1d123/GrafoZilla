<template>
    <NavBar></NavBar>
    <div class="div">
        <GraphOptions></GraphOptions>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from './NavBar.vue';
  import GraphOptions from './GraphOptions.vue';
  export default defineComponent({
    name: 'GraphMain',
    components: {
        GraphOptions, 
        NavBar
    },
  });

</script>

<style>

</style>