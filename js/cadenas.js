var saludo = 'hola<br>';
var saludo2 = "hola";
var saludo3 = 'hola "Jefe"';
var saludo4 = "hola'Jefesito'";
var saludo5 = 'hola que tal como estan suscriptores, como les va'
var dias = 'lunes, martes, miercoles, jueves, viernes, sabado, domingo'

/*
    -------------------contabilizar caracteres-----------------------------
    length (propiedad para traer la el tamaño del string)
    -------------------busquedas en caracteres-----------------------------
    indexOf (metodo) (para buscar en una palabra dentro de los caracteres)
    lastIndexOf (para buscar la ultima palabra dentro de los caracteres)
    search (para buscar en una palabra dentro de los caracteres)
    match (para convertir la cadena en un array)
    substr (para gestionar las posiciones de una cadena)
    substring (para gestionar las posiciones de una cadena)
    charAt (para extraer un caracter en una posicion)
    startsWith (nos indica con un booleano si el texto inicia con el texto q se pasa por parametro)
    endsWith (nos indica con un booleano si el texto termina con el texto q se pasa por parametro)
    includes (nos siver para buscar coincidencias en un texto)
    -----------------------------------------------------------------------
    repeat (para repetir caracteres las veces que se quiera)
    replace (para remplazar)
    slice (para indicar en que posicion se muestra el texto)
    split (para convertir el texto en un arreglo array)
    trim (para eliminar espacios)
    toLowerCase (para convertir todo en minuscula)
    toUpperCase (para convertir todo en mayuscula)
    concat (para concatenar)
*/

document.write(saludo5.length+"<br>"); //Para ver la cantidad de caracteres
document.write(saludo5.indexOf('estan')+"<br>"); //Para ver en que posicion esta la palabra "estan"
document.write(saludo5.search('suscriptores')+"<br>"); // para ver en que posicion esta la palabra "suscriptores"
document.write(saludo5.lastIndexOf('como')+"<br>"); // para ver en que posicion esta la palabra "suscriptores"
document.write(saludo5.match(/como/gi)+"<br>"); // para ver en que posicion esta la palabra "suscriptores"
document.write(saludo5.substr(5, 10)+"<br>"); // para extraer desde una posicion a otra caracteres
document.write(saludo5.substring(5, 11)+"<br>"); // para extraer la cantidad de caracteres deseados siempre partiendo de 1
document.write(saludo5.startsWith("hola")+"<br>"); // nos indica con un booleano si el texto inicia con el texto q se pasa por parametro
document.write(saludo5.endsWith("Va")+"<br>"); // nos indica con un booleano si el texto termina con el texto q se pasa por parametro
document.write(saludo5.includes("est",12)+"<br>"); // nos sive para buscar coincidencias en un texto apartir de la linea 12
document.write(saludo.repeat(10)+"<br>"); // para repetir caracteres las veces que se quiera
document.write(saludo5.replace("e","x")+"<br>"); // para reemplazar
document.write(saludo5.slice(5)+"<br>"); // para indicar apartir de que posicion se muestre el texto
document.write(saludo5.split()+"<br>"); // para todo el texto en arreglo palabra por palabra
console.log(dias.split(",")); // Para convertir el texto en un arreglo especificando la separacion
document.write(dias.trim()+"<br>"); // para eliminar espacios
document.write(dias.toUpperCase()+"<br>"); // para eliminar espacios
document.write(dias.concat(saludo5, saludo, " tekorita")+"<br>"); // para concatenar

//////////////////////////////////otra manera de concatenar////////////////////////////////////

var y = "Youtube";

document.write(`hola como estan suscribanse a mi canal de ${y} y asi pueden ver mis videos`);



