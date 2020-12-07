// 代码 1
let a = 1;
let b = 2;
export {
	a,
  b,
}

const path = require('path');
console.log(path.join(__dirname, '/aaa'))
console.log(path.resolve(__dirname, 'aaa/bbb'))