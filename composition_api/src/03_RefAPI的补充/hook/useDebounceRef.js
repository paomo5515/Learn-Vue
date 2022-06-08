import { customRef } from "vue"
// 自定义 ref
export default function (value) {

  let timer = null
  // track：跟踪 什么时候收集依赖；  trigger：什么时候触发所有依赖
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger()
        }, 1000);
      }
    }
  })
}