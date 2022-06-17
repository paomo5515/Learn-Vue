class Person {
  name: string
  age: number

  // 通过 neww 就会执行 constructor
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(this.name + "eating");
  }
}
const p = new Person("hello", 18)
console.log(p.name);
console.log(p.age);

export { }