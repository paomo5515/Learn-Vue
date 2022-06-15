// 让一个参数本身是可选的
function foo(message?: string) {
  console.log(message);
}

// 一个参数是一个可选类型的时候，他其实类似于是这个参数的类型是  类型 | undefined 的联合类型
// function foo(message: string | undefined)
foo()
foo(undefined)
