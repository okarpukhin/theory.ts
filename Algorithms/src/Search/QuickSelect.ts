import { swap } from "../../../Utils/src/Common";

/**
 * Find the first element in the array, which is equal to toFind
 * @param array 
 * @param toFind 
 * @returns index of found element, otherwise undefined
 */
export function QuickSelect<T extends number | string>(array: T[], k: number):T{
    if(k === 0 || k > array.length){
        return undefined;
    }

    doSort(array, 0, array.length - 1, k);
    return array[k - 1];
}

function doSort(array, from: number, to: number, k: number){
    if(from >= to){
        return;
    }

    let pivotIndex = Math.floor((to + from) / 2);

    swap(array, pivotIndex, from);

    let index = from;
    for(let i = from + 1; i <= to; i++){
        if(array[i] < array[from]){
            swap(array, ++index, i);
        }
    }

    swap(array, from, index);

    doSort(array, from, index - 1, k);
    if(index + 1 <= pivotIndex){
        doSort(array, index + 1, to, k);
    }
}