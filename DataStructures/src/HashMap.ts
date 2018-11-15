import { getHashCode, capacity } from "../../Utils/src/Common"

export class HashMap<TKey, TValue>{
    private readonly items: Entry<TKey,TValue>[] = new Array<Entry<TKey,TValue>>(capacity);

    addOrUpdate(key: TKey, value: TValue, updateValueFactory?: (key: TKey, oldValue: TValue) => TValue){
        let index = getHashCode(key);
        
        let item = this.items[index];
        if(!item){
            this.items[index] = new Entry<TKey,TValue>(key, value);
            return;
        }

        let tail: Entry<TKey,TValue>;
        while(item && item.key !== key){
            tail = item;
            item = item.next;
        }

        if(!item){
            tail.next = new Entry<TKey,TValue>(key, value);
        } else {
            if(updateValueFactory){
                item.value = updateValueFactory(key, item.value);
            } else {
                item.value = value;
            }
        }
    }

    size(){
        let result = 0;
        this.items.filter(f=>f).forEach(f=>{
            let current = f;
            while(current){
                result++;
                current = current.next;
            } 
        });
        return result;
    }

    get(key: TKey): TValue {
        let index = getHashCode(key);
        let item = this.items[index];

        while(item && item.key !== key){
            item = item.next;
        }

        return item ? item.value : undefined;
    }

    hasKey(key: TKey): boolean {
        let index = getHashCode(key);
        let item = this.items[index];

        while(item && item.key !== key){
            item = item.next;
        }

        return !!item;
    }

    remove(key: TKey): boolean{
        let index = getHashCode(key);
        let item = this.items[index];

        let prev: Entry<TKey,TValue>;
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

    values(): TValue[]{
        let result:TValue[] = [];
        this.items.filter(f=>f).forEach(f=>{
            let current = f;
            while(current){
                result.push(current.value);
                current = current.next;
            } 
        });
        return result;
    }

    keys(): TKey[]{
        let result:TKey[] = [];
        this.items.filter(f=>f).forEach(f=>{
            let current = f;
            while(current){
                result.push(current.key);
                current = current.next;
            } 
        });
        return result;
    }

    toDictionary(){
        let result: any = {};
        this.items.filter(f=>f).forEach(f=>{
            let current = f;
            while(current){
                result[current.key] = current.value;
                current = current.next;
            } 
        });
        return result;
    }
}

class Entry<TKey,TValue>{
    next: Entry<TKey,TValue>;
    readonly key: TKey;
    value: TValue;
    
    constructor(key: TKey, value: TValue){
        this.key = key;
        this.value = value;
    }
}