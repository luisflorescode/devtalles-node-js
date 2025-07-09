console.log('01-template');
const { emailTemplate } = require('./js-foundations/01-template');
console.log(emailTemplate);

console.log('02-destructuring.js');
require('./js-foundations/02-destructuring.js');

console.log('03-callbacks.js');
const { getUserById } = require('./js-foundations/03-callbacks');
getUserById(1, function (error, user) {
  if (error) throw new Error(error);

  console.log(user);
});

console.log('04-callbacks');
const {
  getUserById: arrowGetUserById,
} = require('./js-foundations/04-arrow-functions');
arrowGetUserById(2, (error, user) => {
  if (error) throw new Error(error);

  console.log(user);
});

console.log('05-factory-functions');
const { getAge, getId } = require('./plugins');
const { buildMakePerson } = require('./js-foundations/05-factory-functions');
const makePerson = buildMakePerson({ getId, getAge });
const person = makePerson({
  name: 'John Doe',
  birthday: '1993-01-09',
});
console.log(person);

console.log('06-promises');
const getPokemonById = require('./js-foundations/06-promises');
getPokemonById(1, (pokemonName) => {
  console.log(pokemonName);
});
