import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

import '@/assets/css/iconfont.css'

axios.defaults.baseURL = "https://autumnfish.cn";
axios.defaults.timeout = 3000;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
