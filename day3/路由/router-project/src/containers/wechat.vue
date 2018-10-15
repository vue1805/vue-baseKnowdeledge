<template>
	<div>
		<xheader />
		<xsearch />
		<xpanel />
		<xfooter />
	</div>
</template>

<script>
	import xheader from '../components/xheader.vue';
	import xsearch from '../components/xsearch.vue';
	import xpanel from '../components/xpanel.vue';
	import xfooter from '../components/xfooter.vue';
	export default {
		data() {
			return {}
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

</style>