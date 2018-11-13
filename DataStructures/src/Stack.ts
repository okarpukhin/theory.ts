/**
 * A stack is like an array but with limited functionality. 
 * You can only push to add a new element to the top of the stack, 
 * pop to remove the element from the top, 
 * and peek at the top element without popping it off.
 * A stack gives a LIFO or last-in first-out order.
 */
export class Stack<T> {
    static readonly stackOverflowExceptionMessage = "Stack overflow exception";
    static readonly underflowExceptionMessage = "Underflow exception";

    private cursor = 0;
    private readonly items: T[];

    constructor(size: number){
        this.items = new Array<T>(size);
    }

    /**
     * Complexity O(1)
     * add a new element to the top of the stack
     * @param item 
     */
    push(item: T){
        if(this.cursor === this.items.length){
            throw new Error(Stack.stackOverflowExceptionMessage);
        }
        this.items[this.cursor++] = item;
    }

    /**
     * Complexity O(1)
     * remove the element from the top of the stack
     */
    pop(): T{
        if(this.cursor === 0){
            throw new Error(Stack.underflowExceptionMessage);
        }
        return this.items[--this.cursor];
    }

    /**
     * Complexity O(1)
     * peek at the top element without popping it off
     */
    peek(): T{
        if(this.cursor === 0){
            throw new Error(Stack.underflowExceptionMessage);
        }
        return this.items[this.cursor - 1];
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