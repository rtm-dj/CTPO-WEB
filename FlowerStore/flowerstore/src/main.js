import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import Galleria from 'primevue/galleria';

import { store } from './store/store';

const app = createApp(App)

app.use(router).use(PrimeVue).use(store)

app.component('Galleria', Galleria);

app.mount('#app')