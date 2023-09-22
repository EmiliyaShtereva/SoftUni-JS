const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt');

writeStream.write('chunk1 ');
writeStream.write('chunk2 ');
writeStream.write('chunk3 ');
writeStream.write('chunk4');
writeStream.end();
