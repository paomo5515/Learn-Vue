function printMEssageLength(message?: string) {
  // message: undefined
  // 使用 if(message)来解决
  // !表示 mesaage 是有值的
  console.log(message!.length);
}

printMEssageLength("hello world")
printMEssageLength("哈哈哈")