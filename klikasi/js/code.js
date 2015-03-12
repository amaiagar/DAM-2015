var cargarHtml=function(url){
    $.ajax({
    // la URL para la petición
    url : url,

    // especifica si será una petición POST o GET
    type : 'GET',

    // el tipo de información que se espera de respuesta
    dataType : 'html',

    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success : function(html) {
        console.log(url);
        $('#container').html(html);
    },

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto jqXHR (extensión de XMLHttpRequest), un texto con el estatus
    // de la petición y un texto con la descripción del error que haya dado el servidor
    error : function(jqXHR, status, error) {
        console.lod('error al cargar html');
    },

    // código a ejecutar sin importar si la petición falló o no
    complete : function(jqXHR, status) {

    }
});
};


$(document).ready(function() {
  console.log('documentReady');

    cargarHtml('html/login.html');
    /*$('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })*/

});
