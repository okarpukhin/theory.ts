import { getHashCode, isNullOrUndefined } from "../../Utils/src/Common"

export class HashMap<TKey extends (number | string),TValue>{
    private readonly items: Entry<TKey,TValue>[] = [];

    addOrUpdate(key: TKey, value: TValue){
        let index = getHashCode(key);
        
        let item = this.items[index];
        if(isNullOrUndefined(item)){
            this.items[index] = new Entry<TKey,TValue>(key, value);
            return;
        }

        let tail: Entry<TKey,TValue>;
        while(!isNullOrUndefined(item) && item.key !== key){
            tail = item;
            item = item.next;
        }

        if(isNullOrUndefined(item)){
            tail.next = new Entry<TKey,TValue>(key, value);
        } else {
            item.value = value;
        }
    }

    get(key: TKey): TValue {
        let index = getHashCode(key);
        let item = this.items[index];

        while(!isNullOrUndefined(item) && item.key !== key){
            item = item.next;
        }

        if(isNullOrUndefined(item)){
            return null;
        }

        return item.value;
    }

    remove(key: TKey): boolean{
        let index = getHashCode(key);
        let item = this.items[index];

        let prev: Entry<TKey,TValue>;
        while(!isNullOrUndefined(item) && item.key !== key){
            prev = item;
            item = item.next;
        }

        if(isNullOrUndefined(item)) {
            return false;
        }

        if(isNullOrUndefined(prev)){
            if(isNullOrUndefined(item.next)){
                this.items.splice(index, 1)
            } else {
                this.items[index] = item.next;
            }
        } else {
            prev.next = item.next;
        }
        return true;
    }
}

class Entry<TKey extends (number | string),TValue>{
    next: Entry<TKey,TValue>;
    readonly key: TKey;
    value: TValue;
    
    constructor(key: TKey, value: TValue){
        this.key = key;
        this.value = value;
    }
}