console.log("DNI y LETRA");
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var num=72483913;
var letra="K";

if (num<0 || num>99999999)
    console.log("numero incorrecto");
else{
    var resto=num%23;
    console.log(resto);
    if (letra==letras[resto])
        console.log("acierto");
    else
        console.log("incorrecto");
}
