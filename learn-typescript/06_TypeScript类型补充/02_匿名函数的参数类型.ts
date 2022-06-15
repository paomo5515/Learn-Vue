// 通常情况下，在定义一个函数时，都会给参数加上类型注解
function foo(message: string) {

}

const names = ["aaa", "bbb", "ccc"]
// item 可以不写类型注解
// item 根据上下文的环境推导出来的，
names.forEach(function (item) {
  console.log(item.split(""));
})