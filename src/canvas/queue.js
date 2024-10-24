const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

// Queue ---------------------------------------------------------------
export function drawQueue(queue) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rectWidth = 80;
    const rectHeight = 30;
    for (let i = 0; i < queue.length; i++) {
        ctx.fillStyle = '#007bff';
        ctx.fillRect(100 + i * (rectWidth + 10), canvas.height / 2 - rectHeight / 2, rectWidth, rectHeight);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(100 + i * (rectWidth + 10), canvas.height / 2 - rectHeight / 2, rectWidth, rectHeight);
        ctx.fillStyle = '#fff';
        ctx.fillText(queue[i], 125 + i * (rectWidth + 10), canvas.height / 2);
    }
}