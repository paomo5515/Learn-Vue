class Animal {
  action() {
    console.log("animal action");
  }
}

class Dog extends Animal {
  action() {
    console.log("dog runnimg~~~");
  }
}

class Fish extends Animal {
  action() {
    console.log("fish runnimg");
  }
}
// 多态前提：父类引用（类型）指向子类对象
// const animal1: Animal = new Dog()
// animal1.action()
// 执行相同的方法，结果是不同的
// 多态的目的是为了 写出更加具备 通用性的代码

function makeAction(animals: Animal[]) {
  animals.forEach(animal => {
    animal.action()
  })
}

makeAction([new Dog(), new Fish])
// dog runnimg~~~
// fish runnimg
