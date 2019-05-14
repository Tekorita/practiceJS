var a = "10.5";
var b = Number(a);// con number parseamos o convertimos un string a numero
var c = parseInt(a); // Aqui lo parseo a entero
var d = parseFloat(a); // Aqui lo parseo a real
var e = isNaN("hola"); // Para verificar si es un numero o no devuelve un true
var f = isNaN(a); // Para verificar si es un numero o no devuelve un true
var g = Number.isInteger(a); // Para verificar es un numero entero
var h = 178.99;
var i = h.toFixed(2); //Para mostrar la cantidad de decimales deceados
var j = h.toString();

document.write(typeof b);
document.write(c);
document.write(d);
document.write(d);
document.write(i);




