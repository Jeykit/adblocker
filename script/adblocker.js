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
            var title = $('title');
            title.bind('DOMNodeInserted', function(e) {
                setTimeout(function(){
                    fuckBaidu();
                },50);
            });
           break;
        default:
            console.log("该网站暂未匹配。。。");
            break;
    }
})

function fuckBaidu() {
    for(var i = 0; i < $("div").length; i++) {
        if ($($("div")[i]).attr("style") == "display:block !important;visibility:visible !important") {
            //$($("div")[i]).css("display", "none");
            $($("div")[i]).remove();
            console.log("Fuck baidu " + i + "次");
        }
    }
}