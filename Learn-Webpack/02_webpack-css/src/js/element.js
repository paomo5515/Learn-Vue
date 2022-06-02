// 内联方式
// import "css-loader!../css/style.css"
import "../css/style.css"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "哈哈哈哈"

document.body.appendChild(divEl)