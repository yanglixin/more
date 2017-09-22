/**
 * Created by Lenovo on 2017/9/6.
 */
// $(function () {
//     $('nav>.xialak>li[i]').mousemove(function () {
//         $('.xialak[i]').css({display:block})
//     })
// })
$(function () {
    let num=0;
    let t=setInterval(fn,3000);
    //鼠标移入效果
    $('.banner').hover(function () {
        clearInterval(t)
    })
    $('.banner').hover(function(){},function () {
        t=setInterval(fn,3000)
})
   //轮播
    function fn() {
        num++;
        if(num==$('.imgBox>li').length){
            num=0;
        };
        $('.btn>li').css({background:"rgba(0,0,0,0.5)"})
        $($('.btn>li')[num]).css({background:"rgba(205,205,205,0.5)"})
        $('.imgBox>li').css({display:'none'});
        $($(".imgBox>li")[num]).css({display:'block'});
    }
    function fn1() {
        num--;
        if(num==-1){
            num=$('.imgBox>li').length-1
        }
        $('.btn>li').css({background:"rgba(0,0,0,0.5)"})
        $($('.btn>li')[num]).css({background:"rgba(205,205,205,0.5)"})
        $('.imgBox>li').css({display:'none'});
        $($(".imgBox>li")[num]).css({display:'block'});
    }

    //左右点击
    $('.icon-xiaoyuhao').click(function () {
        fn()
    })
    $('.icon-dayuhao').click(function () {
        fn1()
    })
    //点击
    $('.btn>li').click(function () {
        num=$(this).index('.btn>li')
        $('.btn>li').css({background:"rgba(0,0,0,0.5)"})
        $($('.btn>li')[num]).css({background:"rgba(205,205,205,0.5)"})
        $('.imgBox>li').css({display:'none'});
        $($(".imgBox>li")[num]).css({display:'block'});
    })
//banner上面的效果
    for(let i=0;i<7;i++){
        $($('nav>ul>li')[i]).mouseenter(function () {
            $($('.xialak')[i]).css({display:'block'})
        })
        $($('nav>ul>li')[i]).mouseleave(function () {
            $($('.xialak')[i]).css({display:'none'})
        })
    }
    //aside的效果
    for(let i=0;i<10;i++){
        $($('aside>ul>li')[i]).mouseenter(function () {
            $($('.item')[i]).css({display:'block'})
        })
        $($('aside>ul>li')[i]).mouseleave(function () {
            $($('.item')[i]).css({display:'none'})
        })
    }
    //明星单品
    let now=0;
    let flag=true;
    let t1=setInterval(move,3000)
    function move() {
        if(flag){
            now++
            if(now==4){
                flag=false;
            }
        }
        if(flag==false){
            now--;
            if(now==-1){
                flag=true;
                now=0;
            }
        }

        $('.danpin-bottom').css({marginLeft:'-1226'*now})
    }
    $('.right').click(function () {
        now--;
        if(now<0){
            now=0
        }

        $('.danpin-bottom').css({marginLeft:'-1226'*now})
    })

    $('.left').click(function () {
        now++;
        if(now>3){
            now=3;
        }
        $('.danpin-bottom').css({marginLeft:'-1226'*now})
    })
    $('.left').hover(function () {
        clearInterval(t1)
    })
    $('.left').hover(function () {},function () {
        t1=setInterval(move,3000)
    })
    $('.right').hover(function () {
        clearInterval(t1)
    })
    $('.right').hover(function () {},function () {
        t1=setInterval(move,3000)
    })
    $('.danpin-bottom').hover(function () {
        clearInterval(t1)
    })
    $('.danpin-bottom').hover(function () {},function () {
        t1=setInterval(move,3000)
    })

    //搭配
    for(let i=0;i<$('.dapei-top-2>li').length;i++){
       $('.dapei-top-2>li').eq(i).hover(function () {
            $('.dapei-bottom2').css({display:'none'})
            $('.dapei-bottom2').eq(i).css({display:'block'})
        })
    }
    //配件
    for(let i=0;i<$('.peijian-top-2>li').length;i++){
        $('.peijian-top-2>li').eq(i).hover(function () {
            $('.peijian-bottom2').css({display:'none'})
            $('.peijian-bottom2').eq(i).css({display:'block'})
        })
    }
    //周边
    for(let i=0;i<$('.zhoubian-top-2>li').length;i++){
        $('.zhoubian-top-2>li').eq(i).hover(function () {
            $('.zhoubian-bottom2').css({display:'none'})
            $('.zhoubian-bottom2').eq(i).css({display:'block'})
        })
    }
    //为你推荐
    let fleg=true;
    let no=0
    let t2=setInterval(time,3000)
    function time() {
        if(fleg){
            no++;
            if(no==4){
                fleg=false;
            }
        }
        if(fleg==false){
            no--;
            if(no==-1){
                fleg=true;
                no=0;
            }
        }
        $('.tuij-bottom').css({marginLeft:'-1226'*no})
    }
    $('.tuijright').click(function () {
        no--;
        if(no<0){
            no=0
        }
        $('.tuij-bottom').css({marginLeft:'-1226'*no})
    })

    $('.tuijleft').click(function () {
        no++;
        if(no>3){
            no=3;
        }
        $('.tuij-bottom').css({marginLeft:'-1226'*no})
    })
    $('.tuijleft').hover(function () {
        clearInterval(t2)
    })
    $('.tuijleft').hover(function () {},function () {
        t2=setInterval(time,3000)
    })
    $('.tuijright').hover(function () {
        clearInterval(t2)
    })
    $('.tuijright').hover(function () {},function () {
        t2=setInterval(time,3000)
    })
    $('.tuij-bottom').hover(function () {
        clearInterval(t2)
    })
    $('.tuij-bottom').hover(function () {},function () {
        t2=setInterval(time,3000)
    })

})
