<template>
	<div class="weui-search-bar" :class="{
		'weui-search-bar_focusing':isSearch
	}" id="searchBar">
		<form class="weui-search-bar__form">
			<div class="weui-search-bar__box">
				<i class="weui-icon-search"></i>
				<input @keyup="setSearchText" type="search" v-model="searchText" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
				<a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
			</div>
			<label @click="toggle" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
		</form>
		<a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isSearch:false,
				searchText:""
			}
		},
		methods:{
			toggle(){
				this.isSearch = !this.isSearch
			},
			setSearchText(){
				//把this.searchText交到vuex的store的state里面，触发actions的setSearchText的函数
				this.$store.dispatch("setSearchText",this.searchText)
			}
		},
		mounted(){
		}
	}
</script>

<style>

</style>