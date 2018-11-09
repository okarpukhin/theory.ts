import { getHashCode, capacity, isNullOrUndefined } from '../src/Common';
import { assert } from 'chai';

describe('Common', () => {
    it('getHashCode', () => {
        assert.equal(getHashCode(1), 1 % capacity);
        assert.equal(getHashCode(2), 2 % capacity);
        assert.equal(getHashCode(capacity), 0);
        assert.equal(getHashCode(capacity + 1), 1 % capacity);
    });

    it('isNullOrUndefined', () => {
        assert.isTrue(isNullOrUndefined(null));
        assert.isTrue(isNullOrUndefined(undefined));
        assert.isFalse(isNullOrUndefined(0));
        assert.isFalse(isNullOrUndefined(""));
        assert.isFalse(isNullOrUndefined({}));
    });
});