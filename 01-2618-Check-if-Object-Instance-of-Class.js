
/*
https://leetcode.com/problems/check-if-object-instance-of-class/

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