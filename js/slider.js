let title = document.querySelector('.slider-title');
let bgc = document.querySelector('.slider-background');
let conent = document.querySelector('.slider-content');
let container = document.querySelector('.history');
let canClick = true;

let contentTable = ['Pierwszy prawdziwy pojazd jednośladowy, którego konstrukcja została udokumentowana, powstał w 1690 r. za sprawą Francuza De Sivrac`a. Nazwał on swoją maszynę celerifere. Były to dwa koła połączone ramą. Poruszanie się polegało na odpychaniu się nogami od podłoża, a skręcanie nie było niestety możliwe.','Kolejnym etapem powstania roweru było dodanie pedałów. Tą zasługę przypisujemy Francuzowi Pierre Michaux. Pedały były przykręcane do osi obrotu koła, a nie tak jak w dzisiejszych rowerach do mechanizmu korbowego. Było to jedyne rozwiązanie gdyż napęd łańcuchowy nie był jeszcze znany. Warto dodać, że przednie koło było nawet 5-krotnie większe od tylnego. Siodło było umieszczone bardzo wysoko, co zmuszało cyklistów do korzystania ze specjalnych podpórek umożliwiających zajęcie miejsca na bicyklu.','Fabryczną produkcję rowerów uruchomiono po raz pierwszy w Paryżu w 1867 r. Podczas wojny francusko-pruskiej z lat 1870-71 istniały specjalne oddziały rowerzystów, wykorzystywane głównie do celów wywiadowczych.','Następnym przełomowym zdarzeniem było wynalezienie gumowych opon. Uczyniło to rower wynalazkiem bardziej przyjaznym, a co za tym idzie, popularniejszym. Jazda stałą się o wiele wygodniejsza i od tego momentu niemal każdy mógł korzystać z jednośladów.'];
let titleTable = ['1690','1860','1867','1888'];

let i = 0;

document.querySelector('#right-arrow').addEventListener('click',function(){
    slide('left');   
});
document.querySelector('#left-arrow').addEventListener('click',function(){ 
    slide('right');
});
function slide(direction){
    
    if(canClick){
        canClick = false;
        container.classList.toggle('animate-'+direction);
        window.setTimeout(function(){
            
            if(direction == 'left')
                i++;
            else if(direction == 'right')
                i--;
            
            if(i>=contentTable.length)
                i=0;
            else if(i<0)
                i=contentTable.length-1;
            
            conent.innerHTML = contentTable[i];
            title.innerHTML = titleTable[i];
            
             console.log(i);
            
        },1200);
        window.setTimeout(function(){
            container.classList.toggle('animate-'+direction);
            canClick = true;
        },2800);
    }
};