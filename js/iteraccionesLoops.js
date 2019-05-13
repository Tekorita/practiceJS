var uno = 10;
var dos = 15;

/*
while
do-while
for
break-continue
*/
//while
while(uno<=dos){
    document.write(uno + "<br>");
    uno++;
}

//dowhile
do{
    document.write(uno + "<br>");
    uno++;
}while(uno <= dos){
    document.write(uno + "<br>");
    uno++;
}

//for
for(var i=1; i<=10; i++){
    document.write(i+"<br>");
}

//break y continue
for(var i=1; i<=10; i++){
    if(i==5){break;}
    document.write(i+"<br>");
}

for(var i=1; i<=10; i++){
    if(i==5 || i==7){continue;}
    document.write(i+"<br>");
}