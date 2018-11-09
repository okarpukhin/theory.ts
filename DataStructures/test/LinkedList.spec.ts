import { LinkedList } from '../src/LinkedList';
import { assert } from 'chai';

describe('LinkedList', () => {
    let linkedList = new LinkedList<number>(1,2);

    it('add', () => {
        linkedList.add(10);
        linkedList.add(3);
        linkedList.add(4);
        linkedList.add(5);

        assert.equal(linkedList.toArray().join(","), "1,2,10,3,4,5");
    });
    it('remove', () => {
        assert.isTrue(linkedList.remove(10));
        assert.isFalse(linkedList.remove(10));

        assert.equal(linkedList.size(), 5);
        assert.isTrue(linkedList.contains(3));
        assert.isFalse(linkedList.contains(10));
        assert.equal(linkedList.toArray().join(","), "1,2,3,4,5");
    });
});