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
