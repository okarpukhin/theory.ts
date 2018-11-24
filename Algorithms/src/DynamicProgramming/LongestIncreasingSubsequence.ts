export function Naive(array: number[]){

}

function doNaive(array: number[], n: number){
    if(n <= 1){
        return n;
    }

    let result = 1;

    for(let i = 1; i < n; i++){
        let next = doNaive(array, i);
        if(array[i - 1] < array[n - 1] && (next + 1) < result){
            result = next + 1;
        }
    }

    return result;
}