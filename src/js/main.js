import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { visualizeStack } from './dataStructures/stack.js';
import { drawArray, generateRandomArray } from './canvas.js';
import { stopSorting } from './controls.js';

let array = [];
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const visualTypeSelect = document.getElementById('visualType');
const algoSelect = document.getElementById('algo');
const dataStructureSelect = document.getElementById('dataStructure');

// Show relevant dropdown based on selection type
visualTypeSelect.addEventListener('change', () => {
    if (visualTypeSelect.value === 'algorithm') {
        algoSelect.style.display = 'block';
        dataStructureSelect.style.display = 'none';
    } else {
        algoSelect.style.display = 'none';
        dataStructureSelect.style.display = 'block';
    }
});

// Event listener to start visualization
startBtn.addEventListener('click', async () => {
    if (visualTypeSelect.value === 'algorithm') {
        array = generateRandomArray();
        drawArray(array);
        const selectedAlgo = algoSelect.value;
        if (selectedAlgo === 'bubbleSort') {
            bubbleSort(array, drawArray, stopSorting);
        } else if (selectedAlgo === 'selectionSort') {
            selectionSort(array, drawArray, stopSorting);
        }
    } else {
        const selectedStructure = dataStructureSelect.value;
        if (selectedStructure === 'stack') {
            visualizeStack();
        }
    }
});

stopBtn.addEventListener('click', stopSorting);
