import Vec2d from "../utils/Vec2d";
import Set from "../utils/CompoundSet";
import Map from "../utils/CompoundMap";

export default class Maze {
  private walls = new Set<Vec2d>();
  private weights = new Map<Vec2d, number>();

  private constructor(readonly numCols: number, readonly numRows: number) {}

  public static empty(numCols: number, numRows: number): Maze {
    return new Maze(numCols, numRows);
  }

  public static full(numCols: number, numRows: number): Maze {
    const walls = [];

    for (let row = 0; row < numRows; ++row) {
      for (let col = 0; col < numCols; ++col) {
        walls.push(new Vec2d(col, row));
      }
    }

    return Maze.empty(numCols, numRows).toggleWalls(walls);
  }

  public isEmpty(pos: Vec2d): boolean {
    return !this.isWall(pos) && !this.isWeight(pos);
  }

  public isWall(pos: Vec2d): boolean {
    return this.walls.has(pos);
  }

  public toggleWall(pos: Vec2d): Maze {
    return this.toggleWalls([pos]);
  }

  public toggleWalls(positions: Vec2d[]): Maze {
    const maze = this.clone();

    for (const pos of positions) {
      if (!this.isWithinBounds(pos)) {
        throw new Error(`Out of bounds: ${pos.toString()}`);
      }

      if (maze.isWall(pos)) {
        maze.walls.delete(pos);
      } else {
        maze.walls.add(pos);
      }
    }

    return maze;
  }

  public isWeight(pos: Vec2d): boolean {
    return this.weights.has(pos);
  }

  public getWeight(pos: Vec2d): number | undefined {
    return this.weights.get(pos);
  }

  public setWeight(pos: Vec2d, weight: number): Maze {
    const maze = this.clone();
    maze.weights.set(pos, weight);
    maze.walls.delete(pos);
    return maze;
  }

  public removeWeight(pos: Vec2d): Maze {
    const maze = this.clone();
    maze.weights.delete(pos);
    return maze;
  }

  public clearWeights(): Maze {
    const maze = this.clone();
    maze.weights = new Map<Vec2d, number>();
    return maze;
  }

  public isWithinBounds(pos: Vec2d): boolean {
    return pos.x >= 0 && pos.y >= 0 && pos.x < this.numCols && pos.y < this.numRows;
  }

  private clone(): Maze {
    const maze = Maze.empty(this.numCols, this.numRows);
    maze.walls = new Set([...this.walls]);
    maze.weights = new Map([...this.weights]);
    return maze;
  }
}
