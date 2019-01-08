// 滚动到窗口上边线大于800时让服务介绍显示
window.onscroll = function(){
    var scrollTop = document.body.scrollTop;
    if($(window).width()<=768){
            animate()
    }else if($(window).width()>768){
        if($(window).scrollTop()>800){
        animate()
    }
    }
    if($(window).scrollTop()>2400){
        animate2()
    }
    if($(window).scrollTop()>2500){
        animate3()
    }
    if($(window).scrollTop()>3750){
        animate4()
    }
};
function animate() {
    $(".service-item.scrollimation.scale-in").addClass("in");
}

function animate2() {
    $(".scrollimation.fade-right.logo").addClass("in");
    $(".scrollimation.fade-left.d1").addClass("in");
}

function animate3() {
    $(".scrollimation.fade-right.d2").addClass("in");
    $(".scrollimation.fade-left.d3").addClass("in");
}

function animate4() {
    $(".contact-btn.scale-in").addClass("in");
}

// 点击链接滚动到相应位置
$(document).ready(function (){
    var services=$("#services").offset().top;
    var vehicle=$("#vehicle").offset().top;
    var team=$("#team").offset().top;
    var about=$("#about").offset().top;
    var contact=$("#contact").offset().top;

    $(".scrollto.s1").click(function (){
        $('html, body').animate({
            scrollTop: services
        }, 1000);
    });
    $(".scrollto.s2").click(function (){
        $('html, body').animate({
            scrollTop: vehicle
        }, 1000);
    });
    $(".scrollto.s3").click(function (){
        $('html, body').animate({
            scrollTop: team
        }, 1000);
    });
    $(".scrollto.s4").click(function (){
        $('html, body').animate({
            scrollTop: about
        }, 1000);
    });
    $(".scrollto.s5, .scrollto.s6").click(function (){
        $('html, body').animate({
            scrollTop: contact
        }, 1000);
    });
});