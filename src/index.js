// @flow
class Shape {
  constructor({height, width}) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Shape {
  static area(n: number): number {
    return n * n;
  }
}

console.log(Square.area(12));
