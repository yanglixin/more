/**
 * Created by Lenovo on 2017/9/12.
 */
$(function () {
    let now=0;
    let t=setInterval(fn,3000)
    $('.banner1').hover(function () {
        clearInterval(t)
    });
    $('.banner1').hover(function () {},function () {
        t=setInterval(fn,3000)
    })
    //自动轮播
    function fn() {
        now++;
        if(now==$('.beijing>li').length){
            now=0;
        }
    $('.dian>li').css({background:"#cdcdcd"});
    $($('.dian>li')[now]).css({background:'#fff'})
    $('.beijing>li').css({display:'none'});
    $($('.beijing>li')[now]).css({display:"block"})
    }
    //左右点
    $('.icon-xiaoyuhao').click(function () {
        fn();
    })
    $('.icon-dayuhao').click(function () {
        fn1();
    })
    function fn1() {
        now--;
        if(now==-1){
            now=$('.beijing>li').length-1
        }
        $('.dian>li').css({background:"#cdcdcd"});
        $($('.dian>li')[now]).css({background:'#fff'})
        $('.beijing>li').css({display:'none'});
        $($('.beijing>li')[now]).css({display:"block"})
    }
    //点击
    // for(let i=0;i<$('.dian>li').length;i++){
    //
    // }
    $('.dian>li').click(function () {
        num=$(this).index('.dian>li')
        $('.dian>li').css({background:"#cdcdcd"});
        $($('.dian>li')[num]).css({background:'#fff'})
        $('.beijing>li').css({display:'none'});
        $($(".beijing>li")[num]).css({display:'block'});
    })
    let ch=window.innerHeight;
    let bRight=document.querySelector('.bRight');

    window.onscroll=function () {
        let heights=document.documentElement.scrollTop;
        if(heights+ch>=900){
            bRight.style.transform='translateX(0)';
            bRight.style.transition='all 2s'
        }
    }

})