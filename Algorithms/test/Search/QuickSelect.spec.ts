import { QuickSelect } from "../../src/Search/QuickSelect";
import { assert } from 'chai';

describe('QuickSelect', () => {
    it('empty array', () => {
        let array = [];
        assert.isUndefined(QuickSelect(array, 1));
    });

    it('not empty array', () => {
        assert.equal(QuickSelect([100], 1), 100);
        assert.equal(QuickSelect([1,4,6,2,100,7,5], 3), 4);
        assert.equal(QuickSelect([100,1,6,2,3,5,4], 7), 100);
    });
});