import { NaiveRecursion, Tabulated } from "../../src/DynamicProgramming/LongestCommonSubsequence";
import { assert } from 'chai';

describe('LongestCommonSubsequence', () => {
    it('NaiveRecursion', () => {
        assert.equal(NaiveRecursion("AGGTAB", "GXTXAYB"), 4);
    });

    it('Tabulated', () => {
        assert.equal(Tabulated("AGGTAB", "GXTXAYB"), 4);
    });
});