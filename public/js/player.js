/**
 * Created by hongqing on 16/6/6.
 */


$(document).ready(function(){
    $("#iconfont-music").click(function(){
        if($("#iconfont-music").attr("src") == "/public/img/iconfont-musicoff.png"){
            $("#iconfont-music").fadeOut(function(){
                $("#iconfont-music").attr("src","/public/img/iconfont-music.png").fadeIn();
            });
            $("#audioPlay")[0].play();
        }else{
            $("#iconfont-music").fadeOut(function(){
                $("#iconfont-music").attr("src","/public/img/iconfont-musicoff.png").fadeIn();
            });
            $("#audioPlay")[0].pause();
        }


    })
});
