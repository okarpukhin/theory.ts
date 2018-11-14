/**
 * Complexities: worst O(nm), average O(n)
 * Search the first occurrence of the search pattern
 */
export function BoyerMooreStringSearch(text: string, s: string): number{
    if(text.length === 0 || s.length === 0 || text.length < s.length){
        return -1;
    }

    let skipTable = SkipTable(s);

    let p = 0;
    let maxP = text.length - s.length;
    while(p <= maxP){
        let lastCharP = p + s.length - 1;
        let skip = 0;
        for(let i = lastCharP; i >= p; i--){
            if(text.charAt(i) !== s.charAt(i - p)){
                skip = skipTable[text.charAt(i)];
                if(skip === undefined){
                    skip = s.length;
                }
                p += skip;
                break;
            }
        }

        if(skip === 0){
            return p;
        }
    }
    return -1;
}

export function SkipTable(s: string): { [id: string]: number }{
    let skipTable: { [id: string]: number } = {};
    for(let i = 0; i < s.length; i++){
        skipTable[s.charAt(i)] = s.length - 1 - i;
    }
    return skipTable;
}