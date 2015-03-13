//objeto global
var APP = APP || {};


APP.cargar= (function(num,procesarCartas) {
    "use strict"
    var cards;
    //= function(num){

    $.ajax({
    // la URL para la petición
    url : 'php/getcards.php',

    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    data : { numero : num },

    // especifica si será una petición POST o GET
    type : 'GET',

    // el tipo de información que se espera de respuesta
    dataType : 'json',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success : function(json) {
        procesarCartas(json);
    },
    });
    //};

    return {
        cards: cards
    };

});
//Usar "use strict"

//esperar a que el DOM este cargado

//Funcion anonima autoejecutable para realizar las peticiones AJAX, que añadiremos en el objeto global
//y expondra un metodo para poder realizar las llamadas al servidor.

//El servidor espera un parametro 'numero' con el número de elementos que tendra el JSON de respuesta.

