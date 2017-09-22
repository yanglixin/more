/*
* @Author: Lenovo
* @Date:   2017-08-10 22:01:03
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-16 08:44:47
*/

'use strict';
// window.onload=function(){
// 	let slide=document.getElementsByClassName('slide');
// 	let lis=slide[0].getElementsByClassName('lis');
// 	let items=document.getElementsByClassName('item');
// 	console.log(lis);
// 	console.log(items);
// 	for(let i=0;i<lis.length;i++){
// 		lis[i].onmouseenter=function(){
// 			items[i].style.display="block";
// 		}
// 		lis[i].onmouseleave=function(){
// 			items[i].style.display="none";
// 		}
// 	}
// }
// 	window.onload=function(){
// 		let slide=document.getElementsByClassName('slide');
// 		let lis=slide[0].getElementsByTagName('li');
// 		for (let i =0; i < lis.length; i++){
// 			lis[i].onmouseenter=function(){
// 				let item=this.getElementsByClassName('item')[0];
// 				item.style.display='block';
// 			}
// 			lis[i].onmouseleave=function(){
// 				let item=this.getElementsByClassName('item')[0];
// 				item.style.display='none';
// 			}
// 		}
// 	}
	// window.onload=function(){
	// let slide=document.getElementsByClassName("slide");
	// let lis=slide[0].getElementsByTagName('li')
	// let items=document.getElementsByClassName('item');
	// for(var i=0;i<lis.length;i++){
	// 	lis[i].index=i;
	// 	lis[i].onmouseenter=function(){
	// 		items[this.index].style.display='block';
	// 	}
	// 	lis[i].onmouseleave=function(){
	// 		items[this.index].style.display='none';
	// 	}
	// }	
	// }
 



	// (function aa(){
	// 	alert(1);
	// })();//IIFE Immediately Invoked Function Expression立即执行函数（自调用函数）



	// window.onload=function(){
	// 	let slide=document.getElementsByClassName('slide');
	// 	let lis=slide[0].getElementsByTagName('li');
	// 	let items=document.getElementsByClassName('item');
	// 	for (var i = 0; i < lis.length; i++) {
	// 		lis.[i].onmouseenter=(function(i){
	// 			return function(){
	// 				items[i].style.display='block';
	// 			}
	// 			lis.[i].onmouseleave=(function(i){
	// 			return function(){
	// 				items[i].style.display='none';
	// 			}
	// 		})(i)
	// 	}
	// }
	// 



	// window.onload=function(){	
	// 	let imgBox=document.getElementsByClassName('imgBox');
	// 	let img=imgBox[0].getElementsByTagName('li');
	// 	let btn=document.getElementsByClassName('btn');
	// 	let click=btn[0].getElementsByTagName('li');	
	// 	for (let i = 0; i <click.length; i++) {
	// 		click[i].onclick=function(){
	// 			for (let j = 0; j < img.length; j++) {
	// 				img[j].style.display='none';
	// 				// img[j].style.display='block';
	// 				click[j].style.background='rgba(0,0,0,0.5)';
	// 		}
	// 		img[i].style.display='block';
	// 		click[i].style.background='#ff6700';
	// 	}
	// 	}
	// }轮播方法1
	
