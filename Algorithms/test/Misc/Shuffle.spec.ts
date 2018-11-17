import { CreateShuffledArray } from "../../src/Misc/Shuffle";
import { MergeSort } from "../../src/Sort/MergeSort";
import { assert } from 'chai';

describe('Shuffle', () => {
    it('CreateShuffledArray', () => {
        let expected = [4,5,6,7,8,9,10,11];
        let result = CreateShuffledArray(expected[0], expected[expected.length - 1]);
        assert.equal(result.length, expected.length);
        assert.notDeepEqual(result, expected);
        assert.deepEqual(MergeSort(result), expected);
    });
});