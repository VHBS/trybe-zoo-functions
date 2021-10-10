const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.filter((specie) => specie.name.includes(animal))
    .map((animais) => animais.residents).flat()
    .every((objAnimal) => objAnimal.age > age);
}

module.exports = getAnimalsOlderThan;
