<template>
	<p>这是一个组件</p>
</template>

<script>
	export default {
		beforeDestroy() {
			console.log("销毁前")
		},
		destroyed() {
			console.log("销毁后")
		}
	}
</script>

<style>

</style>