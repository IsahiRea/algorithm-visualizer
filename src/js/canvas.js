const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

export function drawArray(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    for (let i = 0; i < array.length; i++) {
        const barHeight = array[i] * 3;
        ctx.fillStyle = '#007bff';
        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight);
    }
}

export function generateRandomArray(size = 20, maxValue = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * maxValue));
}


// Function to draw the stack
export function drawStack(stack) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rectWidth = 80;
    const rectHeight = 30;
    for (let i = 0; i < stack.length; i++) {
        ctx.fillStyle = '#28a745';
        ctx.fillRect(100, canvas.height - (i + 1) * rectHeight, rectWidth, rectHeight);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(100, canvas.height - (i + 1) * rectHeight, rectWidth, rectHeight);
        ctx.fillStyle = '#fff';
        ctx.fillText(stack[i], 120, canvas.height - i * rectHeight - 15);
    }
}

// Function to draw the queue
export function drawQueue(queue) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rectWidth = 80;
    const rectHeight = 30;
    for (let i = 0; i < queue.length; i++) {
        ctx.fillStyle = '#007bff';
        ctx.fillRect(100 + i * (rectWidth + 10), canvas.height / 2 - rectHeight / 2, rectWidth, rectHeight);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(100 + i * (rectWidth + 10), canvas.height / 2 - rectHeight / 2, rectWidth, rectHeight);
        ctx.fillStyle = '#fff';
        ctx.fillText(queue[i], 125 + i * (rectWidth + 10), canvas.height / 2);
    }
}

// Draw a single node
function drawNode(x, y, value) {
    // Node width and height
    const nodeWidth = 60;
    const nodeHeight = 40;

    ctx.fillStyle = '#007bff';
    ctx.fillRect(x, y, nodeWidth, nodeHeight);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(x, y, nodeWidth, nodeHeight);
    ctx.fillStyle = '#fff';
    ctx.fillText(value, x + 20, y + 25);
}

// Draw an arrow (pointer) between two nodes
function drawArrow(x1, y1, x2, y2) {
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Arrowhead
    ctx.moveTo(x2 - 5, y2 - 5);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2 - 5, y2 + 5);
    ctx.stroke();
}

// Function to draw the Linked List
export function drawLinkedList(LL) {
    // Node width and height
    const nodeWidth = 60;
    const nodeHeight = 40;
    let temp = LL.head

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let x = 50;
    let y = canvas.height / 2 - nodeHeight / 2;

    for (let i = 0; i < LL.size; i++) {
        drawNode(x, y, temp.value);

        // Draw arrow to the next node if it exists
        if (i < LL.size - 1) {
            drawArrow(x + nodeWidth, y + nodeHeight / 2, x + nodeWidth + 40, y + nodeHeight / 2);
        }

        x += nodeWidth + 50;

        temp = temp.next;
    }
}

// Set node radius and vertical/horizontal spacing
const NODE_RADIUS = 20;
const VERTICAL_SPACING = 80;
const HORIZONTAL_SPACING = 40;

// Draw the entire tree
export function drawTree(root) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!root || !root.root) return;

    // Draw the tree recursively starting from the root node
    drawTreeNode(root.root, canvas.width / 2, 50, canvas.width / 4);
}

// Function to draw a line (edge between nodes)
function drawLine(x1, y1, x2, y2) {

    ctx.beginPath();
    ctx.moveTo(x1, y1 + NODE_RADIUS);  // Start at bottom of parent node
    ctx.lineTo(x2, y2 - NODE_RADIUS);  // End at top of child node
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

// Function to draw a node
function drawTreeNode(node, x, y, xOffset) {

    if (!node) return;

    // Draw left subtree
    if (node.left) {
        // Calculate new position for the left child
        const childX = x - xOffset;
        const childY = y + VERTICAL_SPACING;
        // Draw line to the left child
        drawLine(x, y, childX, childY);
        // Recursively draw the left subtree
        drawTreeNode(node.left, childX, childY, xOffset / 2);
    }

    // Draw right subtree
    if (node.right) {
        // Calculate new position for the right child
        const childX = x + xOffset;
        const childY = y + VERTICAL_SPACING;
        // Draw line to the right child
        drawLine(x, y, childX, childY);
        // Recursively draw the right subtree
        drawTreeNode(node.right, childX, childY, xOffset / 2);
    }

    // Draw the current node as a circle with value inside
    drawCircle(x, y, NODE_RADIUS, node.value);
}

// Function to draw a circle (node)
function drawCircle(x, y, radius, value) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw the value inside the circle
    ctx.fillStyle = 'black';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(value, x, y);
}






