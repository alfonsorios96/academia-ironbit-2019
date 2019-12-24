'use strict'
const assert = require('chai').assert;
const validSolution =require('../src/simpsons.js');

suite('Join the last simpsons', () =>{
    
    test('Return Empty', () => {
        const empty = [];
        assert.deepEqual(validSolution(empty),'');
    });

    test('Return Only one', () => {
        const single = [{name: 'Bart'}];
        assert.equal(validSolution(single),'Bart');
    });
    test('Return odd and even', () => {
        const several = [{name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'} ];
        assert.equal(validSolution(several),'Lisa, Maggie & Homer');
    });
    test('Return odd and even in more elements', () => {
        const severalOdd = [{name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Ned Flanders'}, {name: 'MilHouse'} ];
        assert.equal(validSolution(severalOdd),'Lisa, Maggie, Homer, Ned Flanders & MilHouse');
    });   
});
