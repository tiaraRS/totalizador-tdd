function descuentoPorPrecioTotal(precioTotal){
  var descuentoPrecio = 0;
  if(precioTotal >= 30000){
      descuentoPrecio = 0.15;
  }else if(precioTotal >= 10000){
    descuentoPrecio = 0.1;
  }else if(precioTotal >= 7000){
    descuentoPrecio = 0.07;
  }
  else if(precioTotal >= 3000){
    descuentoPrecio = 0.05;
  }else if (precioTotal >= 1000){
    descuentoPrecio = 0.03;
  }
  return descuentoPrecio;
}

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
  var totalConDescuento = total - total*descuentoPorPrecioTotal(total);
  var totalConImpuestoYDescuento = totalConDescuento + impuesto*totalConDescuento;
  return totalConImpuestoYDescuento;
}

export default calcularTotal;
