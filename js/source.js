
$("button").click(function(){
    $(".fa-times").toggle();
    $(".fa-bars").toggle();
    $("ul").animate({
        width: "toggle"
      });
});