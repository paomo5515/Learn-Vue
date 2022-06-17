// 类型断言
const el = document.getElementById("title") as HTMLImageElement

el.src = "url地址"


// 案例： Person 是 Student 的父类
class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)


// 3.了解 
const message = "hello word"

// 尽量不要使用
// const num: number = (message as any) as number
// const num: number = (message as unknown) as number
