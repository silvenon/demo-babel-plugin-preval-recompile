// @preval

const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, 'file.md'), 'utf8');
module.exports = content.toString();