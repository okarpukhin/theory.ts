import { getHashCode, capacity, swap, arraysAreEqual, isSortedArray } from '../src/Common';
import { assert } from 'chai';

describe('Common', () => {
    it('getHashCode', () => {
        assert.equal(getHashCode(1), 1 % capacity);
        assert.equal(getHashCode(2), 2 % capacity);
        assert.equal(getHashCode(capacity), 0);
        assert.equal(getHashCode(capacity + 1), 1 % capacity);
    });

    it('swap', () => {
        let array = [1,2,3,4];
        swap(array, 1,3);
        assert.equal(array[0], 1);
        assert.equal(array[1], 4);
        assert.equal(array[2], 3);
        assert.equal(array[3], 2);
    });

    it('arraysAreEqual without sort', () => {
        assert.isTrue(arraysAreEqual([1,2,3,4], [1,2,3,4]));
        assert.isTrue(arraysAreEqual([], []));
        assert.isFalse(arraysAreEqual([1,2,3,4], [1,2,3]));
        assert.isFalse(arraysAreEqual([1,2,3,4], [1,2,3,5]));
        assert.isFalse(arraysAreEqual([1,2,3,4], [1,2,4,3]));
    });

    it('arraysAreEqual with sort', () => {
        assert.isTrue(arraysAreEqual([1,2,3,4], [1,2,3,4], true));
        assert.isTrue(arraysAreEqual([], [], true));
        assert.isFalse(arraysAreEqual([1,2,3,4], [1,2,3], true));
        assert.isFalse(arraysAreEqual([1,2,3,4], [1,2,3,5], true));
        assert.isTrue(arraysAreEqual([1,2,3,4], [1,2,4,3], true));
    });

    it('isSortedArray', () => {
        assert.isTrue(isSortedArray([]));
        assert.isTrue(isSortedArray([1]));
        assert.isTrue(isSortedArray([1,2,3,4,5,6,7,8]));
        assert.isFalse(isSortedArray([2,1,3,4,5,6,7,8]));
        assert.isFalse(isSortedArray([2,1,3,4,5,6,8,7]));
    });
});