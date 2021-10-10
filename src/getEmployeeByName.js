const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = []) {
  const { employees } = data;
  const nome = employeeName;
  const resu = employees.filter((per) => (
    per.firstName === nome || per.lastName === nome ? nome : undefined));
  const [resultado] = resu;
  return resultado !== undefined ? resultado : {};
}

module.exports = getEmployeeByName;
