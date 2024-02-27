<template>
    <div class="partner-container" @click="togglePopup">
        <img :src="require('@/assets/' + image)" class="partner" />
        <div>{{ translatedText }}</div>
        <a class="partner-link" :href="formattedPage" target="_blank">{{ page }}</a>
    </div>
    
</template>

<script>
export default {
    props: {
        image: {
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
    },
    computed: {
        translatedText() {
            return this.$t(this.text);
        },
        formattedPage() {
            if (!/^https?:\/\//i.test(this.page)) {
                return `https://${this.page}`;
            }
            return this.page;
        },
    },
    name: 'PartnerComponent',
}
</script>

<style>
.partner-container {
    position: relative;
    width: 16.875rem;
    height: auto;
    text-align: justify;
}
.partner {
    width: 100%;
    height: 100%;
}
.partner-link {
    float: center !important;
}
@media (max-width: 900px) {
    .partner-container {
        width: 7rem;
    }
}
</style>
