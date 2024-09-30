<template>
    <div class="container">
        <div class="actions">
            <button>Add node</button>
            <button>Add edge</button>
            <button>Delete node</button>
            <button>Delete edge</button>
            <button>Random Graph </button>
            <button>Erase Graph </button>

        </div>
        <div class="options">
          <div class="options-check">
            <input type="checkbox" id="directed" name="directed">
            <label for="directed" id="directed">Directed Graph</label><br>

            <input type="checkbox" id="weighted" name="weighted">
            <label for="weighted" id="weighted">Weighted Graph</label><br>
          </div>
          <div class="options-button">
            <button>Adjacency matrix </button>
            <button>Incidence matrix </button>
            <button>Adjacency list </button>
          </div>
        </div>
        <div class="adittional">
            <div class="algorithm">
              <form>
                <label for="algo">Select Algorithm or Property:</label>
                <select name="algo" id="algo">
                  <!-- Búsqueda y Caminos -->
                  <option value="bfs">BFS (Breadth First Search)</option>
                  <option value="dfs">DFS (Depth First Search)</option>
                  <option value="dijkstra">Dijkstra's Algorithm</option>
                  <option value="bellman-ford">Bellman-Ford Algorithm</option>
                  <option value="a-star">A* (A-Star) Algorithm</option>
                  <option value="floyd-warshall">Floyd-Warshall Algorithm</option>

                  <!-- Árboles Generadores Mínimos -->
                  <option value="prim">Prim's Algorithm (Minimum Spanning Tree)</option>
                  <option value="kruskal">Kruskal's Algorithm (Minimum Spanning Tree)</option>

                  <!-- Ordenación -->
                  <option value="topological-sort">Topological Sort</option>

                  <!-- Ciclos -->
                  <option value="eulerian-path">Eulerian Path</option>
                  <option value="eulerian-cycle">Eulerian Cycle</option>
                  <option value="hamiltonian-path">Hamiltonian Path</option>
                  <option value="hamiltonian-cycle">Hamiltonian Cycle</option>

                  <!-- Flujo de Redes -->
                  <option value="ford-fulkerson">Ford-Fulkerson Algorithm (Maximum Flow)</option>
                  <option value="edmonds-karp">Edmonds-Karp Algorithm (Maximum Flow)</option>

                  <!-- Coloreado -->
                  <option value="graph-coloring">Graph Coloring</option>
                  <option value="chromatic-number">Chromatic Number</option>

                  <!-- Otros Algoritmos -->
                  <option value="tarjan">Tarjan's Algorithm (Strongly Connected Components)</option>
                  <option value="johnson">Johnson's Algorithm (All-Pairs Shortest Path)</option>
                </select>
              </form>

            </div>
            <div class="moreoptios">
                <button>Save Graph</button>
                <button>Load Graph</button>
                <button>Generate animation GIF</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'GraphOptions',
  });

</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 20px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-image: linear-gradient(135deg, #e0f7fa, #e1bee7);
  overflow: auto;
}

.actions, .options-button{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto;
  align-items: center;
  justify-content: center;

}
.actions button{
  width: 100px;
}

.options-check{
  background-color: rgb(250, 193, 193);
  padding: 10px;
  border-radius: 10px;
}


.options, .adittional {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.actions button, .options button, .adittional button {
  padding: 10px;
  background-color: #97c6f9;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif

}

.actions button:hover, .options button:hover, .adittional button:hover {
  background-color: #003c7c;
  color: white;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.options input[type="checkbox"] {
  margin-right: 5px;
}

.options label {
  margin-bottom: 5px;
}

.algorithm select {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.moreoptios {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.container > div {
  flex: 1;
}


.options-check {
  display: flex;
  gap: 10px;
}

.options-check input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #4CAF50;
  border-radius: 4px;
  outline: none;
  transition: background 0.3s ease, transform 0.2s;
  cursor: pointer;
}

.options-check input[type="checkbox"]:checked {
  background-color: #4CAF50;
  transform: scale(1.1);
}

.options-check input[type="checkbox"]:checked::before {
  content: '✔';
  display: block;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
}

.options-check label {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.3s;
}

.options-check input[type="checkbox"]:hover + label {
  color: #4CAF50;
}


</style>