// src/views/QuizList.vue
<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Available Quizzes</h1>
    <div v-for="course in classes" :key="course.id" class="mb-4">
      <h2 class="text-primary">{{ course.name }}</h2>
      <ul>
        <li
          v-for="chapter in course.chapters"
          :key="chapter.quizId"
          class="mt-2"
        >
          <router-link
            :to="{ name: 'Quiz', params: { quizId: chapter.quizId } }"
            class="btn btn-outline-secondary"
          >
            {{ chapter.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { classesData } from "@/data";

export default {
  name: "QuizList",
  data() {
    return {
      classes: classesData,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}
h2 {
  margin-bottom: 0.5rem;
}
ul {
  padding-left: 1rem;
  list-style-type: none;
}
li {
  margin-bottom: 0.5rem;
}
</style>
