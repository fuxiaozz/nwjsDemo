/**
 * Created by fuxiao on 2016/11/30.
 */

let api = (function (param) {
    if (!param) param = {};

    let host = "http://www.jingweibus.cn";
    let loginURL = "/a/login";
    let userInfoURL = "/a/other/appUser/userinfo";
    let ticketList = "/a/tam/ticket/listByMobile.do";
    let xiLineSearch = "/a/lines/shift/listByMobile.do";
    let gaoLineSearch = "/a/lines/shift/listByMobile.do";
    let buyOrder = "/a/order/BusOrder/order.do";
    let payOrder = "/a/order/BusOrder/updateOrderByMobile.do";

    function serailize(param) {
        var array = [];
        for(let k in param) {
            array.push(encodeURIComponent(k) + "=" + encodeURIComponent(param[k]));
        }
        return array.join("&");
    }

    let ajax = function(url, type, param, responseFun) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                responseFun(xhr);
            }
        }
        if (type.toUpperCase() == "GET") {
            xhr.open("GET", url + "?" + serailize(param), true);
            xhr.send(null);
        } else if (type.toUpperCase() == "POST") {
            xhr.open("POST", url, true);
            //设置表单提交时的内容类型
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("Accept", "*/*");
            xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
            xhr.setRequestHeader("Accept-Language", "zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4");
            xhr.send(serailize(param));
        }
    };

    return {
        login: host + loginURL,
        loginOut: 'http://www.jingweibus.com/',
        userInfo: host + userInfoURL,
        xLine: host + xiLineSearch,
        gLine: host + gaoLineSearch,
        order: host + buyOrder,
        pay: host + payOrder
    }


})('');