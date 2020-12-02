// 代码 1:
// import {x, y} from './a.js';
// console.log(x, y);  // 1, 2

// 代码 2:
// import { a } from './a.js';
// setInterval(() => {
//   console.log(a)
// }, 1000)

// 代码 3:
// console.log(a)
// import { a } from './a.js';
// a = 100;	// 这样赋值是错误的

// 代码 4:
// export {a, b, c} from './a.js'

import content from './content.md';
console.log('content', content);

