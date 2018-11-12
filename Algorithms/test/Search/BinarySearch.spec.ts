import { BinarySearch } from "../../src/Search/BinarySearch";
import { assert, expect } from 'chai';

describe('BinarySearch', () => {
    it('empty array', () => {
        let array = [];
        assert.isUndefined(BinarySearch(array, 1));
    });

    it('not empty array', () => {
        assert.equal(BinarySearch([100], 100), 0);
        assert.equal(BinarySearch([1,2,3,4,4,5,6], 4), 3);
        assert.equal(BinarySearch([1,2,3,4,5,6,100], 100), 6);
    });

    it('not ordered array', () => {
        expect(()=>{
            BinarySearch([1,2,3,4,5,8,6], 100);
        }).to.throw();
    });
});