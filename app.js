const express = require('express');
const app = express();
const map = require('./map');
const filter = require('./filter');
const reduce = require('./reduce');
const persons = require('./persons');

app.use(express.json());

// Map, Filter and Reduce Array
console.log(map)
console.log(filter)
console.log(reduce)

// Get Function
app.get('/api/persons', (req, res) => {
  res.send(persons);
});

// Post Function
app.post('/api/persons', (req, res) => {
  const person = {id: persons.length++, ...req.body}
  persons.push(person)
  res.send(person);
});

// Put Function
app.put('/api/persons/:id', (req, res) => {
  const person = persons.find(i => i.id === parseInt(req.params.id));
  person.age = req.body.age;
  person.gender = req.body.gender;

  res.send(person);
});

// Delete Function
app.delete('/api/persons/:id', (req, res) => {
  const person = persons.find(i => i.id === parseInt(req.params.id));
  const index = persons.indexOf(person);
  persons.splice(index, 1);

  res.send(person);
});

// Ports
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`) )

// Promise

const promise = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a === 2) {
    setTimeout(() => {
      resolve('Success')
    }, 3000)
  } else {
    reject('Failed')
  }
})

promise.then((message) => {
  console.log(`Promise Status: ${message}`)
}).catch((message) => {
  console.log(`Promise Status: ${message}`)
})

console.log('hello', window.location.pathname);