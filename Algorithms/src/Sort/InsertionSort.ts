import { swap } from "../../../Utils/src/Common";

/**
 * Complexities: best O(n), average O(n²), worst O(n²)
 */
export function InsertionSort<T extends (number | string)>(array: T[]): void{
    for(let i = 1; i < array.length; i++){
        if(array[i] < array[i-1]){
            for(let j = i; j > 0 && array[j - 1] > array[j]; j--){
                swap(array, j - 1, j);
            }
        }
    }
}