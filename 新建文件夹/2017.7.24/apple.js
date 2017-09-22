/**
 * Created by Lenovo on 2017/8/26.
 */
window.onload=function () {
    let banner=document.querySelector('.banner');
    let div=document.querySelector('.banner>div');
    let imgs=div.querySelectorAll('.banner>div>img');
    let lis=document.querySelectorAll('.tiao>li');
    let xiaoyuhao=document.querySelector('.icon-xiaoyuhao');
    let dayuhao=document.querySelector('.icon-dayuhao');
    let flag=true;
    let now=0;
    //自动轮播
    let t=setInterval(fn,3000);
    banner.onmouseenter=function () {
        clearInterval(t);
    };
    banner.onmouseleave=function () {
        t=setInterval(fn,3000);
    };
    function fn() {
        now++;
        if (now==imgs.length){
            now=0;
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].style.display='none';
        }
        imgs[now].style.display='block';
    }
    //左右

    xiaoyuhao.onclick=fn;
    dayuhao.onclick=fn1;
    function fn1() {
        now--;
        if (now==-1){
            now=imgs.length-1;
        }
        for(let i=imgs.length-1;i>=0;i--){
            imgs[i].style.display='none';
        }
        imgs[now].style.display='block';
    }
    for(let i=0;i<lis.length;i++){
        lis.onclick=function () {
            imgs[i].style.display='none'
            imgs[now].style.display='block'
            now=i;
    }
}
}
