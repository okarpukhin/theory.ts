import { isOrderedArray } from "../../../Utils/src/Common";

/**
 * Find the first element in the array, which is equal to toFind
 * @param array 
 * @param toFind 
 * @returns index of found element, otherwise undefined
 */
export function BinarySearch<T extends number | string>(array: T[], toFind: T):number{
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
        if(array[middle] >= toFind){
            last = middle;
        } else {
            first = middle + 1;
        }
    }

    if(first >= array.length || array[first] !== toFind){
        return undefined;
    }
    return first;
}