import { SearchNode, SearchParams, SearchState } from "../";
import breadthFirstSearch from "./breadth-first-search";
import biDirectionalBfs from "./bidirectional-bfs";
import greedBestFirstSearch from "./greedy-best-first-search";
import dijkstra from "./dijkstra";
import aStar from "./a-star";
import depthFirstSearch from "./depth-first-search";
import Vec2d from "../../utils/Vec2d";

type SearchMethod = {
  name: string;
  search: (params: SearchParams) => Generator<SearchState>;
  rewind: (node: SearchNode) => Vec2d[];
  isWeighted: boolean;
};

const methods: { [key: string]: SearchMethod } = {
  breadthFirstSearch,
  biDirectionalBfs,
  greedBestFirstSearch,
  dijkstra,
  aStar,
  depthFirstSearch,
};

export default methods;
