import { stopVisual, isActive, startVisual, sleep } from "../controls";
import {generateRandomArray } from "../canvas";

export function visualizeDFS() {
    performTreeOperations();
}


async function performTreeOperations() {
    startVisual();
    
    let array = generateRandomArray();

    stopVisual();
}