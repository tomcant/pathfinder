import { random } from "./random";

export default class Vec2d {
  constructor(readonly x: number, readonly y: number) {}

  public add(v: Vec2d): Vec2d {
    return new Vec2d(this.x + v.x, this.y + v.y);
  }

  public equals(v: Vec2d): boolean {
    return this.x === v.x && this.y === v.y;
  }

  public toString(): VecStr {
    return `(${this.x}, ${this.y})`;
  }

  public static origin(): Vec2d {
    return new Vec2d(0, 0);
  }

  public static random(from: Vec2d, to: Vec2d): Vec2d {
    return new Vec2d(from.x + random(to.x - from.x), from.y + random(to.y - from.y));
  }
}

export type VecStr = string;
