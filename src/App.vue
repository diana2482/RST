<template>
  <NavigationBar />
  <router-view />
  <!-- <CookiePopup /> -->
  <FooterComponent />
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
// import CookiePopup from './components/CookiePopup.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    NavigationBar,
    // CookiePopup,
    FooterComponent,
  },
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif !important;
  font-size: 1rem;
  color: white;
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-image: url('assets/T_Background.jpg');
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: white;
}

.top-offset {
  margin-top: 8rem;
}

.centered-text {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 10rem 20vw;
  text-align: justify;
  min-height: 58vh;
}

.centered-text div {
  width: 60%;
}

.page-button .main-page-button-text {
  font-size: 1.4rem !important;
}

.page-button {
  width: 15rem !important;
}

@media (max-width: 900px) {
  .centered-text {
    padding: 10rem 2rem;
    text-align: center;
  }

  .centered-text div {
    width: 100%;
  }

  .centered-text .page-button {
    display: none !important;
  }
}
</style>
