import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import ChapterList from '../views/ChapterList.vue';

const routes = [
  { path: '/', name: 'Home', component: Home }, // Added name attribute
  {
    path: '/class/:classId', 
    name: 'ChapterList',
    component: ChapterList
  },
  {
    path: '/quiz/:quizId', 
    name: 'Quiz',
    component: Quiz
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
