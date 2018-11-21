import { KnapsackItem, Naive, DynamicProgramming, NaiveWithMemory } from "../../src/DynamicProgramming/Knapsack";
import { counter } from "../../../Utils/src/Common";
import { assert } from 'chai';

describe('Knapsack', () => {
    let items: KnapsackItem[] = [];
    let count = 10;
    for(let i = 0; i < count; i++){
        items.push({ value: i + 1, weight: count - i });
    }

    let targetWeight = 40;
    let expectedWeight = 52;

    it('Naive', () => {
        assert.equal(Naive(targetWeight, items), expectedWeight);
        console.log(counter.value);
    });

    it('DynamicProgramming', () => {
        assert.equal(DynamicProgramming(targetWeight, items), expectedWeight);
        console.log(counter.value);
    });

    it('NaiveWithMemory', () => {
        assert.equal(NaiveWithMemory(targetWeight, items), expectedWeight);
        console.log(counter.value);
    });
});