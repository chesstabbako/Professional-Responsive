const hamburger= document.querySelector("header .hamburger");
const menu= document.querySelector(".menu-navegacion");

hamburger.addEventListener("click", aparece);

function aparece(){
  
menu.classList.toggle("spread");
  
}

window.addEventListener("click", boton);

function boton(e){
  
  //console.log(e.target);
  
 if(menu.classList.contains("spread") && e.target!=menu && e.target!=hamburger){
   
   menu.classList.toggle("spread");  
   
 } 
  
}



























