<template>
    <div class="options-container">
      <!-- Puedes pasar diferentes imágenes, títulos y descripciones aquí -->
      <MainOption 
        imageUrl="linearOption.png" 
        title="Linear Data Structures" 
        :description="[
        'Arrays', 
        'Linked Lists', 
        'Stacks', 
        'Queues'
        ]"
      />
      <MainOption 
        imageUrl="nonlinearOption.png" 
        title="Non-linear Data Structures" 
        :description="[
        'Binary Trees', 
        'AVL Trees', 
        'Binary Search Trees', 
        'Graphs', 
        'Heaps'
        ]"
      />

    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import MainOption from './MainOption.vue'; 
  
  export default defineComponent({
    name: 'OptionsContainer',
    components: {
      MainOption, 
    },
  });
  </script>
  
  <style scoped>
    .options-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
    }
    @media (max-width: 768px) {
        .options-container {
            flex-direction: column;
            text-align: center;
            max-width: 400px;
            overflow: hidden;
        }
    }
  </style>
  