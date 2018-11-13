/**
 * A queue is a list where can only insert new items at the back and remove items from the front. 
 * This ensures that the first item you enqueue is also the first item you dequeue.
 * A queue gives you a FIFO or first-in, first-out order. 
 */
export class Queue<T>{
    private head: Node<T>;
    private tail: Node<T>;

    constructor(...values: T[]){
        this.enqueue(...values);
    }

    /**
     * Complexity O(1)
     */
    enqueue(...values: T[]){
        values.forEach(value => {
            let node = new Node(value);

            if(!this.head){
                this.head = node;
            } else {
                this.tail.next = node;
            }

            this.tail = node;
        });
    }

    /**
     * Complexity O(1)
     */
    dequeue():T{
        if(!this.head){
            return undefined;
        }
        let head = this.head;
        this.head = this.head.next;
        return head.value;
    }

    /**
     * Complexity O(1)
     */
    peek():T{
        if(!this.head){
            return undefined;
        }
        return this.head.value;
    }

    size(): number{
        let result = 0;
        
        let current = this.head;
        while(current) {
            current = current.next;
            result++;
        }
        
        return result;
    }

    toArray(): T[]{
        let res: T[] = [];
        let current = this.head;
        while(current) {
            res.push(current.value);
            current = current.next;
        }
        return res;
    }
}

class Node<T>{
    readonly value: T;
    next: Node<T>;

    constructor(value: T){
        this.value = value;
    }
}