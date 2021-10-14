const data = require('../data/zoo_data');

const { species } = data;

const valorBase = () => { // !options || sem opção incluedNames.
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

const includeNamesTrue = () => { // Se o parametro possui incluedName.
  const regioes = Object.keys(valorBase());
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

const verificaEAplica = (param) => {
  if (!param || !param.includeNames) {
    return valorBase(); // aqui eu chamo sem parametro
  }
  if (param.includeNames && param.sorted) {
    const regioes = Object.keys(valorBase());
    const objetoRetornado = { };
    regioes.forEach((regiao) => {
      const regis = species.filter((specie) => specie.location === regiao)
        .reduce((acc, curr) => {
          acc.push(({ [curr.name]: curr.residents.map((nomeAn) => nomeAn.name).sort() }));
          return acc;
        }, []);
      objetoRetornado[regiao] = regis;
    });
    return objetoRetornado; // se o param tem includeNames e sorted
  }
  return includeNamesTrue(); // aqui retorna Se o parametro possui incluedName.
};

const includeSexSorted = (param) => {
  const regioes = Object.keys(valorBase());
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
  return objetoRetornado;
};

const includeSex = (param) => { // Se o parametro possui sex
  const regioes = Object.keys(valorBase());
  const objetoRetornado = { };
  if (param.sorted) {
    return includeSexSorted(param);
  }
  regioes.forEach((regiao) => {
    const regis = species.filter((specie) => specie.location === regiao)
      .reduce((acc, curr) => {
        acc.push(({ [curr.name]: curr.residents
          .filter((resident) => resident.sex === param.sex)
          .map((teste) => teste.name),
        }));
        return acc;
      }, []);
    objetoRetornado[regiao] = regis;
  });
  return objetoRetornado;// ta sim, se liga eu testei agora, sei lá to tiltado
};

console.log(includeSex({ sex: 'female', sorted: true }));

function getAnimalMap(options) {
  if (!options) {
    return valorBase();
  }
  if (options.includeNames && options.sex) {
    if (options.sorted) {
      return includeSex(options);
    }
    return includeSex(options);
  }
  return verificaEAplica(options);
}

module.exports = getAnimalMap;
