export class Stack<T> {
    static readonly stackOverflowExceptionMessage = "Stack overflow exception";
    static readonly underflowExceptionMessage = "Underflow exception";

    private cursor = 0;
    private readonly items: T[];

    constructor(size: number){
        this.items = new Array<T>(size);
    }

    push(item: T){
        if(this.cursor === this.items.length){
            throw new Error(Stack.stackOverflowExceptionMessage);
        }
        this.items[this.cursor++] = item;
    }

    pop(): T{
        if(this.cursor === 0){
            throw new Error(Stack.underflowExceptionMessage);
        }
        return this.items[--this.cursor];
    }

    get size():number{
        return this.cursor;
    }

    get maxSize():number{
        return this.items.length;
    }

    get isEmpty():boolean{
        return this.cursor === 0;
    }
}