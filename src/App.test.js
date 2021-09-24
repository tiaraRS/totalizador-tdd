import calcularTotal from "./App.js";

describe("calcularTotal", () => {
  it("deberia calcular el total segun la cantidad", () => {
    expect(calcularTotal(3)).toEqual(3);
  });
});
