<template>
	<div>
		<router-view></router-view>
		
	</div>
</template>

<script>
	import xfooter from './components/xfooter.vue';
	//var xheader = require('./components/xheader.vue');
	export default {
		data() {
			return {
				name: "父组件"
			}
		},
		components: {
			xfooter
		}
	}
</script>

<style>
	.name {
		color: red
	}
	*{
		margin: 0;
		padding: 0;
	}
</style>