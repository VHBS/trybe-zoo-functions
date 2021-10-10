const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(...ids) {
  const arrIds = [...ids];
  return arrIds.map((arr) => species.map((specie) => specie)
    .filter((specie) => specie.id.includes(arr))
    .map((specie2) => specie2.name)).flat();
}

module.exports = getSpeciesByIds;
