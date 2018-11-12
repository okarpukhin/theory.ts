import { swap } from "../../Utils/src/Common";

type BinaryHeapType = "MaxHeap" | "MinHeap";

export class BinaryHeap<T>{
    private readonly type: BinaryHeapType;
    readonly items: T[] = [];

    constructor(type: BinaryHeapType, ...items: T[]){
        this.type = type;
        items.forEach(f=>this.push(f));
    }

    /**
     * Complexity O(log n)
     */
    push(value: T): void {
        this.items.push(value);

        let itemIndex = this.items.length - 1;
        while(true){
            let parentIndex = Math.floor((itemIndex - 1) / 2);

            if(parentIndex < 0){
                break;
            }

            if(this.type === "MaxHeap" && this.items[itemIndex] <= this.items[parentIndex]){
                break;
            }

            if(this.type === "MinHeap" && this.items[itemIndex] >= this.items[parentIndex]){
                break;
            }

            swap(this.items, itemIndex, parentIndex);
            
            itemIndex = parentIndex;
        }
    }

    /**
     * Complexity O(log n)
     */
    pop(): T{
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
            } else if(this.type === "MaxHeap" && this.items[rightIndex] < this.items[leftIndex]){
                childIndex = leftIndex;
            } else if(this.type === "MinHeap" && this.items[rightIndex] > this.items[leftIndex]){
                childIndex = leftIndex;
            } else {
                childIndex = rightIndex;
            }
            if(this.type === "MaxHeap" && this.items[parentIndex] <= this.items[childIndex] 
            || this.type === "MinHeap" && this.items[parentIndex] >= this.items[childIndex]){
                swap(this.items, childIndex, parentIndex);
            } 

            parentIndex = childIndex;
        }

        return result;
    }
}