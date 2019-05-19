// OPERADORES ARITMETICOS
var uno = 23;
var dos = 10;
var suma = uno + dos;
var resta = uno - dos;
var suma = uno * dos;
var division = uno / dos;
var modulo = uno % dos;
//los contadores en ++ van siempre a la izquierda
//var incremento = ++uno;
var decremento = uno--;
//Orden en javascript de operaciones
//1 multiplicacion 2 division 3 modulo 4 suma 5 resta
//para evitar complictos se anida en parentesis para dar prioridad

var operacion = 15+15/3;
var operacion2 = (15+15)/3;
var operacion3 = (15+15)+(15/3);
//document.write(operacion3);

// OPERADORES RELACIONALES (devuelven falso o verdadero)

var valor1 = 20;
var valor2 = 10;
// > < >= <= == !=
document.write(uno != dos);

//OPERADORES LOGICOS (devuelven falso o verdadero)
// and = &&
// or = ||
// not = !

document.write(valor1 == valor2 && valor1 > valor2);
document.write(valor1 == valor2 || valor1 > valor2);
document.write(!(valor1 == valor2));


