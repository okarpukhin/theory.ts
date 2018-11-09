import { DynamicArray } from '../src/DynamicArray';
import { assert } from 'chai';

describe('DynamicArray', () => {
    var createArray = (length: number) =>{
        let array = new DynamicArray<number>();
        for(let i = 0; i < length; i++){
            array.add(i);
        }
        return array;
    };

    it('constructor', () => {
        let array = new DynamicArray<number>();
        assert.equal(array.capacity, DynamicArray.defaultCapacity);
        assert.equal(array.length, 0);
    });

    it('get', () => {
        let array = new DynamicArray<number>();

        array.add(3);
        assert.equal(array.length, 1);
        assert.equal(array.get(0), 3);
    });

    it('add', () => {
        let array = new DynamicArray<number>();
        array.add(10);
        assert.equal(array.capacity, DynamicArray.defaultCapacity);
        assert.equal(array.length, 1);

        array.add(3);
        assert.equal(array.length, 2);
        assert.equal(array.get(1), 3);
    });

    it('add more values than initial capacity', () => {
        let array = createArray(DynamicArray.defaultCapacity);

        assert.equal(array.capacity, DynamicArray.defaultCapacity);
        assert.equal(array.length, DynamicArray.defaultCapacity);

        array.add(DynamicArray.defaultCapacity);
        assert.equal(array.capacity, DynamicArray.defaultCapacity * 2);
        assert.equal(array.length, DynamicArray.defaultCapacity + 1);
    });

    it('set', () => {
        let array = createArray(DynamicArray.defaultCapacity);
        assert.equal(array.capacity, DynamicArray.defaultCapacity);
        assert.equal(array.length, DynamicArray.defaultCapacity);
        assert.equal(array.indexOf(6), 6);
        array.set(6, 327);
        assert.equal(array.get(6), 327);
        assert.equal(array.capacity, DynamicArray.defaultCapacity);
        assert.equal(array.length, DynamicArray.defaultCapacity);
    });

    it('indexOf', () => {
        let array = createArray(DynamicArray.defaultCapacity);
        array.set(6, 327);
        assert.equal(array.indexOf(327), 6);
    });

    it('remove', () => {
        let array = createArray(DynamicArray.defaultCapacity);
        array.remove(6);
        assert.equal(array.get(6), 7);
        assert.equal(array.capacity, DynamicArray.defaultCapacity);
        assert.equal(array.length, DynamicArray.defaultCapacity - 1);
    });
});