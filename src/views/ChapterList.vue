<template>
  <div>
    <!-- Title Section -->
    <h2 class="text-center mt-4">Chapters in {{ classData.name }}</h2>

    <!-- Container for Chapters -->
    <div class="container mt-4">
      <!-- Outer Border for the Chapters Grid -->
      <div class="p-4 bg-dark rounded border border-light">
        <!-- Chapters Grid -->
        <div class="row row-cols-2 row-cols-md-1 g-4">
          <div class="col" v-for="(chapter, index) in classData.chapters" :key="index">
            <router-link :to="{ name: 'Quiz', params: { quizId: chapter.quizId } }" class="text-decoration-none">
              <div class="card bg-secondary text-white shadow-sm rounded">
                <div class="card-body">
                  <h5 class="card-title">{{ chapter.name }}</h5>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
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
/* Styling for the card layout */
.card {
  border-radius: 15px;
  background-color: #34495e; 
}

.card:hover {
  transform: scale(1.02); 
}

.card-title {
  font-size: 1.5rem; 
  text-align: center; 
  font-weight: bold;
  text-transform: uppercase; 
}

/* Styling for the container */
.bg-dark {
  border-radius: 20px; 
}

/* Light border around the chapter grid */
.border-light {
  border: 2px solid #ffffff; 
}

.text-decoration-none {
  text-decoration: none; 
}

/* Styling for the page title */
h2 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 20px; 
}

/* Making the chapter cards responsive */
@media (max-width: 767px) {
  h2 {
    font-size: 2rem; 
  }

  .card {
    height: auto; 
  }
}
</style>
