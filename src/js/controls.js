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