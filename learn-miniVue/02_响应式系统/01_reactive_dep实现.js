class Dep {
  constructor() {
    // 订阅者
    this.subscribers = new Set()
  }

  // 
  addEffect(effect) {
    this.subscribers.add(effect)
  }

  // 通知
  notify() {
    /// 拿到所有函数并执行
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

const info = { counter: 10 }

const dep = new Dep()

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter)
dep.addEffect(powerCounter)

info.counter++
dep.notify()