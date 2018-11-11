import { HashMap } from "./HashMap";
import { HashSet } from "./HashSet";
import { LinkedList } from "./LinkedList";
import { Queue } from "./Queue";

export class Graph<T extends number | string>{
    readonly vertices: HashMap<T,Vertex<T>> = new HashMap();

    /**
     * Complexity O(1)
     */
    addVertex(...values: T[]) {
        values.forEach(value => {
            this.vertices.addOrUpdate(value, new Vertex(value), (key, oldValue) => oldValue);
        });
    }

    /**
     * Complexity O(1)
     */
    addEdgeOrUpdate(from: T, to: T, weight: number = 0, bidirectional: boolean = true){
        if(from === to){
            throw new Error("From and to mustn't be equal");
        }

        let fromVertex = this.vertices.get(from);
        if(!fromVertex){
            throw new Error("The vertex " + from + " doesn't exist");
        }
        let toVertex = this.vertices.get(to);
        if(!toVertex){
            throw new Error("The vertex " + to + " doesn't exist");
        }

        new Edge(weight, fromVertex, toVertex, bidirectional);
    }

    /**
     * Complexity O(n)
     */
    removeVertex(value: T):boolean{
        let vertex = this.vertices.get(value);
        if(!vertex){
            return false;
        }
        vertex.edges.toArray().forEach(edge=>{
            edge.from.edges.remove(edge.to.value);
            edge.to.edges.remove(edge.from.value);
        });
        this.vertices.remove(value);
        return true;
    }

    /**
     * Complexity O(1)
     */
    removeEdge(from: T, to: T):boolean{
        let fromVertext = this.vertices.get(from);
        if(!fromVertext){
            return false;
        }
        let edge = fromVertext.edges.get(to);
        if(!edge){
            return false;
        }
        edge.to.edges.remove(from);
        edge.from.edges.remove(to);
        return true;
    }

    /**
     * Complexity O(1)
     */
    hasVertex(value: T){
        return this.vertices.get(value) !== null;
    }

    /**
     * Complexity O(1)
     */
    hasEdge(from: T, to: T){
        let fromVertex = this.vertices.get(from);
        return fromVertex !== null && fromVertex.edges.get(to) !== null;
    }

    /**
     * Complexity O(|V|+|E|)
     */
    depthFirstSearch(from: T, to: T): T[]{
        let fromVertex = this.vertices.get(from);
        if(!fromVertex){
            throw new Error("The vertex " + from + " doesn't exist");
        }
        let toVertex = this.vertices.get(to);
        if(!toVertex){
            throw new Error("The vertex " + to + " doesn't exist");
        }

        let visited = new HashSet<T>();
        return this.doDepthFirstSearch(fromVertex, toVertex, visited).toArray();
    }

    private doDepthFirstSearch(from: Vertex<T>, to: Vertex<T>, visited: HashSet<T>): LinkedList<T>{
        if(visited.contains(from.value)){
            return new LinkedList();
        }
        visited.add(from.value);

        if(from === to){
            return new LinkedList(from.value);
        }

        let edges = from.edges.toArray();
        for(let i = 0; i < edges.length; i++){
            if(edges[i].from === from){
                let next = edges[i].to;
                let edgeResult = this.doDepthFirstSearch(next, to, visited);
                if(edgeResult.size()){
                    let result = new LinkedList(from.value);
                    result.add(...edgeResult.toArray());
                    return result;
                }
            }

            if(edges[i].to === from && edges[i].bidirectional){
                let next = edges[i].from;
                let edgeResult = this.doDepthFirstSearch(next, to, visited);
                if(edgeResult.size()){
                    let result = new LinkedList(from.value);
                    result.add(...edgeResult.toArray());
                    return result;
                }
            }
        }

        return new LinkedList();
    }

    /**
     * Complexity O(|V|+|E|)
     */
    breadthFirstSearch(from: T, to: T): T[]{
        let fromVertex = this.vertices.get(from);
        if(!fromVertex){
            throw new Error("The vertex " + from + " doesn't exist");
        }
        let toVertex = this.vertices.get(to);
        if(!toVertex){
            throw new Error("The vertex " + to + " doesn't exist");
        }

        let visited = new HashSet<T>();
        let queue = new Queue(fromVertex);
        let result: T[] = [];
        while(queue.size() > 0){
            let vertex = queue.dequeue();
            if(visited.contains(vertex.value)){
                continue;
            }
            visited.add(vertex.value);
            result.push(vertex.value);

            if(vertex === toVertex){
                break;
            }

            let edges = vertex.edges.toArray();
            for(let i = 0; i < edges.length; i++){
                if(edges[i].from === vertex){
                    let next = edges[i].to;
                    queue.enqueue(next);
                }

                if(edges[i].to === vertex && edges[i].bidirectional){
                    let next = edges[i].from;
                    queue.enqueue(next);
                }
            }
        }
        return result;
    }
}

class Vertex<T extends number | string>{
    readonly value: T;
    readonly edges: HashMap<T, Edge<T>> = new HashMap();

    constructor(value: T){
        this.value = value;
    }
}

class Edge<T extends number | string>{
    readonly weight: number;
    readonly from: Vertex<T>;
    readonly to: Vertex<T>;
    readonly bidirectional: boolean;

    constructor(weight: number, from: Vertex<T>, to: Vertex<T>, bidirectional: boolean){
        this.weight = weight;
        this.from = from;
        this.to = to;
        this.bidirectional = bidirectional;

        from.edges.addOrUpdate(to.value, this);
        to.edges.addOrUpdate(from.value, this);
    }
}