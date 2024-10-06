<template>
  <div class="options-container">
    <MainOption 
      imageUrl="linearOption.png" 
      title="Linear Data Structures" 
      :description="[
        'Arrays', 
        'Linked Lists', 
        'Stacks', 
        'Queues'
      ]"
      :optionValue="0"
      @selectOption="triggerSpecificOption"
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
      :optionValue="1"
      @selectOption="triggerSpecificOption"
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
  methods:{
    triggerSpecificOption() {
      this.$emit('selectSpecificOption'); // Emitir el evento para cambiar el componente
    },
  }
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
