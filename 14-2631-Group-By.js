/*
https://leetcode.com/problems/group-by/

Easy

Write code that enhances all arrays such that you can call the array.groupBy(fn) 
method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) 
and each value is an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. 
Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.



Runtime 136 ms Beats 86.5%
Memory 60.5 MB Beats 98.29%

*/

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    let group = {};

    for(let i = 0; i < this.length; i++){
        let v = fn(this[i]);
        if(v in group)
            group[v].push(this[i]);
        else
            group[v] = [this[i]];
    }

    return group;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */


