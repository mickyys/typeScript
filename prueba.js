function holaMuno(nombre) {
    return "Hola Mundo... Soy " + nombre;
}
var resultado = holaMuno(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//variables y tipos
var nombre = "Hector Martinez";
var edad = 29;
var programador = true;
var langs = ["PHP", "Java", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad + " - " + langs[0];
