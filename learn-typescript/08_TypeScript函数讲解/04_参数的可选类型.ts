// 可选类型是 必须写在 必选类型的后面
// y ==> undefined | number
function foo(x: number, y?: number) {

}
foo(12, 23)
foo(12)