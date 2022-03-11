import { assert } from 'chai';
import {inOrderTraversal, preOrderTraversal, postOrderTraversal} from '../tree.mjs'

let input = [ [5,7,2131345646,9,4,13,12415486], [6,18,864,24,1,0,2], [8,4,1,32,11] ];

let correctPreorders = [ [5,4,7,2131345646,9,13,12415486], [6,1,0,2,18,864,24], [8,4,1,32,11] ];
let correctInorders = [ [4,5,7,9,13,12415486,2131345646], [0,1,2,6,18,24,864], [1,4,8,11,32] ];
let correctPostorders = [ [4,12415486,13,9,2131345646,7,5], [0,2,1,24,864,18,6], [1,4,11,32,8] ];
const func = (a,b) => a < b;

for(var i = 0; i < 3; i++){
    describe('Testing in order traversal on input: ' + input[i], function(){
        let result = inOrderTraversal(func, input[i])
        let correctResult = correctInorders[i]
        it('traversal result should match expected result: ' + correctResult, function(){
            assert.deepEqual(result, correctResult);
        })
    })

    describe('Testing pre order traversal on input: ' + input[i], function(){
        let result = preOrderTraversal(func, input[i])
        let correctResult = correctPreorders[i]
        it('traversal result should match expected result: ' + correctResult, function(){
            assert.deepEqual(result, correctResult);
        })
    })

    describe('Testing post order traversal on input: ' + input[i], function(){
        let result = postOrderTraversal(func, input[i])
        let correctResult = correctPostorders[i]
        it('traversal result should match expected result: ' + correctResult, function(){
            assert.deepEqual(result, correctResult);
        })
    })
}