const data = require('../data/zoo_data');

const { species } = data;
const notIncludedName = () => { // !options || sem opção incluedNames.
  const objetoRetornado = { };
  objetoRetornado.NE = species.filter((specie) => specie.location === 'NE')
    .map((mapNe) => mapNe.name);
  objetoRetornado.NW = species.filter((specie) => specie.location === 'NW')
    .map((mapNw) => mapNw.name);
  objetoRetornado.SE = species.filter((specie) => specie.location === 'SE')
    .map((mapSe) => mapSe.name);
  objetoRetornado.SW = species.filter((specie) => specie.location === 'SW')
    .map((mapSw) => mapSw.name);
  return objetoRetornado;
};

const includeNames = () => {
  const objetoRetornado = { };
  const ne = species.filter((specie) => specie.location === 'NE')
    .map((mapNe) => mapNe.name); // aqui to recebendo só o nome das espécies
    // .reduce((acc, curr) => acc[curr] = species.filter((specie) => specie.name === curr)
    //   .map((specie) => specie.residents.name), {});

  // objetoRetornado.NW = species.filter((specie) => specie.location === 'NW')
  //   .map((mapNw) => mapNw.name);
  // objetoRetornado.SE = species.filter((specie) => specie.location === 'SE')
  //   .map((mapSe) => mapSe.name);
  // objetoRetornado.SW = species.filter((specie) => specie.location === 'SW')
  //   .map((mapSw) => mapSw.name);
  console.log(ne);
  objetoRetornado.NE = ne;
  return objetoRetornado;
};

console.log(includeNames());
// console.log(getAnimalMap());
// console.log(getAnimalMap({ sex: 'female' }));

// const incluidedSex = (options) => {
//   console.log(options.sex);
//   return species.map((specie) => specie)
//     .map((resident) => resident.residents).flat()
//     .filter((resident) => resident.sex === options.sex);
// };
// console.log(incluidedSex());
// console.log(incluidedSex({ sex: 'female' }));

function getAnimalMap(options) { // função que chama funções
  if (!options) {
    return notIncludedName();
  }
  if (options.sex) {
    return notIncludedName();
  }
  if (options.includeNames === true) {

  }
}
// console.log(includeNames());

module.exports = getAnimalMap;
