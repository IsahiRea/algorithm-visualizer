import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { visualizeStack } from './dataStructures/stack.js';
import { visualizeQueue } from './dataStructures/queue.js';
import { visualizeLinkedList } from './dataStructures/linkedList.js';
import { visualizeBST } from './trees/BST.js';
import { visualizeDFS } from './graph/dfs.js';

export function handleSelection() {
    const visualTypeSelect = document.getElementById('visualType').value;
    
    if (visualTypeSelect === 'algorithm') {
        handleAlgorithm();
    } else if (visualTypeSelect === 'dataStructure') {
        handleDataStructure();
    } else if (visualTypeSelect === 'tree') {
        handleTreeStructure();
    }
    else if (visualTypeSelect === 'graph') {
        handleGraphStructure();
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

function handleTreeStructure() {
    const treeSelect = document.getElementById('tree').value;

    if (treeSelect === 'BST') {
        visualizeBST();
    }
}

function handleGraphStructure() {
    const treeSelect = document.getElementById('graph').value;

    if (treeSelect === 'dfs') {
        visualizeDFS();
    }
}
