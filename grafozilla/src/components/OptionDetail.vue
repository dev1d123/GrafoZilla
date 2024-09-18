<template>
    <div class="main-option">
      <div class="circle" @mouseover="showDescription = true" @mouseleave="showDescription = false">
        <img :src="imageUrl" alt="Imagen" class="circle-image" />
        <div v-if="showDescription" class="description">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'OptionDetail',
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
        type: String as PropType<string>,
        required: true,
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
    margin-top: 100px;
    margin-bottom: 100px;
  }
  
  .circle {
    position: relative;
    width: 350px;
    height: 250px;
    border-radius: 10%; 
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); 
  }
  
  .circle:hover {
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2); 
    background-color: rgb(113, 171, 194);
  }
  
  .circle-image {
    width: 100%;
    transition: all 0.4s ease;
  }
  
  .circle:hover .circle-image {
    transform: scale(1.1); 
    border-radius: 10%; 

  }
  
  .description {
  position: absolute;
  bottom: -150%; 
  left: 50%; 
  transform: translateX(-50%); 
  width: 200px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  color: white;
  transition: all 0.5s ease;
  opacity: 0;
  z-index: 10;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: visible;
}

.circle:hover .description {
  bottom: -10px; 
  opacity: 1;   
}

  
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  p {
    margin: 10px 0 0;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    .main-option {
      height: auto;
    }
  
    .circle {
      width: 250px;
      height: 250px;
    }
  
    .circle-image {
      width: 100%;
    }
  
    .description {
      font-size: 0.85rem;
      bottom: -10px; 
    }
  
    .circle:hover .description {
        bottom: -10px; 
    }
  }
  </style>
  