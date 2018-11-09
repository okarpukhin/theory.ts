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