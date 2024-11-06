import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";


export async function combSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const shrinkFactor = 1.3;  // Recommended shrink factor for comb sort
    let gap = array.length;
    let sorted = false;

    while (!sorted) {
        gap = Math.floor(gap / shrinkFactor);  // Reduce the gap size
        if (gap <= 1) {
            gap = 1;
            sorted = true;  // Assume the array is sorted; prove it wrong below if not
        }

        for (let i = 0; i + gap < array.length; i++) {
            while (!isActive()) {
                await sleep(200);  // Stop sorting if the flag is false
            }
            if (array[i] > array[i + gap]) {
                [array[i], array[i + gap]] = [array[i + gap], array[i]];  // Swap
                sorted = false;  // Reset sorted flag if a swap was made
                drawArray(array);  // Visualize the array
                await sleep(200);  // Pause for visualization
            }
        }
    }

    stopVisual();  // Set sorting flag to false when done
}