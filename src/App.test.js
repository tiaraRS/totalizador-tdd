import calcularTotal from "./App.js";

describe("calcularTotal", () => {
  it("deberia calcular el total segun la cantidad", () => {
    expect(calcularTotal(3)).toEqual(3);
  });
});

describe("calcularTotal", () => {
  it("deberia calcular el total segun la cantidad y precio dado", () => {
    expect(calcularTotal(3,2)).toEqual(6);
  });
});

describe("calcularTotal", () => {
  it("deberia calcular el total segun la cantidad, precio dados e impuesto determinado para cualquier estado dado", () => {
    expect(calcularTotal(3,2,"CA")).toEqual(6.495);
  });
});

describe("calcularTotal", () => {
  it("deberia calcular el total segun la cantidad, precio dados e impuesto segun estado", () => {
    expect(calcularTotal(3,2,"UT")).toEqual(6.399);
    expect(calcularTotal(3,2,"AL")).toEqual(6.24);
    expect(calcularTotal(3,2,"TX")).toEqual(6.375);
  });
});

describe("calcularTotal", () => {
  it("deberia calcular el total segun la cantidad, precio dados, impuesto segun estado y descuento segun precio total", () => {
    expect(calcularTotal(3,2000,"UT")).toEqual(6079.05);
    expect(calcularTotal(50,500,"AL")).toEqual(23400);
  });
});

