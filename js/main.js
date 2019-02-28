document.querySelector('.menu-opener').addEventListener('click',function(){
	document.querySelector('.main-menu').classList.toggle("opened")
},false);

document.querySelector('.elements').addEventListener('click',function(){
if(document.querySelector('.main-menu').classList.contains('opened'))
	document.querySelector('.main-menu').classList.toggle("opened")
},false);