$(document).ready(function () {
    naviBarResponse();
    $("#switch-view").click(function(){
        $(this).find("button").toggleClass("active");
        $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
      });
});

/**
 * 响应导航栏
 */
var naviBarResponse = function () {
    $("nav ul li a").click(function(){
            $(this).addClass('active');
            var siblingsLi = $(this).parent('li').siblings();
            siblingsLi.each(function(){
                $($(this).children("a")[0]).removeClass('active');
            });
        });
};
