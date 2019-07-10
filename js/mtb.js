let imgTableHt = ['hornet.jpg','xc-bike.jpg','commencal.jpg'];
let imgTableFull = ['fuzz.jpg','snabb.jpg','moon.png'];
let imgTableFat = ['fatbike1.jpg','fatbike2.jpg','fatbike3.jpg'];
let i = 0;

window.setInterval(function(){
  i++;
  if(i>2){
    i=0;
  }

  document.querySelector('.ht').style.backgroundImage = 'url(img/'+imgTableHt[i]+')';
  document.querySelector('.full').style.backgroundImage = 'url(img/'+imgTableFull[i]+')';
  document.querySelector('.fat').style.backgroundImage = 'url(img/'+imgTableFat[i]+')';

},6000);