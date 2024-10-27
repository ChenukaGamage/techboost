<template>
  <div id="app">
    <Navbar />
    <router-view /> <!-- This is where your page components will be rendered -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components:{
    Navbar,
  },
};
</script>