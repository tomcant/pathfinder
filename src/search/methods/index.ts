import breadthFirstSearch from "./breadth-first-search";
import biDirectionalBfs from "./bidirectional-bfs";
import greedBestFirstSearch from "./greedy-best-first-search";
import depthFirstSearch from "./depth-first-search";

const methods = {
  "breadth-first-search": breadthFirstSearch,
  "bidirectional-bfs": biDirectionalBfs,
  "greedy-best-first-search": greedBestFirstSearch,
  "depth-first-search": depthFirstSearch,
};

export default methods;
