<template>
    <div class="centered-text">
        <MainPageButton imageSrc="T_Diagnostika.png" text="mainPage.diagnostika" :page="'servis-pc-notebook-kosice'" topMargin="82%"
            class="page-button" :doHoverAnimation="false" />
        <div>
        <p>{{ $t("diagnosticsPage.p1") }}</p>
        <p>{{ $t("diagnosticsPage.p2") }}</p>
        <p>{{ $t("diagnosticsPage.p3") }}</p>
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
            title: 'Diagnostika',
            meta: [
                {
                    name: 'description',
                    content: 'Diagnostika počítačov, notebookov a iných zariadení',
                },
                {
                    name: 'keywords',
                    content: 'diagnostika, pc, pocitac, počítač, servis, oprava, kosice, košice, notebook, zostava, oprava grafickej karty, prehrievanie počítača',
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
