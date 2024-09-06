import { initializeUI } from './ui.js';
import { handleSelection } from './router.js';
import { stopVisual, startVisual } from './controls.js';

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const continueBtn = document.getElementById('continueBtn');

// Initialize the UI components (e.g., dropdowns, buttons)
initializeUI();

// Event listener to start visualization
startBtn.addEventListener('click', () => {
    handleSelection(); // Delegate the task of handling the selection
});

// Stop button listener
stopBtn.addEventListener('click', stopVisual);

// Continue button listener
continueBtn.addEventListener('click', startVisual);
