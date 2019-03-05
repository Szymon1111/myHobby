let images = document.getElementsByClassName('background-img');
let sections = document.getElementsByClassName('section');

document.querySelector('.background').style.backgroundImage = 'none';

for(let i = 0;i<images.length;i++){
    images[i].style.backgroundImage = 'url(img/background'+i+'.jpg)';
}
for(let i = 0;i<sections.length;i++){
    changeBackgroundImage(sections[i],images[i],'background'+i);
}



document.querySelector('.menu-opener').addEventListener('click', function () {
    document.querySelector('.main-menu').classList.toggle("opened");
    
    menuOpenerPosition();
}, false);

document.querySelector('.elements').addEventListener('click', function () {
    if (document.querySelector('.main-menu').classList.contains('opened'))
        document.querySelector('.main-menu').classList.toggle("opened");
    
    menuOpenerPosition();

}, false);
menuOpenerPosition();

window.addEventListener('scroll', function () {
    menuOpenerPosition();
    
    for(let i = 0;i<sections.length;i++){
        changeBackgroundImage(sections[i],images[i],'background'+i);
    }
}, false);

function changeBackgroundImage(sectionTag,imageTag,backgroundImgName) {
    let scroll = window.scrollY;
    let wHeight = innerHeight;
    let offsetTop = sectionTag.offsetTop;
    
    if(scroll>=offsetTop-wHeight/2 && scroll<offsetTop+wHeight/2){
        imageTag.style.opacity = '1';
    }
    else
        imageTag.style.opacity = '0';
    
}

function menuOpenerPosition() {
    if (document.querySelector('.about').offsetTop / 2 <= window.scrollY) {
        document.querySelector('.menu-opener').style.left = '95%';
        
        if (document.querySelector('.main-menu').classList.contains('opened'))
            document.querySelector('.menu-opener').style.left = '50%';
        else
            document.querySelector('.menu-opener').style.left = '95%';
    } else {
        document.querySelector('.menu-opener').style.left = '50%';
    }
}
function scrollToSection(sectionName,time){
    if (document.querySelector('.main-menu').classList.contains('opened'))
        $.scrollTo(sectionName, time);
}
$(".menu-element-home").click(function() {
  scrollToSection('.title-page',750);
});
$("#about").click(function() {
  scrollToSection('.about',750);
});
$("#history").click(function() {
  scrollToSection('.history',750);
});
window.onload = function() {
    $.scrollTo('.history', 10);
    $.scrollTo('.title-page', 10);
    document.querySelector('.loading-page').style.display = 'none';
};