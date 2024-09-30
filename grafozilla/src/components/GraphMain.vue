<template>
    <NavBar></NavBar>
    <div class="container">
      <div class="div">
        <GraphVisualization></GraphVisualization>
        <GraphOptions></GraphOptions>
    </div>
    <div class="options">
      <GraphAlgorithm></GraphAlgorithm>
    </div>
    </div>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from './NavBar.vue';
  import GraphOptions from './GraphOptions.vue';
  import GraphVisualization from './GraphVisualization.vue';
  import GraphAlgorithm from './GraphAlgorithm.vue';
  export default defineComponent({
    name: 'GraphMain',
    components: {
        GraphOptions, 
        NavBar,
        GraphVisualization,
        GraphAlgorithm
      },
  });

</script>

<style scoped>
  .container {
    display: flex;
    gap: 10px;
  }
  .div{
    width: 60%;
  }
  .options{
    width: 40%;
    padding-right: 10px;
  }


</style>