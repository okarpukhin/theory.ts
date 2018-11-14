import { BoyerMooreStringSearch, SkipTable } from "../../src/Search/BoyerMooreStringSearch";
import { assert } from 'chai';

describe('BoyerMooreStringSearch', function() {
    it('SkipTable', () => {
        assert.deepEqual(SkipTable("baaab"), { a: 1, b: 0 });
        assert.deepEqual(SkipTable("abcac"), { a: 1, b: 3, c: 0 });
    });

    it('the beginning of text is equal to pattern', () => {
        assert.equal(BoyerMooreStringSearch("aabaabааааbааbаааb", "aabaa"), 0);
    });

    it("text doesn't contain the pattern", () => {
        assert.equal(BoyerMooreStringSearch("aabaabaaaabaabaaab", "aabac"), -1);
    });

    it("the end of text is equal to pattern", () => {
        assert.equal(BoyerMooreStringSearch("ааbаbааbaaab", "baaab"), 7);
    });

    it("text is equal to pattern", () => {
        assert.equal(BoyerMooreStringSearch("baaab", "baaab"), 0);
    });

    it("the middle of text is equal to pattern", () => {
        assert.equal(BoyerMooreStringSearch("abcacbaaababcac", "baaab"), 5);
    });
});