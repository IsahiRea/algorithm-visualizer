import { stopVisual, isActive, startVisual, sleep, generateRandomArray} from '../controls.js';
import { drawArray } from '../canvas/sorting.js';

export async function bubbleSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            while (!isActive()){
                await sleep(200);  // Stop sorting if the flag is false
            } 
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];  // Swap elements
                drawArray(array);  // Visualize the array
                await sleep(200);  // Pause for visualization
            }
        }
    }
    stopVisual();  // Set sorting flag to false when done
}

