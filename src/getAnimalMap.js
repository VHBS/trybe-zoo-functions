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

const includeNames = () => { // Se o parametro possui incluedName.
  const regioes = Object.keys(notIncludedName());
  const objetoRetornado = { };
  regioes.forEach((regiao) => {
    const regis = species.filter((specie) => specie.location === regiao)
      .reduce((acc, curr) => {
        acc.push(({ [curr.name]: curr.residents.map((nomeAn) => nomeAn.name) }));
        return acc;
      }, []);
    objetoRetornado[regiao] = regis;
  });
  return objetoRetornado;
};

const includeSorted = () => { // Se o parametro possui sex; // mas tem que fazer a verificação do sexo
  const regioes = Object.keys(notIncludedName());
  const objetoRetornado = { };
  regioes.forEach((regiao) => {
    const regis = species.filter((specie) => specie.location === regiao)
      .reduce((acc, curr) => {
        acc.push(({ [curr.name]: curr.residents.map((nomeAn) => nomeAn.name).sort() }));
        return acc;
      }, []);
    objetoRetornado[regiao] = regis;
  });
  return objetoRetornado;
};

const includeSex = (param) => { // Se o parametro possui sex; // mas tem que fazer a verificação do sexo
  const regioes = Object.keys(notIncludedName());
  const objetoRetornado = { };
  regioes.forEach((regiao) => {
    const regis = species.filter((specie) => specie.location === regiao)
      .reduce((acc, curr) => {
        acc.push(({ [curr.name]: curr.residents
          .filter((resident) => resident.sex === param.sex)
          .map((teste) => teste.name).sort(),
        }));
        return acc;
      }, []);
    objetoRetornado[regiao] = regis;
  });
  // return objetoRetornado.NE
  console.log(objetoRetornado.NW);
  return objetoRetornado;
};
// console.log(objetoIncludeSex);
console.log(includeSex({ sex: 'female' }));

function getAnimalMap(options) { // função que chama funções
  // const { includeNames, sorted, sex} = options;
  if (!options || !options.includeNames) {
    return notIncludedName();
  }
  if (includeNames) {
    return includeNames();
  }
  if (options.sorted) {
    return includeSorted();
  }
}
module.exports = getAnimalMap;
