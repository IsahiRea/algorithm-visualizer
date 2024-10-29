import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function radixSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    // Find the maximum number to determine the number of digits
    const maxNum = Math.max(...array);
    let exp = 1;

    // Perform counting sort for every digit
    while (Math.floor(maxNum / exp) > 0) {
        await countingSortByDigit(array, exp);
        exp *= 10;
    }

    stopVisual();  // Set sorting flag to false when done
}

async function countingSortByDigit(array, exp) {
    const len = array.length;
    const output = new Array(len).fill(0);
    const count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let i = 0; i < len; i++) {
        const digit = Math.floor(array[i] / exp) % 10;
        count[digit]++;
    }

    // Calculate cumulative count
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = len - 1; i >= 0; i--) {
        const digit = Math.floor(array[i] / exp) % 10;
        output[count[digit] - 1] = array[i];
        count[digit]--;
    }

    // Copy the sorted values back to the original array
    for (let i = 0; i < len; i++) {
        array[i] = output[i];
        drawArray(array);  // Visualize the array
        await sleep(200);  // Pause for visualization
    }
}