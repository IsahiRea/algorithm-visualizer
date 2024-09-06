import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { visualizeStack } from './dataStructures/stack.js';
import { visualizeQueue } from './dataStructures/queue.js';
import { drawArray, generateRandomArray } from './canvas.js';

export function handleSelection() {
    const visualTypeSelect = document.getElementById('visualType').value;
    
    if (visualTypeSelect === 'algorithm') {
        handleAlgorithm();
    } else if (visualTypeSelect === 'dataStructure') {
        handleDataStructure();
    }
}

function handleAlgorithm() {
    const algoSelect = document.getElementById('algo').value;
    let array = generateRandomArray();
    drawArray(array);

    if (algoSelect === 'bubbleSort') {
        bubbleSort(array, drawArray);
    } else if (algoSelect === 'selectionSort') {
        selectionSort(array, drawArray);
    }
}

function handleDataStructure() {
    const dataStructureSelect = document.getElementById('dataStructure').value;
    let array = generateRandomArray();

    if (dataStructureSelect === 'stack') {
        visualizeStack(array);
    } else if (dataStructureSelect === 'queue') {
        visualizeQueue(array);
    }
}
