const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(...ids) {
  return ids.map((arr) => species.map((specie) => specie)
    .filter((specie) => specie.id.includes(arr))
    .map((specie2) => specie2)).flat();
}
// console.log(getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46',
// ));
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
