<template>
    <div class="language-switcher" @click="toggleLanguage">
      <div class="languages">
        <span class="language" :class="{ active: currentLanguage === 'sk' }">SK</span>
        <span class="language" :class="{ active: currentLanguage === 'en' }">EN</span>
      </div>
      <div class="slider" :class="{ 'slide-right': currentLanguage === 'en' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentLanguage: this.$i18n.locale,
      };
    },
    methods: {
      toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'sk' ? 'en' : 'sk';
        // Update the i18n locale
        this.$i18n.locale = this.currentLanguage;
      },
    },
    watch: {
      // Reactively watch for i18n locale changes
      '$i18n.locale'(newLocale) {
        this.currentLanguage = newLocale;
      },
    },
  };
  </script>
  
<style scoped>
.language-switcher {
    width: 90px;
    height: 35px;
    border-radius: 3rem;
    border: 1px solid #FFF;
    box-shadow: inset 0 0 0 3px white;
    /* position: relative; */
    cursor: pointer;
    overflow: hidden;
}

.languages {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
}

.language {
    color: white;
    /* font-weight: bold; */
    font-weight: 600;
}

.slider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
    right: 40px;
    background-color: white;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
}

.slider.slide-right {
    transform: translateX(50px);
}

.language.active {
    color: black;
}
</style>
  