import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';
import Snotify, { SnotifyPosition } from 'vue-snotify';

// Global styles
import 'vue-snotify/styles/material.css';
import 'vue-swatches/dist/vue-swatches.min.css';
import 'vue-popperjs/dist/css/vue-popper.css';
import './assets/styles.scss';

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

new Vue({
  router,
  store,
  i18n,
  provide: apollo.provider.provide(),
  render: h => h(App),
}).$mount('#app');
