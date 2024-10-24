const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

const NODE_RADIUS = 20;
const VERTICAL_SPACING = 80;


// Heap ---------------------------------------------------------------
export function drawHeap(heap) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    if (heap.length === 0) return;

    // Start drawing the heap from the root (index 0)
    drawHeapNode(heap, 0, canvas.width / 2, 50, canvas.width / 4);
}

// Recursive function to draw each node in the heap
function drawHeapNode(heap, index, x, y, xOffset) {
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