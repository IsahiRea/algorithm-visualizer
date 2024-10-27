import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";


export async function heapSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const len = array.length;

    // Build a max heap
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        await heapify(array, len, i);
    }

    // Extract elements from the heap one by one
    for (let i = len - 1; i > 0; i--) {
        // Move current root to end (swap)
        [array[0], array[i]] = [array[i], array[0]];
        drawArray(array);  // Visualize the array
        await sleep(200);  // Pause for visualization

        // Call max heapify on the reduced heap
        await heapify(array, i, 0);
    }

    stopVisual();  // Set sorting flag to false when done
}

async function heapify(array, n, i) {
    let largest = i;  // Initialize largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Check if left child is larger than root
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    // Check if right child is larger than largest
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    // Swap and continue heapifying if root is not largest
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        drawArray(array);  // Visualize the array
        await sleep(200);  // Pause for visualization

        await heapify(array, n, largest);
    }
}