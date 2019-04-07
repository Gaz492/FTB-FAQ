import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueShowdown from 'vue-showdown'

// the second parameter of Vue.use() is optional
Vue.use(VueShowdown, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
    parseImgDimensions: true,
  },
})

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
