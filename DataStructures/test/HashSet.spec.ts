import { HashSet } from '../src/HashSet';
import { capacity } from '../../Utils/src/Common';
import { assert } from 'chai';

describe('HashSet', () => {
    it('add', () => {
        let hashSet = new HashSet<number>();
        assert.isTrue(hashSet.add(1));
        assert.isTrue(hashSet.add(2));
        assert.isTrue(hashSet.add(3));
        assert.isTrue(hashSet.add(capacity + 1));
        assert.isFalse(hashSet.add(1));

        assert.isTrue(hashSet.contains(1));
        assert.isTrue(hashSet.contains(2));
        assert.isTrue(hashSet.contains(3));
        assert.isTrue(hashSet.contains(capacity + 1));
        assert.isFalse(hashSet.contains(4));
        assert.isFalse(hashSet.contains(capacity));
    });

    it('remove', () => {
        let hashSet = new HashSet<number>(1, 2, capacity, capacity + 1);
        assert.isTrue(hashSet.contains(1));
        assert.isTrue(hashSet.contains(2));
        assert.isFalse(hashSet.contains(3));
        assert.isTrue(hashSet.contains(capacity));
        assert.isTrue(hashSet.contains(capacity + 1));
        assert.isTrue(hashSet.remove(1));
        assert.isTrue(hashSet.remove(2));
        assert.isFalse(hashSet.remove(3));
        assert.isTrue(hashSet.remove(capacity));
        assert.isTrue(hashSet.remove(capacity + 1));
        assert.isFalse(hashSet.remove(1));
        assert.isFalse(hashSet.remove(capacity));
        assert.isFalse(hashSet.remove(capacity + 1));
    });
});