class Person {
  // 私有属性 需要些 下划线 _
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  // 访问器 setter/getter
  // 不是函数，是一个访问器
  set name(newName) {
    this._name = newName
  }

  get name (){
    return this._name
  }
}

const p = new Person("hhahha")
p.name = "qqq"
console.log(p.name);


export { }