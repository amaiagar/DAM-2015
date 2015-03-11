window.onload= function (){
    "use strict";
    document.getElementById("comprobar").onclick = comprobar;



var READY_STATE_COMPLETE=4;
var peticion_http = null;

function comprobar(){
    console.log("aa");
   peticion_http = inicializa_xhr();

  if(peticion_http) {
    peticion_http.onreadystatechange = procesaRespuesta;
    peticion_http.open("POST", "../servidor/compruebaDisponibilidad.php", true);

    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var query_string = crea_query_string();
    peticion_http.send(query_string);
  }

}

    function crea_query_string() {
      var nombre = document.getElementById("login").value;
      return "login=" + encodeURIComponent(nombre.value) +
             "&nocache=" + Math.random();
    }

    var inicializa_xhr= function() {
      if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
      else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    }

    function procesaRespuesta() {
      if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {
          document.getElementById("disponibilidad").innerHTML = peticion_http.responseText;
            console.log(peticion_http.responseText);
        }
      }
    }

}
