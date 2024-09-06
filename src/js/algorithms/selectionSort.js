import { stopVisual, isActive, startVisual, sleep } from '../controls.js';

export async function selectionSort(array, drawArray) {
    startVisual();  // Set sorting flag
    const len = array.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            while (!isActive()) {
                await sleep(200);  // Stop sorting if the flag is false
            } 
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];  // Swap
            drawArray(array);  // Visualize the array
            await sleep(200);  // Pause for visualization
        }
    }
    stopVisual();  // Set sorting flag to false when done
}


