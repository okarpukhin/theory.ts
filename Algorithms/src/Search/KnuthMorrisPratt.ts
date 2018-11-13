/**
 * Complexity O(n+m)
 * Find the all positions of all occurrences of the string s in the text.
 */
export function KnuthMorrisPrattSearch(text: string, s: string): number[]{
    if(text.length === 0 || s.length === 0 || text.length < s.length){
        return [];
    }

    let prefixTable = KnuthMorrisPrattPrefixFunction(s + "@" + text);
    let result: number[] = [];
    prefixTable.forEach((f, index)=>{
        if(f === s.length){
            result.push(index - 2 * s.length);
        }
    });
    return result;
}

/**
 * Complexity O(n)
 */
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

/**
 * Complexity O(n³)
 */
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