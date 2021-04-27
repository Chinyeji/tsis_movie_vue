import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Movie from './movie_info.vue'
import Phone from './pages/phone.vue'
import Seats from './pages/seats.vue'
import Check from './pages/check.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/phone',
    name: 'Phone',
    component: Phone
  },
  {
    path: '/seats',
    name: 'Seats',
    component: Seats
  },
  {
    path: '/check',
    name: 'Check',
    component: Check
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')