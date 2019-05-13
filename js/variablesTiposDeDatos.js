///////////////////VARIABLES//////////////////////////////////////
//1 Declaracion

var gatoGrande;

//2 Inicializacion

gatoGrande = "esto es un gato";

//3 Utilizacion

console.log(gatoGrande);

//4 Declaracion + inicializacion + utilizacion

var gatoPequeño = "miau";

console.log(gatoPequeño);

//5 Asignacion de una variable a otra

var felino = gatoGrande;

console.log(felino);

//6 Constantes - no se pueden cmabiar

const PI = 3.1416;

/////////////////////TIPO DE DATOS//////////////////////////////
//strings
var cadena = "arbolito";
//Numericos
var numero = 30;
var real = 20.6;
//booleanos
var booleano = true;
//Fecha o Date
var fecha = Date();
var fecha2 = new Date();
//document.write(fecha2.getDate());
//document.write(fecha2.getDay());
document.write(fecha2.getHours()+" : "+fecha2.getMinutes());
//Simbolos son datos inmutables y se usan para comparaciones logicas
var simbolo = Symbol();
//Objetos

//typeof para verificar el tipo de dato de la variable
console.log(typeof PI); // console.log se escribe en consola

//document.write(fecha2.getDate()); // document.write escribe en html