import { stopVisual, isActive, startVisual, sleep } from '../controls.js';
import { drawQueue, generateRandomArray } from '../canvas.js';


// Queue operations
export function visualizeQueue() {
    performQueueOperations();
}

async function performQueueOperations() {
    startVisual();

    let array = generateRandomArray();
    let queue = [];

    const len = 6;
    for(let i = 0; i < len; i++) {
        await enqueue(array[i], queue);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }

    for(let i = 0; i < len; i++) {
        await dequeue(queue);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }

    stopVisual();
}

// Queue methods
async function enqueue(value, queue) {
    queue.push(value);
    drawQueue(queue);
    await sleep(1000);  // Pause for visualization
}

async function dequeue(queue) {
    if (queue.length > 0) {
        queue.shift();  // Remove the first element
        drawQueue(queue);
        await sleep(1000);  // Pause for visualization
    }
}
