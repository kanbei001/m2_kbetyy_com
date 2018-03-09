var paths = document.URL;
document.writeln("<div class=\"art_banner\" id=\"art_banner\"><div class=\"bd\"><ul>");
if (paths.indexOf("/axz/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("2");
    document.writeln("<li><a href=/yyjj/news/2121.html><img src=/images/banner_xgj213.jpg></a></li>");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_1227_213.jpg></a></li>");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_axz.jpg></a></li>");
} else if (paths.indexOf("/cdz/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_cdz.jpg></a></li>");

} else if (paths.indexOf("/dx/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/hy-banner213-sn.jpg></a></li>");
    dianhua("3");
    document.writeln("<li><a href=/kfgs/nt/1928.html><img src=/images/banner5sui_213.jpg></a></li>");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_dx.jpg></a></li>");

} else if (paths.indexOf("/ddz/") > 0 || paths.indexOf("/xxkn/") > 0 || paths.indexOf("/zylbjz/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner1106213.jpg></a></li>");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_ddz.jpg></a></li>");
} else if (paths.indexOf("/fych/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
    document.write("<li><a href=/kfgs/nt/1928.html><img src=/images/banner5sui_213.jpg></a></li>");
} else if (paths.indexOf("/fpz/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_1227_213.jpg></a></li>");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_fpz.jpg></a></li>");
} else if (paths.indexOf("/xzs/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_1227_213.jpg></a></li>");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_xzs.jpg></a></li>");
} else if (paths.indexOf("/zldx/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/hy-banner213-sn.jpg></a></li>");
    dianhua("3");
    document.writeln("<li><a href=/kfgs/nt/1928.html><img src=/images/banner5sui_213.jpg></a></li>");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_zldx.jpg></a></li>");

} else if (paths.indexOf("/ynz/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");

} else if (paths.indexOf("/yyza/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_yyza.jpg></a></li>");

} else if (paths.indexOf("/zylbjz/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");

} else if (paths.indexOf("/zbz/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    document.writeln("<li><a href=/yyjj/news/2274.html><img src=/images/sjbanner_zbz_hy250.jpg></a></li>");
    dianhua("1");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_zbz.jpg></a></li>");
} else if (paths.indexOf("/nxth/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/hy-banner213-sn.jpg></a></li>");
    dianhua("3");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/artbanner3_nt.jpg></a></li>");
} else if (paths.indexOf("/sjj/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/hy-banner213-sn.jpg></a></li>");
    dianhua("3");
} else if (paths.indexOf("/nfm/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_1227_213.jpg></a></li>");
} else if (paths.indexOf("/fyx/") > 0) {
    document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/huiyi-banner213.jpg></a></li>");
    dianhua("1");
} else { dianhua("1"); }
document.writeln("</ul></div><div class=\"hd\"><ul></ul></div></div>");
<script>
TouchSlide({
    slideCell: "#art_banner",
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "left",
    autoPage: true,
/*    autoPlay: true,*/
});
</script>
function dianhua(hao) {
    /*
    author:858834013@qq.com
    说明：电话64235120 84319120 86980500
     */
    if (hao == 1) { document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_yltx_64235120.jpg></a></li>"); } else if (hao == 2) { document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_yltx_84319120.jpg></a></li>"); } else if (hao == 3) { document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_yltx_86980500.jpg></a></li>"); } else { document.writeln("<li><a href=javascript:openZoosUrl()><img src=/images/banner_yltx_64235120.jpg></a></li>"); }

}