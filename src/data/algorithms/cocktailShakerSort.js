import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function cocktailShakerSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    let start = 0;
    let end = array.length - 1;
    let swapped = true;

    while (swapped) {
        swapped = false;

        // Forward pass: bubble up the largest element to the end
        for (let i = start; i < end; i++) {
            while (!isActive()) {
                await sleep(200);  // Stop sorting if the flag is false
            }
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];  // Swap
                swapped = true;
                drawArray(array);  // Visualize the array
                await sleep(200);  // Pause for visualization
            }
        }

        if (!swapped) break;  // Exit if no swaps occurred in forward pass

        swapped = false;
        end--;  // Reduce the unsorted region from the end

        // Backward pass: bubble down the smallest element to the start
        for (let i = end - 1; i >= start; i--) {
            while (!isActive()) {
                await sleep(200);  // Stop sorting if the flag is false
            }
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];  // Swap
                swapped = true;
                drawArray(array);  // Visualize the array
                await sleep(200);  // Pause for visualization
            }
        }

        start++;  // Increase the unsorted region from the start
    }

    stopVisual();  // Set sorting flag to false when done
}
