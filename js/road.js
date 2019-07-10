let i=0;

let imgTableRoad = ['road1.png','road2.png','road-bike.png'];
let imgTableGravel = ['gravel.png','gravel2.jpg','gravel3.jpg'];

window.setInterval(function(){
    i++;
    if(i>2){
      i=0;
    }
  
    document.querySelector('.road').style.backgroundImage = 'url(img/'+imgTableRoad[i]+')';
    document.querySelector('.gravel').style.backgroundImage = 'url(img/'+imgTableGravel[i]+')';
  
  },6000);