<template>
    <NavBar></NavBar>
    <div class="div">
        <GraphVisualization></GraphVisualization>
        <GraphOptions></GraphOptions>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from './NavBar.vue';
  import GraphOptions from './GraphOptions.vue';
  import GraphVisualization from './GraphVisualization.vue';
  export default defineComponent({
    name: 'GraphMain',
    components: {
        GraphOptions, 
        NavBar,
        GraphVisualization
    },
  });

</script>

<style>

</style>