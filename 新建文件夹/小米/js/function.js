/*
* @Author: Lenovo
* @Date:   2017-08-14 19:42:10
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-14 19:43:05
*/

'use strict';
function $(select,range){
    if (typeof select=="string"){
        if (range == undefined){
            range=document;
        }
        let selector=select.trim();
        let firstChar=selector.charAt(0);
        if (firstChar=="."){
            return range.getElementsByClassName(selector.substring(1))
        }else if(firstChar=="#"){
            return document.getElementById(selector.substring(1));
        }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
            return range.getElementsByTagName(selector);
        }
    }else if (typeof select=="function"){
        window.onload=function () {
            select();
        }
    }
}

function html(element,contant){
    if (arguments.length==2){
        element.innerHTML=contant;
    }
    if (arguments.length==1){
        return element.innerHTML
    }
}
function text(element,contant){
    if (arguments.length==2){
        element.innertext=contant;
    }
    if (arguments.length==1){
        return element.innertext;
    }
}


function css(element,attrObj) {
    for(let i in attrObj){
        element.style[i]=attrObj[i]
    }
}

function on(collection,type,fn){
    for(let i=0;i<collection.length;i++){
        collection[i][type]=fn;
    }
}