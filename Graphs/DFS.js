function dfsRecursive(graph, vertex, visited = new Set()) {
  let result = [];
  if (!vertex) {
    return result;
  }
  result.push(vertex);
  visited.add(vertex);

  const neighbors = graph.adjacencyList[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    const current = neighbors[i];
    if (!visited.has(current)) {
      result.push(current);
      result = result.concat(dfsRecursive(graph, current, visited));
    }
  }

  return result;
}

module.exports = dfsRecursive;
