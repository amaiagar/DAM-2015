console.log("Comprobar fecha XX/XX/XXXX");
var date = /\d{2}\/\d{2}\/\d{4}/;
console.log(date.test("Nací el 05/04/1982 en Donostia."));

console.log("Validar direccion de email");
var email= /[a-zA-Z]\@[a-zA-Z]\.[a-z]/;
var exp2=/\w+\@\w+\.\w{2,3}/;

//var proba= /[a-zA-Z]{1}/;

console.log(exp2.test("amaiagar@gmail.com"));


console.log("Reemplazar caracteres");
var character = {
                 '<' : '&lt;',
                 '>' : '&gt;',
                 '&' : '&amp;',
                 '"' : '&quot;'
                };
var entities = "<amaia>Pon una & aqui";

entities.replace(/[<>&"]/g,  function (c) {
            console.log(character[c]);
         });

console.log("Invertir nombres");
var inv=/(\w+)\s(\w+)/;
var result=inv.exec("amaia gar");
for (var i=0;i<result.length;i++){
    console.log(i+result[i]);
}

