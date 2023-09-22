const fs =  require('fs');
const zlib = require('zlib');

const gzib = zlib.createGzip();
const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

readStream.pipe(gzib).pipe(writeStream);
