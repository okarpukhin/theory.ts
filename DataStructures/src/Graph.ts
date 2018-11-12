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

        new Edge(weight, fromVertex, toVertex);
        if(bidirectional){
            new Edge(weight, toVertex, fromVertex);
        }
    }

    /**
     * Complexity O(n)
     */
    removeVertex(value: T):boolean{
        let vertex = this.vertices.get(value);
        if(!vertex){
            return false;
        }
        this.vertices.toArray().forEach(vertex => {
            vertex.edges.remove(value);
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
        return fromVertext.edges.remove(to);
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
            let edgeResult = this.doDepthFirstSearch(edges[i].to, to, visited);
            if(edgeResult.size()){
                let result = new LinkedList(from.value);
                result.add(...edgeResult.toArray());
                return result;
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
                return result;
            }

            let edges = vertex.edges.toArray();
            for(let i = 0; i < edges.length; i++){
                queue.enqueue(edges[i].to);
            }
        }
        return [];
    }

    isDirectedAcyclicGraph():boolean{
        let vertices = this.vertices.toArray();
        for(let i = 0; i < vertices.length; i++){
            let hasPath = vertices[i].edges.toArray()
            .map(edge => edge.to)
            .some(to => this.depthFirstSearch(to.value, vertices[i].value).length > 0);
            
            if(hasPath){
                return false;
            }
        }
        return true;
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

    constructor(weight: number, from: Vertex<T>, to: Vertex<T>){
        this.weight = weight;
        this.from = from;
        this.to = to;

        from.edges.addOrUpdate(to.value, this);
    }
}