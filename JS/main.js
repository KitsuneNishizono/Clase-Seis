var costo = Number (prompt("¿Cuál es la cantidad que se debe de calcular?"));

var porcentaje_iva= 1.16;
var descuento = 100;

function calculo_iva (costo){
	if(!costo) return "el costo es obligatorio";
var iva = costo * porcentaje_iva;
//de esta forma, se hace reducción al total siempre y cuando el dato de entrada fuese mayor a 1000
if (costo>= 1000) {
var descuento = 100;
} else {
 var descuento = 0;
}
return "El total a pagar con IVA es de" + (iva - descuento) + "MXN";
}
alert (calculo_iva(costo));

