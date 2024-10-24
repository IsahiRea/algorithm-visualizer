const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

// Node width and height
const nodeWidth = 60;
const nodeHeight = 40;

// Linked List ---------------------------------------------------------------
// Draw a single node
function drawNode(x, y, value) {
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