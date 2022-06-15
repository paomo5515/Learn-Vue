// 1.类型注解
// 2.var/let/const
// 3.string和String 的区别
// 4.类型推导
var name: string = "hello"
let age: number = 18
const height: number = 1.88

// 小写 string：TS中的字符串类型
// 大写 String：JS中的字符串 包装类的类型
const message: string = "hello message"


// 默认情况下进行赋值时，会将赋值的值的 类型，作为前面标识符的类型
// 这个过程称之为 类型推导/推断
// foo 没有添加类型注解，
let foo = "foo"
// foo = 123

export { }