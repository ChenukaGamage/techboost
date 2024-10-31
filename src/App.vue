<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <router-view /> <!-- This is where your page components will be rendered -->
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  background-color: #2c3e50; /* Dark background for the app */
  color: white; /* White text for better contrast */
  min-height: 100vh; /* Ensure it covers the full viewport height */
}

.main-content {
  padding: 20px; /* Add padding around the main content area */
}
</style>
