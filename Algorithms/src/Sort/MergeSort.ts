export function MergeSort<T extends (number | string)>(array: T[]): T[]{
    return doMergeSort(array, 0, array.length);
}

function doMergeSort<T extends (number | string)>(array: T[], from: number, length: number): T[]{
    if(length <= 1){
        return array.slice(from, length);
    }

    let middle = Math.floor(length / 2);

    return doMerge(
        doMergeSort(array, from, middle),
        doMergeSort(array, middle, length - middle),
    );
}

function doMerge<T>(leftArray: T[], rightArray: T[]): T[] {
    let result: T[] = new Array(leftArray.length + rightArray.length);

    let resultIndex = 0;
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        if(leftArray[leftIndex] < rightIndex[rightIndex]){
            result[resultIndex++] = leftArray[leftIndex++];
        } else {
            result[resultIndex++] = rightArray[rightIndex++];
        }
    }
    while(leftIndex < leftArray.length){
        result[resultIndex++] = leftArray[leftIndex++];
        leftIndex++;
    }
    while(rightIndex < rightArray.length){
        result[resultIndex++] = rightArray[rightIndex++];
    }
    return result;
}