<template>
  <div id="app">
    <nav-bar />
    <div class="pagecontainer">
      <router-view />
    </div>
    <contact-section />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ContactSection from './components/ContactSection.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    ContactSection
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
}

.pagecontainer {
  margin-block: 5rem;
}
</style>

