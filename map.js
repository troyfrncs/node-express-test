const persons = require('./persons');

const map = persons.map(item => {
  return item.id;
})


module.exports = map;

