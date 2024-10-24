import { stopVisual, isActive, startVisual, sleep, generateRandomArray } from "../shared/controls.js";
import { drawArray } from "../../canvas/sorting.js";

async function partition(array, low, high){
    let pivot = array[high];
    let i = low-1;

    for(let j = low; j < high; j++) {
        while (!isActive()) {
            await sleep(200);
        }

        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]]
            drawArray(array);
            await sleep(200);
        }
    }

    [array[i+1], array[high]] = [array[high], array[i+1]]; 
    drawArray(array);
    await sleep(200);

    return i+1;
}

async function quickSortHelper(array, low, high) {
    if(low < high) {
        let part = await partition(array, low, high);


        await quickSortHelper(array, low, part-1);
        await quickSortHelper(array, part+1, high);
    }
}


export async function quickSort() {
    startVisual();

    let array = generateRandomArray();
    drawArray(array);
    
    await quickSortHelper(array, 0, array.length-1);

    stopVisual();
}