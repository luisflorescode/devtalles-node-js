const { v4: uuidV4 } = require('uuid');

const getId = () => uuidV4();

module.exports = {
  getId,
};
