window.onload = function() {
    conent.innerHTML = contentTable[0];
    title.innerHTML = titleTable[0];
    $.scrollTo(document.querySelector('body').clientHeight, 10);
    $.scrollTo(0, 10);
    window.setTimeout(function(){
        document.querySelector('.loading-page').style.display = 'none';
    },100);
    
};

$("#up").click(function() {
    scrollToSection('.division',750);
});