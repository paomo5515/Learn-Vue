function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
  return fn(n1, n2)
}
// fn: (num1: number, num2: number) => number 是必写的