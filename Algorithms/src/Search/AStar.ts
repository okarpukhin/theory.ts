import { HashMap } from "../../../DataStructures/src/HashMap";
import { BinaryHeapMap, Entry } from "../../../DataStructures/src/BinaryHeapMap";
import { Array2D } from "../../../DataStructures/src/Array2D";
import { equalsAsJSON } from "../../../Utils/src/Common";

interface Point {
    x: number,
    y: number,
}

class Path {
    readonly path: Point[];
    readonly g: number;

    constructor(path: Point[], g: number){
        this.path = path;
        this.g = g;
    }

    get last(){
        return this.path[this.path.length - 1];
    }
}

export function AStarToMap(map: Array2D<boolean>, start: Point, end: Point): Path{
    let closed = new HashMap<Point, Path>();
    let open = new BinaryHeapMap<number, Path>("MinHeap");
    open.push(h(start, end), new Path([start], 0));

    while(!open.isEmpty){
        let current = open.pop();
        let lastPoint = current.value.last;

        let isClosed = closed.hasKey(lastPoint);

        closed.addOrUpdate(lastPoint, current.value, (key, oldValue)=>{
            return oldValue.g < current.value.g ? oldValue : current.value;
        });

        if(equalsAsJSON(lastPoint, end)){
            return current.value;
        }

        if(isClosed){
            continue;
        }
        
        let neighbors = getNeighbors(map, lastPoint);
        neighbors.forEach(f=>{
            let path = [];
            path.push(...current.value.path);
            path.push(f);
            open.push(current.value.g + h(f, end) + h(lastPoint, f), new Path(path, current.value.g + h(lastPoint, f)));
        });
    }
}   

function getNeighbors(map: Array2D<boolean>, current: Point): Point[]{
    let result: Point[] = [];
    map.forEach((value, y, x)=>{
        if(value === false && Math.abs(x - current.x) <= 1 && Math.abs(y - current.y) <= 1){
            result.push({ x: x, y: y });
        }
    });
    return result;
}

function h(start: Point, end: Point){
    let dx = start.x - end.x;
    let dy = start.y - end.y;
    return Math.sqrt(dx * dx + dy * dy);
}