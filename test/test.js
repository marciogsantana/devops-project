const assert = require('assert');
const somar = require('../Backend/SomarNumeros');

describe('Função somar', () => {
  it('deve retornar a soma de dois números', () => {
    assert.equal(somar(2, 3), 5);
  });
});