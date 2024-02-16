<template>
  <div class="main-page-image-background">
    <div class="main-logo-text">
      <div class="main-logo-text-element">RÝCHLEJŠIE</div>
      <div class="main-logo-text-element">SPOĽAHLIVEJŠIE</div>
      <div class="main-logo-text-element">TICHŠIE</div>
    </div>
  </div>

  <div class="main-page-buttons" style="margin-bottom: 3rem;">    
    <MainPageButton
      imageSrc="T_Notebooky.png"
      hoverImageSrc="T_Hover.png"
      text="Oprava počítačov a notebookov"
    /><MainPageButton
      imageSrc="T_Notebooky.png"
      hoverImageSrc="T_Hover.png"
      text="Skladanie počítačov"
    /><MainPageButton
      imageSrc="T_Notebooky.png"
      hoverImageSrc="T_Hover.png"
      text="Diagnostika"
    />
  </div>
  <div class="main-page-buttons">   
  <MainPageButton
      imageSrc="T_Notebooky.png"
      hoverImageSrc="T_Hover.png"
      text="PC zostavy"
    /><MainPageButton
      imageSrc="T_Notebooky.png"
      hoverImageSrc="T_Hover.png"
      text="Notebooky"
    /><MainPageButton
      imageSrc="T_Notebooky.png"
      hoverImageSrc="T_Hover.png"
      text="Portfólio"
    />
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
.main-page-image-background{
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-image: url('../assets/Header_computer.jpg');
  background-size: cover;
  background-position: center;
}
.main-logo-text{display: flex;
flex-direction: column;
align-items: flex-start;
gap: -2.8125rem;
  text-transform: uppercase;
}
.main-logo-text-element{
  color: #FFF;
text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.50);
font-size: 4.6875rem;
font-style: normal;
font-weight: 600;
line-height: 150.667%; /* 7.0625rem */
letter-spacing: -0.23438rem;
}
.main-page-buttons {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2.5rem;
    width: 30%;
    margin: 0 auto;
}
</style>