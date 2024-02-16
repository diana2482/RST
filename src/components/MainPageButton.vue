<template>
    <div class="main-page-button" @mouseover="hover = true" @mouseleave="hover = false">
        <img :src="require('@/assets/' + imageSrc)" class="main-page-button-image">
        <transition name="fade">
            <img v-if="hover" :src="require('@/assets/' + hoverImageSrc)" class="main-page-button-hover">
        </transition>


        <div class="main-page-button-text">{{ text }}</div>
    </div>
</template>
  
  
<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        hoverImageSrc: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        enter(el, done) {
            el.style.opacity = 1;
            done();
        },
    }
};
</script>
  
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave-to

/* Starting and ending states for the fade */
    {
    opacity: 0;
}

.main-page-button {
    width: 30%;
    position: relative;
    display: inline-block;
}

.main-page-button-image,
.main-page-button-hover {
    width: 100%;
    display: block;
}

.main-page-button-hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    /* Hide by default */
    transition: opacity 1s ease;
    /* Masking */
    -webkit-mask-image: url('../assets/T_PC_Zostavy.png');
    /* Safari */
    mask-image: url('../assets/T_PC_Zostavy.png');
    /* Standard */
    mask-size: cover;
}

.main-page-button:hover .main-page-button-hover {
    opacity: 1;
}

.main-page-button-text {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    text-align: center;
    margin: 0;
}</style>
  