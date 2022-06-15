// number | string 联合类型
function printID(id: number | string) {
  // 使用联合类型的值时，需要特别小心
  if (typeof id === "string") {
    // TS 帮助确定 id 一定是 string 类型
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(1234)
printID("jjjj")

export { }