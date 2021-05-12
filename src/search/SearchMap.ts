import Vec2d from "./utils/Vec2d";

export enum Square {
  Empty,
  Wall,
}

export default class SearchMap {
  private squares: Square[][] = [];

  public constructor(numCols: number, numRows: number) {
    while (numRows--) {
      this.squares.push(Array(numCols).fill(Square.Empty));
    }
  }

  public withSquare(pos: Vec2d, square: Square): SearchMap {
    if (!this.isWithinBounds(pos)) {
      throw new Error(`Out of bounds: ${pos.toString()}`);
    }

    const map = new SearchMap(this.numCols, this.numRows);

    map.squares = this.squares;
    map.squares[pos.y][pos.x] = square;

    return map;
  }

  public isEmpty(pos: Vec2d): boolean {
    return this.squares[pos.y][pos.x] === Square.Empty;
  }

  public getNeighbours(pos: Vec2d): Vec2d[] {
    const neighbours = [];

    const dirs = [
      { dx: 1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: -1 },
    ];

    for (const { dx, dy } of dirs) {
      const neighbour = pos.add(new Vec2d(dx, dy));

      if (!this.isWithinBounds(neighbour)) {
        continue;
      }

      if (this.isEmpty(neighbour)) {
        neighbours.push(neighbour);
      }
    }

    return neighbours;
  }

  private isWithinBounds(pos: Vec2d): boolean {
    return pos.x >= 0 && pos.y >= 0 && pos.x < this.numCols && pos.y < this.numRows;
  }

  public get numCols(): number {
    return this.squares[0].length;
  }

  public get numRows(): number {
    return this.squares.length;
  }
}
