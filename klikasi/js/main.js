var APP = APP || {};
$(document).ready(function () {
  "use strict";
    var palabras;


    var cargarHtml = function(html,cb) {
        "use strict"
    $.ajax({
    url : url,
    type : 'GET',
    dataType : 'html',
    success : function(html) {
        console.log(url);
        $('#container').html(html);
        cb();
    },
    error : function(jqXHR, status, error) {
        console.log('error al cargar html');
    },
    complete : function(jqXHR, status) {
    }
});
    };




});
