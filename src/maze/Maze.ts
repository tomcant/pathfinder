import Vec2d from "../utils/Vec2d";

export default class Maze {
  private walls = new Set<string>();

  public constructor(readonly numCols: number, readonly numRows: number) {}

  public toggleWall(pos: Vec2d): Maze {
    if (!this.isWithinBounds(pos)) {
      throw new Error(`Out of bounds: ${pos.toString()}`);
    }

    const maze = new Maze(this.numCols, this.numRows);
    maze.walls = new Set([...this.walls]);

    if (maze.isWall(pos)) {
      maze.walls.delete(pos.toString());
    } else {
      maze.walls.add(pos.toString());
    }

    return maze;
  }

  public isWall(pos: Vec2d): boolean {
    return this.walls.has(pos.toString());
  }

  public isWithinBounds(pos: Vec2d): boolean {
    return pos.x >= 0 && pos.y >= 0 && pos.x < this.numCols && pos.y < this.numRows;
  }
}
