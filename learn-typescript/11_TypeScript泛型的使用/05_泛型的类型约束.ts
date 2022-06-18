interface ILength {
  length: number
}
function getLength<T extends ILength>(args: T) {
  return args.length
}

// getLength(123)  // 报错
getLength("abc")
getLength(["a", "b"])
getLength({ length: 100 })