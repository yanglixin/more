/**
 * Created by Lenovo on 2017/8/28.
 */
// 属性：线宽 端点 颜色 边数 角 尺寸 width height history ctx canvas
// 方法：画线 画虚线 铅笔 多边形 圆 矩形 多角形 橡皮擦 裁切 文字新建 保存
function palette(canvas,mask) {
    this.canvas=canvas;
    this.mask=mask;
    this.ctx=this.canvas.getContext('2d');
    this.lineWidth=1;
    this.fillStyle='#00c0a5';
    this.strokeStyle='#00c0a5';
    this.cw=this.canvas.width;
    this.ch=this.canvas.height;
    this.style='stroke';
    this.history=[];
    this.lineCap='butt';
    this.polygonnum = 5;
    this.polynum = 5;
    this.temp=null;
}
palette.prototype={
    init:function () {
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.lineCap = this.lineCap;
        this.ctx[this.style]();
    },
	line:function(ox,oy,cx,cy,jiao){
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy-80);
        this.ctx.lineTo(ox, oy-80);
        this.ctx.setLineDash([0,0]);
        this.init();
	},
	dash:function(ox,oy,cx,cy,jiao){
				this.ctx.beginPath();
				this.ctx.moveTo(cx, cy-80);
				this.ctx.setLineDash([3,4]);
				this.ctx.lineTo(ox, oy-80);
        		this.init();
	},
	pencil:function(){
			let that=this;
			that.mask.onmousedown=function(e){
			let cx=e.offsetX,cy=e.offsetY;
			if(that.history.length>0){
				that.ctx.putImageData(that.history[that.history.length-1],0,0)
			}

			that.ctx.beginPath();
			that.ctx.moveTo(cx, cy-80);
			that.ctx.setLineDash([])
			that.mask.onmousemove=function(e){
				let ox=e.offsetX,oy=e.offsetY;
				that.ctx.lineTo(ox, oy-80);
				that.init();
			}
			that.mask.onmouseup=function(){
				that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
				that.mask.onmousemove=null;
				that.mask.onmouseup=null;
			}
		}
	},
	round:function(ox,oy,cx,cy,jiao){
				let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
				this.ctx.beginPath();
				this.ctx.arc(cx, cy-80, r, 0, Math.PI*2, false);
				this.init();
        		this.ctx.setLineDash([])
				this.ctx.closePath();
				// this.ctx.stroke();

	},
    rect:function(ox,oy,cx,cy,jiao) {
        		this.ctx.beginPath();
        		this.ctx.rect(cx,cy-80,Math.abs(cx-ox),Math.abs(cy-oy));
        		this.init();
        		this.ctx.setLineDash([])
				// this.ctx.stroke();
        		this.ctx.closePath();

	},
	polygon:function(ox,oy,cx,cy,jiao){
		// let that=this;
		// that.mask.onmousedown=function(e){
		// 	let cx=e.offsetX,cy=e.offsetY;
		// 	that.mask.onmousemove=function(e){
		// 		let ox=e.offsetX,oy=e.offsetY;
		// 		that.ctx.clearRect(0,0,that.cw,that.ch);
         //        if(that.history.length>0){
         //            that.ctx.putImageData(that.history[that.history.length-1],0,0)
         //        }
				let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
				let Ang=360/(jiao*2)/180*Math.PI;
				let r1=r/2;
				this.ctx.beginPath();
                this.ctx.moveTo(cx+r,cy-80);
				for(let i=1;i<jiao*2;i++){
					if(i%2){
						this.ctx.lineTo(cx+r1*Math.cos(i*Ang),cy-80+r1*Math.sin(i*Ang));
					}else{
                        this.ctx.lineTo(cx+r*Math.cos(i*Ang),cy-80+r*Math.sin(i*Ang));
					}
				}
        		this.ctx.setLineDash([])
				this.ctx.closePath();
                // this.ctx.stroke()
        		this.init();

	},
	poly:function (ox,oy,cx,cy,jiao) {
		// let that=this;
		// that.mask.onmousedown=function (e) {
		// 	let cx=e.offsetX,cy=e.offsetY;
		// 	that.mask.onmousemove=function (e) {
		// 		let ox=e.offsetX,oy=e.offsetY;
		// 		that.ctx.clearRect(0,0,that.cw,that.ch);
		// 		if(that.history.length>0){
		// 			that.ctx.putImageData(that.history[that.history.length-1],0,0)
		// 		}
				let r=Math.sqrt(Math.pow(ox-cx,2)+Math.pow(oy-cy,2));
				let Ang=360/jiao/180*Math.PI;
				this.ctx.beginPath();
				this.ctx.moveTo(cx+r,cy);
				for(let i=1;i<jiao;i++){
					this.ctx.lineTo(cx+r*Math.cos(i*Ang),cy+r*Math.sin(i*Ang))
				}
        		this.ctx.setLineDash([])
				this.ctx.closePath();
       			this.init();
				// this.ctx.stroke();
        //     };
        //     that.mask.onmouseup=function () {
			// 	that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
			// 	that.mask.onmousemove=null;
			// 	that.mask.onmouseup=null;
        //     }
        // }
    },
    draw:function(type) {
        this.mask.onmousedown = function (e) {
            let cx = e.offsetX, cy = e.offsetY;
            this.init();
            this.ctx.setLineDash([]);
            this.mask.onmousemove = function (e) {
                let ox = e.offsetX, oy = e.offsetY;
                this.ctx.clearRect(0, 0,this.cw,this.ch);
                if(this.history.length>0){
                    this.ctx.putImageData(this.history[this.history.length-1], 0,0)
                }
                this[type](ox,oy,cx,cy,5);
            }.bind(this);
            this.mask.onmouseup=function(){
                this.history.push(this.ctx.getImageData(0, 0, this.cw, this.ch));
                this.mask.onmousemove=null;
                this.mask.onmouseup=null;
            }.bind(this);
        }.bind(this);
    },
	eraser:function (obj,w,h) {
		let that=this;
		that.mask.onmousedown=function(){
			obj.style.display='block';
			that.mask.onmousemove=function (e) {
				let ox=e.offsetX,oy=e.offsetY;
				let lefts=ox-w/2,tops=oy-h/2;
                obj.style.left=`${lefts}px`;
                obj.style.top=`${tops}px`;
				if(lefts<0){
                    lefts=0
                }else if(lefts>that.cw-w){
                    lefts=that.cw-w
                }
                if(tops<0){
                    tops=0
                }else if(tops>that.ch-h){
                    tops=that.ch-h;
                }
                that.ctx.clearRect(lefts,tops,w,h);
            }
            that.mask.onmouseup=function () {
				that.mask.onmousemove=null;
				that.mask.onmouseup=null;
                obj.style.display='none';
            }
		}
    },
	font:function () {
        let that = this;
        let divs = document.createElement('div');
        this.mask.onmousedown = function (e) {
            let ox = e.offsetX,oy = e.offsetY;
            divs.style.cssText = `
                width:80px;
                height:20px;
                background:#fff;
                border:1px dashed #ccc;
                position:absolute;
                top:${oy}px;
                left:${ox}px;
               `;
            divs.contentEditable = 'true';
            that.mask.appendChild(divs);
            that.mask.onmousedown = null;
        }
        let lefts,tops;
        divs.onmousedown = function (e) {
            let ox = e.clientX,oy = e.clientY;
            let ol = this.offsetLeft,ot = this.offsetTop;
            that.mask.onmousemove = function (e) {
                divs.style.cursor = 'move';
                let cx = e.clientX,cy = e.clientY;
                lefts = cx-ox+ol;
                tops=cy-oy+ot;
                divs.style.top = `${tops}px`;
                divs.style.left = `${lefts}px`;
            }
            divs.onmouseup = function () {
                that.mask.onmousemove = null;
                divs.onmouseup = null;
            }
        }
        divs.onblur = function () {
            let value = this.innerText;
            this.mask.removeChild(this);
            this.ctx.font='bold 14px sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(value,lefts,tops);
            this.history.push(that.ctx.getImageData(0,0,that.cw,that.ch))
        }.bind(this);
    },
	Clip:function (clipObj) {
		let that=this;
		that.mask.onmousedown=function (e) {
			let ox=e.offsetX,oy=e.offsetY;
            let minx,miny,w,h
			that.mask.onmousemove=function (e) {
				let cx=e.offsetX,cy=e.offsetY;
                 minx=cx>ox?ox:cx,miny=cy>oy?oy:cy;
				 w=Math.abs(ox-cx),h=Math.abs(oy-cy);
				clipObj.style.cssText=`
				width:${w}px;
				height:${h}px;
				left:${minx}px;
				top:${miny}px;
				border:1px dashed #000;
				display:block;
				`
            };
            that.mask.onmouseup=function () {
            	that.temp=that.ctx.getImageData(minx,miny,w,h);
            	that.ctx.clearRect(minx,miny,w,h);
            	that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.ctx.putImageData(that.temp,minx,miny);
				that.mask.onmousemove=null;
				that.mask.onmouseup=null;
				that.drag(minx,miny,w,h,clipObj);
            }
        }
    },
    drag:function (minx,miny,w,h,obj) {
		let that=this;
		that.mask.onmousemove=function (e) {
			let ox=e.offsetX,oy=e.offsetY;
			if(ox<minx&&ox>w+minx&&oy<miny&&oy>h+miny){
                that.mask.style.cursor='move'
			}else{
                that.mask.style.cursor='default'
			}
        }
        that.mask.onmousedown=function (e) {
			let ox=e.offsetX,oy=e.offsetY;
			that.mask.onmousemove=function (e) {
				let cx=e.offsetX,cy=e.offsetY;
				let lefts=cx-ox+minx,tops=cy-oy+miny;
				obj.style.left=`${lefts}px`;
                obj.style.top=`${tops}px`;
                if(lefts<0){
                    lefts=0
                }else if(lefts>that.cw-w){
                    lefts=that.cw-w
                }
                if(tops<0){
                    tops=0
                }else if(tops>that.ch-h){
                    tops=that.ch-h;
                }
                that.ctx.clearRect(0,0,that.cw,that.ch);
                if(that.history.length>0){
                    that.ctx.putImageData(that.history[that.history.length-1],0,0)
                }
                that.ctx.putImageData(that.temp,lefts,tops);
        }
            that.mask.onmouseup=function () {
                that.mask.onmousemove=null;
                that.mask.onmouseup=null;
                that.history.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.temp=null;
                obj.style.display='none'
            }
        }
    },
    reverse:function(){
	   let imgDate=this.ctx.getImageData(0,0,this.cw,this.ch);
	   let date=imgDate.date;
	   for(let i=0;i<date.length;i+=4){
	       date[i]=255-date[i];
	       date[i+1]=255-date[i+1];
	       date[i+2]=255-date[i+2];
       }
       this.ctx.putImageData(imgDate,0,0)
}
}


