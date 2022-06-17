class Person {
  // 1.只读属性是 可以在构造器中赋值，赋值之后就不可以修改
  // 2.属性本身不能进行修改，但是如果 它是对象类型，对象中的属性是可以修改的 
  readonly name: string
  age?: number
  readonly friend?: Person
  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person("Hello", new Person("World", { name: "hhhe" }))
console.log(p.name);
console.log(p.friend);

// p.name = "hhh"   只读 不可以直接修改

if (p.friend) {
  p.friend.age = 45
}
console.log(p);

console.log(p.friend); 
// Person { name: 'World', friend: { name: 'hhhe' }, age: 45 }