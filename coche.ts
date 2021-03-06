interface ICoche{
    getVelicidad():number;
}

class Coche implements ICoche{
    private color: string;
    private modelo: string;
    private velocidad: number ;

    constructor(modelo:any = null){
        this.velocidad = 0;
        this.color = "azul";
        if(modelo == null)
        {
            this.modelo = "Ford Fiesta";
        }
        else
        {
            this.modelo = modelo;
        }
    }

    public getModelo(){
            return this.modelo;
    }

    public setModelo(modelo: string)
    {
        this.modelo = modelo;
    }

    public getColor(){
            return this.color;
    }

    public setColor(color: string)
    {
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar()
    {
        this.velocidad--;
    }

    public getVelicidad():number{
        return this.velocidad;
    }
}

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

