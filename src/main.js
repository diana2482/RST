import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import VueCookies from 'vue-cookies';

const app = createApp(App);


app.use(router).use(VueCookies).use(i18n).mount('#app');
