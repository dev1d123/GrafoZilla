<template>
  <div class="code-container">
    <!-- Selector del lenguaje a visualizar -->
    <div class="language-selector">
      <button
        v-for="lang in languages"
        :key="lang"
        @click="selectedLanguage = lang"
        :class="{ active: selectedLanguage === lang }"
      >
        {{ lang }}
      </button>
    </div>

    <!-- Visor de código -->
    <div class="code-viewer">
      <pre><code>{{ codeContent }}</code></pre>
      <button class="copy-btn" @click="copyToClipboard">📋 Copiar</button>
    </div>
    <p v-if="copyMessage" class="copy-message">{{ copyMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type Language = 'Java' | 'Python' | 'Cpp';

export default defineComponent({
  name: 'GraphAlgorithm',
  data() {
    return {
      selectedLanguage: 'Java' as Language, // Tipado fuerte para lenguajes
      languages: ['Java', 'Python', 'Cpp'] as Language[],
      copyMessage: '', // Mensaje que aparece cuando el código se copia
      codeSnippets: {
        Java: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
        Python: `def hello_world():
  print("Hello, World!")

hello_world()`,
        Cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}`
      } as Record<Language, string>
    };
  },
  computed: {
    codeContent(): string {
      return this.codeSnippets[this.selectedLanguage];
    }
  },
  methods: {
    copyToClipboard() {
      const el = document.createElement('textarea');
      el.value = this.codeContent;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy'); //idk other alternatives
      document.body.removeChild(el);

      this.copyMessage = '¡Código copiado!';
      setTimeout(() => {
        this.copyMessage = '';
      }, 2000);
    }
  }
});
</script>

<style scoped>
.language-selector button {
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  transition: all 0.2s;
  background-color: beige;
  cursor: pointer;
}
.language-selector button:hover {
  transform: scale(1.2);
  background-color: rgb(150, 150, 150);
}
.language-selector button:active {
  transform: scale(0.9);
  background-color: gray;
}
.language-selector {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
}

.code-viewer {
  background-color: #2e3440;
  color: #d8dee9;
  position: relative;
  height: 250px;
  padding: 25px;
  border-radius: 5px;
  overflow-y: auto;
}

.code-viewer pre {
  margin: 0;
}

code {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
}

.copy-btn:hover {
  background-color: #45a049;
}

.copy-message {
  color: green;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
}
</style>
