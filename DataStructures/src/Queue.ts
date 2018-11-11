export class Queue<T>{
    private head: Node<T>;
    private tail: Node<T>;

    constructor(...values: T[]){
        this.enqueue(...values);
    }

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

    dequeue():T{
        if(!this.head){
            return undefined;
        }
        let head = this.head;
        this.head = this.head.next;
        return head.value;
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