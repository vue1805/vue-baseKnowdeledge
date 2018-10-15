import Vue from 'vue'
//var Vue = require("vue")
import Demo from './Demo.vue'
import $ from 'jquery'
window.$ = $;
import "weui";
Vue.config.productionTip = false
//引入状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	//状态
	state: {
		searchText: "",
		isShowGallery:false,
		galleryUrl:""
	},
	//
	mutations: {
		changeSearchText(state, data) {
			state.searchText = data;
		}
	},
	actions: {
		setSearchText(context, data) {
			context.commit('changeSearchText', data)
		},
	},
	getters:{
		getSearchText(state){
			return state.searchText
		}
	}
	//actions---(commit)--->mutations----->state
})
new Vue({
	store,
	render: h => h(Demo)
}).$mount('#app')