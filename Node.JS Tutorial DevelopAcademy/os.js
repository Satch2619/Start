let os = require('os');

let bytes = os.totalmem();
let kbytes = bytes / 1000;
let mbytes = kbytes / 1000;
let gbytes = mbytes / 1000;

let gbytesRound = Math.round(gbytes);

console.log('Total workmemory: ' + gbytesRound + ' Gigabytes');
