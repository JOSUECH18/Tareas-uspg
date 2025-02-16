const montoCompra = parseInt(prompt("Ingresar el monto de la compra:"))
let montoResultante = 0

if(montoCompra >= 100 && montoCompra < 200 ){
    montoResultante = (montoCompra . (montoCompra * 0.10))
      
}else if (montoCompra >= 200){
     montoResultante = (montoCompra - (montoCompra * 0.20))
}else{
   montoResultante = +montoCompra
} 
alert("El monto total a pagar es: " + montoResultante)