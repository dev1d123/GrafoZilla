import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faSliders, faMessage } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);
library.add(faSliders);
library.add(faMessage);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
