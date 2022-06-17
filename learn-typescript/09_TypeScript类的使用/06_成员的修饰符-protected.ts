// proteced：在类内部和子类中可以访问
class Person {

  protected name: string = "hahha"
}

class Student extends Person {
  getName() {
    return this.name
  }
}

const stu = new Student()

// console.log(stu.name); // 不能访问
console.log(stu.getName());

export { } 