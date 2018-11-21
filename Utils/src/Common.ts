export const capacity = 32;

export function getHashCode(key): number {
    if(typeof(key) === "number"){
        return key % capacity;
    }

    let keyString: string;
    if((typeof(key) === "string")){
        keyString = key;
    } else {
        keyString = JSON.stringify(key);
    }

    let hash = 0;
    for (let i = 0; i < keyString.length; i++) {
        let chr = keyString.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash % capacity;
}

export function equalsAsJSON<T>(a: T, b: T): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

export function swap(array: any[], indexA: number, indexB: number): void{
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}

export function arraysAreEqual<T>(array1: T[], array2: T[], withSort = false):boolean{
    if(array1.length !== array2.length){
        return false;
    }

    if(withSort === true){
        array1.sort();
        array2.sort();
    }

    for(let i = 0; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return false;
        }
    }
    return true;
}

export function isOrderedArray<T extends (number | string)>(array: T[]):boolean{
    for(let i = 1; i < array.length; i++){
        if(array[i-1] > array[i]){
            return false;
        }
    }
    return true;
}

export function random(from: number, to: number): number{
    return Math.round((to - from) * Math.random()) + from;
}

class Counter{
    private count = 0;

    increment(){
        this.count++;
    }

    reset(){
        this.count = 0;
    }

    get value(){
        return this.count;
    }
}

export let counter = new Counter();