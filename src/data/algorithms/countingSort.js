import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function countingSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const max = Math.max(...array);
    const countArray = new Array(max + 1).fill(0);

    // Count each element in the array
    for (let i = 0; i < array.length; i++) {
        while (!isActive()) {
            await sleep(200);  // Stop sorting if the flag is false
        }
        countArray[array[i]]++;
    }

    // Rebuild the sorted array based on the count array
    let index = 0;
    for (let i = 0; i < countArray.length; i++) {
        while (countArray[i] > 0) {
            array[index++] = i;
            countArray[i]--;
            drawArray(array);  // Visualize the array
            await sleep(200);  // Pause for visualization
        }
    }

    stopVisual();  // Set sorting flag to false when done
}
