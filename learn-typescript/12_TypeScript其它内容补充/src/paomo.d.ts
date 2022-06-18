// lodash 库声明文件
declare module "lodash" {
  export function join(arr: any[]): void
}

// 声明变量/函数/类    
// 在 index.html script let pmName = "paomo"
declare let pmName: string
declare let pmAge: number

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 声明文件
declare module "*.jpg"

declare namespace $ {
  export function ajax(setting: any): any
}