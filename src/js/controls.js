let isRunning = true;

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