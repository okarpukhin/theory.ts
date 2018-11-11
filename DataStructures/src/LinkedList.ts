export class LinkedList<T>{
    private head: Node<T>;
    private tail: Node<T>;

    constructor(...items: T[]){
        items.forEach(f=>this.add(f));
    }

    add(...values:T[]){
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

    addToHead(value:T){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    /**
     * Remove value. O(n)
     * @param value  Value for remove.
     * @returns      Return true if value was found and removed, otherwise false.
     */
    remove(value:T):boolean{
        let current = this.head;
        let prev: Node<T>;
        while(current && current.value !== value){
            prev = current;
            current = current.next;
        }
        if(!current){
            return false;
        }

        if(!prev){
            this.head = this.head.next;
            if(!this.head){
                this.tail = null;
            }
        } else {
            prev.next = current.next;
            if(!prev.next){
                this.tail = null;
            }
        }
        return true;
    }

    contains(value:T):boolean{
        let current = this.head;
        while(current && current.value !== value){
            current = current.next;
        }
        return !!current;
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