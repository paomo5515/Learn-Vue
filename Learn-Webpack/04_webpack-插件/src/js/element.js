// 内联方式
// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/title.less"
import "../css/image.css"
import "../font/iconfont.css"

import image1 from "../img/../img/微信图片_20201123163803.png" 

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "哈哈哈哈"

// 设置背景图片
const bgDivEl = document.createElement("div")
bgDivEl.className = "image-bg"

// 设置 img元素的src
const imgEl = document.createElement("img")
imgEl.src = image1

// i 元素
const iEl = document.createElement("i")
iEl.className = "iconfont icon-ashbin"


document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)
