export function initializeUI() {
    const visualTypeSelect = document.getElementById('visualType');
    const algoSelect = document.getElementById('algo-group');
    const dataStructureSelect = document.getElementById('data-structure-group');
    const treeSelect = document.getElementById('tree-group');
    const graphSelect = document.getElementById('graph-group');

    const continueBtn = document.getElementById('continueBtn');
    const stopBtn = document.getElementById('stopBtn');

    visualTypeSelect.addEventListener('change', () => {
        if (visualTypeSelect.value === 'algorithm') {
            // Show the algorithm dropdown
            algoSelect.style.display = 'block';
            dataStructureSelect.style.display = 'none';
            treeSelect.style.display = 'none';
            graphSelect.style.display = 'none';
        } else if (visualTypeSelect.value === 'dataStructure') {
            // Show the data structure dropdown
            algoSelect.style.display = 'none';
            dataStructureSelect.style.display = 'block';
            treeSelect.style.display = 'none';
            graphSelect.style.display = 'none';
        }
        else if(visualTypeSelect.value === 'tree') {
            // Show the tree structure dropdown
            algoSelect.style.display = 'none';
            dataStructureSelect.style.display = 'none';
            treeSelect.style.display = 'block';
            graphSelect.style.display = 'none';
        }
        else if(visualTypeSelect.value === 'graph') {
            // Show the tree structure dropdown
            algoSelect.style.display = 'none';
            dataStructureSelect.style.display = 'none';
            treeSelect.style.display = 'none';
            graphSelect.style.display = 'block';
        }
    });

    stopBtn.addEventListener('click', () => {
        
        continueBtn.style.display = 'block';
        stopBtn.style.display = 'none';

    });

    continueBtn.addEventListener('click', () => {
        
        stopBtn.style.display = 'block';
        continueBtn.style.display = 'none';

    });

    // Set the initial UI state (default is algorithm visible)
    algoSelect.style.display = 'block';
    dataStructureSelect.style.display = 'none';
    treeSelect.style.display = 'none';
    graphSelect.style.display = 'none';

    stopBtn.style.display = 'block';
    continueBtn.style.display = 'none';




}
