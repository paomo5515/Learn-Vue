class Person {
  name: string = "213"

  eating() {

  }
}

const p = new Person()

// 必须和 类中的属性保持一致
const p1: Person = {
  name: "hello",
  eating() {

  }
}

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person())
printPerson({ name: "www", eating() { } })

export { }
