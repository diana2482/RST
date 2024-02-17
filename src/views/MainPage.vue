<template>
  <div class="main-page-image-background">
    <div class="main-logo-text">

      <div class="main-logo-text-element"
      style="font-size: 4.6875rem; line-height: 150%;">{{ $t('mainPage.rychlejsie') }}</div>

      <div class="main-logo-text-element"
      style="font-size: 6rem; letter-spacing: -0.3rem;">{{ $t('mainPage.spolahlivejsie') }}</div>

      <div class="main-logo-text-element"
      style="font-size: 4.375rem;">{{ $t('mainPage.tichsie') }}</div>

    </div>
  </div>

  <div id="services" class="main-page-buttons" style="margin-bottom: 11.56rem;">
    <MainPageButton imageSrc="T_oprava_pocitacov a notebookov.png"
    text="mainPage.opravaPC" :page="'oprava-pc-notebook-kosice'" topMargin="19rem" />
    <MainPageButton imageSrc="T_skladanie_pocitacov.png" text="mainPage.skladaniePC" :page="'novy-pc-kosice'" topMargin="19rem" />
    <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'" topMargin="19rem" />
  </div>
  <div class="main-page-buttons">
    <MainPageButton imageSrc="T_PC_Zostavy.png" text="mainPage.pcZostavy" page="pc-kosice" />

    <MainPageButton imageSrc="T_Notebooky.png" text="mainPage.notebooky" :page="'notebook-kosice'" />
    <MainPageButton imageSrc="T_Portfólio.png" text="mainPage.portfolio" :page="'portfolio-pc-servis-kosice'" />
  </div>
</template>

<script>
import MainPageButton from '../components/MainPageButton.vue';

export default {
  name: 'MainPage',
  components: {
    MainPageButton,
  },
}

</script>

<style>
.main-page-image-background {
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../assets/Header_computer.jpg');
  background-size: cover;
  background-position: top;
  position: relative;
}

.main-page-image-background::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 20%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(4,3,8,255) 90%);
  pointer-events: none;
}

.main-logo-text {
  position: absolute;
  left: 36vw;
  top: 32vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.main-logo-text-element {
  text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.50);
  font-style: normal;
  font-weight: 550;
  line-height: normal; /* 7.0625rem */
  letter-spacing: -0.23rem;
  margin-top: -2.8125rem;
}

.main-page-buttons {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 2.5rem;
  width: 45rem;
  margin: 0 auto;
}
</style>