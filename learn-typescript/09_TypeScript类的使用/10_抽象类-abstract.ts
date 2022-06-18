/**
 * 继承是多态的前提
 *  所以在定义很多通用的 调用接口时，我们通常会让调用者传入父类，通过多态来实现更加灵活的调用方式。
 *  但是，父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法，我们可以定义为抽象方法。
 */
function makeArea(shape: Shape) {
  return shape.getArea()
}

abstract class Shape {
  // 抽象函数，可以没有函数体，要求子类必须实现 抽象方法
  abstract getArea()
}

// 矩形
class Rectangle extends Shape {
  private width: number
  private height: number
  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }
}

// 圆形
class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle));
console.log(makeArea(circle));


// 抽象类不能被 实例化
// makeArea(new Shape())

// makeArea("123")  报错
// makeArea(123)  报错

