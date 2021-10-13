const data = require('../data/zoo_data');

function getEmployeesCoverage(parametro) {
  const { employees } = data;
  if (!parametro) {
    return employees.map((employer) => employer)
      .reduce((acc, curr) =>      acc.push(curr), []);
  }
}

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
