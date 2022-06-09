import { ref, watch } from "vue"
export default function (key, value) {
  const data = ref(value)

  if (value) {
    // 设置值
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    // 获取值
    data.value = JSON.parse(window.localStorage.getItem(key))
  }

  watch(data, (newValue) => {
    // 保存值
    window.localStorage.setItem(key, JSON.stringify(newValue))
  })

  return data
}

// 一个参数：取值
// useLocalStorage("name")

// // 二个参数：保存值
// const data = useLocalStorage("name", "hello word")
// data.value = "jerry"
