import { swap } from "../../Utils/src/Common";

export type Type = "MaxHeap" | "MinHeap";

export class Entry<TKey extends (number | string), TValue>{
    readonly key: TKey;
    readonly value: TValue;

    constructor(key: TKey, value: TValue){
        this.key = key;
        this.value = value;
    }
}

export class BinaryHeapMap<TKey extends (number | string), TValue>{
    readonly type: Type;
    readonly items: Entry<TKey,TValue>[] = [];

    constructor(type: Type){
        this.type = type;
    }

    /**
     * Complexity O(log n)
     */
    push(key: TKey, value: TValue): void {
        this.items.push(new Entry(key, value));

        let itemIndex = this.items.length - 1;
        while(true){
            let parentIndex = Math.floor((itemIndex - 1) / 2);

            if(parentIndex < 0){
                break;
            }

            if(this.type === "MaxHeap" && this.items[itemIndex].key <= this.items[parentIndex].key){
                break;
            }

            if(this.type === "MinHeap" && this.items[itemIndex].key >= this.items[parentIndex].key){
                break;
            }

            swap(this.items, itemIndex, parentIndex);
            
            itemIndex = parentIndex;
        }
    }

    /**
     * Complexity O(log n)
     */
    pop(): Entry<TKey,TValue>{
        if(this.items.length === 0){
            return undefined;
        }

        if(this.items.length === 1){
            return this.items.pop();
        }

        let result = this.items[0];
        this.items[0] = this.items.pop();

        let parentIndex = 0;
        while(true){
            let leftIndex = parentIndex * 2 + 1;
            let rightIndex = parentIndex * 2 + 2;

            if(leftIndex >= this.items.length){
                break;
            }

            let childIndex: number;
            if(rightIndex >= this.items.length){
                childIndex = leftIndex;
            } else if(this.type === "MaxHeap" && this.items[rightIndex].key < this.items[leftIndex].key){
                childIndex = leftIndex;
            } else if(this.type === "MinHeap" && this.items[rightIndex].key > this.items[leftIndex].key){
                childIndex = leftIndex;
            } else {
                childIndex = rightIndex;
            }
            if(this.type === "MaxHeap" && this.items[parentIndex].key <= this.items[childIndex].key 
            || this.type === "MinHeap" && this.items[parentIndex].key >= this.items[childIndex].key){
                swap(this.items, childIndex, parentIndex);
            } 

            parentIndex = childIndex;
        }

        return result;
    }

    get size(){
        return this.items.length;
    }

    get isEmpty(){
        return this.items.length === 0;
    }
}