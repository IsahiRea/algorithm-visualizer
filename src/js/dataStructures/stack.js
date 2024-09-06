// Stack visualization
let stack = [];
const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

// Function to draw the stack
function drawStack() {
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

// Stack operations
export function visualizeStack() {
    stack = [];
    performStackOperations();
}

function performStackOperations() {
    pushToStack(5);
    pushToStack(10);
    pushToStack(15);
    setTimeout(popFromStack, 1000);
    setTimeout(popFromStack, 2000);
    setTimeout(pushToStack.bind(null, 20), 3000);
}

// Stack methods
function pushToStack(value) {
    stack.push(value);
    drawStack();
}

function popFromStack() {
    stack.pop();
    drawStack();
}
