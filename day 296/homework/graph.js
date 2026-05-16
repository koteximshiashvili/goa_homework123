function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}