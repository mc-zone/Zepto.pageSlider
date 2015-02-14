;(function($){
    if( typeof $ == "undefined" ){
        throw new Error("Zepto not found!");
    }

    var FullPageScroll = function( $ctn, config ){
        this.$ctn = $ctn;
        this.$pages = $ctn.find( "." + config.pageClass );
        this.config = config;
    };

    FullPageScroll.prototype.init = function(){
        var pageLen = this.$pages.length,
            $parent = this.$ctn.offsetParent(),  //父级
            //ctnHeight = $parent.offset().height, //初始容器高
            ctnHeight = $(window).height(),
            $ctnInner = $("<div/>"); //创建一个inner层用来移动

        /*
        //$ctn位于body下或直接使用body时$parent为body
        if( ctnHeight == 0 && $parent[0].tagName == "BODY" ){
            ctnHeight = $( window ).height();
        }
        */
        this.$ctn.css({
            "position": "relative",
            "width":    "100%",
            "height":   ctnHeight + "px",
            "overflow": "hidden"
        });

        $ctnInner.addClass("full-page-scroll-inner");
        $ctnInner.css({
            "position": "absolute",
            "top":      0,
            "left":     0,
            "width":    "100%",
            "height":   pageLen  + "00%",
            "overflow": "hidden"
        });

        var pageHeight = 100 / pageLen + "%";
        this.$pages.wrapAll( $ctnInner ).each(function(){
            var $p = $(this);
            $p.css({
                "position": "relative",
                "display":  "block",
                "width":    "100%",
                "height":   pageHeight
            });
        });

        this.$ctnInner = $ctnInner;

        this.eventBind();
    };

    FullPageScroll.prototype.eventBind = function(){
        var that = this,
            curPage = 0,
            tStartY,
            tAmountY;

        this.$ctn.bind("touchstart",function(e){
            tStartY = e.touches[0].clientY;
        });
        this.$ctn.bind("touchmove",function(e){
            tAmountY = e.changedTouches[0].clientY - tStartY;
            console.log(tAmountY);

            that.innerMove( tAmountY );
        });
        this.$ctn.bind("touchend",function(e){
            tStartY = 0;
            tAmountY = 0;
        });

        //window.requestAnimationFrame( this.judgeMove );

    };

    FullPageScroll.prototype.innerMove = function( amount ){
        this.$ctnInner.css({
            "-webkit-transform":"translate3d(0," + amount + "px,0)",
                    "transform":"translate3d(0," + amount + "px,0)"
        });

    };

    var defaults = {
        pageClass:  "page",
        horizontal: false,
        autoSpeed:  5000,
        auto:       false,
        pageCss:    {}
    };

    $.fn.fullPageScroll = function( parameters ){
        var config = $.extend( defaults, parameters );

        return this.each(function( idx, el ){

            var fPScrl = new FullPageScroll( $( el ), config );

            fPScrl.init();

        });
    };

}( window.Zepto ));

