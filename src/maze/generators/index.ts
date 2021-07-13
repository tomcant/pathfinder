import Maze from "../Maze";
import prims from "./prims";
import binaryTree from "./binary-tree";
import random from "./random";

type MazeGenerator = {
  name: string;
  generate: (cols: number, rows: number) => Generator<Maze>;
};

const generators: { [key: string]: MazeGenerator } = { prims, binaryTree, random };

export default generators;
