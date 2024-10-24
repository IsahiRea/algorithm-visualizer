import { stopVisual, isActive, startVisual, sleep, generateRandomArray} from '../shared/controls.js';
import {drawGraph } from "../../canvas/graph.js";

class Graph {
    constructor() {
        this.adjacencyList = {};  // Stores the graph as an adjacency list
    }

    // Add a new vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices (undirected)
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v !== vertex1
        );
    }

    // Remove a vertex and all its edges
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    /*
    // Depth First Search (DFS) - Iterative using a stack
    dfs(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    // Depth First Search (DFS) - Recursive
    dfsRecursive(start, visited = {}, result = []) {
        if (!start) return result;
        visited[start] = true;
        result.push(start);

        this.adjacencyList[start].forEach((neighbor) => {
            if (!visited[neighbor]) {
                this.dfsRecursive(neighbor, visited, result);
            }
        });

        return result;
    }

    // Breadth First Search (BFS) - Iterative using a queue
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    */
}


export function visualizeGraph() {
    performGraphOperations();
}


async function performGraphOperations() {
    startVisual();

    const graph = new Graph();
    const array = ['A','B','C','D','E','F',]

    const numVertices = 6;

    // Randomly add Vertices with edges
    for (let i = 0; i < numVertices; i++) {
        for (let j = i + 1; j < numVertices; j++) {  // Undirected, so we only check pairs once
            if (Math.random() < 0.5) {   // Randomly decide if an edge exists
                graph.addEdge(array[i], array[j]);
                
                drawGraph(graph);
                await sleep(800);
                
                while (!isActive()){
                    await sleep(200);  // Stop sorting if the flag is false
                }
            }
        }
    }

    stopVisual();
}