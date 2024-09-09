import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { visualizeStack } from './dataStructures/stack.js';
import { visualizeQueue } from './dataStructures/queue.js';
import { visualizeLinkedList } from './dataStructures/linkedList.js';
import { visualizeHT } from './dataStructures/hashTable.js';
import { visualizeHeap } from './dataStructures/heap.js';
import { visualizeBST } from './dataStructures/BST.js';
import { visualizeGraph } from './dataStructures/graph.js';



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
    else if (dataStructureSelect === 'hash table') {
        visualizeHT();
    }
    else if (dataStructureSelect === 'BST') {
        visualizeBST();
    }
    else if (dataStructureSelect === 'heap') {
        visualizeHeap();
    }
    else if (dataStructureSelect === 'graph') {
        visualizeGraph();
    }
}
