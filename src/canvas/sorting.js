const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

// Sorting ---------------------------------------------------------------
export function drawArray(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    for (let i = 0; i < array.length; i++) {
        const barHeight = array[i] * 3;
        ctx.fillStyle = '#007bff';
        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight);
    }
}



















