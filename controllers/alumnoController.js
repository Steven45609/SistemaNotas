const alumnos = require("../data/alumnos");

const{
    calcularPromedio,
    estadoAlumno
} = require("../services/promedioServices");

function mostrarAlumnos(){
    console.log("========Lista de alumnos=========");
    alumnos.forEach(alumno =>{
        let promedio = calcularPromedio(alumno.nota1,
                                        alumno.nota2,
                                        alumno.nota3
                                       );
        console.log(`ID: ${alumno.id}
            Nombre: ${alumno}
            Promedio: ${promedio.toFixed(2)}
            Estado: ${estadoAlumno(promedio)}
            `);
    });
}
module.exports = {
    mostrarAlumnos
};