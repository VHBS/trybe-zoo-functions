const data = require('../data/zoo_data');

const { employees, species } = data;

const semParametro = () => {
  const employers = employees.map((employer) => ({ id: employer.id,
    fullName: `${employer.firstName} ${employer.lastName}`,
    species: species.filter((specie) => employer.responsibleFor.includes(specie.id))
      .map((algo) => algo.name),
    locations: species.filter((specie) => employer.responsibleFor.includes(specie.id))
      .map((algo) => algo.location),
  }));
  return employers;
};

const comParametro = (param) => {
  const [retorno] = semParametro().filter((employer) => employer.fullName.includes(param.name)
  || employer.id.includes(param.id));
  if (retorno !== undefined) {
    return retorno;
  }
  throw new Error('Informações inválidas');
};

console.log(comParametro({ name: 'Sharonda' }));

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return semParametro();
  } if (parametro) {
    return comParametro(parametro);
  }
}

module.exports = getEmployeesCoverage;
