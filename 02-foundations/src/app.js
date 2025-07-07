console.log('01-template.js');
const { emailTemplate } = require('./js-foundations/01-template.js');
console.log(emailTemplate);

console.log('02-destructuring.js');
require('./js-foundations/02-destructuring.js');

console.log('03-callbacks.js');
const { getUserById } = require('./js-foundations/03-callbacks.js');
getUserById(3, function (error, user) {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});
