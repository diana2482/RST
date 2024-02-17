<template>
    <router-link :to="{ name: 'MainPage' }" class="main-logo">RST.sk</router-link>

    <LanguageSwitcher class="lang-switcher" /> 

    <div class="main-header">
        <div class="navigation">
            <!-- Reroute to MainPage and go to anchor with id #services -->
            <router-link :to="{ name: 'MainPage', hash: '#services' }" class="navigation-text-element">{{ $t('mainPage.sluzby') }}</router-link>
            
            <div class="navigation-text-element">{{ $t('mainPage.referencie') }}</div>

            <!-- Other navigation items with route names -->
            <router-link :to="{ name: 'PortfolioPage' }" class="navigation-text-element">{{ $t('mainPage.portfolio') }}</router-link>
            <router-link :to="{ name: 'ComputerPage' }" class="navigation-text-element">{{ $t('mainPage.pcZostavy') }}</router-link>
            <router-link :to="{ name: 'LaptopPage' }" class="navigation-text-element">{{ $t('mainPage.notebooky') }}</router-link>
            <router-link :to="{ name: 'AboutPage' }" class="navigation-text-element">{{ $t('mainPage.oMne') }}</router-link>
        </div>
    </div>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
    name: 'NavigationBar',
    components: {
        LanguageSwitcher,
    }
}
</script>

<style>
.main-header {
    position: fixed;
    width: 100%;
    text-align: center;
    z-index: 1000;
}
.navigation {
    display: inline-flex;
    align-items: flex-start;
    gap: 2.5rem; 
    position: absolute;
    right: 6rem;
    top: 5rem;
}
.navigation-text-element {
    color: #FFF;
    text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.50);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
}
.main-logo {
    color: #FFF;
    position: fixed;
    left: 5rem;
    top: 2rem;
    font-size: 2.5rem;
    font-weight: 600;
    z-index: 1001;
}
.lang-switcher {
    position: fixed;
    right: 5.7rem;
    top: 2rem;
    z-index: 1001;
}
</style>