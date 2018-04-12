// $(function () {
//     var main = $('.main');
//     var menu = main.find('.menu');
//     var menuLi = menu.find('li');
//     var menuList =main.find('.menu-list');
//     var content = menuList.find('.content');
//     menuLi.hover(function () {
//         var _vm = $(this);
//         var index = _vm.index();
//         _vm.addClass('on').siblings().removeClass('on');
//         content.eq(index).addClass('on').siblings().removeClass('on');
//     });
// });
;(function (win, $) {
    var tab = function (obj) {
        var active = obj.active;
        var on = obj.on;
        var menu = $(obj.menuLi);
        var content = $(obj.content);

        menu.hover(function () {
            var _vm = $(this);
            var index = _vm.index();
            _vm.addClass(active).siblings().removeClass(active);
            content.eq(index).addClass(on).siblings().removeClass(on);
        });
    };
    tab.prototype = {
        myHover: function() {

        }
    };
    tab.init = function (obj) {
        new this(obj);
    };
    win['myTab'] = tab;
})(window, jQuery);