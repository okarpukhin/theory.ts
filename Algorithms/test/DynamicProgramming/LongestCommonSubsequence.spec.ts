import { Naive, DynamicProgramming } from "../../src/DynamicProgramming/LongestCommonSubsequence";
import { assert } from 'chai';

describe('LongestCommonSubsequence', () => {
    it('Naive', () => {
        assert.equal(Naive("AGGTAB", "GXTXAYB"), 4);
    });

    it('DynamicProgramming', () => {
        assert.equal(DynamicProgramming("AGGTAB", "GXTXAYB"), 4);
    });
});