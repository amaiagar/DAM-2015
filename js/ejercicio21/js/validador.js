/*El nombre, email y comentarios son campos obligatorios.
El campo email debe ser una dirección de email válida.
El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.*/



function nombre_obligatorio() {
  valor = registro_nombre.value;
  if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    console.log("rellene el nombre");
    registro_nombre.style.borderColor= '#FF0000';
  }
}

var registro_nombre = document.getElementById("registro_nombre");
registro_nombre.addEventListener("blur", nombre_obligatorio, false);

/*El nombre, email y comentarios son campos obligatorios.
El campo email debe ser una dirección de email válida.
El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.*/
function validacion() {
  var registro_nombre = document.getElementById("registro_nombre").value;
  var registro_email = document.getElementById("registro_email").value;
  var registro_comentarios = document.getElementById("registro_comentarios").value;
  if (registro_nombre == null || registro_nombre.length == 0 || /^\s+$/.test(registro_nombre)) {
    // Si no se cumple la condicion...
    console.log('[ERROR] registro_nombre no tiene valor');
    return false;
  }
  else if (registro_email == null || registro_email.length == 0 || /^\s+$/.test(registro_email)) {
    // Si no se cumple la condicion...
    console.log('[ERROR] registro_email no tiene valor');
    return false;
  }
  else if (registro_comentarios == null || registro_comentarios.length == 0 || /^\s+$/.test(registro_comentarios)) {
    // Si no se cumple la condicion...
    console.log('[ERROR] registro_comentarios no tiene valor');
    return false;
  }
  else if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(registro_email))) {
      console.log('[ERROR] email incorrecto');
      return false;
  }
  else if (registro_comentarios.length>50) {
      console.log('[ERROR] máximo 50 carácteres');
      return false;
  }
  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  return true;
}
var enviar = document.getElementById("registro");

enviar.onclick=validacion;

