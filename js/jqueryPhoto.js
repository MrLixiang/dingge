$(function () {
    clonePic(6);
    var picBox = $("#picBox");
    var picBoxUl = picBox.find(".picBoxUl");
    var picBoxLi = picBoxUl.find("li");

    var listBox = $("#listBox");
    var listBoxUl = listBox.find(".listBoxUl");
    var listBoxLi = listBoxUl.find("li");
    var w = $(listBoxLi[1]).outerWidth(true);
    var len = listBoxLi.length;

    var prev = $("#prev");
    var next = $("#next");
    var _index = 0;
    var interval = true;
    var isHover = true;

    $('.mod18').mouseover(function () {
        stopRun();
    }).mouseout(function () {
        autoPlay()
    });

    autoPlay();

    prev.click(function () {
        if (_index == 0) {
            _index = len - 6;
        }
        _index--;
        picPosition();
        myStyle(_index);
        classTab(_index);
    });

    next.click(function () {
        if (_index == len - 6) {
            _index = 0;
        }
        _index++;
        picPosition();
        myStyle(_index);
        classTab(_index);
    });

    function myStyle(index) {
        picBoxLi.css('display', 'none');
        picBoxLi.eq(index).css('display', 'block');
    }

    function clonePic(num) {
        for (var i = 0; i < num; i++) {
            $("#listBox .listBoxUl li").eq(i).clone().appendTo($("#listBox .listBoxUl"));
            $("#picBox .picBoxUl li").eq(i).clone().appendTo($("#picBox .picBoxUl"));
        }
    }

    function picPosition() {
        listBoxUl.css('left', -w * _index + 'px');
    }

    function classTab(_index) {
        listBoxLi.eq(_index).find('span').addClass('on');
        listBoxLi.eq(_index).find('img').addClass('on');
        listBoxLi.eq(_index).siblings().find('span').removeClass('on');
        listBoxLi.eq(_index).siblings().find('img').removeClass('on');
    }
    
    function stopRun() {
        if (interval) {
            window.clearInterval(interval);
        }
    }
    
    function autoPlay() {
        stopRun();
        interval = setInterval(function () {
            if (_index == len - 6) {
                _index = 0;
            }
            _index++;
            picPosition();
            myStyle(_index);
            classTab(_index);
        },1500)
    }
});