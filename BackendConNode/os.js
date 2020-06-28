const os = require('os');
console.log('CPU information:', os.cpus());
//console.log('IP Adrress', os.networkInterfaces().Wi - Fi.map((i) => i.address));

console.log('Free memoy', os.freemem);
console.log('OS TYPE', os.type());
console.log('SO version', os.release());
console.log('User info', os.userInfo());
