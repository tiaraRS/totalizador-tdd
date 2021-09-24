
function impuestoPorEstado(estado){
  var impuestoEstado = 0.0825;
  switch (estado){
      case "UT":
          impuestoEstado = 0.0665;
          break;
      case "NV":
          impuestoEstado = 0.08;
          break;
      case "TX":
          impuestoEstado = 0.0625;
          break;
      case "AL":
          impuestoEstado = 0.04;
          break;
      default :
          break;
  }
  return impuestoEstado;
}

function calcularTotal(cantidad, precio=1, estado="") {
  var impuesto = 0.0825;
  if (estado == ""){
    impuesto = 0;
  }else{
    impuesto = impuestoPorEstado(estado);
  }
  var total = cantidad*precio;
  var totalConImpuesto = total + impuesto*total;
  return totalConImpuesto;
}

export default calcularTotal;
