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
    peticion_http.open("POST", "../servidor/compruebaDisponibilidadJSON.php", true);

    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var query_string = crea_query_string();
    peticion_http.send(query_string);
  }

}

    var crea_query_string = function() {
      var nombre = document.getElementById("login").value;
      return "login=" + encodeURIComponent(nombre) +
             "&nocache=" + Math.random();
    };

    var inicializa_xhr= function() {
      if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
      else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    };

    function procesaRespuesta() {
      if(peticion_http.readyState == READY_STATE_COMPLETE) {
        if(peticion_http.status == 200) {

            console.log(peticion_http.responseText);

            var respuesta_json = peticion_http.responseText;
            var objeto_json = JSON.parse(respuesta_json);

            var mensaje = objeto_json.disponible;
            var sms;
        if (mensaje == "no"){
            sms="<p>El nombre "+ document.getElementById("login").value + " NO esta disponible</p>";
            var alternativas= objeto_json.alternativas;
            var alt="<p>Otras alternativas:</p><ul>";
            for (var i=0; i<alternativas.length;i++){
                alt=alt+ "<li>Alternativa "+ (i+1) +": " + alternativas[i]+"</li>";
            }
            alt=alt+"</ul";
            document.getElementById("disponibilidad").innerHTML = sms + alt;
        }
        else{
            sms="<p>El nombre "+ document.getElementById("login").value + " esta disponible</p>";
            document.getElementById("disponibilidad").innerHTML = sms;
        }

        }


        }
      }


};
