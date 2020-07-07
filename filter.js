const persons = require('./persons');

const filter = persons.filter(item => item.gender === 'M');

module.exports = filter;

