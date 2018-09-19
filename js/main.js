
// 首頁選單彈開
var homeBtn = document.querySelector('.home_btn');
homeBtn.addEventListener('click',function(){
    this.classList.toggle('active');
    var bar = document.querySelector('.bar');
    bar.classList.toggle('active');
},false);

