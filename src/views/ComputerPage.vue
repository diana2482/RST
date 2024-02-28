<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_PC_Zostavy.png" text="navigationBar.pcZostavy"
            :page="'pc-kosice'" topMargin="73%" :doHoverAnimation="false" class="page-button" />
        <div>
        <p>{{ $t("computerPage.p1") }}</p>
            <p>{{ $t("computerPage.p2") }}</p>
            <p>{{ $t("computerPage.p3") }}</p>
            <p>{{ $t("computerPage.p4") }}</p>
        </div>
    </div>
</template>

<script>
import MainPageButton from '@/components/MainPageButton.vue';
import { useHead } from '@vueuse/head';
export default {
    name: 'ComputerPage',
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
