/*
* @Author: Lenovo
* @Date:   2017-08-13 09:41:49
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-20 12:06:02
*/

'use strict';

// window.onload=function(){
// 	let item = document.getElementsByClassName("item");
// 	let liebiao=document.getElementsByClassName('banner_nav')[0];
// 	let li=liebiao.getElementsByTagName('li');
// 	for(let i=0;i<li.length;i++){
// 		li[i].onmouseenter=function(){
// 			item[0].style.display="block";
// 		}
// 		li[i].onmouseleave=function(){
// 			item[0].style.display="none";
// 		}
// 	}


// 	let btn=document.getElementsByClassName("btn")[0];
// 	let lis=btn.getElementsByTagName('li');
// 	let banner=document.getElementsByClassName("banner2")[0];
// 	let imgs=banner.getElementsByTagName('li');
// 	let num=0;
// 	let t=setInterval(fn, 2000);
// 	banner.onmouseenter=function(){
//             clearInterval(t);
//          }
//     banner.onmouseleave=function(){
//             t=setInterval(fn, 2000);  
//          }
// 	function fn(){
// 		num++;
// 		if(num==lis.length){
// 			num=0;
// 		}
// 		for(let i=0;i<lis.length;i++){
// 			lis[i].style.background='#eee';
// 			imgs[i].style.display='none';
// 		}
// 			lis[num].style.background='#fff';
// 			imgs[num].style.display='block';
// 	}




// }



// window.onload=function(){
	
	// let btn=document.getElementsByClassName("btn")[0];
	// let lis=btn.getElementsByTagName('li');
	// let banner=document.getElementsByClassName("banner2")[0];
	// let imgs=banner.getElementsByTagName('li');
	// let num=0;
	// let t=setInterval(fn, 2000);
	// banner.onmouseenter=function(){
     //        clearInterval(t);
     //     }
    // banner.onmouseleave=function(){
     //        t=setInterval(fn, 2000);
     //     }
	// function fn(){
	// 	num++;
	// 	if(num==lis.length){
	// 		num=0;
	// 	}
	// 	for(let i=0;i<lis.length;i++){
	// 		lis[i].style.background='#eee';
	// 		imgs[i].style.display='none';
	// 	}
	// 		lis[num].style.background='#fff';
	// 		imgs[num].style.display='block';
	// }


// }
 window.onload=function(){
     let item = document.getElementsByClassName("item");
     let liebiao=document.getElementsByClassName('banner_nav')[0];
     let li=liebiao.getElementsByTagName('li');
     for(let i=0;i<li.length;i++){
         li[i].onmouseenter=function(){
             item[0].style.display="block";
         }
         li[i].onmouseleave=function(){
             item[0].style.display="none";
         }
     }

     let btn=document.getElementsByClassName("btn")[0];
     let lis=btn.getElementsByTagName('li');
     let banner=document.getElementsByClassName("banner2")[0];
     let imgs=banner.getElementsByTagName('li');
     let num=0;
     let t=setInterval(fn, 2000);
     banner.onmouseenter=function(){
         clearInterval(t);
     }
     banner.onmouseleave=function(){
         t=setInterval(fn, 2000);
     }
     function fn(){
         num++;
         if(num==lis.length){
             num=0;
         }
         for(let i=0;i<lis.length;i++){
             lis[i].style.background='#eee';
             imgs[i].style.display='none';
         }
         lis[num].style.background='#fff';
         imgs[num].style.display='block';
     }
 	let laxia=document.querySelector('.laxia')
 	let flag=true;
    let ch=window.innerHeight;

 	window.onscroll=function(){
 	let st=document.documentElement.body.scrollTop;
console.log(st)
 	       if(st>500){
            if(flag){
                flag=false;
                animate(laxia,{top:0});
            }
        }else{
            if (!flag){
                flag=true;
                animate(laxia,{top:-65})
            }
        }
 	}
}