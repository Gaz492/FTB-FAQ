import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueShowdown, {showdown} from 'vue-showdown'

// the second parameter of Vue.use() is optional
showdown.extension('imgExt', () => [{
    type: 'output',
    regex: new RegExp(`<img(.*)>`, 'g'),
    replace: `<img class="img-fluid" $1>`
}]);

Vue.use(VueShowdown, {
    // set default flavor of showdown
    flavor: 'github',
    // set default options of showdown (will override the flavor options)
    options: {
        emoji: false
    }
})

// Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
