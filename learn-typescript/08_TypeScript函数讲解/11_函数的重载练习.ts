// 实现1.联合类型来实现 
/* function getLength(args: string | any[]) {
  return args.length
}

console.log(getLength("abc"));
console.log(getLength([132, 147, 456])); */

// 实现2.函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;
function getLength(args: any) {
  return args.length
}

console.log(getLength("abc"));
console.log(getLength([132, 147, 456]))