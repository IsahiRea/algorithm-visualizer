import { stopVisual, isActive, startVisual, sleep } from '../controls.js';


// Queue visualization
let queue = [];
const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

// Function to draw the queue
function drawQueue() {
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

// Queue operations
export function visualizeQueue(array) {
    queue = [];
    performQueueOperations(array);
}

async function performQueueOperations(array) {
    startVisual();

    const len = 6;
    for(let i = 0; i < len; i++) {
        await enqueue(array[i]);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }

    for(let i = 0; i < len; i++) {
        await dequeue();
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }

    stopVisual();
}

// Queue methods
async function enqueue(value) {
    queue.push(value);
    drawQueue();
    await sleep(1000);  // Pause for visualization
}

async function dequeue() {
    if (queue.length > 0) {
        queue.shift();  // Remove the first element
        drawQueue();
        await sleep(1000);  // Pause for visualization
    }
}
