/**
 * Created by Lenovo on 2017/8/28.
 */
window.onload=function () {
    let banner=document.querySelector('.banner');
    let beijing=banner.querySelector('.banner .beijing');
    let lis=beijing.querySelectorAll('.beijing>li');
    let btns=document.querySelectorAll('.dian>li');
    let back=document.querySelector('.lr>.icon-xiaoyuhao');
    let forward=document.querySelector('.lr>.icon-dayuhao');
    let banner1=document.querySelector('.banner1');
    let bRight=document.querySelector('.bRight');
    let widths=lis[0].offsetWidth;
    let now=0;
    let next=0;
    let flag=true;
    let t=setInterval(fn,1000);
    let ch=window.innerHeight
    function fn() {
        next++;
        if(next==lis.length){
            next=0;
        }
        lis[next].style.left=`${widths}px`;
        animate(lis[now],{left:-widths});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        now=next;
    }
    banner1.onmousemove=function () {
        clearInterval(t)
    }
    banner1.onmouseleave=function () {
        t=setInterval(fn,3000);
    };
    for(let i=0;i<lis.length;i++){
        btns[i].onclick=function () {
            if(i==now){
                return;
            };
            if(i<now){
                lis[i].style.left = `${-widths}px`;
                animate(lis[now], {left: widths});
                animate(lis[i], {left: 0});
            }
            if(i>now){
                lis[i].style.left = `${widths}px`;
                animate(lis[now], {left: -widths});
                animate(lis[i], {left: 0});
            }
            now=i;
        }
    }

    back.onclick=function () {
        if(flag){
            flag=false;
            fn();
        }
    };
    forward.onclick=function () {
        if(flag){
            flag=false;
            fn1();
        }
    }
    function fn1() {
        next--;
        if(next==-1){
            next=lis.length-1;
        }
        lis[next].style.left=`${-widths}px`;
        animate(lis[now],{left:widths});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        now=next;
    }
    window.onscroll=function () {
        let heights=document.documentElement.scrollTop;
        if(heights+ch>=900){
        bRight.style.transform='translateX(0)';
        bRight.style.transition='all 2s'
        }
    }
}
