const persons = require('./persons');

const reduce = persons.reduce((acc, item) => item.age + acc, 0)

module.exports = reduce;

