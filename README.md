# Data Structures & Algorithms Visualizer

This project is a web-based visualizer for algorithms like Bubble Sort, Selection Sort, and others. It provides an interactive way to understand the step-by-step execution of various algorithms and data structures. Built with HTML, CSS, and JavaScript, it features a responsive design and a modular codebase for extensibility.

---

## Features
- Visualize sorting algorithms and data structures step by step.
- Responsive canvas design that works well on smaller screens.
- Modular structure for easy addition of new algorithms or features.

---

## Project Structure
### Root Files
- **`index.html`**: The main HTML file containing the canvas and controls.
- **`assets/css/`**: Contains CSS files for styling the visualizer.

### Source Code
- **`app/`**: Application entry point and UI management:
  - `main.js`: Initializes the app and delegates tasks.
  - `router.js`: Determines user selection between algorithms and data structures.
  - `ui.js`: Manages dropdowns, buttons, and other UI elements.
- **`canvas/`**: Handles all canvas rendering logic.
- **`data/`**: Organizes JavaScript modules for algorithms and data structures:
  - **`algorithms/`**: Sorting algorithm implementations:
    | `bubbleSort.js`        | `selectionSort.js`      | `insertionSort.js`   | `quickSort.js`         |
    |------------------------|-------------------------|----------------------|------------------------|
    | `mergeSort.js`         | `heapSort.js`           | `shellSort.js`       | `radixSort.js`         |
    | `bucketSort.js`        | `countingSort.js`       | `cocktailShakerSort.js` | `combSort.js`        |
    | `gnomeSort.js`         | `pancakeSort.js`        |                      |                        |
  - **`dataStructures/`**: Data structure implementations:
    - `stack.js`
    - `queue.js`
    - `linkedList.js`
    - `hashTable.js`
    - `binarySearchTree.js`
    - `heap.js`
    - `graph.js`
  - **`shared/`**: Shared utility functions:
    - `controls.js`: Handles user input and sorting control flags.

---

## Running the Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Steps
1. **Install Project Dependencies**:
   Navigate to the project directory in your terminal and run:
   ```bash
   npm install
   ```
2. **Start the Development Server**:
   Run the following command to start the Vite development server:
   ```bash
   npm run dev
   ```
   This will start a local server. Open your browser and navigate to the displayed URL (usually `http://localhost:3000`).
3. **Stop the Development Server**:
   Press `Ctrl + C` in the terminal where the server is running.

---

## How to Use
1. Open `index.html` in your browser.
2. Select an algorithm or data structure from the dropdown menu.
3. Click "Start" to visualize the execution.
4. Click "Stop" to halt the visualization.

---

## Future Improvements
- Add more sorting and searching algorithms.
- Enable user input for custom array sizes and values.
- Include speed control for faster or slower visualization.
- Add more data structures and enhance their interactivity.

---

## Contributing
Contributions are welcome! Feel free to fork this repository, make changes, and open a pull request.