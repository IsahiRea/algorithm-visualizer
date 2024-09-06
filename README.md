# Data Structures & Algorithms Visualizer

This project is a simple web-based visualizer for algorithms like Bubble Sort and Selection Sort. It uses HTML, CSS, and JavaScript to visualize the execution of the algorithms step by step.

## Features
- **Bubble Sort** and **Selection Sort** algorithms with step-by-step visualization.
- Responsive canvas that scales well on smaller screens.
- Modular structure, making it easy to add more algorithms in the future.

## Project Structure
- **index.html**: Main HTML file that includes the canvas and controls.
- **css/**: Contains CSS files for styling the visualizer.
- **js/**: Contains the JavaScript logic, organized into modules:
  - `main.js`: Main controller file.
  - `canvas.js`: Handles canvas rendering and utility functions.
  - `controls.js`: Handles user input and sorting control flags.
  - `algorithms/`: Contains different sorting algorithms.
    - `bubbleSort.js`
    - `selectionSort.js`

## How to Use
1. Open `index.html` in a web browser.
2. Select an algorithm from the dropdown.
3. Click "Start" to run the algorithm.
4. Click "Stop" to stop the algorithm in progress.

## Future Improvements
- Add more algorithms (e.g., Quick Sort, Merge Sort, etc.).
- Add user input for custom array sizes and values.
- Add speed control for faster or slower visualization.
