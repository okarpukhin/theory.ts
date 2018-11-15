import { RabinKarpStringSearch, hash, nextHash } from "../../src/Search/RabinKarpStringSearch";
import { assert } from 'chai';

describe('RabinKarpStringSearch', function() {
    it('hash', () => {
        let hashABC = hash("ABC");
        let hashBCA = nextHash(hashABC, "A", "A", 3);
        assert.notEqual(hashBCA, hashABC);

        let hashCAB = nextHash(hashBCA, "B", "B", 3);
        assert.notEqual(hashCAB, hashABC);
        assert.notEqual(hashCAB, hashBCA);

        assert.equal(nextHash(hashCAB, "C", "C", 3), hashABC);
    });

    it('the beginning of text is equal to pattern', () => {
        assert.equal(RabinKarpStringSearch("aabaabааааbааbаааb", "aabaa"), 0);
    });

    it("text doesn't contain the pattern", () => {
        assert.equal(RabinKarpStringSearch("aabaabaaaabaabaaab", "aabac"), -1);
    });

    it("the end of text is equal to pattern", () => {
        assert.equal(RabinKarpStringSearch("ааbаbааbaaab", "baaab"), 7);
    });

    it("text is equal to pattern", () => {
        assert.equal(RabinKarpStringSearch("baaab", "baaab"), 0);
    });

    it("the middle of text is equal to pattern", () => {
        assert.equal(RabinKarpStringSearch("abcacbaaababcac", "baaab"), 5);
    });
});