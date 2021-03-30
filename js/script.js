$(document).ready(function () {
    
    $('.tab-btn-box li').on('click', function () {
        var data = $(this).attr("data-rel");
        var $content = $('.' + data);
        $(this).addClass('on').siblings().removeClass('on');
        $content.show().siblings().hide();
    });


    var $menuBtmLine = $('nav > .menu-btm-line');

    $('nav > ul > li').mouseenter(function () {
        var $this = $(this);
        var left = $this.position().left;
        var width = $this.width();
        $menuBtmLine.css('left', left);
        $menuBtmLine.css('width', width);
    });

    $('nav > ul > li').mouseleave(function () {
        $menuBtmLine.css('left', 0);
        $menuBtmLine.css('width', 0);
    });


    $('nav > ul > li').eq(0).click();


    $('.section05 .slider-wrap').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        fade: false,
        vertical: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        prevArrow: ".section05 .prev-arrow",
        nextArrow: ".section05 .next-arrow",
    });

    $('.section06 .slider-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        prevArrow: ".section06 .box01 > .prev-arrow",
        nextArrow: ".section06 .box01 > .next-arrow",
    });

});
