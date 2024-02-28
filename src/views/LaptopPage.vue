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