// 存在安全隐患
// const info = {
//   name: "info",
//   age: 18
// }

// info.name = "kkk"
type Method = "GET" | "POST"
function request(url: string, method: Method) {

}

// 1.解决方法一
/* type Request = {
  url: string,
  method: Method
}

const options: Request = {
  url: "https://www.baidu.com/abc",
  method: "POST"
} */

// 2.解决方法二 推荐
/* const options = {
  url: "https://www.baidu.com/abc",
  method: "POST"
}

// options.method = "1232" // 存在隐患

request(options.url, options.method as Method) */

// 2.解决方法三
const options = {
  url: "https://www.baidu.com/abc",
  method: "POST"
} as const

// options.method = "1232" // 存在隐患

request(options.url, options.method)


export { }
