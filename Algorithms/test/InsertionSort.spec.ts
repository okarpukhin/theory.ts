import { InsertionSort } from "../src/Sorting/InsertionSort";
import { isSortedArray } from "../../Utils/src/Common";
import { assert } from 'chai';

describe('InsertionSort', () => {
    it('first element less than next', () => {
        let array = [1,5,2,4,6,8,9,7];
        assert.isFalse(isSortedArray(array));
        InsertionSort(array);
        assert.isTrue(isSortedArray(array));
    });
    it('first element greater than next', () => {
        let array = [5,1,2,4,6,8,7,9];
        assert.isFalse(isSortedArray(array));
        InsertionSort(array);
        assert.isTrue(isSortedArray(array));
    });
});