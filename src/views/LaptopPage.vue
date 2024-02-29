<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Notebooky.png" text="navigationBar.notebooky" :page="'notebook-kosice'" topMargin="82%"
            class="page-button" :doHoverAnimation="false" />
        <div>
            <p>{{ $t("laptopPage.p1") }}</p>
            <p>{{ $t("laptopPage.p2") }}</p>
            <p>{{ $t("laptopPage.p3") }}</p>
            <p>{{ $t("laptopPage.p4") }}</p>
        </div>
    </div>
</template>

<script>
import MainPageButton from '@/components/MainPageButton.vue';
import { useHead } from '@vueuse/head';
export default {
    name: 'LaptopPage',
    setup() {
        useHead({
            title: 'Notebooky',
            meta: [
                {
                    name: 'description',
                    content: 'Nový alebo starý notebook, na všetko sa u nás nájde riešenie',
                },
                {
                    name: 'keywords',
                    content: 'servis, kosice, košice, oprava, notebook, oprava laptopu, oprava notebooku',
                },
            ],
        })
    },
    components: {
        MainPageButton,
    }
}
</script>

<style></style>
