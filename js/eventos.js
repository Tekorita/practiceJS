function apretar(){
    alert("hola a todos");
    console.log("hola a todos");
    document.write("Hola mundo")
}

function encima(){
    alert("estas sobre el boton");
}

function fuera(){
    alert("estas afuera del boton");
}

var eventoUno = document.querySelector(".tres");

eventoUno.addEventListener("click", function(){alert("Hola")} );