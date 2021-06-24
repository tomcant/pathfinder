import Maze from "../Maze";
import random from "./random";

type MazeGenerator = {
  name: string;
  generate: (cols: number, rows: number) => Maze;
};

const generators: { [key: string]: MazeGenerator } = { random };

export default generators;
