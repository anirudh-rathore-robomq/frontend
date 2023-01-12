const os = require('os');

let totalMemory = (os.totalmem())
console.log(os.freemem()/1024/1024/1024)

console.log(`Total memory: ${totalMemory/1024/1024/1024}`)
console.log(os.platform() , " " , os.arch() , " ",os.cpus() , " ", os.hostname()) 
console.log(os.homedir())
console.log("New line added to test nodemon")