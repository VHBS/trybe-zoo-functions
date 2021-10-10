const data = require('../data/zoo_data');

function countEntrants(param) {
  if (!param) {
    return 0;
  }
  if (param.length === 0) {
    return 0;
  }
  if (Object.keys(param).length === 0) {
    return 0;
  }
  if (param) {
    const objetoRetornado = { child: 0, adult: 0, senior: 0 };
    objetoRetornado.child = param.filter((pessoa) => pessoa.age < 18).length;
    objetoRetornado.adult = param.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length;
    objetoRetornado.senior = param.filter((pessoa) => pessoa.age >= 50).length;
    return objetoRetornado;
  }
}

function calculateEntry(param) {
  if (!param) {
    return 0;
  }
  if (param.length === 0) {
    return 0;
  }
  if (Object.keys(param).length === 0) {
    return 0;
  }
  if (param) {
    const objetoFunc = countEntrants(param);
    let objContagem = 0;
    objContagem += objetoFunc.child * 20.99;
    objContagem += objetoFunc.adult * 49.99;
    objContagem += objetoFunc.senior * 24.99;
    return objContagem;
  }
}

module.exports = { calculateEntry, countEntrants };
