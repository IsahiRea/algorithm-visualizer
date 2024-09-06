import { stopVisual, isActive, startVisual, sleep } from '../controls.js';


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
export function visualizeStack(array) {
    stack = [];
    performStackOperations(array);
}

async function performStackOperations(array) {
    startVisual();

    const len = 6;
    for(let i = 0; i < len; i++) {
        await pushToStack(array[i]);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }

    for(let i = 0; i < len; i++) {
        await popFromStack();
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }
    stopVisual();
}

// Stack methods
async function pushToStack(value) {
    stack.push(value);
    drawStack();
    await sleep(1000);  // Pause for visualization
}

async function popFromStack() {
    stack.pop();
    drawStack();
    await sleep(1000);  // Pause for visualization
}
