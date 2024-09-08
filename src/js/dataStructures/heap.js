// Since JS doesn't have an implemented Heap DS, we must have a workaround.
// Or to use another language

import { stopVisual, isActive, startVisual, sleep } from "../controls";
import { drawHeap, generateRandomArray } from "../canvas";


/* 
    NOTE:
     - Left child would be at (2i+1)th position
     - Right one would be at (2i+2)th position
     - Parent node would be located at floor((i-1)/2)th position
*/

// adds the provided newKey into the min-heap named "heap"
function heappush(heap, newKey){
    // push the new key 
    heap.push(newKey);

    // get the current index of pushed key
    let curr = heap.length-1;

    // keep comparing till root is reached or we terminate in middle
    while(curr > 0) {

        let parent = Math.floor((curr-1)/2)

        if( heap[curr] < heap[parent] ) {
            // quick swap
            [ heap[curr], heap[parent] ] = [ heap[parent], heap[curr] ]
            // update the index of newKey
            curr = parent
        } 
        else {
            // if no swap, break, since we heap is stable now
            break
        }
    }
}

// removes the smallest key from the min-heap named "heap"
function heappop(heap) {
    // swap root with last node
    const n = heap.length;
    [heap[0], heap[n-1]] = [ heap[n-1], heap[0]]
  
    // remove the root i.e. the last item (because of swap)
    const removedKey = heap.pop();
  
    // Compare the new node's key with it's children (down the tree)
    percolateDown(heap, 0)
  
    // finally return the removed key
    return removedKey;
}

// follows pretty much the same logic as heappush, except minor modifications
function percolateDown(heap, index){
    let curr = index;
    // keep going down till heap property is established
    while(2*curr + 1 < heap.length) {

        const leftIndex = 2 * curr + 1; 
        const rightIndex = 2 * curr + 2;
        const minChildIndex = (rightIndex < heap.length && heap[rightIndex] < heap[leftIndex] ) ? rightIndex :leftIndex;

        if(heap[minChildIndex] < heap[curr]) {

            // quick swap, if smaller of two children is smaller than the parent (min-heap)
            [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]]
            curr = minChildIndex
        } 
        else {
            break
        }
    }
}

// Used to convert array into heap
function heapify(heap) {
    const last = Math.floor(heap.length/2 - 1);

    for(let i = 0; i <= last; i++){
       percolateDown(heap, i)
    }
    return heap
}
  

export function visualizeHeap() {
    performHeapOperations()
}

async function performHeapOperations() {
    startVisual();

    const array = generateRandomArray();
    const heap = []

    const len = 6
    for(let i = 0; i < len; i++) {
        
        heappush(heap, array[i])
        console.log(heap)
        drawHeap(heap);
        await sleep(2000);

        while (!isActive) {
            await sleep(200);
        }
    }

    stopVisual();
}
