const message: string = "hello typescript"

function foo(payload:string) {
  console.log(payload.length);
}

// foo(123) // 编译就会报错
foo("aaa")