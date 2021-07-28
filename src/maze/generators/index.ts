import Maze from "../Maze";
import prims from "./prims";
import binaryTree from "./binary-tree";
import depthFirstSearch from "./depth-first-search";
import recursiveDivision from "./recursive-division";
import random from "./random";

type MazeGenerator = {
  name: string;
  generate: (cols: number, rows: number) => Generator<Maze>;
};

const generators: { [key: string]: MazeGenerator } = { prims, binaryTree, recursiveDivision, depthFirstSearch, random };

export default generators;
