const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    const objetoNovo = {};
    species.forEach((specie) => {
      objetoNovo[specie.name] = specie.residents.length;
    });
    return objetoNovo;
  } if (!animal.sex) {
    const [anSpecie] = species.filter((specie) => specie.name === animal.specie)
      .map((population) => population.residents.length);
    return anSpecie;
  }
  if (animal.sex) {
    const [teste] = species.filter((specie) => specie.name === animal.specie);
    return teste.residents.filter((sexo) => sexo.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
