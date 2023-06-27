/*
https://leetcode.com/problems/counter/

Easy

Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more 
than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

Runtime 65ms Beats 14.15%
Memory 41.9 MB Beats 51.46%
*/


/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        let v = n;
        n++;
        return v;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */