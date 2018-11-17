/**
 * Complexity O(n log n)
 */
export function MergeSort<T extends (number | string)>(array: T[]): T[]{
    if(array.length <= 1){
        return array;
    }

    let middle = array.length / 2;

    return doMerge(
        MergeSort(array.slice(0, middle)),
        MergeSort(array.slice(middle, array.length))
    );
}

function doMerge<T>(leftArray: T[], rightArray: T[]): T[] {
    let result: T[] = [];

    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        if(leftArray[leftIndex] < rightArray[rightIndex]){
            result.push(leftArray[leftIndex++]);
        } else if(leftArray[leftIndex] > rightArray[rightIndex]) {
            result.push(rightArray[rightIndex++]);
        } else {
            result.push(leftArray[leftIndex++]);
            result.push(rightArray[rightIndex++]);
        }
    }
    while(leftIndex < leftArray.length){
        result.push(leftArray[leftIndex++]);
    }
    while(rightIndex < rightArray.length){
        result.push(rightArray[rightIndex++]);
    }
    return result;
}