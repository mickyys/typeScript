var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "azul";
        if (modelo == null) {
            this.modelo = "Ford Fiesta";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelicidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche("Ford Focus");
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.setColor("azul");
console.log("color coche : " + coche.getColor() + " - velocidad : " + coche.getVelicidad() + " - modelo : " + coche.getModelo());
var coche2 = new Coche();
coche2.acelerar();
coche2.acelerar();
coche2.acelerar();
coche2.setColor("verde");
console.log("color coche : " + coche2.getColor() + " - velocidad : " + coche2.getVelicidad() + " - modelo : " + coche2.getModelo());
