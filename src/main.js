import 'bootstrap/dist/js/bootstrap.min';

import './js/scripts';

// We will extract all css to a separate file
import './sass/vendor.scss';
import './sass/app.scss';

import Vue from 'vue';
import App from './layouts/App.vue';
import router from './router';


import { store } from './services/state/store';

const $ = require('jquery');

const jQuery = $;
window.$ = $;
window.jQuery = jQuery;

window.routeFrom = null;


Vue.prototype.$eventBus = new Vue();
window.vueEventBus = Vue.prototype.$eventBus;


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
