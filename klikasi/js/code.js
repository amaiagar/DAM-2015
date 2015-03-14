var cargarHtml=function(url,cb){
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
        cb();
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

    cargarHtml('html/login.html',loginLoad);

});

function loginLoad(){
    //btnLogin
    $('#btnLogin').on('click', function () {
    var $btn = $(this).button('loading')

    console.log('btnLogin');
    $btn.button('reset');
        cargarHtml('html/lista.html',cargarLista);
  })
}

function cargarLista(){
    console.log('cargarLista');
    var lista="";
            $.getJSON("lista.json", function(datos) {
                //alert("Dato: " + datos["1"]);
                console.log(datos);
                $.each(datos, function(i, item) {
                    //console.log(datos[i].es+ " "+ datos[i].eus);
                    //console.log(i);
                    lista=lista+"<tr><td>"+i+"</td><td>"+datos[i].eus+"</td><td>"+datos[i].es+"</td></tr>";
                });
                    console.log(lista);
    $('#lista_content').html(lista);
            });


}
