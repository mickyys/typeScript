class Coche{
    public color: string;
    public modelo: string;
    public velocidad: number;

    public getColor(){
            return this.color;
    }

    public setColor(color: string)
    {
        this.color = color;
    }
}

var coche = new Coche();

coche.setColor("azul");
console.log("color coche : " + coche.getColor());