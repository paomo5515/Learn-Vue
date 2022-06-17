class Person {
  name: string
  age: number
  constructor(name: string, age: number,) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log("eating");
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    // 调用父类的构造器
    super(name, age)
    this.sno = sno
  }
  studying() {
    console.log("studying");
  }
  eating() {
    super.eating()  // 执行父类 里面的方法
    console.log("Student eating");
  }
}

// class Teacher extends Person {
//   title: string = ""

//   teaching() {
//     console.log("teaching");
//   }
// }

const stu = new Student("hello", 18, 111)
console.log(stu.name);
console.log(stu.age);
console.log(stu.sno);
stu.eating()

export { }
