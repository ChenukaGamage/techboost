import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';
import ChapterList from '../views/ChapterList.vue';
import QuizList from '../views/QuizList.vue';

const routes = [
  { path: '/', 
    name: 'Home', 
    component: Home 
  },
  {
    path: '/quizlist',  // Add path for the QuizList page
    name: 'QuizList',
    component: QuizList  // Component that will display the list of courses and chapters
  },
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
