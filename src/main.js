import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';

// Global styles
import 'vue-swatches/dist/vue-swatches.min.css';
import 'vue-popperjs/dist/css/vue-popper.css';
import './assets/styles.scss';


import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.use(VueMasonry);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
