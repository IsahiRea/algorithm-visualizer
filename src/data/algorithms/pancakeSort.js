import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function pancakeSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const len = array.length;

    for (let size = len; size > 1; size--) {
        // Find the maximum element's index in the current range
        let maxIndex = findMaxIndex(array, size);

        if (maxIndex !== size - 1) {
            // Flip the maximum element to the front
            await flip(array, maxIndex + 1);

            // Flip it to its correct position
            await flip(array, size);
        }
    }

    stopVisual();  // Set sorting flag to false when done
}

async function flip(array, k) {
    let left = 0;
    let right = k - 1;

    while (left < right) {
        while (!isActive()) {
            await sleep(200);  // Stop sorting if the flag is false
        }
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
        drawArray(array);  // Visualize the array
        await sleep(200);  // Pause for visualization
    }
}

function findMaxIndex(array, size) {
    let maxIndex = 0;

    for (let i = 1; i < size; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}