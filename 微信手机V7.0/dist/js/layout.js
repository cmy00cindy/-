(function ($) {
    $.fn.dialog = function (opt) {

        var defaults = {
            dir: 'center'
        }

        $.extend(defaults, opt);

        this.each(function () {
          
            var thisDialog = $(this);

            $(thisDialog).show().addClass('animate-tip-down');

            // 【确定】
            $(thisDialog).find('.btn-submit').on('click', function () {
                closeDialog(thisDialog);
            })

            // 【取消】
            $(thisDialog).find('.btn-cancel').on('click', function () {
                closeDialog(thisDialog);
            })

            // 【关闭】
            $(thisDialog).find('.close').on('click', function () {
                closeDialog(thisDialog);
            })

            // 点击空白处
            $(document).on('click', function () {
                closeDialog(thisDialog);
            })

            $('body').on('click', '.dialog-layer,.reminder', function (e) {
                e.stopPropagation();
            })

            // 评价
            if ($(thisDialog).find('.reminder').length > 0) {
                $(thisDialog).find('.reminder>ul>li').on('click', function () {
                    $(thisDialog).find('.reminder>ul>li>span').removeClass('text-blue');
                    $(this).find('span').addClass('text-blue');
                })
            }

            $('body .mask-layout').remove();

            var layerHtml = '<div class="mask-layout"></div>';
            $('body').append(layerHtml);

        })
    }
})(jQuery);


// 关闭弹层
function closeDialog(thisDialog) {
    $(thisDialog).hide();
    $('.mask-layout').remove();
}

