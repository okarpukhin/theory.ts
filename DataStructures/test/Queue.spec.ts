import { Queue } from '../src/Queue';
import { assert } from 'chai';

describe('Queue', () => {
    it('enqueue', () => {
        let queue = new Queue<number>(1,2,3,4,5);
        assert.equal(queue.size(), 5);
        assert.deepEqual(queue.toArray(), [1,2,3,4,5]);
    });

    it('dequeue', () => {
        let queue = new Queue<number>(1,2,3,4,5);
        assert.equal(queue.size(), 5);
        assert.deepEqual(queue.toArray(), [1,2,3,4,5]);
        assert.equal(queue.dequeue(), 1);
        assert.equal(queue.size(), 4);
        assert.deepEqual(queue.toArray(), [2,3,4,5]);
    });
});