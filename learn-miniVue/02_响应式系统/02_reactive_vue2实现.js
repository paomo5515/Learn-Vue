class Dep {
  constructor() {
    // 订阅者
    this.subscribers = new Set()
  }

  // 依赖
  depend() {
    if (activeEffect) {
      // console.log("activeEffect", activeEffect);
      // 添加依赖的属性
      this.subscribers.add(activeEffect)
    }
  }

  // 通知
  notify() {
    /// 拿到所有函数并执行
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}
const aa = new Dep()
console.log("aaa", aa);
let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect

  // 在第一次就先执行一次
  effect()
  activeEffect = null
}

const targetMap = new WeakMap()
function getDep(target, key) {
  // 1.根据 target对象取出对应的 Map 对象
  let depMap = targetMap.get(target)
  if (!depMap) {
    depMap = new Map()

    targetMap.set(target, depMap)
  }

  // 2.取出具体的 dep对象
  let dep = depMap.get(key)

  if (!dep) {
    dep = new Dep()
    depMap.set(key, dep)
  }
  return dep;
}

// vue2对 row 进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    // console.log("reactive", key, "====", raw); // counter name height: ;
    const dep = getDep(raw, key)
    console.log("dep", dep);
    let value = raw[key]
    // 劫持所有的 key
    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue
          dep.notify()
        }
      }
    })
  })
  return raw
}

// 19-0.46.25

const info = reactive({ counter: 10, name: "hello" })
const foo = reactive({ height: 1.88 })
// console.log("----info", info);


// watchEffect-1
watchEffect(function doubleCounter() {
  console.log("effect-1", info.counter * 2, info.name);
})

// watchEffect-2
watchEffect(function powerCounter() {
  console.log("effect-2", info.counter * info.counter);
})

// watchEffect-3
watchEffect(function powerCounter() {
  console.log("effect-3", info.counter * 10, info.name);
})

// watchEffect-4
watchEffect(function () {
  console.log("effect-4", foo.height);
})

// info.counter++

info.name = "hello"