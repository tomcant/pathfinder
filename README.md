# Pathfinder

An interactive visualisation of pathfinding and maze generation algorithms, built with React and TypeScript.

Watch algorithms explore a grid in real time, generate or draw your own mazes, and compare how different strategies find the shortest path.

https://github.com/user-attachments/assets/bf79c881-ead9-4179-90b7-2826a652553c

## Blog post

Read more about the ideas behind this project: [Introduction to Pathfinding with Mazes and Breadth-First Search](https://tomcant.dev/posts/2021/09/introduction-to-pathfinding-with-mazes-and-breadth-first-search/)

## Features

- **Draw walls** by clicking and dragging on the grid
- **Drag start and target** markers to reposition them
- **Step-by-step animation** — see every cell an algorithm visits as it searches for the target
- **Weighted cells** — double-click to add weights when using a weighted algorithm, then click to increment
- **Auto-sized grid** that fills the browser window, or set a custom size via URL params
- **Embed mode** for including in other pages

## Search algorithms

| Algorithm | Type | Guarantees shortest path? |
|---|---|---|
| Breadth-first search | Unweighted | Yes |
| Bidirectional BFS | Unweighted | Yes |
| Depth-first search | Unweighted | No |
| Dijkstra | Weighted | Yes |
| A* | Weighted | Yes |
| Greedy best-first search | Weighted | No |

Weighted algorithms respect the cost of each cell. Unweighted algorithms treat every step equally.

## Maze generators

| Algorithm | Style |
|---|---|
| Recursive division | Long corridors with perpendicular walls |
| Depth-first search | Long, twisting tunnels with few branches |
| Binary tree | Diagonal bias toward one corner |
| Prim's | Organic, winding passages |
| Random | Scattered walls with no structure |

## Getting started

```sh
nvm use
npm install
npm start
```

The app opens at `http://localhost:3000`.

### URL parameters

| Param | Description | Example |
|---|---|---|
| `cols` | Number of columns | `?cols=40` |
| `rows` | Number of rows | `?rows=20` |
| `embed` | Hide header and dropdowns for embedding | `?embed` |

## How it works

Both maze generation and pathfinding are implemented as generator functions. Each `yield` produces the next visual state, and the UI renders it with a short delay between frames. This keeps the animation smooth without blocking the main thread.

```
User clicks "Search"
        |
        v
Generator yields SearchState  ---->  React renders visited cells
        |                                       |
        v                                       v
   sleep(10ms)  <-------------------------------'
        |
        v
Generator yields next state ...
        |
        v
  Target found  ---->  rewind() traces the path back to start
```
