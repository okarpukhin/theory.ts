export function KnuthMorrisPrattSearch(text: string, search: string): number[]{
    if(text.length === 0 || search.length === 0 || text.length < search.length){
        return [];
    }

    let prefixTable = KnuthMorrisPrattPrefixFunction(search + "@" + text);
    let result: number[] = [];
    prefixTable.forEach((f, index)=>{
        if(f === search.length){
            result.push(index - 2 * search.length);
        }
    });
    return result;
}

export function KnuthMorrisPrattPrefixFunction(input: string):number[]{
    if(input.length === 0){
        return [];
    }

    let result = new Array<number>(input.length);
    result[0] = 0;
    for(let i = 1; i < input.length; i++){
        result[i] = 0;
        for(let m = result[i - 1] + 1; m >= 1; m--){
            if(input.substr(0, m) === input.substr(i + 1 - m, m)){
                result[i] = m;
                break;
            }
        }
    }
    return result;
}

export function NaivePrefixFunction(input: string):number[]{
    let result = new Array<number>(input.length);
   
    for(let i = 0; i < input.length; i++){
        result[i] = 0;
        for(let m = i; m >= 1; m--){
            if(input.substr(0, m) === input.substr(i + 1 - m, m)){
                result[i] = m;
                break;
            }
        }
    }
    return result;
}