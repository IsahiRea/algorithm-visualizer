const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

export function generateRandomArray(size = 20, maxValue = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * maxValue));
}


// Sorting ---------------------------------------------------------------
export function drawArray(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    for (let i = 0; i < array.length; i++) {
        const barHeight = array[i] * 3;
        ctx.fillStyle = '#007bff';
        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight);
    }
}

// Stack ---------------------------------------------------------------
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

// Queue ---------------------------------------------------------------
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

// Linked List ---------------------------------------------------------------
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

// Trees ---------------------------------------------------------------
export function drawTree(root) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!root || !root.root) return;

    // Draw the tree recursively starting from the root node
    drawTreeNode(root.root, canvas.width / 2, 50, canvas.width / 4);
}

// Function to draw a line (edge between nodes)
function drawLine(x1, y1, x2, y2) {
    const NODE_RADIUS = 20;

    ctx.beginPath();
    ctx.moveTo(x1, y1 + NODE_RADIUS);  // Start at bottom of parent node
    ctx.lineTo(x2, y2 - NODE_RADIUS);  // End at top of child node
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

// Function to draw a node
function drawTreeNode(node, x, y, xOffset) {
    const NODE_RADIUS = 20;
    const VERTICAL_SPACING = 80;

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

// Hash Table ---------------------------------------------------------------
export function drawHashTable(HT) {

    const BUCKET_WIDTH = 150;
    const BUCKET_HEIGHT = 50;
    const HORIZONTAL_SPACING = 20;
    const VERTICAL_SPACING = 20;
    const START_X = 50;
    const START_Y = 50;

    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    let x = START_X;
    let y = START_Y;
    let index = 0;  // To count the number of buckets and layout them in rows

    // Loop through the Hash Table (Map) and draw each key-value pair
    for (let [key, value] of HT) {
        // Draw the bucket (rectangle)
        ctx.fillStyle = '#007bff';
        ctx.fillRect(x, y, BUCKET_WIDTH, BUCKET_HEIGHT);

        // Draw the outline of the bucket
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x, y, BUCKET_WIDTH, BUCKET_HEIGHT);

        // Display the key-value pair inside the bucket
        ctx.fillStyle = '#fff';
        ctx.font = '16px Arial';
        ctx.textAlign = 'left';

        // Draw the key and value in the center of the bucket
        ctx.fillText(`Key: ${key}`, x + 10, y + 20);     // Draw key
        ctx.fillText(`Value: ${value}`, x + 10, y + 40); // Draw value

        // Move to the next position
        x += BUCKET_WIDTH + HORIZONTAL_SPACING;
        index++;

        // If the row is full, move to the next row
        if (x + BUCKET_WIDTH > canvas.width) {
            x = START_X;  // Reset to the start of the new row
            y += BUCKET_HEIGHT + VERTICAL_SPACING;  // Move down
        }
    }
}

// Heap ---------------------------------------------------------------
export function drawHeap(heap) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    if (heap.length === 0) return;

    // Start drawing the heap from the root (index 0)
    drawHeapNode(heap, 0, canvas.width / 2, 50, canvas.width / 4);
}

// Recursive function to draw each node in the heap
function drawHeapNode(heap, index, x, y, xOffset) {
    const NODE_RADIUS = 20;
    const VERTICAL_SPACING = 80;
    
    if (index >= heap.length) return;

    // Draw left and right children (if they exist)
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;

    // Draw the left child if it exists
    if (leftIndex < heap.length) {
        const leftX = x - xOffset;
        const leftY = y + VERTICAL_SPACING;
        drawLine(x, y, leftX, leftY);  // Draw line from parent to left child
        drawHeapNode(heap, leftIndex, leftX, leftY, xOffset / 2);  // Recursively draw the left child
    }

    // Draw the right child if it exists
    if (rightIndex < heap.length) {
        const rightX = x + xOffset;
        const rightY = y + VERTICAL_SPACING;
        drawLine(x, y, rightX, rightY);  // Draw line from parent to right child
        drawHeapNode(heap, rightIndex, rightX, rightY, xOffset / 2);  // Recursively draw the right child
    }

    // Draw the current node as a circle with the value inside
    drawCircle(x, y, NODE_RADIUS, heap[index]);
}







