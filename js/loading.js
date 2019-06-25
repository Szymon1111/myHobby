window.onload = function() {
    $.scrollTo(document.querySelector('body').clientHeight, 10);
    $.scrollTo(0, 10);
    window.setTimeout(function(){
        document.querySelector('.loading-page').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    },100);
};