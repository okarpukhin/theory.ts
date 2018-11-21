import { counter } from "../../../Utils/src/Common";
import { Array2D } from "../../../DataStructures/src/Array2D";
import { HashMap } from "../../../DataStructures/src/HashMap";

export interface KnapsackItem {
    weight: number,
    value: number,
}

export function Naive(targetWeight: number, items: KnapsackItem[]): number{
    counter.reset();
    return doNaive(targetWeight, items, items.length - 1);
}

function doNaive(targetWeight: number, items: KnapsackItem[], n: number): number{
    counter.increment();

    if(n < 0 || targetWeight <= 0){
        return 0;
    }

    if(items[n].weight > targetWeight){
        return doNaive(targetWeight, items, n - 1);
    }

    let a = items[n].value + doNaive(targetWeight - items[n].weight, items, n - 1);
    let b = doNaive(targetWeight, items, n - 1);

    return Math.max(a, b);
}

export function DynamicProgramming(targetWeight: number, items: KnapsackItem[]): number{
    counter.reset();

    let table = new Array2D(items.length + 1, targetWeight + 1, 0);

    for(let i = 1; i <= items.length; i++){
        for(let w = 1; w <= targetWeight; w++){
            counter.increment();

            if(items[i - 1].weight <= w) {
                let max = Math.max(items[i-1].value + table.get(i-1,w - items[i-1].weight), table.get(i-1,w));
                table.set(i, w, max); 
            } else {
                table.set(i, w, table.get(i - 1, w));
            }
        }
    }

    return table.get(items.length, targetWeight);
}

export function NaiveWithMemory(targetWeight: number, items: KnapsackItem[]): number{
    counter.reset();
    return doNaiveWithMemory(targetWeight, items, items.length - 1, new HashMap());
}

function doNaiveWithMemory(targetWeight: number, items: KnapsackItem[], n: number, memory: HashMap<{ w: number, n: number }, number>): number{
    counter.increment();

    if(n < 0 || targetWeight <= 0){
        return 0;
    }

    if(memory.hasKey({ w: targetWeight, n: n })){
        return memory.get({ w: targetWeight, n: n });
    }


    if(items[n].weight > targetWeight){
        return doNaiveWithMemory(targetWeight, items, n - 1, memory);
    }

    let a = items[n].value + doNaiveWithMemory(targetWeight - items[n].weight, items, n - 1, memory);
    let b = doNaiveWithMemory(targetWeight, items, n - 1, memory);

    let result = Math.max(a, b);
    memory.addOrUpdate({ w: targetWeight, n: n }, result);
    return result;
}