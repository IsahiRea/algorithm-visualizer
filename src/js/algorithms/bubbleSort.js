import { isSortingActive, startSorting } from '../controls.js';

export async function bubbleSort(array, drawArray, stopSorting) {
    startSorting();  // Set sorting flag
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (!isSortingActive()) return;  // Stop sorting if the flag is false
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];  // Swap elements
                drawArray(array);  // Visualize the array
                await sleep(200);  // Pause for visualization
            }
        }
    }
    stopSorting();  // Set sorting flag to false when done
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
