<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_PC_Udrzba.png" text="navigationBar.udrzba"
            :page="'udrzba-pc-kosice'" topMargin="73%" :doHoverAnimation="false" class="page-button" />
        <div>
        <p>{{ $t("maintenancePage.p1") }}</p>
        <p>{{ $t("maintenancePage.p2") }}</p>
        <p>{{ $t("maintenancePage.p3") }}</p>
        <p>{{ $t("maintenancePage.p4") }}</p>
        </div>
    </div>
</template>

<script>
import MainPageButton from '@/components/MainPageButton.vue';
import { useHead } from '@vueuse/head';
export default {
    name: 'MaintenancePage',
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
