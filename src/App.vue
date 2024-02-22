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
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif !important;
  font-size: 1rem;
  color: white;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

html,
body {
  /* position: relative; */
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-image: url('assets/T_Background.jpg');
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
body::-webkit-scrollbar {
  display: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.top-offset{
  margin-top: 8rem;
}
</style>
