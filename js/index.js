var left=0;
var timer;
var mleft=document.querySelector('.mleft');
var mright=document.querySelector('.mright');
var minimg=document.getElementById('minimg').getElementsByTagName('li');
var icminimg=document.querySelector('#minimg');
var eimglist=document.querySelector("#imglist");
run();
function run() {
    if (left <= -2400) {
        left = 0;
    }
    var m=Math.floor(-left/800);
    imglist.style.marginLeft = left + 'px';
    left -= 10;
    let n ;
    if(left%800===0)
        n=2000;
    else n=10;
    timer = setTimeout(run, n);
    icochange(m);
}
function imgchange(n) {
    let lt=-(n*800);
    imglist.style.marginLeft=lt+'px';
    left=lt;
}
mleft.onclick=function () {
    let leftgo=Math.floor(-left/800 )-1;
    if(leftgo==-1){
        leftgo=3;
    }
    imgchange(leftgo);
}
mright.onclick=function () {
    let rightgo=Math.floor(-left/800 )+1;
    if(rightgo==3){
        rightgo=0;
    }
    imgchange(rightgo);
}
function icochange(m) {
    for(let index=0;index<minimg.length ;index++){
        minimg[index].style.background='';
    }
    if(m<minimg.length){
        minimg[m].style.background='#fff';
    }
}