/**
 * Created by Administrator on 2016/7/13.
 */
FastClick.attach(document.body);
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW /640 * 100 + "px";
}();
/*初始化swiper*/
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
/*倒计时*/
var spanHour=document.querySelector('#time-hour');
var spanMin=document.querySelector('#time-min');
var spanSec=document.querySelector('#time-sec');
function addZero(n){
        return n>=0&&n<10?'0'+n:''+n;
}
function countDown(){
  var oDate=new Date();//格林尼治时间
   var nowTime=oDate.getTime();//获取当前时间戳
   var tarTime=new Date('2016/8/8 00:00:00');
    var s = Math.floor((tarTime.getTime() - nowTime) / 1000);
    var h = Math.floor(s / 3600);
    s %= 3600;
    var m = Math.floor(s / 600);
    s %= 60;
    spanHour.innerHTML=addZero(h);
    spanMin.innerHTML=addZero(m);
    spanSec.innerHTML=addZero(s);
 }
countDown();
setInterval(countDown,1000);






