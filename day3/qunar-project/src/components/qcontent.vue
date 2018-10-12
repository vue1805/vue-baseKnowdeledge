<template>
	<section class="main-content">
		<ul class="c-wrap">
			<li class="qt-grid c-item qt-bg-red" :class="{
				'qt-bg-red':type==='hotel',
				'qt-bg-blue':type==='flight',
				'qt-bg-green':type==='holiday'
			}">
				<div class="col4 col-main">
					<a class="link-box box-main" qrac-id="hotel" href="                    https://touch.qunar.com/hotel/?bd_source=&amp;ouid=&#10;                ">
						<p v-text="arr[0]"></p>
						<i class="icon-entrance hotel icon-type"></i>
					</a>
				</div>
				<div class="col8 qt-grid">
					<div class="col6 border-shadow">
						<a class="link-box qt-bb-x1" href="http://touch.qunar.com/h5/group/grouplist" qrac-id="group">
							<p>{{arr[1]}}</p>
						</a>
						<a class="link-box" href="https://bnb.qunar.com/tjbnb/app/index.jsp#/home?fromForLog=5366" qrac-id="bnb">
							<p>{{arr[2]}}</p>
						</a>
					</div>
					<div class="col6 qt-br-x1">
						<a class="link-box qt-bb-x1 js-link-international" href="/hotel/?city=曼谷&amp;border=oversea?bd_source=&amp;ouid=" qrac-id="international">
							<p>{{arr[3]}}</p>
						</a>
						<a class="link-box" href="https://bnb.qunar.com/tjbnb/app/index.jsp#/home?fromForLog=5367" qrac-id="bnb">
							<p>{{arr[4]}}</p>
						</a>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>
<script>
	export default {
		props: ["type"],
		data(){
			return {
				arr:[]
			}
		},
		
		mounted() {
			console.log(this.type)
			if(this.type==='hotel'){
				this.arr = ['酒店','特惠酒店','海外酒店','客栈','民宿']
			}else if(this.type==='flight'){
				this.arr = ['机票','特价机票','汽车票/船票','火车票','专车/自驾']
			}else{
				this.arr = ['机票','特价机票','汽车票/船票','火车票','专车/自驾']
			}
		}
	}
</script>
<style scoped>
	.main-content {
		padding: 4px 4px 2px;
	}
	
	.main-content .c-wrap .c-item {
		height: 100px;
		border-bottom: 4px solid #fff;
	}
	
	.qt-grid {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.qt-bg-red {
		background: #f55;
	}
	
	.main-content .c-wrap .c-item .col4,
	.main-content .c-wrap .c-item .col6 {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.qt-grid .col4 {
		width: 33.33%;
	}
	
	.main-content .c-wrap .c-item .link-box.box-main {
		height: 100%;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	
	.main-content .c-wrap .c-item .link-box {
		height: 48px;
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		font-size: 16px;
		text-align: center;
	}
	
	.main-content a {
		color: #fff;
	}
	
	.main-content .c-wrap .c-item .col4.col-main p {
		margin: 15px 0 auto;
	}
	
	.main-content .c-wrap .c-item .link-box .icon-type {
		font-size: 42px;
	}
	
	.icon-entrance {
		font-family: 'QEntranceFont';
		font-weight: normal;
		font-style: normal;
		text-decoration: inherit;
		-webkit-font-smoothing: antialiased;
		display: inline-block;
		width: auto;
		height: auto;
		line-height: inherit;
		vertical-align: baseline;
		background-image: none;
		background-position: 0 0;
		background-repeat: repeat;
		margin: 0 3px;
	}
	
	.main-content .c-wrap .c-item .link-box .icon-type:before {
		content: ' ';
		width: 42px;
		height: 46px;
	}
	
	.icon-entrance.hotel::before {
		background-image: url(//s.qunarzz.com/touch_home/imgs/hotel.png);
		background-size: 100% 100%;
	}
	
	.icon-entrance:before {
		text-decoration: inherit;
		display: inline-block;
		speak: none;
	}
	
	.qt-grid .col8 {
		width: 66.67%;
	}
	
	.qt-grid {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.main-content .c-wrap .c-item .col4,
	.main-content .c-wrap .c-item .col6 {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}
	
	.qt-grid .col6 {
		width: 50%;
	}
	
	.main-content .c-wrap .c-item .link-box {
		height: 48px;
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		font-size: 16px;
		text-align: center;
	}
	
	.main-content a {
		color: #fff;
	}
	
	.qt-bt-x1,
	.qt-bb-x1,
	.qt-bl-x1,
	.qt-br-x1,
	.qt-btb-x1,
	.qt-blr-x1,
	.qt-border-x1 {
		position: relative;
	}
	
	@media only screen and (-webkit-min-device-pixel-ratio: 2) .qt-bt-x1:before,
	.qt-bb-x1:before,
	.qt-bl-x1:before,
	.qt-br-x1:before,
	.qt-btb-x1:before,
	.qt-blr-x1:before,
	.qt-border-x1:before {
		width: 200%;
		height: 200%;
		-webkit-transform: scale(.5);
		-ms-transform: scale(.5);
		transform: scale(.5);
	}
	
	@media only screen and (-webkit-min-device-pixel-ratio: 1.5) .qt-bt-x1:before,
	.qt-bb-x1:before,
	.qt-bl-x1:before,
	.qt-br-x1:before,
	.qt-btb-x1:before,
	.qt-blr-x1:before,
	.qt-border-x1:before {
		width: 150%;
		height: 150%;
		-webkit-transform: scale(.66666667);
		-ms-transform: scale(.66666667);
		transform: scale(.66666667);
	}
	
	.qt-bb-x1:before {
		border-bottom: 1px solid #d4d4d4;
	}
	
	.qt-bt-x1:before,
	.qt-bb-x1:before,
	.qt-bl-x1:before,
	.qt-br-x1:before,
	.qt-btb-x1:before,
	.qt-blr-x1:before,
	.qt-border-x1:before {
		content: "";
		position: absolute;
		font-size: 0;
		line-height: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: none;
		-webkit-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		transform-origin: 0 0;
		box-sizing: border-box;
		pointer-events: none;
	}
	
	.qt-bg-blue {
		background: #25a4bb;
	}
	
	.qt-bg-green {
		background: #31ac5a;
	}
</style>