<template>
	<div>
		<h1>垂直滚动动轮播图</h1>
		<div class="banner">
			<ul>
				<li><img :src="imgArrs[0]"></li>
				<li><img :src="imgArrs[1]"></li>
				<li><img :src="imgArrs[2]"></li>
				<li><img :src="imgArrs[3]"></li>
				<li><img :src="imgArrs[4]"></li>
				<li><img :src="imgArrs[0]"></li>
			</ul>
			<button class="btnLeft"><</button>
			<button class="btnRight">></button>
		</div>
	</div>
</template>

<script>
	import common from "../lib/common.js";
	export default {
		data() {
			return {
				imgArrs: [
					require('../assets/img/g1.jpg'),
					require('../assets/img/g2.jpg'),
					require('../assets/img/g3.jpg'),
					require('../assets/img/g4.jpg'),
					require('../assets/img/g5.jpg')
				]
			}
		},
		mounted() {
			document.addEventListener('DOMContentLoaded', () => {
				let banner = document.querySelector('.banner');
				let ul = banner.querySelector('ul');

				// 轮播图的宽度
				let long = ul.children.length * banner.clientWidth;
				// 索引值
				let idx = 0;
				let len = ul.children.length;
				ul.style.width = long + 'px';
				// 添加分页
				let page = document.createElement('div');
				page.className = 'page';
				for(let i = 0; i < len - 1; i++) {
					let btn = document.createElement('span');
					btn.setAttribute('idex', i);
					btn.innerHTML = i + 1;
					page.appendChild(btn);
				}
				page.children[0].className = 'active';
				banner.appendChild(page);

				// 自动切换图片
				// let timer;
				let timer = setInterval(show, 2000);

				banner.onmouseover = e => {
					clearInterval(timer);

					// 移到分页上
					if(e.target.tagName.toLowerCase() === 'span') {
						for(let i = 0; i < len - 1; i++) {
							page.children[i].className = '';
						}
						// ??????不懂
						idx = e.target.innerText - 1;
						autoPlay();
					}
				}
				// 鼠标移开
				banner.onmouseout = () => {
					timer = setInterval(show, 1000);
				}

				// 点击切图按钮
				banner.onclick = e => {
					if(e.target.className === 'btnLeft') {
						idx--;
						if(idx < 0) {

						}
						autoPlay();
					}
					if(e.target.className === 'btnRight') {
						idx++;
						autoPlay();
					}
				}

				function show() {
					idx++;
					autoPlay();
				}

				function autoPlay() {
					if(idx >= len) {
						ul.style.left = 0;
						idx = 1;
					} else if(idx < 0) {
						idx = len - 2;
					}
					common.animate(ul, {
						left: -idx * banner.clientWidth
					});

					// 页码高亮
					for(let i = 0; i < len - 1; i++) {
						if(i === idx) {
							page.children[i].className = 'active';
						} else {
							page.children[i].className = '';
						}
					}
					if(idx === len - 1) {
						page.children[0].className = 'active';
					}

				}

			})
		}
	}
</script>

<style scoped>
	button {
		border: none;
		color: #fff;
	}
	
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.banner {
		position: relative;
		width: 320px;
		height: 320px;
		border: 10px solid #58bc58;
		overflow: hidden;
	}
	
	.banner ul {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.banner img {
		display: block;
	}
	
	.banner ul li {
		float: left;
	}
	
	.banner .page {
		position: absolute;
		right: 0;
		bottom: 0;
	}
	
	.banner .page span {
		display: inline-block;
		width: 20px;
		color: #fff;
		text-align: center;
	}
	
	.banner .page span:hover {
		background: rgba(255, 0, 0, 0.8);
	}
	
	.active {
		background: rgba(255, 0, 0, 0.8);
	}
	
	.btnLeft {
		width: 30px;
		height: 100px;
		position: absolute;
		left: 0;
		top: 50%;
		margin-top: -50px;
		background: rgba(255, 0, 0, 0.5);
	}
	
	.btnRight {
		width: 30px;
		height: 100px;
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -50px;
		background: rgba(255, 0, 0, 0.5);
	}
</style>