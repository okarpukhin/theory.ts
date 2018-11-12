import { QuickSort } from "../../src/Sort/QuickSort";
import { isOrderedArray } from "../../../Utils/src/Common";
import { assert } from 'chai';

describe('QuickSort', () => {
    it('first element less than next', () => {
        let array = [1,5,2,4,6,8,9,7];
        assert.isFalse(isOrderedArray(array));
        QuickSort(array);
        assert.isTrue(isOrderedArray(array));
    });
    it('first element greater than next', () => {
        let array = [5,1,2,4,6,8,7,9,-2];
        assert.isFalse(isOrderedArray(array));
        QuickSort(array);
        assert.isTrue(isOrderedArray(array));
    });
});