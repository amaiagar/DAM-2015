function Persona (nombre, edad, genero) {
  this.nombre = nombre || "";
  this.edad = edad || 18;
  this.genero = genero || "";
  this.obtDetalles = function() {
    console.info(this.nombre);
    console.info(this.edad);
    console.info(this.genero);
  };
}

function Estudiante (nombre,edad,genero, curso, grupo) {
    this.base= Persona;
    this.base(nombre,edad,genero);
    this.curso=curso || "";
    this.grupo=grupo || "";
    this.registrar=function(nombre,edad,genero) {
        this.base= Persona;
        this.base(nombre,edad,genero);
    };
}

Estudiante.prototype = new Persona;

console.log("prototipos");

var amaia = new Estudiante("amaia",25,"F",1,3);
amaia.obtDetalles();
amaia.registrar("lala",12,"M");
amaia.obtDetalles();
