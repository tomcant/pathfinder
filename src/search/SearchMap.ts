import Vec2d from "./utils/Vec2d";

export default class SearchMap {
  private walls = new Set<string>();

  public constructor(readonly numCols: number, readonly numRows: number) {}

  public toggleWall(pos: Vec2d): SearchMap {
    if (!this.isWithinBounds(pos)) {
      throw new Error(`Out of bounds: ${pos.toString()}`);
    }

    const map = new SearchMap(this.numCols, this.numRows);
    map.walls = new Set([...this.walls]);

    if (map.isWall(pos)) {
      map.walls.delete(pos.toString());
    } else {
      map.walls.add(pos.toString());
    }

    return map;
  }

  public isWall(pos: Vec2d): boolean {
    return this.walls.has(pos.toString());
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

      if (!this.isWall(neighbour)) {
        neighbours.push(neighbour);
      }
    }

    return neighbours;
  }

  private isWithinBounds(pos: Vec2d): boolean {
    return pos.x >= 0 && pos.y >= 0 && pos.x < this.numCols && pos.y < this.numRows;
  }
}
