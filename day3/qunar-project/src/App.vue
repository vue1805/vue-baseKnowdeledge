<template>
	<div id="app">
		<qheader />
		<qcontent type="hotel" />
		<qcontent type="flight" />
		<qcontent type="holiday" />
		<qcontent type="holiday" />
		<qcontent2 />
		<qfooter />
	</div>
</template>

<script>
	import qheader from './components/qheader.vue';
	import qcontent from './components/qcontent.vue';
	import qcontent2 from './components/qcontent2.vue';
	import qfooter from './components/qfooter.vue';
	export default {
		name: 'app',
		components: {
			qheader,
			qcontent,
			qcontent2,
			qfooter
		}
	}
</script>
<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	a,
	abbr,
	address,
	article,
	aside,
	audio,
	b,
	blockquote,
	body,
	caption,
	cite,
	code,
	dd,
	del,
	dfn,
	dialog,
	div,
	dl,
	dt,
	em,
	fieldset,
	figure,
	footer,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	header,
	hgroup,
	hr,
	html,
	i,
	iframe,
	img,
	ins,
	kbd,
	label,
	legend,
	li,
	mark,
	menu,
	nav,
	object,
	ol,
	p,
	pre,
	q,
	samp,
	section,
	small,
	span,
	strong,
	sub,
	sup,
	tfoot,
	th,
	thead,
	time,
	tr,
	ul,
	var,
	video {
		border: 0;
		margin: 0;
		outline: 0;
		padding: 0;
		box-sizing: border-box;
		font-size: 100%;
		font-weight: normal;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		-webkit-font-smoothing: antialiased;
		list-style: none;
	}
</style>