const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(...ids) {
  return ids.map((arr) => species.map((specie) => specie)
    .filter((specie) => specie.id.includes(arr))
    .map((specie2) => specie2)).flat();
}
module.exports = getSpeciesByIds;
