export class Trie{
    private readonly root = new Node("");

    constructor(...values: string[]){
        this.add(...values);
    }
    
    private getIndex(value: string){
        return value.charCodeAt(0) - "a".charCodeAt(0);
    }

    add(...values: string[]){
        values.forEach(value => {
            let node = this.root;
            for(let i = 0; i < value.length; i++){
                let char = value.charAt(i);
                let index = this.getIndex(char);

                let child = node.children[index];
                if(!child){
                    child = new Node(char);
                    node.children[index] = child;
                }
                node = child;
            }
            node.isWord = true;
        });
    }

    find(prefix: string): string[]{
        let node = this.root;
        for(let i = 0; i < prefix.length; i++){
            let char = prefix.charAt(i);
            let index = this.getIndex(char);

            let child = node.children[index];
            if(!child){
                return [];
            }
            node = child;
        }
        return this.getWords(node, prefix.substr(0, prefix.length - 1));
    }

    toArray(){
        return this.getWords(this.root, "");
    }

    private getWords(node: Node, prefix: string):string[]{
        let result = [];
        prefix = prefix + node.value;
        if(node.isWord){
            result.push(prefix);
        }
        node.children.filter(f=>f).forEach(f=>{
            result.push(...this.getWords(f, prefix));
        });
        return result;
    }
}

class Node{
    readonly value: string;
    isWord = false;
    children = new Array<Node>(26);

    constructor(value: string){
        this.value = value;
    }
}