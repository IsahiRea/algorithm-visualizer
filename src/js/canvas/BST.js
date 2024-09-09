const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

const NODE_RADIUS = 20;
const VERTICAL_SPACING = 80;

// Trees ---------------------------------------------------------------
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