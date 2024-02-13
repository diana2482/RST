<template>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* TODO: add background image */
  /* background-color: #F5F6F7; */
  font-family: Poppins, sans-serif;
  font-size: 1rem;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: white;
}
</style>
