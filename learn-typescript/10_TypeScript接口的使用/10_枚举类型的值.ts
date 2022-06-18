/**
 * 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型；
 * 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型；
 */
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction) {
  console.log(direction); // 0 1 2 3 
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左");
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右");
      break;
    case Direction.TOP:
      console.log("改变角色的方向向上");
      break;
    case Direction.BOTTOM:
      console.log("改变角色的方向向下");
      break;

    default:
      const foo: never = direction
      break;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)