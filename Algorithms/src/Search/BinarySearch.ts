import { isOrderedArray } from "../../../Utils/src/Common";

/**
 * Complexity O(log n)
 * Find the first element in the array, which is equal to target value using binary search algorithm.
 * 
 * Binary search compares the target value to the middle element of array.
 * If the middle element is greater than target value, the search repeats, again taking the middle element of the left half of array.
 * If the middle element is less than target value, the search repeats, again taking the middle element of the right half of array.
 * If the middle element is equal to target value, return its index.
 * 
 * @returns index of founded element, otherwise undefined
 */
export function BinarySearch<T extends number | string>(array: T[], targetValue: T):number{
    if(array.length === 0){
        return undefined;
    }
    if(!isOrderedArray(array)){
        throw new Error("The array is not ordered");
    }

    let first = 0;
    let last = array.length - 1;
    while(first < last){
        let middle = Math.floor((first + last) / 2);
        if(array[middle] >= targetValue){
            last = middle;
        } else {
            first = middle + 1;
        }
    }

    if(first >= array.length || array[first] !== targetValue){
        return undefined;
    }
    return first;
}