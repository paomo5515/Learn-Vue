
// 类型的参数化
// 在定义这个函数时，我不决定这些参数的类型
// 而是让 调用者以 参数的形式告知，我这里的 函数参数应该是什么类型
function sum<Type>(num: Type): Type {
  return num
}

// 调用方式一：明确传入类型
sum<number>(20)
sum<{ name: string }>({ name: "hello" })
sum<any[]>(["abc"])

// 2.调用方式二：类型推导
sum(54)
sum("aaa")


