# vue

vue  yyx(个人项目) 非盈利

react  facebook

angular  google

- [JavaScript框架](https://cn.vuejs.org/)


> Vue的核心库只关注视图层 view

浏览器展示的页面内容 == 视图 == html + css + (js)

# 入门使用

在页面中引入vue.js
```html
<script src="../js/vue.jsue"></script>
```

一切的开端为`Vue`

1.第一步new Vue  实例化第一个Vue的应用
```js
new Vue()
```

2.往Vue里面传入参数，一定是一个对象，产生作用域，可以含有多个局部作用域
也就可以有多个`new Vue()`,一般建议用id来匹配作用域
```js
new Vue({
	el:"",//element
	data:{}//数据
})
```
3.在data里面可以存放数据，配合符号{{}}把data的属性值放进去，就可以展示数据了
```js
//视图层
<div id="demo">
	<p>{{str}}</p>
	<p>{{arr[1]}}</p>
</div>
<script src="../js/vue.js"></script>
<script>
	new Vue({
		el: "#demo", //element
		data: { //数据层
			str: "ly",
			arr: [1, 2, 3],
			skill: {
				fe: ['js', 'css', 'html'],
				be: ['php', 'node']
			},
			num: 1,
			obj: null
			//函数不能放
		}
	})
</script>
```

vue不会把重心放在操作节点，而是放在操作数据

|x|x|
|-|-|
|jQuery|节点驱动|
|Vue|数据驱动|

{{}}代替$("").text()
:代替$("").attr()
代替$("").click


# 指令

```js
v-text $().text
v-html $().html()
v-show $().show()
v-if   $().append/remove
v-for  $().each()
v-bind : $().attr/css/addClass
v-model $().val()
v-on  @  $().on()
```