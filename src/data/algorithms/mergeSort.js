import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function mergeSort() {
    startVisual();

    let array = generateRandomArray();
    drawArray(array);

    await mergeSortHelper(array, 0, array.length - 1);

    stopVisual();
}

async function mergeSortHelper(array, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Recursively divide the array
        await mergeSortHelper(array, left, mid);
        await mergeSortHelper(array, mid + 1, right);

        // Merge the sorted halves
        await merge(array, left, mid, right);
    }
}

async function merge(array, left, mid, right) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    // Merge the two arrays back into the main array
    while (i < leftArray.length && j < rightArray.length) {
        while (!isActive()) {
            await sleep(200);
        }

        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        drawArray(array);
        await sleep(200);
        k++;
    }

    // Copy any remaining elements from leftArray
    while (i < leftArray.length) {
        array[k] = leftArray[i];
        i++;
        k++;
        drawArray(array);  // Visualize the array
        await sleep(200);
    }

    // Copy any remaining elements from rightArray
    while (j < rightArray.length) {
        array[k] = rightArray[j];
        j++;
        k++;
        drawArray(array);  // Visualize the array
        await sleep(200);
    }
}