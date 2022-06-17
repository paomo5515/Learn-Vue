// 函数的重载：函数的名称相同，但是 参数不同的 几个函数，就是函数的重载
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

// 实现函数，不能直接被调用
function add(num1: any, num2: any): any {
  return num1 + num2
}

const result1 = add(10, 20)
const result2 = add("abc", "bcd")

// 在函数的重载中，实现函数 是不能直接 被调用的

// add({ name: "heheh" }, 30) // 报错
export { }