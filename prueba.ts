function holaMuno(nombre){
return "Hola Mundo... Soy " + nombre;
}

var resultado = holaMuno(nombre);
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

//variables y tipos
var nombre:string = "Hector Martinez";
var edad:number = 29;
var programador:boolean = true;
var langs:Array<string> = ["PHP", "Java", "CSS"];

etiqueta.innerHTML = nombre + " - " + edad + " - " + langs[0];