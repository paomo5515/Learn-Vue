function foo() {

}
// 1.函数作为参数时，在参数中如何编写类型
function bar(fn: () => void) {
  fn()
}
bar(foo)

// 2.定义常量时，白那些函数的类型
type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (num1: number, num2: number) => {
  return num1 + num2
}

export { }
