$(function () {

    $('#banner .banner-list li').eq(0).clone().appendTo($('.banner .banner-list'));
    var banner = $('#banner');
    var bannerList = banner.find('.banner-list');
    var bannerListLi = bannerList.find('li');
    var _imageSrc = bannerListLi.find('img').attr('src');
    var _image = new Image();
    var pages = banner.find('.pages span');
    var prev = banner.find('.prev');
    var next = banner.find('.next');
    _image.src = _imageSrc;

    var len = bannerListLi.length;
    var _index = 0;
    var h = 0;
    var w = 0;
    var init = null;
    var isClick = true;

    _image.onload = function () {
        bannerSize();
        autoPlay();
        pagesClick();
        bannerHover();
    };

    function bannerSize() {
        h = Math.floor(banner.width() / _image.width * _image.height);
        w = banner.width();
        banner.css('height', h + 'px');
        bannerList.css('width', w * len + 'px');
        bannerListLi.css('width', w + 'px');
    }

    function pagesClick() {
        pages.click(function () {
            if (isClick) {
                isClick = false;
                _index = $(this).index();
                run_run();
            }
        });
    }

    function run_run() {
        bannerList.animate({left: -_index * w + 'px'}, 1000, function () {
            if (_index == 0 || _index == len - 1) {
                pages.eq(0).addClass('on').siblings().removeClass('on');
            }
            pages.eq(_index).addClass('on').siblings().removeClass('on');
            isClick = true;
        });
    }

    function bannerHover() {
        banner.hover(function () {
            if (init) {
                window.clearInterval(init);
            }

        }, function () {
            init = setInterval(function () {
                run();
            }, 1500);
        })
    }

    function run() {
        if (_index == len - 1) {
            _index = 0;
            bannerList.css('left', '0px');
        }
        _index++;
        run_run();
    }

    function autoPlay() {
        interval();
    }

    function interval() {
        if (init) {
            window.clearInterval(init);
        }
        init = setInterval(function () {
            run();
        }, 1500);
    }
});


