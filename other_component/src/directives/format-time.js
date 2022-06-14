import dayjs from "dayjs"
export default function (app) {
  app.directive("format-time", {
    mounted(el, bindings) {
      bindings.formatString = "YYYY-MM-DD HH:mm:ss"
      if (bindings.value) {
        bindings.formatString = bindings.value
      }
      const textContent = el.textContent
      // console.log(textContent); //字符串

      let timestamp = parseInt(textContent)
      // 如果是十位 则为 秒钟
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      // 传入毫秒  HH表示24小时
      el.textContent = dayjs(timestamp).format(bindings.formatString)
      // npm i dayjs
    }
  })
}