// 	window.onload=function(){	
// 		let imgBox=document.getElementsByClassName('imgBox');
// 		let img=imgBox[0].getElementsByTagName('li');
// 		let btn=document.getElementsByClassName('btn');
// 		let click=btn[0].getElementsByTagName('li');	
// 		let num=0;
// 	for (let i = 0; i <click.length; i++) {
// 		click[i].onclick=function(){
// 			img[num].style.display='none';
// 			img[i].style.display='block';
// 			num=i;
// 		}	
// 	}
// }// 轮播方法2此方法需要在css里面设置所有图片display:none,然后让第一张图片display:block;



	// window.onload=function(){	
	// 	let banner=document.getElementsByClassName('banner')
	// 	let imgBox=document.getElementsByClassName('imgBox')[0];
	// 	let img=imgBox.getElementsByTagName('li');
	// 	let btn=document.getElementsByClassName('btn')[0];
	// 	let click=btn.getElementsByTagName('li');
	// 	let num=0;	
	// let t=setInterval(fn,3000)
	// imgBox.onmouseenter=function(){
	// 	clearInterval(t);
	// }
	// imgBox.onmouseleave=function(){
	// 	t=setInterval(fn,3000)
	// }
	// function fn(){
	// 	num++;
	// 	if (num==img.length) {
	// 		num=0;
	// 	}
	// 	for (let i = 0; i < img.length; i++) {
	// 		img[i].style.display='none';
	// 		click[i].classList.remove('hot')
	// 	}
	// 		img[num].style.display='block';
	// 		click[num].classList.add('hot')
	// }
	// 	}
	// 	
	// 	





	window.onload=function () {
	let nav=document.getElementsByTagName('nav')[0];
	let liebiao=nav.getElementsByTagName('ul');
	let lis=liebiao[0].getElementsByTagName('li');

		for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function () {
            let xialak=this.getElementsByClassName('xialak')[0];
            xialak.style.display='block';
        }
        lis[i].onmouseleave=function () {
			let xialak=this.getElementsByClassName('xialak')[0];
            xialak.style.display='none';
            }
		}



		let banner=document.getElementsByClassName('.banner')
		let imgBox=document.getElementsByClassName('imgBox')[0];
		let img=imgBox.getElementsByTagName('li');
		let btn=document.getElementsByClassName('btn')[0];
		let click=btn.getElementsByTagName('li');
		

		let num=0;
		let t=setInterval(fn,3000)
		//鼠标移入效果
		banner.onmouseenter=function(){
			clearInterval(t);
		}
		banner.onmouseleave=function(){
			t=setInterval(fn,3000)
		}
		function fn(){
			num++;
			if (num==img.length) {
				num=0;
			}
			for (let i = 0; i < img.length; i++) {
				img[i].style.display='none';
				click[i].classList.remove('hot')
			}
				img[num].style.display='block';
				click[num].classList.add('hot')
		}
