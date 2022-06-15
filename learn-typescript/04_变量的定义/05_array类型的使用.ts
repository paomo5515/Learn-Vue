// 数组中的存放的是什么类型的元素呢？

// 类型注解： type annotation
const names: Array<string> = []  // 写法一：不推荐(react jsx 中是有冲突的)

const names2: string[] = [] // 写法二：推荐

// names.push(13)
names.push("abc")

