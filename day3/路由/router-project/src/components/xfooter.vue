<template>
	<div class="weui-tabbar">
		<a @click="green(index)" v-for="(a,index) in arr" :key="index" href="javascript:;" class="weui-tabbar__item" :class="{
			'weui-bar__item_on':page===index
		}">
			<span style="display: inline-block;position: relative;">
				<img :src="img" alt="" class="weui-tabbar__icon">
				<span v-show="a.badge>0" class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
				<span v-show="a.isShowDot" class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
			</span>
			<p class="weui-tabbar__label" v-text="a.title"></p>
		</a>
		<!--<a href="javascript:;" class="weui-tabbar__item">
			<span style="display: inline-block;position: relative;">
			<img :src="img" alt="" class="weui-tabbar__icon">
			<span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
			</span>
			<p class="weui-tabbar__label">通讯录</p>
		</a>
		<a href="javascript:;" class="weui-tabbar__item">
			<span style="display: inline-block;position: relative;">
                        <img :src="img" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
			</span>
			<p class="weui-tabbar__label">发现</p>
		</a>
		<a href="javascript:;" class="weui-tabbar__item">
			<img :src="img" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">我</p>
		</a>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img: require("../assets/icon_tabbar.png"),
				//开始绿的选项卡
				page:0,
				arr: [{
					title: "微信",
					badge: 8,
					isShowDot: false
				}, {
					title: "通讯录",
					badge: 0,
					isShowDot: false
				}, {
					title: "发现",
					badge: 0,
					isShowDot: true
				}, {
					title: "我",
					badge: 0,
					isShowDot: false
				}]
			}
		},
		methods:{
			green(index){
				this.page = index;
				switch(index){
					case 0:
					location.href="#/wechat";
					break;
					case 1:
					location.href="#/contact";
					break;
					case 2:
					location.href="#/find";
					break;
				}
			}
		}
	}
</script>

<style>
	.weui-tabbar {
		position: fixed!important;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>