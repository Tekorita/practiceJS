//var semana = new Array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");
var semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo",10,20.5,true];
//los arrays inician en indice cero
console.log(semana);
console.log(semana[2]);

//Hay dos tipos de arrays
//Unidimensional y Multidimensionales

//Unidimensional
var uno = 
    [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo"          
    ]

//Multidimensional

var dos = [
    100,
    [2,4,6,
        ["hola","tekora",9]
    ],
    [1,3,5,7,9],
    [1.5,2.5,3.5,4.5],
    "hola"
]

//document.write(dos[0]);
//document.write(dos[3][2]);
//document.write(dos[1][3][1]);

var tres = [10,20,30,40,50];

tres.push(60);//para insertar valores en el arreglo
tres.push(70);

document.write(tres.length+"<br>"); // nos indica la cantidad de elementos que hay en el arreglo
document.write(tres.pop()+"<br>"); // nos trae el ultimo valor del arreglo




