let isRunning = false;

export function stopVisual() {
    isRunning = false;
}

export function isActive() {
    return isRunning;
}

export function startVisual() {
    isRunning = true;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateRandomArray(size = 20, maxValue = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * maxValue));
}

export function startTimer() {
    const timer = document.getElementById('timer');
    let time = 0;
    const interval = setInterval(() => {
        time++;
        timer.textContent = `Time: ${time}s`;
        if (!isRunning) {
            clearInterval(interval);
            timer.textContent = '';
        }
    }, 1000);

}