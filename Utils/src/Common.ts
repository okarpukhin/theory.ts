export const capacity = 32;

export function getHashCode(key: string | number): number {
    if(typeof(key) === "number"){
        return key % capacity;
    }

    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        let chr = key.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash % capacity;
}

export let isNullOrUndefined = (value: any):boolean => {
    return value === null || value === undefined;
}

export function swap(array: any[], indexA: number, indexB: number): void{
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

export function arraysAreEqual<T>(array1: T[], array2: T[]):boolean{
    if(array1.length !== array2.length){
        return false;
    }
    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}

export function isSortedArray<T extends (number | string)>(array: T[]):boolean{
    for(let i = 1; i < array.length; i++){
        if(array[i-1] > array[i]){
            return false;
        }
    }
    return true;
}