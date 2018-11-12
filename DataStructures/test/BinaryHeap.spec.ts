import { BinaryHeap } from '../src/BinaryHeap';
import { assert } from 'chai';

describe('BinaryHeap Max', () => {
    let initialValues = [100, 19, 36, 17, 3, 25, 1, 2, 7];

    it('push', () => {
        let heap = new BinaryHeap<number>("MaxHeap", ...initialValues);
        assert.deepEqual(heap.items, initialValues);
        heap.push(40);
        assert.deepEqual(heap.items, [100, 40, 36, 17, 19, 25, 1, 2, 7, 3]);
    });

    it('pop', () => {
        let heap = new BinaryHeap<number>("MaxHeap", ...initialValues);
        assert.equal(heap.pop(), 100);
        assert.deepEqual(heap.items, [36, 19, 25, 17, 3, 7, 1, 2]);
    });
});

describe('BinaryHeap Min', () => {
    let initialValues = [1, 10, 6, 17, 19, 36, 7, 25, 100];

    it('push', () => {
        let heap = new BinaryHeap<number>("MinHeap", ...initialValues);
        assert.deepEqual(heap.items, initialValues);
        heap.push(4);
        assert.deepEqual(heap.items, [1,4,6,17,10,36,7,25,100,19]);
    });

    it('pop', () => {
        let heap = new BinaryHeap<number>("MinHeap", ...initialValues);
        assert.equal(heap.pop(), 1);
        assert.deepEqual(heap.items, [6,10,7,17,19,36,100,25]);
        assert.equal(heap.pop(), 6);
        assert.equal(heap.pop(), 7);
        assert.equal(heap.pop(), 10);
        assert.equal(heap.pop(), 17);
        assert.equal(heap.pop(), 19);
        assert.equal(heap.pop(), 25);
        assert.equal(heap.pop(), 36);
        assert.equal(heap.pop(), 100);

        assert.isUndefined(heap.pop());
    });
});