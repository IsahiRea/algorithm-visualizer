import { stopVisual, isActive, startVisual, sleep, generateRandomArray} from '../shared/controls.js';
import { drawHashTable } from "../../canvas/hashTable.js";

export function visualizeHT() {
    performHashOperations()
}

async function performHashOperations() {
    startVisual();

    const array = generateRandomArray();
    
    let hashMap = new Map();

    const len = 8
    for(let i = 0; i < len; i++) {
        hashMap.set(array[i]*2, array[i])
        drawHashTable(hashMap);
        await sleep(800);

        while (!isActive) {
            await sleep(200);
        }
    }

    stopVisual();
}