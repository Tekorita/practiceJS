function apretar(){
    alert("hola a todos");
    console.log("hola a todos mi gente bella");
    document.write("Hola mundo beshoo")
}

function encima(){
    alert("estas sobre el boton");
}

function fuera(){
    alert("estas afuera del boton");
}

var eventoUno = document.querySelector(".tres");
// si se usa desde aqui el evento html se le quita la palabra on osea click en vez de onclick
// le colocamos una funcion anonima
//eventoUno.addEventListener("click", function(){alert("Hola")} );

///////////////////////////Eventos en teclado//////////////////////////////////////

/*
    keyDown
    keyPress
    KeyUp
*/

//window.addEventListener("keydown", function(){alert("Accion")});
//window.addEventListener("keypress", function(){alert("Accion 2")});
//window.addEventListener("keyup", function(){alert("Accion 3")});


//Aqui obtenemos el valor o codigo de cada tecla
window.addEventListener("keypress", function(event)
    {
        //alert(event.keyCode);
        console.log(String.fromCharCode(event.keyCode));
    }
);

//Eventos de Carga y temporizador

//window.addEventListener("load", function(){alert("YA CARGO")})

/*
eventos de temporizador o modo delay
setInterval
setTimeout
*/

/*var tiempo = setInterval(
    function(){
        document.write("Texto de ejemplo <br>")
    },
    1000
    );
*/

/*
setTimeout(
    function(){
        document.write("este es otro ejemplo")
    },1000
);
*/

// Eventos multimedia
/*
play (cuando inicia video)
ended (cuando finaliza video)
seeking (para adelantar o retroseder)// 
*/


var primerito = document.querySelector(".uno");

//primerito.addEventListener("play",
primerito.addEventListener("ended",
    function(){
        alert("finalizo el video gracias");
        //alert("Le distes play");
})

primerito.addEventListener("seeking",
    function(){
        alert(this.currentTime);
        //alert("Le distes play");
})

