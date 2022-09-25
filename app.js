// alert()

let notaAlumno = parseInt(prompt("ingrese la nota del 1 al 10"))

if (notaAlumno >=7 && notaAlumno <=10){
    alert("Aprobado")
    console.log("Aprobado")

}
else if (notaAlumno >=4 && notaAlumno <=6){
    alert("recuperatorio")
    console.log("recuperar")
}
else if (notaAlumno >=1 && notaAlumno <=3){
    alert("desaprobado")
    console.log("desaprobado")
}

if(notaAlumno >=11){
    alert("volver a ingresar nota")
    
}


class Producto {
    constructor(nombre, nota, descripcion){
        this.nombre = nombre;
        this.nota = nota;
        this.descripcion = descripcion;
    }
 }

 let nombre = prompt("nombre de alumno")
 let nota = prompt("nota")
 let descripcion = prompt("descripcion de materia")

 let producto1  = new Producto(nombre, nota, descripcion)

 console.table(producto1)