window.onload = function() {
    "use strict";

    var READY_STATE_COMPLETE=4;
    var peticion_http = null;

    var inicializa_xhr= function() {
      if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
      }
      else if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    };

    var cargarProvincias = function (){
        peticion_http = inicializa_xhr();
        if(peticion_http) {
            peticion_http.onreadystatechange = procesarProvincias;
            peticion_http.open("POST", "../servidor/cargaProvinciasXML.php", true);

            peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            peticion_http.send(null);
          }
    };

    cargarProvincias();

    var cargarMunicipios = function (){
        console.log("cargarMunicipios");
        var lista=document.getElementById("cmbProvincias");
        var codProv = lista.options[lista.selectedIndex].value;
        var strProv = lista.options[lista.selectedIndex].text;
        console.log("cod:"+ codProv + "-" + strProv);
        peticion_http = inicializa_xhr();
        if(peticion_http) {
            peticion_http.onreadystatechange = procesarMunicipios;
            peticion_http.open("POST", "../servidor/cargaMunicipiosXML.php", true);
            peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var query_string="provincia=" + encodeURIComponent(codProv) +"&nocache=" + Math.random();
            peticion_http.send(query_string);
          }
    };


    function procesarProvincias() {
        //console.log("procesarProvincias");
        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
                console.log("ready_state_complete // procesarProvincias");
                var documento_xml = peticion_http.responseXML;
                var root = documento_xml.getElementsByTagName("provincias")[0];
                var provincias=root.getElementsByTagName("provincia");
                /*var text="";
                for (var i=0;i<provincias.length;i++){
                text=text+"<option>"+provincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue + "</option>";
               }
                document.getElementById("cmbProvincias").innerHTML=text;*/
                var lista=document.getElementById("cmbProvincias").options;
                lista[0]=new Option("--Selecciona--");
                for (var i=0;i<provincias.length;i++){
                    var cod_prov=provincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                    var str_prov=provincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                    lista[i+1]=new Option(str_prov,cod_prov);
                }
                document.getElementById("cmbProvincias").onchange=cargarMunicipios;
            }
        }
    }

    function procesarMunicipios() {
        if(peticion_http.readyState == READY_STATE_COMPLETE) {
            if(peticion_http.status == 200) {
                console.log("ready_state_complete // procesarMunicipios");
                var documento_xml = peticion_http.responseXML;
                var root = documento_xml.getElementsByTagName("municipios")[0];
                var provincias=root.getElementsByTagName("municipio");
                /*var text="";
                for (var i=0;i<provincias.length;i++){
                text=text+"<option>"+provincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue + "</option>";
               }
                document.getElementById("cmbProvincias").innerHTML=text;*/
                var lista=document.getElementById("cmbMunicippios").options;
                lista.options.lenght=0;
                lista[0]=new Option("--Selecciona--");
                for (var i=0;i<provincias.length;i++){
                    var cod_prov=provincias[i].getElementsByTagName("codigo")[0].firstChild.nodeValue;
                    var str_prov=provincias[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
                    lista[i+1]=new Option(str_prov,cod_prov);
                }
            }
        }
    }

};
