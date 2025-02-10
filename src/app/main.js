import { initializeUI } from './ui.js';
import { handleSelection } from './router.js';
import { stopVisual, startVisual, isActive, sleep } from '../data/shared/controls.js';

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const continueBtn = document.getElementById('continueBtn');

const algoDropdown = document.getElementById('algo');
const dataStructureDropdown = document.getElementById('dataStructure');

const algorithms = [
    'bubbleSort', 'selectionSort', 'insertionSort', 'quickSort', 'mergeSort', 
    'heapSort', 'shellSort', 'radixSort', 'bucketSort', 'countingSort', 
    'cocktailShakerSort', 'combSort', 'gnomeSort', 'pancakeSort'
];

const dataStructures = [
    'stack', 'queue', 'linkedList', 'hashTable', 'BST', 'heap', 'graph'
];

// Function to populate the dropdown with options
function populateDropdown(selectElement, options) {

    // Create an option element for each algorithm
    options.forEach(option => {
        //TODO: Is there a better way to create an option element?
        const opt = document.createElement('option');
        opt.value = option;

        // Add spaces between capital letters
        opt.textContent = option.replace(/([A-Z])/g, ' $1').trim();
        selectElement.appendChild(opt);
    });
}

// Populate the algorithm and data structure dropdowns
populateDropdown(algoDropdown, algorithms);
populateDropdown(dataStructureDropdown, dataStructures);

// Initialize the UI components (e.g., dropdowns, buttons)
initializeUI();

// Event listener to start visualization
startBtn.addEventListener('click', () => {
    // Clear the visualization if it's already running
    if (isActive()) {
        alert('Visualization is already running. Please stop it first.');
        return;
    }

    handleSelection(); // Delegate the task of handling the selection
});

// Stop button listener
stopBtn.addEventListener('click', stopVisual);

// Continue button listener
continueBtn.addEventListener('click', startVisual);
