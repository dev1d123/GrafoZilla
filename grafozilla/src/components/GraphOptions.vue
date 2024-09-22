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


</style>