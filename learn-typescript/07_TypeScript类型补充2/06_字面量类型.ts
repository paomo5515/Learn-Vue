// "hello world"也是可以作为类型的，叫做 字面量类型
const message: "hello world" = "hello world"

let num: 123 = 123
// num = 234  不能赋值

// 字面量类型的意义，就是必须结合 联合类型
type Alignment = "left" | "right" | "center"
let align: Alignment = "left"
align = "right"


export { }