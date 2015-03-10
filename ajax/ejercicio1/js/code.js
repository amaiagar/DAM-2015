var READY_STATE_UNINITIALIZED=0;
var READY_STATE_LOADING=1;
var READY_STATE_LOADED=2;
var READY_STATE_INTERACTIVE=3;
var READY_STATE_COMPLETE=4;

var peticion_http;

function cargaContenido(url, metodo, funcion) {
  peticion_http = inicializa_xhr();

  if(peticion_http) {
    peticion_http.onreadystatechange = funcion;
    peticion_http.open(metodo, url, true);
    peticion_http.send(null);
  }
}

function inicializa_xhr() {
  if(window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
}

function muestraContenido() {
    var estados = document.getElementById("estados");
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode(peticion_http.readyState);
    estados.appendChild(parrafo);
    // Añadir el nodo Text como hijo del nodo Element
    parrafo.appendChild(contenido);

  if(peticion_http.readyState == READY_STATE_COMPLETE) {

    if(peticion_http.status == 200) {
      alert(peticion_http.responseText);
    }
  }
}

function descargaArchivo() {
  cargaContenido("http://localhost/holamundo.txt", "GET", muestraContenido);
}

window.onload = descargaArchivo;
