<template>
	<div class="weui-gallery" :style="{display: isShowGallery?'block':'none'}">
		<span class="weui-gallery__img" :style="{backgroundImage: `url(${galleryUrl})`}"></span>
		<div class="weui-gallery__opr">
			<a @click="hideGallery" href="javascript:" class="weui-gallery__del">
				<i class="weui-icon-delete weui-icon_gallery-delete"></i>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		methods:{
			hideGallery(){
				this.$store.state.isShowGallery = false
			}
		},
		computed:{
			isShowGallery(){
				return this.$store.state.isShowGallery
			},
			galleryUrl(){
				return this.$store.state.galleryUrl
			}
		},
//		mounted(){
//			console.log(this.$store.state.isShowGallery)
//		}
	}
</script>

<style>

</style>