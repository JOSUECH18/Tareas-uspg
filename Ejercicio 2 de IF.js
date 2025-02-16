*/ una empresa ofrece un bono de productividad a sus trabajadores, dependiendo del número de unidades producidas en un mes, si se preducen más de 100 unidades, se otorga bono del 5% de salario. Si se producen mas de 200 unidades, se otorga bono del 10% de salario y si se producen menos de 100 unidades no hay bono. escribir un programa que calcule el bono a otorgar y muestre el salario total a recibir */


let salario = parseInt(prompt("ingrese su salario:"))
let totalProducido = parseFloat(prompt("ingrese el numero de unidades producidas"))

let bono = 0

if(totalProducido > 200) {
    bono = salario * 0.10
} else if (totalProducido > 100) {
    bono = salario * 0.05
}

let salariototal = salario + bono

alert("Bono otorgado: " + bono)
alert("salario total con bonificacion: " + salariototal)