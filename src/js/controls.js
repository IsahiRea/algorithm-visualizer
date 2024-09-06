let isSorting = true;

export function stopSorting() {
    isSorting = false;
}

export function isSortingActive() {
    return isSorting;
}

export function startSorting() {
    isSorting = true;
}
