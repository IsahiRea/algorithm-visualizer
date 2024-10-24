import { stopVisual, isActive, startVisual, sleep, generateRandomArray} from '../shared/controls.js';
import { drawArray } from '../../canvas/sorting.js';

export async function selectionSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

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


