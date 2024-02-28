<template>
  <div id="fb-root"></div>
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
    <MainPageButton imageSrc="T_PC_Zostavy.png" text="navigationBar.pcZostavy" :page="'pc-kosice'" topMargin="19rem"
     topMarginMobile="73%" />
  </div>
  <SpacerComponent :space="'3rem'" id="services" />
  <div class="main-page-buttons">
    <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'"/>
    <MainPageButton imageSrc="T_Notebooky.png" text="navigationBar.notebooky" :page="'notebook-kosice'" />
    <MainPageButton imageSrc="T_Portfólio.png" text="navigationBar.portfolio" :page="'portfolio-pc-servis-kosice'" />
  </div>

  <SpacerComponent :space="'5rem'" />

  <div id="references" class="partners">
    <PartnerComponent image="game_days.png" text="mainPage.gameDays" page="gamedays.sk" />
    <PartnerComponent image="games_farm.png" text="mainPage.gamesFarm" page="games-farm.com" />
    <PartnerComponent image="triple_hill.png" text="mainPage.tripleHill" page="triple-hill.com" />
    <PartnerComponent image="3dvision.png" text="mainPage.threeDVision" page="3division.sovietrepublic.net" />
  </div>

  <SpacerComponent :space="'5rem'" />

  <div id="about" class="about-section">
    <div class="fb-page" data-href="https://www.facebook.com/rstskservis" data-tabs="timeline" data-width=""
      data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
      data-show-facepile="true" target="_blank">
      <blockquote cite="https://www.facebook.com/rstskservis" class="fb-xfbml-parse-ignore"><a
          href="https://www.facebook.com/rstskservis">RST.sk</a></blockquote>
    </div>
    <div class="text-container">
      <p>{{ $t("mainPage.oMneText") }}</p>
      <p>{{ $t("mainPage.kontakt") }}</p>
      <p><a href="mailto:rst@rst.sk">rst@rst.sk</a></p>
      <p>+421 948 600 109</p>
    </div>
  </div>

  <SpacerComponent :space="'5rem'" />
</template>

<script>
import MainPageButton from '@/components/MainPageButton.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';
import PartnerComponent from '@/components/PartnerComponent.vue';
import { useHead } from '@vueuse/head';

export default {
  setup() {
    useHead({
      title: 'RST - Rýchlejšie, spoľahlivejšie, tichšie',
      meta: [
        {
          name: 'description',
          content: 'Servis, Skladanie počítačových zostáv na mieru. Oprava počítačov a notebookov. Košice',
        },
        {
          name: 'keywords',
          content: 'pc, pocitac, servis, kosice, košice, oprava, notebook, zostava, skladanie, rýchlejšie, spoľahlivejšie, tichšie, rýchlejšie spoľahlivejšie tichšie, rst, rstservis, rst.sk, rst servis, rst.sk servis, rst.sk servis košice, rst.sk košice, rst.sk servis pc košice, rst.sk servis',
        },
      ],
    })
  },
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
}

.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  text-align: justify;
  max-width: 500px;
}

.fb-page {
  width: 350px;
  margin: 0 1rem;
}

@media (max-width: 900px) {
  .main-logo-text-element {
    letter-spacing: -0.1rem !important;
  }
  .main-page-buttons {
    width: 90%;
    gap: 3%;
  }
  .about-section {
    flex-direction: column;
  }

  .text-container, .fb-page {
    align-items: center;
    text-align: center;
    max-width: 100%;
    margin: 1rem 0;
  }
  
  .fb-page {
    width: 250px;
  }
}
</style>