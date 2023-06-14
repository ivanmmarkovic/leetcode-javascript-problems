/*
https://leetcode.com/problems/memoize/

Runtime 473 ms Beats 6.23%
Memory 103.4 MB Beats 89.79%
*/

/**
 * @param {Function} fn
 */
function memoize(fn) {
    let mem = {};
    return function(...args) {
        if (mem[args] !== undefined) return mem[args];
        mem[args] = fn(...args);
        return mem[args];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */