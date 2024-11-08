import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function gnomeSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    let index = 0;

    while (index < array.length) {
        while (!isActive()) {
            await sleep(200);  // Stop sorting if the flag is false
        }
        
        if (index === 0 || array[index] >= array[index - 1]) {
            index++;
        } else {
            [array[index], array[index - 1]] = [array[index - 1], array[index]];  // Swap
            index--;
            drawArray(array);  // Visualize the array
            await sleep(200);  // Pause for visualization
        }
    }

    stopVisual();  // Set sorting flag to false when done
}
