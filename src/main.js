import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';
import Snotify, { SnotifyPosition } from 'vue-snotify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Vuebar from 'vuebar';

// Global styles
import 'vue-snotify/styles/material.css';
import 'vue-swatches/dist/vue-swatches.min.css';
import 'vue-popperjs/dist/css/vue-popper.css';
import './assets/styles.scss';
// eslint-disable-next-line
import 'swiper/dist/css/swiper.css';

import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import apollo from './apollo';

// Vue plugins
Vue.config.productionTip = false;
Vue.use(VueMasonry);
Vue.use(Snotify, {
  toast: {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  },
});
Vue.use(VueAwesomeSwiper, {
  loop: false,
  allowTouchMove: false,
  speed: 500,
});
Vue.use(Vuebar);

new Vue({
  router,
  store,
  i18n,
  provide: apollo.provider.provide(),
  render: h => h(App),
}).$mount('#app');
