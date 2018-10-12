<template>
	<div ref="text">
		<input v-model="name" />
		<p v-text="name"></p>
		<button @click="bool=!bool">OK</button>
		<xdestroy v-if="bool" />
	</div>
</template>
<!--
	
	
-->
<script>
	import xdestroy from "../components/xdestroy.vue"
	export default {
		data(){
			return {
				name:"lx",
				bool:true
			}
		},
		//创建之前 没数据，也没有模板
		beforeCreate(){
			console.log("----------beforeCreate------------")
			console.log("el",this.$el);
			console.log("ref",this.$refs.text);
			console.log("data",this.$data);
		},
		//创建后 有数据，没有模板，改数据，但是无法改模板
		created(){
			console.log("----------created------------")
			console.log("el",this.$el);
			console.log("ref",this.$refs.text);
			console.log("data",this.$data);
		},
		//挂载前 有数据，有模板，没挂载
		beforeMount(){
			this.name = 'll'
			console.log("----------beforeMount------------")
			console.log("el",this.$el);
			console.log("ref",this.$refs.text);
			console.log("data",this.$data);
		},
		//有数据，有模板，有挂载
		mounted(){
			console.log("----------mounted------------")
			console.log("el",this.$el);
			console.log("ref",this.$refs.text);
			console.log("data",this.$data);
		},
		//更新前
		beforeUpdate(){
			//alert(1)
			console.log("----------beforeUpdate------------")
			console.log("el",this.$el);
			console.log(this.$refs.text);
			console.log("data",this.$data);
		},
		//更新后
		updated(){
			//alert(1)
			console.log("----------updated------------")
			console.log("el",this.$el);
			console.log(this.$refs.text);
			console.log("data",this.$data);
		},
		components:{
			xdestroy
		}
	}
</script>

<style>
</style>