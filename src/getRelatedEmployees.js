const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  return employees.some((employer) => employer.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId) === true) {
    return employees.filter((employer) => employer.managers.includes(managerId))
      .reduce((acc, cur) => acc.concat(`${cur.firstName} ${cur.lastName}`), []);
  } if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
