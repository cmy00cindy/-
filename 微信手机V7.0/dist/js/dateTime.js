$(function () {
    getNowFormatDate();
    setInterval("getNowFormatDate()", 36000);
})

function getNowFormatDate() {
    var date = new Date();
    var day;
    var seperator = "：";
    var seperator2 = "-";
    var seperator3 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var second = date.getSeconds();
    var month2 = month;

    var hour = date.getHours();

    var strDate = date.getDate();
    var myDay = date.getDay();

    var getMinutes = date.getMinutes();

    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }

    if (month2 >= 0 && month2 <= 9) {
        month2 = "0" + month2;
    }

    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (getMinutes >= 0 && getMinutes <= 9) {
        getMinutes = "0" + getMinutes;
    }
    switch (myDay) {
        case 0: day = "周日"; break;
        case 1: day = "周一"; break;
        case 2: day = "周二"; break;
        case 3: day = "周三"; break;
        case 4: day = "周四"; break;
        case 5: day = "周五"; break;
        case 6: day = "周六"; break;
        default: day = "系统错误！"
    }
 
    var time = hour + seperator + getMinutes;


    // 日期格式：2017-07-10 09:20:00
    var checkInTime = year + seperator2 + month2 + seperator2 + strDate + " " + date.getHours() + seperator3 + getMinutes + seperator3+second;

    $('body').find('#check-in-time').val(checkInTime);

    
    var date = month + '月' + strDate + '日';

    var day = day;

    $('body').find('#get-date-time .time').text(time);
    $('body').find('#get-date-time .date-number').text(date);

    $('body').find('#get-date-time .day').text(day);
}

