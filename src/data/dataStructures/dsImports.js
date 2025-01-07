import { visualizeStack } from './stack.js'
import { visualizeQueue } from './queue.js';
import { visualizeLinkedList } from './linkedList.js';
import { visualizeHT } from './hashTable.js';
import { visualizeHeap } from './heap.js';
import { visualizeBST } from './BST.js';
import { visualizeGraph } from './graph.js';

// Data structure mapping object
export const dataStructureMapping = {
    'stack': visualizeStack,
    'queue': visualizeQueue,
    'linkedList': visualizeLinkedList,
    'hashTable': visualizeHT,
    'heap': visualizeHeap,
    'BST': visualizeBST,
    'graph': visualizeGraph
};