import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import { BootstrapVue/* , IconsPlugin */ } from 'bootstrap-vue'
import store from './stores/global-store';

// Components
import Home from './components/home';
import Statistics from './components/statistics';

// Css
require('./assets/css/styles.css');

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

// todo change
axios.defaults.baseURL = 'https://5e5d229a97d2ea00147971d0.mockapi.io/sq';
Vue.config.productionTip = false;

const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/statistics', component: Statistics, name: 'Statistics'},
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  store,
  created() {
    this.$store.commit('loadCategoriesAndDataFromSession');
  },
  render: h => h(App),
}).$mount('#app');
