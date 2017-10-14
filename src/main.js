import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import router from './router'
import {store} from './store'
import VueResource from 'vue-resource'


Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
