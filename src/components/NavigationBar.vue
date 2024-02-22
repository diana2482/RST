<template>
    <div class="header">
        <router-link :to="{ name: 'MainPage' }" class="main-logo">RST.sk</router-link>

        <LanguageSwitcher class="lang-switcher" /> 

        <div class="navigation">
            <!-- Reroute to MainPage and go to anchor with id #services -->
            <router-link :to="{ name: 'MainPage', hash: '#services' }" class="navigation-text-element">{{ $t('mainPage.sluzby') }}</router-link>
            
            <router-link :to="{ name: 'MainPage', hash: '#references' }" class="navigation-text-element">{{ $t('mainPage.referencie') }}</router-link>

            <router-link :to="{ name: 'PortfolioPage' }" class="navigation-text-element">{{ $t('mainPage.portfolio') }}</router-link>
            <router-link :to="{ name: 'ComputerPage' }" class="navigation-text-element">{{ $t('mainPage.pcZostavy') }}</router-link>
            <router-link :to="{ name: 'LaptopPage' }" class="navigation-text-element">{{ $t('mainPage.notebooky') }}</router-link>
            <router-link :to="{ name: 'MainPage', hash: '#about' }" class="navigation-text-element">{{ $t('mainPage.oMne') }}</router-link>
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
.header {
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 4rem;
}
.main-logo {
    color: #FFF;
    font-size: 2.5rem;
    font-weight: 600;
    margin-left: 5rem;
}
.navigation {
    display: inline-flex;
    align-items: flex-start;
    gap: 2.3rem;
    margin-right: 5rem;
}
.navigation-text-element {
    color: #FFF;
    text-shadow: 1px 6px 4px rgba(0, 0, 0, 0.50);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
}
.lang-switcher {
    position: absolute;
    right: 4.5rem;
    top: 2rem;
    z-index: 1001;
}
</style>