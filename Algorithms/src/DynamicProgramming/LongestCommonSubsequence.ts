/**
 * The worst complexity (when all characters of sequences mismatch) O(2^n)
 */
export function NaiveRecursion(sequenceA:string, sequenceB: string): number{
    return doNaiveRecursion(sequenceA, sequenceB, sequenceA.length, sequenceB.length);
}

function doNaiveRecursion(sequenceA:string, sequenceB: string, indexA: number, indexB: number): number{
    if(indexA === 0 || indexB === 0){
        return 0;
    }

    if(sequenceA.charAt(indexA - 1) === sequenceB.charAt(indexB - 1)){
        return doNaiveRecursion(sequenceA, sequenceB, indexA - 1, indexB - 1) + 1;
    }

    return Math.max(
        doNaiveRecursion(sequenceA, sequenceB, indexA - 1, indexB), 
        doNaiveRecursion(sequenceA, sequenceB, indexA , indexB - 1));
}

/**
 * Complexity O(mn)
 */
export function Tabulated(sequenceA:string, sequenceB: string): number{
    let table: {[id:number]: {[id:number]: number}} = { };
    table[-1] = {};
    for(let indexA = 0; indexA < sequenceA.length; indexA++){
        table[indexA] = {};
        for(let indexB = 0; indexB < sequenceB.length; indexB++){
            if(sequenceA.charAt(indexA) === sequenceB.charAt(indexB)){
                table[indexA][indexB] = (table[indexA - 1][indexB - 1] || 0) + 1;
            } else {
                table[indexA][indexB] = Math.max(table[indexA - 1][indexB] || 0, table[indexA][indexB - 1] || 0);
            }
        }
    }
    return table[sequenceA.length - 1][sequenceB.length - 1];
}