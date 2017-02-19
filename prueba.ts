function holaMuno(nombre){
return "Hola Mundo... Soy " + nombre;
}

let nombre = "Hector Martinez";

document.getElementById("container").innerHTML = holaMuno(nombre);