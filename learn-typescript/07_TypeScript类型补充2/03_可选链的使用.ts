type Person = {
  name: string,
  frined?: {
    name: string,
    age?: number
  }
}

const info: Person = {
  name: "hello",
  frined: {
    name: "world"
  }
}

// 另外一个文件中
console.log(info.name);
console.log(info.frined?.name);
console.log(info.frined?.age);

