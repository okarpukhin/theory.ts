import { Trie } from '../src/Trie';
import { arraysAreEqual } from "../../Utils/src/Common";
import { assert } from 'chai';

describe('Trie', () => {
    let words = ["hello", "world", "welcome", "home", "sunday", "sun"];
    let trie = new Trie();

    it('add', () => {
        trie.add(...words);
        assert.isTrue(arraysAreEqual(words, trie.toArray(), true));
    });

    it('find', () => {
        assert.deepEqual(trie.find("sun"), ["sun", "sunday"]);
        assert.deepEqual(trie.find("h"), ["hello", "home"]);
        assert.deepEqual(trie.find("a"), []);
        assert.deepEqual(trie.find("sund"), ["sunday"]);
        assert.deepEqual(trie.find("sunshine"), []);
    });
});