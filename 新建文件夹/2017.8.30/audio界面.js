/**
 * Created by Lenovo on 2017/8/31.
 */
window.onload=function () {
    let audio=document.querySelector('audio');
    let back=document.querySelector('.icon-backward');
    let forward=document.querySelector('.icon-forward');
    let main=document.querySelector('main');
    let progressBar=document.querySelector('.progressBar');
    let sing=document.querySelector('.sing');
    let singer=document.querySelector('.singer');
    let photo=document.querySelector('.photo>img');
    let duration=document.querySelector('.duration');
    let bo=document.querySelector('.icon-zanting');
    let current=document.querySelector('.current');
    let song=document.querySelector('.song');
    let vbtn=document.querySelector('.yinBtn');
    let vMain=document.querySelector('.yinMain');
    let num=0;
    render(database[num]);
    audio.volume=`${vMain.offsetWidth/100}`;
    back.onclick=function(){
        num--;
        if(num<0){
            num=database.length-1;
        }
        render(database[num]);
    };
    forward.onclick=function () {
        num++;
        if(num>database.length-1){
            num=0;
        }
        render(database[num]);
    };
    bo.onclick=function () {
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
        this.classList.toggle("icon-bofang");
        this.classList.toggle("icon-zanting");
    };
    audio.ontimeupdate=function () {
        let bili=audio.currentTime/audio.duration*100;
        progressBar.style.width=`${bili}%`;
        let ct=time(audio.currentTime);
        current.innerText=ct;
        database[num].lyrics.forEach((element,index)=>{
            if(element.time==ct){
                let a=index;
                if(index<5){
                    index=0;
                }else{
                    index-=5
                }
                main.innerHTML="";
                for(let j=index;j<database[num].lyrics.length;j++){
                    main.innerHTML+=`<div class="list${j}">${database[num].lyrics[j].lyric}</div>`
                }
                let obj=document.querySelector(`.list${a}`);
                obj.style.fontSize='20px';
                obj.style.color='green';
                // audio.volume=`${vMain.offsetWidth/100}`;
            }
        })
    };



    function render(data){
        song.innerText=data.songs+'---'+data.name;
        duration.innerText=data.alltime;
        sing.innerText=data.songs;
        singer.innerText=data.name;
        photo.src=data.photo;
        audio.src=data.src;
        main.innerHTML="";
        for(let i=0;i<data.lyrics.length;i++){
            main.innerHTML+=`<div>${data.lyrics[i].lyric}</div>`
        }
    }
    function time(data) {
        let m= Math.floor(data/60)>10?Math.loor(data/60):`0${Math.floor(data/60)}`;
        let s=Math.floor(data%60)>10?Math.floor(data%60):`0${Math.floor(data%60)}`;
        return `${m}:${s}`
    }

    vbtn.onmousedown=function (e) {
        let ox=e.clientX;
        let left=vbtn.offsetLeft;
        document.onmousemove=function (e) {
            let cx=e.clientX;
            let lefts=cx-ox+left;
            if(lefts<-4){
                lefts=-4;
            }else if(lefts>100-4){
                lefts=100-4;
            }
            vbtn.style.left=`${lefts}px`;
            vMain.style.width=`${lefts+4}px`;

        }
        vbtn.onmouseup=function () {
            document.onmousemove=null;
            vbtn.onmouseup=null;
        }
    }
};