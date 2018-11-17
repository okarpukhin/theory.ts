import { random } from "../../../Utils/src/Common";

export function CreateShuffledArray(from: number, to: number){
    if(to < from){
        throw new Error("Invalid arguments");
    }
    let length = to - from + 1;
    let result = new Array<number>(length);
    for(let i = 0; i < length; i++){
        let j = random(0, i);
        if(j !== i){
            result[i] = result[j];
        }
        result[j] = from + i;
    }
    return result;
}