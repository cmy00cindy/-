$(function () {
    // 修改密码-确认提交
    $('body').on('click', '#btn-password-confirm', function (e) {
        var passwordInput = $('#input-password').val();

        var regRule = /^((?=.*[\u0000-\u00FF])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[\u0000-\u00FF])(?=.*[A-Z])(?=.*\d))[\u0000-\u00FFa-zA-Z\d]{8,}$/;

        if (!regRule.test(passwordInput)) {
            $('.validate-tip').text('密码规则不正确');
            animationTip();
            return false;
        }

        e.stopPropagation();
        $('#change-password-sucess').dialog({});

    })

    // 修改密码-点击输入框
    $('body').find('.app-change-password input[type="password"]').on('click', function () {
        $(this).parents('.input-box').addClass('active').siblings().removeClass('active');
    })

    // 签到按钮
    $('body').find('#btn-check-in').on('click', function () {
        checkInValidate($(this));
    })
})

var setTip = "";
// 验证
function checkInValidate(_this) {
    var nameValue = $('#name-input').val();
    var phoneValue = $('#phone-input').val();

    if (nameValue == "" || nameValue == null) {
        $('.validate-tip').text('请输入姓名');
        animationTip();
        return false;
    }
    if (phoneValue == "" || phoneValue == null) {
        $('.validate-tip').text('请输入手机号码');
        animationTip();
        return false;
    } else if (!phoneValue.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) {
        $('.validate-tip').text('请输入正确的手机号码');
        animationTip();
        return false;
    }
    _this.parents('.app-metting-info').hide().addClass('animate-slide-down');
    $('body').find('.app-metting-sucess-info').show().find('.metting-info-box').removeClass('none').addClass('animate-slide-up');
    $('body').find('.app-metting-sucess-info .input-box .name').text(nameValue);
    $('body').find('.app-metting-sucess-info .input-box .phone-number').text(phoneValue);
    $('body').find('.app-metting-sucess-info .input-box .time').text($('body').find('#check-in-time').val());
}
// 验证动画
function animationTip() {
    $('.validate-tip').removeClass('animate-tip-up').addClass('animate-tip-down');
    setTip = setInterval("animationTipUp()", 1500);
}
function animationTipUp() {
    $('.validate-tip').addClass('animate-tip-up');
    window.clearInterval(setTip);
}