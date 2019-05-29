// 下拉菜单的宽度
$(".navul").width($("body").width());
// 第二个轮播图页面的宽度
$(".lb").width($("body").width()*2);

window.onresize=function(){
    $(".navul").width($("body").width());
    $(".lb").width($("body").width()*2);
    $(".lb").animate({'left':0},500);//返回第一个轮播图页面
    //重置点击按钮
    $("#btn i").css({"background":"url("+"images/index_right_jiantou.png"+")","background-size":"100%"});
lock=true;
}

var lock = true;
$("#btn i").on("click",function(){
    if(lock){
        $(".lb").stop().animate({'left':-$(".lunbo").width()},500);
        $(this).css({"background":"url("+"images/index_left_jiantou.png"+")","background-size":"100%"});
        lock=false;
    }else{
        $(".lb").stop().animate({'left':0},500);
        $(this).css({"background":"url("+"images/index_right_jiantou.png"+")","background-size":"100%"});
        lock=true;
    }   
});


var lock = true;
$(".anniu a").click(function(){
    if(lock){
        $(".nav").css("display","block").animate({"width":"100%"},1000);
        $(this).html("X").css("color","#fff");
        lock=false;
    }else{
        $(".nav").animate({"width":"0"},1000);
        $(this).html("三").css("color","#fff");
        lock=true;
    }
})

$("#bofang").on("click",function(){
    console.log($("#videosrc").play)
    $("#video").show();
})

$("#video span").on("click",function(){
    $("#video").hide();
});

$(".dzhucebottom a").eq(0).on("click",function(){
    $(".dzhuce").eq(0).hide();
    $(".dzhuce").eq(1).show();
    console.log(1)
})

$(".dzhucebottom a").eq(1).on("click",function(){
    $(".dzhuce").eq(1).hide();
    $(".dzhuce").eq(0).show();
    console.log(2)

})