import { HashSet } from "../../../DataStructures/src/HashSet";
import { BinaryHeapMap, Entry } from "../../../DataStructures/src/BinaryHeapMap";
import { Array2D } from "../../../DataStructures/src/Array2D";
import { equalsAsJSON } from "../../../Utils/src/Common";

export interface Point {
    x: number,
    y: number,
}

export function AStarToMap(map: Array2D<boolean>, start: Point, end: Point): Entry<number,Point[]>{
    let closed = new HashSet<Point>();
    let open = new BinaryHeapMap<number,Point[]>("MinHeap");
    open.push(h(start, end), [start]);

    while(!open.isEmpty){
        let current = open.pop();
        let lastPoint = current.value[current.value.length - 1];
        if(equalsAsJSON(lastPoint, end)){
            return current;
        }
        if(closed.contains(lastPoint)){
            continue;
        }
        closed.add(lastPoint);

        let neighbors = getNeighbors(map, lastPoint);
        neighbors.forEach(f=>{
            let path = [];
            path.push(...current.value);
            path.push(f);
            open.push(h(f, end) + current.key, path);
        });
    }
}   

function getNeighbors(map: Array2D<boolean>, current: Point): Point[]{
    let result: Point[] = [];
    map.forEach((value, y, x)=>{
        if(value === false && Math.abs(x - current.x) <= 1 && Math.abs(y - current.y) <= 1){
            result.push({x: x, y: y});
        }
    });
    return result;
}

function h(start: Point, end: Point){
    let dx = start.x - end.x;
    let dy = start.y - end.y;
    return Math.sqrt(dx * dx + dy * dy);
}