//obeto global.

//Usar "use strict".

//esperar a que el DOM este cargado.


// Iniciaremos las variables privadas que sean necesarias.

// Necesitaremos una funcion que cree objetos DOM de clase img y todos los atributos necesarios.
// Necesitaremos una funcion que agrege el array de img al DOM (no se realizaran cambios de DOM dentro de ningun bucle).

// Necesitaremos una o varias funcion(es) que controle(n) el paso del tiempo.

// Necesitaremos añadir los eventos necesarios en el momento adecuado.

// Necesitaremos las funciones de callback para los eventos.

// Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.

// Necesitaremos una funcion que controle el final del juego.

// Necesitaremos una funcion que controle la lista de eliminados.

// Cualquier otra funcion que sea necesaria.
"use strict"

    function procesarCartas(json){
        console.log(json);
        $('#botones').addClass('hidden');
        $('#eliminados').removeClass('hidden');
        var perros=$('#contenedor').removeClass('hidden');

        console.log('ProcesarCartas');
        var cartas = [];
        var content="";
        $.each(json, function(i, item) {
            console.log(i);
            console.log(json[i].nombre);
            cartas[i]='<img src="img/'+json[i].animal+'.png" class="card" data-color=" '+ json[i].color +'" id="'+ i +'" data-nombre="' + json[i].nombre + '" data-timer="'+ json[i].timer +'" >';
            content=content+ cartas[i];
        });
        perros.html(content);

        var obj= $('#contenedor img');
        console.log(obj);
        var cont=0;
        var lenght= obj.length;
        setInterval(function() {
      // Do something every 2 seconds
            for(var i=0;i<lenght;i++){
                var timer=$(obj[i]).data('timer');
                if (timer<cont) {
                    var color=$(obj[i]).data('timer');
                    $(obj[i]).addClass(color);
                }

            }
            cont=cont+1;
        }, 1000);

    };


$(document).ready(function() {
  console.log('el documento está preparado');
  $('#carga').on('click', function() {
      var filas=$('#filas').val();
      var columnas=$('#columnas').val();
      var num=filas*columnas;

      APP.cargar(num,procesarCartas);
      //console.log(cartas);
    console.log('click');

  });



});



