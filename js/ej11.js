/*Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:

Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.*/

/*function Empleado (nombre, departamento) {
  this.nombre = nombre || "";
  this.departamento = departamento || "General";
}

function Director (nombre, departamento, informes) {
  this.base = Empleado;
  this.base(nombre, departamento);
  this.informes = informes || [];
}
Director.prototype = new Empleado;

function Obrero (nombre, departamento, proyectos) {
  this.base = Empleado;
  this.base(nombre, departamento);
  this.proyectos = proyectos || [];
}
Obrero.prototype = new Empleado;

function Ingeniero (nombre, proyectos, maquina) {
  this.base = Obrero;
  this.base(nombre, "Ingeniería", proyectos);
  this.maquina = maquina || "";
}
Ingeniero.prototype = new Obrero;*/

function Persona (nombre, edad, genero) {
  this.nombre = nombre || "";
  this.edad = edad || 18;
  this.genero = genero || "";
}

Persona.prototype.obtDetalles = function() {
    console.info(this.nombre);
    console.info(this.edad);
    console.info(this.genero);
};

function Estudiante (nombre,edad,genero, curso, grupo) {
    this.base= Persona;
    this.base(nombre,edad,genero);
    this.curso=curso || "";
    this.grupo=grupo || "";
}
Estudiante.prototype.registrar=function(nombre,edad,genero) {
    this.base= Persona;
    this.base(nombre,edad,genero);
}
Estudiante.prototype = new Persona;

console.log("prototipos");

var amaia = new Estudiante("amaia",25,"F",1,3);
amaia.registrar("lala",12,"M");
amaia.obtDetalles();
