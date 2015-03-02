#Zepto.pageSlider

基于Zepto的移动端多功能滚动模块插件

A Zepto JS plugin that creates the various slider modules. 

[Readme for En](https://github.com/mc-zone/Zepto.pageSlider/tree/master/README.en.md/)


##使用方法

step.1 引入 zpeto.js 及插件

```js
<script type="text/javascript" src="path/to/zepto.js"></script>
<script type="text/javascript" src="path/to/zepto.pageSlider.js"></script>
```

step.2 HTML Element

```HTML
<div id="container">
	<div class="page">
        page1
    </div>
	<div class="page">
        page2
    </div>
	<div class="page">
        page3
    </div>
</div>

```

step.3 初始化

```js
<script type="text/javascript">
Zepto(function($){
    var $container = $("#container");
    $container.pageSlider({
        loop:false,
        easingTime:600
    });
});
	
</script>
```


##可选参数及默认值

```js
$container.pageSlider({
    pageSelector: ".page",     //页面DOM使用的selector，默认为`.page`
    height:     windowHeight,  //默认为window高。可传入百分比（按父级百分比），或 px 值
    width:      windowWidth,   //默认为window宽。可传入百分比（按父级百分比），或 px 值
    horizontal: false,      //默认为竖直排布scroll，可以水平
    autoSpeed:  5000,       //自动播放速度
    auto:       false,      //是否自动播放
    loop:       true,       //是否循环播放
    percentThreshold: 10,   //拉动超过百分比时翻页
    easing:     'ease-out', //缓动函数方式 `linear`, `ease`, `ease-out`
    easingTime: 400,        //缓动延迟
    pageCss:    {},         //page额外的css(不接受height,width,会被覆盖)
    prevBtn:    null,       //向前翻页按钮
    nextBtn:    null,       //向后翻页按钮
    beforeMove: function($page,index){}, //翻页前callback
    afterMove:  function($page,index){}  //翻页后callback
});
```

##注意

- 请自行设置页面的`css reset` （例如取消 body 的`padding`和`margin`，特别是全屏 slider 时。插件有多种使用方式，因此没有加入全局的 style sheet )。 
- 同一页面中可以存在多个不同的 slider 实例，也可叠加存在（即一个实例中包含另一个或多个）。分别实例化即可。详见 [examples](https://github.com/mc-zone/Zepto.pageSlider/tree/master/examples/) 。

##更多例子

[examples](https://github.com/mc-zone/Zepto.pageSlider/tree/master/examples/)


##兼容性

( 真机测试机型有限。欢迎提交 issue )
- Android 2.3+
- iOS 6+

## 欢迎PR !

##License

MIT
