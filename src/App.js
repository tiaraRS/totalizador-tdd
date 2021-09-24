function calcularTotal(cantidad, precio=1, estado="") {
  var impuesto = 0.0825;
  if (estado == ""){
    impuesto = 0;
  }
  var total = cantidad*precio;
  var totalConImpuesto = total + impuesto*total;
  return totalConImpuesto;
}

export default calcularTotal;
