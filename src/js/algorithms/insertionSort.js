import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from '../controls.js';
import { drawArray } from '../canvas/sorting.js';

export async function insertionSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const len = array.length;
    for (let i = 1; i < len; i++) {
        let key = array[i];
        let j = i - 1;

        while (!isActive()) {
            await sleep(200);  // Stop sorting if the flag is false
        }

        // Move elements of array[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
            drawArray(array);  // Visualize the array
            await sleep(200);  // Pause for visualization
        }
        array[j + 1] = key;
        drawArray(array);  // Visualize the array after inserting the key
        await sleep(200);  // Pause for visualization
    }

    stopVisual();  // Set sorting flag to false when done
}
