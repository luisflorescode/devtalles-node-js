const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
const words = content.split(' ');
const reactWordCount = content.match(/react/gi)?.length || 0;

console.log(`Total words in README.md: ${words.length}.`);
console.log(`The word "React" appears ${reactWordCount} times in README.md.`);
