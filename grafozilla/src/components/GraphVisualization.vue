<template>
  <div class="board-container">
    <div class="controls">
      <button @click="zoomIn">+</button>
      <button @click="zoomOut">-</button>
      <button @click="resetZoom">Reset Zoom</button>
    </div>
    <div
      class="board"
      ref="board"
      :style="{ transform: `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)` }"
    >
      <div class="content">
        Pizarra para dibujar grafos!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'GraphVisualization',
  setup() {
    const zoomLevel = ref(1);
    const translateX = ref(0);
    const translateY = ref(0);

    const zoomIn = () => {
      zoomLevel.value = Math.min(zoomLevel.value + 0.1, 3); 
    };

    const zoomOut = () => {
      zoomLevel.value = Math.max(zoomLevel.value - 0.1, 0.5);
    };

    const resetZoom = () => {
      zoomLevel.value = 1;
      translateX.value = 0;
      translateY.value = 0;
    };
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === '+') {
        zoomIn();
      } else if (event.key === '-') {
        zoomOut();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const beforeUnmount = () => {
      window.removeEventListener('keydown', handleKeyPress);
    };



    return {
      zoomLevel,
      translateX,
      translateY,
      zoomIn,
      zoomOut,
      resetZoom,
      beforeUnmount,

    };
  },
});
</script>

<style scoped>
  .board-container {
    position: relative;
    width: 61%;
    height: 400px;
    margin-left: 5px;
    border: 1px solid black;
    overflow: hidden;
  }

  .controls {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
  }

  .controls button {
    z-index: 999;
    margin-bottom: 5px;
    padding: 5px;
    cursor: pointer;
  }

  .board {
    width: 500px;
    height: 300px;
    background-color: bisque;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
</style>
