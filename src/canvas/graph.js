const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

const NODE_RADIUS = 20;
const EDGE_COLOR = '#000';
const NODE_COLOR = '#007bff';
const TEXT_COLOR = '#fff';

// Graph ---------------------------------------------------------------
// Function to draw the entire graph
export function drawGraph(graph) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    const vertexPositions = generateVertexPositions(graph.adjacencyList);  // Get positions for each vertex

    // Draw edges first
    for (let vertex in graph.adjacencyList) {
        const neighbors = graph.adjacencyList[vertex];
        neighbors.forEach((neighbor) => {
            drawEdge(vertexPositions[vertex], vertexPositions[neighbor]);
        });
    }

    // Draw vertices on top of edges
    for (let vertex in graph.adjacencyList) {
        drawVertex(vertexPositions[vertex].x, vertexPositions[vertex].y, vertex);
    }
}

// Function to generate random positions for vertices
function generateVertexPositions(adjacencyList) {
    const positions = {};
    const vertexCount = Object.keys(adjacencyList).length;
    const angleIncrement = (2 * Math.PI) / vertexCount;
    const radius = Math.min(canvas.width, canvas.height) / 2.5;  // Position vertices around a circle

    let i = 0;
    for (let vertex in adjacencyList) {
        const angle = i * angleIncrement;
        const x = canvas.width / 2 + radius * Math.cos(angle);  // Circular layout for nodes
        const y = canvas.height / 2 + radius * Math.sin(angle);
        positions[vertex] = { x, y };
        i++;
    }

    return positions;
}

// Function to draw a vertex (node)
function drawVertex(x, y, label) {
    // Draw the circle for the vertex
    ctx.beginPath();
    ctx.arc(x, y, NODE_RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = NODE_COLOR;
    ctx.fill();
    ctx.strokeStyle = EDGE_COLOR;
    ctx.stroke();

    // Draw the label inside the circle
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
}

// Function to draw an edge (line between two vertices)
function drawEdge(position1, position2) {
    ctx.beginPath();
    ctx.moveTo(position1.x, position1.y);
    ctx.lineTo(position2.x, position2.y);
    ctx.strokeStyle = EDGE_COLOR;
    ctx.stroke();
}
