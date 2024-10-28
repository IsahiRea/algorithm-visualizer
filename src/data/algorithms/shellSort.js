import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function shellSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const len = array.length;
    let gap = Math.floor(len / 2);

    // Reduce gap until it becomes zero
    while (gap > 0) {
        for (let i = gap; i < len; i++) {
            let temp = array[i];
            let j = i;

            while (!isActive()) {
                await sleep(200);  // Stop sorting if the flag is false
            }

            // Perform a gapped insertion sort
            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
                drawArray(array);  // Visualize the array
                await sleep(200);  // Pause for visualization
            }

            array[j] = temp;
            drawArray(array);  // Visualize the array after each gap-insert
            await sleep(200);  // Pause for visualization
        }
        gap = Math.floor(gap / 2);  // Reduce the gap for the next iteration
    }

    stopVisual();  // Set sorting flag to false when done
}