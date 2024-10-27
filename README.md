# Data Structures & Algorithms Visualizer

This project is a simple web-based visualizer for algorithms like Bubble Sort and Selection Sort. It uses HTML, CSS, and JavaScript to visualize the execution of the algorithms step by step.

## Features
- Data structures and algorithms with step-by-step visualization.
- Responsive canvas that scales well on smaller screens.
- Modular structure, making it easy to add more algorithms in the future.

## Project Structure
- **index.html**: Main HTML file that includes the canvas and controls.
- **app/**: Contains the starting point of the application
  - `main.js`: Initialize the app and delegate tasks.
  - `router.js`: Responsible for determining whether the user selected an algorithm or a data structure
  - `ui.js`: Handle the dropdowns, button states, and any other UI elements
- **assets/css/**: Contains CSS files for styling the visualizer.
- **canvas/**: Contains all canvas rendering files
- **data/**: Contains the JavaScript logic, organized into modules:
  - `algorithms/`: Contains different sorting algorithms.
    - `bubbleSort.js`
    - `selectionSort.js`
    - `insertionSort.js`
    - `quickSort.js`
    - `mergeSort.js`
    - `heapSort.js`
  - `dataStructures/`: Contains different data structures.
    - `stack.js`
    - `queue.js`
    - `linked list.js`
    - `hast table.js`
    - `Binary Search Tree.js`
    - `heap.js`
    - `graph.js`
  - `shared/`: Contains shared utility functions
    - `controls.js`: Handles user input and sorting control flags.
### Running the Project Locally
1. **Install Node.js**:  
  Ensure that [Node.js](https://nodejs.org/) is installed on your machine.
2. **Install Project Dependencies**: 
  Open your terminal and navigate to the project directory. Then, install the necessary dependencies by running:
  `npm install`
3. **Start the Development Server**: 
  After the dependencies are installed, run the following command to start the Vite development server:
  `npm run dev`\
  This will start a local server, and you can access the project in your browser.
4. **Stop the Development Server**: 
  To stop the Vite development server, go back to the terminal where the server is running and press Ctrl + C

## How to Use
1. Open `index.html` in a web browser.
2. Select an algorithm from the dropdown.
3. Click "Start" to run the algorithm.
4. Click "Stop" to stop the algorithm in progress.

## Future Improvements
- Add more sorting algorithms
- Add user input for custom array sizes and values.
- Add speed control for faster or slower visualization.
