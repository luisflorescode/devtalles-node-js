const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });

const characters = ['Luke Skywalker', 'Leia Organa', 'Han Solo', 'Darth Vader'];
const [luke, , , vader] = characters;
console.log(luke, vader);
