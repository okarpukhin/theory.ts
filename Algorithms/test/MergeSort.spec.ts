import { MergeSort } from "../src/Sorting/MergeSort";
import { isSortedArray } from "../../Utils/src/Common";
import { assert } from 'chai';

describe('MergeSort', () => {
    it('first element less than next', () => {
        let array = [1,5,2,4,6,8,9,7];
        assert.isFalse(isSortedArray(array));
        array = MergeSort(array);
        assert.isTrue(isSortedArray(array));
    });
    it('first element greater than next', () => {
        let array = [5,1,2,4,6,8,7,9,-2];
        assert.isFalse(isSortedArray(array));
        array = MergeSort(array);
        assert.isTrue(isSortedArray(array));
    });
});