
/*
https://leetcode.com/problems/array-prototype-last/

Runtime 57 ms Beats 57.22%
Memory 41.8 MB Beats 68.11%
*/



Array.prototype.last = function() {
    if(!(this instanceof Array)) return -1;
    if(this.length == 0) return -1;
    return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */