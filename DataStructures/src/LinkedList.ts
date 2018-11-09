import { isNullOrUndefined } from "../../Utils/src/Common"

export class LinkedList<T>{
    private head: Node<T>;

    constructor(...items: T[]){
        items.forEach(f=>this.add(f));
    }

    add(value:T){
        let node = new Node(value);

        if(isNullOrUndefined(this.head)){
            this.head = node;
        } else {
            let current = this.head;
            while(!isNullOrUndefined(current.next)){
                current = current.next;
            }
            current.next = node;
        }
    }

    /**
     * Remove value. O(n)
     * @param value  Value for remove.
     * @returns      Return true if value was found and removed, otherwise false.
     */
    remove(value:T):boolean{
        let current = this.head;
        let prev: Node<T>;
        while(!isNullOrUndefined(current) && current.value !== value){
            prev = current;
            current = current.next;
        }
        if(isNullOrUndefined(current)){
            return false;
        }

        if(isNullOrUndefined(prev)){
            this.head = this.head.next;
        } else {
            prev.next = current.next;
        }
        return true;
    }

    contains(value:T):boolean{
        let current = this.head;
        while(!isNullOrUndefined(current) && current.value !== value){
            current = current.next;
        }
        return !isNullOrUndefined(current);
    }

    size(): number{
        let result = 0;
        
        let current = this.head;
        while(!isNullOrUndefined(current)) {
            current = current.next;
            result++;
        }
        
        return result;
    }

    toArray(): T[]{
        let res: T[] = [];
        let current = this.head;
        while(!isNullOrUndefined(current)) {
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