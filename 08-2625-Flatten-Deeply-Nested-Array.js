/*
https://leetcode.com/problems/flatten-deeply-nested-array/

Medium

Given a multi-dimensional array arr and a depth n, 
return a flattened version of that array.
A multi-dimensional array is a recursive data structure 
that contains integers or other multi-dimensional arrays.
A flattened array is a version of that array with 
some or all of the sub-arrays removed and replaced 
with the actual elements in that sub-array. 
This flattening operation should only be done 
if the current depth of nesting is less than n. 
The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

Runtime 183 ms Beats 45.38%
Memory 101.1 MB Beats 27.14%

*/

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {

    if(n == 0) return arr;
    
    let r = [];

    for(let a of arr){
        if(Array.isArray(a)){
            r.push(...flat(a, n - 1));
        }
        else {
            r.push(a);
        }
    }

    return r;

};