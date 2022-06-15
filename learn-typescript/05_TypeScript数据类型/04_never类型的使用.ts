function foo(): never {
  // 死循环
  while (true) {

  }
}

function bar(): never {
  throw new Error()
}

// 封装一个核心函数
function handleMessage(message: string | number) {
  switch (typeof message) {
    case "string":
      console.log("string 处理方式处理message");
      break;

    case "number":
      console.log("number 处理方式处理message");
      break;
    default:
      //  永远不可能出现的 赋值
      const check: never = message
      break;
  }
}
handleMessage("abc")
handleMessage(1232)

// 防止 给函数后边添加 boolean 类型 ( |boolean)
handleMessage(true)

export { }