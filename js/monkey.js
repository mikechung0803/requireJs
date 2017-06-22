/*
    define的参数为匿名函数，该匿名函数返回一个对象
*/
define(['jquery'],function($){
    var init = function(){
        document.write('<span id="monkey">this is monkey.js</span>');
        $("#monkey").css({color:'red'});
    };
    return {
        init: init
    };
});