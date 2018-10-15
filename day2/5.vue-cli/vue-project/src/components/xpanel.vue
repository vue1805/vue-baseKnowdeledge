<template>
	<div class="weui-panel weui-panel_access">
		<div class="weui-panel__hd">图文组合列表 {{searchText}}</div>
		<div class="weui-panel__bd">
			<a v-for="n in computedNews" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
				<div class="weui-media-box__hd">
					<img @click="showGallery(n.author.avatar_url)" class="weui-media-box__thumb" :src="n.author.avatar_url" alt="">
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
	export default {
		data() {
			return {
				news: [],
				page: 0,
				defaultImg: require("../assets/logo.png")
			}
		},
		computed: {
			searchText() {
				console.log(this.$store.getters.getSearchText);
				return this.$store.getters.getSearchText;
			},
			computedNews() {
				//var self = this;
				var newArr = this.news.filter(function(a) {
					console.log(a.title.indexOf(this.searchText) != -1)
					//真
					console.log(a.title, this.searchText)
					return a.title.indexOf(this.searchText) != -1
					//return 
				}.bind(this))
				console.log(newArr);
				return newArr
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
						console.log(data)
						self.news = self.news.concat(data.data);
					}
				})
			},
			showGallery(url){
				this.$store.state.isShowGallery = true
				this.$store.state.galleryUrl = url
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