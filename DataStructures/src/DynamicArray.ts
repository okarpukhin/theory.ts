export class DynamicArray<T>{
    static readonly defaultCapacity = 32;
    private items: Array<T>;
    private cursor: number = 0;

    constructor(initialCapacity?: number){
        this.items = new Array(initialCapacity || DynamicArray.defaultCapacity);
    }

    get capacity(): number{
        return this.items.length;
    }

    get length(): number{
        return this.cursor;
    }

    add(value: T){
        if(this.cursor >= this.items.length){
            let newItems = new Array<T>(this.items.length * 2);
            this.items.forEach((item, index)=>{
                newItems[index] = item;
            });
            this.items = newItems;
        }
        this.items[this.cursor] = value;
        this.cursor++;
    }

    get(index: number): T{
        this.checkIndex(index);
        return this.items[index];
    }

    set(index: number, value: T){
        this.checkIndex(index);
        this.items[index] = value;
    }

    indexOf(value: T):number{
        for(let i = 0; i < this.length; i++){
            if(this.get(i) === value){
                return i;
            }
        }
        return -1;
    }

    remove(index: number): T{
        this.checkIndex(index);
        let removedValue =  this.items[index];
        for(let i = index + 1; i < this.length; i++){
            this.items[i - 1] = this.items[i];
        }
        this.cursor--;
        return removedValue;
    }

    private checkIndex(index: number){
        if(index < 0 || index >= this.length){
            throw new Error("Invalid argument index = " + index);
        }
    }
}