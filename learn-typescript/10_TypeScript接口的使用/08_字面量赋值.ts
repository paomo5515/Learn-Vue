interface IPerson {
  name: string
  age: number
  height: number
}

const info = {
  name: "hello",
  age: 19,
  height: 1.88,
  adress: "上海市"
}

// 报错
// const p: IPerson = {
//   name: "hello",
//   age: 19,
//   height: 1.88,
//   adress: "上海市" // 不包括 adress
// }

// 属性的擦除
// 擦除掉多余的属性 仍然满足 接口 都是可以进行赋值的，少接口里面的任何一个 属性都是 不行的
const p: IPerson = info  // 把对象的引用 赋值过来了

console.log(info);
console.log(p);


function printInfo(person: IPerson) {
  console.log(person); // 不能取 adress
}

// 代码报错
// printInfo({
//   name: "hello",
//   age: 19,
//   height: 1.88,
//   adress: "上海市"
// })

printInfo(info)
