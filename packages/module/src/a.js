// 代码 1:
// export let x = 1;
// export let y = 2;

// 代码 2:
// let x = 1;
// let y = 2;
// export {
// 	x,
//   y,
// }

// 代码 3
// let a = 1;
// export a;	// 编译报错
// 正确的方式如下
// export let a = 1;

// 代码 4
// let a = 1;
// setInterval(() => {
//   a++
// })
// export {
// 	a
// }

// 代码 5:
// export { a, b } from './b.js';
// export const c = () => {}

// 等价于使用import 先导入，然后再使用 export 导出
// import { a, b } from './b';
// export {
// 	a,
//   b,
// }