//点击左右
//向右跳转
	let press=document.getElementsByClassName('press')
  	let forward=press[0].getElementsByClassName('icon-xiaoyuhao')[0];
       forward.onclick=fn1;
      
        //向左跳转
    let back=press[0].getElementsByClassName('iconfont icon-dayuhao')[0];
    	// console.log(iconfont);

        back.onclick=fn;
       function fn1(){
            click[0].classList.remove('hot');
            num--;
            if(num==-1){
                  num=img.length-1;
            }
            for(let i=img.length-1;i>=0;i--){
                  img[i].style.display='none';
                  click[i].classList.remove('hot');
            }
             click[num].classList.add('hot');
             img[num].style.display='block';
       }
      // 鼠标点击
        for(let i=0;i<img.length;i++){
            click[i].onmouseenter=function(){
                img[num].style.display='none';
                img[i].style.display='block';
                click[num].classList.remove('hot');
                click[i].classList.add('hot');
                num = i;
            }
        }


        let gun=document.getElementsByClassName('danpin-bottom')[0];
        let btns=document.getElementsByClassName('danpin-top-2')[0];
        let left=btns.getElementsByClassName('left');
        let right=btns.getElementsByClassName('right');
        let no=0;//计数器


        left[0].onclick=function () {
            if(no==3){
                return;
            }
            no++;

            gun.style.marginLeft=`${-1226*no}px`;

        }
        right[0].onclick=function () {

            if(no==0){
                return
            }
            no--;
            gun.style.marginLeft=`${-1226*no}px`;
        }
        let flag2=true;
        let t2=setInterval(move,3000);
        left.onmouseover=function(){
           clearInterval(t2)
        }
        left.onmouseleave=function(){
            t2=setInterval(move,3000);
        }
        right.onmouseenter=function(){
            clearInterval(t2)
        }

        right.onmouseleave=function(){
            t2=setInterval(move,3000);
        }
        function move(){
            if(flag2){
                if(no==3){
                    flag2=false;
                }
                no++
            }
            if(flag2==false){
                if(no==1){
                    flag2=true;
                }
                no--;
            }
            gun.style.marginLeft=`${-1226*no}px`;
        }



        let guns=document.getElementsByClassName('tuij-bottom')[0];
        let btns1=document.getElementsByClassName('tuij-top-2')[0];
        let tlefts=btns1.getElementsByClassName('tuijleft');
        let trights=btns1.getElementsByClassName('tuijright');
        let n1=0;//计数器


        tlefts[0].onclick=function () {
            if(n1==3){
                return;
            }
            n1++;

            guns.style.marginLeft=`${-1226*n1}px`;

        }
        trights[0].onclick=function () {

            if(n1==0){
                return
            }
            n1--;
            guns.style.marginLeft=`${-1226*n1}px`;
        }


        let flag1=true;
        let t1=setInterval(move1,3000);
        tlefts.onmouseenter=function(){
            clearInterval(t1)
        }
        tlefts.onmouseleave=function(){
            t1=setInterval(move1,3000);
        }
        trights.onmouseenter=function(){
            clearInterval(t1)
        }
        trights.onmouseleave=function(){
            t1=setInterval(move1,3000);
        }
        function move1(){
            if(flag1){
                if(n1==3){
                    flag1=false;
                }
                n1++
            }
            if(flag1==false){
                if(n1==1){
                    flag1=true;
                }
                n1--;
            }
            guns.style.marginLeft=`${-1226*n1}px`;
        }



    let slide=document.getElementsByClassName('slide');
	let li=slide[0].getElementsByClassName('lis');
	let items=document.getElementsByClassName('item');
	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			items[i].style.display="block";
		}
		li[i].onmouseleave=function(){
			items[i].style.display="none";
		}
	}
        let dian=document.getElementsByClassName('dapei-top-2')[0];
        let dians=dian.getElementsByTagName('li');
        let play=document.querySelectorAll('.dapei-bottom2');
        let n=0;
        for(let i=0;i<dians.length;i++) {
            dians[i].onmouseenter=function () {
                play[n].style.display = 'none'
                play[i].style.display = 'block'
                n=i;
            }
        }
        for(let i=0;i<dians.length;i++) {
            dians[i].onmouseleave=function () {
                play[i].style.display = 'none'
                play[n].style.display = 'block'
                n=i;
            }
        }
        let dian2=document.getElementsByClassName('peijian-top-2')[0];
        let dians2=dian2.getElementsByTagName('li');
        let play2=document.querySelectorAll('.peijian-bottom2');
        let n2=0;
        for(let i=0;i<dians2.length;i++) {
            dians2[i].onmouseenter=function () {
                play2[n2].style.display = 'none'
                play2[i].style.display = 'block'
                n2=i;
            }
        }
        for(let i=0;i<dians2.length;i++) {
            dians2[i].onmouseleave=function () {
                play2[i].style.display = 'none'
                play2[n2].style.display = 'block'
                n2=i;
            }
        }
        let dian3=document.getElementsByClassName('zhoubian-top-2')[0];
        let dians3=dian3.getElementsByTagName('li');
        let play3=document.querySelectorAll('.zhoubian-bottom2');
        let n3=0;
        for(let i=0;i<dians3.length;i++) {
            dians3[i].onmouseenter=function () {
                play3[n3].style.display = 'none'
                play3[i].style.display = 'block'
                n3=i;
            }
        }
        for(let i=0;i<dians3.length;i++) {
            dians3[i].onmouseleave=function () {
                play3[i].style.display = 'none'
                play3[n3].style.display = 'block'
                n3=i;
            }
        }

}



	
	//轮播图插入
/* 
 *  布局：第一张     0      其他    widths
 *  
 *  就位   next    widths
 *  
 *  动画   now  (0,0)(0,-widths)      next(widths,0)->(0,0) 
 * 
 *  更换   now=next
 * 
 *  问题：1.目前的页面和点击的图一样   用if判断，一样时直接返回
 *        2.快速点击图片推进问题   用flag开关
 * 
 * 
 * */
