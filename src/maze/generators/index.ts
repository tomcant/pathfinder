import Maze from "../Maze";
import binaryTree from "./binary-tree";
import random from "./random";

type MazeGenerator = {
  name: string;
  generate: (cols: number, rows: number) => Maze;
};

const generators: { [key: string]: MazeGenerator } = { binaryTree, random };

export default generators;
