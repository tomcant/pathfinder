import { SearchNode, SearchParams, SearchState } from "../";
import breadthFirstSearch from "./breadth-first-search";
import biDirectionalBfs from "./bidirectional-bfs";
import greedBestFirstSearch from "./greedy-best-first-search";
import depthFirstSearch from "./depth-first-search";
import Vec2d from "../../utils/Vec2d";

type SearchMethod = {
  name: string;
  start: (params: SearchParams) => Generator<SearchState>;
  rewind: (node: SearchNode) => Vec2d[];
};

const methods: { [key: string]: SearchMethod } = {
  breadthFirstSearch,
  biDirectionalBfs,
  greedBestFirstSearch,
  depthFirstSearch,
};

export default methods;
