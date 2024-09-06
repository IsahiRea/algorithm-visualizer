import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { drawArray, generateRandomArray } from './canvas.js';
import { stopSorting } from './controls.js';

let array = [];
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const algoSelect = document.getElementById('algo');

// Event listener to start visualization
startBtn.addEventListener('click', async () => {
    array = generateRandomArray();  // Generate a new random array
    drawArray(array);  // Initial draw
    const selectedAlgo = algoSelect.value;

    // Lazy load and run the selected algorithm
    if (selectedAlgo === 'bubbleSort') {
        bubbleSort(array, drawArray, stopSorting);
    } else if (selectedAlgo === 'selectionSort') {
        selectionSort(array, drawArray, stopSorting);
    }
});

// Stop button handler
stopBtn.addEventListener('click', stopSorting);
