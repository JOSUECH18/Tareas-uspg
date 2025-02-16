/*UN PROFESOR CALIFICA A SUS ESTUDIANTES SEGÚN LA SIGUIENTE ESCALA: 0-59 PUNTOS ES UNA CALIFICACIÓN DE F, 60-69 PUNTOS ES UNA CALIFICACÓN DE D, 70-79 PUNTOS ES UNA CALIFICACIÓN DE C, 80-89 PUNTOS ES UNA CALIFICACIÓN DE B, Y 90-100 PUNTOS ES UNA CALIFICACIÓN DE A. ESCRIBE UN PROGRAMA QUE PREGUNTE LA NOTA DEL ESTUDIANTE Y MUESTRE SU CALIFICACIÓN*/
function calcularCalificacion() {
    let nota = parseInt(prompt("Ingrese la nota del estudiante:"));
    let calificacion = "";

    if (nota >= 0 && nota <= 59) {
        calificacion = "F";
    } else if (nota >= 60 && nota <= 69) {
        calificacion = "D";
    } else if (nota >= 70 && nota <= 79) {
        calificacion = "C";
    } else if (nota >= 80 && nota <= 89) {
        calificacion = "B";
    } else if (nota >= 90 && nota <= 100) {
        calificacion = "A";
    } else {
          }

    if (calificacion !== "") {
        alert("La calificación es: " + calificacion);
    }
}

calcularCalificacion();
