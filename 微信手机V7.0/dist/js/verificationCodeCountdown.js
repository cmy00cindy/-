var validateCodeClock = '';
var validateCodeNumber = 59;
var validateCodeBtn;
function sendCode(thisBtn) {
    window.clearInterval(validateCodeClock);
    validateCodeBtn = $(thisBtn);
    validateCodeBtn.disabled = true; //将按钮置为不可点击
    validateCodeBtn.text(validateCodeNumber + '秒后获取');
    validateCodeClock = setInterval(doLoop, 1000); //一秒执行一次
}
function doLoop() {
    validateCodeNumber--;
    if (validateCodeNumber > 0) {
        validateCodeBtn.text(validateCodeNumber + '秒后获取');
    } else {
        clearInterval(validateCodeClock); //清除js定时器
        validateCodeBtn.disabled = false;
        validateCodeBtn.text('获取验证码');
        validateCodeNumber = 59; //重置时间
    }
    return false;
}