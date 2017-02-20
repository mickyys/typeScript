var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
}());
var EditorVideo = (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.setTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeLine = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return "Nombre : " + this.getNombre() + " - "
            + "version : " + this.getVersion() + " - "
            + "time : " + this.getTimeLine();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setNombre("Programa prueba");
editor.setVersion("1.0");
editor.setTimeLine(123456789);
console.log(editor.getAllData());
var programas = [];
function Guardar() {
    var nombre = document.getElementById("nombre");
    var programa = new Programa();
    programa.setNombre(nombre.value.toString());
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    nombre.value = "";
}
