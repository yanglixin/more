/**
 * Created by Lenovo on 2017/9/9.
 */
$(function(){
    //自动轮播
    let num=0;
    let t=setInterval(fn,3000)
    function fn() {
        num++;
        if(num==$('.banner2>li').length){
            num=0;
        }
        $('.btn>li').css({background:"#999"})
        $('.banner2>li').css({display:'none'});
        $($('.banner2>li')[num]).css({display:'block'})
        $($('.btn>li')[num]).css({background:"#fff"})
    }
    //鼠标移入
    $('.banner').hover(function () {
        clearInterval(t)
    })
    $('.banner').hover(function(){},function () {
        t=setInterval(fn,3000)
    })
    //点击效果
    for(let i=0;i<$('.btn>li').length;i++){
        $($('.btn>li')[i]).click(function () {
            $('.banner2>li').css({display:'none'})
            $($('.banner2>li')[i]).css({display:'block'})
        })
    }
    for(let i=0;i<$('.btn>li').length;i++){
        $($('.btn>li')[i]).hover(function () {
            $($('.btn>li')[i]).css({background:"#fff"})
        })
    }
    for(let i=0;i<$('.btn>li').length;i++){
        $($('.btn>li')[i]).hover(function(){},function () {
            $($('.btn>li')[i]).css({background:"#999"})
        })
    }
    //鼠标移入后，显示
    for(let i=0;i<$('.banner_nav>li').length;i++){
        $($('.banner_nav>li')[i]).hover(function () {
            $($(".item")[i]).css({display:'block'})
        })
        $($('.banner_nav>li')[i]).hover(function(){},function () {
            $($(".item")[i]).css({display:'none'})
        })
    }

//固定栏的移出
    $('.fix>li:first-child').hover(function () {
        $('.dong>li:first-child>ul').animate({right:'15px',opacity:'1'},'slow')
        },function () {
        $('.dong>li:first-child>ul').animate({right:'80px',opacity:'0'},'slow')
    })
    $('.fix>li:nth-child(3)').hover(function () {
        $('.dong>li:nth-child(2)>ul').animate({right:'15px',opacity:'1'},'slow')
    },function () {
        $('.dong>li:nth-child(2)>ul').animate({right:'80px',opacity:'0'},'slow')
    })
    $('.fix>li:nth-child(4)').hover(function () {
        $('.dong>li:nth-child(3)>ul').animate({right:'15px',opacity:'1'},'slow')
    },function () {
        $('.dong>li:nth-child(3)>ul').animate({right:'80px',opacity:'0'},'slow')
    })
    $('.fix>li:nth-child(5)').hover(function () {
        $('.dong>li:nth-child(4)>ul').animate({right:'15px',opacity:'1'},'slow')
    },function () {
        $('.dong>li:nth-child(4)>ul').animate({right:'80px',opacity:'0'},'slow')
    })
    $('.fix>li:nth-child(6)').hover(function () {
        $('.dong>li:nth-child(5)>ul').animate({right:'15px',opacity:'1'},'slow')
    },function () {
        $('.dong>li:nth-child(5)>ul').animate({right:'80px',opacity:'0'},'slow')
    })
    $('.fix>li:nth-child(7)').hover(function () {
        $('.dong>li:nth-child(6)>ul').animate({right:'15px',opacity:'1'},'slow')
    },function () {
        $('.dong>li:nth-child(6)>ul').animate({right:'80px',opacity:'0'},'slow')
    })
    $('.fix>li:nth-child(8)').hover(function () {
        $('.dong>li:nth-child(7)>ul').animate({right:'15px',opacity:'1'},'slow')
    },function () {
        $('.dong>li:nth-child(7)>ul').animate({right:'80px',opacity:'0'},'slow')
    })
    $('.fix>li:nth-child(10)').hover(function () {
        $('.dong>li:nth-child(8)>ul').animate({right:'15px',opacity:'1'},'slow')
    },function () {
        $('.dong>li:nth-child(8)>ul').animate({right:'80px',opacity:'0'},'slow')
    })
//下拉出现搜索
console.log(window.innerWidth)
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        if(st>800){
            $('.laxia').css({top:'0',transition:'1s'})
            $('.floor').css({display:"block"})
        }else if(st<800){
            $('.laxia').css({top:'-65px',translation:'1s'})
            $('.floor').css({display:"none"})
        }

        if(window.innerHeight+st==$('.aa').offsetTop){

            $('.floor>.b').each(function (index,obj) {
                $(this).addClass="bgcolor1"
            })
        }
    }

    //

    let arr=[];
    $('.aa').each(function(index,obj){
        arr.push($(obj).offset().top)
    })
    $('.floor>.b>a').each(function (index,obj) {
        obj.onclick=function () {
            $("html,body").animate({"scrollTop":arr[index]});
        }
    })
})

