import { bubbleSort } from '../data/algorithms/bubbleSort.js';
import { selectionSort } from '../data/algorithms/selectionSort.js';
import { insertionSort } from '../data/algorithms/insertionSort.js';
import { quickSort } from '../data/algorithms/quickSort.js';
import { mergeSort } from '../data/algorithms/mergeSort.js';
import { heapSort } from '../data/algorithms/heapSort.js';
import { shellSort } from '../data/algorithms/shellSort.js';
import { radixSort } from '../data/algorithms/radixSort.js';
import { bucketSort } from '../data/algorithms/bucketSort.js';
import { countingSort } from '../data/algorithms/countingSort.js';
import { cocktailShakerSort } from '../data/algorithms/cocktailShakerSort.js';
import { combSort } from '../data/algorithms/combSort.js';
import { gnomeSort } from '../data/algorithms/gnomeSort.js';
import { pancakeSort } from '../data/algorithms/pancakeSort.js';

import { visualizeStack } from '../data/dataStructures/stack.js';
import { visualizeQueue } from '../data/dataStructures/queue.js';
import { visualizeLinkedList } from '../data/dataStructures/linkedList.js';
import { visualizeHT } from '../data/dataStructures/hashTable.js';
import { visualizeHeap } from '../data/dataStructures/heap.js';
import { visualizeBST } from '../data/dataStructures/BST.js';
import { visualizeGraph } from '../data/dataStructures/graph.js';

// Algorithm mapping object
const algorithmMapping = {
    'bubbleSort': bubbleSort,
    'selectionSort': selectionSort,
    'insertionSort': insertionSort,
    'quickSort': quickSort,
    'mergeSort': mergeSort,
    'heapSort': heapSort, 
    'shellSort': shellSort,
    'radixSort': radixSort,
    'bucketSort': bucketSort,
    'countingSort': countingSort,
    'cocktailShakerSort': cocktailShakerSort,
    'combSort': combSort,
    'gnomeSort': gnomeSort,
    'pancakeSort': pancakeSort,
};

// Data structure mapping object
const dataStructureMapping = {
    'stack': visualizeStack,
    'queue': visualizeQueue,
    'linked list': visualizeLinkedList,
    'hash table': visualizeHT,
    'BST': visualizeBST,
    'heap': visualizeHeap,
    'graph': visualizeGraph,
};

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

    const selectedAlgorithm = algorithmMapping[algoSelect];
    if (selectedAlgorithm) {
        selectedAlgorithm();
    } else {
        console.error('Algorithm not found: ', algoSelect);
    }
}

function handleDataStructure() {
    const dataStructureSelect = document.getElementById('dataStructure').value;

    const selectedDataStructure = dataStructureMapping[dataStructureSelect];
    if (selectedDataStructure) {
        selectedDataStructure();
    } else {
        console.error('Data Structure not found: ', dataStructureSelect);
    }
}
