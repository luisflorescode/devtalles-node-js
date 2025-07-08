const getAgeFunction = require('get-age');

const getAge = (birthday) => {
  if (!birthday) return new Error('Birthday is required');

  return getAgeFunction(birthday);
};

module.exports = {
  getAge,
};
