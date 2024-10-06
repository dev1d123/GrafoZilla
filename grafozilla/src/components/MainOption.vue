<template>
    <div class="main-option">
      <div class="circle" @mouseover="showDescription = true" @mouseleave="showDescription = false" @click="emitOptionSelected(optionValue)">
        <img :src="imageUrl" alt="Imagen" class="circle-image">
        <div v-if="showDescription" class="description">
          <h3>{{ title }}</h3>
          <ul>
            <li v-for="(item, index) in description" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'MainOption',
    props: {
      imageUrl: {
        type: String as PropType<string>,
        required: true,
      },
      title: {
        type: String as PropType<string>,
        required: true,
      },
      description: {
        type: Array as PropType<string[]>,
        required: true,
      },
      optionValue: {
        type: Number as PropType<number>,
        required: true,
      },
    },
    methods: {
      emitOptionSelected(value: number) {
        this.$emit('selectOption', value);
      },
    },
      data() {
      return {
        showDescription: false,
      };
    },
  });
  </script>
  
  <style scoped>
  .main-option {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh; 
  }
  
  .circle {
    position: relative;
    width: 500px; 
    height: 500px; 
    border-radius: 20%;
    overflow: hidden;
    background-color: #34dbd3; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .circle:hover {
    background-color: #2980b9; 
    transform: scale(1.2);
  }
  
  .circle-image {
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
  
  .description {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7); 
    padding: 10px;
    border-radius: 10px;
    color: white;
    opacity: 0;
    transition: all 0.8s ease;
    font-family: sans-serif;
    font-size: 1.5rem;
  }
  
  .circle:hover .description {
    opacity: 1;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px 0;
  }

  @media (max-width: 768px) {
    .main-option {
        height: 30vh; 
    }
  
    .circle {
        width: 200px; 
        height: 200px; 
        border-radius: 20%;
    }
  
  
    .circle-image {
        width: 80%;
        height: 80%;
        object-fit: cover;
    }
    
    .description {
        font-family: sans-serif;
        font-size: 0.75rem;
    }
  
  }
  </style>
  