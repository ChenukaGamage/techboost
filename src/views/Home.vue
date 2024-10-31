<template>
  <div>
    <!-- Main Section -->
    <div class="container mt-4 text-center">
      <!-- Section Title -->
      <h1 class="mb-4 course-title">Courses</h1>

      <!-- Outer Border for the Courses Grid -->
      <div class="p-4 bg-dark rounded border border-light">
        <!-- Courses Grid -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="course in courses" :key="course.id">
            <router-link :to="{ name: 'ChapterList', params: { classId: course.id } }" class="text-decoration-none">
              <div class="card bg-secondary text-white shadow-sm rounded">
                <div class="card-body">
                  <h5 class="card-title">{{ course.name }}</h5>
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
export default {
  name: "Home",
  data() {
    return {
      courses: [
        { id: 1, name: "Course 1" },
        { id: 2, name: "Course 2" },
        { id: 3, name: "Course 3" },
        { id: 4, name: "Course 4" },
        { id: 5, name: "Course 5" },
        { id: 6, name: "Course 6" },
      ],
    };
  },
};
</script>

<style scoped>
body {
  background-color: blue; /* Change the background color to blue */
  margin: 0; /* Remove default margin */
  height: 100vh; /* Ensure it covers the full viewport height */
}

h1 {
  color: #ffffff;
  margin-bottom: 20px; /* Add space between title and grid */
}

.card {
  border-radius: 15px;
  background-color: #34495e; /* Slightly lighter shade for the course cards */
}

.navbar {
  background-color: #34495e; /* Adjust navbar background */
}

.bg-dark {
  border-radius: 20px; /* Rounded square container */
}

.border-light {
  border: 2px solid #ffffff; /* Light border around the course grid */
}

.card {
  height: 150px; /* Make cards square-shaped */
}

/* Course Title Styles */
.course-title {
  font-size: 2.5rem;
  color: #ffffff; /* Changed to white for visibility against background */
  margin-bottom: 20px; /* Ensures clear space between title and course grid */
}

.text-decoration-none {
  text-decoration: none; /* Removes underline from router-link */
}

.card-title {
  font-size: 1.5rem; /* Slightly larger font size for course names */
}

</style>
