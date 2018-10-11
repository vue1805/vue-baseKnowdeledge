<template>
	<div>
		<xheader />
		<xsearch />
		<xpanel />
		<xfooter />
	</div>
</template>

<script>
	import xheader from './components/xheader.vue';
	import xsearch from './components/xsearch.vue';
	import xpanel from './components/xpanel.vue';
	import xfooter from './components/xfooter.vue';
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