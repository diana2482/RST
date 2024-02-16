<template>
  <NavigationBar />
  <router-view />

</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
export default {
  components: {
    NavigationBar
  },
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* TODO: add background image */
  /* background-color: #F5F6F7; */
  font-family: Poppins, sans-serif !important;
  font-size: 1rem;
  color: white;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-image: url('assets/T_Background.jpg');
}

a {
  text-decoration: none;
}
</style>
