const calculadora = require("../models/calculadora");

test("somar 2 + 2 deveria retorna 4", () => {
  const resultado = calculadora.somar(4, 4);
  expect(resultado).toBe(8);
});

test("somar 5 + 100 deveria retorna 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});