// 	let banner = $('.imgBox')[0];
// 	let imgs = $('li',banner);
// 	let widths = banner.offsetWidth
// 	let btn=$('.btn')[0];
// 	let click = $('li',btn);
// //	console.log(widths);
// //	console.log(banner);
// //	console.log(imgage);
// //	console.log(bon);
// 	let now = next =0;
// 	let flage = true;
// 	for(let i=0;i<click.length;i++){
		
// 		click[i].onmouseenter =function(){
			
// 			if (flage) {
// 				flage = false;
				
// 			if (i==now) {
// 				return ;
// 			}
// 			click[now].classList.remove('hot');		
// 			imgs[i].style.left = `${widths}px`;
// 			animate(imgs[now],{left:-widths});
// 			animate(imgs[i],{left:0},function(){
// 				flage = true;
// 			});
// 			click[i].classList.add('hot');
// 	    	now = next = i;
				
// 			}
			

// 		}
// 	}
	
	
		
		
	
// 	//自动轮播
// 	let t = setInterval(move,3000);
// 	function move(){
// 		next++;
// 		if (next == imgs.length) {
// 			next=0;
// 		}
// 		click[now].classList.remove('hot');		
// 		imgs[next].style.left = `${widths}px`;
// 		animate(imgs[now],{left:-widths});
// 		animate(imgs[next],{left:0},function(){
// 			flag = true;
// 		});
// 		click[next].classList.add('hot');
// 	    now = next;
// 	}
	
// 	//停止轮播
// 	banner.onmouseenter = function(){
// 		clearInterval(t);
// 	}
	
// 	//左右轮播
// 	let banLeft = $('.icon-xiaoyuhao')[0];
// 	let flag =true;
// //	console.log(banLeft)
// 	banLeft.onclick = function(){
		
// 		if (flag) {
// 			flag = false;	
// 			move();
// 		}
		
		
// 	}
// 	let banRight = $('.icon-dayuhao')[0];
	
// 	banRight.onclick = function(){
		
// 		if (flag) {
// 			flag = false;	
// 			move1();
// 		}	
// 	}
// 	function move1(){
// 		next--;
// 		if (next == -1) {
// 			next=imgs.length-1;
// 		}
// 		click[now].classList.remove('hot');		
// 		imgs[next].style.left = `${-widths}px`;
// 		animate(imgs[now],{left:widths});
// 		animate(imgs[next],{left:0},function(){
// 			flag = true;
// 		});
// 		click[next].classList.add('hot');
// 	    now = next;
// 	}
	
// window.onload=function(){
// let imgBox=document.getElementsByClassName('imgBox')[0];
// let imgs=imgBox.getElementsByTagName('li');
// let btn=document.getElementsByClassName('btn')[0];
// let lis=btn.getElementsByTagName('li');
// let widths = imgBox.offsetWidth;
// let next=0;
// let now=0;
// let back=document.getElementsByClassName('icon-xiaoyuhao');
// let forward=document.getElementsByClassName('icon-dayuhao');
// let flag=true;
// //自动更新
// let t=setInterval(fn, 3000);
// function fn(){
// 	next++;
// 	if(next==imgs.length){
// 		next=0;
// 	}
// 	imgs[next].style.left=`${widths}px`;
// 	animate(imgs[now],{left:-widths});
// 	animate(imgs[next],{left:0},function(){
// 		flag=true;
// 	});
// }
// //左右更进
// back.onclick=function(){
// 	if(!flag){
// 		flag=false;
// 		fn();
// 	}
//
// };
// forward.onclick=function(){
// 	if(!flag){
// 		flag=false;
// 		fn1();
// 	}
// };
// function fn1(){
// 	next--;
// 	if(next==-1){
// 	next=imgs.length-1;
// 	}
// 	imgs[next].style.left=`${-widths}px`;
// 	animate(imgs[now],{left:widths});
// 	animate(imgs[next],{left:0},function(){
// 		flag=true;
// 	});
// }
// //鼠标移入效果
// imgBox.onmouseenter=function(){
// 	clearInterval(t)
// }
// imgBox.onmouseleave=function(){
// 	 t=setInterval(fn, 3000);
// }
// //鼠标点击效果
//  for(let i=0;i<lis.length;i++){
//  	lis[i].onclick=function(){
//  		if (i=now) {
//  			return;
//  		}
//  		if (i>now) {
//  		imgs[i].style.left=`${widths}px`;
// 			animate(imgs[now],{left:-widths});
// 			animate(imgs[i],{left:0});
//  		}
//  		if(i<now){
//  		imgs[i].style.left=`${-widths}px`;
// 			animate(imgs[now],{left:widths});
// 			animate(imgs[i],{left:0});
//  		}
//  		now=next=i;
//  	}
//  }
// }//待完成，banner的轮播
//}

