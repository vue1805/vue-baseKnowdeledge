import Vue from 'vue'
//var Vue = require("vue")
import Demo from './Demo.vue'
import $ from 'jquery'
window.$ = $;
import "weui";
Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#app')
