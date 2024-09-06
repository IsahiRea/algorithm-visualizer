const canvas = document.getElementById('visualizerCanvas');
const ctx = canvas.getContext('2d');

export function drawArray(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / array.length;
    for (let i = 0; i < array.length; i++) {
        const barHeight = array[i] * 3;
        ctx.fillStyle = '#007bff';
        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight);
    }
}

export function generateRandomArray(size = 20, maxValue = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * maxValue));
}


// Function to draw the stack
export function drawStack(stack) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rectWidth = 80;
    const rectHeight = 30;
    for (let i = 0; i < stack.length; i++) {
        ctx.fillStyle = '#28a745';
        ctx.fillRect(100, canvas.height - (i + 1) * rectHeight, rectWidth, rectHeight);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(100, canvas.height - (i + 1) * rectHeight, rectWidth, rectHeight);
        ctx.fillStyle = '#fff';
        ctx.fillText(stack[i], 120, canvas.height - i * rectHeight - 15);
    }
}

// Function to draw the queue
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