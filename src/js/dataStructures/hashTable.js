import { startVisual, stopVisual, sleep, isActive } from "../controls";
import { drawHashTable ,generateRandomArray } from "../canvas";

export function visualizeHT() {
    performHashOperations()
}

async function performHashOperations() {
    startVisual();

    const array = generateRandomArray();
    
    let hashMap = new Map();

    const len = 6
    for(let i = 0; i < len; i++) {
        hashMap.set(array[i]*2, array[i])
        drawHashTable(hashMap);
        await sleep(2000);

        while (!isActive) {
            await sleep(200);
        }
    }

    stopVisual();
}