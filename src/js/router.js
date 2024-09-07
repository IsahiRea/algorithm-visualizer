import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { visualizeStack } from './dataStructures/stack.js';
import { visualizeQueue } from './dataStructures/queue.js';
import { visualizeLinkedList } from './dataStructures/linkedList.js';


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

    if (algoSelect === 'bubbleSort') {
        bubbleSort();
    } else if (algoSelect === 'selectionSort') {
        selectionSort();
    }
}

function handleDataStructure() {
    const dataStructureSelect = document.getElementById('dataStructure').value;

    if (dataStructureSelect === 'stack') {
        visualizeStack();
    } else if (dataStructureSelect === 'queue') {
        visualizeQueue();
    }else if (dataStructureSelect === 'linked list') {
        visualizeLinkedList();
    }
}
