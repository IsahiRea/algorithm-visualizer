import { stopVisual, isActive, startVisual, sleep } from '../controls.js';
import { drawStack, generateRandomArray } from '../canvas.js';

// Stack operations
export function visualizeStack() {
    performStackOperations();
}

async function performStackOperations() {
    startVisual();

    let array = generateRandomArray();
    let stack = [];

    const len = 6;
    for(let i = 0; i < len; i++) {
        await pushToStack(array[i], stack);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }

    for(let i = 0; i < len; i++) {
        await popFromStack(stack);
        
        while (!isActive()){
            await sleep(200);  // Stop sorting if the flag is false
        } 
    }
    stopVisual();
}

// Stack methods
async function pushToStack(value, stack) {
    stack.push(value);
    drawStack(stack);
    await sleep(1000);  // Pause for visualization
}

async function popFromStack(stack) {
    stack.pop();
    drawStack(stack);
    await sleep(1000);  // Pause for visualization
}
