class Person {
  // public 默认修饰符，在任何地方可见、公有的属性或方法，默认编写的属性就是 public的
  // public name: string = ""

  // private 修饰符 仅在同一类中可见、私有的属性或方法
  private name: string = ""

  getName() {
    return this.name
  }
}

const p = new Person()

// console.log(p.name);
console.log(p.getName());

export { }