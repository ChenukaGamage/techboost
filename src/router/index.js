import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import ChapterList from '../views/ChapterList.vue'; // Import the ChapterList view

const routes = [
  { path: '/', component: Home },
  {
    path: '/class/:classId', // Dynamic route for classes with classId parameter
    name: 'ChapterList',
    component: ChapterList
  },
  {
    path: '/quiz/:quizId', // Dynamic route for quizzes with quizId parameter
    name: 'Quiz',
    component: Quiz
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
