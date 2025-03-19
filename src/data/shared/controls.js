let isRunning = false;
let completed = true;

export function stopVisual() {
    completed = true;
}

export function pauseVisual() {
    isRunning = false;
}

export function startVisual() {
    isRunning = true;
    completed = false;
}

export function isCompleted() {
    return completed;
}

export function isActive() {
    return isRunning;
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
        
        if (!isActive()) {
            timer.textContent = `Time: ${time}s (PAUSED)`; // Reset the timer
        }
        
        if (isCompleted()) {
            clearInterval(interval);
            timer.textContent = '';
        }

        if (isActive()) {
            time++;
            timer.textContent = `Time: ${time}s`;
        }

    }, 1000);

}