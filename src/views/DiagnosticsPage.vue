<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'" topMargin="82%"
            class="page-button" :doHoverAnimation="false" />
        <div>
        <p>{{ $t("diagnosticsPage.p1") }}</p>
        </div>
    </div>
</template>

<script>
import MainPageButton from '@/components/MainPageButton.vue';
import { useHead } from '@vueuse/head';
export default {
    name: 'DiagnosticsPage',
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
    components: {
        MainPageButton,
    }
}
</script>

<style></style>