import { HashMap } from '../src/HashMap';
import { capacity, isNullOrUndefined } from '../../Utils/src/Common';
import { assert } from 'chai';

describe('HashMap', () => {
    it('addOrUpdate', () => {
        let hashMap = new HashMap<number,string>();
        hashMap.addOrUpdate(1, "value0");
        hashMap.addOrUpdate(1, "value1");
        hashMap.addOrUpdate(2, "value2");
        hashMap.addOrUpdate(3, "value3");
        hashMap.addOrUpdate(capacity + 1, "capacity+1");

        assert.equal(hashMap.get(1), "value1");
        assert.equal(hashMap.get(2), "value2");
        assert.equal(hashMap.get(3), "value3");
        assert.equal(hashMap.get(capacity + 1), "capacity+1");
    });

    it('remove', () => {
        let hashMap = new HashMap<number,string>();
        hashMap.addOrUpdate(1, "value0");
        hashMap.addOrUpdate(1, "value1");
        hashMap.addOrUpdate(2, "value2");
        hashMap.addOrUpdate(3, "value3");
        hashMap.addOrUpdate(capacity + 1, "capacity+1");

        assert.equal(hashMap.remove(capacity), false);
        assert.equal(hashMap.remove(1), true);
        assert.equal(hashMap.remove(2), true);
        assert.equal(hashMap.get(capacity + 1), "capacity+1");
        assert.isTrue(isNullOrUndefined(hashMap.get(2)));
    });
});