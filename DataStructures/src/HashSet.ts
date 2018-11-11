import { getHashCode, capacity } from "../../Utils/src/Common"

export class HashSet<T>{
    private readonly items: Entry<T>[] = new Array<Entry<T>>(capacity);

    constructor(...items: T[]){
        items.forEach(f=>this.add(f));
    }

    add(key: T):boolean{
        let index = getHashCode(key);
        
        let item = this.items[index];
        if(!item){
            this.items[index] = new Entry(key);
            return true;
        }

        let tail: Entry<T>;
        while(item && item.key !== key){
            tail = item;
            item = item.next;
        }

        if(!item){
            tail.next = new Entry(key);
            return true;
        }
        return false;
    }

    contains(key: T): boolean {
        let index = getHashCode(key);
        let item = this.items[index];

        while(item && item.key !== key){
            item = item.next;
        }

        return !!item;
    }

    remove(key: T): boolean{
        let index = getHashCode(key);
        let item = this.items[index];

        let prev: Entry<T>;
        while(item && item.key !== key){
            prev = item;
            item = item.next;
        }

        if(!item) {
            return false;
        }

        if(!prev){
            this.items[index] = item.next;
        } else {
            prev.next = item.next;
        }
        return true;
    }

    toArray(): T[]{
        let result:T[] = [];
        this.items.filter(f=>f).forEach(f=>{
            let current = f;
            while(current){
                result.push(current.key);
                current = current.next;
            } 
        });
        return result;
    }
}

class Entry<T>{
    next: Entry<T>;
    readonly key: T;
    
    constructor(key: T){
        this.key = key;
    }
}