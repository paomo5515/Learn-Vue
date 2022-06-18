class Person {

}

class Student {
  static time: string = "20:00"

  static attendClass(){
    console.log("去学习");
  }
}

console.log(Student.time);
Student.attendClass()
