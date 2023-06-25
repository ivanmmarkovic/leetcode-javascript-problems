
/*
https://leetcode.com/problems/check-if-object-instance-of-class/

Medium

Write a function that checks if a given value 
is an instance of a given class or superclass. 
For this problem, an object is considered an instance of a given class 
if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. 
For example, the value or the class could be undefined.

Runtime 113 ms Beats 33.77%
Memory 52.8 MB Beats 21.43%
*/

/**
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj == null || obj == undefined)
        return false;
    
    let proto = Object.getPrototypeOf(obj);

    while(proto != null){
        if(proto.constructor == classFunction) return true;
        proto = Object.getPrototypeOf(proto);
    }

    return false;
};


/**
 * checkIfInstanceOf(new Date(), Date); // true
 */