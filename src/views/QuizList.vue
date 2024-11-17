<template>
    <div>
      <!-- Title Section -->
      <h2 class="text-center mt-4">Available Quizzes</h2>
  
      <!-- Container for Courses -->
      <div class="container mt-4">
        <!-- Outer Border for the Courses Grid -->
        <div class="p-4 bg-dark rounded border border-light">
          <!-- Courses Grid -->
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" v-for="course in classes" :key="course.id">
              <!-- Course Card -->
              <div class="card bg-secondary text-white shadow-sm rounded">
                <div class="card-body">
                  <h4 class="card-title text-center">{{ course.name }}</h4>
                  <hr class="border-light" />
                  <!-- Chapters List -->
                  <div class="mt-3">
                    <router-link
                      v-for="chapter in course.chapters"
                      :key="chapter.quizId"
                      :to="{ name: 'Quiz', params: { quizId: chapter.quizId } }"
                      class="btn btn-outline-light btn-block mt-2"
                    >
                      {{ chapter.name }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  /* Styling for the card layout */
  .card {
    border-radius: 15px;
    background-color: #34495e; /* Slightly lighter shade for the course cards */
  }
  
  .card:hover {
    transform: scale(1.02);  /*Slight scaling effect on hover */
  }
  
  .card-title {
    font-size: 1.5rem; /* Larger font size for course names */
    font-weight: bold;
    text-transform: uppercase; /* Optional: For emphasis */
    margin-bottom: 10px;
  }
  
  /* Styling for the container */
  .bg-dark {
    border-radius: 20px; /* Rounded square container */
  }
  
  /* Light border around the courses grid */
  .border-light {
    border: 2px solid #ffffff; /* Light border */
  }
  
  /* Styling for buttons */
  .btn-outline-light {
    width: 100%; /* Make buttons full-width */
    font-size: 1rem;
    font-weight: bold;
  }
  
  .btn-outline-light:hover {
    background-color: #ffffff;
    color: #34495e;
  }
  
  /* Styling for the page title */
  h2 {
    color: #ffffff;
    font-size: 2.5rem; /* Adjust size for readability */
    margin-bottom: 20px; /* Ensures clear space between title and grid */
  }
  
  /* Responsive design for smaller screens */
  @media (max-width: 767px) {
    h2 {
      font-size: 2rem; /* Adjust title size for smaller screens */
    }
  
    .card {
      height: auto; /* Allow cards to be flexible on small screens */
    }
  }
  </style>
  