'use strict'
const assert = require('chai').assert;
const validSolution =require('../src/luis.js');

suite('Find the missing letter', () =>{
    
    test('Find the las letter', () => {
        
        const cadUser = ["b","c","d","f"];
        assert.equal(validSolution(cadUser),'e');
    });
    test('Find the second letter', () => {
        
        const cadUser = ['a', 'c', 'd', 'e', 'f'];
        assert.equal(validSolution(cadUser),'b');
    });
    test('Find the thirth letter', () => {
        
        const cadUser = ['a', 'b', 'c', 'e', 'f'];
        assert.equal(validSolution(cadUser),'d');
    });
    test('Find the letter i', () => {
        
        const cadUser = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
        assert.equal(validSolution(cadUser),'i');
    });
    test('Find the las letter', () => {
        
        const cadUser = ['as', 'b', 'c', 'd', 'f'];
        assert.equal(validSolution(cadUser),'Estas introduciendo letras de mas');
    });
    test('Numbers is not allowed', () => {
        
        const cadUser = ['a', 'b', 'c', 'd', 6];
        assert.equal(validSolution(cadUser),'Alguno no  pertenece al "abecedario"');
    });
    

   
});
