<template>
	<footer class="footer-wrap">
		<ul class="footer-guide qt-grid">
			<li class="col4">
				<a class="guide-box" qrac-id="download" href="/h5/download?immediate=1&amp;bd_source=">
					<i class="icon-entrance camel icon-new"></i>
					<p>下载APP</p>
				</a>
			</li>
			<li class="col4">
				<a class="guide-box" qrac-id="myOrder" href="https://touch.qunar.com/mordercenter/index.html?hybridid=mob_ordercenter#orderlist.list?businessType=all&amp;filterBusiness=true&amp;source=touch">
					<i class="icon-entrance order icon-new"></i>
					<p>我的订单</p>
				</a>
			</li>
			<li class="col4">
				<a class="guide-box" qrac-id="mine" href="https://pay.qunar.com/mobile/h5/personalcenter/myaccount/index.htm?hybridid=mob_uc">
					<i class="icon-entrance2 user icon-new"></i>
					<p>我的</p>
				</a>
			</li>
		</ul>

		<div class="index_index_bottom_ad ad">
			<div style="display:none">&nbsp;</div>
		</div>

		<div class="footer-bot qt-grid qt-font12">
			<div class="qt-grey padding10">
				<p class="qt-center">Qunar 京ICP备05021087</p>
			</div>
			<div class="col3 qt-left">
				<a href="/h5/feedback">
					<p class="qt-center">意见反馈</p>
				</a>
			</div>
			<div class="col3 qt-left">
				<a href="/h5/about">
					<p class="qt-center">关于我们</p>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
</script>

<style scoped>
	.footer-wrap {
		background-color: #eee;
		padding-top: 10px;
	}
	
	.footer-wrap .footer-guide .col4 {
		height: 82px;
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
	}
	
	.qt-grid .col4 {
		width: 33.33%;
	}
	
	.footer-wrap .footer-guide .guide-box {
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
		color: #333;
		font-size: 12px;
	}
	
	.footer-wrap .footer-guide .guide-box i {
		width: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 28px;
		border: 1px solid #dedede;
		border-radius: 20px;
		text-align: center;
		color: #666;
		background-color: #fcfcfc;
	}
	
	.icon-new {
		font-family: 'QEntranceFont2';
		font-style: normal;
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
	
	.footer-wrap .footer-guide .guide-box p {
		line-height: 20px;
	}
	
	.footer-wrap .footer-bot {
		height: 54px;
		line-height: 54px;
		background-color: #eee;
	}
	
	.qt-grid {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.qt-font12 {
		font-size: 12px;
	}
	
	.padding10 {
		padding: 0 10px;
	}
	
	.qt-grey {
		color: #8c8c8c;
	}
	
	.qt-center {
		text-align: center;
		margin: 0 auto;
	}
</style>