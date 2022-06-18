class Point<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p1 = new Point("1.32", "4.56", "6.23")
const p2 = new Point<string>("1.32", "4.56", "6.23")
const p3: Point<string> = new Point<string>("1.32", "4.56", "6.23")

const names1: string[] = ["a", "b", "c"]
const names2: Array<string> = ["a", "b", "c"]  // 不推荐 (react jsx)

export { }