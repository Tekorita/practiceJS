/*
    alert
    confirm
    prompt
*/

//var saludos = "buenas noches ";

//alert(saludos+"a todos \n como estan?");

//a = confirm("Necesita ayuda?");

/*
if(a){
    document.write("dijo que si");
}else{
    document.write("dijo que no");
}*/

//if(a){window.location="ayuda.html"}

var a = prompt("Ingrese su nombre completo: ");

//document.write("hola "+a);

if(a){
    document.write("hola " + a);
}else if(a==null){
    document.write("usted eligio la opcion de cancelar");    
}else{
    document.write("Usted no ingreso una opcion")
}