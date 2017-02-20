class Programa{
    private nombre:string;
    private version:string;

    public setNombre(nombre:string)
    {
        this.nombre = nombre;
    }

    public getNombre()
    {
        return this.nombre;
    }

    public setVersion(version:string)
    {
        this.version = version;
    }

    public getVersion()
    {
        return this.version;
    }

}

class EditorVideo extends Programa{
    private timeline:number;

    public setTimeLine(timeline:number){
        this.timeline = timeline;
    }

    public getTimeLine()
    {
        return this.timeline;
    }

    public getAllData():string
    {
        return "Nombre : " + this.getNombre() + " - "
        + "version : " + this.getVersion() + " - "
        + "time : " + this.getTimeLine();
    }
}

var editor = new EditorVideo();
editor.setNombre("Programa prueba");
editor.setVersion("1.0");
editor.setTimeLine(123456789);

console.log(editor.getAllData());
var programas = [];

function Guardar()
{
    var nombre = (<HTMLInputElement>document.getElementById("nombre"));
    
    var programa = new Programa();
    programa.setNombre(nombre.value.toString());
    programas.push(programa);

    var list = "";

    for(var i=0; i<programas.length; i++)
    {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;

    nombre.value = "";
}