const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const [primeiroAnimal] = employees.filter((employer) => employer.id === id).flat()
    .map((objeto) => objeto.responsibleFor[0]);
  const objetoRetornado = species.filter((specie) => specie.id === primeiroAnimal)
    .map((animal) => animal.residents).flat()
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr))
  return Object.values(objetoRetornado);
}

module.exports = getOldestFromFirstSpecies;
