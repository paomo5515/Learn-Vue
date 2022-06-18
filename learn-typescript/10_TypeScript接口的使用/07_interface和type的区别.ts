/**
 * 建议使用 interface
 */

// 允许定义相同 名字的接口
interface IFoo {
  name: string
}

interface IFoo {
  age: number
}

const foo: IFoo = {
  name: "hello",
  age: 19
}

document.getElementById("app") as HTMLDivElement
window.addEventListener

interface Window {
  age: number
}
// 给 window 添加一个 age 属性
console.log(window.age);

// type 不能定义重复的 别名