import { NaivePrefixFunction, KnuthMorrisPrattPrefixFunction, KnuthMorrisPrattSearch } from "../../src/Search/KnuthMorrisPratt";
import { assert } from 'chai';

describe('PrefixFunction', function() {
    it('Naive (string length = 0)', () => {
        assert.deepEqual(NaivePrefixFunction(""), []);
    });

    it('Naive (string length = 1)', () => {
        assert.deepEqual(NaivePrefixFunction("a"), [0]);
    });

    it('Naive (string length > 1)', () => {
        assert.deepEqual(NaivePrefixFunction("abcabcd"), [0,0,0,1,2,3,0]);
        assert.deepEqual(NaivePrefixFunction("aabaaab"), [0,1,0,1,2,2,3]);
    });

    it('KnuthMorrisPratt (string length = 0)', () => {
        assert.deepEqual(KnuthMorrisPrattPrefixFunction(""), []);
    });

    it('KnuthMorrisPratt (string length = 1)', () => {
        assert.deepEqual(KnuthMorrisPrattPrefixFunction("a"), [0]);
    });

    it('KnuthMorrisPratt (string length > 1)', () => {
        assert.deepEqual(KnuthMorrisPrattPrefixFunction("abcabcd"), [0,0,0,1,2,3,0]);
        assert.deepEqual(KnuthMorrisPrattPrefixFunction("aabaaab"), [0,1,0,1,2,2,3]);
    });
});

describe('KnuthMorrisPrattSearch', function() {
    it('KnuthMorrisPratt', () => {
        assert.deepEqual(KnuthMorrisPrattSearch("ааbааbааааbааbаааb", "ааbаа"), [0,3,8,11]);
    });
});