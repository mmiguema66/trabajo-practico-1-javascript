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

function revisarNota(){
    if(notaAlumno >7){
        console.log('Felicidades has aprobado la materia');
        return;
    }
    if(notaAlumno <7){
        console.group('Continua trabajando, deberas realizar el recuperatorio');
        return
    }
}
revisarNota();

const profesor ={
    nombre: "Ricardo Darin",
    comision: 1245,
    disponible:true,
    mostrarInfo: function(){
        console.log(`Profesor: ${this.nombre} pertenece a la comisión: ${this.comision}`)
    }
}
profesor.mostrarInfo();

const profesorQuimica= [
    {nombre: 'Tamara Lopez', comision: 1245},
    {nombre: 'Martin Bogado', comision: 1245},
    {nombre: 'Oscar Fernandez', comision: 1246},
    {nombre: 'Ricardo Darin', comision: 1245},
    {nombre: 'Miguel Amarilla', comision: 1246},
]
const resultado = profesorQuimica.find(quimica => quimica.nombre ==='Ricardo Darin');
console.log(resultado);

let profesores;
profesores = profesorQuimica.filter(profesor => profesor.comision ==1245 );
console.log(profesores);