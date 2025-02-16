/*UN RESTAURANTE OFRECE DESCUENTOS A LOS CLIENTES SEGÚN SU EDAD. LOS MENORES DE 12 AÑOS TIENEN UN DESCUENTO DEL 50% EN SU CONSUMO. LOS MAYORES DE 65 AÑOS TIENEN UN DESCUENTO DEL 25% EN SU CONSUMO. LOS CLIENTES ENTRE 12 Y 65 NO TIENEN DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR*/
function calcularDescuento() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let consumo = parseFloat(prompt("Ingrese el monto de su consumo:"));
    let montoFinal = consumo;

    if (edad < 12) {
        montoFinal = consumo * 0.5;
    } else if (edad > 65) {
        montoFinal = consumo * 0.75;
    }

    alert("El monto total a pagar es: " + montoFinal);
}

calcularDescuento();