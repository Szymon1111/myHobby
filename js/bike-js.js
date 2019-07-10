window.addEventListener('scroll',function(){

    foo();

},false);

function foo(){
    let headerBackground = document.querySelector('.page-header-background');
    let scroll = window.scrollY;
    
    let wHeight = window.innerHeight;
    let height = wHeight;
    
    
    
    height -= scroll;
    
    height = limitDown(height,0);
    
    headerBackground.style.height = height+'px';
}
function map(n, start1, start2, stop1, stop2) {
  const curr = start2 - start1;
  const expected = stop2 - stop1;
  const xp = (expected / curr) * (n - start1);
  return stop1 + xp;
}
function limitDown(n, low) {
  if (n < low) return low;
  return n;
}
function limitUp(n, low) {
  if (n > low) return low;
  return n;
}
$(".htbike-img").click(function() {
  $.scrollTo('.htbike', 750);
});
$(".fullbike-img").click(function() {
  $.scrollTo('.fullbike', 1000);
});
$(".fat-bike-img").click(function() {
  $.scrollTo('.fat-bike', 1000);
});
$(".up-arrow").click(function() {
  $.scrollTo(0, 1000);
});
