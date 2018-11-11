# 动画

vue里面。动画一般使用在两个指令上

`v-show`，`v-if`和`v-for`

在`v-show="bool"`所在标签的前和后加上`<transition>`
```html
<transition>
<p v-show="bool">显示或者隐藏</p>
</transition>
```
注意`<transition>`标签接受`name='类名'`，该类定义动画的一些效果
```html
<transition name="类的名字"></transition>
```


# vuex

```

```