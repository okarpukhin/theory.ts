import { Stack } from '../src/Stack';
import { assert, expect } from 'chai';

describe('Stack', () => {
    it('initialize', () => {
        let stack = new Stack<number>(5);
        assert.equal(stack.size, 0);
        assert.equal(stack.maxSize, 5);
    });

    it('push elements less than stack size', () => {
        let stack = new Stack<number>(5);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assert.equal(stack.size, 3);
        assert.equal(stack.maxSize, 5);
    });

    it('pop from not empty stack', () => {
        let stack = new Stack<number>(5);
        stack.push(1);
        stack.push(2);
        assert.equal(stack.pop(), 2);
        assert.equal(stack.size, 1);
        assert.equal(stack.pop(), 1);
        assert.isTrue(stack.isEmpty);
    });

    it('push elements more than stack size', () => {
        let stack = new Stack<number>(5);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        assert.equal(stack.size, stack.maxSize);
        expect(()=>{
            stack.push(6);
        }).to.throw(Stack.stackOverflowExceptionMessage);
    });

    it('pop from empty stack', () => {
        let stack = new Stack<number>(5);
        expect(()=>{
            stack.pop();
        }).to.throw(Stack.underflowExceptionMessage);
    });

    it('peek', () => {
        let stack = new Stack<number>(5);
        stack.push(1);
        stack.push(2);
        assert.equal(stack.peek(), 2);
        assert.equal(stack.size, 2);
    });
});