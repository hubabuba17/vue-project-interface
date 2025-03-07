import { createRouter, createWebHistory } from 'vue-router';
import Primary from '../views/Primary.vue';
import Home from '../views/Home.vue'; // Главная страница маркетплейса
import AdminUsers from '../views/admin/AdminUsers.vue';
import AdminOrders from '../views/admin/AdminOrders.vue';
import AdminFinance from '../views/admin/AdminFinance.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue'; // Главная страница админки
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import Login from '../views/Login.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import ReturnPolicy from '../views/ReturnPolicy.vue';
import TermsOfService from '../views/TermsOfService.vue';


const routes = [
  { path: '/', component: Primary }, // Первичная страница
  { path: '/marketplace', component: Home },
  {
    path: '/admin', component: AdminDashboard,
  },
  { path: '/admin/users', component: AdminUsers },
  { path: '/admin/orders', component: AdminOrders },
  { path: '/admin/finance', component: AdminFinance },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/login', component: Login },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/return-policy', component: ReturnPolicy },
  { path: '/terms-of-service', component: TermsOfService },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;