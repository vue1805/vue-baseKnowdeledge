<template>
	<section class="sub-content">
		<ul class="wrap qt-grid">
			<li class="item">
				<a class="link-box" href="https://touch.dujia.qunar.com/visaWifi.qunar?et=home_visa_t" qrac-id="visa">
					<i class="icon"></i>
					<p class="t">签证 · WiFi</p>
				</a>
			</li>
			<li class="item">
				<a class="link-box" href="https://touch.dujia.qunar.com/abroad/index.qunar?dep=&amp;et=home_abroad_t" qrac-id="abroad">
					<i class="icon abroad"></i>
					<p class="t">出境游</p>
				</a>
			</li>
			<li class="item">
				<a class="link-box" href="https://piao.qunar.com/touch/channel/onedaytour/index.htm?cat=in_track%3Dt_onedaytravelsy " qrac-id="onedaytour">
					<i class="icon oneday"></i>
					<p class="t">一日游</p>
				</a>
			</li>
			<li class="item">
				<a class="link-box" href="https://touch.go.qunar.com/food?bd_source=qunar_index" qrac-id="msl">
					<i class="icon msl"></i>
					<p class="t">美食林</p>
				</a>
			</li>
		</ul>
		<ul class="wrap qt-grid qt-pb10">
			<li class="item">
				<a class="link-box" href="https://touch.qunar.com/h5/bus?bd_source=touch_underhomepage" qrac-id="subbus">
					<i class="icon bus"></i>
					<p class="t">汽车票</p>
				</a>
			</li>
			<li class="item">
				<a class="link-box" href="https://touch.dujia.qunar.com/domestic/index.qunar?et=home_guoneiyou_t" qrac-id="internal">
					<i class="icon internal"></i>
					<p class="t">国内游</p>
				</a>
			</li>
			<li class="item">
				<a class="link-box" href="https://carpool.qunar.com/web/carline/booking/search?inapp=0&amp;nfrom=699&amp;channelId=10&amp;distributorId=&amp;hybridid=mob_hcar" qrac-id="superbus">
					<i class="icon superbus"></i>
					<p class="t">超级巴士</p>
				</a>
			</li>
			<li class="item">
				<a class="link-box" href="https://touch.go.qunar.com?bd_source=" qrac-id="gl">
					<i class="icon gl"></i>
					<p class="t">攻略</p>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
</script>

<style scoped>
	.sub-content {
		padding-top: 10px;
		background-color: #eee;
	}
	
	.sub-content .wrap {
		background-color: #fff;
		padding-left: 20px;
		padding-right: 20px;
	}
	
	.qt-grid {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.sub-content .wrap .item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
	
	.sub-content .wrap .item .link-box {
		display: block;
		padding: 10px 0 0;
		color: #333;
	}
	
	.sub-content .wrap .item .icon {
		width: 33px;
		height: 33px;
		display: inline-block;
		background-image: url(http://s.qunarzz.com/touch_home/images/entrances.png);
		background-size: 374px 130px;
		background-position: -35px -12px;
		background-repeat: no-repeat;
	}
	
	.icon {
		font-family: 'QTouchFont', sans-serif;
		font-weight: normal;
		font-style: normal;
		text-decoration: inherit;
		-webkit-font-smoothing: antialiased;
		display: inline;
		width: auto;
		height: auto;
		line-height: inherit;
		vertical-align: baseline;
		background-image: none;
		background-position: 0 0;
		background-repeat: repeat;
		margin: 0 3px;
	}
	
	.sub-content .wrap .item .t {
		width: 100%;
		display: block;
		padding-top: 10px;
	}
</style>