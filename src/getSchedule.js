const data = require('../data/zoo_data');

const { hours, species } = data;

const todosOsDiasDaSemana = () => Object.keys(hours).reduce((acc, curr) => {
  acc[curr] = {
    officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes(curr))
      .map((exibido) => exibido.name) };
  // Airton/Thales sabe muito, iria fazer uma condição, mas declarando o valor para esta chave é mais direto ao ponto e legível.
  acc.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return acc;
},
{});

const porNome = (param) => species.find((specie) => specie.name === param).availability;

const testeComParametro = (param) => {
  if (!param) {
    return todosOsDiasDaSemana();
  } if (Object.keys(hours).includes(param)) {
    return { [param]: todosOsDiasDaSemana()[param] };
  }
  return todosOsDiasDaSemana();
};

function getSchedule(scheduleTarget) {
  if (species.map((specie) => specie.name).includes(scheduleTarget)) {
    return porNome(scheduleTarget);
  }
  return testeComParametro(scheduleTarget);
}

module.exports = getSchedule;
