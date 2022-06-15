function foo() {
  return "aaa"
}

function bar() {
  return 123
}

// unknown 类型只能赋值给 any 和 unknown类型
// any 可以赋值给任意类型
let flag = true

let result: unknown;
if (flag) {
  result = foo()
} else {
  result = bar()
}

console.log(result);