<template>
	<div class="weui-panel weui-panel_access">
		<!--<div class="weui-panel__hd">图文组合列表</div>-->
		<div class="weui-panel__bd">
			<a v-for="(n,index) in news" :key="index" :href="'#/detail?id='+index" class="weui-media-box weui-media-box_appmsg">
				<div class="weui-media-box__hd">
					<img class="weui-media-box__thumb" :src="n.author.avatar_url" alt="">
				</div>
				<div class="weui-media-box__bd">
					<h4 class="weui-media-box__title" v-text="n.author.loginname"></h4>
					<p class="weui-media-box__desc" v-text="n.title"></p>
				</div>
			</a>
		</div>
		<div class="weui-panel__ft">
			<a @click="getNews" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	export default {
		data() {
			return {
				news: [],
				page: 0,
				defaultImg:require("../assets/logo.png")
			}
		},
		methods: {
			getNews() {
				var self = this;
				$.ajax({
					type: "GET",
					url: "https://cnodejs.org/api/v1/topics",
					data: {
						page: self.page++,
						tab: "share",
						limit: 10,
					},
					success(data) {
						self.news = self.news.concat(data.data);
					}
				})
			}
		},
		mounted() {
			this.getNews();
		}
	}
</script>

<style>
	.weui-panel {
		margin-bottom: 50px;
	}
</style>