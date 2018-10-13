<template>
<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		components: {
			XHeader,
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style>

</style>