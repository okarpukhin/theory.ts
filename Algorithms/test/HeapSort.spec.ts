import { HeapSort } from "../src/Sorting/HeapSort";
import { isSortedArray } from "../../Utils/src/Common";
import { assert } from 'chai';

describe('HeapSort', () => {
    it('first element less than next', () => {
        let array = [1,5,2,4,6,8,9,7];
        assert.isFalse(isSortedArray(array));
        assert.isTrue(isSortedArray(HeapSort(array)));
    });
    it('first element greater than next', () => {
        let array = [5,1,2,4,6,8,7,9,-2];
        assert.isFalse(isSortedArray(array));
        assert.isTrue(isSortedArray(HeapSort(array)));
    });
});