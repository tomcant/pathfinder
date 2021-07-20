import Maze from "../Maze";
import prims from "./prims";
import binaryTree from "./binary-tree";
import depthFirstSearch from "./depth-first-search";
import random from "./random";

type MazeGenerator = {
  name: string;
  generate: (cols: number, rows: number) => Generator<Maze>;
};

const generators: { [key: string]: MazeGenerator } = { prims, binaryTree, depthFirstSearch, random };

export default generators;
