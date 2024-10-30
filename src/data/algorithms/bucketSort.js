import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

export async function bucketSort() {
    startVisual();  // Set sorting flag

    let array = generateRandomArray();
    drawArray(array);

    const numBuckets = 10;
    const max = Math.max(...array);
    const min = Math.min(...array);
    const bucketRange = (max - min) / numBuckets;

    // Create empty buckets
    const buckets = Array.from({ length: numBuckets }, () => []);

    // Distribute array elements into buckets
    for (let i = 0; i < array.length; i++) {
        while (!isActive()) {
            await sleep(200);  // Stop sorting if the flag is false
        }

        const bucketIndex = Math.floor((array[i] - min) / bucketRange);
        buckets[bucketIndex === numBuckets ? bucketIndex - 1 : bucketIndex].push(array[i]);
    }

    // Sort individual buckets and merge
    let index = 0;
    for (let i = 0; i < numBuckets; i++) {
        buckets[i].sort((a, b) => a - b);  // Sort each bucket individually

        for (let j = 0; j < buckets[i].length; j++) {
            array[index++] = buckets[i][j];
            drawArray(array);  // Visualize the array after inserting each element
            await sleep(200);  // Pause for visualization
        }
    }

    stopVisual();  // Set sorting flag to false when done
}