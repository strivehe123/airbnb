// 01 从路径中获取信息
const path = require('path')
const filepath = __filename
console.log(path.extname(filepath))
console.log(path.basename(filepath))
console.log(path.dirname(filepath));
// 02 将多个路径拼接在一起
const path1 = '/abc/cba';
const path2 = '../why/code/jams.txt'
const path3 = path.join(path1, path2);
console.log(path3);
// 03 将多个路径拼接在一起   返回一个绝对路径
console.log('-------resolve------');
console.log(path.resolve(path1, path2))
console.log(path.resolve())