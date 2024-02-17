<template>
    <div class="main-page-button" @mouseover="hover = true" @mouseleave="hover = false" @click="navigate">
        <img :src="require('@/assets/' + imageSrc)" class="main-page-button-image">

        <img :src="require('@/assets/T_Hover.png')" class="main-page-button-hover">

        <div class="main-page-button-text" :style="{ top: topMargin}">{{ text }}</div>
    </div>
</template>
  
  
<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        page: {
            type: String,
            required: true,
        },
        topMargin: {
            type: String,
            required: false,
            default: "22rem",
        },
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        navigate() {
            if (!this.page) {
                return;
            }

            this.$router.push(this.page);
        }
    }
};
</script>
  
<style scoped>
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
    transition: opacity 0.3s ease;
    /* Masking */
    -webkit-mask-image: url('../assets/T_PC_Zostavy.png');
    /* Safari */
    mask-image: url('../assets/T_PC_Zostavy.png');
    /* Standard */
    mask-size: cover;
}

.main-page-button:hover .main-page-button-hover {
    opacity: 1;
    cursor: pointer;
}

.main-page-button-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* margin: 0; */

    width: 10.3125rem;
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -5%;
}
</style>
  