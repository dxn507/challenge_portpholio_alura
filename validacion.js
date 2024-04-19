//Haz tú validación en javascript acá

//Aplicar sticky al header

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
});

//menu amburguesa

let iconoDelMenu = document.getElementById("icono__menu");
let listaDelMenu = document.getElementById("menu__list");
iconoDelMenu.addEventListener("click",  function(){
    if(listaDelMenu.classList.contains("menu__visible")){
        listaDelMenu.classList.remove("menu__visible")
    }else{
        listaDelMenu.classList.add("menu__visible");

    }
    // listaDelMenu.classList.toggle("menu__visible");
   // return = contacto.classList.toggle("menu__visible");

});
