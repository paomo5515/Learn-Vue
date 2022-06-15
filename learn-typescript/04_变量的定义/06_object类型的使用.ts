const info = {
  name: "info",
  age: 18
}

// 不推荐
const info2: object = {
  name: "info2",
  age: 15
}

// 编译的时候 报错
// console.log(info2.name);