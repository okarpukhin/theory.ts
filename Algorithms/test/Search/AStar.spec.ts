import { AStarToMap, Point } from "../../src/Search/AStar";
import { Array2D } from "../../../DataStructures/src/Array2D";
import { assert } from 'chai';

describe('AStar', function() {
    it('AStarToMap', () => {
        let map = new Array2D<boolean>(5, 7);
        map.setValues([
            0, 0, 0, 0, 0, 1, 0,
            0, 0, 1, 0, 0, 1, 0,
            0, 1, 1, 1, 0, 1, 0,
            0, 0, 0, 1, 0, 0, 0,
            0, 0, 0, 1, 0, 0, 0,
        ].map(f=>f === 1));
        let actual = AStarToMap(map, { x: 2, y: 4 }, { x: 6, y: 0 });
        let expected = [ 
            { x: 2, y: 4 },{ x: 1, y: 3 },{ x: 0, y: 2 },{ x: 1, y: 1 },
            { x: 2, y: 0 },{ x: 3, y: 1 },{ x: 4, y: 2 },{ x: 5, y: 3 },
            { x: 6, y: 2 },{ x: 6, y: 1 },{ x: 6, y: 0 } 
        ];

        assert.deepEqual(actual.value, expected);
    });
});