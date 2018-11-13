import { random } from "../../../Utils/src/Common";

export function ReservoirSampling<T>(source: T[], k: number): T[]{
    if(source.length < k){
        throw new Error("Invalid arguments");
    }

    let result = new Array<T>(k);

    for(let i = 0; i < k; i++){
        result[i] = source[i];
    }

    for(let i = k; i < source.length; i++){
        let v = random(1, i);
        if(v < k){
            result[v] = source[i];
        }
    }

    return result;
}