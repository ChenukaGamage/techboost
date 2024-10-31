<template>
    <div>
      <h2 class="text-center mt-4">Chapters in {{ classData.name }}</h2>
      <div class="container mt-4">
        <ul class="list-group">
          <li
            v-for="(chapter, index) in classData.chapters"
            :key="index"
            class="list-group-item"
          >
            <router-link :to="{ name: 'Quiz', params: { quizId: chapter.quizId } }">
              {{ chapter.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { classesData } from '../data';
  
  export default {
    computed: {
      classData() {
        const classId = parseInt(this.$route.params.classId); // Convert to integer
        return classesData.find(course => course.id === classId);
      }
    }
  };
  </script>
  
  <style scoped>
  .list-group-item {
    background-color: #34495e;
    color: #ffffff;
  }
  </style>
  