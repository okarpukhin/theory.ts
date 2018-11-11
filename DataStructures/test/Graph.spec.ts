import { Graph } from '../src/Graph';
import { assert } from 'chai';

describe('Graph', () => {
    it('depthFirstSearch true', () => {
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

    it('depthFirstSearch false', () => {
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

    it('breadthFirstSearch true', () => {
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

    it('breadthFirstSearch false', () => {
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
});