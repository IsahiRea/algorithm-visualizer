import { bubbleSort } from './bubbleSort.js';
import { selectionSort } from './selectionSort.js';
import { insertionSort } from './insertionSort.js';
import { quickSort } from './quickSort.js';
import { mergeSort } from './mergeSort.js';
import { heapSort } from './heapSort.js';
import { shellSort } from './shellSort.js';
import { radixSort } from './radixSort.js';
import { bucketSort } from './bucketSort.js';
import { countingSort } from './countingSort.js';
import { cocktailShakerSort } from './cocktailShakerSort.js';
import { combSort } from './combSort.js';
import { gnomeSort } from './gnomeSort.js';
import { pancakeSort } from './pancakeSort.js';

export const algorithmMapping = {
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
    'pancakeSort': pancakeSort
};