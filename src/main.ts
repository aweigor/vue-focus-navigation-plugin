import Vue from 'vue';
import App from './App.vue';
import { focusNavigationPlugin } from './focus-navigation-plugin';

import './assets/main.css';

Vue.use(focusNavigationPlugin);

new Vue({
  render: (h) => h(App)
}).$mount('#app')
