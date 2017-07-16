const preval = require('babel-plugin-preval/macro');

const result = preval`
  const fs = require('fs');
  const path = require('path');
  const content = fs.readFileSync(path.join(__dirname, 'file.md'), 'utf8');
  module.exports = content.toString();
`;

console.log(result);