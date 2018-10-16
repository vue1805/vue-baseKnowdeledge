<template>
	<div id="app">
		<!--<square />-->
	</div>
</template>

<script>
	import xswiper from './components/Xswiper.vue'
	import xheader from './components/Xheader.vue'
	import lxswiper from './components/Lxswiper.vue'
	import square from './components/Square.vue'

	export default {
		name: 'app',
		components: {
			xswiper,
			xheader,
			lxswiper,
			square
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>