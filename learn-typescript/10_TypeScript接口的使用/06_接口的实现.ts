interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现接口
class Animal {

}

// 继承：只能实现单继承，
// 实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("fish Swimming");
  }
  eating() {
    console.log("fish Eating");
  }
}

class Person implements ISwim {
  swimming() {
    console.log("Person Swimming");
  }
}

// 编写一些公共的API：面向接口编程
function swimAction(swimable: ISwim) {

}

// 1.所有实现了 接口的类对应的对象，都可以传入
swimAction(new Fish())
swimAction(new Person())

swimAction({ swimming: function () { } })
