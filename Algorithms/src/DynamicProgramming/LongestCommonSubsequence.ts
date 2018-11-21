import { Array2D } from "../../../DataStructures/src/Array2D";

/**
 * The worst complexity (when all characters of sequences mismatch) O(2^n)
 */
export function Naive(sequenceA:string, sequenceB: string): number{
    return doNaive(sequenceA, sequenceB, sequenceA.length, sequenceB.length);
}

function doNaive(sequenceA:string, sequenceB: string, indexA: number, indexB: number): number{
    if(indexA === 0 || indexB === 0){
        return 0;
    }

    if(sequenceA.charAt(indexA - 1) === sequenceB.charAt(indexB - 1)){
        return doNaive(sequenceA, sequenceB, indexA - 1, indexB - 1) + 1;
    }

    return Math.max(
        doNaive(sequenceA, sequenceB, indexA - 1, indexB), 
        doNaive(sequenceA, sequenceB, indexA , indexB - 1));
}

/**
 * Complexity O(mn)
 */
export function DynamicProgramming(sequenceA:string, sequenceB: string): number{
    let table = new Array2D<number>(sequenceA.length, sequenceB.length);
    for(let indexA = 0; indexA < sequenceA.length; indexA++){
        for(let indexB = 0; indexB < sequenceB.length; indexB++){
            if(sequenceA.charAt(indexA) === sequenceB.charAt(indexB)){
                table.set(indexA, indexB, table.tryGet(indexA - 1, indexB - 1, 0) + 1);
            } else {
                table.set(indexA, indexB, Math.max(table.tryGet(indexA - 1, indexB, 0), table.tryGet(indexA, indexB - 1, 0)));
            }
        }
    }
    return table.get(sequenceA.length - 1, sequenceB.length - 1);
}