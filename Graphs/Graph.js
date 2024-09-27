class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    const indexOfVertex1 = this.adjacencyList[vertex1].indexOf(vertex1);
    this.adjacencyList[vertex1].splice(indexOfVertex1, 1);

    const indexOfVertex2 = this.adjacencyList[vertex1].indexOf(vertex2);
    this.adjacencyList[vertex2].splice(indexOfVertex2, 1);
  }

  removeVertex(vertex) {
    for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
      const vertexToRemove = this.adjacencyList[vertex][i];
      this.removeEdge(vertex, vertexToRemove);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Kampala");
graph.addVertex("Entebbe");
graph.addVertex("Masaka");
graph.addVertex("Mbarara");
graph.addEdge("Kampala", "Entebbe");
graph.addEdge("Masaka", "Mbarara");
// graph.removeEdge("Kampala", "Entebbe");
// console.log(graph);
// graph.removeVertex("Masaka");
// console.log(graph);

const dfsRecursive = require("./DFS");

const result = dfsRecursive(graph, "Kampala");
console.log("result", result);
