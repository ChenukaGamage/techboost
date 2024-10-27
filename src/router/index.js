import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Adjust the paths according to your project structure
import Quiz from '../views/Quiz.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Quiz', component: Quiz },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
