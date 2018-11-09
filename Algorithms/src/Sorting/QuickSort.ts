import { swap } from "../../../Utils/src/Common";

export function QuickSort<T extends (number | string)>(array: T[]): void{
    doSort(array, 0, array.length - 1);
}

function doSort(array, from, to){
    if(from >= to){
        return;
    }
    let pivotIndex = Math.floor((to + from) / 2);
    //let pivotIndex = Math.round((to - from) * Math.random()) + from;
    swap(array, pivotIndex, from);

    let index = from;
    for(let i = from + 1; i <= to; i++){
        if(array[i] < array[from]){
            swap(array, ++index, i);
        }
    }

    swap(array, from, index);

    doSort(array, from, index - 1);
    doSort(array, index + 1, to);
}