const fs = require('fs');

if(process.argv.length < 3) {
    console.log('Specify a file to read');
    return;
}

const fileContent = fs.readFileSync(process.argv[2]).toString();
const lines = fileContent.split('\n').length - 1;

console.log(lines);

