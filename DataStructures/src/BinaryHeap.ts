import { swap } from "../../Utils/src/Common";
import { BinaryHeapMap, Type } from "./BinaryHeapMap";

export class BinaryHeap<T extends (number | string)>{
    private readonly map: BinaryHeapMap<T,T>;
    constructor(type: Type, ...items: T[]){
        this.map = new BinaryHeapMap(type);
        items.forEach(f=>this.push(f));
    }

    /**
     * Complexity O(log n)
     */
    push(value: T): void {
        this.map.push(value, value);
    }

    /**
     * Complexity O(log n)
     */
    pop(): T{
        let result = this.map.pop();
        if(result === undefined){
            return undefined;
        }
        return result.key;
    }

    get size(){
        return this.map.size;
    }

    get isEmpty(){
        return this.map.isEmpty;
    }
    
    get items(){
        return this.map.items.map(f=>f.key);
    }
}