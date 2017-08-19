/**
 * @author: shangyidong@meituan.com
 * Date: 2017-03-22
 * Time: 上午11:37
 */
var host = "";

$(function(){
    host = window.location.host;
    console.log(host);
    switch (host) {
        case "www.bing.com":
        case "cn.bing.com":
            //jQuery(".b_ad").css("display", "none");
            jQuery(".b_ad").remove();
            break;
        case "www.baidu.com":
            fuckBaidu();
            //翻页时通过ajax加载数据，需要监听页面变化。暂未找到更好的方式。
            var title = $('title');
            title.bind('DOMNodeInserted', function(e) {
                setTimeout(function(){
                    fuckBaidu();
                },50);
            });
            $("#su").click(function () {
                setTimeout(function(){
                    fuckBaidu();
                },50);
            });
           break;
        default:
            console.log("Adblocker暂未匹配当前网站，如有需求请前往https://github.com/umgsai/adblocker反馈。");
            break;
    }
})

function fuckBaidu() {

    for(var i = 0; i < $("div").length; i++) {
        //display:block !important;visibility:visible !important
        if ($($("div")[i]).attr("style") == "display:block !important;visibility:visible !important") {
            //$($("div")[i]).css("display", "none");
            $($("div")[i]).remove();
            console.log("Fuck baidu " + i + "次");
        }
    }

    var adObjects = new Array();
    for (var i = 0; i < $("span").length; i++) {
        if ($("span")[i].innerHTML === "广告") {
            //$("span.m").eq(i).parent().parent().remove();
            adObjects.push($("span").eq(i).parent().parent());
        }
    }
    for (var i = 0; i < adObjects.length; i++) {
        adObjects[i].remove();
        console.log("Fuck baidu " + i + "次");
    }
}
