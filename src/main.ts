import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import './style.css';
import {definePreset} from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import {createPinia} from "pinia";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const auraPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

app.use(PrimeVue, {
    theme: {
        preset: auraPreset,
        options: {
            prefix: 'n',
            darkModeSelector: false || 'none',
            cssLayer: false
        }
    }
});

app.mount("#app");