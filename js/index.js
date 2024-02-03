// 清除网页加载时的transitionn过渡
let getBody=document.querySelector('.none-transition');
window.onload=function(){
     getBody.className='';
}