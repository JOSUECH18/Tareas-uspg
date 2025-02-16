
const tipoPoliza = parseInt(prompt("Ingresar el tipo de poliza que requiera:"));
let precio = 0;

if (tipoPoliza === 1) {
    precio = 50;
    alert('Has elegido la poliza basica, entonces el precio a pagar es: ' + precio);
} else if (tipoPoliza === 2) {
    precio = 75;
    alert('Has elegido la poliza intermedia, entonces el precio a pagar es: ' + precio);
} else if (tipoPoliza === 3) {
    precio = 100;
    alert('Has elegido la poliza intermedia, entonces el precio a pagar es: ' + precio);
}else {
    alert('Opcion incorrecta, Debe elegir entre 1, 2 y 3:');
}
