function uno(){
    var saludo = document.write("hola a todos<br>");
    return saludo // se puede no usar el return y llamar la funcion y su var
};

//uno().saludo;
uno();

function dos(a, b, c){
    var datos = document.write("mi nombre es: "+a + " " + b + " y tengo: " + c + " años de edad<br>");
    return datos;
}

dos("David","Palma",28);

function tres(nombre=""){
    var nombreCompleto = nombre;
    return document.write(nombreCompleto);
}

tres("Tina<br>");

function cuatro(nombre, apellido){
    if(nombre != null && apellido !=null){
        respuesta = document.write(nombre, apellido);
    }else{
        respuesta = document.write("Ingresa datos coño!<br>");
    }
}

cuatro();

//los puntos suspensivos te permiten ingresar muchos datos y te devuelve un arreglo
function cinco(...meses){
    return document.write(meses+"<br>");
}

cinco("Enero","Febrero","Marzo");

function seis(...meses){
    for(let uno of meses){
        document.write(uno+"<br>");
    }
}

seis("Enero","Febrero","Marzo");

function siete(nombre, precio, peso){
    return nombre + precio + peso;
}

var juguetes = ['Soldado',25,2];

document.write(siete(...juguetes))

//Funciones anonimas

var ocho = function(){
    resultado = "hola a todos<br>"
    return resultado;
}

document.write(ocho());

///////////////////////////////////////////////////////////////////////////

var a = function(nombre, uno){
    var e = nombre; 
    uno(e);
}

var b = function(i){
    document.write(i);
}

a("David<br>", b);

////////////////////lamda///////////////////////////////////////////////////
var vag = nombre1 => nombre1;

document.write(vag("Davisito lugooo<br>"));

//con varios parametros
var vag1 = (nombre2, apellido)=> nombre2 + apellido;

document.write("tina "+" Luguito de Palma");
