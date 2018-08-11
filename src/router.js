import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NewKudo from './views/NewKudo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new',
      name: 'NewKudo',
      component: NewKudo,
    },
  ],
});
