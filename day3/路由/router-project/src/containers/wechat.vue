<template>
<div>
<xheader />
<xsearch />
<xpanel />
</div>
</template>

<script>
	import xheader from '../components/xheader.vue';
	import xsearch from '../components/xsearch.vue';
	import xpanel from '../components/xpanel.vue';
	export default {
		data() {
			return {
			}
		},
		components: {
			xheader,
			xsearch,
			xpanel,
		}
	}
</script>

<style>

</style>