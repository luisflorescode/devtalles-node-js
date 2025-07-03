const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8');
const newData = data.replace(/React/g, 'Angular');
fs.writeFileSync(path.join(__dirname, 'README-Angular.md'), newData, 'utf8');
