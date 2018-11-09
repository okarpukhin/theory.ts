import { BinaryTree } from '../src/BinaryTree';
import { assert } from 'chai';


describe('BinaryTree', () => {
    it('add', () => {
        let tree = new BinaryTree<number>(10,5,15,20,12,17,-2,7);
        assert.equal(tree.toString(), "(10 (5 (-2) (7)) (15 (12) (20 (17))))");
    });

    it('getMinimum', () => {
        let tree = new BinaryTree<number>(20,17,16,25,30,24);
        assert.equal(tree.getMinimum(), 16);
    });

    it('getMaximum', () => {
        let tree = new BinaryTree<number>(20,17,16,25,30,24);
        assert.equal(tree.getMaximum(), 30);
    });

    it('remove without children', () => {
        let tree = new BinaryTree<number>(10,5,15);
        tree.remove(15);
        assert.equal(tree.toString(), "(10 (5))");

        tree.remove(5);
        assert.equal(tree.toString(), "(10)");

        tree.remove(10);
        assert.equal(tree.toString(), "");
    });

    it('remove with left children', () => {
        let tree = new BinaryTree<number>(10,8,5);
        tree.remove(8);
        assert.equal(tree.toString(), "(10 (5))");

        tree.remove(10);
        assert.equal(tree.toString(), "(5)");
    });

    it('remove with right children', () => {
        let tree = new BinaryTree<number>(5,8,10);
        tree.remove(8);
        assert.equal(tree.toString(), "(5 (10))");

        tree.remove(5);
        assert.equal(tree.toString(), "(10)");
    });

    it('remove with two children and right child without left child', () => {
        let tree = new BinaryTree<number>(10,5,15,20,12,17,16,25,30);
        tree.remove(20);
        assert.equal(tree.toString(), "(10 (5) (15 (12) (25 (17 (16)) (30))))");
    });

    it('remove with two children and right child with full subtree', () => {
        let tree = new BinaryTree<number>(10,5,15,20,12,17,16,25,30,24);
        tree.remove(20);
        assert.equal(tree.toString(), "(10 (5) (15 (12) (24 (17 (16)) (25 (30)))))");
    });

    it('inOrderTraversal', () => {
        let tree = new BinaryTree<number>(8,3,1,6,4,7,10,14,13);
        assert.equal(tree.inOrderTraversal().join(" "), "1 3 4 6 7 8 10 13 14");
    });

    it('preOrderTraversal', () => {
        let tree = new BinaryTree<number>(8,3,1,6,4,7,10,14,13);
        assert.equal(tree.preOrderTraversal().join(" "), "8 3 1 6 4 7 10 14 13");
    });

    it('postOrderTraversal', () => {
        let tree = new BinaryTree<number>(8,3,1,6,4,7,10,14,13);
        assert.equal(tree.postOrderTraversal().join(" "), "1 4 7 6 3 13 14 10 8");
    });

    it('contains', () => {
        let tree = new BinaryTree<number>(8,3,1,6,4,7,10,14,13);
        assert.isTrue(tree.contains(13));
        tree.remove(13);
        assert.isFalse(tree.contains(13));
    });

    it('height', () => {
        let tree = new BinaryTree<number>(8,3,1,6,4,7,10,14,13);
        assert.equal(tree.height, 4);
    });

    it('isBalanced', () => {
        assert.isFalse(new BinaryTree<number>(8,3,1,6,4,7,10,14,13).isBalanced);
        assert.isTrue(new BinaryTree<number>(8,3,1,6,4,7,13,10,14).isBalanced);
    });
});