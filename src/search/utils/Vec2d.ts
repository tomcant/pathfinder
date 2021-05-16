export default class Vec2d {
  constructor(readonly x: number, readonly y: number) {}

  public add(v: Vec2d): Vec2d {
    return new Vec2d(this.x + v.x, this.y + v.y);
  }

  public equals(v: Vec2d): boolean {
    return this.x === v.x && this.y === v.y;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public static random(maxX: number, maxY: number): Vec2d {
    return new Vec2d(Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY));
  }
}
