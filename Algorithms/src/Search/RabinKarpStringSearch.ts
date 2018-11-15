let hashMultiplier = 101;

export function RabinKarpStringSearch(text: string, s: string): number{
    let patternHash = hash(s);
    let currentHash = hash(text.substr(0, s.length));

    if(patternHash === currentHash){
        return 0;
    }

    for(let i = 0; i < text.length - s.length; i++){
        currentHash = nextHash(currentHash, text.charAt(i), text.charAt(i + s.length), s.length);

        if(patternHash === currentHash && s === text.substr(i + 1, s.length)){
            return i + 1;
        }
    }

    return -1;
}

export function hash(pattern: string): number{
    let result = 0;
    for(let i = 0; i < pattern.length; i++){
        result += pattern.charCodeAt(i) * Math.pow(hashMultiplier, pattern.length - 1 - i);
    }
    return result;
}

export function nextHash(prevHash: number, dropped: string, added: string, patternSize: number): number{
    if(dropped.length !== 1 || added.length !== 1){
        throw new Error("Invalid arguments");
    }
    let oldHash = prevHash - (dropped.charCodeAt(0) * Math.pow(hashMultiplier, patternSize - 1));
    return oldHash * hashMultiplier + added.charCodeAt(0);
}