import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Импортируем PrimeVue
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

// Импортируем стили PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css'; // Тема
import 'primevue/resources/primevue.min.css'; // Основные стили
import 'primeicons/primeicons.css'; // Иконки
import 'primeflex/primeflex.css'; // Утилиты для макетов

const app = createApp(App);

// Используем PrimeVue
app.use(PrimeVue);

// Регистрируем компоненты
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);

app.use(router);
app.mount('#app');