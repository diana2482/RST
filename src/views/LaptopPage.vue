<template>
    <div class="centered-text">
        <p>{{ $t("laptopPage.p1") }}</p>
        <p>{{ $t("laptopPage.p2") }}</p>
        <p>{{ $t("laptopPage.p3") }}</p>
        <p>{{ $t("laptopPage.p4") }}</p>
    </div>
</template>

<script>
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
}
</script>

<style>
.centered-text {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    padding: 10rem 25vw;
    text-align: center;
    min-height: 58vh;
}

@media (max-width: 900px) {
    .centered-text {
        padding: 10rem 1rem;
    }
}
</style>