// window.onload=function () {
//     // let box=document.getElementsByClassName('single');
//     let gun=document.getElementsByClassName('danpin-bottom')[0];
//     let btn=document.getElementsByClassName('danpin-top-2')[0];
//     let left=btn.getElementsByClassName('left');
//     let right=btn.getElementsByClassName('right');
//     let num=0;//计数器
//
//
//     left[0].onclick=function () {
//         if(num==3){
//             return;
//         }
//         num++;
//
//         gun.style.marginLeft=`${-1226*num}px`;
//
//     }
//     right[0].onclick=function () {
//
//         if(num==0){
//             return
//         }
//         num--;
//         gun.style.marginLeft=`${-1226*num}px`;
//     }
//     let flag2=true;
//     let t=setInterval(move,3000);
//     left.onmouseenter=function(){
//         clearInterval(t)
//     }
//     left.onmouseleave=function(){
//         t=setInterval(move,3000);
//     }
//     right.onmouseenter=function(){
//         clearInterval(t)
//     }
//     right.onmouseleave=function(){
//         t=setInterval(move,3000);
//     }
//     function move(){
//         if(flag2){
//             if(num==3){
//                 flag2=false;
//             }
//             num++
//         }
//         if(flag2==false){
//             if(num==1){
//                 flag2=true;
//             }
//             num--;
//         }
//         gun.style.marginLeft=`${-1226*num}px`;
//     }
//
// }

// window.onload=function () {
//     let dian=document.getElementsByClassName('dapei-top-2')[0];
//     let dians=dian.getElementsByTagName('li');
//     let play=document.querySelectorAll('.dapei-bottom2');
//     let n=0;
//          for(let i=0;i<dians.length;i++) {
//             dians[i].onmouseenter=function () {
//                     play[n].style.display = 'none'
//                     play[i].style.display = 'block'
//                 n=i;
//                 }
//             }
//          for(let i=0;i<dians.length;i++) {
//             dians[i].onmouseleave=function () {
//                     play[i].style.display = 'none'
//                     play[n].style.display = 'block'
//                 n=i;
//                 }
//             }
//     let dian2=document.getElementsByClassName('peijian-top-2')[0];
//     let dians2=dian2.getElementsByTagName('li');
//     let play2=document.querySelectorAll('.peijian-bottom2');
//     let n2=0;
//     for(let i=0;i<dians2.length;i++) {
//         dians2[i].onmouseenter=function () {
//             play2[n2].style.display = 'none'
//             play2[i].style.display = 'block'
//             n2=i;
//         }
//     }
//     for(let i=0;i<dians2.length;i++) {
//         dians2[i].onmouseleave=function () {
//             play2[i].style.display = 'none'
//             play2[n2].style.display = 'block'
//             n2=i;
//         }
//     }
//     let dian3=document.getElementsByClassName('zhoubian-top-2')[0];
//     let dians3=dian3.getElementsByTagName('li');
//     let play3=document.querySelectorAll('.zhoubian-bottom2');
//     let n3=0;
//     for(let i=0;i<dians3.length;i++) {
//         dians3[i].onmouseenter=function () {
//             play3[n3].style.display = 'none'
//             play3[i].style.display = 'block'
//             n3=i;
//         }
//     }
//     for(let i=0;i<dians3.length;i++) {
//         dians3[i].onmouseleave=function () {
//             play3[i].style.display = 'none'
//             play3[n3].style.display = 'block'
//             n3=i;
//         }
//     }
// }






