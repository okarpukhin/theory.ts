import { Graph } from '../src/Graph';
import { assert } from 'chai';

describe('Graph', () => {
    it('depthFirstSearch', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2);
        graph.addEdgeOrUpdate(2, 3);
        graph.addEdgeOrUpdate(3, 4);
        graph.addEdgeOrUpdate(3, 5);
        graph.addEdgeOrUpdate(4, 6);
        graph.addEdgeOrUpdate(6, 7);
        graph.addEdgeOrUpdate(5, 7);

        let dfs = graph.depthFirstSearch(1, 7);
        assert.deepEqual(dfs, [1,2,3,4,6,7]);
    });

    it('depthFirstSearch reversed', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2);
        graph.addEdgeOrUpdate(2, 3);
        graph.addEdgeOrUpdate(3, 4);
        graph.addEdgeOrUpdate(3, 5);
        graph.addEdgeOrUpdate(4, 6, 0, false);
        graph.addEdgeOrUpdate(6, 7);
        graph.addEdgeOrUpdate(5, 7);

        let dfs = graph.depthFirstSearch(6, 1);
        assert.deepEqual(dfs, [6,7,5,3,2,1]);
    });

    it('depthFirstSearch fail', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2);
        graph.addEdgeOrUpdate(2, 3, 0, false);
        graph.addEdgeOrUpdate(3, 4);
        graph.addEdgeOrUpdate(3, 5);
        graph.addEdgeOrUpdate(4, 6);
        graph.addEdgeOrUpdate(6, 7);
        graph.addEdgeOrUpdate(5, 7);

        assert.deepEqual(graph.depthFirstSearch(7,1), []);
    });

    it('breadthFirstSearch', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2);
        graph.addEdgeOrUpdate(2, 3);
        graph.addEdgeOrUpdate(3, 4);
        graph.addEdgeOrUpdate(3, 5);
        graph.addEdgeOrUpdate(4, 6);
        graph.addEdgeOrUpdate(5, 7);
        graph.addEdgeOrUpdate(6, 7);

        let dfs = graph.breadthFirstSearch(2, 7);
        assert.deepEqual(dfs, [2,1,3,4,5,6,7]);
    });

    it('breadthFirstSearch reversed', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2);
        graph.addEdgeOrUpdate(2, 3);
        graph.addEdgeOrUpdate(3, 4);
        graph.addEdgeOrUpdate(3, 5);
        graph.addEdgeOrUpdate(4, 6, 0, false);
        graph.addEdgeOrUpdate(5, 7);
        graph.addEdgeOrUpdate(6, 7);
        
        let dfs = graph.breadthFirstSearch(7, 1);
        assert.deepEqual(dfs, [7,5,6,3,2,4,1]);
    });

    it('breadthFirstSearch fail', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2);
        graph.addEdgeOrUpdate(2, 3, 0, false);
        graph.addEdgeOrUpdate(3, 4);
        graph.addEdgeOrUpdate(3, 5);
        graph.addEdgeOrUpdate(4, 6);
        graph.addEdgeOrUpdate(5, 7);
        graph.addEdgeOrUpdate(6, 7);

        assert.deepEqual(graph.breadthFirstSearch(7, 1), []);
    });

    it('isDirectedAcyclicGraph true', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2, 0, false);
        graph.addEdgeOrUpdate(2, 3, 0, false);
        graph.addEdgeOrUpdate(3, 4, 0, false);
        graph.addEdgeOrUpdate(3, 5, 0, false);
        graph.addEdgeOrUpdate(4, 6, 0, false);
        graph.addEdgeOrUpdate(5, 7, 0, false);
        graph.addEdgeOrUpdate(6, 7, 0, false);

        assert.isTrue(graph.isDirectedAcyclicGraph());
    });

    it('isDirectedAcyclicGraph false', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6,7);

        graph.addEdgeOrUpdate(1, 2, 0, false);
        graph.addEdgeOrUpdate(2, 3, 0, false);
        graph.addEdgeOrUpdate(3, 4, 0, false);
        graph.addEdgeOrUpdate(3, 5, 0, false);
        graph.addEdgeOrUpdate(4, 6, 0, false);
        graph.addEdgeOrUpdate(5, 7, 0, false);
        graph.addEdgeOrUpdate(6, 7, 0, false);

        graph.addEdgeOrUpdate(7, 1, 0, false);

        assert.isFalse(graph.isDirectedAcyclicGraph());
    });

    it('Dijkstra', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6);

        graph.addEdgeOrUpdate(1, 2, 10, false);
        graph.addEdgeOrUpdate(1, 3, 30, false);

        graph.addEdgeOrUpdate(2, 4, 8, false);
        graph.addEdgeOrUpdate(2, 5, 3, false);
    
        graph.addEdgeOrUpdate(3, 4, 2, true);
        graph.addEdgeOrUpdate(3, 6, 7, false);

        graph.addEdgeOrUpdate(4, 6, 12, false);

        graph.addEdgeOrUpdate(5, 4, 1, false);
        graph.addEdgeOrUpdate(5, 6, 20, false);

        assert.deepEqual(graph.Dijkstra(1).toDictionary(), { 2: 10, 3: 16, 4: 14, 5: 13, 6: 23 });
    });

    it('BellmanFord', () => {
        var graph = new Graph<number>();
        graph.addVertex(1,2,3,4,5,6);

        graph.addEdgeOrUpdate(1, 2, 10, false);
        graph.addEdgeOrUpdate(1, 3, 30, false);

        graph.addEdgeOrUpdate(2, 4, 8, false);
        graph.addEdgeOrUpdate(2, 5, 3, false);
    
        graph.addEdgeOrUpdate(3, 4, 2, true);
        graph.addEdgeOrUpdate(3, 6, 7, false);

        graph.addEdgeOrUpdate(4, 6, 12, false);

        graph.addEdgeOrUpdate(5, 4, 1, false);
        graph.addEdgeOrUpdate(5, 6, 20, false);

        assert.deepEqual(graph.BellmanFord(1).toDictionary(), { 2: 10, 3: 16, 4: 14, 5: 13, 6: 23 });
    });
});