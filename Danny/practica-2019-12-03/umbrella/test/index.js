'use strict'
const assert = require('chai').assert;
const validSolution =require('../src/umbrella.js');

suite('Umbrella Solution Validator', () =>{
    
    test('Only one umbrella', () => {
        assert.equal(validSolution(['cloudy', 'sunny', 'clear', 'cloudy', 'airy', 'sunny']), 1);
    });
    test('Only one umbrella case 2', () => {
        assert.equal(validSolution(     ['cloudy', 'sunny']      ), 1);
    });
    test('Case 3 ', () => {
        assert.equal(validSolution( ['cloudy', 'cloudy', 'clear', 'cloudy', 'airy', 'cloudy']), 3);
    });
    test('all days', () => {
        assert.equal(validSolution( ['cloudy', 'cloudy', 'cloudy', 'cloudy', 'cloudy', 'cloudy']), 1);
    });
    test('Case 5', () => {
        assert.equal(validSolution( ['cloudy', 'cloudy', 'clear', 'cloudy', 'airy', 'cloudy', 'sunny'] ), 3);
    });
    test('Case 0', () => {
        assert.equal(validSolution( ['sunny', 'sunny', 'clear', 'sunny', 'airy', 'sunny']), 0);
    });
    test('Empty  Case ', () => {
        assert.equal(validSolution( [] ), 0);
    });
    test('Case 6', () => {
        assert.equal(validSolution( ['rainy', 'sunny', 'rainy', 'sunny', 'rainy', 'airy', 'rainy']), 4);
    });
    test('Case 7', () => {
        assert.equal(validSolution( ['sunny ', 'rainy', 'sunny', 'rainy', 'sunny', 'rainy', 'airy', 'rainy']), 4);
    });

});

