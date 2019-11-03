var os = require('os')

console.log(os.cpus());
console.log(os.totalmem() / 1024 / 1024 / 1024+"GB");//获取内存大小并转换成GB单位