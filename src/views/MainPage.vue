<template>
  <div class="main-page-image-background">
    <div class="main-logo-text">
      <div class="main-logo-text-element" style="font-size: 3.9vw; height: 3.7vw;">{{ $t('mainPage.rychlejsie') }}</div>
      <div class="main-logo-text-element" style="font-size: 5vw; letter-spacing: -0.3rem; height: 5.2vw;">{{
        $t('mainPage.spolahlivejsie') }}</div>
      <div class="main-logo-text-element" style="font-size: 3.65vw; height: 3.65vw;">{{ $t('mainPage.tichsie') }}</div>
    </div>
  </div>

  <div class="main-page-buttons">
    <MainPageButton imageSrc="T_oprava_pocitacov a notebookov.png" text="mainPage.opravaPC"
      :page="'oprava-pc-notebook-kosice'" topMargin="19rem" topMarginMobile="73%" />

    <MainPageButton imageSrc="T_Skladanie_02.png" text="mainPage.skladaniePC" :page="'novy-pc-kosice'" topMargin="19rem"
      topMarginMobile="73%" />

    <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'"
      topMargin="19rem" topMarginMobile="73%" />
  </div>
  <SpacerComponent :space="'3rem'" id="services" />
  <div class="main-page-buttons">
    <MainPageButton imageSrc="T_PC_Zostavy.png" text="navigationBar.pcZostavy" :page="'pc-kosice'" />
    <MainPageButton imageSrc="T_Notebooky.png" text="navigationBar.notebooky" :page="'notebook-kosice'" />
    <MainPageButton imageSrc="T_Portfólio.png" text="navigationBar.portfolio" :page="'portfolio-pc-servis-kosice'" />
  </div>

  <SpacerComponent :space="'5rem'" />

  <div id="references" class="partners">
    <PartnerComponent image="game_days.png" text="mainPage.gameDays" page="gamedays.sk" />
    <PartnerComponent image="games_farm.png" text="mainPage.gamesFarm" page="games-farm.com" />
    <PartnerComponent image="triple_hill.png" text="mainPage.tripleHill" page="triple-hill.com" />
    <PartnerComponent image="3dvision.png" text="mainPage.threeDVision" page="3dvision.com" />
  </div>

  <div id="about" class="about-section">
    <div class="text-container">
    <p>{{ $t("mainPage.oMneText") }}</p>
    <p>{{ $t("mainPage.kontakt") }}</p>
    <a href="mailto:rst@rst.sk">rst@rst.sk</a><br>
    <p>+421 948 600 109</p>
  </div>
  </div>

  <router-link to="privacy-policy">Privacy Policy</router-link>
</template>

<script>
import MainPageButton from '@/components/MainPageButton.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';
import PartnerComponent from '@/components/PartnerComponent.vue';

export default {
  name: 'MainPage',
  components: {
    MainPageButton,
    SpacerComponent,
    PartnerComponent,
  },
}
</script>

<style>
.main-page-image-background {
  display: flex;
  width: 100vw;
  height: 0;
  /* Start with zero height */
  padding-top: 69%;
  /* Adjust the percentage based on the image's aspect ratio */
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
  line-height: normal;
  /* 7.0625rem */
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

.partners {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 70%;
  margin: 0 auto;
}
.about-section {
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* This will center the text horizontally */
}
@media (max-width: 900px) {
  .main-logo-text-element {
    letter-spacing: -0.1rem !important;
  }

  .main-page-buttons {
    width: 90%;
    gap: 3%;
  }
}
</style>