// Point: x/y -> 对象类型
// z：可选类型
function printPoint(point: { x: number, y: number, z?: number }) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printPoint({ x: 123, y: 54 })
printPoint({ x: 123, y: 54, z: 154 })

export { }