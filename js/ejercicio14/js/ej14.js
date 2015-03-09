//var APP = APP || {};

/*
Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo*/

console.log("Numero de enlaces de la pagina");
var enlaces = document.getElementsByTagName("a");
console.log(enlaces.length);

console.log("Dirección a la que enlaza el penúltimo enlace");
var enlace= enlaces[(enlaces.length-1)-1];
console.log(enlace.href);

console.log("Numero de enlaces que enlazan a http://prueba");
var cont=0;
for (var i=0; i<enlaces.length;i++){
    if (enlaces[i].href==="http://prueba/") cont++;
}
console.log(cont);

console.log("Numero de enlaces del tercer párrafo");
var parrafos= document.getElementsByTagName("p");
var parrafo=parrafos[2];
var a_p3=parrafo.getElementsByTagName("a").length;
console.log(a_p3);
