<template>
	<div>
		<xheader />
		<xsearch />
		<xpanel />
		<xfooter />
		<xgallery />
	</div>
</template>

<script>
	import xheader from './components/xheader.vue';
	import xsearch from './components/xsearch.vue';
	import xpanel from './components/xpanel.vue';
	import xfooter from './components/xfooter.vue';
	import xgallery from './components/xgallery.vue';
	//var xheader = require('./components/xheader.vue');
	export default {
		data() {
			return {
				name: "父组件"
			}
		},
		components: {
			xheader,
			xsearch,
			xpanel,
			xfooter,
			xgallery
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