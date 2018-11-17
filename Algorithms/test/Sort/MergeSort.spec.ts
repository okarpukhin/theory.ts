import { MergeSort } from "../../src/Sort/MergeSort";
import { isOrderedArray } from "../../../Utils/src/Common";
import { assert } from 'chai';

describe('MergeSort', () => {
    it('first element less than next', () => {
        let array = [1,5,2,4,6,8,9,7];
        array = MergeSort(array);
        assert.deepEqual(array, [1,2,4,5,6,7,8,9]);
    });
    it('first element greater than next', () => {
        let array = [5,1,2,4,6,8,7,9,-2];
        array = MergeSort(array);
        assert.deepEqual(array, [-2,1,2,4,5,6,7,8,9]);
    });
});