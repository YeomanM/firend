// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
// import '@/assets/styles/main.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})


// Vue.config.productionTip = false

/* eslint-disable no-new */

import api from './api/api'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.$api = api

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
