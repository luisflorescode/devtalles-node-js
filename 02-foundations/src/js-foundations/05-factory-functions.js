const buildMakePerson = ({ getId, getAge }) => {
  return ({ name, birthday }) => {
    return {
      id: getId(),
      name,
      birthday,
      age: getAge(birthday),
    };
  };
};

module.exports = {
  buildMakePerson,
};
