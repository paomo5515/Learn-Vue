
// 通过类型(type) 别名来声明对象类型
/* 
type InfoType = { name: string, age: number }
const info: InfoType = {
  name: "hello",
  age: 18
}
 */

// 另外一种方式声明对象类型：接口 interface 规范：前边写 I
interface IInfoType {
  readonly name: string,
  age?: number // 可选属性
}

const info: IInfoType = {
  name: "hello",
  age: 18
}
