import { algorithmMapping } from '../data/algorithms/algorithmImports.js';
import { dataStructureMapping } from '../data/dataStructures/dsImports.js';

export function handleSelection() {
    const visualTypeSelect = document.getElementById('visualType').value;

    if (visualTypeSelect === 'algorithm') {
        conductSelection('algo', algorithmMapping, 'Algorithm');
    } else if (visualTypeSelect === 'dataStructure') {
        conductSelection('dataStructure', dataStructureMapping, 'Data Structure');
    }
}

function conductSelection(selectId, mapping, type) {
    const selectValue = document.getElementById(selectId).value;
    const selectedItem = mapping[selectValue];
    if (selectedItem) {
        selectedItem();
    } else {
        console.error(`${type} not found: `, selectValue);
    }
}
