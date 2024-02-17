<template>
    <div class="language-switcher" @click="toggleLanguage">
        <div class="languages">
            <span class="language" :class="{ active: currentLanguage === 'SK' }">SK</span>
            <span class="language" :class="{ active: currentLanguage === 'EN' }">EN</span>
        </div>
        <div class="slider" :class="{ 'slide-right': currentLanguage === 'EN' }"></div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentLanguage: 'SK',
        };
    },
    methods: {
        toggleLanguage() {
            this.currentLanguage = this.currentLanguage === 'SK' ? 'EN' : 'SK';
        },
    },
};
</script>
  
<style scoped>
.language-switcher {
    width: 100px;
    height: 40px;
    border-radius: 3rem;
    border: 1px solid #FFF;
    box-shadow: inset 0 0 0 5px white;
    position: relative;
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
    left: 0;
    right: 50px;
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
  