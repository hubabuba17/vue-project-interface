import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Импортируем PrimeVue
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

// Используем PrimeVue
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: ".p-dark",
    },
  },
});
app.use(router);
app.mount("#app");
