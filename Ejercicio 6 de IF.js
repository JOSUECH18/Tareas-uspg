const precioUnitario = parseFloat(prompt("Ingrese el precio unitario de la prenda: "));
const cantidad = parseInt(prompt("Ingrese la cantidad de prendas compradas: "));
let montoCompra = precioUnitario * cantidad;
let montoResultante = 0;

if (cantidad > 5) {
    montoResultante = montoCompra - (montoCompra * 0.20);
} else if (cantidad > 3) {
    montoResultante = montoCompra - (montoCompra * 0.10);
} else {
    montoResultante = montoCompra;
}

alert("El monto total a pagar es: " + montoResultante);