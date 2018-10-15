import Vue from 'vue'
import Demo from './Demo.vue'
import "weui";
//引用了vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

import Contact from './containers/contact.vue'
import Wechat from './containers/wechat.vue'
import Find from './containers/find.vue'
import Cycle from './containers/cycle.vue'
import Detail from './containers/detail.vue'
//定义路由
const routes = [{
		path: '/contact',
		component: Contact
	},
	{
		path: '/wechat',
		component: Wechat
	},
	{
		path: '/find',
		component: Find
	},
	{
		path: '/cycle',
		component: Cycle
	},
	{
		path: '/detail',
		component: Detail
	}
]
const router = new VueRouter({
	routes // short for `routes: routes`
})
new Vue({
	router,
	render: h => h(Demo)
}).$mount('#app')