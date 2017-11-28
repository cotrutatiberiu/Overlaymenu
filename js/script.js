var btnMenu=document.getElementById("btn-menu");

btnMenu.addEventListener("click",toggleMenu);

function toggleMenu(event){

    //elementu care a pornit eventul
    var eventTarget=event.target;
    var divOverlay=document.getElementsByClassName("overlay")[0];
    var speed=10;
    if(eventTarget.className=="btn-open"){
        fadeIn(divOverlay,speed);
        eventTarget.className="btn-close";
    }else if(eventTarget.className=="btn-close"){
        fadeOut(divOverlay,speed);
        eventTarget.className="btn-open";
    }

}

function fadeIn(element,speed){
     var inInterval= setInterval(function(){
         //Number-convert opacity  into value
    element.style.opacity= Number(element.style.opacity) + 0.02;

    if(element.style.opacity>=1){
        element.style.opacity=1;
        clearInterval(inInterval);
    }
     },speed);
 }

 function fadeOut(element,speed){
    var outInterval= setInterval(function(){
        //Number-convert opacity  into value
   element.style.opacity= Number(element.style.opacity) - 0.02;

   if(element.style.opacity<=0){
       element.style.opacity=0;
       clearInterval(outInterval);
   }
    },speed);
}