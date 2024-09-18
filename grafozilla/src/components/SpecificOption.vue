<template>
    <div class="title">Linear Data Structures</div>
    <div class="options-container">
      <OptionDetail 
        imageUrl="arraylist.png" 
        title="Array List" 
        description="A dynamic array that allows indexed access and flexible resizing, ideal for random access and iteration."
      />
      <OptionDetail 
        imageUrl="linkedlist.png" 
        title="Linked List" 
        description="A linear data structure where elements are connected via pointers, perfect for efficient insertions and deletions."
      />
      <OptionDetail 
        imageUrl="stack.png" 
        title="Stack" 
        description="A LIFO (Last In, First Out) data structure used for operations like recursion, undo actions, and expression evaluation."
      />
      <OptionDetail 
        imageUrl="queue.png" 
        title="Queue" 
        description="A FIFO (First In, First Out) data structure, optimal for scheduling tasks, managing processes, and breadth-first search."
      />
    </div>
  </template>
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import OptionDetail from './OptionDetail.vue';
  
  export default defineComponent({
    name: 'SpecificOption',
    components: {
      OptionDetail, 
    },
  });
  </script>
  
  <style scoped>
  .options-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  }
  .title{
    font-size: 3rem;
    text-align: center;
    margin-top: 1.5rem;
    color: #333;

  }
  @media (max-width: 768px) {
    .options-container {
      grid-template-columns: 1fr; 
      text-align: center;
      max-width: 100%; 
      overflow: hidden;
    }
  }
  </style>
  