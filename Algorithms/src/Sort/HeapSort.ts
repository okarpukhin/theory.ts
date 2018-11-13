import { BinaryHeap } from "../../../DataStructures/src/BinaryHeap";

/**
 * Complexity O(n log n)
 * Sort an array using Min Binary Heap
 */
export function HeapSort<T extends (number | string)>(array: T[]): T[]{
    let binaryHeap = new BinaryHeap("MinHeap", ...array);
    let result = new Array<T>(binaryHeap.items.length);
    for(let i = 0; i < result.length; i++){
        result[i] = binaryHeap.pop()
    }
    return result;
}