<template style="margin-top: 0">
  <div class="main-page-image-background">
    <div class="main-logo-text">

      <!-- <div class="main-logo-text-element" style="font-size: 4.6875rem; line-height: 150%;">{{ $t('mainPage.rychlejsie') }}</div> -->
      <div class="main-logo-text-element" style="font-size: 3.9vw; height: 3.7vw;">{{ $t('mainPage.rychlejsie') }}</div>

      <!-- <div class="main-logo-text-element" style="font-size: 6rem; letter-spacing: -0.3rem;">{{ $t('mainPage.spolahlivejsie') }}</div> -->
      <div class="main-logo-text-element" style="font-size: 5vw; letter-spacing: -0.3rem; height: 5.2vw;">{{ $t('mainPage.spolahlivejsie') }}</div>

      <!-- <div class="main-logo-text-element" style="font-size: 4.375rem;">{{ $t('mainPage.tichsie') }}</div> -->
      <div class="main-logo-text-element" style="font-size: 3.65vw; height: 3.65vw;">{{ $t('mainPage.tichsie') }}</div>

    </div>
  </div>

  <div id="services" class="main-page-buttons">
    <MainPageButton imageSrc="T_oprava_pocitacov a notebookov.png"
    text="mainPage.opravaPC" :page="'oprava-pc-notebook-kosice'" topMargin="19rem" />
    <MainPageButton imageSrc="T_skladanie_pocitacov.png" text="mainPage.skladaniePC" :page="'novy-pc-kosice'" topMargin="19rem" />
    <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'" topMargin="19rem" />
  </div>
  <SpacerComponent :space="'3rem'" />
  <div class="main-page-buttons">
    <MainPageButton imageSrc="T_PC_Zostavy.png" text="mainPage.pcZostavy" page="pc-kosice" />

    <MainPageButton imageSrc="T_Notebooky.png" text="mainPage.notebooky" :page="'notebook-kosice'" />
    <MainPageButton imageSrc="T_Portfólio.png" text="mainPage.portfolio" :page="'portfolio-pc-servis-kosice'" />
  </div>

  <SpacerComponent :space="'5rem'" />

  <div id="references" class="partners">
    <img src="../assets/game_days.png" class="partner"/>
    <img src="../assets/games_farm.png" class="partner"/>
    <img src="../assets/tripple_hill.png" class="partner"/>
  </div>
  <PopupComponent />
</template>

<script>
import MainPageButton from '../components/MainPageButton.vue';
import SpacerComponent from '../components/SpacerComponent.vue';
import PopupComponent from '@/components/PopupComponent.vue';

export default {
  name: 'MainPage',
  components: {
    MainPageButton,
    SpacerComponent,
    PopupComponent,
  },
}

</script>

<style>
.main-page-image-background {
    display: flex;
    width: 100vw;
    height: 0; /* Start with zero height */
    padding-top: 69%; /* Adjust the percentage based on the image's aspect ratio */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/Header_computer.jpg');
    background-size: cover;
    background-position: top;
    position: relative;
}
.main-logo-text {
  position: absolute;
  left: 36vw;
  top: 20vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}
.main-logo-text-element {
  text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.50);
  font-style: normal;
  font-weight: 550;
  line-height: normal; /* 7.0625rem */
  letter-spacing: -0.23rem;
  /* margin-top: -2.8125rem; */
  margin: 0;
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
.partners{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
}

.partner{
  display: flex;
  width: 18.75rem;
  height: 7.75406rem;
  justify-content: center;
  align-items: center;
}
</style>