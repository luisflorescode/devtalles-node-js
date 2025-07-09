const getPokemonById = (id, callback) => {
  const pokeApiUrl = new URL('https://pokeapi.co');
  pokeApiUrl.pathname = `/api/v2/pokemon/${id}`;

  fetch(pokeApiUrl).then((response) => {
    response.json().then((pokemon) => {
      callback && callback(pokemon.name);
    });
  });
};

module.exports = getPokemonById;
