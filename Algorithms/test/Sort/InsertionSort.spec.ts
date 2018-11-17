import { InsertionSort } from "../../src/Sort/InsertionSort";
import { isOrderedArray } from "../../../Utils/src/Common";
import { assert } from 'chai';

describe('InsertionSort', () => {
    it('first element less than next', () => {
        let array = [1,5,2,4,6,8,9,7];
        assert.isFalse(isOrderedArray(array));
        InsertionSort(array);
        assert.deepEqual(array, [1,2,4,5,6,7,8,9]);
    });
    it('first element greater than next', () => {
        let array = [5,1,2,4,6,8,7,9,-2];
        assert.isFalse(isOrderedArray(array));
        InsertionSort(array);
        assert.deepEqual(array, [-2,1,2,4,5,6,7,8,9]);
    });
});