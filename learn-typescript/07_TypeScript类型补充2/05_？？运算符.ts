let mesaage: string | null = null
// let mesaage: string | null = "hhhh"

const content = mesaage ?? "你好啊，哈哈哈"
console.log(content);  // 如果为 null 或者为 undefined 时 会使用 ?? 后边的值