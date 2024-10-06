import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faSliders, faMessage } from "@fortawesome/free-solid-svg-icons";
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import GraphMain from './components/GraphMain.vue'


const routes = [
    { path: '/', component: HomeView},
    { path: '/works', component: GraphMain},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
library.add(faSearch);
library.add(faSliders);
library.add(faMessage);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
